import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Arulmurugan300",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Arulmurugan300",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "SCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Arulmurugan300",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Arulmurugan300",
      featured: false
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Educational platform with course management, progress tracking, and interactive learning modules.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Prisma", "NextAuth", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Arulmurugan300",
      featured: false
    },
    {
      id: 6,
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto price tracker with portfolio management, alerts, and market analysis tools.",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500&h=300&fit=crop",
      technologies: ["React", "Redux", "CoinGecko API", "Recharts"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Arulmurugan300",
      featured: false
    }
  ];

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

  // Show first 3 projects initially, then all when showAllProjects is true
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);
  const hasMoreProjects = projects.length > 3;

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="opacity-100"
              >
                <Card className="overflow-hidden group border-0 shadow-lg bg-background/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden m-4 rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-md">
                          Featured
                        </span>
                      </div>
                    )}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 hover:bg-white"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Live
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 hover:bg-white"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      </div>
                    </div> */}
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-600/10 text-blue-600 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {hasMoreProjects && !showAllProjects && (
            <motion.div 
              variants={itemVariants}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                onClick={() => setShowAllProjects(true)}
              >
                View All Projects ({projects.length - 3} more)
              </Button>
            </motion.div>
          )}

          {showAllProjects && hasMoreProjects && (
            <motion.div 
              variants={itemVariants}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                onClick={() => setShowAllProjects(false)}
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

export default Projects;
