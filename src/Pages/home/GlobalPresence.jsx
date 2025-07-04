import React, { useState } from "react";

const GlobalPresence = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Globe icons as SVG components
  const GlobeIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );

  // Country Flag SVG Components
  const FlagSVGs = {
    Bhutan: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <polygon
            id="dragon"
            points="15,15 25,10 35,15 45,10 55,15 65,10 75,15 75,45 65,50 55,45 45,50 35,45 25,50 15,45"
            fill="#FFD700"
          />
        </defs>
        <rect width="90" height="30" fill="#FFD700" />
        <rect y="30" width="90" height="30" fill="#FF4500" />
        <use xlinkHref="#dragon" transform="translate(0,15)" />
      </svg>
    ),
    Nepal: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="0,0 60,15 0,30 20,30 20,45 60,45 0,60"
          fill="#DC143C"
        />
        <polygon
          points="0,0 50,12 0,24 15,24 15,36 50,36 0,48"
          fill="#003893"
        />
        <circle cx="25" cy="12" r="4" fill="#FFF" />
        <circle cx="25" cy="36" r="4" fill="#FFF" />
      </svg>
    ),
    "Sri Lanka": ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="60" fill="#FF9900" />
        <rect x="20" width="70" height="60" fill="#8B4513" />
        <rect width="10" height="60" fill="#00FF00" />
        <rect x="10" width="10" height="60" fill="#FFD700" />
        <rect x="25" y="10" width="40" height="40" fill="#8B0000" />
        <circle cx="45" cy="30" r="8" fill="#FFD700" />
      </svg>
    ),
    Bangladesh: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="60" fill="#006A4E" />
        <circle cx="40" cy="30" r="12" fill="#F42A41" />
      </svg>
    ),
    UAE: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#00732F" />
        <rect y="20" width="90" height="20" fill="#FFFFFF" />
        <rect y="40" width="90" height="20" fill="#000000" />
        <rect width="30" height="60" fill="#FF0000" />
      </svg>
    ),
    Syria: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#FF0000" />
        <rect y="20" width="90" height="20" fill="#FFFFFF" />
        <rect y="40" width="90" height="20" fill="#000000" />
        <polygon
          points="35,25 37,30 42,30 38,33 40,38 35,35 30,38 32,33 28,30 33,30"
          fill="#00FF00"
        />
        <polygon
          points="55,25 57,30 62,30 58,33 60,38 55,35 50,38 52,33 48,30 53,30"
          fill="#00FF00"
        />
      </svg>
    ),
    Iran: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#00FF00" />
        <rect y="20" width="90" height="20" fill="#FFFFFF" />
        <rect y="40" width="90" height="20" fill="#FF0000" />
        <text x="45" y="35" textAnchor="middle" fill="#FF0000" fontSize="12">
          الله أكبر
        </text>
      </svg>
    ),
    Kuwait: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#00FF00" />
        <rect y="20" width="90" height="20" fill="#FFFFFF" />
        <rect y="40" width="90" height="20" fill="#FF0000" />
        <polygon points="0,0 30,20 30,40 0,60" fill="#000000" />
      </svg>
    ),
    Uganda: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="12" fill="#000000" />
        <rect y="12" width="90" height="12" fill="#FFFF00" />
        <rect y="24" width="90" height="12" fill="#FF0000" />
        <rect y="36" width="90" height="12" fill="#000000" />
        <rect y="48" width="90" height="12" fill="#FFFF00" />
        <circle cx="45" cy="30" r="10" fill="#FFFFFF" />
        <path d="M45,20 L50,30 L45,40 L40,30 Z" fill="#000000" />
      </svg>
    ),
    Tanzania: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0 90,0 0,60" fill="#1EB53A" />
        <polygon points="90,0 90,60 0,60" fill="#00A3DD" />
        <polygon points="0,0 90,0 45,30" fill="#000000" />
        <polygon points="90,60 0,60 45,30" fill="#FBD116" />
      </svg>
    ),
    Egypt: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#CE1126" />
        <rect y="20" width="90" height="20" fill="#FFFFFF" />
        <rect y="40" width="90" height="20" fill="#000000" />
        <circle cx="45" cy="30" r="8" fill="#C09300" />
      </svg>
    ),
    India: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#FF9933" />
        <rect y="20" width="90" height="20" fill="#FFFFFF" />
        <rect y="40" width="90" height="20" fill="#138808" />
        <circle
          cx="45"
          cy="30"
          r="8"
          fill="none"
          stroke="#000080"
          strokeWidth="1.5"
        />
        <circle cx="45" cy="30" r="1.5" fill="#000080" />
        <path
          d="M45,22 L47,25 50,25 48,28 50,31 45,29 40,31 42,28 40,25 43,25Z"
          fill="#000080"
        />
      </svg>
    ),
    USA: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="60" fill="#B22234" />
        <rect y="5" width="90" height="3.5" fill="#FFFFFF" />
        <rect y="13.5" width="90" height="3.5" fill="#FFFFFF" />
        <rect y="22" width="90" height="3.5" fill="#FFFFFF" />
        <rect y="30.5" width="90" height="3.5" fill="#FFFFFF" />
        <rect y="39" width="90" height="3.5" fill="#FFFFFF" />
        <rect y="47.5" width="90" height="3.5" fill="#FFFFFF" />
        <rect width="36" height="28" fill="#3C3B6E" />
        {[...Array(5)].map((_, i) =>
          [...Array(6)].map((_, j) => (
            <text
              key={`${i}-${j}`}
              x={6 + j * 6}
              y={10 + i * 5}
              fill="#FFFFFF"
              fontSize="4"
              textAnchor="middle"
            >
              ★
            </text>
          ))
        )}
      </svg>
    ),
    Germany: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#000000" />
        <rect y="20" width="90" height="20" fill="#DD0000" />
        <rect y="40" width="90" height="20" fill="#FFCE00" />
      </svg>
    ),
    Japan: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="60" fill="#FFFFFF" />
        <circle cx="45" cy="30" r="18" fill="#BC002D" />
      </svg>
    ),
    Russia: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="20" fill="#FFFFFF" />
        <rect y="20" width="90" height="20" fill="#0039A6" />
        <rect y="40" width="90" height="20" fill="#D52B1E" />
      </svg>
    ),
    Mexico: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="60" fill="#006847" />
        <rect x="30" width="30" height="60" fill="#FFFFFF" />
        <rect x="60" width="30" height="60" fill="#CE1126" />
        <path d="M45,20 L50,25 L45,30 L40,25 Z" fill="#8B4513" />
      </svg>
    ),
    Brazil: ({ className = "w-12 h-8" }) => (
      <svg
        className={className}
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="60" fill="#009B3A" />
        <path d="M45,10 L85,30 L45,50 L5,30 Z" fill="#FEDF00" />
        <circle cx="45" cy="30" r="12" fill="#002776" />
        <path
          d="M45,22 L47,25 50,25 48,28 50,31 45,29 40,31 42,28 40,25 43,25Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  };

  const countries = [
    { name: "Bhutan", flag: "🇧🇹", region: "Asia" },
    { name: "Nepal", flag: "🇳🇵", region: "Asia" },
    { name: "Sri Lanka", flag: "🇱🇰", region: "Asia" },
    { name: "Bangladesh", flag: "🇧🇩", region: "Asia" },
    { name: "UAE", flag: "🇦🇪", region: "Middle East" },
    { name: "Syria", flag: "🇸🇾", region: "Middle East" },
    { name: "Iran", flag: "🇮🇷", region: "Middle East" },
    { name: "Kuwait", flag: "🇰🇼", region: "Middle East" },
    { name: "Uganda", flag: "🇺🇬", region: "Africa" },
    { name: "Tanzania", flag: "🇹🇿", region: "Africa" },
    { name: "Egypt", flag: "🇪🇬", region: "Africa" },
    { name: "Brazil", flag: "🇧🇷", region: "South America" },
  ];

  const mapCountries = [
    { name: "India", x: 65, y: 45, flag: "🇮🇳" },
    { name: "USA", x: 20, y: 35, flag: "🇺🇸" },
    { name: "Germany", x: 52, y: 28, flag: "🇩🇪" },
    { name: "Japan", x: 80, y: 38, flag: "🇯🇵" },
    { name: "Egypt", x: 55, y: 48, flag: "🇪🇬" },
    { name: "Russia", x: 70, y: 25, flag: "🇷🇺" },
    { name: "Mexico", x: 18, y: 52, flag: "🇲🇽" },
    { name: "Brazil", x: 30, y: 60, flag: "🇧🇷" },
  ];

  const FloatingElement = ({ delay, size, x, y }) => (
    <div
      className="absolute rounded-full bg-orange-200 opacity-10 animate-pulse"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${y}%`,
        left: `${x}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
      }}
    />
  );

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <FloatingElement
            key={i}
            delay={Math.random() * 5}
            size={Math.random() * 80 + 30}
            x={Math.random() * 100}
            y={Math.random() * 100}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Global Presence Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6 gap-4">
            <GlobeIcon className="text-orange-500 w-12 h-12 animate-pulse" />
            <h3 className="text-4xl font-bold text-orange-800 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Global Presence
            </h3>
            <GlobeIcon className="text-orange-500 w-12 h-12 animate-pulse" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {countries.length}+
            </div>
            <div className="text-gray-700 font-medium">Countries Served</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Global Partners</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Global Support</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">10M+</div>
            <div className="text-gray-700 font-medium">Products Delivered</div>
          </div>
        </div>

        {/* Flags Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {countries.map((country, index) => {
            const FlagComponent = FlagSVGs[country.name];
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-orange-200"
                onMouseEnter={() => setHoveredCountry(index)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <div className="p-6 text-center">
                  <div className="mb-3 transform transition-transform duration-300 hover:scale-110">
                    {FlagComponent ? <FlagComponent /> : country.flag}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    {country.region}
                  </div>
                </div>
                <div
                  className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-3 font-medium transition-all duration-300 ${
                    hoveredCountry === index
                      ? "from-orange-600 to-orange-700"
                      : ""
                  }`}
                >
                  {country.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Left Block */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg h-full relative overflow-hidden border border-orange-200">
              <div className="absolute -top-4 -left-4 text-orange-400 opacity-10">
                <GlobeIcon className="w-32 h-32" />
              </div>
              <h4 className="text-xl font-bold text-orange-800 mb-6 relative z-10">
                Asian Markets
              </h4>
              <ul className="space-y-4 relative z-10">
                {countries
                  .filter((c) => c.region === "Asia")
                  .map((country, index) => {
                    const FlagComponent = FlagSVGs[country.name];
                    return (
                      <li
                        key={index}
                        className="flex items-center group cursor-pointer"
                      >
                        <span className="mr-3 transform transition-transform group-hover:scale-125">
                          {FlagComponent ? (
                            <FlagComponent className="w-8 h-6" />
                          ) : (
                            country.flag
                          )}
                        </span>
                        <span className="text-orange-800 font-medium group-hover:text-orange-600 transition-colors">
                          {country.name}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          {/* Middle Block - World Map */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-orange-200">
              <h4 className="text-xl font-bold text-orange-800 mb-6 text-center">
                Global Network
              </h4>

              <div className="relative rounded-lg p-8 min-h-80">
                {/* World Map Background Image */}
                <div
                  className="absolute object-fill inset-0 rounded-lg bg-gray-100 opacity-90"
                  style={{
                    backgroundImage: "url('public/images/mapbase.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>

                {/* Country Markers */}
                {mapCountries.map((country, index) => {
                  const FlagComponent = FlagSVGs[country.name];
                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                      style={{
                        left: `${country.x}%`,
                        top: `${country.y}%`,
                      }}
                      onMouseEnter={() => setHoveredCountry(`map-${index}`)}
                      onMouseLeave={() => setHoveredCountry(null)}
                    >
                      <div className="relative">
                        <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg transform transition-all duration-300 group-hover:scale-150 group-hover:bg-orange-600"></div>
                        <div
                          className={`absolute left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-white rounded-lg shadow-lg text-xs font-medium whitespace-nowrap transition-all duration-300 border border-orange-200 ${
                            hoveredCountry === `map-${index}`
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95"
                          }`}
                        >
                          <div className="mb-1">
                            {FlagComponent ? (
                              <FlagComponent className="w-6 h-4" />
                            ) : (
                              country.flag
                            )}
                          </div>
                          <div className="text-gray-800">{country.name}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Block */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg h-full relative overflow-hidden border border-orange-200">
              <div className="absolute -bottom-4 -right-4 text-orange-400 opacity-10">
                <GlobeIcon className="w-32 h-32" />
              </div>
              <h4 className="text-xl font-bold text-orange-800 mb-6 relative z-10">
                Other Regions
              </h4>
              <ul className="space-y-4 relative z-10">
                {countries
                  .filter((c) => c.region !== "Asia")
                  .slice(0, 5)
                  .map((country, index) => {
                    const FlagComponent = FlagSVGs[country.name];
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-end group cursor-pointer"
                      >
                        <span className="text-orange-800 font-medium mr-3 group-hover:text-orange-600 transition-colors">
                          {country.name}
                        </span>
                        <span className="transform transition-transform group-hover:scale-125">
                          {FlagComponent ? (
                            <FlagComponent className="w-8 h-6" />
                          ) : (
                            country.flag
                          )}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
