import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
// import AdvancedStickyButton from '@/components/AdvancedStickyButton';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { BookOpen, Calendar, User, ArrowRight, Tag, ArrowLeft } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [selectedPost, setSelectedPost] = useState(null);

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
    },
    {
      id: 4,
      title: "Optimizing Website Performance: A Complete Guide",
      excerpt: "Discover proven techniques to improve your website's loading speed and user experience.",
      content: `
        <h2>Optimizing Website Performance: A Complete Guide</h2>
        <p>Website performance is crucial for user experience and search engine rankings. This comprehensive guide covers the most effective techniques for optimizing your website's speed and performance.</p>
        
        <h3>1. Image Optimization</h3>
        <p>Use modern image formats like WebP, implement lazy loading, and serve appropriately sized images for different devices. Consider using a CDN for faster image delivery.</p>
        
        <h3>2. Code Optimization</h3>
        <p>Minify CSS, JavaScript, and HTML files. Remove unused code and implement tree shaking to reduce bundle sizes. Use code splitting to load only necessary resources.</p>
        
        <h3>3. Caching Strategies</h3>
        <p>Implement browser caching, CDN caching, and server-side caching to reduce load times for returning visitors. Use cache headers effectively.</p>
        
        <h3>4. Server Optimization</h3>
        <p>Enable GZIP compression, use HTTP/2 or HTTP/3, and optimize database queries. Consider using edge computing for global performance.</p>
        
        <h3>5. Core Web Vitals</h3>
        <p>Focus on improving Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to meet Google's performance standards.</p>
      `,
      author: "David Kim",
      date: "December 8, 2024",
      category: "Performance",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "UI/UX Design Principles for Better User Engagement",
      excerpt: "Master the fundamental principles of user interface and user experience design.",
      content: `
        <h2>UI/UX Design Principles for Better User Engagement</h2>
        <p>Great UI/UX design is essential for creating engaging and successful digital products. Understanding and applying fundamental design principles can significantly improve user engagement and satisfaction.</p>
        
        <h3>1. User-Centered Design</h3>
        <p>Always design with the user in mind. Conduct user research, create personas, and test your designs with real users to ensure they meet actual needs and expectations.</p>
        
        <h3>2. Visual Hierarchy</h3>
        <p>Use typography, color, spacing, and size to create clear visual hierarchies that guide users through your interface and highlight important information.</p>
        
        <h3>3. Consistency</h3>
        <p>Maintain consistency in design elements, interactions, and terminology throughout your application to reduce cognitive load and improve usability.</p>
        
        <h3>4. Accessibility</h3>
        <p>Design for all users, including those with disabilities. Follow WCAG guidelines and ensure your interface is navigable by keyboard and screen readers.</p>
        
        <h3>5. Feedback and Response</h3>
        <p>Provide clear feedback for user actions through visual cues, animations, and messages. Users should always know what's happening and what to expect.</p>
      `,
      author: "Lisa Wang",
      date: "December 5, 2024",
      category: "Design",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Cloud Infrastructure: AWS vs Azure vs Google Cloud",
      excerpt: "Compare the major cloud providers and choose the best platform for your project needs.",
      content: `
        <h2>Cloud Infrastructure: AWS vs Azure vs Google Cloud</h2>
        <p>Choosing the right cloud provider is crucial for the success of your project. Each major cloud platform offers unique advantages and services that cater to different use cases and requirements.</p>
        
        <h3>1. Amazon Web Services (AWS)</h3>
        <p>AWS is the market leader with the most comprehensive service portfolio. It offers excellent scalability, global infrastructure, and extensive documentation and community support.</p>
        
        <h3>2. Microsoft Azure</h3>
        <p>Azure excels in enterprise integration, especially for organizations already using Microsoft products. It offers strong hybrid cloud capabilities and excellent Windows and .NET support.</p>
        
        <h3>3. Google Cloud Platform (GCP)</h3>
        <p>GCP is known for its advanced AI/ML capabilities, strong data analytics services, and competitive pricing. It's particularly strong in containerization and Kubernetes.</p>
        
        <h3>4. Pricing and Cost Management</h3>
        <p>Each provider has different pricing models and cost optimization strategies. Consider your specific workload requirements and long-term usage patterns when comparing costs.</p>
        
        <h3>5. Service Ecosystem</h3>
        <p>Evaluate the specific services you need for your project. While all three providers offer core services, they each have unique offerings that might be crucial for your use case.</p>
      `,
      author: "Alex Thompson",
      date: "December 3, 2024",
      category: "Cloud Computing",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

  const handleReadMore = (post) => {
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
        {/* <AdvancedStickyButton 
          text="Back to Blog"
          mobileText="Blog"
          scrollBehavior="fixed"
          colorScheme="auburn"
          onClick={handleBackToList}
        /> */}
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
      {/* <AdvancedStickyButton 
        text="Subscribe"
        mobileText="Blog"
        scrollBehavior="fixed"
        colorScheme="auburn"
        onClick={() => {
          window.location.href = '/contact';
        }}
      /> */}
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Background Elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-rosewood-300 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 6 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
          
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
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
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
};

export default Blog;
