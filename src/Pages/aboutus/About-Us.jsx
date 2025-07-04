import React, { useEffect, useState, useRef } from "react";
import {
  Cog,
  Wrench,
  Factory,
  Users,
  Globe,
  Award,
  Target,
  Zap,
  Shield,
  Package,
  Cpu,
  TrendingUp,
  CheckCircle,
  Settings,
  BarChart3,
  Layers,
  ArrowRight,
  Play,
  Pause,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Star,
  Truck,
  Clock,
  Heart,
  DollarSign,
  Briefcase,
  Building,
  Lightbulb,
  Search,
  FileText,
  Monitor,
  PieChart,
} from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

// Animated section wrapper
const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Gear Animation Component
const RotatingGear = ({ size = "w-16 h-16", speed = 10, reverse = false }) => {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`${size} text-orange-500 opacity-20`}
    >
      <Cog className="w-full h-full" />
    </motion.div>
  );
};

// Industrial Hero Section - Optimized for 80vh
const IndustrialHero = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 h-[80vh] flex items-center overflow-hidden">
      {/* Industrial Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Gears */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-8">
          <RotatingGear size="w-10 h-10" speed={8} />
        </div>
        <div className="absolute top-32 right-16">
          <RotatingGear size="w-16 h-16" speed={12} reverse />
        </div>
        <div className="absolute bottom-24 left-1/4">
          <RotatingGear size="w-6 h-6" speed={6} />
        </div>
        <div className="absolute bottom-16 right-1/3">
          <RotatingGear size="w-12 h-12" speed={10} reverse />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-10 h-10 border-2 border-orange-500 rounded-full flex items-center justify-center"
                >
                  <Factory className="w-5 h-5 text-orange-500" />
                </motion.div>
                <span className="text-orange-500 font-semibold tracking-wider text-sm">
                  MANUFACTURING EXCELLENCE
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Galaxy
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  Tech Pack
                </span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Engineering precision-crafted packaging machinery that powers
                global manufacturing operations with unmatched reliability and
                innovation.
              </p>

              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 shadow-lg text-sm"
                >
                  <span>Explore Machines</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors text-sm"
                >
                  <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:border-orange-400 transition-colors">
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4 ml-1" />
                    )}
                  </div>
                  <span>Factory Tour</span>
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Visual */}
          <AnimatedSection delay={0.4}>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Factory,
                      label: "Advanced Manufacturing",
                      value: "15+ Years",
                    },
                    {
                      icon: Globe,
                      label: "Global Reach",
                      value: "50+ Countries",
                    },
                    {
                      icon: Cog,
                      label: "Precision Engineering",
                      value: "99.9% Accuracy",
                    },
                    {
                      icon: Award,
                      label: "Industry Recognition",
                      value: "Top Rated",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="text-center p-3 bg-white/5 rounded-xl backdrop-blur-sm"
                    >
                      <item.icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                      <div className="text-sm font-bold text-white">
                        {item.value}
                      </div>
                      <div className="text-xs text-gray-300">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

// Company Overview - Optimized spacing
const CompanyOverview = () => {
  return (
    <div className="bg-gray-50 py-12 relative min-h-[80vh] flex items-center">
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-1 bg-orange-500"></div>
              <Wrench className="w-6 h-6 text-orange-500" />
              <div className="w-8 h-1 bg-orange-500"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Precision Engineering Since 2008
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Galaxy Tech Pack stands as a pioneering force in packaging
              machinery manufacturing, combining German precision with Indian
              innovation to deliver world-class solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <AnimatedSection delay={0.3} className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 h-full">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-5 h-5 text-orange-500 mr-2" />
                Our Manufacturing Excellence
              </h3>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-xl">
                  We specialize in manufacturing high-precision packaging
                  machinery including stand-up pouch making machines, zipper bag
                  machines, and automated packaging lines. Our state-of-the-art
                  facility combines traditional craftsmanship with cutting-edge
                  technology.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      title: "Quality Control",
                      desc: "ISO 9001:2015 certified manufacturing processes",
                      icon: Shield,
                    },
                    {
                      title: "Innovation Lab",
                      desc: "Dedicated R&D facility for continuous improvement",
                      icon: Cpu,
                    },
                    {
                      title: "Expert Team",
                      desc: "50+ skilled engineers and technicians",
                      icon: Users,
                    },
                    {
                      title: "Global Service",
                      desc: "24/7 technical support across all continents",
                      icon: Globe,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-2 p-8 bg-gray-50 rounded-lg"
                    >
                      <item.icon className="w-7 h-7 text-orange-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-[16px]">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Side Stats */}
          <AnimatedSection delay={0.5}>
            <div className="space-y-4">
              {[
                { number: "1000+", label: "Machines Installed", icon: Package },
                { number: "50+", label: "Countries Served", icon: MapPin },
                { number: "15+", label: "Years Experience", icon: Calendar },
                {
                  number: "99%",
                  label: "Client Satisfaction",
                  icon: CheckCircle,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-white text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 opacity-80" />
                  <div className="text-xl font-bold mb-1">{stat.number}</div>
                  <div className="text-xs opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

// Product Portfolio Section
const ProductPortfolio = () => {
  const products = [
    {
      name: "Stand-Up Pouch Machines",
      description: "High-speed machines for flexible packaging solutions",
      icon: Package,
      features: ["Auto feeding", "Digital control", "Quality sealing"],
    },
    {
      name: "Zipper Bag Machines",
      description: "Precision zipper attachment and sealing systems",
      icon: Layers,
      features: ["Zipper welding", "Multi-layer support", "Speed control"],
    },
    {
      name: "Automated Lines",
      description: "Complete packaging automation solutions",
      icon: Factory,
      features: [
        "End-to-end automation",
        "Quality inspection",
        "Data analytics",
      ],
    },
    {
      name: "Custom Solutions",
      description: "Tailored machinery for specific requirements",
      icon: Settings,
      features: ["Custom design", "Specialized features", "Industry specific"],
    },
  ];

  return (
    <div className="bg-white py-6 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of packaging machinery designed for modern
              manufacturing needs
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <AnimatedSection key={index} delay={0.3 + index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100 h-full"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs text-gray-600"
                    >
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

// Manufacturing Process Section - Optimized
const ManufacturingProcess = () => {
  const processes = [
    {
      step: "01",
      title: "Design & Engineering",
      description: "CAD modeling and precision engineering design",
      icon: Settings,
      color: "from-blue-500 to-blue-600",
    },
    {
      step: "02",
      title: "Component Manufacturing",
      description: "CNC machining and fabrication of precision parts",
      icon: Cog,
      color: "from-orange-500 to-orange-600",
    },
    {
      step: "03",
      title: "Assembly & Integration",
      description: "Expert assembly with quality control checkpoints",
      icon: Wrench,
      color: "from-red-500 to-red-600",
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Rigorous testing and performance validation",
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <div className="bg-slate-900 py-6  relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Industrial Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-8">
          <RotatingGear size="w-20 h-20" speed={15} />
        </div>
        <div className="absolute bottom-8 right-8">
          <RotatingGear size="w-16 h-16" speed={18} reverse />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From concept to delivery, every machine undergoes our rigorous
              manufacturing process
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((process, index) => (
            <AnimatedSection key={index} delay={0.3 + index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative group h-full"
              >
                <div
                  className={`bg-gradient-to-br ${process.color} rounded-xl p-6 h-full`}
                >
                  <div className="text-right mb-3">
                    <span className="text-2xl font-bold text-white/30">
                      {process.step}
                    </span>
                  </div>

                  <process.icon className="w-8 h-8 text-white mb-3" />

                  <h3 className="text-lg font-bold text-white mb-2">
                    {process.title}
                  </h3>

                  <p className="text-white/90 text-sm">{process.description}</p>

                  {/* Connection Line */}
                  {index < processes.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/20 transform -translate-y-1/2"></div>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

// Why Choose Us Section
const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Industry Leading Quality",
      description:
        "ISO certified processes ensuring consistent excellence in every machine we manufacture.",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description:
        "Streamlined production processes enabling quick turnaround times without compromising quality.",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description:
        "Cost-effective solutions that provide exceptional value for your packaging automation investment.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Dedicated support team ensuring your success with personalized service and technical expertise.",
    },
    {
      icon: Truck,
      title: "Global Reach",
      description:
        "Worldwide installation and support network covering over 50 countries across all continents.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description:
        "Continuous R&D investment keeping our machines at the forefront of packaging technology.",
    },
  ];

  return (
    <div className="bg-gray-50 py-4 min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Galaxy Tech Pack?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver more than just machinery - we provide complete
              packaging solutions that drive your business forward
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} delay={0.3 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center h-full"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

// Client Testimonials Section
const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "PackFresh Industries",
      text: "Galaxy Tech Pack's machines have revolutionized our production line. The precision and reliability are unmatched.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      company: "Global Packaging Ltd",
      text: "Outstanding customer service and technical support. Their team went above and beyond to customize our solution.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      company: "Middle East Pack Co",
      text: "Three years running without major issues. These machines are built to last and perform consistently.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-slate-800 py-6 min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Trusted by manufacturers worldwide for delivering exceptional
              packaging solutions
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={0.3 + index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-white/20 pt-4">
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-orange-400 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Section - Optimized
const ContactSection = () => {
  return (
    <div className="bg-gradient-to-br from-orange-500 to-red-600 py-12 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <AnimatedSection delay={0.2}>
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Revolutionize Your Packaging?
              </h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Let's discuss how Galaxy Tech Pack can enhance your
                manufacturing capabilities with our precision-engineered
                packaging solutions.
              </p>

              <div className="space-y-3">
                {[
                  { icon: Phone, text: "+91 120 456 7890" },
                  { icon: Mail, text: "info@galaxytechpack.com" },
                  { icon: MapPin, text: "Ghaziabad, Uttar Pradesh, India" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <contact.icon className="w-4 h-4 text-white/80" />
                    <span className="text-white/90 text-sm">
                      {contact.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 text-sm"
                />
                <textarea
                  placeholder="Your Message"
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 resize-none text-sm"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-orange-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
                >
                  Send Message
                </motion.button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

// Main About Page Component
const ManufacturingAboutPage = () => {
  return (
    <div className="overflow-hidden">
      <IndustrialHero />
      <CompanyOverview />
      <ProductPortfolio />
      <ManufacturingProcess />
      <WhyChooseUs />
      <ClientTestimonials />
      <ContactSection />
    </div>
  );
};

export default ManufacturingAboutPage;
