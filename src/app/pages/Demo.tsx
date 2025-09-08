"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import AdminPanel from './AdminPanel';
import AuthModal from '../components/ui/auth-modal';
import { 
  Shield, 
  Users, 
  Settings, 
  Lock, 
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

const Demo = () => {
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const features = [
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'Multi-factor authentication with social login options',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user management with role-based access',
      color: 'text-green-500'
    },
    {
      icon: Settings,
      title: 'System Settings',
      description: 'Advanced configuration options for system administration',
      color: 'text-purple-500'
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Granular permissions and security controls',
      color: 'text-orange-500'
    }
  ];

  const handleOpenAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  if (showAdminPanel) {
    return (
      <div className="min-h-screen">
        <div className="bg-white border-b p-4">
          <Button 
            variant="outline" 
            onClick={() => setShowAdminPanel(false)}
            className="mb-4"
          >
            ← Back to Demo
          </Button>
        </div>
        <AdminPanel />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel Demo</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => handleOpenAuth('signin')}
              >
                Sign In
              </Button>
              <Button 
                className="bg-gradient-primary"
                onClick={() => handleOpenAuth('signup')}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Modern <span className="text-gradient-primary">Admin Panel</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A comprehensive admin dashboard with user management, project tracking, 
              and system configuration. Built with React, TypeScript, and modern UI components.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary text-lg px-8 py-4"
                onClick={() => setShowAdminPanel(true)}
              >
                Launch Admin Panel
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => handleOpenAuth('signup')}
              >
                Try Authentication
              </Button>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Demo Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Admin Panel Preview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Admin Panel</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Experience a fully functional admin dashboard with real-time data, 
                  user management, project tracking, and system settings.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Dashboard with analytics</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">User management system</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Project tracking</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">System configuration</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-primary"
                  onClick={() => setShowAdminPanel(true)}
                >
                  Launch Admin Panel
                </Button>
              </Card>
            </motion.div>

            {/* Authentication Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Authentication</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Secure authentication system with social login options, 
                  form validation, and modern UI design.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Email & password login</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Social authentication</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Form validation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Responsive design</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleOpenAuth('signin')}
                  >
                    Sign In Demo
                  </Button>
                  <Button 
                    className="w-full bg-gradient-primary"
                    onClick={() => handleOpenAuth('signup')}
                  >
                    Sign Up Demo
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultMode={authMode}
      />
    </div>
  );
};

export default Demo;
