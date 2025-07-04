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
  FaShoppingBag,
} from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import GetaQuote from "../../components/GetaQuote";
import { path } from "framer-motion/client";

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
    { name: "Home", path: "/", icon: <FaHome className="mr-2" /> },
    {
      name: "About Us",
      path: "/about-us",
      icon: <FaInfoCircle className="mr-2" />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <FaBoxes className="mr-2" />,
      submenu: [
        {
          name: "Pouch Making Machines",
          path: "/pochespage",
          icon: <FaBoxOpen className="mr-2" />,
        },
        {
          name: "Bags Making Machines",
          path: "/bagspage",
          icon: <FaShoppingBag className="mr-2" />,
        },
      ],
    },
    {
      name: "Industries",
      path: "/industries",
      icon: <FaIndustry className="mr-2" />,
    },
    {
      name: "Gallery",
      path: "/gallerypage",
      icon: <FaImages className="mr-2" />,
    },
    { name: "Blogs", path: "/blogs", icon: <FaBlog className="mr-2" /> },
    {
      name: "Contact Us",
      path: "/contact-us",
      icon: <FaPhone className="mr-2" />,
    },
  ];

  // Sample featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Pouches Making Machine",
      path: "/pochespage",
    },
    {
      id: 2,
      name: "Bags Making Machine ",
      path: "/bagspage",
    },
    {
      id: 3,
      name: "Other Machine ",
      path: "/machine-cominng-soon-here...",
    },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <>
      <header
        className={`sticky top-0 w-full z-[150] transition-all duration-300 ${
          isScrolled
            ? "bg-orange-50 shadow-lg"
            : "bg-orange-50/90 backdrop-blur-sm"
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
                        ? "text-orange-700 bg-orange-100"
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
                      className="absolute left-0 mt-1 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    >
                      <div className="py-1">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
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
              {/* Google Translate */}
              <div
                id="google_translate_element"
                className="hidden md:block"
              ></div>

              {/* Search */}
              <motion.button
                onClick={toggleSearch}
                className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                <FaSearch className="text-lg" />
              </motion.button>

              {/* Contact Button */}
              <GetaQuote />

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={toggleMenu}
                className="md:hidden  p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 focus:outline-none"
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
              className="md:hidden bg-orange-50 shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {/* Google Translate on Mobile */}
                <div id="google_translate_element_mobile" className="mb-2" />

                {navLinks.map((link) => (
                  <div key={`mobile-${link.name}`}>
                    <motion.div
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-100 rounded-lg font-medium"
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
                            className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
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
                className="fixed top-0 right-0 h-screen bg-orange-50 shadow-xl z-50 w-full max-w-md"
              >
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b border-orange-200 flex items-center">
                    <div className="relative flex-1">
                      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products, solutions..."
                        className="w-full pl-10 pr-12 py-3 bg-white rounded-lg border border-orange-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-700 placeholder-orange-400"
                        autoFocus
                      />
                    </div>
                    <button
                      onClick={toggleSearch}
                      className="ml-4 p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200"
                    >
                      <HiX className="text-xl" />
                    </button>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto">
                    <p className="text-center text-orange-600 mt-10">
                      Type to search our products and solutions
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <div className="h-8 w-full flex justify-center  items-center bg-gradient-to-r from-orange-300 to-orange-200 border-t border-orange-200">
          <div className="max-w-4xl w-full flex justify-evenly">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={product.path}
                  className="flex
                   items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors group"
                >
                  <div className="relative">
                    <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {product.name}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </header>

      {/* Featured Products Section */}
    </>
  );
};

export default Navbar;
