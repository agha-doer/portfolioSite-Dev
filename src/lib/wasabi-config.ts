import AWS from 'aws-sdk';

// Wasabi S3 Configuration
export const wasabiConfig = {
  accessKeyId: 'I3F4Z33CGMZSDKEH33NV',
  secretAccessKey: process.env.WASABI_SECRET_KEY || process.env.NEXT_PUBLIC_WASABI_SECRET_KEY || '',
  region: 'ap-southeast-1',
  endpoint: 'https://s3.ap-southeast-1.wasabisys.com',
  bucketName: 'blogs01',
  bucketUrl: 'https://s3.ap-southeast-1.wasabisys.com/blogs01'
};

// Check if credentials are properly configured
if (!wasabiConfig.secretAccessKey || wasabiConfig.secretAccessKey === 'your_actual_wasabi_secret_key_here') {
  console.warn('⚠️ Wasabi credentials not configured! Please set WASABI_SECRET_KEY in your .env.local file');
}

// Create S3 instance
export const s3 = new AWS.S3({
  accessKeyId: wasabiConfig.accessKeyId,
  secretAccessKey: wasabiConfig.secretAccessKey,
  region: wasabiConfig.region,
  endpoint: wasabiConfig.endpoint,
  s3ForcePathStyle: true, // Required for Wasabi
  signatureVersion: 'v4'
});

// Helper function to generate unique file names
export const generateFileName = (originalName: string): string => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 15);
  const extension = originalName.split('.').pop();
  return `blog-images/${timestamp}-${randomString}.${extension}`;
};

// Helper function to get full URL
export const getImageUrl = (fileName: string): string => {
  return `${wasabiConfig.bucketUrl}/${fileName}`;
};
