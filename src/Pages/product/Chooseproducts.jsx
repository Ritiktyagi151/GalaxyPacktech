import { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
// OR
// import Link from 'next/link'; // If using Next.js

const MachineCategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Pouches Making Machine",
      description:
        "High-quality machines for manufacturing various types of pouches",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      link: "/pochespage", // Add your link path here
    },
    {
      id: 2,
      name: "Bags Making Machine",
      description: "Advanced equipment for producing durable bags of all sizes",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      link: "/bagspage", // Add your link path here
    },
  ];

  return (
    <div className=" bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl text-center font-bold text-orange-600 mb-2">
          Choose Your Machine
        </h1>
        <p className="text-yellow-600 text-center mb-8">
          Select the category that fits your production needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Link
              to={category.link} // React Router
              // href={category.link} // Next.js
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="block" // Ensure link takes full space
            >
              <div
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "border-orange-500 bg-orange-50 shadow-lg"
                    : "border-yellow-200 hover:border-yellow-300 hover:bg-yellow-50"
                }`}
              >
                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-full mr-4 ${
                      selectedCategory === category.id
                        ? "bg-orange-100 text-orange-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-semibold ${
                        selectedCategory === category.id
                          ? "text-orange-700"
                          : "text-gray-800"
                      }`}
                    >
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{category.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {selectedCategory && (
          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">
              You selected:{" "}
              {categories.find((c) => c.id === selectedCategory).name}
            </h3>
            <p className="text-gray-700 mb-4">
              Great choice! Please proceed to configure your machine options.
            </p>
            <Link
              to={categories.find((c) => c.id === selectedCategory).link} // React Router
              // href={categories.find(c => c.id === selectedCategory).link} // Next.js
              className="inline-block"
            >
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300">
                Continue
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MachineCategorySelector;
