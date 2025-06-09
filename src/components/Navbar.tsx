
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun, Download, Menu, X, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "articles", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      // Check if we're at the top (home section)
      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }
      
      for (const section of sections.slice(1)) { // Skip "home" since we handle it above
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Articles", href: "#articles", id: "articles" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];
  const navbarContent = {
    siteName:"Arulmurugan.Dev",
    Resume:"Resume"
  }
  const handleNavClick = (href: string, id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {navbarContent.siteName}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.id)}
                className={`relative text-foreground/80 hover:text-foreground transition-all duration-500 ${
                  activeSection === item.id ? "text-blue-600" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {/* Active section border indicator */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: activeSection === item.id ? "100%" : 0,
                    opacity: activeSection === item.id ? 1 : 0
                  }}
                  whileHover={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                {/* Border indicator for active section */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -top-1 -bottom-1 -left-2 -right-2 border border-blue-600/30 rounded-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/asset/ARULMURUGAN.M.pdf';
                link.download = 'ARULMURUGAN.M.pdf';
                link.click();
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              {navbarContent.Resume}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavClick(item.href, item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 transition-colors duration-300 ${
                    activeSection === item.id 
                      ? "text-blue-600 font-medium" 
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Resume Download Button for Mobile */}
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/asset/ARULMURUGAN.M.pdf';
                    link.download = 'ARULMURUGAN.M.pdf';
                    link.click();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {navbarContent.Resume}
                </Button>
              </div>
              
              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-4 pt-4">
                <motion.a
                  href="https://github.com/Arulmurugan300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="http://www.linkedin.com/in/arulmuruganmadheswaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
