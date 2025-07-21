import { useState, useEffect } from "react";
import {
  FaSearch,
  FaChevronDown,
  FaHome,
  FaInfoCircle,
  FaBoxes,
  FaIndustry,
  FaImages,
  FaBlog,
  FaPhone,
  FaBoxOpen,
  FaCertificate,
  FaUsers,
  FaBuilding,
  FaBriefcase,
  FaMailBulk,
} from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import GetaQuote from "../../components/GetaQuote";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredNav, setHoveredNav] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderTexts = [
    "🚀 Premium Packaging Solutions Since 2005",
    "🌟 Trusted by 1000+ Clients Worldwide",
    "🏆 Award-Winning Packaging Machinery",
    "💡 Innovative Solutions for Your Business",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderTexts.length]);

  const leftTopNavLinks = [
    {
      name: "CERTIFICATIONS",
      path: "/certifications",
      icon: <FaCertificate className="mr-2" />,
    },
    {
      name: "CLIENTELE",
      path: "/clientele",
      icon: <FaUsers className="mr-2" />,
    },
    {
      name: "FACILITY",
      path: "/facility",
      icon: <FaBuilding className="mr-2" />,
    },
  ];

  const rightTopNavLinks = [
    { name: "CAREER", path: "/career", icon: <FaBriefcase className="mr-2" /> },
    {
      name: "INDUSTRIES",
      path: "/industries",
      icon: <FaIndustry className="mr-2" />,
    },
    {
      name: "CONTACT US",
      path: "/contact-us",
      icon: <FaPhone className="mr-2" />,
    },
  ];

  const mainNavLinks = [
    { name: "HOME", path: "/", icon: <FaHome className="mr-2" /> },
    {
      name: "ABOUT US",
      path: "/about-us",
      icon: <FaInfoCircle className="mr-2" />,
      submenu: [
        {
          name: "ABOUT GALAXY PACK TECH",
          path: "/about-us",
          icon: <FaInfoCircle className="mr-2" />,
        },
        {
          name: "OUR LEADERSHIP",
          path: "/about-us#leadership",
          icon: <FaUsers className="mr-2" />,
        },
        {
          name: "VISION & MISSION",
          path: "/about-us#vision",
          icon: <FaInfoCircle className="mr-2" />,
        },
        {
          name: "PHILOSOPHY",
          path: "/about-us#philosophy",
          icon: <FaInfoCircle className="mr-2" />,
        },
      ],
    },
    {
      name: "PRODUCTS",
      path: "/products",
      icon: <FaBoxes className="mr-2" />,
      submenu: [
        {
          name: "POUCHES MAKING MACHINES",
          icon: <FaBoxOpen className="mr-2" />,
          isHeading: true,
        },
        {
          name: "SEARCH BY SHAPE",
          path: "/shapeofpouch",
          icon: <FaBoxOpen className="mr-2" />,
        },
        {
          name: "SEARCH BY MODEL",
          path: "/searchbymodel",
          icon: <FaBoxOpen className="mr-2" />,
        },
        {
          name: "SEARCH BY POUCH TYPE",
          path: "/searchbytypes",
          icon: <FaBoxOpen className="mr-2" />,
        },
      ],
    },
    {
      name: "GALLERY",
      path: "/gallerypage",
      icon: <FaImages className="mr-2" />,
    },
    { name: "BLOGS", path: "/blogs", icon: <FaBlog className="mr-2" /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <>
      <header
        className={`sticky top-0 w-full z-[150] transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-r from-orange-50 to-pink-50 shadow-lg"
            : "bg-gradient-to-r from-orange-100/90 to-pink-100/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-8xl">
          {/* Top Navigation Bar - Split into left and right sections */}
          <div className="hidden md:flex justify-between items-center h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-t-lg px-4">
            {/* Left side - 3 items */}
            <div className="flex">
              {leftTopNavLinks.map((link) => (
                <motion.div
                  key={`top-left-${link.name}`}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2"
                >
                  <Link
                    to={link.path}
                    className="flex items-center text-sm font-medium text-white hover:text-orange-100"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Middle - Text Slider */}
            <div className="flex-1 mx-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center text-white font-medium text-sm whitespace-nowrap"
                >
                  {sliderTexts[currentSlide]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side - 3 items */}
            <div className="flex">
              {rightTopNavLinks.map((link) => (
                <motion.div
                  key={`top-right-${link.name}`}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2"
                >
                  <Link
                    to={link.path}
                    className="flex items-center text-sm font-medium text-white hover:text-orange-100"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex justify-between px-9 items-center h-17 bg-gradient-to-r from-orange-50 to-pink-50">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Link to={"/"}>
                <img
                  className="h-14 w-32"
                  src="/images/logo/Galaxy-Packtech-logo.png"
                  alt="galaxypack-logo"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {mainNavLinks.map((link) => (
                <motion.div
                  key={link.name}
                  className="relative"
                  onHoverStart={() => setHoveredNav(link.name)}
                  onHoverEnd={() => setHoveredNav(null)}
                >
                  <motion.div
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                      hoveredNav === link.name
                        ? "text-white bg-gradient-to-r from-red-500 to-orange-500"
                        : "text-orange-800 hover:bg-orange-100"
                    }`}
                  >
                    <Link to={link.path} className="flex items-center">
                      {link.icon}
                      {link.name}
                      {link.submenu && (
                        <FaChevronDown
                          className={`ml-1 text-xs transition-transform ${
                            hoveredNav === link.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>
                  </motion.div>

                  {link.submenu && hoveredNav === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 w-56 origin-top-left rounded-lg bg-gradient-to-b from-orange-200 to-pink-200 shadow-lg ring-0 ring-black ring-opacity-5 focus:outline-none z-50"
                    >
                      <div className="py-1">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center px-4 py-2 text-sm ${
                              item.isHeading
                                ? "bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold border-b border-orange-400"
                                : "text-orange-800 hover:bg-orange-100"
                            }`}
                          >
                            {item.icon}
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleSearch}
                className="p-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                <FaSearch className="text-lg" />
              </motion.button>

              <GetaQuote />

              <motion.button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 focus:outline-none"
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <HiX className="text-xl" />
                ) : (
                  <HiOutlineMenuAlt3 className="text-xl" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gradient-to-b from-orange-100 to-pink-100 shadow-xl overflow-hidden uppercase"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                <div id="google_translate_element_mobile" className="mb-2" />

                {/* Left Top Navigation Links in Mobile */}
                <div className="border-b border-orange-200 pb-2 mb-2">
                  {leftTopNavLinks.map((link) => (
                    <motion.div
                      key={`mobile-top-left-${link.name}`}
                      className="flex items-center px-4 py-3 text-orange-800 hover:bg-orange-200 rounded-lg font-medium"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center w-full"
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Right Top Navigation Links in Mobile */}
                <div className="border-b border-orange-200 pb-2 mb-2">
                  {rightTopNavLinks.map((link) => (
                    <motion.div
                      key={`mobile-top-right-${link.name}`}
                      className="flex items-center px-4 py-3 text-orange-800 hover:bg-orange-200 rounded-lg font-medium"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center w-full"
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Main Navigation Links in Mobile */}
                {mainNavLinks.map((link) => (
                  <div key={`mobile-${link.name}`}>
                    <motion.div
                      className="flex items-center px-4 py-3 text-orange-800 hover:bg-orange-200 rounded-lg font-medium"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center w-full"
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    </motion.div>
                    {link.submenu && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.submenu.map((item) => (
                          <Link
                            key={`mobile-sub-${item.name}`}
                            to={item.path}
                            className={`flex items-center px-4 py-2 text-sm ${
                              item.isHeading
                                ? "bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold"
                                : "text-orange-800 hover:bg-orange-200"
                            } rounded-lg`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.icon}
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Drawer */}
        <AnimatePresence>
          {searchOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 z-40"
                onClick={toggleSearch}
              />
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: searchOpen ? 0 : "100%", opacity: 1 }}
                exit={{ x: "100%", opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-8 right-0 h-[calc(100vh-2rem)] bg-gradient-to-b from-orange-50 to-pink-50 shadow-xl z-50 w-full max-w-md uppercase"
              >
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b border-orange-200 flex items-center">
                    <div className="relative flex-1">
                      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="SEARCH PRODUCTS, SOLUTIONS..."
                        className="w-full pl-10 pr-12 py-3 bg-white rounded-lg border border-orange-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-orange-800 placeholder-orange-400"
                        autoFocus
                      />
                    </div>
                    <button
                      onClick={toggleSearch}
                      className="ml-4 p-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600"
                    >
                      <HiX className="text-xl" />
                    </button>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto">
                    <p className="text-center text-orange-600 mt-10">
                      TYPE TO SEARCH OUR PRODUCTS AND SOLUTIONS
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
