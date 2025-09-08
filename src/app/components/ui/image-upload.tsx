'use client'

import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Image as ImageIcon, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './button';
// Uploads are routed through our server API to avoid client-side signing

interface ImageUploadProps {
  onImageUpload: (url: string) => void;
  currentImage?: string;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ 
  onImageUpload, 
  currentImage, 
  className = "" 
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = useCallback(async (file: File) => {
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      setError('Please select a valid image file (JPEG, PNG, WebP, or GIF)');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    setIsUploading(true);
    setError(null);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 100);

      // Send to server API for secure upload
      const form = new FormData();
      form.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: form,
      });

      const json = await res.json();

      if (!res.ok || !json?.success) {
        throw new Error(json?.error || 'Upload failed');
      }

      clearInterval(progressInterval);
      setUploadProgress(100);
      
      onImageUpload(json.url);
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
      
    } catch (err: any) {
      console.error('Upload error:', err);
      
      setError(err?.message || 'Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  }, [onImageUpload]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files[0]);
    }
  }, [handleUpload]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleUpload(e.target.files[0]);
    }
  };

  const removeImage = () => {
    onImageUpload('');
    setError(null);
    setSuccess(false);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Current Image Display */}
      {currentImage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group"
        >
          <div className="relative overflow-hidden rounded-lg border-2 border-dashed border-gray-300">
            <img
              src={currentImage}
              alt="Featured"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                             <Button
                 type="button"
                 variant="destructive"
                 size="sm"
                 onClick={(e) => {
                   e.preventDefault();
                   e.stopPropagation();
                   removeImage();
                 }}
                 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
               >
                <X className="w-4 h-4 mr-2" />
                Remove
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 ${
                  dragActive 
          ? 'border-red-500 bg-red-50 scale-105' 
          : 'border-gray-300 hover:border-gray-400'
        } ${isUploading ? 'pointer-events-none' : ''}`}
                 onDragEnter={(e) => {
           e.preventDefault();
           e.stopPropagation();
           handleDrag(e);
         }}
         onDragLeave={(e) => {
           e.preventDefault();
           e.stopPropagation();
           handleDrag(e);
         }}
         onDragOver={(e) => {
           e.preventDefault();
           e.stopPropagation();
           handleDrag(e);
         }}
         onDrop={(e) => {
           e.preventDefault();
           e.stopPropagation();
           handleDrop(e);
         }}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-800 opacity-0"
            animate={{
              opacity: dragActive ? 0.1 : 0,
              scale: dragActive ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-700 opacity-0"
            animate={{
              opacity: isUploading ? 0.1 : 0,
              scale: isUploading ? 1.05 : 1,
            }}
            transition={{ duration: 0.5, repeat: isUploading ? Infinity : 0, repeatType: "reverse" }}
          />
        </div>

        <div className="relative z-10 text-center">
          {/* Upload Icon */}
          <motion.div
            animate={{
              scale: dragActive ? 1.2 : 1,
              rotate: isUploading ? 360 : 0,
            }}
            transition={{ 
              scale: { duration: 0.2 },
              rotate: { duration: 2, repeat: isUploading ? Infinity : 0, ease: "linear" }
            }}
            className="mx-auto w-16 h-16 mb-4"
          >
            {isUploading ? (
              <div className="w-full h-full bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-white animate-spin" />
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg">
                <Upload className="w-8 h-8 text-white" />
              </div>
            )}
          </motion.div>

          {/* Upload Text */}
          <motion.h3
            animate={{ scale: dragActive ? 1.05 : 1 }}
            className="text-lg font-semibold text-gray-900 mb-2"
          >
            {isUploading ? 'Uploading...' : 'Upload Featured Image'}
          </motion.h3>
          
          <p className="text-gray-600 mb-4">
            {isUploading 
              ? 'Please wait while we upload your image to Wasabi S3'
              : 'Drag and drop an image here, or click to select'
            }
          </p>

          {/* Progress Bar */}
          {isUploading && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${uploadProgress}%` }}
              className="h-2 bg-gradient-to-r from-red-600 to-red-800 rounded-full mb-4"
            />
          )}

          {/* Upload Button */}
          {!isUploading && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                                           <Button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ImageIcon className="w-5 h-5 mr-2" />
                Choose Image
              </Button>
            </motion.div>
          )}

          {/* File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>

        {/* Floating Particles Effect */}
        <AnimatePresence>
          {dragActive && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: Math.random() * 300 - 150,
                    y: Math.random() * 300 - 150
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Status Messages */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg"
          >
            <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-red-700">{error}</span>
                         <Button
               type="button"
               variant="ghost"
               size="sm"
               onClick={(e) => {
                 e.preventDefault();
                 e.stopPropagation();
                 setError(null);
               }}
               className="ml-auto text-red-500 hover:text-red-700"
             >
              <X className="w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg"
          >
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-green-700">Image uploaded successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Info */}
      <div className="text-xs text-gray-500 text-center">
        <p>Supported formats: JPEG, PNG, WebP, GIF</p>
        <p>Maximum file size: 5MB</p>
        {/* <p>Images are stored securely on Wasabi S3</p> */}
      </div>
    </div>
  );
};

export default ImageUpload;
