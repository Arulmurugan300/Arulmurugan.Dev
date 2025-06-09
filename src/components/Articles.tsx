import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Articles = () => {
  const [showAllArticles, setShowAllArticles] = useState(false);

  const articles = [
    {
      id: 1,
      title: "Angular Resource API: Modern Data Fetching Made Simple",
      excerpt: "Angular’s Resource API represents a significant evolution in how we handle data fetching and state management in modern Angular applications.",
      date: "2025-06-09",
      readTime: "9 min read",
      category: "Angular",
      image: "/asset/ResourceApi.png",
      featured: true,
      url:'https://medium.com/@arulmurugan-madheswaran/angular-resource-api-modern-data-fetching-made-simple-61fc1c939072'
    },
    // {
    //   id: 2,
    //   title: "Modern CSS Techniques for Better User Interfaces",
    //   excerpt: "Explore the latest CSS features including Grid, Flexbox, and CSS Variables to create responsive and maintainable user interfaces.",
    //   date: "2024-01-10",
    //   readTime: "6 min read",
    //   category: "CSS",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    //   featured: false,
    //   url:'https://example.com/modern-css-techniques-better-uis'
    // },
    // {
    //   id: 3,
    //   title: "Database Design Patterns for Modern Applications",
    //   excerpt: "Understanding when to use SQL vs NoSQL databases, normalization strategies, and performance optimization techniques.",
    //   date: "2024-01-05",
    //   readTime: "10 min read",
    //   category: "Database",
    //   image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
    //   featured: false,
    //   url:'https://example.com/database-design-patterns-modern-applications'
    // },
    // {
    //   id: 4,
    //   title: "API Design Best Practices with Node.js",
    //   excerpt: "Design robust and scalable APIs using Node.js and Express, including authentication, error handling, and documentation strategies.",
    //   date: "2023-12-28",
    //   readTime: "7 min read",
    //   category: "Backend",
    //   image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    //   featured: false,
    //   url:'https://example.com/api-design-best-practices-nodejs'
    // }
  ];

  // Show first article initially, then all when showAllArticles is true
  const displayedArticles = showAllArticles ? articles : articles.slice(0, 1);
  const hasMoreArticles = articles.length > 1;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="articles" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="text-blue-600">Articles</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge and insights about software development, best practices, and emerging technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedArticles.map((article, index) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={`opacity-100 ${index === 0 && !showAllArticles ? "md:col-span-2" : ""}`}
              >
                <Card className="overflow-hidden group border-0 shadow-lg bg-background/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                        index === 0 && !showAllArticles ? "h-64" : "h-48"
                      }`}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                    {article.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center text-sm text-muted-foreground mb-2 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <CardTitle className={`group-hover:text-blue-600 transition-colors ${
                      index === 0 && !showAllArticles ? "text-2xl" : "text-xl"
                    }`}>
                      {article.title}
                    </CardTitle>
                    
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-blue-600 hover:text-blue-700 group/button"
                      onClick={() => window.open(article.url, '_blank')}
                    >
                      Read More 
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/button:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {hasMoreArticles && !showAllArticles && (
            <motion.div 
              variants={itemVariants}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                onClick={() => setShowAllArticles(true)}
              >
                View All Articles ({articles.length - 1} more)
              </Button>
            </motion.div>
          )}

          {showAllArticles && hasMoreArticles && (
            <motion.div 
              variants={itemVariants}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                onClick={() => setShowAllArticles(false)}
              >
                Show Less
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
