# 🚨 Wasabi S3 Setup Required

## Current Issue
The application is showing a "Missing credentials" error because the Wasabi S3 credentials are not configured.

## 🔧 Quick Fix

### Step 1: Create `.env.local` file
Create a file named `.env.local` in your project root (same level as `package.json`) and add:

```env
# Supabase Configuration (if you have it)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Wasabi S3 Configuration - REQUIRED
# For client-side (if needed)
NEXT_PUBLIC_WASABI_SECRET_KEY=your_actual_wasabi_secret_key_here

# For server-side API routes (more secure)
WASABI_SECRET_KEY=your_actual_wasabi_secret_key_here
```

### Step 2: Get Your Wasabi Secret Key
1. Log into your Wasabi account
2. Go to **Access Keys** section
3. Find your secret key for access key: `I3F4Z33CGMZSDKEH33NV`
4. Copy the secret key and replace `your_actual_wasabi_secret_key_here` in both environment variables in the `.env.local` file

### Step 3: Restart Development Server
After creating the `.env.local` file, restart your development server:

```bash
npm run dev
```

## 📋 Current Configuration
- **Access Key ID**: `I3F4Z33CGMZSDKEH33NV` ✅ (Already configured)
- **Region**: `ap-southeast-1` (Singapore) ✅ (Already configured)
- **Bucket**: `blogs01` ✅ (Already configured)
- **Secret Key**: ❌ **MISSING** - You need to add this

## 🔍 Verification
After setup, you should see:
- ✅ No more "Missing credentials" errors
- ✅ Image upload works properly
- ✅ Files upload to Wasabi S3 successfully

## 🆘 If You Don't Have Wasabi Account
If you don't have a Wasabi account or want to test without it:

1. **Option 1**: Create a free Wasabi account at https://wasabi.com
2. **Option 2**: Use a different image upload service
3. **Option 3**: Temporarily disable image upload feature

## 📞 Need Help?
- Check your Wasabi account dashboard
- Verify the access key and secret key are correct
- Ensure the bucket `blogs01` exists in your Wasabi account
- Make sure the bucket has public read permissions

## 🎯 Expected Result
Once configured correctly, the image upload will:
- ✅ Accept drag & drop files
- ✅ Validate file types and sizes
- ✅ Show upload progress
- ✅ Store images in Wasabi S3
- ✅ Return public URLs for the uploaded images

## 🔧 Additional Setup Required

After setting up credentials, you also need to configure bucket permissions. See `WASABI_BUCKET_SETUP.md` for instructions on making your bucket publicly readable.
