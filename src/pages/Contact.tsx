import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  Building
} from "lucide-react";
import { toast } from "sonner";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  timeline: z.string().min(1, "Please select a timeline"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const projectTypes = [
  "Web Application",
  "Landing Page",
  "E-commerce Site",
  "Mobile App",
  "API Development",
  "UI/UX Design",
  "Performance Optimization",
  "Other"
];

const budgetRanges = [
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,50,000",
  "₹2,50,000 - ₹5,00,000",
  "₹5,00,000+",
  "Let's discuss"
];

const timelines = [
  "ASAP",
  "1-2 weeks",
  "1 month",
  "2-3 months",
  "3+ months",
  "Flexible"
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@5dcreations.dev",
    description: "Send me an email anytime",
    color: "cyan"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    description: "Call me during business hours",
    color: "violet"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    description: "Available for remote work worldwide",
    color: "cyan"
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    description: "I'll get back to you quickly",
    color: "violet"
  }
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log("Form submitted:", data);
      
      toast.success("Message sent successfully! I'll get back to you within 24 hours.");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again or contact me directly.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | 5D Creations - Let's Build Something Amazing</title>
        <meta name="description" content="Ready to start your project? Contact 5D Creations for web development, UI/UX design, and digital solutions. Get a free consultation and quote." />
      </Helmet>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                animate: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge className="mb-4">Get In Touch</Badge>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Let's Build Something{" "}
                <span className="bg-gradient-cyan bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Ready to bring your vision to life? I'd love to hear about your project 
                and discuss how we can create something extraordinary.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                animate: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className={`p-6 text-center glass border-border/20 hover:border-${info.color === 'cyan' ? 'primary' : 'secondary'}/40 transition-all duration-300 hover:shadow-glow-${info.color} h-full`}>
                    <div className={`w-12 h-12 bg-gradient-${info.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow-${info.color}`}>
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.label}</h3>
                    <p className="text-primary font-medium mb-2">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  animate: {
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              >
                {/* Form */}
                <motion.div variants={fadeInUp} className="lg:col-span-2">
                  <Card className="p-8 glass border-border/20">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-4">Tell Me About Your Project</h2>
                      <p className="text-muted-foreground">
                        Fill out the form below with your project details and I'll get back to you 
                        within 24 hours with a personalized quote and timeline.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      {/* Name and Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              {...register("name")}
                              type="text"
                              placeholder="Your full name"
                              className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                          </div>
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              {...register("email")}
                              type="email"
                              placeholder="your@email.com"
                              className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                          </div>
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Phone and Company */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Phone (Optional)
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              {...register("phone")}
                              type="tel"
                              placeholder="+91 98765 43210"
                              className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Company (Optional)
                          </label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              {...register("company")}
                              type="text"
                              placeholder="Your company name"
                              className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Project Type and Budget */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Project Type *
                          </label>
                          <select
                            {...register("projectType")}
                            className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                          {errors.projectType && (
                            <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Budget Range *
                          </label>
                          <select
                            {...register("budget")}
                            className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((budget) => (
                              <option key={budget} value={budget}>{budget}</option>
                            ))}
                          </select>
                          {errors.budget && (
                            <p className="text-red-500 text-xs mt-1">{errors.budget.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Timeline *
                        </label>
                        <select
                          {...register("timeline")}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                        {errors.timeline && (
                          <p className="text-red-500 text-xs mt-1">{errors.timeline.message}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Project Description *
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <textarea
                            {...register("message")}
                            rows={6}
                            placeholder="Tell me about your project, goals, and any specific requirements..."
                            className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                          />
                        </div>
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Card>
                </motion.div>

                {/* Sidebar */}
                <motion.div variants={fadeInUp} className="space-y-8">
                  {/* Quick Contact */}
                  <Card className="p-6 glass border-border/20">
                    <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                    <div className="space-y-4">
                      <Button variant="neon" className="w-full justify-start" asChild>
                        <a href="mailto:hello@5dcreations.dev">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Me Directly
                        </a>
                      </Button>
                      <Button variant="neon" className="w-full justify-start" asChild>
                        <a href="tel:+919876543210">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </Card>

                  {/* FAQ */}
                  <Card className="p-6 glass border-border/20">
                    <h3 className="text-xl font-semibold mb-4">Quick FAQ</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2" />
                          Response Time?
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Within 24 hours, often much faster during business hours.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2" />
                          Free Consultation?
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Yes! Initial consultation and project scoping is always free.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2" />
                          Remote Work?
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Absolutely! I work with clients worldwide remotely.
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}