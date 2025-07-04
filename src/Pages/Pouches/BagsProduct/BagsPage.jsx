import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Package,
  Zap,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const BagMachines = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Industrial Strength",
      description: "Heavy-duty construction for continuous operation",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Precision Engineering",
      description: "Consistent quality with every bag produced",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High-Speed Production",
      description: "Output up to 200 bags per minute",
    },
  ];

  const bagTypes = [
    {
      name: "Flat Bags",
      image: "bp",
      color: "from-orange-400 to-red-500",
      path: "/searchbyshape",
    },
    {
      name: "Gusseted Bags",
      path: "/searchbyshape",
      image: "ss",
      color: "from-blue-400 to-purple-500",
    },
    {
      name: "Woven Sacks",
      image: "hk",
      color: "from-green-400 to-teal-500",
      path: "/searchbyshape",
    },
    {
      name: "Stand-up Bags",
      image: "cs",
      path: "/searchbyshape",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "T-Shirt Bags",
      image: "yd",
      color: "from-pink-400 to-rose-500",
      path: "/searchbyshape",
    },
    {
      name: "Zipper Bags",
      image: "si",
      color: "from-indigo-400 to-blue-500",
      path: "/searchbyshape",
    },
    {
      name: "Custom Shapes",
      image: "op",
      color: "from-purple-400 to-pink-500",
      path: "/searchbyshape",
    },
  ];

  const models = [
    { name: "Automatic Bag Maker", image: "bhbp", path: "/searchbymodelbag" },
    { name: "Woven Bag Machine", image: "bh", path: "/searchbymodelbag" },
    { name: "Laminated Bag Machine", image: "ct", path: "/searchbymodelbag" },
    { name: "Paper Bag Machine", image: "fd", path: "/searchbymodelbag" },
    { name: "Flexo Printer", image: "hks", path: "/searchbymodelbag" },
    { name: "Bag Sealing Machine", image: "st", path: "/searchbymodelbag" },
  ];

  const industryApplications = [
    {
      title: "Retail",
      path: "/searchbytypebag",
      items: [
        "Shopping Bags",
        "Merchandise Bags",
        "Gift Bags",
        "Boutique Packaging",
      ],
      icon: "🛍️",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Food Packaging",
      path: "/searchbytypebag",

      items: [
        "Grocery Bags",
        "Bakery Bags",
        "Produce Bags",
        "Frozen Food Bags",
      ],
      icon: "🍞",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Industrial",
      path: "/searchbytypebag",

      items: [
        "Construction Debris",
        "Agricultural Products",
        "Chemical Packaging",
        "Bulk Materials",
      ],
      icon: "🏭",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Medical",
      path: "/searchbytypebag",

      items: [
        "Sterile Packaging",
        "Biohazard Bags",
        "Pharmaceutical Bags",
        "Waste Collection",
      ],
      icon: "🏥",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "E-commerce",
      path: "/searchbytypebag",

      items: [
        "Shipping Bags",
        "Poly Mailers",
        "Padded Envelopes",
        "Returns Packaging",
      ],
      icon: "📦",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      title: "Specialty",
      path: "/searchbytypebag",

      items: [
        "Vacuum Bags",
        "Barrier Bags",
        "Insulated Bags",
        "Custom Printed Bags",
      ],
      icon: "✨",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50">
      {/* Hero Section */}
      <div
        className={`relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-transparent"></div>

        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/2 -left-32 w-80 h-80 bg-white/5 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Galaxy Pack Tech
              <span className="block text-orange-200 text-3xl md:text-4xl mt-2">
                Advanced Bag Manufacturing Systems
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
              Cutting-edge technology for high-speed, precision bag production
              across all industries.
            </p>
            <div className="prose prose-lg text-orange-50 mb-8">
              <p>
                Our bag making machines transform various materials including
                plastic films, woven polypropylene, and paper into durable,
                high-quality bags. From simple T-shirt bags to complex
                industrial sacks, our solutions deliver unmatched performance
                and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      {/* <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose BagTech?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-orange-700 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Bag Types Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Search by Shape of Bags
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for every bag requirement
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {bagTypes.map((type, index) => (
              <Link key={index} to={type.path}>
                <div
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(`type-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  ></div>
                  <div className="relative text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Package className="w-10 h-10 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-tight group-hover:text-orange-700 transition-colors">
                      {type.name}
                    </h3>
                    <ChevronRight
                      className={`w-4 h-4 text-orange-500 mx-auto mt-2 transform transition-all duration-300 ${
                        hoveredCard === `type-${index}`
                          ? "translate-x-1 opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Search by Model
            </h2>
            <p className="text-xl text-gray-600">
              Engineered for performance and durability
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <Link key={index} to={model.path}>
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Package className="w-12 h-12 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg group-hover:text-orange-700 transition-colors">
                      {model.name}
                    </h3>
                    <div className="mt-4  group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow">
                        View Specifications
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Search by Bag Type
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for diverse sectors
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryApplications.map((industry, index) => (
              <Link to={industry.path} key={index}>
                <div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHoveredCard(`industry-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {industry.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                        {industry.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {industry.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={`flex items-center text-gray-600 group-hover:text-gray-800 transition-all duration-300 ${
                            hoveredCard === `industry-${index}`
                              ? "transform translate-x-2"
                              : ""
                          }`}
                          style={{ transitionDelay: `${itemIndex * 50}ms` }}
                        >
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:bg-orange-600 transition-colors"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`mt-6  group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
                    >
                      <button
                        className={`bg-gradient-to-r ${industry.gradient} text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow`}
                      >
                        {industry.title} Solutions
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Upgrade Your Bag Production?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Discover how BagTech Solutions can transform your operations with
            state-of-the-art bag manufacturing technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center">
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105">
              Technical Consultation
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BagMachines;
