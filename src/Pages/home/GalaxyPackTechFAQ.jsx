import { useState } from "react";

const GalaxyPackTechFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What products does Galaxy PackTech offer?",
      answer:
        "Galaxy PackTech specializes in innovative packaging solutions including smart packaging, sustainable materials, and custom-designed packaging for various industries.",
    },
    {
      question: "Are your packaging materials eco-friendly?",
      answer:
        "Yes! We prioritize sustainability with biodegradable, compostable, and recycled material options. Over 60% of our product line is certified eco-friendly.",
    },
    {
      question: "Can I get custom packaging designs?",
      answer:
        "Absolutely! Our design team works closely with clients to create bespoke packaging solutions that reflect your brand identity and meet your specific requirements.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including e-commerce, food & beverage, pharmaceuticals, electronics, and luxury goods.",
    },
    {
      question: "How can I request a quote?",
      answer:
        "You can request a quote through our website contact form, by emailing sales@galaxypacktech.com, or by calling our customer service team directly.",
    },
    {
      question: "What's your minimum order quantity?",
      answer:
        "Our MOQ varies by product type. For standard items, MOQ starts at 500 units, while custom designs may have higher minimums. Contact us for specific details.",
    },
  ];

  return (
    <div className=" bg-gradient-to-br from-slate-900 to-slate-800 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* FAQ Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded"></div>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden transition-all duration-200 ease-in-out hover:border-orange-400/30"
                >
                  <button
                    className={`w-full px-4 py-3 text-left focus:outline-none transition-all duration-200 ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-orange-500/10 to-orange-600/10"
                        : "hover:bg-slate-700/30"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                      <div
                        className={`transform transition-all duration-200 ${
                          activeIndex === index
                            ? "rotate-180 text-orange-400"
                            : "text-slate-400 hover:text-orange-400"
                        }`}
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>

                  <div
                    className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index
                        ? "max-h-96 pb-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-l-2 border-orange-400/30 pl-3">
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Manufacturing Animation */}
          <div className="w-full lg:w-1/2 mt-9 lg:sticky top-20">
            <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-700/50 overflow-hidden h-full">
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                    linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)
                  `,
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Our Smart Manufacturing
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Precision-engineered packaging solutions
                  </p>
                </div>

                {/* Compact Visualization */}
                <div className="flex-grow flex flex-col justify-between">
                  {/* Production Line */}
                  <div className="relative h-12 sm:h-16 my-2 sm:my-4">
                    <div className="absolute top-1/2 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full transform -translate-y-1/2">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent animate-pulse"></div>
                    </div>

                    {/* Moving Items */}
                    <div className="absolute top-0 left-0 w-full h-full">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-md shadow-lg"
                          style={{
                            left: `${i * 30 + 5}%`,
                            top: "50%",
                            transform: "translateY(-50%)",
                            animation: `moveRight 3s infinite ${
                              i * 0.5
                            }s linear`,
                          }}
                        >
                          <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-md"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status Indicators */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 my-2 sm:my-4">
                    <div className="bg-slate-800/50 rounded-lg p-2 sm:p-3 text-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 bg-green-400/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-slate-300">Quality</p>
                      <p className="text-xs sm:text-sm font-bold text-green-400">
                        99.2%
                      </p>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-2 sm:p-3 text-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 bg-blue-400/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-slate-300">Speed</p>
                      <p className="text-xs sm:text-sm font-bold text-blue-400">
                        1.2s/unit
                      </p>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-2 sm:p-3 text-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 bg-orange-400/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-slate-300">Efficiency</p>
                      <p className="text-xs sm:text-sm font-bold text-orange-400">
                        98.7%
                      </p>
                    </div>
                  </div>

                  {/* Mini Robot */}
                  <div className="flex justify-center mt-2 sm:mt-4">
                    <div className="relative">
                      <div className="w-10 h-5 sm:w-12 sm:h-6 bg-slate-700 rounded-t-full"></div>
                      <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full animate-pulse"></div>
                      <div
                        className="absolute -top-6 sm:-top-8 left-1/2 w-1.5 h-4 sm:w-2 sm:h-6 bg-slate-600 transform -translate-x-1/2 origin-bottom rotate-12 animate-pulse"
                        style={{ animationDuration: "2s" }}
                      ></div>
                      <div
                        className="absolute -top-6 sm:-top-8 left-1/2 w-1.5 h-4 sm:w-2 sm:h-6 bg-slate-600 transform -translate-x-1/2 origin-bottom -rotate-12 animate-pulse"
                        style={{ animationDuration: "2.5s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes moveRight {
          0% {
            transform: translateX(0) translateY(-50%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(300%) translateY(-50%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GalaxyPackTechFAQ;
