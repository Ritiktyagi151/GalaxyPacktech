import React, { useState } from "react";

const GalaxyTechProcess = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [popupContent, setPopupContent] = useState(null);
  const [highlightActive, setHighlightActive] = useState(false);

  const tabs = [
    {
      id: 1,
      title: "Phase 1",
      icon: "fas fa-flask",
      heading: "Material Synthesis",
      content: [
        "Our quantum fabric synthesizers create ultra-durable, lightweight materials from molecular blueprints.",
        "Self-cleaning nano-coatings are applied at the atomic level during fabrication.",
        "Materials are tested under extreme galactic conditions before approval.",
      ],
      linkText: "Explore Materials >>",
      linkUrl: "#",
      image:
        "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2340&auto=format&fit=crop",
      popup: {
        title: "Galaxy Pack Tech Material Innovation",
        content: [
          "Quantum-Weave Fabric: Self-repairing material with embedded nano-technology",
          "StellarShield Coating: Protects against cosmic radiation and extreme temperatures",
          "GravityFlex Fibers: Adjustable density for optimal weight distribution",
          "PhotonThread: Light-emitting fibers for visibility in deep space",
        ],
        highlight:
          "Galaxy Pack Tech's proprietary materials undergo 47-stage quantum enhancement, making them 300% more durable than conventional fabrics while maintaining perfect flexibility.",
      },
    },
    {
      id: 2,
      title: "Phase 2",
      icon: "fas fa-cut",
      heading: "Precision Cutting",
      content: [
        "Laser-guided plasma cutters shape materials with micron-level precision.",
        "AI pattern optimization ensures zero material waste in production.",
        "Each cut is verified by quantum imaging scanners for perfect edges.",
      ],
      linkText: "View Cutting Process >>",
      linkUrl: "#",
      image:
        "https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?q=80&w=2340&auto=format&fit=crop",
      popup: {
        title: "Galaxy Pack Tech Cutting Technology",
        content: [
          "Plasma-Laser Hybrid Cutters: Combine heat and precision for perfect edges",
          "Quantum Pattern AI: Optimizes material usage to atomic precision",
          "Holographic Alignment: Projects 3D cutting guides in real-time",
          "Nano-Edge Sealing: Immediately seals edges during cutting process",
        ],
        highlight:
          "Galaxy Pack Tech's cutting systems achieve 99.9999% material utilization efficiency, with zero waste through our closed-loop quantum recycling system.",
      },
    },
    {
      id: 3,
      title: "Phase 3",
      icon: "fas fa-robot",
      heading: "Automated Assembly",
      content: [
        "Our robotic assemblers work in zero-G orbital facilities for perfect seam alignment.",
        "Each pouch undergoes 47-point stress testing before proceeding.",
        "Smart compartments are embedded with flexible display technology.",
      ],
      linkText: "Tour Assembly Line >>",
      linkUrl: "#",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2340&auto=format&fit=crop",
      popup: {
        title: "Galaxy Pack Tech Assembly Systems",
        content: [
          "Zero-G Robotics: Gravity-free environment ensures perfect alignment",
          "Quantum Stitching: Self-healing molecular bonds at every seam",
          "Smart Compartment AI: Automatically adjusts to contents",
          "Holographic QC: Scans every millimeter during assembly",
        ],
        highlight:
          "Galaxy Pack Tech's orbital assembly stations produce bags with 0.001mm precision tolerance, far exceeding industry standards.",
      },
    },
    {
      id: 4,
      title: "Phase 4",
      icon: "fas fa-microchip",
      heading: "Tech Integration",
      content: [
        "Embedded quantum processors are installed for smart functionality.",
        "Solar-weave charging surfaces are integrated into all products.",
        "Each bag receives its unique quantum encryption signature.",
      ],
      linkText: "See Tech Specs >>",
      linkUrl: "#",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2340&auto=format&fit=crop",
      popup: {
        title: "Galaxy Pack Tech Smart Features",
        content: [
          "Quantum Processing: Each bag has more computing power than early space shuttles",
          "Solar-Weave Charging: 500% more efficient than standard solar fabrics",
          "Biometric Security: Palm-print activated compartments",
          "Auto-Adjust Straps: AI-powered comfort optimization",
        ],
        highlight:
          "Galaxy Pack Tech's smart systems are powered by our proprietary QuantumCore processors, delivering unmatched performance in portable devices.",
      },
    },
    {
      id: 5,
      title: "Phase 5",
      icon: "fas fa-shipping-fast",
      heading: "Quality Assurance",
      content: [
        "Each product undergoes simulated 10-year wear testing in seconds.",
        "Our quantum inspectors verify 100% of products before shipping.",
        "Self-repair nano-agents are activated upon first use.",
      ],
      linkText: "Our Quality Promise >>",
      linkUrl: "#",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2340&auto=format&fit=crop",
      popup: {
        title: "Galaxy Pack Tech Quality Standards",
        content: [
          "Time-Compression Testing: Simulates years of use in moments",
          "Quantum Inspection: Examines products at subatomic level",
          "Nano-Repair Systems: Pre-installed maintenance bots",
          "Environmental Stress Testing: From arctic to desert conditions",
        ],
        highlight:
          "Galaxy Pack Tech offers a lifetime warranty backed by our self-repairing nano-technology - the only bags that actually improve with age.",
      },
    },
  ];

  const openPopup = (tab) => {
    setPopupContent(tab.popup);
    setHighlightActive(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopupContent(null);
    setHighlightActive(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      className={`bg-white text-gray-900 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-300 ${
        highlightActive ? "bg-orange-50" : ""
      }`}
    >
      {/* Popup Overlay */}
      {popupContent && (
        <div className="fixed inset-0 backdrop-blur-sm bg-blur-2xl bg-opacity-70 z-200 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-orange-600">
                  {popupContent.title}
                </h3>
                <button
                  onClick={closePopup}
                  className="text-gray-500 hover:text-orange-600 text-2xl"
                >
                  &times;
                </button>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3 text-gray-800">
                  Key Features:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {popupContent.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-r">
                <h4 className="font-bold text-orange-700 mb-2">
                  Galaxy Pack Tech Exclusive:
                </h4>
                <p className="text-gray-800">{popupContent.highlight}</p>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={closePopup}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subtle star pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-orange-500 rounded-full"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div
        className={`max-w-7xl mx-auto relative z-10 transition-all duration-300 ${
          highlightActive ? "scale-95" : ""
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
              Galaxy Pack Tech Manufacturing Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our{" "}
              <strong
                className={`text-orange-600 transition-all ${
                  highlightActive ? "text-2xl text-orange-700 underline" : ""
                }`}
              >
                quantum manufacturing
              </strong>{" "}
              process creates the most advanced pouches and bags in the galaxy.
              Each product combines{" "}
              <strong className="text-orange-600">
                cutting-edge materials
              </strong>{" "}
              with{" "}
              <strong className="text-orange-600">space-age technology</strong>{" "}
              for unparalleled performance.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Our{" "}
              <strong
                className={`text-orange-600 transition-all ${
                  highlightActive ? "text-2xl text-orange-700 underline" : ""
                }`}
              >
                next-gen manufacturing
              </strong>{" "}
              system powers the creation of ultra-modern pouches and bags
              designed for the future. We fuse{" "}
              <strong className="text-orange-600">
                high-performance materials
              </strong>{" "}
              with{" "}
              <strong className="text-orange-600">
                futuristic engineering
              </strong>{" "}
              to deliver unmatched durability and precision.
            </p>

            <div
              className={`bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 transition-all ${
                highlightActive ? "scale-105 shadow-lg" : ""
              }`}
            >
              <h3 className="font-bold text-orange-700 mb-2">
                Why Choose Galaxy Pack Tech?
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Zero-G manufacturing for perfect construction</li>
                <li
                  className={highlightActive ? "font-bold text-orange-600" : ""}
                >
                  Self-repairing nano-fiber materials
                </li>
                <li>Quantum-encrypted smart compartments</li>
                <li>Solar-powered charging surfaces</li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden">
            <div className="pp-advanced-tabs-wrapper flex flex-wrap border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-4 font-medium flex items-center transition-all ${
                    activeTab === tab.id
                      ? "text-orange-600 border-b-2 border-orange-600"
                      : "text-gray-500 hover:text-orange-500"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <i className={`${tab.icon} mr-2`} />
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>

            <div className="pp-advanced-tabs-content-wrapper">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`p-0 ${activeTab === tab.id ? "block" : "hidden"}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="relative h-full min-h-[300px]">
                      <img
                        src={tab.image}
                        alt={tab.heading}
                        className="w-full h-full object-cover absolute inset-0"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-70" />
                    </div>

                    <div className="bg-white p-8">
                      <h3 className="text-2xl font-bold mb-4 text-orange-600">
                        {tab.heading}
                      </h3>
                      {tab.content.map((paragraph, i) => (
                        <p key={i} className="text-gray-700 mb-4">
                          {paragraph}
                        </p>
                      ))}
                      <button
                        onClick={() => openPopup(tab)}
                        className="inline-block mt-4 text-orange-600 hover:text-orange-500 transition-all group"
                      >
                        <span className="relative">
                          {tab.linkText}
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalaxyTechProcess;
