
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CodingProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      description: "Open source contributions and personal projects",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      url: "https://github.com/Arulmurugan300",
      stats: "5+ repositories",
      color: "hover:bg-gray-800"
    },
    {
      name: "LeetCode",
      description: "Algorithmic problem solving and coding challenges",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      url: "https://leetcode.com/u/ArulmuruganM/",
      stats: "5+ problems solved",
      color: "hover:bg-orange-600"
    },
    {
      name: "HackerRank",
      description: "Programming skills and certifications",
      icon: "https://hrcdn.net/fcore/assets/brand/typemark_60x200-7435b42d20.svg",
      url: "https://hackerrank.com",
      stats: "5-star problem solver",
      color: "hover:bg-green-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Coding <span className="text-blue-600">Profiles</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow my coding journey across different platforms and see my contributions to the developer community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div onClick={() => window.open(profile.url, '_blank')} className="bg-background/80 backdrop-blur-sm border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img 
                        src={profile.icon} 
                        alt={profile.name}
                        className="w-8 h-8 object-contain"
                        
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => window.open(profile.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {profile.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {profile.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600">
                      {profile.stats}
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-muted-foreground"
                    >
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              Want to collaborate on a project or discuss opportunities?
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
