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
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      color: "text-[#0077b5] hover:text-[#005582]",
      path: "https://www.linkedin.com/company/galaxy-packtech-pvt-ltd/",
    },
    {
      icon: <FaFacebook />,
      color: "text-[#4267B2] hover:text-[#344e86]",
      path: "https://www.facebook.com/share/1FFToPjU2Z/",
    },
    {
      icon: <FaInstagram />,
      color: "text-[#E1306C] hover:text-[#C13584]",
      path: "https://www.instagram.com/galaxypacktech?igsh=MXB6czc1a3N0Y2xvOQ==",
    },
    {
      icon: <FaTwitter />,
      color: "text-black hover:text-[#1991db]",
      path: "https://x.com/GalaxyPackTech/status/1273291850133106688",
    },
    {
      icon: <FaYoutube />,
      color: "text-[#FF0000] hover:text-[#CC0000]",
      path: "https://youtube.com/@galaxypacktech?si=pX-w-LoGebW8sK1v",
    },
    {
      icon: <FaWhatsapp />,
      color: "text-[#25D366] hover:text-[#128C7E]",
      path: "https://wa.me/919971479938",
    },
  ];

  // Rest of your existing code remains exactly the same...
  const products = [
    { name: "Pouch Making Machines", path: "/pochespage" },
    { name: "Search By Shape", path: "/shapeofpouch" },
    {
      name: "Search By Model",
      path: "/searchbymodel",
    },
    { name: "Search By Pouch type", path: "/searchbytypes" },
  ];

  return (
    <footer className="bg-white text-gray-800 pt-15 rounded-tl-[100px] rounded-tr-[100px] pb-12 px-4 md:px-8 border-t-4 border-orange-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <img
                  className="h-24 w-48"
                  src="/images/logo/Galaxy-Packtech-logo.png"
                  alt="logo"
                />
              </div>
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
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-2xl transition-all duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Rest of your existing footer code remains exactly the same... */}
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

          <div>
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-orange-500 pb-2">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Products", path: "/products" },
                { name: "Industries", path: "/industries" },
                { name: "Gallery", path: "/gallerypage" },
                { name: "Blogs", path: "/blogs" },
                { name: "Contact Us", path: "/Contact-Us" },
                { name: "Admin Login", path: "#" },
              ].map((link, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <a
                    href={link.path}
                    className="text-gray-600 hover:text-orange-500 flex items-center transition-colors"
                  >
                    <span className="w-3 h-3 border-2 border-orange-500 rounded-full mr-3 hover:bg-orange-500 transition-colors"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-orange-500 pb-2">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                <address className="text-gray-600 not-italic">
                  <span className="text-[19px] font-bold">Address : </span>{" "}
                  Galaxy Packtech Pvt Ltd <br /> Plot No. 110, Toy City, <br />{" "}
                  Udyog Kendra, Ecotech 3 <br /> Greater Noida - 201306, INDIA
                </address>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-orange-500 mr-3" />
                <a
                  href="tel:+919971479938"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  +91 9971479938
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-3" />
                <a
                  href="mailto:gaurav@galaxypacktech.com"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  gaurav@galaxypacktech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FaRegCopyright className="mr-2 text-gray-500" />
            <span className="text-gray-600 text-sm">
              {currentYear} Galaxy Packtech Pvt Ltd – All rights reserved
            </span>
          </div>
          <div className="">
            <p>
              Design and Developed By{" "}
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
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
