// src/pages/Contact.tsx
import { Helmet } from "react-helmet-async";
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
  Building,
} from "lucide-react";
import { toast } from "sonner";
import clsx from "clsx";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
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
  "Other",
];

const budgetRanges = [
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,50,000",
  "₹2,50,000 - ₹5,00,000",
  "₹5,00,000+",
  "Let's discuss",
];

const timelines = ["ASAP", "1-2 weeks", "1 month", "2-3 months", "3+ months", "Flexible"];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "5dcreationskk@gmail.com",
    description: "Send me an email anytime",
    color: "cyan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8825792220",
    description: "Call me during business hours",
    color: "violet",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    description: "Available for remote work worldwide",
    color: "cyan",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    description: "I'll get back to you quickly",
    color: "violet",
  },
];

// ---------- Reusable Form Components ----------
const InputField = ({ label, icon: Icon, error, register, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />}
      <input
        {...register}
        {...props}
        className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
  </div>
);

const SelectField = ({ label, error, register, options }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <select
      {...register}
      className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
    >
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
  </div>
);

const TextAreaField = ({ label, icon: Icon, error, register, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />}
      <textarea
        {...register}
        {...props}
        className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
  </div>
);

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", data);
      toast.success("Message sent successfully! I'll reply within 24 hours.");
      reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | 5D Tech - Let's Build Something Amazing</title>
        <meta
          name="description"
          content="Ready to start your project? Contact 5D Tech for web development, UI/UX design, and digital solutions. Get a free consultation and quote."
        />
      </Helmet>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative text-center max-w-4xl">
            <motion.div
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeInUp}>
                <Badge className="mb-4">Get In Touch</Badge>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
                Let's Build Something{" "}
                <span className="bg-gradient-cyan bg-clip-text text-transparent">Amazing Together</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8">
                Share your project idea with me — I’ll help you turn it into reality.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
              {/* Form */}
              <motion.div variants={fadeInUp} className="lg:col-span-2">
                <Card className="p-8 glass border-border/20">
                  <h2 className="text-3xl font-bold mb-4">Tell Me About Your Project</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill in the details, and I’ll reply with a tailored plan & estimate.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <InputField label="Name *" icon={User} register={register("name")} error={errors.name} />
                      <InputField label="Email *" icon={Mail} type="email" register={register("email")} error={errors.email} />
                    </div>

                    {/* Phone + Company */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <InputField label="Phone" icon={Phone} type="tel" register={register("phone")} error={errors.phone} />
                      <InputField label="Company" icon={Building} register={register("company")} error={errors.company} />
                    </div>

                    {/* Project Type + Budget */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <SelectField label="Project Type *" register={register("projectType")} options={projectTypes} error={errors.projectType} />
                      <SelectField label="Budget Range *" register={register("budget")} options={budgetRanges} error={errors.budget} />
                    </div>

                    <SelectField label="Timeline *" register={register("timeline")} options={timelines} error={errors.timeline} />

                    <TextAreaField
                      label="Project Description *"
                      icon={MessageSquare}
                      rows={6}
                      placeholder="Tell me about your goals, requirements, and vision..."
                      register={register("message")}
                      error={errors.message}
                    />

                    <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? "Sending..." : <>Send Message <Send className="w-5 h-5 ml-2" /></>}
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* Sidebar */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <Card className="p-6 glass border-border/20">
                  <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <Button variant="neon" className="w-full justify-start" asChild>
                      <a href="mailto:5dcreationskk@gmail.com">
                        <Mail className="w-4 h-4 mr-2" /> Email Me
                      </a>
                    </Button>
                    <Button variant="neon" className="w-full justify-start" asChild>
                      <a href="tel:+918825792220">
                        <Phone className="w-4 h-4 mr-2" /> Call Now
                      </a>
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 glass border-border/20">
                  <h3 className="text-xl font-semibold mb-4">Quick FAQ</h3>
                  <div className="space-y-4">
                    {[
                      { q: "Response Time?", a: "Within 24 hours, often faster during business hours." },
                      { q: "Free Consultation?", a: "Yes, the first consultation and scoping is always free." },
                      { q: "Remote Work?", a: "Absolutely! I work with clients worldwide." },
                    ].map((faq) => (
                      <div key={faq.q}>
                        <h4 className="font-medium flex items-center mb-2">
                          <CheckCircle className="w-4 h-4 text-primary mr-2" /> {faq.q}
                        </h4>
                        <p className="text-sm text-muted-foreground">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info) => (
                <motion.div key={info.label} variants={fadeInUp} whileHover={{ y: -8, scale: 1.02 }}>
                  <Card
                    className={clsx(
                      "p-6 text-center glass border-border/20 transition-all duration-300 h-full",
                      `hover:shadow-glow-${info.color} hover:border-${info.color}-400/40`
                    )}
                  >
                    <div
                      className={clsx(
                        "w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4",
                        `bg-gradient-${info.color} shadow-glow-${info.color}`
                      )}
                    >
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.label}</h3>
                    <p className="text-primary font-medium mb-2">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
