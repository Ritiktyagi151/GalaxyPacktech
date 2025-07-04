import React, { useState, useEffect } from "react";
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
      title: "Food & Beverage",
      description:
        "Premium packaging solutions for food safety and freshness preservation.",
      features: [
        "Food-grade materials",
        "Extended shelf life",
        "Tamper-evident sealing",
        "Custom branding",
      ],
      color: "from-orange-400 to-red-500",
    },
    {
      id: 2,
      icon: <Heart className="w-12 h-12" />,
      title: "Pharmaceutical",
      description:
        "Specialized packaging for medical products with regulatory compliance.",
      features: [
        "FDA approved materials",
        "Child-resistant designs",
        "Moisture protection",
        "Sterile packaging",
      ],
      color: "from-orange-500 to-pink-500",
    },
    {
      id: 3,
      icon: <Factory className="w-12 h-12" />,
      title: "Industrial",
      description:
        "Heavy-duty packaging solutions for industrial equipment and components.",
      features: [
        "High strength materials",
        "Weather resistance",
        "Custom dimensions",
        "Bulk packaging",
      ],
      color: "from-orange-600 to-yellow-500",
    },
    {
      id: 4,
      icon: <Zap className="w-12 h-12" />,
      title: "Electronics",
      description:
        "Anti-static and protective packaging for sensitive electronic components.",
      features: [
        "ESD protection",
        "Shock absorption",
        "Climate control",
        "Component organization",
      ],
      color: "from-orange-400 to-blue-500",
    },
    {
      id: 5,
      icon: <Shield className="w-12 h-12" />,
      title: "Automotive",
      description:
        "Robust packaging for automotive parts and components distribution.",
      features: [
        "Oil resistance",
        "Temperature stability",
        "Part protection",
        "Supply chain optimization",
      ],
      color: "from-orange-500 to-gray-600",
    },
    {
      id: 6,
      icon: <Globe className="w-12 h-12" />,
      title: "E-commerce",
      description:
        "Optimized packaging solutions for online retail and shipping.",
      features: [
        "Lightweight design",
        "Easy opening",
        "Brand experience",
        "Sustainable options",
      ],
      color: "from-orange-400 to-green-500",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Industries Served",
      icon: <Factory className="w-8 h-8" />,
    },
    {
      number: "10M+",
      label: "Packages Delivered",
      icon: <Package className="w-8 h-8" />,
    },
    {
      number: "99.9%",
      label: "Quality Rate",
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Shield className="w-8 h-8" />,
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
              Industries We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 ml-4">
                Serve
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Delivering specialized packaging solutions across diverse
              industries with unmatched quality and innovation
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Explore Solutions
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                Contact Sales
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
              Specialized Solutions for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans multiple sectors, delivering tailored
              packaging solutions that meet specific industry requirements
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
                      Learn More
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
        <div className="fixed inset-0  backdrop-blur-sm z-200 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0  transition-opacity"
              aria-hidden="true"
              onClick={closeModal}
            >
              <div className="absolute inset-0 "></div>
            </div>

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
                      {selectedIndustry.title}
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
                          Additional Information
                        </h4>
                        <p className="text-gray-600">
                          Our {selectedIndustry.title.toLowerCase()} packaging
                          solutions are designed to meet the highest industry
                          standards. Contact us to discuss custom solutions
                          tailored to your specific needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-base font-medium text-white hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={openModal}
                >
                  Get a Quote
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
