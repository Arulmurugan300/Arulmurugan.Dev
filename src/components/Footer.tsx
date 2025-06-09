
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "arulmadhujothi@gmail.com",
      action: "mailto:arulmadhujothi@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+91 75399 95994",
      action: "tel:+917539995994"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Namakkal, Tamil Nadu, India",
      action: "https://www.google.com/maps?q=Namakkal,+Tamil+Nadu,+India"
    }
  ];
  
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-muted-foreground">
              Passionate software engineer crafting digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              {[
                { name: "LinkedIn", url: "http://www.linkedin.com/in/arulmuruganmadheswaran" },
                { name: "GitHub", url: "https://github.com/Arulmurugan300" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                {social.name === "LinkedIn" ? (
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
                  ) : (
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Articles", href: "#articles" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex gap-2 ">
                          <div className="w-7 h-7 row-span-1 bg-blue-600/10 rounded-lg flex items-center justify-center">
                            <info.icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            {info.action ? (
                              <a 
                                href={info.action}
                                className="text-muted-foreground hover:text-blue-600 transition-colors"
                              >
                                {info.description}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.description}</p>
                            )}
                          </div>
                          </div>
                </motion.div>
              ))}
            </div>
            <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-blue-600 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
