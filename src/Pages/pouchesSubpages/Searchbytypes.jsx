import React from 'react';

const SearchByType = () => {
  // New product data organized by application
  const productCategories = [
    {
      id: "child-resistant",
      title: "Child Resistant",
      description: "Certain products need to be packaged with consumer safety in mind. The Galaxy Pack Tech models below can produce these high quality pouches with certified child resistant zipper and film.",
      models: ["GSC 20 PLUS COMBI", "GS 24 PLUS 200", "GS 20 PLUS"]
    },
    {
      id: "eco-friendly",
      title: "Eco-friendly",
      description: "The pouches made by the below models can be produced utilizing sustainable materials including all PE and PP. These pouches remain of the highest quality and productivity, as is expected with Galaxy Pack Tech machinery.",
      models: ["GSC 20 HSI", "GSC 20 PLUS COMBI", "GS 24 TSG", "GS 24 PLUS 200", "GS 20 PLUS"]
    },
    {
      id: "food",
      title: "Food",
      subcategories: [
        {
          name: "Confectionary",
          description: "Pouches made by the Galaxy Pack Tech models below are recommended for storing confectionary such as candy, chocolate, and cookies.",
          models: ["GSC 20 HSI", "GSC 14 PLUS 300", "GS 24 PLUS 200"]
        },
        {
          name: "Dry Goods",
          description: "Pouches made by Galaxy Pack Tech models below are the most suitable for placing products adversely affected by moisture.",
          models: ["GSC 20 HSI", "GS 24 TSG", "GS 20 PLUS"]
        },
        {
          name: "Retort Food",
          description: "Pouches made by Galaxy Pack Tech's models below have high sealing quality, high strength and high sealing performance.",
          models: ["GSC 20 HSI", "GS 24 TSG"]
        },
        {
          name: "Frozen Food",
          description: "High-quality pouches made by the models below are suitable for frozen foods such as vegetables, pizza, chicken nuggets.",
          models: ["GSC 20 HSI", "GS 24 TSG", "GS 20 PLUS"]
        }
      ]
    },
    {
      id: "household",
      title: "Household Items",
      subcategories: [
        {
          name: "Flower Seeds",
          description: "The sturdy pouches made by the models below have good preservation quality due to their high sealing strength and reliability.",
          models: ["GSC 20 HSI", "GS 24 TSG"]
        },
        {
          name: "Fertilizer or Forage",
          description: "The large and sturdy pouches made by Galaxy Pack Tech's models below have high sealing strength/reliability and high productivity.",
          models: ["GS 24 TSG", "GT 24 PLUS 200"]
        },
        {
          name: "Refill",
          description: "Shaped Pouches made by Galaxy Pack Tech models below can be used to refill many household items such as dish soap, body wash.",
          models: ["GSC 20 PLUS COMBI", "GS 24 PLUS 200"]
        }
      ]
    },
    {
      id: "beverage",
      title: "Beverage",
      subcategories: [
        {
          name: "Beverages",
          description: "Pouches can be used to transport or store soft packaging of beverage other than carbonated drink such as coffee, milk and tea.",
          models: ["GSC 20 HSI", "GS 24 PLUS 200"]
        }
      ]
    },
    {
      id: "pet-food",
      title: "Pet Food",
      description: "The issues such as pouch strength and sealing performance occur in pet food as well as in general food. Galaxy Pack Tech models below can make large-sized gusset pouches.",
      models: ["GS 24 TSG", "GT 24 PLUS 200"]
    },
    {
      id: "packing",
      title: "Packing / Transportation",
      subcategories: [
        {
          name: "Vegetables",
          description: "The models below support soft packaging of vegetable such as broccoli and cabbage.",
          models: ["GS 24 TSG"]
        },
        {
          name: "Store Display",
          description: "Stand Up Pouches made by the models below are recommended for soft packaging outstanding store display.",
          models: ["GS 24 PLUS 200", "GT 24 PLUS 200"]
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100">
      {/* Intro Section */}
      <div className="mb-8">
        <p className="text-xl font-semibold text-orange-600 mb-4">
          You can find information on recommended pouch making machines by application.
        </p>
        <div className="text-gray-700">
          <p>
            Galaxy Pack Tech manufactures pouch making machines that can make pouches of various shapes and functions to meet the needs of the market. (e.g., retort pouch, pouch for frozen food, spouted pouch, shaped pouches by Thomson die-cutting, pouches for infusion solution, stand-up pouch, etc.)
          </p>
          <p>
            In this section, you can search for information on recommended pouch making machines by market needs.
          </p>
        </div>
      </div>

      {/* Galaxy Pack Tech Pouch Machine */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">Galaxy Pack Tech's Pouch Machine</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li>
            <p className="font-semibold text-orange-600">The sealing is strong.</p>
            <p className="text-gray-600">Seal is airtight.</p>
          </li>
          <li>
            <p className="font-semibold text-orange-600">The appearance is good.</p>
            <p className="text-gray-600">The corner cut is beautiful.</p>
          </li>
          <li>
            <p className="font-semibold text-orange-600">The speed is high.</p>
            <p className="text-gray-600">Pouch production possessed with speed and accuracy.</p>
          </li>
        </ul>
      </div>

      {/* Product Categories */}
      {productCategories.map((category) => (
        <section key={category.id} className="mb-8">
          <h2 className="text-xl font-bold text-white bg-orange-600 p-3 rounded">{category.title}</h2>

          {category.subcategories ? (
            category.subcategories.map((subcategory) => (
              <div key={subcategory.name} className="bg-orange-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch for {subcategory.name}</h3>
                <p className="text-gray-700 mb-4">{subcategory.description}</p>
                <div className="flex flex-wrap gap-2">
                  {subcategory.models.map((model) => (
                    <a
                      key={model}
                      href={`${model.replace(/\s+/g, '-')}.html`}
                      className="text-orange-600 hover:underline"
                    >
                      {model}
                    </a>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouches for {category.title}</h3>
              <p className="text-gray-700 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.models.map((model) => (
                  <a
                    key={model}
                    href={`${model.replace(/\s+/g, '-')}.html`}
                    className="text-orange-600 hover:underline"
                  >
                    {model}
                  </a>
                ))}
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default SearchByType;
