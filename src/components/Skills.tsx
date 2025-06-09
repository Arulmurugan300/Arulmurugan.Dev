import { motion } from "framer-motion";
import { Code, Server, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: Code,
      color: "from-blue-500 to-purple-600",
      skills: ["Angular","React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Bootstrap", "SASS"]
    },
    {
      title: "Back-End",
      icon: Server,
      color: "from-green-500 to-blue-600",
      skills: ["Node.js", "GraphQL", "Express.js", "REST APIs"]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-600",
      skills: ["MongoDB", "PostgreSQL", "Git","GitHub", "GitLab", "SourceTree"]
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="text-blue-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="bg-muted/50 p-8 rounded-3xl border backdrop-blur-sm relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5`}></div>
                  
                  {/* Icon and title */}
                  <div className="relative z-10 text-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} mx-auto mb-4 flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills grid */}
                  <div className="relative z-10 space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group-hover:scale-105`}>
                          <span className="font-medium text-foreground">{skill}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Technologies showcase */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Angular", "React", "TypeScript", "Node.js", "Python", "MongoDB", 
                "PostgreSQL", "NgRx Signals", "RxJS", "Git", "Tailwind CSS",
                "Express.js", "GraphQL", "JavaScript", "HTML5", "CSS3", "SASS"
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 
                           border border-blue-600/20 rounded-full text-sm font-medium
                           hover:from-blue-600/20 hover:to-purple-600/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
