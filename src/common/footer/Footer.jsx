import { useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDraftingCompass,
  FaRulerCombined,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegCopyright,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const socialLinks = [
    { icon: <FaLinkedin />, color: "text-[#0077b5] hover:text-[#005582]" },
    { icon: <FaFacebook />, color: "text-[#4267B2] hover:text-[#344e86]" },
    { icon: <FaInstagram />, color: "text-[#E1306C] hover:text-[#C13584]" },
    { icon: <FaTwitter />, color: "text-[#1DA1F2] hover:text-[#1991db]" },
  ];

  // Updated products array with paths
  const products = [
    { name: "Pouch Making Machines", path: "/pochespage" },
    { name: "Bags Making Machines", path: "/bagspage" },
    {
      name: "Flexible Packaging Solutions",
      path: "/products/flexible-packaging",
    },
    { name: "Custom Machinery", path: "/products/custom-machinery" },
  ];

  return (
    <footer className="bg-white text-gray-800 pt-15 pb-12 px-4 md:px-8 border-t-4 border-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center  mb-6">
              <div className=" mr-4">
                <img
                  className=""
                  src="public/images/logo/Galaxy-Packtech-logo.png"
                  alt="logo"
                />
              </div>
              <h3 className="text-2xl font-bold">Galaxy PackTech</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Galaxy Packtech Pvt Ltd offers innovatively predominant packaging
              machines. Our quality conscious personnel always focus on
              producing long lasting products with thorough inspection of every
              part and material.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className={`${social.color} text-2xl transition-all duration-300 transform hover:scale-x-[-1]`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center border-b-2 border-orange-500 pb-2">
              Our Products
            </h3>
            <ul className="space-y-3">
              {products.map((product, i) => (
                <motion.li key={i} whileHover={{ x: 5 }} className="group">
                  <a
                    href={product.path}
                    className="text-gray-600 hover:text-orange-500 flex items-center transition-colors"
                  >
                    <span className="w-3 h-3 border-2 border-orange-500 rounded-full mr-3 group-hover:bg-orange-500 transition-colors"></span>
                    {product.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-orange-500 pb-2">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Products", path: "/products" },
                { name: "Blogs", path: "/blogs" },
                { name: "Contact Us", path: "/Contact-Us" },
                { name: "Gallery", path: "/gallerypage" },
                // { name: "Get a Quote", path: "/getaquote" },
              ].map((link, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <a
                    href={link.path}
                    className="text-gray-600 hover:text-orange-500 flex items-center  transition-colors"
                  >
                    <span className="w-3 h-3 border-2 border-orange-500 rounded-full mr-3 hover:bg-orange-500 transition-colors"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-orange-500 pb-2">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                <address className="text-gray-600 not-italic">
                 <span className="text-[19px] font-bold ">Address : </span> Galaxy Packtech Pvt Ltd   <br /> Plot No. 110, Toy City, <br /> Udyog Kendra, Ecotech 3   <br /> Greater Noida - 201306, INDIA
                </address>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-orange-500 mr-3" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-3" />
                <a
                  href="mailto:info@galaxypacktech.com"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  info@galaxypacktech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FaRegCopyright className="mr-2 text-gray-500" />
            <span className="text-gray-600 text-sm">
              {currentYear} Galaxy PackTech
            </span>
          </div>
          <div className="">
            <p>
              Design and Developed By{" "}
              <span>
                <a
                  target="_blank"
                  className="text-orange-500 hover:text-orange-600"
                  href="https://www.jaikviktechnology.com/"
                >
                  Jaikvik Technology India Pvt Ltd
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
