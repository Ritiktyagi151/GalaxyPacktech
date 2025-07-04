import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Star,
  Eye,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GalaxyVideoSectionMinimal({ customVideos = [] }) {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [mutedVideos, setMutedVideos] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const defaultVideos = [
    {
      id: 1,
      title: "PackTech X1 Robotic Packer",
      subtitle: "Automated packaging at 200 units/minute",
      views: "3.5M",
      duration: "2:45",
      videoUrl: "/video/20230806_112557.mp4",
    },
    {
      id: 2,
      title: "EcoWrap Sustainable System",
      subtitle: "Biodegradable packaging solutions",
      views: "2.8M",
      duration: "3:15",
      videoUrl: "public/video/new2.mp4",
    },
    {
      id: 3,
      title: "PharmaSeal Packaging",
      subtitle: "GMP-compliant pharmaceutical packaging",
      views: "4.2M",
      duration: "4:30",
      videoUrl: "public/video/new3.mp4",
    },
    {
      id: 4,
      title: "PharmaSeal Packaging",
      subtitle: "GMP-compliant pharmaceutical packaging",
      views: "4.2M",
      duration: "4:30",
      videoUrl: "public/video/new4.mp4",
    },
  ];

  const videos = [...defaultVideos, ...customVideos];

  const toggleVideo = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (playingVideo === index) {
        video.pause();
        setPlayingVideo(null);
        if (swiperRef.current) swiperRef.current.autoplay.start();
      } else {
        videoRefs.current.forEach((v, i) => {
          if (v && i !== index) {
            v.pause();
            setMutedVideos((prev) => ({ ...prev, [i]: true }));
          }
        });
        setMutedVideos((prev) => ({ ...prev, [index]: false }));
        video.play().catch(console.error);
        setPlayingVideo(index);
        if (swiperRef.current) swiperRef.current.autoplay.stop();
      }
    }
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      setMutedVideos((prev) => ({ ...prev, [index]: video.muted }));
    }
  };

  const handleVideoEnd = (index) => {
    setPlayingVideo(null);
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  const handleVideoHover = (index, isHovering) => {
    if (isMobile) return; // Disable hover effects on mobile
    setHoveredVideo(isHovering ? index : null);
    if (swiperRef.current) {
      if (isHovering) {
        swiperRef.current.autoplay.stop();
        const video = videoRefs.current[index];
        if (video && playingVideo !== index) {
          video.currentTime = 0;
          video.muted = true;
          setMutedVideos((prev) => ({ ...prev, [index]: true }));
          video.play().catch(console.error);
        }
      } else if (playingVideo !== index) {
        const video = videoRefs.current[index];
        if (video && playingVideo !== index) {
          video.pause();
        }
        if (playingVideo === null) {
          swiperRef.current.autoplay.start();
        }
      }
    }
  };

  const handleDownload = (videoUrl) => {
    const link = document.createElement("a");
    link.href = videoUrl;
    link.download = videoUrl.split("/").pop() || "packtech-video.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-900 mb-2 md:mb-4">
            Packaging Technology Showcase
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto">
            Innovative solutions for modern packaging challenges
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-orange-500 mx-auto"></div>
        </div>

        {/* Video Slider */}
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[40vh] xl:h-[50vh] mb-6 md:mb-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: !isMobile,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              renderBullet: (index, className) => {
                return `<span class="${className}" style="width: 0.5rem; height: 0.5rem; background-color: #9ca3af; transition: all 0.3s ease;"></span>`;
              },
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="h-full"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={video.id} className="h-full">
                <div 
                  className="flex flex-col md:flex-row h-full w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
                  onMouseEnter={() => handleVideoHover(index, true)}
                  onMouseLeave={() => handleVideoHover(index, false)}
                >
                  {/* Main Video */}
                  <div className="w-full md:w-2/3 h-1/2 md:h-full relative">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="w-full h-full object-cover"
                      poster={video.thumbnailUrl}
                      onEnded={() => handleVideoEnd(index)}
                      loop={false}
                      muted={mutedVideos[index] !== false}
                      preload="metadata"
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                    </video>

                    {/* Play Button */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                        playingVideo === index
                          ? "opacity-0 pointer-events-none"
                          : "opacity-100"
                      }`}
                      onClick={() => toggleVideo(index)}
                    >
                      <div className="bg-orange-500 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-orange-600">
                        <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>

                    {/* Controls */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300 ${
                        playingVideo === index || hoveredVideo === index
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => toggleVideo(index)}
                          className="text-white hover:text-orange-300 transition-colors"
                        >
                          {playingVideo === index ? (
                            <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                          ) : (
                            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                          )}
                        </button>
                        <div className="flex items-center space-x-2 sm:space-x-4">
                          <button
                            onClick={() => toggleMute(index)}
                            className="text-white hover:text-orange-300 transition-colors"
                          >
                            {mutedVideos[index] ? (
                              <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                            ) : (
                              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            )}
                          </button>
                          <span className="text-white text-xs sm:text-sm">
                            {video.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Side Info */}
                  <div className="w-full md:w-1/3 h-1/2 md:h-full bg-white p-4 sm:p-6 flex flex-col">
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{video.subtitle}</p>
                    </div>

                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="flex items-center text-amber-500 mr-3 sm:mr-4">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-500" />
                        <span className="ml-1 text-xs sm:text-sm font-medium">
                          4.{8 + (index % 2)}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        <span>{video.views} views</span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <button
                        onClick={() => handleDownload(video.videoUrl)}
                        className="w-full py-1 sm:py-2 px-3 sm:px-4 border border-orange-500 rounded-lg text-orange-600 hover:bg-orange-50 transition-colors flex items-center justify-center text-xs sm:text-sm"
                      >
                        <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Download Video
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows - Hidden on mobile */}
          {!isMobile && (
            <>
              <button
                ref={prevRef}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-orange-50 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 z-10 border border-orange-200"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" />
              </button>
              <button
                ref={nextRef}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-orange-50 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 z-10 border border-orange-200"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" />
              </button>
            </>
          )}

          {/* Custom Pagination */}
          <div className="swiper-pagination !relative !mt-4 sm:!mt-6 md:!mt-8 !h-2 flex justify-center gap-2" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[
            { label: "Packaging Systems", value: "15+", icon: Play },
            { label: "Global Installations", value: "3,200+", icon: Eye },
            { label: "Client Satisfaction", value: "98%", icon: Star },
            { label: "Patents Held", value: "94", icon: Download },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-orange-100 text-center group"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600 mb-1 group-hover:text-orange-700 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}