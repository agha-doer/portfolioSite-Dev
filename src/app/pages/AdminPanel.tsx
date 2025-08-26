"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { supabase } from '../../lib/supabase';
import { 
  FileText, 
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Image,
  Calendar,
  Tag,
  Globe,
  Save,
  X
} from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: any;
  excerpt: string;
  created_at: string;
  featured_image: string;
  tags: string[];
  category: string;
  status: string;
}

interface BlogGallery {
  id: string;
  blog_id: string;
  image_url: string;
  caption: string;
  created_at: string;
}

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blogGalleries, setBlogGalleries] = useState<BlogGallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    excerpt: '',
    featured_image: '',
    tags: '',
    category: '',
    status: 'draft'
  });

  const tabs = [
    { id: 'blogs', label: 'Blogs', icon: FileText },
    { id: 'gallery', label: 'Blog Gallery', icon: Image },
  ];

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      console.log('Fetching blogs...');
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      console.log('Blogs fetch response:', { data, error });
      if (error) throw error;
      setBlogs(data || []);
    } catch (error: any) {
      console.error('Error fetching blogs:', error);
      console.error('Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
    }
  };

  // Fetch blog galleries
  const fetchBlogGalleries = async () => {
    try {
      console.log('Fetching blog galleries...');
      const { data, error } = await supabase
        .from('blog_gallery')
        .select('*')
        .order('created_at', { ascending: false });

      console.log('Blog galleries fetch response:', { data, error });
      if (error) throw error;
      setBlogGalleries(data || []);
    } catch (error: any) {
      console.error('Error fetching blog galleries:', error);
      console.error('Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      
      // Test Supabase connection first
      try {
        console.log('Testing Supabase connection...');
        const { data, error } = await supabase.from('blogs').select('count').limit(1);
        console.log('Supabase connection test:', { data, error });
        
        if (error) {
          console.error('Supabase connection failed:', error);
          setConnectionError(`Database connection failed: ${error.message}`);
          setLoading(false);
          return;
        }
      } catch (error: any) {
        console.error('Supabase connection test failed:', error);
        setConnectionError(`Database connection failed: ${error.message || 'Unknown error'}`);
        setLoading(false);
        return;
      }
      
      await Promise.all([fetchBlogs(), fetchBlogGalleries()]);
      setLoading(false);
    };
    loadData();
  }, []);

  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log('Form data:', formData);
      
      const blogData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        description: formData.description ? JSON.parse(formData.description) : null
      };

      console.log('Processed blog data:', blogData);

      if (editingBlog) {
        console.log('Updating blog with ID:', editingBlog.id);
        const { data, error } = await supabase
          .from('blogs')
          .update(blogData)
          .eq('id', editingBlog.id)
          .select();
        
        console.log('Update response:', { data, error });
        if (error) throw error;
      } else {
        console.log('Creating new blog');
        const { data, error } = await supabase
          .from('blogs')
          .insert([blogData])
          .select();
        
        console.log('Insert response:', { data, error });
        if (error) throw error;
      }

      setShowBlogForm(false);
      setEditingBlog(null);
      setFormData({
        title: '',
        slug: '',
        description: '',
        excerpt: '',
        featured_image: '',
        tags: '',
        category: '',
        status: 'draft'
      });
      fetchBlogs();
    } catch (error: any) {
      console.error('Error saving blog:', error);
      console.error('Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      
      // Show user-friendly error message
      alert(`Error saving blog: ${error.message || 'Unknown error occurred'}`);
    }
  };

  const handleEditBlog = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      slug: blog.slug,
      description: typeof blog.description === 'string' ? blog.description : JSON.stringify(blog.description),
      excerpt: blog.excerpt || '',
      featured_image: blog.featured_image || '',
      tags: blog.tags?.join(', ') || '',
      category: blog.category || '',
      status: blog.status || 'draft'
    });
    setShowBlogForm(true);
  };

  const handleDeleteBlog = async (id: string) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      try {
        const { error } = await supabase
          .from('blogs')
          .delete()
          .eq('id', id);
        
        if (error) throw error;
        fetchBlogs();
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button 
                onClick={() => setShowBlogForm(true)}
                className="bg-gradient-primary"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Blog
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-gradient-primary text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Blogs Tab */}
        {activeTab === 'blogs' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {connectionError ? (
              <div className="text-center py-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                  <div className="text-red-600 font-semibold mb-2">Connection Error</div>
                  <p className="text-red-600 text-sm mb-4">{connectionError}</p>
                  <p className="text-gray-600 text-sm">
                    Please check your Supabase configuration and ensure the NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable is set correctly.
                  </p>
                </div>
              </div>
            ) : loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="mt-2 text-gray-600">Loading blogs...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                  <Card key={blog.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant={blog.status === 'published' ? 'default' : 'secondary'}>
                        {blog.status}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" onClick={() => handleEditBlog(blog)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => handleDeleteBlog(blog.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    {blog.featured_image && (
                      <img 
                        src={blog.featured_image} 
                        alt={blog.title}
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                    )}
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{blog.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{blog.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(blog.created_at).toLocaleDateString()}
                      </div>
                      {blog.category && (
                        <div className="flex items-center">
                          <Tag className="w-4 h-4 mr-1" />
                          {blog.category}
                        </div>
                      )}
                    </div>
                    
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {blog.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                        {blog.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            +{blog.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Blog Gallery Tab */}
        {activeTab === 'gallery' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Blog Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogGalleries.map((gallery) => (
                  <div key={gallery.id} className="border rounded-lg overflow-hidden">
                    <img 
                      src={gallery.image_url} 
                      alt={gallery.caption || 'Blog image'}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <p className="text-sm text-gray-600">{gallery.caption}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(gallery.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}
      </div>

      {/* Blog Form Modal */}
      {showBlogForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {editingBlog ? 'Edit Blog' : 'Create New Blog'}
              </h2>
              <Button variant="ghost" onClick={() => setShowBlogForm(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <form onSubmit={handleSubmitBlog} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Input
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="description">Description (JSON)</Label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                  placeholder='{"content": "Your blog content here"}'
                />
              </div>

              <div>
                <Label htmlFor="featured_image">Featured Image URL</Label>
                <Input
                  id="featured_image"
                  value={formData.featured_image}
                  onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="tag1, tag2, tag3"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setShowBlogForm(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-gradient-primary">
                  <Save className="w-4 h-4 mr-2" />
                  {editingBlog ? 'Update Blog' : 'Create Blog'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
