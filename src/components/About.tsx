
import { motion } from "framer-motion";
import { User, Award, Target, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const arulmuruganImage = "/asset/ARULMURUGAN_IMG.jpg";
  const MOBILE_BREAKPOINT = 768
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16" style={{ paddingTop: '40px' }}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div 
                  className="w-full h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center md:w-full md:justify-self-auto"
                  style={{ 
                    width: window.innerWidth < MOBILE_BREAKPOINT ? '80%' : '100%',
                    justifySelf: window.innerWidth < MOBILE_BREAKPOINT ? 'center' : 'auto'
                  }}
                >
                  {/* <User className="w-32 h-32 text-blue-600" /> */}
                  <img 
                      src={arulmuruganImage} 
                      alt="arulmuruganImage"
                      className={` h-96 object-cover transition-transform duration-300 group-hover:scale-110}`}
                    />
                </div>
                <div 
                  className="absolute -bottom-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center md:w-24 md:h-24"
                  style={{
                    width: window.innerWidth < MOBILE_BREAKPOINT ? '5rem' : '6rem',
                    height: window.innerWidth < MOBILE_BREAKPOINT ? '5rem' : '6rem',
                    right: '-5px'
                  }}
                >
                  <Award className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Passionate Software Engineer
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                I am an Angular Front-End Developer with 2.5 years of experience in creating responsive and high-performance web applications. I specialize in modern Angular frameworks, state management using NgRx, and GraphQL API integration. I have a strong commitment to performance optimization and delivering exceptional user experiences through clean and maintainable code.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying updated with the latest 
                industry trends. When I'm not coding, you'll find me contributing to open-source 
                projects, reading tech blogs, or exploring new technologies.
              </p>

              <div className="grid grid-cols-2 xs:grid-cols-1 gap-4">
                <div className="p-4 bg-background rounded-lg border">
                  <Target className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold mb-1">Eye of an Eagle</h4>
                  <p className="text-sm text-muted-foreground">Aiming for excellence</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg border">
                  <Award className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="font-semibold mb-1">Pixel Perfectionist	</h4>
                  <p className="text-sm text-muted-foreground">Crafting pixel-perfect interfaces</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Work Experience Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Briefcase className="w-8 h-8 text-blue-600" />
                Work <span className="text-blue-600">Experience</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="p-6 bg-background rounded-2xl border shadow-lg"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-1">Software Engineer</h4>
                    <p className="text-muted-foreground font-medium mb-2">Centizen Inc</p>
                    <p className="text-sm text-muted-foreground">2023 – Present</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="p-6 bg-background rounded-2xl border shadow-lg"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-600 mb-1">Automation Line In-Charge</h4>
                    <p className="text-muted-foreground font-medium mb-2">Super Auto Forge</p>
                    <p className="text-sm text-muted-foreground">2018 – 2020</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <span className="text-blue-600">Education</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="p-6 bg-background rounded-2xl border shadow-lg"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-1">B.E. in Mechanical Engineering</h4>
                    <p className="text-muted-foreground font-medium mb-2">Bachelor's Degree</p>
                    <p className="text-sm text-muted-foreground">2020 – 2023</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="p-6 bg-background rounded-2xl border shadow-lg"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-600 mb-1">Diploma in Mechanical Engineering</h4>
                    <p className="text-muted-foreground font-medium mb-2">Diploma</p>
                    <p className="text-sm text-muted-foreground">2016 – 2018</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
