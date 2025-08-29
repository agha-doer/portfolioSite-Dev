import { NextRequest, NextResponse } from 'next/server';
import AWS from 'aws-sdk';
import { generateFileName } from '../../../lib/wasabi-config';

// Configure AWS SDK for server-side
const s3 = new AWS.S3({
  accessKeyId: 'I3F4Z33CGMZSDKEH33NV',
  secretAccessKey: process.env.WASABI_SECRET_KEY || '',
  region: 'ap-southeast-1',
  endpoint: 'https://s3.ap-southeast-1.wasabisys.com',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
  // Disable automatic credential detection
  credentials: {
    accessKeyId: 'I3F4Z33CGMZSDKEH33NV',
    secretAccessKey: process.env.WASABI_SECRET_KEY || ''
  }
});

export async function POST(request: NextRequest) {
  try {
    // Check if credentials are configured
    if (!process.env.WASABI_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Wasabi credentials not configured. Please set WASABI_SECRET_KEY in your .env.local file.' },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 5MB' },
        { status: 400 }
      );
    }

    const fileName = generateFileName(file.name);
    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadParams = {
      Bucket: 'blogs01',
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
      ACL: 'public-read',
      Metadata: {
        'original-name': file.name,
        'upload-date': new Date().toISOString()
      }
    };

    const result = await s3.upload(uploadParams).promise();

    // Generate a presigned URL for the uploaded image (valid for 1 hour)
    const presignedUrl = s3.getSignedUrl('getObject', {
      Bucket: 'blogs01',
      Key: fileName,
      Expires: 3600 // 1 hour in seconds
    });

    return NextResponse.json({
      success: true,
      url: presignedUrl,
      fileName: fileName,
      permanentUrl: result.Location // Keep the permanent URL for reference
    });

  } catch (error: any) {
    console.error('Upload error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Upload failed. Please try again.';
    
    if (error.code === 'CredentialsError') {
      errorMessage = 'Wasabi credentials not configured. Please check your environment variables.';
    } else if (error.code === 'SignatureDoesNotMatch') {
      errorMessage = 'Invalid credentials. Please check your Wasabi access key and secret key.';
    } else if (error.code === 'NoSuchBucket') {
      errorMessage = 'Wasabi bucket not found. Please check your bucket configuration.';
    } else if (error.code === 'AccessDenied') {
      errorMessage = 'Access denied. Please check your Wasabi permissions.';
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
