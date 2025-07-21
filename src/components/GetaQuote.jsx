import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const GetaQuote = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirements: "",
    address: "",
  });

  const rotateY = useTransform(mouseX, [0, 100], [-10, 10]);
  const rotateX = useTransform(mouseY, [0, 100], [10, -10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set((x / rect.width) * 100);
    mouseY.set((y / rect.height) * 100);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your API call or form handling logic here
    setShowForm(false);
  };

  return (
    <>
      <motion.div
        className="hidden md:block"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          style={{
            rotateX: isHovered ? rotateX : 0,
            rotateY: isHovered ? rotateY : 0,
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <motion.button
            onClick={() => setShowForm(true)}
            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all block"
            whileTap={{ scale: 0.95 }}
            whileHover={{
              y: -5,
              transition: {
                y: {
                  type: "spring",
                  stiffness: 300,
                  damping: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }
            }}
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-500 flex top-0 left-0 w-full h-screen items-center backdrop-blur-sm justify-center p-4 "
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Logo and Address Section */}
                <div className="bg-gray-100 p-6 md:w-1/3 flex flex-col items-center justify-center">
                  <div className="  ">
                    {/* Replace with your actual logo */}
                    <div className="w-30 h-30 flex items-center justify-center ">
                      <img
                        src="public/images/logo/Galaxy-Packtech-logo.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">Our Address</h3>
                    <p className="text-gray-600 text-sm">
                      Galaxy Packtech Pvt Ltd |<br />
                      Plot No. 110, Toy City,
                      <br />
                      Udyog Kendra, Ecotech 3 |<br />
                      Greater Noida - 201306, INDIA
                    </p>
                  </div>
                </div>

                {/* Form Section */}
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Get a Quote
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                          />
                        </div>

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
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Address
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          rows="2"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="requirements"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Requirements
                        </label>
                        <textarea
                          id="requirements"
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleInputChange}
                          rows="4"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          required
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2.5 px-4 rounded-md font-medium hover:shadow-md transition-all"
                        >
                          Submit Request
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GetaQuote;