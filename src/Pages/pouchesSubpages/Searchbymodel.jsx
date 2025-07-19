import React from "react";

const machinesData = [
  {
    series: "GSC Series",
    id: "gsc",
    bgColor: "bg-orange-600",
    items: [
      {
        name: "GSC 20 HSI",
        desc: "Automatic Multi-Format Pouch Machine",
        link: "GSC-20-HSI.html",
        details:
          "High-precision machine for center seal, gusset, three side seal, and quad seal pouches",
        image: "images/product-images/GS-20-HSI-home.jpg",
        features: [
          "Max web: 1000mm width, 600mm diameter",
          "Speed: Up to 140 shots/min",
          "Handles pouch widths up to 500mm",
          "Supports recyclable films",
          "Skip function for longer pouches",
        ],
      },
      {
        name: "GSC 14 PLUS 300",
        desc: "High-Speed Pouch Machine",
        link: "GSC-14-PLUS-300.html",
        details: "Compact machine delivering up to 300 pouches/minute",
        image:
          "/images/product-images/galaxy-packtech-image-resize/GSC-14-PLUS-200.jpg",
        features: [
          "Max web: 700mm width",
          "Speed: Up to 300 pouches/min",
          "Quick changeover system",
          "Remote diagnostics support",
          "Compact footprint",
        ],
      },
      {
        name: "GSC 20 PLUS COMBI",
        desc: "Multi-Format Combi Pouch Machine",
        link: "GSC-20-PLUS-COMBI.html",
        details:
          "All-in-one solution for various pouch types including quad seal",
        image:
          "/images/product-images/galaxy-packtech-image-resize/GSC-20-plus-combi.jpg",
        features: [
          "Max web: 1000mm width",
          "Speed: Up to 170 shots/min",
          "Handles 5+ pouch formats",
          "Modular design",
          "Sustainable film ready",
        ],
      },
    ],
  },
  {
    series: "GS Series",
    id: "gs",
    bgColor: "bg-orange-500",
    items: [
      {
        name: "GS 24 TSG",
        desc: "Automatic Flat Bottom Pouch Machine",
        link: "/products/${machine.id}  ",
        details: "Specialized for flat bottom and gusset pouches",
        image:
          "/images/product-images/galaxy-packtech-image-resize/GS-24-TSG.jpg",
        features: [
          "Max web: 1250mm width",
          "Speed: Up to 70 shots/min",
          "2-web or 3-web configurations",
          "Precision sealing and cutting",
          "Supports mono-material films",
        ],
      },
      {
        name: "GS 24 PLUS 200",
        desc: "High-Speed Stand-Up Pouch Machine",
        link: "/products/${machine.id}",
        details: "Versatile machine for stand-up, zipper, and shaped pouches",
        image:
          "/images/product-images/galaxy-packtech-image-resize/GS-24-PLUS-200.jpg",
        features: [
          "Max web: 1220mm width",
          "Speed: Up to 200 cuts/min",
          "Ultrasonic bit fusing",
          "Vision QC system",
          "Supports compostable films",
        ],
      },
      {
        name: "GS 20 PLUS",
        desc: "Automatic Pouch Making Machine",
        link: "/products/${machine.id}",
        details: "Versatile machine for stand-up, gusset, and zipper pouches",
        image:
          "/images/product-images/galaxy-packtech-image-resize/GS-24-PLUS-200.jpg",
        features: [
          "Max web: 1000mm width",
          "Speed: Up to 160 shots/min",
          "Recyclable film compatible",
          "Quick setup with job recall",
          "Precision web handling",
        ],
      },
    ],
  },
  {
    series: "GT Series",
    id: "gt",
    bgColor: "bg-orange-400",
    items: [
      {
        name: "GT 24 PLUS 200",
        desc: "Multi-Format Pouch Machine",
        link: "GT-24-PLUS-200.html",
        details: "Advanced machine for stand-up, zipper, and quad seal pouches",
        image: "https://example.com/machine6.jpg",
        features: [
          "Max web: 1200mm width",
          "Speed: Up to 200 cuts/min",
          "Automatic recipe storage",
          "LAN-enabled remote access",
          "Compact design",
        ],
      },
    ],
  },
];

const MachineSeries = ({ series, id, bgColor, items }) => (
  <section id={id} className="mb-8">
    <h2 className={`text-2xl font-bold text-white ${bgColor} p-4 rounded-t-lg`}>
      {series}
    </h2>
    <div className="space-y-4 bg-white p-4 rounded-b-lg shadow-md">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="block hover:bg-orange-50 p-4 rounded-lg transition"
        >
          <dl className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
            <dt className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-orange-800">
                  {item.name}
                </span>
                <span className="text-sm text-gray-600">{item.desc}</span>
              </div>
              <dd className="mt-2 text-gray-700">{item.details}</dd>
              {item.features && (
                <ul className="mt-2 text-sm text-gray-600">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-orange-500 mr-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </dt>
            <img
              src={item.image}
              alt={item.name}
              className="w-full md:w-[700px] h-50 object-fill rounded-lg"
            />
          </dl>
        </a>
      ))}
    </div>
  </section>
);

const SearchByModel = () => (
  <div className="container mx-auto p-4 bg-white">
    <div className="mb-8">
      <div className="bg-orange-50 p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-800">
          Find information on Galaxy Packtech pouch making machines, including
          an overview, advantages, sample images, and standard specifications.
        </p>
      </div>
    </div>

    {machinesData.map((series, index) => (
      <MachineSeries key={index} {...series} />
    ))}

    <div id="pdtpct" className="mt-8">
      <h2 className="text-3xl font-bold text-orange-800 mb-4">
        Galaxy Packtech's Pouch Machine
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li className="bg-white p-4 rounded-lg shadow-md border border-orange-200">
          <p className="text-xl font-semibold text-orange-800">
            The sealing is strong.
          </p>
          <p className="text-gray-600">Seal is airtight.</p>
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md border border-orange-200">
          <p className="text-xl font-semibold text-orange-800">
            The appearance is good.
          </p>
          <p className="text-gray-600">The corner cut is beautiful.</p>
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md border border-orange-200">
          <p className="text-xl font-semibold text-orange-800">
            The speed is high.
          </p>
          <p className="text-gray-600">
            Pouch production possessed with speed and accuracy.
          </p>
        </li>
      </ul>
    </div>
  </div>
);

export default SearchByModel;
