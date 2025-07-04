import React, { useState } from "react";
import {
  FiCheckCircle,
  FiPackage,
  FiZap,
  FiSettings,
  FiFilter,
  FiDownload,
  FiInfo,
  FiPlay,
} from "react-icons/fi";

const Product = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeMachine, setActiveMachine] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const machines = [
    {
      id: 1,
      name: "GSC 20 HSI COMBI",
      types: ["pouch", "bag"],
      categories: ["Stand-Up Pouch", "Flat Bag"],
      description:
        "Multi-format machine for both pouches and flat bags with precise sealing and cutting performance.",
      capacity: "Up to 140 shots/min (pouches), 120 bags/min",
      features: [
        "Convertible between pouch and bag production",
        "Centre Seal Pouch or Flat Bag modes",
        "Quick changeover system (under 30 minutes)",
        "Dual-purpose sealing jaws",
        "Adjustable cutting system for both formats",
        "Common control system for all operations",
      ],
      specs: {
        "Machine Model": "GSC 20 HSI COMBI",
        Formats: "Pouches: Centre Seal, Gusset | Bags: Flat, Side Seal",
        "Max Web Width": "1000 mm",
        "Max Speed": "140 pouches/min or 120 bags/min",
        "Material Compatibility": "LDPE, HDPE, PP, laminated films",
        "Power Requirement": "7.5 kW",
        "Machine Dimensions": "6500 × 2500 × 2200 mm",
        Weight: "3000 kg",
      },
      overview:
        "The GSC 20 HSI COMBI is our flagship convertible machine that handles both pouch and bag production with minimal changeover time. Its dual-mode operation makes it ideal for manufacturers who need flexibility to switch between packaging types without investing in separate machines.",
      image: "/images/combi-1.jpg",
      video: "/videos/combi-1.mp4",
    },
    {
      id: 2,
      name: "GS 24 PLUS DUAL",
      types: ["pouch", "bag"],
      categories: ["Stand-Up Pouch", "D-Style Bag"],
      description:
        "Dual-function machine producing premium stand-up pouches and D-style carry bags.",
      capacity: "Up to 200 pouches/min or 90 bags/min",
      features: [
        "Interchangeable forming systems",
        "Dual-purpose handle attachment",
        "Common servo drive system",
        "Unified HMI for both operations",
        "Shared material feeding system",
        "Convertible sealing stations",
      ],
      specs: {
        "Machine Model": "GS 24 PLUS DUAL",
        Formats: "Pouches: Stand-Up, Zipper | Bags: D-Style with handles",
        "Max Web Width": "1200 mm",
        "Max Speed": "200 pouches/min or 90 bags/min",
        "Material Compatibility": "PET/PE, OPP, laminated structures",
        "Power Requirement": "8.5 kW",
        "Machine Dimensions": "7000 × 2800 × 2400 mm",
        Weight: "3500 kg",
      },
      overview:
        "This versatile machine combines stand-up pouch and D-style bag production in one platform. With its quick-change tooling system, manufacturers can switch between premium pouch and bag formats in under 45 minutes, maximizing production flexibility.",
      image: "/images/combi-2.jpg",
      video: "/videos/combi-2.mp4",
    },
    {
      id: 3,
      name: "GT COMBI PRO 300",
      types: ["pouch", "bag"],
      categories: ["Three-Side Seal Pouch", "Gusseted Bag"],
      description:
        "High-speed combination machine for three-side pouches and gusseted bags.",
      capacity: "Up to 300 pouches/min or 150 bags/min",
      features: [
        "Dual-format ultrasonic sealing",
        "Convertible gusset forming",
        "Shared control system",
        "Common web tension management",
        "Interchangeable cutting units",
        "Quick-release tooling system",
      ],
      specs: {
        "Machine Model": "GT COMBI PRO 300",
        Formats: "Pouches: Three-Side Seal | Bags: Gusseted",
        "Max Web Width": "800 mm",
        "Max Speed": "300 pouches/min or 150 bags/min",
        "Material Compatibility": "All heat-sealable films 40-150 microns",
        "Power Requirement": "9.5 kW",
        "Machine Dimensions": "7500 × 3000 × 2500 mm",
        Weight: "4200 kg",
      },
      overview:
        "The GT COMBI PRO 300 represents our most advanced combination technology, delivering pharmaceutical-grade sealing for both three-side pouches and gusseted bags. The machine's convertible design allows production of both formats with identical precision and quality.",
      image: "/images/combi-3.jpg",
      video: "/videos/combi-3.mp4",
    },
    // Additional machines...
  ];

  const filteredMachines =
    activeFilter === "all"
      ? machines
      : machines.filter((machine) => machine.types.includes(activeFilter));

  const getCategoryColors = (categories) => {
    return categories.map((category) => {
      switch (category) {
        case "Stand-Up Pouch":
          return "bg-purple-100 text-purple-800";
        case "Flat Bag":
          return "bg-blue-100 text-blue-800";
        case "D-Style Bag":
          return "bg-green-100 text-green-800";
        case "Three-Side Seal Pouch":
          return "bg-red-100 text-red-800";
        case "Gusseted Bag":
          return "bg-yellow-100 text-yellow-800";
        default:
          return "bg-orange-100 text-orange-800";
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-800 mb-2">
          Dual-Function Packaging Machinery
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Convertible machines that manufacture both bags and pouches with quick
          changeover
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg flex items-center ${
              activeFilter === "all"
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FiPackage className="mr-2" />
            All Machines
          </button>
          <button
            onClick={() => setActiveFilter("pouch")}
            className={`px-4 py-2 text-sm font-medium flex items-center ${
              activeFilter === "pouch"
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FiPackage className="mr-2" />
            Pouch Mode
          </button>
          <button
            onClick={() => setActiveFilter("bag")}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg flex items-center ${
              activeFilter === "bag"
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FiPackage className="mr-2" />
            Bag Mode
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Machine List */}
        <div className="md:col-span-1 bg-white rounded-xl shadow-md overflow-hidden border border-orange-100">
          <div className="p-4 bg-orange-600 text-white">
            <h3 className="font-semibold flex items-center">
              <FiFilter className="mr-2" />
              {activeFilter === "all"
                ? "All Machines"
                : activeFilter === "pouch"
                ? "Pouch Mode"
                : "Bag Mode"}
            </h3>
          </div>
          <ul className="divide-y divide-orange-100 max-h-[600px] overflow-y-auto">
            {filteredMachines.map((machine, index) => (
              <li
                key={machine.id}
                className={`p-4 hover:bg-orange-50 cursor-pointer transition ${
                  activeMachine === index
                    ? "bg-orange-100 border-l-4 border-orange-600"
                    : ""
                }`}
                onClick={() => {
                  setActiveMachine(
                    filteredMachines.findIndex((m) => m.id === machine.id)
                  );
                  setShowVideo(false);
                }}
              >
                <h4 className="font-medium text-gray-800">{machine.name}</h4>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <FiZap className="mr-1" size={14} />
                  <span>
                    {activeFilter === "pouch"
                      ? machine.capacity.split("or")[0]
                      : activeFilter === "bag"
                      ? machine.capacity.split("or")[1]
                      : machine.capacity}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {machine.categories.map((category, i) => {
                    const colors = getCategoryColors([category])[0];
                    return (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded-full ${colors}`}
                      >
                        {category}
                      </span>
                    );
                  })}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Machine Details */}
        <div className="md:col-span-3 bg-white rounded-xl shadow-md overflow-hidden border border-orange-100">
          <div className="p-4 bg-orange-600 text-white">
            <h3 className="font-semibold flex items-center">
              <FiSettings className="mr-2" />
              {filteredMachines[activeMachine]?.name || "Machine Details"}
            </h3>
          </div>

          {filteredMachines.length > 0 ? (
            <div className="p-6">
              {/* Overview Section */}
              <div className="mb-8 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                  <FiInfo className="mr-2 text-orange-600" />
                  Overview
                </h4>
                <p className="text-gray-700">
                  {filteredMachines[activeMachine].overview}
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Media Section */}
                <div className="lg:w-1/2">
                  <div className="bg-gray-100 rounded-lg overflow-hidden h-80 mb-4 flex items-center justify-center relative">
                    {showVideo ? (
                      <video
                        src={filteredMachines[activeMachine].video}
                        className="object-cover h-full w-full"
                        controls
                        autoPlay
                      />
                    ) : (
                      <>
                        <img
                          src={filteredMachines[activeMachine].image}
                          alt={filteredMachines[activeMachine].name}
                          className="object-cover h-full w-full"
                        />
                        {filteredMachines[activeMachine].video && (
                          <button
                            onClick={() => setShowVideo(true)}
                            className="absolute bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
                          >
                            <FiPlay size={24} />
                          </button>
                        )}
                      </>
                    )}
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                      <FiDownload className="mr-2" />
                      Download Brochure
                    </button>
                    <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
                      <FiPackage className="mr-2" />
                      Request Demo
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="lg:w-1/2">
                  <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                      <FiZap className="mr-2 text-orange-600" />
                      Operational Modes
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-800">
                          Pouch Mode
                        </h5>
                        <p className="text-sm text-gray-600">
                          {filteredMachines[activeMachine].capacity
                            .split("or")[0]
                            .trim()}
                        </p>
                        <ul className="mt-2 space-y-1">
                          {filteredMachines[activeMachine].features
                            .filter((f) => f.toLowerCase().includes("pouch"))
                            .map((f, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <FiCheckCircle
                                  className="text-orange-500 mr-1 mt-0.5 flex-shrink-0"
                                  size={14}
                                />
                                {f.replace("Pouch:", "").trim()}
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800">Bag Mode</h5>
                        <p className="text-sm text-gray-600">
                          {filteredMachines[activeMachine].capacity
                            .split("or")[1]
                            ?.trim() || "N/A"}
                        </p>
                        <ul className="mt-2 space-y-1">
                          {filteredMachines[activeMachine].features
                            .filter((f) => f.toLowerCase().includes("bag"))
                            .map((f, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <FiCheckCircle
                                  className="text-orange-500 mr-1 mt-0.5 flex-shrink-0"
                                  size={14}
                                />
                                {f.replace("Bag:", "").trim()}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <FiCheckCircle className="mr-2 text-orange-600" />
                    Shared Features
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {filteredMachines[activeMachine].features
                      .filter(
                        (f) =>
                          !f.toLowerCase().includes("pouch") &&
                          !f.toLowerCase().includes("bag")
                      )
                      .map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <FiCheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                  </ul>

                  <button className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition">
                    Get Conversion Kit Details
                  </button>
                </div>
              </div>

              {/* Full Specifications */}
              <div className="mt-8 pt-6 border-t border-orange-200">
                <h4 className="text-xl font-semibold text-orange-800 mb-4">
                  Technical Specifications
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-orange-200">
                    <thead className="bg-orange-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">
                          Parameter
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-orange-800 uppercase tracking-wider">
                          Specification
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-orange-100">
                      {Object.entries(
                        filteredMachines[activeMachine].specs
                      ).map(([key, value]) => (
                        <tr key={key}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {key}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center">
              <p className="text-gray-500">
                No machines found for the selected filter
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
