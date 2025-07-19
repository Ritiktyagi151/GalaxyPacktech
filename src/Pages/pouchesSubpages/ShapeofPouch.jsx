import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Package,
  Zap,
  Star,
  Settings,
} from "lucide-react";

const PouchShapeSelector = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Placeholder SVG components for different pouch shapes
  const BoxPouchIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" className="text-red-600">
      <rect
        x="10"
        y="20"
        width="40"
        height="30"
        rx="2"
        fill="currentColor"
        opacity="0.2"
      />
      <rect
        x="12"
        y="22"
        width="36"
        height="26"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="10"
        y="15"
        width="40"
        height="8"
        rx="1"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M15 48 L15 52 L45 52 L45 48"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );

  const ThreeSideSealIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" className="text-pink-600">
      <path
        d="M15 10 L45 10 L45 45 L15 45 Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M15 10 L45 10 L45 45 L15 45 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M15 10 L45 10" stroke="currentColor" strokeWidth="3" />
      <path d="M15 10 L15 45" stroke="currentColor" strokeWidth="3" />
      <path d="M15 45 L45 45" stroke="currentColor" strokeWidth="3" />
    </svg>
  );

  const HalfFoldIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" className="text-orange-600">
      <path
        d="M20 15 L40 15 L40 45 L20 45 Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M20 15 L40 15 L40 45 L20 45 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M30 15 L30 45"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3,3"
      />
      <path
        d="M20 45 L20 50 L40 50 L40 45"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );

  const CenterPressIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" className="text-red-500">
      <ellipse
        cx="30"
        cy="30"
        rx="20"
        ry="15"
        fill="currentColor"
        opacity="0.2"
      />
      <ellipse
        cx="30"
        cy="30"
        rx="20"
        ry="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M30 15 L30 45" stroke="currentColor" strokeWidth="3" />
      <circle cx="30" cy="30" r="3" fill="currentColor" />
    </svg>
  );

  const SideWeldIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" className="text-pink-500">
      <path
        d="M15 20 L45 20 L40 40 L20 40 Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M15 20 L45 20 L40 40 L20 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M15 20 L45 20" stroke="currentColor" strokeWidth="3" />
      <path d="M20 40 L40 40" stroke="currentColor" strokeWidth="3" />
    </svg>
  );

  const SpoutIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" className="text-orange-500">
      <path
        d="M20 25 L40 25 L40 45 L20 45 Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M20 25 L40 25 L40 45 L20 45 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="35"
        cy="20"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M35 16 L35 25" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const sections = [
    {
      id: "box-pouch",
      title: "BOX POUCH®",
      subtitle: "High-speed BOX POUCH® making machine",
      icon: BoxPouchIcon,
      color: "red",
      items: [
        {
          id: "bh-60dg-f",
          href: "/products",
          title:
            "This model can make BOX POUCH® (Totani's original flat bottom pouch)",
          desc: "Totani's machine can make various pouches, such as packing bags for food, pouches for commodities and infusion bags for the medical field.",
        },
        {
          id: "bh-80dg-f",
          href: "/products",
          title:
            "This model can make large-capacity BOX POUCH® (Totani's original flat bottom pouch)",
          desc: "Totani's machine can make large flat bottom pouches that are suitable for prolonged food preservation and to preserve and transport liquids.",
        },
      ],
    },
    {
      id: "three-side-seal",
      title: "Three-Side-Seal",
      subtitle:
        "Pouch made by joining two films and sealing three positions around pouch",
      icon: ThreeSideSealIcon,
      color: "pink",
      items: [
        {
          id: "tnbh01",
          href: "/products",
          title: "Three-side-seal type pouch",
          desc: "Used for retort food.",
        },
        {
          id: "tnbh02",
          href: "/products",
          title: "Three-side-seal type standing pouch",
          desc: "Used for retort food, appealing as display or for cleanser refill bag.",
        },
        {
          id: "tnbh03",
          href: "/products",
          title: "Three-side-seal type pouch with zipper",
          desc: "Used for preservation of sweets and flavoring ingredients.",
        },
        {
          id: "tnbh04",
          href: "/products",
          title: "Three-side-seal type standing pouch with zipper",
          desc: "Used for preservation of food or commodities and appealing as display.",
        },
        {
          id: "tnbh05",
          href: "/products",
          title: "Slightly larger three-side-seal type pouch",
          desc: "Used for larger portions of retort food, etc.",
        },
        {
          id: "tnbh06",
          href: "/products",
          title: "Half fold fusion, standing pouch and zipper seal",
          desc: "Used for pet food, snacks, household goods, detergent, fertilizer or feeding, and etc.",
        },
      ],
    },
    {
      id: "half-fold",
      title: "Half fold fusion",
      subtitle: "Pouch made by folding a film in half and sealing it",
      icon: HalfFoldIcon,
      color: "orange",
      items: [
        {
          id: "tnct01",
          href: "/products",
          title: "Half fold fusion type standing pouch with zipper",
          desc: "Used for various purposes such as packing of food, pet food, fertilizer and seeds.",
        },
        {
          id: "tnct02",
          href: "/products",
          title: "Large Half fold fusion type standing pouch with zipper",
          desc: "Large-capacity pouches that are useful for packing of pet food, fertilizer and seeds.",
        },
      ],
    },
    {
      id: "center-press",
      title: "Center Press-Seal",
      subtitle: "Pouch made by folding a film in half and sealing its center",
      icon: CenterPressIcon,
      color: "red",
      items: [
        {
          id: "tnfd01",
          href: "/products",
          title: "Pouch made by folding a film from both sides and sealing it",
          desc: "Used for packing of food that can be affected by moisture such as coffee beans, sugar and wheat flour.",
        },
        {
          id: "tnfd02",
          href: "/products",
          title: "Pouch made by folding a film from both sides and sealing it",
          desc: "Used for packing of food such as candy and chocolate.",
        },
        {
          id: "tnfd03",
          href: "/products",
          title: "Standing pouch made by folding a film from both sides",
          desc: "Used for various purposes such as packing of food, pet food, fertilizer and seeds.",
        },
        {
          id: "tnfd04",
          href: "/products",
          title: "Large standing pouch made by folding a film from both sides",
          desc: "Large-capacity pouches used for packing of pet food, fertilizer and seeds.",
        },
      ],
    },
    {
      id: "side-weld",
      title: "Side-Weld",
      subtitle: "Pouch made by sealing and cutting a film",
      icon: SideWeldIcon,
      color: "pink",
      items: [
        {
          id: "tnhkvk01",
          href: "/products",
          title: "Pouch made by sealing and cutting a film",
          desc: "Used for packing of clothing and commodities such as handkerchief and towel.",
        },
        {
          id: "tnhkvk02",
          href: "/products",
          title: "Slightly larger pouch made by sealing and cutting a film",
          desc: "Used for packing of clothing and commodities such as handkerchief and towel.",
        },
        {
          id: "tnhkvk03",
          href: "/products",
          title: "Vertically long pouch made by sealing and cutting a film",
          desc: "Vertically long pouches that are useful for packing of commodities and clothing.",
        },
        {
          id: "tnhkvk05",
          href: "/products",
          title:
            "Trapezoidal or triangular pouch made by sealing and cutting a film",
          desc: "Used for packing of food such as vegetable and sandwich.",
        },
        {
          id: "tnhkvk06",
          href: "/products",
          title: "Large triangular pouch made by sealing and cutting a film",
          desc: "Totani's machine can make large-sized trapezoidal and triangular pouches.",
        },
      ],
    },
    {
      id: "spout",
      title: "Spout inserter",
      subtitle:
        "Totani's unit can insert spout automatically in making pouches for juice package and refill cleanser.",
      icon: SpoutIcon,
      color: "orange",
      items: [
        {
          id: "st-30",
          href: "/products",
          title: "Automatic spout insertion",
          desc: "Totani's unit can insert spout automatically in making pouches for juice package and refill cleanser.",
        },
      ],
    },
  ];

  const options = [
    {
      href: "/products",
      title: "Coreless Trim Winder",
      desc: "(Applies to all models)",
    },
    {
      href: "/products",
      title: "Full-Shape Thomson Die-Cut unit",
      desc: "(Applies to BH / CT series)",
    },
    {
      href: "/products",
      title: "Cutter Control System",
      desc: "(Applies to BH, CT, FD series)",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with floating animation */}
        <div className="intro mb-12 text-center">
          <div className="animate-bounce mb-4">
            <Package className="w-16 h-16 text-orange-600 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            Pouch Shape Selector
          </h1>
          <p className="text-xl text-orange-800 font-medium max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Select the shape of the pouch you want to make, and you can see
            detailed information about the pouch making machine you selected.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <section
              key={section.id}
              className={`bg-white rounded-xl shadow-lg border-l-4 border-${section.color}-600 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-102 animate-slide-in-${index}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`p-6 cursor-pointer bg-gradient-to-r from-${section.color}-50 to-white`}
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`transform transition-transform duration-300 ${
                        expandedSection === section.id
                          ? "rotate-12 scale-110"
                          : ""
                      }`}
                    >
                      <section.icon />
                    </div>
                    <div>
                      <h2
                        className={`text-2xl font-bold text-${section.color}-700 mb-1`}
                      >
                        {section.title}
                      </h2>
                      <p className="text-lg text-orange-700 font-medium">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`transform transition-transform duration-300 ${
                      expandedSection === section.id ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown
                      className={`w-6 h-6 text-${section.color}-600`}
                    />
                  </div>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedSection === section.id
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="p-6 space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={item.id}
                      className={`transform transition-all duration-300 hover:scale-105 ${
                        hoveredItem === item.id ? "translate-x-2" : ""
                      }`}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      style={{ animationDelay: `${itemIndex * 0.05}s` }}
                    >
                      <a href={item.href} className="block group">
                        <div
                          className={`p-4 rounded-lg bg-gradient-to-r from-${section.color}-50 to-white border border-${section.color}-100 hover:border-${section.color}-300 transition-all duration-300 hover:shadow-md`}
                        >
                          <div className="flex items-start space-x-3">
                            <div
                              className={`w-2 h-2 rounded-full bg-${section.color}-400 mt-2 transform transition-transform duration-300 group-hover:scale-150`}
                            ></div>
                            <div className="flex-1">
                              <p
                                className={`text-${section.color}-800 font-medium mb-2 group-hover:text-${section.color}-900 transition-colors`}
                              >
                                {item.title}
                              </p>
                              <span className="text-orange-700 text-sm group-hover:text-orange-800 transition-colors">
                                {item.desc}
                              </span>
                            </div>
                            <div className="transform transition-transform duration-300 group-hover:translate-x-1">
                              <Star
                                className={`w-4 h-4 text-${section.color}-400 opacity-0 group-hover:opacity-100 transition-opacity`}
                              />
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* Options Section */}
        <section className="mt-12 bg-white rounded-xl shadow-lg border-l-4 border-red-400 overflow-hidden transform transition-all duration-300 hover:shadow-xl">
          <div className="p-6 bg-gradient-to-r from-red-50 to-white">
            <div className="flex items-center space-x-4">
              <div className="animate-spin-slow">
                <Settings className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-red-600">Options</h2>
            </div>
          </div>
          <ul className="p-6 space-y-4">
            {options.map((option, index) => (
              <li
                key={index}
                className="transform transition-all duration-300 hover:scale-105 hover:translate-x-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a href={option.href} className="block group">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-white border border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 transform transition-transform duration-300 group-hover:scale-150"></div>
                      <div className="flex-1">
                        <p className="text-red-700 font-medium mb-1 group-hover:text-red-800 transition-colors">
                          {option.title}
                        </p>
                        <span className="text-orange-700 text-sm group-hover:text-orange-800 transition-colors">
                          {option.desc}
                        </span>
                      </div>
                      <div className="transform transition-transform duration-300 group-hover:translate-x-1">
                        <Zap className="w-4 h-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-0 {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-1 {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-2 {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-3 {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-4 {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-5 {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-slide-in-0 {
          animation: slide-in-0 0.6s ease-out both;
        }

        .animate-slide-in-1 {
          animation: slide-in-1 0.6s ease-out both;
        }

        .animate-slide-in-2 {
          animation: slide-in-2 0.6s ease-out both;
        }

        .animate-slide-in-3 {
          animation: slide-in-3 0.6s ease-out both;
        }

        .animate-slide-in-4 {
          animation: slide-in-4 0.6s ease-out both;
        }

        .animate-slide-in-5 {
          animation: slide-in-5 0.6s ease-out both;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default PouchShapeSelector;
