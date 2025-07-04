import React from 'react';

const SearchByType = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100">
      {/* Intro Section */}
      <div className="mb-8">
        <p className="text-xl font-semibold text-orange-600 mb-4">
          You can find information on recommended pouch making machines by application.
        </p>
        <div className="text-gray-700">
          <p>
            Galaxy Pack Tech manufactures pouch making machines that can make pouches of various shapes and functions to meet the needs of the market. (e.g., retort pouch, pouch for frozen food, spouted pouch, shaped pouches by Thomson die-cutting, pouches for infusion solution, stand-up pouch, BOX POUCH®, etc.)
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

      {/* Child Resistant Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-white bg-orange-600 p-3 rounded">Child Resistant</h2>
        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Child Resistant Pouches</h3>
          <p className="text-gray-700 mb-4">
            Certain products need to be packaged with consumer safety in mind. The Galaxy Pack Tech models below can produce these high quality pouches with certified child resistant zipper and film.
          </p>
          <div className="flex flex-wrap gap-2">
            {['BH-60DLLC', 'BH-60DLLSC', 'CT-60DLLSC', 'FD-35VSC', 'FD-60DLLSC'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-friendly Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-white bg-orange-600 p-3 rounded">Eco-friendly</h2>
        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Eco-friendly Pouches</h3>
          <p className="text-gray-700 mb-4">
            The pouches made by the below models can be produced utilizing sustainable materials including all PE and PP. These pouches remain of the highest quality and productivity, as is expected with Galaxy Pack Tech machinery.
          </p>
          <div className="flex flex-wrap gap-2">
            {['BH-60DLLC', 'BH-60DLLSC', 'CT-60DLLSC', 'FD-35VSC', 'FD-60DLLSC', 'BH-60DG-F(SG6)', 'BH-80DG-F(SG8)', 'HK Series'].map((model) => (
              <a key={model} href={model === 'HK Series' ? 'index2.html#hk' : `${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-white bg-orange-600 p-3 rounded">Food</h2>
        {/* Confectionary */}
        <div className="bg-orange-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch for Storing Confectionary</h3>
          <p className="text-gray-700 mb-4">
            Pouches made by the Galaxy Pack Tech models below are recommended for storing confectionary such as candy, chocolate, and cookies. The pouches also have good preservation quality and are outstanding in store display.
          </p>
          <div className="flex flex-wrap gap-2">
            {['BH-60D', 'BH-60DLLC', 'BH-60DLLS', 'BH-60DLLSC', 'CT-60DLLSC', 'BH-80D', 'FA-35V', 'FD-35V', 'BH-60DG-F(SG6)', 'BH-80DG-F(SG8)'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
        {/* Dry Goods */}
        <div className="bg-orange-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch for Storing Dry Goods</h3>
          <p className="text-gray-700 mb-4">
            Pouches made by Galaxy Pack Tech models below are the most suitable for placing products adversely affected by moisture, such as sugar, salt, wheat and tea leaves. The models can make pouches with zipper seal and Stand Up Pouches through 1 line processing.
          </p>
          <div className="flex flex-wrap gap-2">
            {['BH-60D', 'BH-60DLLC', 'BH-60DLLS', 'BH-60DLLSC', 'CT-60DLLSC', 'FA-35V', 'FD-35V', 'BH-60DG-F(SG6)', 'BH-80DG-F(SG8)'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
        {/* Retort Food */}
        <div className="bg-orange-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch for Storing Retort Food</h3>
          <p className="text-gray-700 mb-4">
            Pouches made by Galaxy Pack Tech's models below have high sealing quality, high strength and high sealing performance. Therefore, the pouches are useful for retort food from curry or stew to prepared food such as hamburger.
          </p>
          <div className="flex flex-wrap gap-2">
            {['BH-60D', 'BH-60DLLS', 'BH-80D'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
        {/* Frozen Food */}
        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch Suitable for Frozen Food</h3>
          <p className="text-gray-700 mb-4">
            High-quality pouches made by the models below are suitable for frozen foods such as vegetables, pizza, chicken nuggets, chicken wings, mashed sweet potatoes and fruit.
          </p>
          <div className="flex flex-wrap gap-2">
            {['BH-60D', 'BH-60DLLS', 'BH-60DLLSC', 'BH-80D', 'FA-35V', 'FD-35V'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Household Items Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-white bg-orange-600 p-3 rounded">Household Items</h2>
        {/* Flower Seeds */}
        <div className="bg-orange-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch for Storing Flower Seeds</h3>
          <p className="text-gray-700 mb-4">
            The sturdy pouches made by the models below have good preservation quality due to their high sealing strength and reliability. Therefore, the pouches are suitable for storing or transporting flower seeds, etc. which may be affected by moisture or external air.
          </p>
          <div className="flex flex-wrap gap-2">
            {['BH-60D', 'BH-60DLLC', 'BH-80D', 'BH-60DG-F(SG6)', 'BH-80DG-F(SG8)'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
        {/* Fertilizer or Forage */}
        <div className="bg-orange-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch for Storing Fertilizer or Forage</h3>
          <p className="text-gray-700 mb-4">
            The large and sturdy pouches made by Galaxy Pack Tech's models below have high sealing strength/reliability and high productivity. Therefore, the pouches are the most suitable for soft packaging of fertilizer for Lawn & Garden or agriculture or forage for livestock or farmed fish and for storing or transporting heavy things.
          </p>
          <div className="flex flex-wrap gap-2">
            {['CT-60DLLSC', 'CT-80DLLSC', 'FD-60DLLSC', 'BH-60DLLSC', 'BH-120V', 'BH-60DG-F(SG6)', 'BH-80DG-F(SG8)'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
        {/* Refill */}
        <div className="bg-orange-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch for Use as Refill</h3>
          <p className="text-gray-700 mb-4">
            Shaped Pouches made by Galaxy Pack Tech models below can be used to refill many household items such as dish soap, body wash, hand soap and fabric softener.
          </p>
          <div className="flex flex-wrap gap-2">
            {['BH-60D', 'BH-60DLLS', 'BH-80D'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
        {/* Spouted Pouch */}
        <div className="bg-orange-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Spouted Pouch for Use as Refill</h3>
          <p className="text-gray-700 mb-4">
            Pouches with a spout have good preservation quality, and are useful for refilling body wash or hand soap. The Spout Inserter that supports Stand Up Pouch and Shaped Pouch can make pouches with spout through 1 line processing.
          </p>
          <div className="flex flex-wrap gap-2">
            <a href="ST-30.html" className="text-orange-600 hover:underline">ST-30 (Spout Inserter)</a>
          </div>
        </div>
        {/* Courier Products */}
        <div className="bg-orange-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch for Courier Products</h3>
          <p className="text-gray-700 mb-4">
            Various shaped pouches of multiple sizes made by Galaxy Pack Tech models below are useful to pack courier products such as ballpoint pen, marker, ruler and compass.
          </p>
          <div className="flex flex-wrap gap-2">
            <a href="index2.html#hk" className="text-orange-600 hover:underline">HK Series</a>
          </div>
        </div>
        {/* Umbrella */}
        <div className="bg-orange-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch for Packing Umbrella</h3>
          <p className="text-gray-700 mb-4">
            Triangle pouches made by the models below are recommended for packing of long products such as umbrellas, string and rope. Large-sized triangle pouches made by the models meet various needs such as packing of household items.
          </p>
          <div className="flex flex-wrap gap-2">
            {['HK-65V', 'HK-90V', 'HK-120V'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
        {/* First Aid Kit */}
        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch Alternative as First Aid Kit</h3>
          <p className="text-gray-700 mb-4">
            First aid kits do not need to be a box. BOX POUCH® can become a first aid kit that is lightweight, easy to carry and space-saving.
          </p>
          <div className="flex flex-wrap gap-2">
            {['BH-60DG-F(SG6)', 'BH-80DG-F(SG8)'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Beverage Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-white bg-orange-600 p-3 rounded">Beverage</h2>
        {/* Beverages */}
        <div className="bg-orange-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch for Storing Beverages</h3>
          <p className="text-gray-700 mb-4">
            BOX POUCH® can be used to transport or store soft packaging of beverage other than carbonated drink such as coffee, milk and tea.
          </p>
          <div className="flex flex-wrap gap-2">
            {['BH-60D', 'BH-60DLLS', 'BH-60DG-F(SG6)', 'BH-80DG-F(SG8)'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
        {/* Easy Beverage Pouch */}
        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Easy Beverage Pouch</h3>
          <p className="text-gray-700 mb-4">
            Many pouches used for beverages such as sports drink, nutritional supplements and juices, have a spout that makes it easy to drink. Galaxy Pack Tech’s ST-24 Inserter can make high-sealing performance pouches with spout easily through 1 line processing.
          </p>
          <div className="flex flex-wrap gap-2">
            <a href="ST-30.html" className="text-orange-600 hover:underline">ST-30 (Spout Inserter)</a>
          </div>
        </div>
      </section>

      {/* Pet Food Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-white bg-orange-600 p-3 rounded">Pet Food</h2>
        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch for Storing Pet Food</h3>
          <p className="text-gray-700 mb-4">
            The issues such as pouch strength and sealing performance occur in pet food as well as in general food. Galaxy Pack Tech models below can make large-sized gusset pouches that have good preservation quality and high sealing strength.
          </p>
          <div className="flex flex-wrap gap-2">
            {['CT-60DLLSC', 'CT-80DLLSC', 'FD-60DLLSC', 'BH-60DLLS', 'BH-60DLLSC', 'BH-120V', 'BH-60DG-F(SG6)', 'BH-80DG-F(SG8)'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Packing / Transportation Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-white bg-orange-600 p-3 rounded">Packing / Transportation</h2>
        {/* Vegetables */}
        <div className="bg-orange-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch for Storing Vegetables</h3>
          <p className="text-gray-700 mb-4">
            The models below support soft packaging of vegetable such as broccoli and cabbage. The models can make trapezoidal pouches of varied sizes for flower bouquet or sandwich.
          </p>
          <div className="flex flex-wrap gap-2">
            {['VK-65', 'VK-90'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
        {/* Store Display */}
        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-700 mb-2">Pouch for Outstanding Store Display</h3>
          <p className="text-gray-700 mb-4">
            Stand Up Pouches made by the models below are recommended for soft packaging outstanding store display. And, as BOX POUCH® support printing on the bottom, they are outstanding even when laid out flat.
          </p>
          <div className="flex flex-wrap gap-2">
            {['BH-60DLLS', 'CT-60DLLSC', 'CT-80DLLSC', 'FD-35VSC', 'FD-60DLLSC', 'BH-60DG-F(SG6)', 'BH-80DG-F(SG8)'].map((model) => (
              <a key={model} href={`${model}.html`} className="text-orange-600 hover:underline">{model}</a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchByType;