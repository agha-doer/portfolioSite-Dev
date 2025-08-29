'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { BookOpen, Calendar, User, ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

interface BlogPost {
  id: number;
  title: string;
  description: string;
  featured_image: string;
  created_at: string;
  updated_at: string;
  author?: string;
  category?: string;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Blog - DevCraft Studios';
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .neq('status', 'draft') // Exclude draft blogs
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to load blog posts');
        return;
      }

      setBlogPosts(data || []);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories from blog posts
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category || '').filter(Boolean)))];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Get posts to display (for pagination)
  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  // Calculate read time based on content length
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // If a post is selected, show the post detail view
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <ScrollProgress />
        <Navigation />
        
        <main>
          {/* Blog Post Detail */}
          <section className="pt-32 pb-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <motion.button
                  onClick={handleBackToList}
                  className="flex items-center space-x-2 text-rosewood-600 hover:text-rosewood-700 font-medium mb-8 transition-colors"
                  whileHover={{ x: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Blog</span>
                </motion.button>

                {/* Post Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-12"
                >
                  <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
                    <img 
                      src={selectedPost.featured_image} 
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    
                    {/* Category Badge */}
                    {selectedPost.category && (
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-white/90 text-gray-700 text-sm font-medium rounded-full">
                          {selectedPost.category}
                        </span>
                      </div>
                    )}
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {selectedPost.title}
                  </h1>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-gray-600 mb-8">
                    <div className="flex items-center space-x-6">
                      {selectedPost.author && (
                        <div className="flex items-center space-x-2">
                          <User className="w-5 h-5" />
                          <span>{selectedPost.author}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>{formatDate(selectedPost.created_at)}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-rosewood-600 font-medium">
                      <Clock className="w-4 h-4" />
                      <span>{calculateReadTime(selectedPost.description)}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Post Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedPost.description }}
                />
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <ContactSection />
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <ScrollProgress />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                Our <span className="text-gradient-primary">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insights, tutorials, and industry updates from our team of experts. 
                Stay informed about the latest trends in web development and technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        {categories.length > 1 && (
          <section className="py-8 bg-white border-b border-gray-200">
            <div className="container mx-auto px-6">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => {
                      setSelectedCategory(category);
                      setVisiblePosts(6); // Reset pagination when changing category
                    }}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-gradient-primary text-white shadow-medium" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            {loading ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-20"
              >
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rosewood-600 mx-auto mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h3>
                <p className="text-gray-600">Fetching the latest blog posts.</p>
              </motion.div>
            ) : error ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-20"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Error</h3>
                <p className="text-gray-600">{error}</p>
                <button 
                  onClick={fetchBlogs}
                  className="mt-4 px-6 py-2 bg-rosewood-600 text-white rounded-lg hover:bg-rosewood-700 transition-colors"
                >
                  Try Again
                </button>
              </motion.div>
            ) : displayedPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-20"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No posts found</h3>
                <p className="text-gray-600">
                  {selectedCategory === 'All' 
                    ? 'No blog posts available yet. Check back soon!' 
                    : 'No blog posts available for the selected category.'}
                </p>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-medium hover-lift overflow-hidden border border-gray-200"
                  >
                    {/* Post Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.featured_image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                      
                      {/* Category Badge */}
                      {post.category && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <div 
                        className="text-gray-600 mb-4 line-clamp-3"
                        dangerouslySetInnerHTML={{ 
                          __html: post.description.length > 150 
                            ? post.description.substring(0, 150) + '...' 
                            : post.description 
                        }}
                      />

                      {/* Post Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          {post.author && (
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.created_at)}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-rosewood-600 font-medium">
                          <Clock className="w-4 h-4" />
                          <span>{calculateReadTime(post.description)}</span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <motion.button
                        onClick={() => handleReadMore(post)}
                        className="flex items-center space-x-2 text-rosewood-600 hover:text-rosewood-700 font-medium transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {!loading && !error && visiblePosts < filteredPosts.length && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mt-12"
              >
                <motion.button
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold shadow-medium hover-lift"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Load More Articles ({filteredPosts.length - visiblePosts} remaining)
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights, tutorials, and industry updates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
                />
                <motion.button
                  className="px-6 py-3 bg-white text-rosewood-800 rounded-lg font-semibold shadow-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
