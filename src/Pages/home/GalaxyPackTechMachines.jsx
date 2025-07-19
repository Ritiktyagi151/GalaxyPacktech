import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import machinesData from "./productdetails/machines_data.json";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent">
            Galaxy PackTech Pouch Making Machines
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Premium pouch making machines delivering precision, speed, and
            versatility for all packaging needs.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machinesData.machines.map((machine, index) => (
            <div
              key={machine.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              {/* Machine Image */}
              <div className="relative h-48 bg-gray-100">
                <img
                  src={
                    machinesData.machineImages[
                      index % machinesData.machineImages.length
                    ]
                  }
                  alt={machine.title}
                  className="w-full h-full object-fill"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[24px] font-bold text-orange-400 ">
                    {machine.model}
                  </div>
                  <h3 className="text-[16px] font-bold text-white">
                    {machine.title}
                  </h3>
                </div>
              </div>

              {/* Machine Details */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm">
                  {machine.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4 bg-gray-50 p-2 rounded-lg">
                  {Object.entries(machine.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {key}
                      </div>
                      <div className="text-sm font-bold text-orange-600">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {machine.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Link to={`/products/${machine.id}`}>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center space-x-2 text-sm">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;