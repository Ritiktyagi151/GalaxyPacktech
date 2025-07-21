import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    // New Asian country flags
    "South Korea": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="60" fill="#FFFFFF"/>
        <circle cx="45" cy="30" r="20" fill="#CD2E3A"/>
        <path d="M45,10 C55,15 65,25 65,30 C65,35 55,45 45,50 C35,45 25,35 25,30 C25,25 35,15 45,10" fill="#0047A0"/>
        <path d="M45,15 C53,19 60,25 60,30 C60,35 53,41 45,45 C37,41 30,35 30,30 C30,25 37,19 45,15" fill="#FFFFFF"/>
        <path d="M45,20 C50,22 55,26 55,30 C55,34 50,38 45,40 C40,38 35,34 35,30 C35,26 40,22 45,20" fill="#CD2E3A"/>
      </svg>
    ),
    "Thailand": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="12" fill="#A51931"/>
        <rect y="12" width="90" height="12" fill="#FFFFFF"/>
        <rect y="24" width="90" height="12" fill="#2D2A4A"/>
        <rect y="36" width="90" height="12" fill="#FFFFFF"/>
        <rect y="48" width="90" height="12" fill="#A51931"/>
      </svg>
    ),
    "Vietnam": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="60" fill="#DA251D"/>
        <path d="M45,20 L55,30 L45,40 L35,30 Z" fill="#FFFF00"/>
      </svg>
    ),
    "Malaysia": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="30" fill="#CC0001"/>
        <rect y="30" width="90" height="30" fill="#FFFFFF"/>
        <rect width="45" height="60" fill="#010066"/>
        <polygon points="20,12 25,22 35,22 27,30 32,40 20,34 8,40 13,30 5,22 15,22" fill="#FFFF00"/>
      </svg>
    ),
    "Singapore": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="30" fill="#FFFFFF"/>
        <rect y="30" width="90" height="30" fill="#CE1126"/>
        <polygon points="15,15 20,20 25,15 20,10" fill="#FFFFFF"/>
        <polygon points="25,25 30,30 35,25 30,20" fill="#CE1126"/>
      </svg>
    ),
    "Philippines": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="45" height="60" fill="#0038A8"/>
        <rect x="45" width="45" height="60" fill="#CE1126"/>
        <polygon points="0,0 90,30 0,60" fill="#FFFFFF"/>
        <path d="M20,20 L25,25 30,20 25,15Z" fill="#FCD116"/>
        <path d="M70,40 L65,35 60,40 65,45Z" fill="#FCD116"/>
      </svg>
    ),
    "Indonesia": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="30" fill="#CE1126"/>
        <rect y="30" width="90" height="30" fill="#FFFFFF"/>
      </svg>
    ),
    // New other region flags
    "France": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="60" fill="#0055A4"/>
        <rect x="30" width="30" height="60" fill="#FFFFFF"/>
        <rect x="60" width="30" height="60" fill="#EF4135"/>
      </svg>
    ),
    "Italy": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="60" fill="#009246"/>
        <rect x="30" width="30" height="60" fill="#FFFFFF"/>
        <rect x="60" width="30" height="60" fill="#CE2B37"/>
      </svg>
    ),
    "Spain": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="12" fill="#C60B1E"/>
        <rect y="12" width="90" height="36" fill="#FFC400"/>
        <rect y="48" width="90" height="12" fill="#C60B1E"/>
        <rect x="30" y="20" width="30" height="20" fill="#C60B1E"/>
      </svg>
    ),
    "UK": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="60" fill="#012169"/>
        <path d="M0,0 L90,60 M90,0 L0,60" stroke="#FFFFFF" strokeWidth="8"/>
        <path d="M0,20 L90,40 M90,20 L0,40" stroke="#C8102E" strokeWidth="4"/>
        <path d="M20,0 L40,60 M50,0 L70,60" stroke="#C8102E" strokeWidth="8"/>
        <path d="M0,24 L90,36 M0,36 L90,24" stroke="#C8102E" strokeWidth="4"/>
      </svg>
    ),
    "Canada": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="60" fill="#FF0000"/>
        <rect width="30" height="60" fill="#FFFFFF"/>
        <rect x="60" width="30" height="60" fill="#FFFFFF"/>
        <path d="M45,10 L50,20 55,10 50,15Z" fill="#FF0000"/>
      </svg>
    ),
    "Australia": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="60" fill="#012169"/>
        <path d="M0,0 L90,60 M90,0 L0,60" stroke="#FFFFFF" strokeWidth="8"/>
        <path d="M0,20 L90,40 M90,20 L0,40" stroke="#E4002B" strokeWidth="4"/>
        <circle cx="70" cy="15" r="5" fill="#FFFFFF"/>
        <circle cx="70" cy="15" r="3" fill="#E4002B"/>
      </svg>
    ),
    "South Africa": ({ className = "w-12 h-8" }) => (
      <svg className={className} viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,0 90,0 0,60" fill="#000000"/>
        <polygon points="90,0 90,60 0,60" fill="#FFB612"/>
        <polygon points="0,0 90,30 0,60" fill="#E03C31"/>
        <polygon points="90,0 45,30 90,60" fill="#007749"/>
        <polygon points="0,30 90,30 45,15" fill="#FFFFFF"/>
        <polygon points="0,30 90,30 45,45" fill="#FFFFFF"/>
      </svg>
    ),
  };

  const countries = [
    // Asian countries (original + 9 new)
    { name: "Bhutan", flag: "🇧🇹", region: "Asia" },
    { name: "Nepal", flag: "🇳🇵", region: "Asia" },
    { name: "Sri Lanka", flag: "🇱🇰", region: "Asia" },
    { name: "Bangladesh", flag: "🇧🇩", region: "Asia" },
    { name: "UAE", flag: "🇦🇪", region: "Asia" },
    { name: "Syria", flag: "🇸🇾", region: "Asia" },
    { name: "Iran", flag: "🇮🇷", region: "Asia" },
    { name: "Kuwait", flag: "🇰🇼", region: "Asia" },
    { name: "India", flag: "🇮🇳", region: "Asia" },
    // { name: "Japan", flag: "🇯🇵", region: "Asia" },
    // { name: "South Korea", flag: "🇰🇷", region: "Asia" },
    // { name: "Thailand", flag: "🇹🇭", region: "Asia" },
    // { name: "Vietnam", flag: "🇻🇳", region: "Asia" },
    // { name: "Malaysia", flag: "🇲🇾", region: "Asia" },
    // { name: "Singapore", flag: "🇸🇬", region: "Asia" },
    // { name: "Philippines", flag: "🇵🇭", region: "Asia" },
    // { name: "Indonesia", flag: "🇮🇩", region: "Asia" },
    
    // Other regions (original + 9 new)
    { name: "Uganda", flag: "🇺🇬", region: "Africa" },
    { name: "Tanzania", flag: "🇹🇿", region: "Africa" },
    { name: "Egypt", flag: "🇪🇬", region: "Africa" },
    { name: "Brazil", flag: "🇧🇷", region: "South America" },
    { name: "USA", flag: "🇺🇸", region: "North America" },
    { name: "Germany", flag: "🇩🇪", region: "Europe" },
    { name: "France", flag: "🇫🇷", region: "Europe" },
    { name: "Italy", flag: "🇮🇹", region: "Europe" },
    { name: "Spain", flag: "🇪🇸", region: "Europe" },
    // { name: "UK", flag: "🇬🇧", region: "Europe" },
    // { name: "Russia", flag: "🇷🇺", region: "Europe" },
    // { name: "Canada", flag: "🇨🇦", region: "North America" },
    // { name: "Mexico", flag: "🇲🇽", region: "North America" },
    // { name: "Australia", flag: "🇦🇺", region: "Oceania" },
    // { name: "South Africa", flag: "🇿🇦", region: "Africa" },
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
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
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

        {/* Three Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
          {/* Left Block - Asian Markets */}
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
                  className="absolute inset-0 rounded-lg bg-gray-100 opacity-90"
                  style={{
                    backgroundImage:
                      "url('/images/extra-images/global-presence.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>

                
              </div>
            </div>
          </div>

          {/* Right Block - Other Regions */}
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