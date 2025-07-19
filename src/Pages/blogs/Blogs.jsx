import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogs from "./blogs.json";

const Blogs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div>
      <div class="banner-container">
        {/* <!-- Desktop Banner (hidden on mobile) */}

        <motion.img
          src="/images/banners/our-blog.jpg"
          alt="Desktop Banner"
          class="hidden md:block w-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* <!-- Mobile Banner (hidden on desktop) --> */}
        <motion.img
          src="/images/mobile-view-banner/our-blogs.jpg"
          alt="Mobile Banner"
          class="block md:hidden w-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="container mx-auto px-4 py-12">
        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image with overlay */}
              <motion.div
                className="relative h-56 overflow-hidden"
                variants={imageVariants}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
                  {blog.category}
                </span>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span className="font-medium">
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-orange-500">By {blog.author}</span>
                </div>

                <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-5 line-clamp-3">
                  {blog.excerpt}
                </p>

                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors group-hover:underline"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
