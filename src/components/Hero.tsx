
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, Code, Sparkles, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isAtLastSection, setIsAtLastSection] = useState(false);
  
  const sections = ["home", "about", "skills", "projects", "articles", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Check if at top (home section)
      if (scrollPosition < 200) {
        setCurrentSectionIndex(0);
        setIsAtLastSection(false);
        return;
      }
      
      // Check if at last section (contact)
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const contactTop = contactSection.offsetTop;
        const isAtContact = scrollPosition >= contactTop - window.innerHeight / 2;
        setIsAtLastSection(isAtContact);
        
        if (isAtContact) {
          setCurrentSectionIndex(sections.length - 1);
          return;
        }
      }
      
      // Update current section index based on scroll position
      for (let i = 1; i < sections.length - 1; i++) {
        const sectionElement = document.getElementById(sections[i]);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionBottom = sectionTop + sectionElement.offsetHeight;
          
          if (scrollPosition + 100 >= sectionTop && scrollPosition + 100 < sectionBottom) {
            setCurrentSectionIndex(i);
            setIsAtLastSection(false);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleArrowClick = () => {
    if (isAtLastSection) {
      // Back to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to next section
      const nextSectionIndex = currentSectionIndex + 1;
      
      if (nextSectionIndex < sections.length) {
        if (sections[nextSectionIndex] === "home") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const nextSection = document.getElementById(sections[nextSectionIndex]);
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const welcomeTextVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 3
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 pt-32 md:pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={welcomeTextVariants}
          className="flex items-center justify-center mb-6"
        >
          <Sparkles className="w-6 h-6 text-blue-500 mr-2" />
          <span className="text-blue-500 font-medium">Welcome to my portfolio</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Software Engineer
          </span>
          <br />
          <span className="text-foreground">& Problem Solver</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          I craft elegant solutions to complex problems, turning ideas into powerful, 
          scalable applications that make a difference.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg w-full sm:w-auto"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Code className="w-5 h-5 mr-2" />
            View My Work
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg w-full sm:w-auto"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto pb-20"
        >
          {[
            { number: "2+", label: "Projects Completed" },
            { number: "2+", label: "Years Experience" },
            { number: "15+", label: "Technologies Mastered" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Icons at bottom of hero section */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 pb-8"
        >
          <motion.a
            href="https://github.com/Arulmurugan300"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-muted/80 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
          </motion.a>
          <motion.a
            href="http://www.linkedin.com/in/arulmuruganmadheswaran"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-muted/80 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Dynamic scroll arrow */}
      <motion.div
        className="fixed bottom-8 right-8 cursor-pointer z-20"
        animate={{ 
          y: [0, 10, 0],
          opacity: 1
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={handleArrowClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-lg transition-colors">
          {isAtLastSection ? (
            <ArrowUp className="w-6 h-6 text-white" />
          ) : (
            <ArrowDown className="w-6 h-6 text-white" />
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
