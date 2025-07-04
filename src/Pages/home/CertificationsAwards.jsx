import { useState } from "react";

const GalaxyPackTechCertifications = () => {
  const [activeTab, setActiveTab] = useState("certifications");
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      name: "ISO 9001:2015",
      category: "Quality Management",
      year: "2023",
      description: "International standard for quality management systems",
      icon: "🏆",
      color: "from-blue-400 to-blue-600",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      certificateImage:
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      name: "ISO 14001:2015",
      category: "Environmental Management",
      year: "2023",
      description: "Environmental management systems certification",
      icon: "🌱",
      color: "from-green-400 to-green-600",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      certificateImage:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      name: "FDA Approved",
      category: "Food Safety",
      year: "2024",
      description: "Food and Drug Administration compliance certification",
      icon: "🛡️",
      color: "from-red-400 to-red-600",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      certificateImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      name: "FSC Certified",
      category: "Sustainability",
      year: "2023",
      description: "Forest Stewardship Council responsible sourcing",
      icon: "🌳",
      color: "from-emerald-400 to-emerald-600",
      image:
        "https://images.unsplash.com/photo-1441260038675-7329ab4cc264?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      certificateImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      name: "BRC Global Standard",
      category: "Food Safety",
      year: "2024",
      description: "British Retail Consortium global food safety standard",
      icon: "✅",
      color: "from-purple-400 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      certificateImage:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      name: "HACCP Certified",
      category: "Food Safety",
      year: "2023",
      description: "Hazard Analysis Critical Control Points system",
      icon: "🔬",
      color: "from-cyan-400 to-cyan-600",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      certificateImage:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
  ];

  const awards = [
    {
      name: "Innovation Excellence Award",
      organization: "Packaging World Magazine",
      year: "2024",
      description:
        "Recognition for breakthrough sustainable packaging technology",
      icon: "🚀",
      color: "from-orange-400 to-orange-600",
      rank: "Gold",
      image:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      awardImage:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      name: "Sustainability Leadership",
      organization: "Green Packaging Institute",
      year: "2023",
      description: "Outstanding commitment to environmental responsibility",
      icon: "♻️",
      color: "from-green-400 to-green-600",
      rank: "Platinum",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      awardImage:
        "https://images.unsplash.com/photo-1523871134317-9ea1ba8c7ea6?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      name: "Best Packaging Design",
      organization: "International Design Awards",
      year: "2024",
      description: "Excellence in custom packaging design and functionality",
      icon: "🎨",
      color: "from-pink-400 to-pink-600",
      rank: "Silver",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      awardImage:
        "https://images.unsplash.com/photo-1599420186946-40ab05c2b658?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      name: "Industry Pioneer Award",
      organization: "Manufacturing Excellence",
      year: "2023",
      description: "Leading innovations in automated packaging solutions",
      icon: "⚡",
      color: "from-yellow-400 to-yellow-600",
      rank: "Gold",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      awardImage:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
    {
      name: "Customer Choice Award",
      organization: "Packaging Review Board",
      year: "2024",
      description: "Highest customer satisfaction in packaging solutions",
      icon: "❤️",
      color: "from-red-400 to-red-600",
      rank: "Diamond",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      awardImage:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    },
  ];

  const getRankColor = (rank) => {
    switch (rank) {
      case "Diamond":
        return "text-cyan-300 bg-cyan-500/20";
      case "Platinum":
        return "text-slate-300 bg-slate-500/20";
      case "Gold":
        return "text-yellow-300 bg-yellow-500/20";
      case "Silver":
        return "text-gray-300 bg-gray-500/20";
      default:
        return "text-orange-300 bg-orange-500/20";
    }
  };

  const openImageModal = (imageUrl, title) => {
    setSelectedImage({ url: imageUrl, title });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="text-center py-8 px-4">
        <h1 className="text-5xl font-bold text-white mb-4">
          Certifications & <span className="text-orange-400">Awards</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Recognized excellence in quality, sustainability, and innovation
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700/50">
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "certifications"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab("awards")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "awards"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              Awards
            </button>
          </div>
        </div>

        {/* Certifications Section */}
        {activeTab === "certifications" && (
          <div className="space-y-8">
            {/* Certificate Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02]"
                >
                  {/* Certificate Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cert.certificateImage}
                      alt={`${cert.name} Certificate`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <button
                      onClick={() =>
                        openImageModal(cert.certificateImage, cert.name)
                      }
                      className="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-sm text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-slate-800/80"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </button>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-slate-900/70 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                        {cert.year}
                      </span>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2">
                          {cert.name}
                        </h3>
                        <p className="text-blue-400 font-medium text-sm mb-2">
                          {cert.category}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certification Summary */}
            {/* <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Quality Assurance Overview
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">6</div>
                    <div className="text-slate-400 text-sm">
                      Active Certifications
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">
                      100%
                    </div>
                    <div className="text-slate-400 text-sm">
                      Compliance Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">
                      15+
                    </div>
                    <div className="text-slate-400 text-sm">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">
                      2024
                    </div>
                    <div className="text-slate-400 text-sm">Latest Updates</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        )}

        {/* Awards Section */}
        {activeTab === "awards" && (
          <div className="space-y-8">
            {/* Awards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-orange-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:scale-[1.02]"
                >
                  {/* Award Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={award.awardImage}
                      alt={`${award.name} Award`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <button
                      onClick={() =>
                        openImageModal(award.awardImage, award.name)
                      }
                      className="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-sm text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-slate-800/80"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </button>
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold ${getRankColor(
                          award.rank
                        )}`}
                      >
                        {award.rank}
                      </span>
                      <span className="px-3 py-1 bg-slate-900/70 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                        {award.year}
                      </span>
                    </div>
                  </div>

                  {/* Award Details */}
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${award.color} rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {award.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors duration-300 mb-2">
                          {award.name}
                        </h3>
                        <p className="text-orange-400 font-medium text-sm mb-2">
                          {award.organization}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Awards Summary */}
            {/* <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Recognition Summary
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">5</div>
                    <div className="text-slate-400 text-sm">Major Awards</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">3</div>
                    <div className="text-slate-400 text-sm">Gold Awards</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">1</div>
                    <div className="text-slate-400 text-sm">Diamond Award</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">
                      2024
                    </div>
                    <div className="text-slate-400 text-sm">
                      Latest Recognition
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center  backdrop-blur-sm"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
              <h3 className="text-white text-lg font-semibold">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalaxyPackTechCertifications;
