import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  User,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PremiumBlogSlider = () => {
  const swiperRef = useRef(null);

   const blogs = [
    {
      id: 1,
      title: "Advanced Pouch Making Machines",
      excerpt:
        "Discover cutting-edge automated pouch packaging solutions with speeds up to 120 pouches per minute.",
      date: "May 15, 2023",
      author: "Dr. Sarah Chen",
      readTime: "5 min read",
      category: "Technology",
      tags: ["Automation", "Pouch Making"],
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 2,
      title: "High-Speed Bag Making Technology",
      excerpt:
        "Revolutionary bag production systems capable of producing up to 200 bags per minute with precision engineering.",
      date: "April 28, 2023",
      author: "Mark Johnson",
      readTime: "4 min read",
      category: "Innovation",
      tags: ["BMS-5000", "High-Speed"],
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "Sustainable Packaging Machinery",
      excerpt:
        "Eco-friendly solutions engineered to handle biodegradable and compostable films while reducing carbon footprint by 40%.",
      date: "March 10, 2023",
      author: "Emily Rodriguez",
      readTime: "6 min read",
      category: "Sustainability",
      tags: ["GreenLine", "Eco-Friendly"],
      image:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      title: "Customizable Packaging Systems",
      excerpt:
        "Tailored solutions with modular design for unique applications including dual-chamber pouches and medical sterile barriers.",
      date: "February 22, 2023",
      author: "Alex Wong",
      readTime: "7 min read",
      category: "Custom Solutions",
      tags: ["CustomPro", "Modular"],
      image:
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
    {
      id: 5,
      title: "Automated Quality Control Systems",
      excerpt:
        "AI-powered VisionIQ system performing 25 quality checks per second with 99.98% accuracy in defect detection.",
      date: "January 18, 2023",
      author: "David Kim",
      readTime: "5 min read",
      category: "Quality Control",
      tags: ["VisionIQ", "AI-Powered"],
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 6,
      title: "Compact Machines for SMEs",
      excerpt:
        "Space-efficient packaging solutions requiring just 6m² floor space while delivering professional-grade results.",
      date: "December 5, 2022",
      author: "Lisa Patel",
      readTime: "4 min read",
      category: "Small Business",
      tags: ["CompactPro", "Space-Saving"],
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 7,
      title: "Industrial Packaging Solutions",
      excerpt:
        "Heavy-duty machines designed for continuous operation in demanding industrial environments.",
      date: "November 15, 2022",
      author: "Michael Brown",
      readTime: "6 min read",
      category: "Industrial",
      tags: ["HeavyDuty", "Industrial"],
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 8,
      title: "Smart Packaging Integration",
      excerpt:
        "IoT-enabled machines with real-time monitoring and predictive maintenance capabilities.",
      date: "October 22, 2022",
      author: "Sophia Lee",
      readTime: "5 min read",
      category: "Smart Technology",
      tags: ["IoT", "Smart", "Integration"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className="relative py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-50 to-yellow-50 overflow-hidden">
      {/* Animated Background Elements (unchanged) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-orange-200 to-yellow-200 opacity-20 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header (unchanged) */}
        <div className="text-center mb-7">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600">
              Our Blogs
            </span>
          </h2>
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge packaging technologies and industry insights
            from our expert team
          </p>
        </div>

        {/* Swiper Slider - Adjusted for 4 cards */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,  // Now shows 4 cards on large screens
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            className="pb-12"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="h-[380px]">  {/* Slightly reduced height */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full border border-orange-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    {/* Image */}
                    <div className="relative h-36 overflow-hidden">  {/* Reduced image height */}
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      {/* Category */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span className="mr-2">{blog.date}</span>
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{blog.readTime}</span>
                      </div>

                      <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-xs text-gray-600 mb-3 flex-1 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <User className="w-3 h-3 mr-1" />
                        <span>{blog.author}</span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-auto">
                        {blog.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-[10px] rounded-full bg-orange-100 text-orange-800"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Pagination */}
            <div className="swiper-pagination !bottom-0 !relative mt-8"></div>
          </Swiper>

          {/* Navigation Buttons (slightly smaller) */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm text-orange-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 shadow-lg border border-orange-100">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm text-orange-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 shadow-lg border border-orange-100">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-2">
          <Link to="/blogs">
            <button className="inline-flex items-center px-6 py-2 border-2 border-orange-300 text-sm font-semibold rounded-full bg-white/50 backdrop-blur-sm text-orange-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:border-transparent transition-all duration-300 group shadow-lg hover:shadow-xl">
              <span className="mr-2">View All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PremiumBlogSlider;