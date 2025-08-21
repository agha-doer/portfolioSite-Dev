'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { BookOpen, Calendar, User, ArrowRight, ArrowLeft } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    document.title = 'Blog - DevCraft Studios';
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to advanced CSS techniques.",
      content: `
        <h2>The Future of Web Development: Trends to Watch in 2024</h2>
        <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new technologies and methodologies that will shape how we build and deploy web applications.</p>
        
        <h3>1. AI-Powered Development Tools</h3>
        <p>Artificial Intelligence is revolutionizing how developers write code. From intelligent code completion to automated testing and debugging, AI tools are becoming indispensable in modern web development workflows.</p>
        
        <h3>2. Advanced CSS Techniques</h3>
        <p>CSS continues to evolve with new features like Container Queries, CSS Grid Level 2, and improved support for modern layout techniques. These advancements enable more responsive and maintainable designs.</p>
        
        <h3>3. Web Components and Micro-Frontends</h3>
        <p>The adoption of Web Components and micro-frontend architectures is growing, allowing teams to build more modular and scalable applications.</p>
        
        <h3>4. Performance Optimization</h3>
        <p>With Core Web Vitals becoming crucial for SEO, performance optimization techniques like code splitting, lazy loading, and modern image formats are more important than ever.</p>
        
        <h3>5. Server-Side Rendering and Static Generation</h3>
        <p>Frameworks like Next.js and Nuxt.js are popularizing hybrid rendering approaches that combine the benefits of both client-side and server-side rendering.</p>
      `,
      author: "Sarah Johnson",
      date: "December 15, 2024",
      category: "Web Development",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices",
      excerpt: "Learn the essential patterns and practices for creating maintainable and scalable React applications.",
      content: `
        <h2>Building Scalable React Applications: Best Practices</h2>
        <p>Creating scalable React applications requires careful planning and adherence to proven patterns and practices. Here are the key strategies for building maintainable React codebases.</p>
        
        <h3>1. Component Architecture</h3>
        <p>Design components with single responsibility in mind. Use composition over inheritance and create reusable, pure components whenever possible.</p>
        
        <h3>2. State Management</h3>
        <p>Choose the right state management solution for your application size. For smaller apps, React's built-in state might be sufficient, while larger applications benefit from Redux, Zustand, or Context API.</p>
        
        <h3>3. Performance Optimization</h3>
        <p>Implement React.memo, useMemo, and useCallback to prevent unnecessary re-renders. Use React.lazy for code splitting and implement proper loading states.</p>
        
        <h3>4. Testing Strategy</h3>
        <p>Write comprehensive tests using Jest and React Testing Library. Focus on testing user behavior rather than implementation details.</p>
        
        <h3>5. Code Organization</h3>
        <p>Organize your code into logical folders and use consistent naming conventions. Implement proper TypeScript types for better developer experience.</p>
      `,
      author: "Mike Chen",
      date: "December 12, 2024",
      category: "React",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "Compare the pros and cons of native and cross-platform mobile development approaches.",
      content: `
        <h2>Mobile App Development: Native vs Cross-Platform</h2>
        <p>Choosing between native and cross-platform development is one of the most important decisions in mobile app development. Each approach has its own advantages and trade-offs.</p>
        
        <h3>1. Native Development</h3>
        <p>Native development offers the best performance and access to platform-specific features. Apps built natively can take full advantage of device capabilities and provide the most polished user experience.</p>
        
        <h3>2. Cross-Platform Development</h3>
        <p>Frameworks like React Native, Flutter, and Xamarin allow developers to write code once and deploy to multiple platforms, significantly reducing development time and cost.</p>
        
        <h3>3. Performance Considerations</h3>
        <p>Native apps generally perform better than cross-platform solutions, especially for complex applications with heavy computational requirements.</p>
        
        <h3>4. Development Speed</h3>
        <p>Cross-platform development can be faster for simple to moderate complexity apps, while native development might be preferred for apps requiring deep platform integration.</p>
        
        <h3>5. Maintenance and Updates</h3>
        <p>Cross-platform apps require maintaining a single codebase, while native apps need separate maintenance for each platform.</p>
      `,
      author: "Emily Rodriguez",
      date: "December 10, 2024",
      category: "Mobile Development",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["All", "Web Development", "React", "Mobile Development", "Design", "Performance", "Cloud Computing"];

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
                      src={selectedPost.image} 
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/90 text-gray-700 text-sm font-medium rounded-full">
                        {selectedPost.category}
                      </span>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {selectedPost.title}
                  </h1>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-gray-600 mb-8">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-5 h-5" />
                        <span>{selectedPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>{selectedPost.date}</span>
                      </div>
                    </div>
                    <span className="text-rosewood-600 font-medium">{selectedPost.readTime}</span>
                  </div>
                </motion.div>

                {/* Post Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
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

        {/* Blog Posts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            {displayedPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-20"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No posts found</h3>
                <p className="text-gray-600">No blog posts available for the selected category.</p>
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
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Post Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <span className="text-rosewood-600 font-medium">{post.readTime}</span>
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
            {visiblePosts < filteredPosts.length && (
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
