import { useState, useRef, useEffect } from "react";
import { Play, Volume2, VolumeX, Star, Eye, Download } from "lucide-react";

export default function GalaxyVideoGrid({ customVideos = [] }) {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [mutedVideos, setMutedVideos] = useState({});
  const videoRefs = useRef([]);

  const defaultVideos = [
    {
      id: 1,
      title: "Automatic Spout Fixing Machine",

      views: "3.5M",
      duration: "1:04",
      videoUrl: "/video/Galaxy-packtech-videos/auto-spout-fix-machine.mp4",
    },
    {
      id: 2,
      title: "Durable high quality Pouches",

      views: "2.8M",
      duration: "1:06",
      videoUrl:
        "/video/Galaxy-packtech-videos/Durable-high-quality-pouches.mp4",
    },
    {
      id: 3,
      title: "High Speed Pouch Machine",

      views: "4.2M",
      duration: "1:34",
      videoUrl: "/video/Galaxy-packtech-videos/high-speed-pouch-machine.mp4",
    },
    {
      id: 4,
      title: "Stand-UP and Zipper Pouch Making Machine",

      views: "1.9M",
      duration: "1:45",
      videoUrl:
        "/video/Galaxy-packtech-videos/Stand-up-zipper-pouch-making-machine.mp4",
    },
    {
      id: 5,
      title: "Three Side Seal Machine",

      views: "2.3M",
      duration: "1:25",
      videoUrl: "/video/Galaxy-packtech-videos/three-side-seal-machine.mp4",
    },
    {
      id: 6,
      title: "GS 24 Plus 200",

      views: "1.7M",
      duration: "1:36",
      videoUrl: "/video/Galaxy-packtech-videos/gs-24-plus-200.mp4",
    },
  ];

  const videos = [...defaultVideos, ...customVideos];

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      setMutedVideos((prev) => ({ ...prev, [index]: video.muted }));
    }
  };

  const handleVideoHover = (index, isHovering) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (isHovering) {
      setHoveredVideo(index);
      video.currentTime = 0;
      video.muted = mutedVideos[index] || false;
      video.play().catch(console.error);
    } else {
      setHoveredVideo(null);
      video.pause();
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
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
            Packaging Technology Showcase
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Innovative solutions for modern packaging challenges
          </p>
          <div className="w-24 h-0.5 bg-orange-500 mx-auto"></div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => handleVideoHover(index, true)}
              onMouseLeave={() => handleVideoHover(index, false)}
            >
              {/* Video Container */}
              <div className="relative aspect-video">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-64 object-fill"
                  poster={video.thumbnailUrl}
                  loop={false}
                  muted={mutedVideos[index] === true}
                  preload="metadata"
                >
                  <source src={video.videoUrl} type="video/mp4" />
                </video>

                {/* Play Button (shown when not hovered/playing) */}
                {hoveredVideo !== index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <div className="bg-orange-500 rounded-full p-3 shadow-lg">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}

                {/* Controls */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300 ${
                    hoveredVideo === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => toggleMute(index)}
                        className="text-white hover:text-orange-300 transition-colors"
                      >
                        {mutedVideos[index] ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                      <span className="text-white text-sm">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4 bg-white">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{video.subtitle}</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span className="ml-1 text-sm font-medium">
                      4.{8 + (index % 2)}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{video.views} views</span>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(video.videoUrl)}
                  className="w-full py-2 px-4 border border-orange-500 rounded-lg text-orange-600 hover:bg-orange-50 transition-colors flex items-center justify-center text-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Video
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Packaging Systems", value: "15+", icon: Play },
            { label: "Global Installations", value: "3,200+", icon: Eye },
            { label: "Client Satisfaction", value: "98%", icon: Star },
            { label: "Patents Held", value: "94", icon: Download },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-orange-100 text-center group"
            >
              <div className="text-3xl font-bold text-orange-600 mb-1 group-hover:text-orange-700 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
