# 🔧 Wasabi Bucket Setup Guide

## Current Issue
The image upload is working, but you're getting a **403 Forbidden** error when trying to access the uploaded images. This means the bucket doesn't have public read permissions.

## ✅ Quick Fix

### Step 1: Configure Bucket Public Access

1. **Log into your Wasabi Console**
   - Go to https://console.wasabisys.com
   - Sign in with your account

2. **Navigate to your bucket**
   - Click on **"Buckets"** in the left sidebar
   - Find and click on your bucket named **`blogs01`**

3. **Enable Public Access**
   - Click on the **"Settings"** tab
   - Scroll down to **"Public Access"** section
   - Click **"Edit"** next to "Public Access"
   - **Enable** "Public Read" access
   - Click **"Save"**

### Step 2: Configure Bucket Policy (Alternative Method)

If the above doesn't work, you can also set a bucket policy:

1. **Go to Bucket Policy**
   - In your bucket settings, click on **"Bucket Policy"**
   - Click **"Edit"**

2. **Add this policy** (replace `YOUR_BUCKET_NAME` with `blogs01`):
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::blogs01/*"
    }
  ]
}
```

3. **Save the policy**

### Step 3: Test the Image URL

After configuring public access, test your uploaded image URL:
```
https://s3.ap-southeast-1.wasabisys.com/blogs01/blog-images/1756218168607-m5dpn3ydjok.jpeg
```

## 🔍 Verification

After setup, you should see:
- ✅ No more 403 Forbidden errors
- ✅ Images load properly in the browser
- ✅ Images display correctly in your admin panel

## 🚨 Security Note

Making a bucket public means anyone with the URL can access the files. This is typically fine for blog images, but consider:
- Using signed URLs for sensitive content
- Implementing proper access controls if needed
- Regularly reviewing what's uploaded to the bucket

## 📞 Need Help?

If you're still getting 403 errors:
1. **Check bucket name**: Ensure it's exactly `blogs01`
2. **Wait a few minutes**: Changes can take a moment to propagate
3. **Clear browser cache**: Try opening the URL in an incognito window
4. **Verify region**: Make sure you're using the correct region (`ap-southeast-1`)

## 🎯 Expected Result

Once configured correctly:
- ✅ Images upload successfully
- ✅ Images are publicly accessible via URL
- ✅ No 403 Forbidden errors
- ✅ Images display in your blog admin panel
