import { useState } from "react";
import { motion } from "framer-motion";


const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [hoveredItem, setHoveredItem] = useState(null);

  // Sample gallery items
  const galleryItems = {
    photos: [
      {
        id: 1,
        type: "photo",
        src: "/images/gallery-images/2I9A6637.jpg",
        
      },
      {
        id: 2,
        type: "photo",
        src: "/images/gallery-images/2I9A6638.jpg",
        
      },
      {
        id: 3,
        type: "photo",
        src: "/images/gallery-images/2I9A6642.jpg",
        
      },
      {
        id: 4,
        type: "photo",
        src: "/images/gallery-images/2I9A6643.jpg",
       
      },
      {
        id: 5,
        type: "photo",
        src: "/images/gallery-images/2I9A6647.jpg",
       
      },
      {
        id: 6,
        type: "photo",
        src: "/images/gallery-images/2I9A6650.jpg",
       
      },
    ],
    videos: [
      {
        id: 1,
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Adventure Time",
      },
      {
        id: 2,
        type: "video",
        src: "https://www.youtube.com/embed/9bZkp7q19f0",
        title: "Fun Moments",
      },
      {
        id: 3,
        type: "video",
        src: "https://www.youtube.com/embed/JGwWNGJdvx8",
        title: "Music Video",
      },
    ],
  };

  return (
    <div>
      <div class="banner-container">
        {/* <!-- Desktop Banner (hidden on mobile) */}

        <motion.img
          src="/images/banners/gallery.jpg"
          alt="Desktop Banner"
          class="hidden md:block w-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* <!-- Mobile Banner (hidden on desktop) --> */}
        <motion.img
          src="/images/mobile-view-banner/gallery.jpg"
          alt="Mobile Banner"
          class="block md:hidden w-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-orange-600">
            My Gallery
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setActiveTab("photos")}
              className={`px-6 py-2 font-medium rounded-l-lg transition-all duration-300 ${
                activeTab === "photos"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-100 text-orange-600 hover:bg-orange-200"
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-6 py-2 font-medium rounded-r-lg transition-all duration-300 ${
                activeTab === "videos"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-100 text-orange-600 hover:bg-orange-200"
              }`}
            >
              Videos
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems[activeTab].map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg shadow-lg group"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.type === "photo" ? (
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={item.src}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredItem === item.id ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>
                ) : (
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={item.src}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={item.title}
                    />
                  </div>
                )}

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                    hoveredItem === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>

                {/* Orange accent */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-orange-400 transition-all duration-500 ${
                    hoveredItem === item.id ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
