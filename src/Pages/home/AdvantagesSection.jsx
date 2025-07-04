import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AdvantageCard = ({
  title,
  description,
  icon,
  href,
  delay,
  index,
  onLearnMoreClick,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Color variants based on index
  const colors = [
    { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
    { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
    { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
    { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
    { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
    { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200" },
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-xl h-full border ${color.border} shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col`}
    >
      {/* Header with icon */}
      <div className={`${color.bg} p-4 sm:p-5 flex items-center space-x-3 sm:space-x-4`}>
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className={`p-2 sm:p-3 rounded-full flex-shrink-0 shadow-inner ${color.bg} border ${color.border}`}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl">
            {icon}
          </div>
        </motion.div>
        <motion.a
          href={href}
          whileHover={{ x: 5 }}
          className={`text-lg sm:text-xl font-bold ${color.text} hover:opacity-80 transition-colors truncate`}
          title={title}
        >
          {title}
        </motion.a>
      </div>

      {/* Content area */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col">
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-4">
          {description}
        </p>

        {/* Decorative element */}
        <div className="mt-auto">
          <div className={`h-1 w-16 sm:w-20 rounded-full ${color.bg} mb-3 sm:mb-4`}></div>
          <motion.button
            onClick={() => onLearnMoreClick(index)}
            whileHover={{ x: 5 }}
            className={`inline-flex items-center ${color.text} text-sm sm:text-base font-medium cursor-pointer`}
          >
            Learn more
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const DetailModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative bg-white rounded-xl w-full max-w-xs sm:max-w-md md:max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl mx-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-4 sm:p-6 md:p-8">
          <div
            className={`p-3 sm:p-4 rounded-full inline-flex ${content.color.bg} mb-4 sm:mb-6`}
          >
            <span className="text-2xl sm:text-3xl">{content.icon}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            {content.title}
          </h3>
          <div className="prose-sm sm:prose text-gray-600">{content.details}</div>
          <div className="mt-6 sm:mt-8"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AdvantagesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const advantages = [
    {
      title: "Advanced Automation",
      description:
        "State-of-the-art robotic packaging systems with AI integration for maximum efficiency and precision in your production line. Reduce labor costs by up to 60% with our automated solutions.",
      details:
        "Our advanced automation solutions leverage cutting-edge robotics and artificial intelligence to revolutionize your packaging line. The systems feature self-learning algorithms that optimize performance over time, reducing waste and increasing throughput. With precision down to 0.1mm, our robotic arms handle everything from delicate food items to heavy industrial components. The integrated IoT platform provides real-time monitoring and predictive maintenance alerts, minimizing downtime. Companies implementing our automation solutions typically see ROI within 18 months, with average productivity increases of 45-75% depending on application. The modular design allows for easy scaling as your business grows.",
      icon: "🤖",
      href: "/automation-solutions",
      delay: 0.1,
    },
    {
      title: "Custom Packaging",
      description:
        "Tailored solutions for food, pharma, and industrial packaging designed to meet your specific requirements. Our engineers work directly with you to create the perfect packaging system.",
      details:
        "Every product has unique packaging needs, and our custom solutions are engineered to meet your exact specifications. Our design process begins with a comprehensive analysis of your product characteristics, supply chain requirements, and brand identity. We then develop prototypes using advanced 3D modeling and conduct rigorous testing to ensure optimal performance. For pharmaceutical clients, we offer FDA-compliant solutions with tamper-evident features. Food industry clients benefit from our expertise in modified atmosphere packaging that extends shelf life. All systems are built with future adaptability in mind, allowing for quick changeovers between product lines.",
      icon: "📦",
      href: "/custom-solutions",
      delay: 0.2,
    },
    {
      title: "High-Speed Filling",
      description:
        "Precision liquid & powder filling machines with capacity up to 500 containers per minute. Consistent accuracy within ±0.5% of target volume for perfect fills every time.",
      details:
        "Our high-speed filling technology sets new industry standards for both speed and accuracy. Utilizing advanced flow-metering technology combined with vision systems, we achieve fill accuracies previously thought impossible at these speeds. The machines automatically adjust for product viscosity changes and container variations, maintaining consistency across production runs. Special anti-foaming and anti-drip systems ensure clean operation even with challenging products. The stainless steel construction meets hygienic standards for food and pharmaceutical applications, with optional clean-in-place (CIP) systems available. Energy-efficient designs reduce power consumption by up to 30% compared to conventional fillers.",
      icon: "⚡",
      href: "/filling-systems",
      delay: 0.3,
    },
    {
      title: "Smart Labeling",
      description:
        "Vision-guided labeling systems with 99.9% accuracy and real-time quality control. Our smart systems automatically detect and correct labeling errors before they become issues.",
      details:
        "Transform your labeling process with our intelligent systems that combine machine vision with robotic precision. The advanced cameras verify every label for correct positioning, content, and barcode readability at speeds up to 600 units per minute. When discrepancies are detected, the system automatically makes micro-adjustments or flags the item for review. Our proprietary software integrates with your ERP system to ensure perfect synchronization between production batches and labeling. Specialized solutions are available for challenging surfaces like curved containers or flexible packaging. The systems maintain a complete digital record of every labeled item for full traceability and compliance reporting.",
      icon: "🏷️",
      href: "/labeling-solutions",
      delay: 0.4,
    },
  ];

  // Color variants based on index
  const colors = [
    { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
    { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
    { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
    { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
    { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
    { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200" },
  ];

  const handleLearnMoreClick = (index) => {
    const selected = advantages[index];
    setSelectedContent({
      ...selected,
      color: colors[index % colors.length],
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            <span className="relative inline-block">
              Our Competitive Advantages
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-orange-400"
                style={{ originX: 0 }}
              />
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative packaging solutions designed to optimize your operations
            and drive business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              index={index}
              title={advantage.title}
              description={advantage.description}
              icon={advantage.icon}
              href={advantage.href}
              delay={advantage.delay}
              onLearnMoreClick={handleLearnMoreClick}
            />
          ))}
        </div>
      </div>

      <DetailModal
        isOpen={modalOpen}
        onClose={closeModal}
        content={selectedContent}
      />
    </div>
  );
};

export default AdvantagesSection;