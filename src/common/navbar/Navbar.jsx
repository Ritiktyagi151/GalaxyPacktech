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
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaMailBulk,
} from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import GetaQuote from "../../components/GetaQuote";

const TopBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "🚀 FREE SHIPPING ON ORDERS OVER $500",
    "🔥 HOT DEALS - UP TO 30% OFF THIS WEEK",
    "⭐ NEW PRODUCTS JUST ARRIVED!",
    "💎 PREMIUM QUALITY GUARANTEED",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-orange-500 via-orange-600 to-pink-500 text-white text-sm z-[200] uppercase">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-8 py-1 sm:py-0">
          {/* Left Social Icons - Always visible */}
          <div className="flex items-center space-x-3 order-1 sm:order-1 mb-1 sm:mb-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/share/1FFToPjU2Z/"
              className="hover:text-orange-200 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/GalaxyPackTech/status/1273291850133106688"
              className="hover:text-orange-200 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/galaxypacktech?igsh=MXB6czc1a3N0Y2xvOQ=="
              className="hover:text-orange-200 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/galaxy-packtech-pvt-ltd/"
              className="hover:text-orange-200 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtube.com/@galaxypacktech?si=pX-w-LoGebW8sK1v"
              className="hover:text-orange-200 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>

          {/* Middle Text Slider - Hidden on small screens */}
          <div className="hidden sm:flex flex-1 ml-52 overflow-hidden order-3 sm:order-2 w-full sm:w-auto justify-center">
            <div className="relative h-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 text-center px-2 whitespace-nowrap"
                  >
                    {slide}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Contact Info - Stacked on small screens */}
          <div className="flex items-center gap-4 order-2 sm:order-3 text-xs sm:text-sm">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+919971479938"
              className="flex items-center hover:text-orange-200 transition-colors"
            >
              <FaPhone className="mr-1 text-xs" />
              <span>+91 9971479938</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:gaurav@galaxypacktech.com"
              className="flex items-center hover:text-orange-200 transition-colors"
            >
              <FaMailBulk className="mr-1 text-xs" />
              <span className="hidden md:inline">
                GAURAV@GALAXYPACKTECH.COM
              </span>
              <span className="md:hidden">EMAIL US</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/", icon: <FaHome className="mr-2" /> },
    {
      name: "ABOUT US",
      path: "/about-us",
      icon: <FaInfoCircle className="mr-2" />,
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
      name: "INDUSTRIES",
      path: "/industries",
      icon: <FaIndustry className="mr-2" />,
    },
    {
      name: "GALLERY",
      path: "/gallerypage",
      icon: <FaImages className="mr-2" />,
    },
    { name: "BLOGS", path: "/blogs", icon: <FaBlog className="mr-2" /> },
    {
      name: "CONTACT US",
      path: "/contact-us",
      icon: <FaPhone className="mr-2" />,
    },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <>
      <TopBar />

      <header
        className={`sticky mb-8 top-8 w-full z-[150] transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-r from-orange-50 via-white to-orange-50 shadow-lg"
            : "bg-gradient-to-r from-orange-50/90 via-white/90 to-orange-50/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-17">
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
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  className="relative"
                  onHoverStart={() => setHoveredNav(link.name)}
                  onHoverEnd={() => setHoveredNav(null)}
                >
                  <motion.div
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                      hoveredNav === link.name
                        ? "text-white bg-gradient-to-r from-orange-500 to-pink-500"
                        : "text-gray-700 hover:text-orange-600"
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
                      className="absolute left-0 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-0 ring-black ring-opacity-5 focus:outline-none z-50"
                    >
                      <div className="py-1">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center px-4 py-2 text-sm ${
                              item.isHeading
                                ? "bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 font-bold border-b border-orange-100"
                                : "text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600"
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
                className="p-2 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 hover:from-orange-200 hover:to-pink-200 transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                <FaSearch className="text-lg" />
              </motion.button>

              <GetaQuote />

              <motion.button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 hover:from-orange-200 hover:to-pink-200 focus:outline-none"
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
              className="md:hidden bg-gradient-to-b from-orange-50 to-pink-50 shadow-xl overflow-hidden uppercase"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                <div id="google_translate_element_mobile" className="mb-2" />

                {navLinks.map((link) => (
                  <div key={`mobile-${link.name}`}>
                    <motion.div
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 rounded-lg font-medium"
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
                                ? "bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 font-bold"
                                : "text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50"
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
                      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-500" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="SEARCH PRODUCTS, SOLUTIONS..."
                        className="w-full pl-10 pr-12 py-3 bg-white rounded-lg border border-orange-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-700 placeholder-pink-500"
                        autoFocus
                      />
                    </div>
                    <button
                      onClick={toggleSearch}
                      className="ml-4 p-2 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 hover:from-orange-200 hover:to-pink-200"
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