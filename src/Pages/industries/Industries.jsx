import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Package,
  Factory,
  Utensils,
  Heart,
  Zap,
  Shield,
  Globe,
  Award,
  X,
} from "lucide-react";

const Industries = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeCard, setActiveCard] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const industries = [
    {
      id: 1,
      icon: <Utensils className="w-12 h-12" />,
      title: "Food Packaging",
      description:
        "High-speed pouch machines for snacks, ready-to-eat meals, and liquid food products.",
      features: [
        "Food-grade pouch materials",
        "Modified atmosphere packaging",
        "Zipper and spout options",
        "High-barrier films for freshness",
      ],
      color: "from-orange-400 to-red-500",
    },
    {
      id: 2,
      icon: <Heart className="w-12 h-12" />,
      title: "Pharmaceutical",
      description:
        "Precision pouch packaging for medical products, tablets, and sterile applications.",
      features: [
        "Child-resistant pouches",
        "Tamper-evident seals",
        "Moisture barrier protection",
        "Compliant with regulatory standards",
      ],
      color: "from-orange-500 to-pink-500",
    },
    {
      id: 3,
      icon: <Package className="w-12 h-12" />,
      title: "Consumer Goods",
      description:
        "Versatile pouch solutions for household products, detergents, and personal care items.",
      features: [
        "Stand-up pouch options",
        "Resealable zippers",
        "Durable laminate structures",
        "Custom printing capabilities",
      ],
      color: "from-orange-600 to-yellow-500",
    },
    {
      id: 4,
      icon: <Zap className="w-12 h-12" />,
      title: "Electronics",
      description:
        "Anti-static pouches for electronic components and sensitive devices.",
      features: [
        "ESD protective materials",
        "Moisture barrier films",
        "Transparent viewing windows",
        "Custom sizing options",
      ],
      color: "from-orange-400 to-blue-500",
    },
    {
      id: 5,
      icon: <Shield className="w-12 h-12" />,
      title: "Industrial",
      description:
        "Heavy-duty pouches for chemicals, lubricants, and industrial products.",
      features: [
        "Chemical-resistant films",
        "Wide mouth spouts",
        "High-strength seals",
        "Bulk packaging solutions",
      ],
      color: "from-orange-500 to-gray-600",
    },
    {
      id: 6,
      icon: <Globe className="w-12 h-12" />,
      title: "E-commerce",
      description:
        "Lightweight, durable pouches optimized for shipping and direct-to-consumer.",
      features: [
        "Tear-resistant materials",
        "Compact shipping profiles",
        "Brandable surfaces",
        "Sustainable material options",
      ],
      color: "from-orange-400 to-green-500",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Pouch Machine Models",
      icon: <Factory className="w-8 h-8" />,
    },
    {
      number: "1000+",
      label: "Pouch Configurations",
      icon: <Package className="w-8 h-8" />,
    },
    {
      number: "120/min",
      label: "Max Production Speed",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      number: "30+",
      label: "Countries Served",
      icon: <Globe className="w-8 h-8" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openModal = (industry) => {
    setSelectedIndustry(industry);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-white">
      <div class="banner-container">
        {/* <!-- Desktop Banner (hidden on mobile) */}

        <motion.img
          src="/images/banners/industy.jpg"
          alt="Desktop Banner"
          class="hidden md:block w-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* <!-- Mobile Banner (hidden on desktop) --> */}
        <motion.img
          src="/images/mobile-view-banner/industries.jpg"
          alt="Mobile Banner"
          class="block md:hidden w-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-orange-50 to-orange-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-orange-300 rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-400 rounded-full opacity-30 animate-ping"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Pouch Solutions for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 ml-4">
                Every Industry
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Specialized pouch-making machines designed to meet the unique
              packaging requirements across diverse industries
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
              {/* <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                View Pouch Machines
              </button> */}

              <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16" id="stats" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transform transition-all duration-700 ${
                  isVisible.stats
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-orange-500 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="bg-gray-50 py-20" id="industries" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Pouch Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pouch-making machines are engineered to deliver optimal
              performance for each industry's unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform ${
                  isVisible.industries
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } ${
                  activeCard === industry.id ? "scale-105" : "hover:scale-105"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveCard(industry.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => openModal(industry)}
              >
                <div className="p-8">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {industry.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {industry.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="space-y-2">
                    {industry.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:bg-orange-500"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button
                      onClick={() => openModal(industry)}
                      className="text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300 flex items-center group-hover:translate-x-2 transform transition-transform"
                    >
                      View Pouch Options
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal/Popup */}
      {isModalOpen && selectedIndustry && (
        <div className="fixed inset-0  backdrop-blur-sm z-500 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={closeModal}
            ></div>

            {/* Modal content */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div
                    className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r ${selectedIndustry.color} sm:mx-0 sm:h-16 sm:w-16`}
                  >
                    {React.cloneElement(selectedIndustry.icon, {
                      className: "w-8 h-8 sm:w-10 sm:h-10 text-white",
                    })}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-2xl leading-6 font-bold text-gray-900">
                      {selectedIndustry.title} Pouch Solutions
                    </h3>
                    <div className="mt-4">
                      <p className="text-gray-600 mb-4">
                        {selectedIndustry.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {selectedIndustry.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Recommended Pouch Machines
                        </h4>
                        <p className="text-gray-600 mb-2">
                          For {selectedIndustry.title.toLowerCase()}{" "}
                          applications, we recommend:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600">
                          <li>High-speed vertical pouch machines</li>
                          <li>Customizable sealing systems</li>
                          <li>Specialized material handling</li>
                          <li>Integrated quality control</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {/* <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-base font-medium text-white hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    // Add navigation to contact page or open contact form
                    console.log("Get a Quote clicked");
                  }}
                >
                  Get Machine Specifications
                </button> */}
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base  font-medium text-gray-700 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default Industries;
