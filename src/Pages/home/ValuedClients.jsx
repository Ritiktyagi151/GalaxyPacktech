import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Users, Sparkles } from "lucide-react";

const ValuedClients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const clients = [
    {
      id: 1,
      name: "TechCorp",
      logo: "TC",
      color: "from-blue-500 to-blue-600",
      industry: "Technology",
    },
    {
      id: 2,
      name: "GlobalDyne",
      logo: "GD",
      color: "from-green-500 to-green-600",
      industry: "Energy",
    },
    {
      id: 3,
      name: "Creative Co",
      logo: "CC",
      color: "from-purple-500 to-purple-600",
      industry: "Design",
    },
    {
      id: 4,
      name: "FutureTech",
      logo: "FT",
      color: "from-red-500 to-red-600",
      industry: "AI",
    },
    {
      id: 5,
      name: "HealthPlus",
      logo: "HP",
      color: "from-teal-500 to-teal-600",
      industry: "Healthcare",
    },
    {
      id: 6,
      name: "EduPro",
      logo: "EP",
      color: "from-pink-500 to-pink-600",
      industry: "Education",
    },
    {
      id: 7,
      name: "FinanceX",
      logo: "FX",
      color: "from-indigo-500 to-indigo-600",
      industry: "Fintech",
    },
    {
      id: 8,
      name: "StartupLab",
      logo: "SL",
      color: "from-yellow-500 to-yellow-600",
      industry: "Incubator",
    },
    {
      id: 9,
      name: "MediaFlow",
      logo: "MF",
      color: "from-cyan-500 to-cyan-600",
      industry: "Media",
    },
    {
      id: 10,
      name: "RetailMax",
      logo: "RM",
      color: "from-orange-500 to-orange-600",
      industry: "Retail",
    },
    {
      id: 11,
      name: "CloudSync",
      logo: "CS",
      color: "from-gray-500 to-gray-600",
      industry: "Cloud",
    },
    {
      id: 12,
      name: "DataVault",
      logo: "DV",
      color: "from-emerald-500 to-emerald-600",
      industry: "Security",
    },
  ];

  const clientsPerSlide = 6;
  const totalSlides = Math.ceil(clients.length / clientsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentSlide]);

  const getVisibleClients = () => {
    const startIndex = currentSlide * clientsPerSlide;
    return clients.slice(startIndex, startIndex + clientsPerSlide);
  };

  // Parallax effect handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current || !isHovered) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      containerRef.current.style.setProperty("--mouse-x", x);
      containerRef.current.style.setProperty("--mouse-y", y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white py-16 px-4 overflow-hidden">
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-orange-100 opacity-20"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 15 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 to-amber-100 text-amber-700 px-5 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              <Sparkles className="w-4 h-4" />
              <span>Trusted Partnerships</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Valued{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                Clients
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              We collaborate with visionary companies across industries to
              deliver exceptional results and drive meaningful impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 max-w-md">
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 hover:border-orange-200 group">
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2 transition-all duration-500 group-hover:translate-x-1">
                  {clients.length}+
                </div>
                <div className="text-gray-600 font-medium">Global Clients</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 hover:border-orange-200 group">
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2 transition-all duration-500 group-hover:translate-x-1">
                  98%
                </div>
                <div className="text-gray-600 font-medium">Retention Rate</div>
              </div>
            </div>

            {/* Testimonial snippet */}
            <div className="relative pl-6 mt-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-amber-400 to-orange-500 before:rounded-full">
              <blockquote className="text-gray-600 italic">
                "Their expertise transformed our digital presence and drove
                measurable results."
              </blockquote>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  TechCorp CEO
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Client Carousel */}
          <div
            className="lg:w-1/2 relative"
            onMouseEnter={() => {
              setIsAutoPlaying(false);
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsAutoPlaying(true);
              setIsHovered(false);
            }}
            ref={containerRef}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-orange-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-orange-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
            </button>

            {/* Carousel Container */}
            <div className="relative h-full min-h-[400px]">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-100/30 to-orange-100/20 blur-xl -z-10" />

              {/* Main card */}
              <div className="bg-white/80 backdrop-blur-sm border border-orange-100/50 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-xl h-full">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_var(--mouse-x,_0.5)_var(--mouse-y,_0.5),rgba(251,191,36,0.1)_0%,transparent_70%)] opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="p-8 h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-700 mb-6">
                    Featured Clients
                  </h3>

                  <div className="grid grid-cols-3 gap-6 flex-grow">
                    {getVisibleClients().map((client, index) => (
                      <div
                        key={client.id}
                        className="relative group"
                        style={{
                          animation: `fadeInUp ${
                            0.5 + index * 0.1
                          }s ease-out forwards`,
                          opacity: 0,
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-500 border border-gray-100 group-hover:border-orange-200 z-0" />

                        <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                          <div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-xl mb-3 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg`}
                          >
                            {client.logo}
                          </div>
                          <div className="text-center">
                            <h4 className="font-medium text-gray-800 text-sm">
                              {client.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {client.industry}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Slide indicators */}
                  <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalSlides }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          i === currentSlide
                            ? "bg-gradient-to-r from-amber-500 to-orange-600 w-6"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

export default ValuedClients;
