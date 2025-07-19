import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGlobe,
  FaShippingFast,
  FaWarehouse,
  FaLanguage,
  FaCalendarAlt,
  FaClock,
  FaBuilding,
} from "react-icons/fa";
import { HiOutlineClock, HiOutlineGlobeAlt } from "react-icons/hi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    country: "",
    inquiryType: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Australia",
    "Japan",
    "UAE",
    "South Africa",
    "Brazil",
    "Mexico",
    "Singapore",
    "Other",
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "export", label: "Export/International Order" },
    { value: "technical", label: "Technical Support" },
    { value: "distributor", label: "Become a Distributor" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    setTimeout(() => {
      const isError = Math.random() > 0.9;
      if (isError) {
        setIsSubmitting(false);
        setSubmitError("Failed to send message. Please try again later.");
        return;
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        country: "",
        inquiryType: "general",
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardHover = {
    hover: {
      y: -8,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const pulse = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <div class="banner-container">
        {/* <!-- Desktop Banner (hidden on mobile) */}

        <motion.img
          src="/images/banners/contact-us.jpg"
          alt="Desktop Banner"
          class="hidden md:block w-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* <!-- Mobile Banner (hidden on desktop) --> */}
        <motion.img
          src="/images/mobile-view-banner/contact-us.jpg"
          alt="Mobile Banner"
          class="block md:hidden w-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-100 opacity-20"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-full inline-block">
              <HiOutlineGlobeAlt className="text-2xl" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? Reach out to our
            team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            variants={cardHover}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 relative z-10"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-amber-400"></div>
            <div className="p-8 sm:p-10">
              <motion.h2
                className="text-2xl font-bold text-gray-800 mb-6"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Send Us a Message
              </motion.h2>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200"
                >
                  {submitError}
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      >
                        <option value="">Select your country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label
                      htmlFor="inquiryType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Inquiry Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {inquiryTypes.map((type) => (
                        <div key={type.value} className="flex items-center">
                          <input
                            id={`inquiry-${type.value}`}
                            name="inquiryType"
                            type="radio"
                            value={type.value}
                            checked={formData.inquiryType === type.value}
                            onChange={handleChange}
                            className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300"
                          />
                          <label
                            htmlFor={`inquiry-${type.value}`}
                            className="ml-2 block text-sm text-gray-700"
                          >
                            {type.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    ></textarea>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.button
                      type="submit"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium ${
                        isSubmitting
                          ? "bg-amber-400"
                          : "bg-gradient-to-r from-orange-500 to-amber-500"
                      } shadow-md transition-all`}
                    >
                      {isSubmitting ? (
                        <motion.span animate="pulse" variants={pulse}>
                          Sending...
                        </motion.span>
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </div>
              </form>
            </div>
            {/* Global Support Card */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              variants={cardHover}
              className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl shadow-lg overflow-hidden relative z-10"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <FaGlobe className="text-2xl text-white mr-3" />
                  <h2 className="text-2xl font-bold text-white">
                    Global Support
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <FaShippingFast className="text-white mr-2" />
                      <h3 className="font-medium text-white">
                        Shipping & Logistics
                      </h3>
                    </div>
                    <p className="text-white/90 text-sm">
                      Worldwide shipping with customs clearance support
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <FaLanguage className="text-white mr-2" />
                      <h3 className="font-medium text-white">
                        Multilingual Support
                      </h3>
                    </div>
                    <p className="text-white/90 text-sm">
                      Available in English, Hindi, and Punjabi
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Details Card */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              variants={cardHover}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 relative z-10"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-amber-400"></div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-6">
                  Reach out to us through any of these channels
                </p>

                <div className="space-y-5">
                  <motion.div
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                      <FaCalendarAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Working Hours
                      </h3>
                      <div className="text-gray-600 mt-1">
                        <div className="flex items-center">
                          <FaClock className="mr-2 text-orange-500" />
                          <span>Monday - Saturday: 9AM - 7PM</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <FaClock className="mr-2 text-gray-400" />
                          <span className="text-gray-400">Sunday: Closed</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <a
                        href="mailto:gaurav@galaxypacktech.com"
                        className="block text-gray-600 hover:text-orange-500 transition-colors mt-1"
                      >
                        gaurav@galaxypacktech.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Phone</h3>
                      <a
                        href="tel:+919971479938"
                        className="block text-gray-600 hover:text-orange-500 transition-colors mt-1"
                      >
                        +91 9971479938
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Corporate Address Card */}
            {/* <motion.div
              variants={itemVariants}
              whileHover="hover"
              variants={cardHover}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 relative z-10"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-amber-400"></div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaBuilding className="text-orange-500 mr-2" />
                  Corporate Office
                </h2>
                <address className="text-gray-600 not-italic">
                  AHS 703, 7th Floor Building<br />
                  Aditya High Street, Lal kuan<br />
                  Ghaziabad-201009, India
                </address>
                <div className="mt-4 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.607296484154!2d77.48959731507936!3d28.47454798248344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea3585a5b4d1%3A0x7c3a2b3e4f5a6b7c!2sGalaxy%20Packtech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="min-h-[200px] w-full"
                  ></iframe>
                </div>
              </div>
            </motion.div> */}

            {/* Office Location Card */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              variants={cardHover}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 relative z-10"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-amber-400"></div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaMapMarkerAlt className="text-orange-500 mr-2" />
                  Address :
                </h2>
                <address className="text-gray-600 not-italic">
                  Galaxy Packtech Pvt Ltd <br /> Plot No. 110, Toy City, <br />{" "}
                  Udyog Kendra, Ecotech 3 <br /> Greater Noida - 201306, INDIA
                </address>
                <div className="mt-4 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.456789012345!2d76.30000000000001!3d30.600000000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM2JzAwLjAiTiA3NsKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="min-h-[200px] w-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
