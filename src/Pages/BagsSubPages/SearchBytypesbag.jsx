import React from "react";

const SearchByType = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100">
      {/* Intro Section */}
      <div className="mb-8">
        <p className="text-xl font-semibold text-orange-600 mb-4">
          Find the perfect bag making machine for your industry needs
        </p>
        <div className="text-gray-700">
          <p>
            Our advanced bag making machines produce high-quality bags for
            various industries including retail, food packaging, industrial
            applications, and more. With cutting-edge technology and precision
            engineering, we offer solutions for every bag manufacturing
            requirement.
          </p>
          <p>
            Browse our recommended machines categorized by industry applications
            below.
          </p>
        </div>
      </div>

      {/* Our Bag Making Machines */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">
          Our Bag Making Machine Advantages
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="bg-white p-4 rounded shadow">
            <p className="font-semibold text-orange-600">
              High Production Speed
            </p>
            <p className="text-gray-600">
              Capable of producing up to 150 bags per minute
            </p>
          </li>
          <li className="bg-white p-4 rounded shadow">
            <p className="font-semibold text-orange-600">
              Precision Engineering
            </p>
            <p className="text-gray-600">
              Consistent quality with accurate cutting and sealing
            </p>
          </li>
          <li className="bg-white p-4 rounded shadow">
            <p className="font-semibold text-orange-600">Versatile Materials</p>
            <p className="text-gray-600">
              Works with various materials including PP, PE, and laminates
            </p>
          </li>
        </ul>
      </div>

      {/* Retail Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-white bg-orange-600 p-3 rounded">
          🛍️ Retail Bag Machines
        </h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">
            Complete Retail Bag Solutions
          </h3>
          <p className="text-gray-700 mb-4">
            Our machines produce high-quality retail bags including shopping
            bags, merchandise bags, and boutique packaging. Choose from various
            handle options, printing capabilities, and material thicknesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-800">Recommended Models:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {["RB-450", "RB-600", "RB-800"].map((model) => (
                  <a
                    key={model}
                    href={`${model}.html`}
                    className="text-orange-600 hover:underline"
                  >
                    {model}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Features:</h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Automatic handle attachment</li>
                <li>High-speed printing up to 6 colors</li>
                <li>Reinforced bottom options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Food Packaging Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-white bg-orange-600 p-3 rounded">
          🍞 Food Packaging Machines
        </h2>
        <div className="space-y-4">
          {/* Grocery Bags */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-orange-700 mb-2">
              Grocery & Produce Bags
            </h3>
            <p className="text-gray-700 mb-4">
              Sanitary, food-safe bag production with options for breathable
              materials, gussets, and different seal types.
            </p>
            <div className="flex flex-wrap gap-2">
              {["FB-350", "FB-500", "FB-750"].map((model) => (
                <a
                  key={model}
                  href={`${model}.html`}
                  className="text-orange-600 hover:underline"
                >
                  {model}
                </a>
              ))}
            </div>
          </div>

          {/* Specialty Food Bags */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-orange-700 mb-2">
              Specialty Food Bags
            </h3>
            <p className="text-gray-700 mb-4">
              Machines for bakery bags, frozen food packaging, and vacuum-sealed
              bags with high barrier properties.
            </p>
            <div className="flex flex-wrap gap-2">
              {["SFB-400", "SFB-600", "VSB-450"].map((model) => (
                <a
                  key={model}
                  href={`${model}.html`}
                  className="text-orange-600 hover:underline"
                >
                  {model}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-white bg-orange-600 p-3 rounded">
          🏭 Industrial Bag Machines
        </h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">
            Heavy-Duty Industrial Solutions
          </h3>
          <p className="text-gray-700 mb-4">
            Rugged machines designed for producing large, durable bags for
            construction, agriculture, chemicals, and bulk materials.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-800">Standard Models:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {["IB-1000", "IB-1200", "IB-1500"].map((model) => (
                  <a
                    key={model}
                    href={`${model}.html`}
                    className="text-orange-600 hover:underline"
                  >
                    {model}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Capabilities:</h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Up to 1500mm bag width</li>
                <li>Multi-layer lamination</li>
                <li>UV-resistant materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-white bg-orange-600 p-3 rounded">
          📦 E-commerce Packaging Machines
        </h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">
            Shipping & Mailing Solutions
          </h3>
          <p className="text-gray-700 mb-4">
            Produce poly mailers, padded envelopes, and return bags optimized
            for e-commerce businesses and logistics.
          </p>
          <div className="flex flex-wrap gap-2">
            {["EM-450", "EM-600", "PE-500"].map((model) => (
              <a
                key={model}
                href={`${model}.html`}
                className="text-orange-600 hover:underline"
              >
                {model}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-white bg-orange-600 p-3 rounded">
          ✨ Specialty Bag Machines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Medical Bags */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-orange-700 mb-2">
              Medical & Pharmaceutical
            </h3>
            <p className="text-gray-700 mb-4">
              Sterile packaging solutions for medical waste, pharmaceutical
              products, and biohazard materials.
            </p>
            <div className="flex flex-wrap gap-2">
              {["MB-300", "MB-450", "MB-600"].map((model) => (
                <a
                  key={model}
                  href={`${model}.html`}
                  className="text-orange-600 hover:underline"
                >
                  {model}
                </a>
              ))}
            </div>
          </div>

          {/* Custom Bags */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-orange-700 mb-2">
              Custom & Printed Bags
            </h3>
            <p className="text-gray-700 mb-4">
              High-quality printing machines for custom branded bags with
              advanced color matching.
            </p>
            <div className="flex flex-wrap gap-2">
              {["PB-450", "PB-600", "PB-800"].map((model) => (
                <a
                  key={model}
                  href={`${model}.html`}
                  className="text-orange-600 hover:underline"
                >
                  {model}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section className="mb-8 bg-orange-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-orange-700 mb-4">
          Technical Support & Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold text-gray-800">
              Installation & Training
            </h3>
            <p className="text-gray-700">
              Comprehensive on-site setup and operator training
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">
              Maintenance Packages
            </h3>
            <p className="text-gray-700">
              Preventive maintenance to maximize uptime
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Spare Parts</h3>
            <p className="text-gray-700">
              Genuine parts for all machine models
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchByType;
