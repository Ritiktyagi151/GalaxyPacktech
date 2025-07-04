import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const popupContent = {
    tech: {
      title: "Advanced Machinery Technology",
      icon: (
        <svg
          className="w-12 h-12 text-orange-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
        </svg>
      ),
      content:
        "GalaxyPackTech leverages cutting-edge automation and AI-driven technologies to deliver next-generation packaging solutions. Our advanced machinery portfolio includes high-speed filling systems, automated wrapping machines, and intelligent quality control systems that can process up to 500 units per minute with 99.9% accuracy. We integrate IoT sensors and predictive maintenance algorithms to minimize downtime and maximize productivity for our clients across pharmaceutical, food & beverage, and industrial sectors.",
    },
    culture: {
      title: "Innovation-Driven Culture",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.996 2.996 0 0 0 17.06 7h-1.12c-.8 0-1.54.5-1.85 1.26l-1.92 5.77c-.26.8.09 1.67.86 1.97L16 17v5h4zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2.5 16v-7H6l-2.54-7.63A2.996 2.996 0 0 1 6.06 6h1.12c.8 0 1.54.5 1.85 1.26L11 13h2l1.97-5.74c.31-.76 1.05-1.26 1.85-1.26h1.12c1.31 0 2.42.83 2.84 2.06L22 16h-2.5v6H8z" />
        </svg>
      ),
      content:
        "At GalaxyPackTech, innovation isn't just a buzzword—it's our DNA. Our multidisciplinary teams of 200+ engineers, designers, and technicians work in state-of-the-art R&D facilities across three continents. We invest 12% of our annual revenue into research and development, fostering a culture of continuous learning and breakthrough thinking. Our employees are encouraged to dedicate 20% of their time to exploratory projects, leading to over 50 patents filed in the last five years and revolutionary solutions that have transformed packaging efficiency for Fortune 500 companies.",
    },
    quality: {
      title: "Quality Assurance Excellence",
      icon: (
        <svg
          className="w-12 h-12 text-green-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content:
        "Quality is the cornerstone of GalaxyPackTech's reputation. We maintain ISO 9001:2015, ISO 14001:2015, and OHSAS 18001:2007 certifications, with every machine undergoing rigorous 168-hour stress testing before delivery. Our Six Sigma-trained quality assurance teams implement statistical process control at every manufacturing stage, achieving a defect rate of less than 0.01%. We provide comprehensive 5-year warranties and maintain a global service network with 24/7 technical support, ensuring 99.5% uptime guarantee for our clients' critical packaging operations.",
    },
  };

  const openPopup = (type) => {
    setActivePopup(type);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setActivePopup(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="py-2 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div
            className={`lg:w-1/2 relative transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className=" ">
              <div className="overflow-hidden rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern packaging machinery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Floating Elements */}
            {/* <div className="absolute -top-4 -left-4 animate-pulse">
              <div className="w-8 h-8 bg-orange-500 rounded-full opacity-60"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 animate-bounce">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-white animate-spin"
                  style={{ animationDuration: "3s" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div> */}

            {/* Tech Pattern Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-10">
              <div className="w-full h-full border-4 border-orange-500 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`lg:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="mb-8">
              <div className="uppercase text-orange-500 font-semibold mb-2 animate-pulse">
                <h6 className="text-sm tracking-wider">
                  15+ Years of Innovation
                </h6>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-4">
                <h1 className="leading-tight">
                  GalaxyPackTech{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 animate-pulse">
                    Solutions
                  </span>
                </h1>
              </div>
              <div
                className="h-1 bg-gradient-to-r from-orange-500 to-orange-700 mb-2 transform origin-left animate-pulse"
                style={{ width: "80px" }}
              ></div>
              <div className="text-gray-600  leading-relaxed">
                <p className="text-lg">
                  Founded in 2008, GalaxyPackTech is a leading provider of
                  packaging machinery solutions that integrates cutting-edge
                  technology, precision engineering, and global service
                  networks. We specialize in designing and manufacturing
                  high-performance packaging equipment for various industries,
                  delivering innovative solutions that enhance productivity and
                  efficiency.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  activeCard === "tech" ? "scale-105" : ""
                }`}
                onMouseEnter={() => setActiveCard("tech")}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => openPopup("tech")}
              >
                <div className="flex items-center p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-orange-500">
                  <div className="mr-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      Advanced Machinery Technology
                    </h5>
                    <p className="text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                      State-of-the-art automated packaging solutions
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 text-orange-500"
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
                  </div>
                </div>
              </div>

              <div
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  activeCard === "culture" ? "scale-105" : ""
                }`}
                onMouseEnter={() => setActiveCard("culture")}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => openPopup("culture")}
              >
                <div className="flex items-center p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-blue-500">
                  <div className="mr-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.996 2.996 0 0 0 17.06 7h-1.12c-.8 0-1.54.5-1.85 1.26l-1.92 5.77c-.26.8.09 1.67.86 1.97L16 17v5h4zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2.5 16v-7H6l-2.54-7.63A2.996 2.996 0 0 1 6.06 6h1.12c.8 0 1.54.5 1.85 1.26L11 13h2l1.97-5.74c.31-.76 1.05-1.26 1.85-1.26h1.12c1.31 0 2.42.83 2.84 2.06L22 16h-2.5v6H8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      Innovation-Driven Culture
                    </h5>
                    <p className="text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                      Collaborative excellence and continuous improvement
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 text-blue-500"
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
                  </div>
                </div>
              </div>

              <div
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  activeCard === "quality" ? "scale-105" : ""
                }`}
                onMouseEnter={() => setActiveCard("quality")}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => openPopup("quality")}
              >
                <div className="flex items-center p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-green-500">
                  <div className="mr-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                      Quality Assurance Excellence
                    </h5>
                    <p className="text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                      ISO certified manufacturing and testing standards
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 text-green-500"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {activePopup && (
        <div className="fixed  inset-0 z-200 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-opacity-80 backdrop-blur-sm transition-opacity duration-300"
            onClick={closePopup}
          ></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden transform transition-all duration-500 scale-100 opacity-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white opacity-5 rounded-full transform -translate-x-10 translate-y-10"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white bg-opacity-20 rounded-full">
                    {popupContent[activePopup].icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      {popupContent[activePopup].title}
                    </h2>
                    <p className="text-gray-300 text-sm">
                      GalaxyPackTech Excellence
                    </p>
                  </div>
                </div>
                <button
                  onClick={closePopup}
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
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
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-96">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {popupContent[activePopup].content}
                </p>
              </div>

              {/* Stats or Highlights */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {activePopup === "tech" && (
                  <>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        500+
                      </div>
                      <div className="text-sm text-gray-600">
                        Units per minute
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        99.9%
                      </div>
                      <div className="text-sm text-gray-600">Accuracy rate</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">
                        IoT monitoring
                      </div>
                    </div>
                  </>
                )}
                {activePopup === "culture" && (
                  <>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        200+
                      </div>
                      <div className="text-sm text-gray-600">
                        Expert team members
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        12%
                      </div>
                      <div className="text-sm text-gray-600">
                        R&D investment
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        50+
                      </div>
                      <div className="text-sm text-gray-600">Patents filed</div>
                    </div>
                  </>
                )}
                {activePopup === "quality" && (
                  <>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">
                        0.01%
                      </div>
                      <div className="text-sm text-gray-600">Defect rate</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">
                        99.5%
                      </div>
                      <div className="text-sm text-gray-600">
                        Uptime guarantee
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">
                        5 Year
                      </div>
                      <div className="text-sm text-gray-600">Warranty</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t bg-gray-50 px-8 py-2 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Learn more about GalaxyPackTech solutions
              </div>
              <button
                onClick={closePopup}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div> 
  );
};

export default AboutSection;
