import React from "react";

// Updated machinesData with image URLs
const machinesData = [
  {
    series: "BH Series [BOX POUCH®]",
    id: "bhb",
    bgColor: "bg-orange-600",
    items: [
      {
        name: "BH-60DG-F",
        desc: "BOX POUCH® making machine (with a high quality at a high manufacturing speed)",
        link: "BH-60DG-F.html",
        details:
          "This model can make BOX POUCH® with many advantages different from all the others.",
        image: "https://source.unsplash.com/random/300x200?machine",
      },
      {
        name: "BH-80DG-F",
        desc: "BOX POUCH® making machine (with a high quality at a high manufacturing speed)",
        link: "BH-80DG-F.html",
        details:
          "This model can make BOX POUCH® (large-capacity) with many advantages different from all the others.",
        image: "https://source.unsplash.com/random/300x200?packaging",
      },
    ],
  },
  {
    series: "BH Series",
    id: "bh",
    bgColor: "bg-orange-500",
    items: [
      {
        name: "BH-60D",
        desc: "High-speed, three-side-seal, automatic pouch making machine",
        link: "BH-60D.html",
        details:
          "This model can make pouches with right-and-left side seals and three bottom seals. The pouches are often used for food.",
        image: "https://source.unsplash.com/random/300x200?industrial",
      },
      {
        name: "BH-60DLLS",
        desc: "High-speed, three-side-seal, automatic pouch making machine with standing pouch unit",
        link: "BH-60DLLS.html",
        details:
          "This model can make appealing and standing pouches with right-and-left side seals and three bottom seals.",
        image: "https://source.unsplash.com/random/300x200?manufacturing",
      },
      {
        name: "BH-60DLLC",
        desc: "High-speed, three-side-seal, automatic pouch making machine with zipper seal unit",
        link: "BH-60DLLC.html",
        details:
          "This model can make pouches with zipper, right-and-left side seals and three bottom seals. The pouches have good preservation quality.",
        image: "https://source.unsplash.com/random/300x200?machinery",
      },
      {
        name: "BH-60DLLSC",
        desc: "High-speed, three-side-seal, automatic pouch making machine with standing pouch and zipper seal units",
        link: "BH-60DLLSC.html",
        details:
          "This model can make standing pouches with zipper. The pouches with zipper can be used to preserve content even after opening.",
        image: "https://source.unsplash.com/random/300x200?pouch",
      },
      {
        name: "BH-80D",
        desc: "High-speed, three-side-seal, automatic pouch making machine",
        link: "BH-80D.html",
        details:
          "This model can make larger three-side-seal pouches than BH-60D series model.",
        image: "https://source.unsplash.com/random/300x200?automation",
      },
      {
        name: "BH-60DLLSC+CT",
        desc: "High-speed, automatic pouch making machine",
        link: "BH-60DLLSC+CT.html",
        details: "Half fold fusion, standing pouch and zipper seal units.",
        image: "https://source.unsplash.com/random/300x200?factory",
      },
    ],
  },
  {
    series: "CT Series",
    id: "ct",
    bgColor: "bg-orange-400",
    items: [
      {
        name: "CT-60DLLSC",
        desc: "High-speed, half fold fusion, automatic 1-line bag making machine with standing pouch and zipper seal units",
        link: "CT-60DLLSC.html",
        details:
          "This model is our best selling machine that can make standing pouches with zipper. The pouches are the most suitable for pet food, etc. Side gusset/Quad Seal bag can be made with the Quad Seal option.",
        image: "https://source.unsplash.com/random/300x200?production",
      },
      {
        name: "CT-80DLLSC",
        desc: "High-speed, half fold fusion, automatic 1-line bag making machine with standing pouch and zipper seal units",
        link: "CT-80DLLSC.html",
        details:
          "This model can make larger standing pouches with zipper than CT-60DLLSC model. The pouches are the most suitable for seeds and fertilizer.",
        image: "https://source.unsplash.com/random/300x200?equipment",
      },
    ],
  },
  {
    series: "FD Series",
    id: "fd",
    bgColor: "bg-orange-600",
    items: [
      {
        name: "FD-35V",
        desc: "High-speed, center press-seal, automatic pouch making machine",
        link: "FD-35V.html",
        details:
          "This model can make pouches that are the most suitable for dry goods such as coffee beans and wheat flour.",
        image: "https://source.unsplash.com/random/300x200?packing",
      },
      {
        name: "FD-35VSC",
        desc: "High-speed, half fold fusion, automatic 1-line bag making machine with standing pouch and zipper seal units",
        link: "FD-35VSC.html",
        details:
          "This model can make the center press-seal type of not only standing pouches with zipper, but also side gusset pouches.",
        image: "https://source.unsplash.com/random/300x200?mechanical",
      },
      {
        name: "FD-60D",
        desc: "High-speed, center-seal, automatic pouch making machine",
        link: "FD-60D.html",
        details:
          "This model, equipped with creasing heater as standard equipment, can make pouches that are the most suitable for food such as coffee beans and wheat flour.",
        image: "https://source.unsplash.com/random/300x200?industry",
      },
      {
        name: "FD-60DLLSC",
        desc: "High-speed, half fold fusion, automatic 1-line bag making machine",
        link: "FD-60DLLSC.html",
        details:
          "This model can make the large center press-seal type of not only standing pouches with zipper, but also side gusset pouches and quad seal bags. The large pouches are the most suitable for seed and fertilizer.",
        image: "https://source.unsplash.com/random/300x200?heavy-machine",
      },
    ],
  },
  {
    series: "HK Series",
    id: "hk",
    bgColor: "bg-orange-500",
    items: [
      {
        name: "HK-40V",
        desc: "High-speed, side-weld, automatic bag making machine",
        link: "HK-40V.html",
        details:
          "This side-weld type model can make small-sized pouches often used for packing of clothing and items such as handkerchiefs and towels.",
        image: "https://source.unsplash.com/random/300x200?textile",
      },
      {
        name: "HK-65V",
        desc: "High-speed, side-weld, automatic bag making machine",
        link: "HK-65V.html",
        details:
          "This side-weld type model can make slightly larger pouches often used for packing larger items of clothes, commodities, etc. than HK-40V model.",
        image: "https://source.unsplash.com/random/300x200?garment",
      },
      {
        name: "HK-90V",
        desc: "High-speed, side-weld, automatic bag making machine",
        link: "HK-90V.html",
        details:
          "This model can make slender (up to 900 mm) and large pouches as well as large-sized pouches.",
        image: "https://source.unsplash.com/random/300x200?packaging-machine",
      },
      {
        name: "VK-65",
        desc: "High-speed, oblique side-weld, automatic bag making machine for triangular and trapezoid bags",
        link: "VK-65.html",
        details:
          "This model can make various sized trapezoidal pouches (triangular), by using inclining thermal blades (blade for both sealing and separating).",
        image: "https://source.unsplash.com/random/300x200?blade",
      },
      {
        name: "VK-90",
        desc: "High-speed, oblique large side-weld, automatic bag making machine for triangular and trapezoid bags",
        link: "VK-90.html",
        details:
          "This model can make larger trapezoidal pouches (triangular) than the VK-65 model, suitable for packing of vegetables, flowers, etc.",
        image: "https://source.unsplash.com/random/300x200?agriculture",
      },
    ],
  },
  {
    series: "Spout Inserter",
    id: "st",
    bgColor: "bg-orange-600",
    items: [
      {
        name: "ST-30",
        desc: "Spout inserter",
        link: "ST-30.html",
        details:
          'New cutting-edge spout inserter, the "ST-30"! Wider spout installation angle capabilities than our "ST-24"',
        image: "https://source.unsplash.com/random/300x200?spout",
      },
    ],
  },
  {
    series: "Options",
    id: "op",
    bgColor: "bg-orange-400",
    items: [
      {
        name: "Coreless Trim Winder",
        desc: "Applies to all models",
        link: "op01.html",
        details: "Wastage of roll film can be trimmed efficiently and easily.",
        image: "https://source.unsplash.com/random/300x200?winder",
      },
      {
        name: "Full-Shape Thomson Die-Cut unit",
        desc: "Applies to BH / CT series",
        link: "op02.html",
        details:
          "Galaxy Packtech’s servo-driven, Thomson die-cut unit can immediately solve problems with the manufacturing of shaped pouches.",
        image: "https://source.unsplash.com/random/300x200?die-cut",
      },
      {
        name: "Cutter Control System",
        desc: "Applies to BH, CT, FD series",
        link: "op04.html",
        details:
          "Galaxy Packtech’s original unit meets needs of clean notching and rounded corner cut.",
        image: "https://source.unsplash.com/random/300x200?cutter",
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