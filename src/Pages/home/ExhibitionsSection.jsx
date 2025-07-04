import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const ExhibitionsSection = () => {
  const events = [
    {
      title: "PlastFocus 2024",
      date: "1st Feb to 5th Feb",
      location: "New Delhi, India",
      link: "https://www.plastfocus.org/",
      target: "_blank"
    },
    {
      title: "Open House 2024",
      date: "8th May to 10th May",
      location: "Greater Noida, India",
      link: "https://www.galaxypacktech.com/",
      target: "_blank"
    },
    {
      title: "K Show 2025",
      date: "8th October to 15th October",
      location: "Dusseldorf, Germany",
      link: "https://www.k-online.com/",
      target: ""
    },
    {
      title: "InterPack 2026",
      date: "7th May to 13th May",
      location: "Dusseldorf, Germany",
      link: "https://www.interpack.com/",
      target: "_blank"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-8 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Exhibition and Events
          </h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <a
                      href={event.link}
                      target={event.target}
                      rel="noopener noreferrer"
                      className="hover:text-orange-500 transition-colors flex items-center"
                    >
                      {event.title}
                      <FaExternalLinkAlt className="ml-2 text-sm text-gray-400" />
                    </a>
                  </h4>
                  <div className="flex items-start mb-3">
                    <FaCalendarAlt className="text-orange-500 mt-1 mr-3" />
                    <p className="text-gray-600 font-medium">{event.date}</p>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                    <p className="text-gray-600 italic">{event.location}</p>
                  </div>
                </div>
                <motion.a
                  href={event.link}
                  target={event.target}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default ExhibitionsSection;