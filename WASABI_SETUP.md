# Wasabi S3 Integration Setup

## Configuration

This project uses Wasabi S3 for image storage. You need to configure the following:

### 1. Environment Variables

Create a `.env.local` file in your project root and add:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Wasabi S3 Configuration
NEXT_PUBLIC_WASABI_SECRET_KEY=your_wasabi_secret_key_here
```

### 2. Wasabi Credentials

The following credentials are already configured:

- **Access Key ID**: `M70GG8BZL7IFAEUYPWLD`
- **Region**: `ap-southeast-1` (Singapore)
- **Bucket**: `blogs01`
- **Endpoint**: `https://s3.ap-southeast-1.wasabisys.com`

### 3. Required Setup

1. **Get your Wasabi Secret Key** from your Wasabi account
2. **Add it to `.env.local`** as `NEXT_PUBLIC_WASABI_SECRET_KEY`
3. **Ensure bucket permissions** are set to allow public read access
4. **Configure CORS** on your Wasabi bucket if needed

### 4. Bucket CORS Configuration (if needed)

If you encounter CORS issues, add this CORS configuration to your Wasabi bucket:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": []
  }
]
```

## Features

- ✅ **Drag & Drop Upload**
- ✅ **File Type Validation** (JPEG, PNG, WebP, GIF)
- ✅ **File Size Validation** (max 5MB)
- ✅ **Progress Tracking**
- ✅ **Error Handling**
- ✅ **Success Notifications**
- ✅ **Crazy UI Animations**
- ✅ **Secure Storage** on Wasabi S3

## Usage

The image upload component will automatically:
1. Generate unique file names
2. Upload to Wasabi S3
3. Return the public URL
4. Display upload progress
5. Show success/error messages

## Security

- Images are stored with `public-read` ACL
- File names are randomized to prevent conflicts
- File types and sizes are validated
- Original file names are preserved in metadata
