import React from "react";
import {
  Factory,
  Users,
  Globe,
  Award,
  Package,
  CheckCircle,
  Settings,
  Layers,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Star,
  Truck,
  Clock,
  DollarSign,
  Lightbulb,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Banner Section
const BannerSection = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.img
        src="/images/banners/about-us.jpg"
        alt="Industrial packaging machines"
        className="w-full h-auto "
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      
    </div>
  );
};

// Company Overview
const CompanyOverview = () => {
  return (
    <div className="bg-white py-16 px-4">
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-800 mb-6">
          Precision Engineering Since 2008
        </motion.h2>
        <motion.p variants={itemVariants} className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Galaxy Tech Pack specializes in high-quality packaging machinery with
          15+ years of industry experience, delivering innovative solutions worldwide.
        </motion.p>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {[
            { number: "1000+", label: "Machines Installed", icon: Package },
            { number: "50+", label: "Countries Served", icon: Globe },
            { number: "15+", label: "Years Experience", icon: Calendar },
            { number: "99%", label: "Client Satisfaction", icon: CheckCircle },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-orange-50 p-6 rounded-lg border border-orange-100 hover:shadow-lg transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-orange-600" />
              <div className="font-bold text-2xl text-orange-700">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Product Portfolio
const ProductPortfolio = () => {
  const products = [
    {
      name: "Pouch Machines",
      description: "High-speed flexible packaging solutions",
      icon: Package,
    },
    {
      name: "Zipper Bag Machines",
      description: "Precision sealing systems",
      icon: Layers,
    },
    {
      name: "Automated Lines",
      description: "Complete packaging solutions",
      icon: Factory,
    },
    {
      name: "Custom Solutions",
      description: "Tailored to your needs",
      icon: Settings,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">Our Products</motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4 border-orange-500"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <product.icon className="w-12 h-12 text-orange-600 mb-6 mx-auto" />
              <h3 className="font-bold text-xl mb-3 text-center">{product.name}</h3>
              <p className="text-gray-600 text-center">{product.description}</p>
              <button className="mt-6 mx-auto flex items-center text-orange-600 hover:text-orange-700 font-medium">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Why Choose Us
const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Quality Assurance",
      description: "ISO certified manufacturing processes",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Exceptional value for your investment",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuous R&D for cutting-edge technology",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled engineers with decades of experience",
    },
    {
      icon: Truck,
      title: "Global Network",
      description: "Reliable service and support worldwide",
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">Why Choose Us</motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="flex items-start space-x-6 p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-all"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="bg-orange-100 p-3 rounded-full">
                <reason.icon className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-orange-800">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Testimonials
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Galaxy Tech Pack's machines have transformed our production line with their reliability and efficiency.",
      author: "Rajesh Kumar",
      company: "ABC Packaging Ltd.",
      rating: 5
    },
    {
      quote: "Excellent after-sales service and support. Their team is always responsive to our needs.",
      author: "Priya Sharma",
      company: "XYZ Foods",
      rating: 5
    },
    {
      quote: "We've been using their pouch machines for 5 years with minimal downtime. Highly recommended.",
      author: "Amit Patel",
      company: "Global Snacks Inc.",
      rating: 4
    }
  ];

  return (
    
    <div className="bg-gray-50 py-16 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">Client Testimonials</motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-orange-700">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <div className="bg-orange-600 text-white py-16 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">Contact Us</motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+91 120 456 7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p>info@galaxytechpack.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p>Industrial Area, Ghaziabad<br />Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-6">Send a Message</h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-3 rounded bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-3 rounded bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-6 py-3 rounded bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              ></textarea>
              <motion.button
                type="submit"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Main Page Component
const ManufacturingAboutPage = () => {
  return (
    <div className="font-sans">
      <BannerSection />
      <CompanyOverview />
      <ProductPortfolio />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default ManufacturingAboutPage;