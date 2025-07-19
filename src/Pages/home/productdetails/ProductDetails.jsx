import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import machinesData from "../productdetails/machines_data.json";
import { CheckCircle, ArrowRight } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("detail");
  const [formData, setFormData] = useState({
    productName: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const machine = machinesData.machines.find((m) => m.id === parseInt(id));
    if (machine) {
      setSelectedMachine(machine);
      setFormData((prev) => ({ ...prev, productName: machine.model }));
      // Set main image to the first image for this machine
      setMainImage(machinesData.machineImages[machine.id - 1]);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  const handleThumbnailClick = (imgIndex) => {
    setMainImage(machinesData.machineImages[imgIndex]);
  };

  if (!selectedMachine) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar - Suggested Products */}
        <div className="lg:w-1/4 order-1 lg:order-1">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 sticky top-30">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Suggested Products
            </h3>
            <div className="space-y-4">
              {machinesData.machines
                .filter((machine) => machine.id !== selectedMachine.id)
                .slice(0, 4)
                .map((machine) => (
                  <a
                    href={`/products/${machine.id}`}
                    key={machine.id}
                    className="block group"
                  >
                    <div className="flex items-center gap-4 p-3 hover:bg-orange-50 rounded-lg transition-all">
                      <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-orange-50 to-pink-50">
                        <img
                          src={machinesData.machineImages[machine.id - 1]}
                          alt={machine.model}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
                          {machine.model}
                        </h4>
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {machine.description}
                        </p>
                        <span className="text-xs font-medium text-orange-600">
                          Speed: {machine.stats?.speed || "N/A"}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:w-3/4 order-2 lg:order-2">
          {/* Breadcrumb */}
          <div className="text-sm breadcrumbs mb-4 px-4 py-2 bg-gray-50 rounded-lg">
            <ul className="flex items-center space-x-2">
              <li>
                <a
                  href="/"
                  className="text-orange-400 hover:text-orange-500 hover:underline transition-colors"
                >
                  Home
                </a>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-orange-400 hover:text-orange-500 hover:underline transition-colors"
                >
                  Products
                </a>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="text-gray-600 font-medium">
                {selectedMachine.model}
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              {selectedMachine.model}
            </h1>
            <h2 className="text-xl font-semibold text-orange-700">
              {selectedMachine.title}
            </h2>
            <p className="text-gray-600">{selectedMachine.tagline}</p>
          </div>

          {/* Product Intro */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Image Gallery */}
            <div className="lg:w-1/2">
              <div className="mb-4 border-2 border-orange-100 rounded-xl overflow-hidden">
                <img
                  src={mainImage}
                  alt={selectedMachine.model}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {machinesData.machineImages.slice(0, 3).map((img, index) => (
                  <div
                    key={index}
                    className={`border-2 rounded-lg overflow-hidden cursor-pointer ${
                      mainImage === img
                        ? "border-orange-500"
                        : "border-orange-100"
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img
                      src={img}
                      alt={`${selectedMachine.model} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Specs */}
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100">
                <p className="text-lg font-semibold mb-4 text-orange-700">
                  {selectedMachine.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-orange-600">
                        Max Speed
                      </h3>
                      <p>{selectedMachine.stats?.speed || "N/A"}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-orange-600">
                        Max Width
                      </h3>
                      <p>{selectedMachine.stats?.width || "N/A"}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-orange-600">
                        Materials
                      </h3>
                      <p>{selectedMachine.stats?.materials || "N/A"}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-orange-600">
                        Web Speed
                      </h3>
                      <p>{selectedMachine.stats?.web_speed || "N/A"}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium text-orange-600 mb-2">
                    Application Industries
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMachine.applicationIndustries.map((industry, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <button
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-medium rounded-lg shadow-md transition-all flex items-center justify-center"
                    onClick={() => setActiveTab("consult")}
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="flex-1 px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-medium rounded-lg shadow-md transition-all">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-100 mb-12">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedMachine.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-100 mb-12">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-orange-600 mb-3">
                  Supported Pouch Types
                </h3>
                <ul className="space-y-2">
                  {selectedMachine.performance.supportedPouchTypes.map((type, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-orange-600 mb-3">
                  Size Compatibility
                </h3>
                <ul className="space-y-2">
                  {Object.entries(selectedMachine.performance.sizeCompatibility).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className="font-medium">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-lg border border-orange-100 mb-12">
            <div className="border-b-2 border-orange-100 flex overflow-x-auto">
              <button
                className={`px-6 py-4 font-medium whitespace-nowrap ${
                  activeTab === "detail"
                    ? "text-orange-600 border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-orange-500"
                }`}
                onClick={() => setActiveTab("detail")}
              >
                Product Details
              </button>
              <button
                className={`px-6 py-4 font-medium whitespace-nowrap ${
                  activeTab === "consult"
                    ? "text-orange-600 border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-orange-500"
                }`}
                onClick={() => setActiveTab("consult")}
              >
                Request Information
              </button>
            </div>

            <div className="p-6 md:p-8">
              {activeTab === "detail" && (
                <div>
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: selectedMachine.full_description,
                    }}
                  />

                  {selectedMachine.technical_specs && (
                    <div className="mt-10">
                      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                        Technical Specifications
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-orange-100">
                          <thead className="bg-orange-50">
                            <tr>
                              <th className="px-4 py-3 border border-orange-100 text-left font-semibold text-orange-700">
                                Parameter
                              </th>
                              <th className="px-4 py-3 border border-orange-100 text-left font-semibold text-orange-700">
                                Specification
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(
                              selectedMachine.technical_specs
                            ).map(([key, value]) => (
                              <tr key={key} className="even:bg-orange-50">
                                <td className="px-4 py-3 border border-orange-100 font-medium capitalize">
                                  {key.replace(/_/g, " ")}
                                </td>
                                <td className="px-4 py-3 border border-orange-100">
                                  {typeof value === 'object' ? (
                                    <ul className="list-disc pl-5">
                                      {Object.entries(value).map(([subKey, subValue]) => (
                                        <li key={subKey}>
                                          <span className="font-medium">{subKey.replace(/_/g, ' ')}:</span> {subValue}
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    value
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                      Key Advantages
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedMachine.advantages.map((advantage, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "consult" && (
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    Contact Us About {selectedMachine.model}
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-orange-100 rounded-lg focus:border-orange-300 focus:ring-orange-200"
                        placeholder="Product Name"
                        readOnly
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-orange-100 rounded-lg focus:border-orange-300 focus:ring-orange-200"
                        placeholder="* Your Name"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-3 border-2 border-orange-100 rounded-lg focus:border-orange-300 focus:ring-orange-200"
                          placeholder="* Email Address"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 border-2 border-orange-100 rounded-lg focus:border-orange-300 focus:ring-orange-200"
                          placeholder="* Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-orange-100 rounded-lg focus:border-orange-300 focus:ring-orange-200"
                        placeholder="* Company Name"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className="w-full p-3 border-2 border-orange-100 rounded-lg focus:border-orange-300 focus:ring-orange-200"
                        placeholder="* Your Requirements or Questions"
                        required
                      ></textarea>
                    </div>
                    <div className="text-center pt-2">
                      <button
                        type="submit"
                        className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-medium rounded-lg shadow-md transition-all"
                      >
                        Submit Inquiry
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;