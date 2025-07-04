import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaLeaf,
  FaChartLine,
  FaAward,
  FaShapes,
  FaHeadset,
  FaTruck,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: "Unmatched Quality",
      description:
        "Every product undergoes rigorous quality testing to ensure superior performance and durability.",
      stat: "99.8%",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Industry-Leading Protection",
      description:
        "Our patented protective solutions reduce shipping damages by up to 92% compared to standard packaging.",
      stat: "92%",
    },
    {
      icon: <FaLeaf className="w-6 h-6" />,
      title: "Eco-Conscious Solutions",
      description:
        "Over 65% of our materials are biodegradable or from recycled sources without compromising strength.",
      stat: "65%+",
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Cost Efficiency",
      description:
        "Optimized designs reduce material usage while maintaining protection, saving you up to 30% on packaging costs.",
      stat: "30%",
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      title: "Award-Winning Innovation",
      description:
        "Recognized globally for our cutting-edge packaging technologies and sustainable solutions.",
      stat: "15+",
    },
    {
      icon: <FaShapes className="w-6 h-6" />,
      title: "Customizable Options",
      description:
        "Tailored solutions designed specifically for your products and brand identity requirements.",
      stat: "100%",
    },
     {
      icon: <FaTruck className="w-6 h-6" />,
      title: "Fast Global Delivery",
      description:
        "Our worldwide distribution network ensures 90% of orders reach their destination within 3-5 business days.",
      stat: "90%",
    },
    {
      icon: <FaHeadset className="w-6 h-6" />,
      title: "24/7 Customer Support",
      description:
        "Dedicated support team available around the clock to assist with any inquiries or issues.",
      stat: "24/7",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
    },
  };

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-amber-500"></div>
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-orange-100 opacity-20 mix-blend-multiply filter blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-amber-100 opacity-20 mix-blend-multiply filter blur-xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block mb-2 px-4 py-2 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full shadow-sm">
            Our Differentiators
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            <span className="block">
              Why Choose{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600">
                Galaxy PackTech
              </span>{" "}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what sets us apart in the packaging industry and how we
            deliver exceptional value to our partners.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="absolute -inset-0.5 shadow-2xl bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative h-full bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 border border-gray-100 group-hover:border-orange-200">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white transition-colors duration-300 shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="text-[18px] font-bold text-gray-900 mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-2 text-[14px] flex-grow">
                    {feature.description}
                  </p>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600">
                    {feature.stat}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
