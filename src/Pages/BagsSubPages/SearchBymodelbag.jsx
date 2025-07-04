import React from "react";

const machinesData = [
  {
    series: "Automatic Bag Making Machines",
    id: "auto",
    bgColor: "bg-orange-600",
    items: [
      {
        name: "ABM-5000",
        desc: "Fully automatic high-speed bag making machine",
        link: "ABM-5000.html",
        details: "Produces up to 120 bags per minute with precision cutting and sealing. Handles various materials including HDPE, LDPE, and PP.",
        image: "https://source.unsplash.com/random/300x200?bag-machine",
      },
      {
        name: "ABM-3000X",
        desc: "Semi-automatic bag making machine",
        link: "ABM-3000X.html",
        details: "Versatile machine for producing T-shirt bags, grocery bags, and merchandise bags with easy operation controls.",
        image: "https://source.unsplash.com/random/300x200?plastic-bag-machine",
      },
    ],
  },
  {
    series: "Woven Bag Making Machines",
    id: "woven",
    bgColor: "bg-orange-500",
    items: [
      {
        name: "WBM-750",
        desc: "Circular loom woven bag machine",
        link: "WBM-750.html",
        details: "Produces high-quality PP woven bags with width up to 750mm. Ideal for rice, fertilizer, and construction material bags.",
        image: "https://source.unsplash.com/random/300x200?woven-bag-machine",
      },
      {
        name: "WBM-1000",
        desc: "Heavy-duty woven bag making machine",
        link: "WBM-1000.html",
        details: "Industrial-grade machine for producing FIBC/jumbo bags up to 1000mm width with various stitching options.",
        image: "https://source.unsplash.com/random/300x200?jumbo-bag-machine",
      },
    ],
  },
  {
    series: "Laminated Bag Making Machines",
    id: "laminated",
    bgColor: "bg-orange-400",
    items: [
      {
        name: "LBM-600",
        desc: "Multi-layer laminated bag machine",
        link: "LBM-600.html",
        details: "Produces high-barrier laminated stand-up pouches, zipper bags, and gusseted bags with up to 5 material layers.",
        image: "https://source.unsplash.com/random/300x200?laminated-bag-machine",
      },
      {
        name: "LBM-800",
        desc: "High-speed laminated bag machine",
        link: "LBM-800.html",
        details: "Advanced technology for food-grade packaging bags including vacuum bags and retort pouches.",
        image: "https://source.unsplash.com/random/300x200?food-bag-machine",
      },
    ],
  },
  {
    series: "Paper Bag Making Machines",
    id: "paper",
    bgColor: "bg-orange-600",
    items: [
      {
        name: "PBM-450",
        desc: "Automatic paper bag making machine",
        link: "PBM-450.html",
        details: "Produces kraft paper bags, shopping bags, and handle bags with optional glue dot application.",
        image: "https://source.unsplash.com/random/300x200?paper-bag-machine",
      },
      {
        name: "PBM-600",
        desc: "High-capacity paper bag machine",
        link: "PBM-600.html",
        details: "Manufactures premium shopping bags with reinforced bottoms and various handle options up to 600mm width.",
        image: "https://source.unsplash.com/random/300x200?shopping-bag-machine",
      },
    ],
  },
  {
    series: "Bag Printing Machines",
    id: "printing",
    bgColor: "bg-orange-500",
    items: [
      {
        name: "BPM-800",
        desc: "8-color flexo bag printing machine",
        link: "BPM-800.html",
        details: "High-precision printing for plastic and woven bags with registration accuracy up to ±0.1mm.",
        image: "https://source.unsplash.com/random/300x200?bag-printer",
      },
      {
        name: "BPM-1200",
        desc: "Wide-web bag printing machine",
        link: "BPM-1200.html",
        details: "Industrial-scale printing for large format bags up to 1200mm width with UV or water-based inks.",
        image: "https://source.unsplash.com/random/300x200?wide-bag-printer",
      },
    ],
  },
  {
    series: "Bag Sealing Machines",
    id: "sealing",
    bgColor: "bg-orange-600",
    items: [
      {
        name: "BSM-300",
        desc: "Automatic bag sealing machine",
        link: "BSM-300.html",
        details: "Continuous band sealer for plastic bags with adjustable temperature and speed controls.",
        image: "https://source.unsplash.com/random/300x200?bag-sealer",
      },
      {
        name: "BSM-500",
        desc: "Vacuum bag sealing machine",
        link: "BSM-500.html",
        details: "Combination vacuum and sealing system for food packaging and industrial bags.",
        image: "https://source.unsplash.com/random/300x200?vacuum-bag-sealer",
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
            </dt>
            <img
              src={item.image}
              alt={item.name}
              className="w-full md:w-48 h-32 object-cover rounded-lg"
            />
          </dl>
        </a>
      ))}
    </div>
  </section>
);

const BagMakingMachines = () => (
  <div className="container mx-auto p-4 bg-white">
    <div className="mb-8">
      <div className="bg-orange-50 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-orange-800 mb-4">Professional Bag Making Machinery</h1>
        <p className="text-lg text-gray-800">
          Complete solutions for manufacturing all types of bags - from plastic shopping bags to woven PP sacks, 
          laminated pouches to paper carriers. Our machines deliver high productivity and consistent quality.
        </p>
      </div>
    </div>

    {machinesData.map((series, index) => (
      <MachineSeries key={index} {...series} />
    ))}

    <div id="advantages" className="mt-8">
      <h2 className="text-3xl font-bold text-orange-800 mb-4">
        Advantages of Our Bag Making Equipment
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li className="bg-white p-4 rounded-lg shadow-md border border-orange-200">
          <p className="text-xl font-semibold text-orange-800">
            High-Speed Production
          </p>
          <p className="text-gray-600">Automated systems producing thousands of bags per hour with minimal labor.</p>
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md border border-orange-200">
          <p className="text-xl font-semibold text-orange-800">
            Precision Bag Manufacturing
          </p>
          <p className="text-gray-600">Consistent bag dimensions, accurate printing registration, and reliable sealing.</p>
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md border border-orange-200">
          <p className="text-xl font-semibold text-orange-800">
            Material Versatility
          </p>
          <p className="text-gray-600">
            Handle various materials including plastics, woven PP, laminates, and paper.
          </p>
        </li>
      </ul>
    </div>
  </div>
);

export default BagMakingMachines;