import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const formRef = useRef();
  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await emailjs.sendForm(
        'service_4hm4py5',     // e.g., service_abc123
        'template_gho0agf',    // e.g., template_xyz456
        formRef.current,
        'AjRbwFm_2_gGsi9ND'      // e.g., n3XwPz_something
      );
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

    } catch (error) {
      toast({
        title: "Failed to send email.",
        description: "Please try again later.",
      });
    }
    reset();
    setIsSubmitting(false);
  };
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

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "http://www.linkedin.com/in/arulmuruganmadheswaran",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Arulmurugan300",
      color: "hover:text-blue-600"
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
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities, whether it's a challenging project, 
                  a full-time position, or just a chat about technology. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-l-4 border-l-blue-600 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                            <info.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{info.title}</h4>
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
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <CardDescription>
                    I'll respond to your message within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          {...register("name", { required: "Name is required" })}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address"
                            }
                          })}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Enter subject"
                        {...register("subject", { required: "Subject is required" })}
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        rows={5}
                        {...register("message", { required: "Message is required" })}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
