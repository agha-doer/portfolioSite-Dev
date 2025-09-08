# Environment Setup Guide

## 🚨 Current Issue
The app is failing to start because the Supabase API key is missing. Here's how to fix it:

## 🔧 Quick Fix

### 1. Create Environment File
Create a file named `.env.local` in your project root (same level as `package.json`):

```bash
# Windows
echo NEXT_PUBLIC_SUPABASE_URL=https://kthybhkhokzvkelgagbw.supabase.co > .env.local
echo NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here >> .env.local

# Or manually create .env.local with this content:
```

### 2. Add This Content to `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://kthybhkhokzvkelgagbw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 3. Get Your Supabase Anon Key
1. Go to your Supabase project: https://supabase.com/dashboard/project/kthybhkhokzvkelgagbw
2. Navigate to **Settings** → **API**
3. Copy the **"anon" public key** (not the service_role key)
4. Replace `your_supabase_anon_key_here` in your `.env.local` file

### 4. Restart Your Development Server
```bash
npm run dev
```

## 🔍 Troubleshooting

### If you don't have access to the Supabase project:
1. Create a new Supabase project at https://supabase.com
2. Get the URL and anon key from your new project
3. Update the `.env.local` file with your new project details

### If you want to test without Supabase:
The app will now work with a fallback key, but authentication features won't function properly.

## 📁 File Structure
Your project should look like this:
```
dev-craft/
├── .env.local          ← Create this file
├── package.json
├── src/
└── ...
```

## ✅ Verification
After setting up the environment variables:
1. The app should start without errors
2. The login button should work
3. You should see no console warnings about missing API keys
