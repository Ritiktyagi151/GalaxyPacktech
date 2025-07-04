import { useState, useEffect } from "react";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample blog data from Galaxy PackTech
  const blogs = [
    {
      id: 1,
      title: "Advanced Pouch Making Machines",
      excerpt:
        "Discover Galaxy PackTech's cutting-edge automated pouch packaging solutions.",
      content:
        "Galaxy PackTech's FFS-3000 pouch making machine represents the pinnacle of vertical form-fill-seal technology. Our fully automated system handles everything from film unwinding to final pouch sealing at speeds up to 120 pouches per minute. The machine features advanced servo controls for precise dosing and sealing, with optional gas flushing for modified atmosphere packaging. What sets our technology apart is the intelligent vision system that detects and rejects imperfect seals in real-time, ensuring near-zero defect rates. The modular design allows quick changeovers between stand-up pouches, flat bottom bags, and spouted pouches. With energy-efficient motors and minimal material waste, our pouch machines help manufacturers reduce operational costs by up to 30% while increasing output quality.",
      date: "May 15, 2023",
      author: "Dr. Sarah Chen",
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 2,
      title: "High-Speed Bag Making Technology",
      excerpt: "Revolutionary bag production systems from Galaxy PackTech.",
      content:
        "Our BMS-5000 series bag making machines combine unprecedented speed with precision engineering. Capable of producing up to 200 bags per minute, these systems handle multi-layer laminates with thicknesses from 15-200 microns. The patented ultrasonic sealing technology ensures perfect welds even with challenging materials like metallized films. Galaxy PackTech's proprietary tension control system maintains consistent bag dimensions within ±0.2mm tolerance. The machines feature IoT connectivity for remote monitoring of production metrics, predictive maintenance alerts, and seamless integration with ERP systems. Optional configurations include zipper attachment, hang holes, and tear-notches. With quick-change tooling (under 5 minutes for complete format changes), our bag makers are ideal for contract packaging operations handling diverse product lines. The energy recovery system reduces power consumption by 25% compared to conventional models.",
      date: "April 28, 2023",
      author: "Mark Johnson",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "Sustainable Packaging Machinery",
      excerpt: "Eco-friendly solutions for pouch and bag production.",
      content:
        "Galaxy PackTech's GreenLine series redefines sustainable packaging machinery. These systems are specifically engineered to handle biodegradable and compostable films that challenge conventional machines. Our specialized low-temperature sealing technology prevents degradation of PLA-based materials while maintaining production speeds up to 90 pouches/minute. The machines incorporate recycled material feed systems that can process up to 30% post-consumer recycled content without compromising seal integrity. Unique features include our bio-lubrication system and energy-efficient servo drives that reduce carbon footprint by 40%. The GreenLine bag makers come with integrated thickness gauges that optimize material usage, reducing waste by up to 15%. We've partnered with leading material scientists to develop machine settings profiles for all major sustainable substrates, ensuring plug-and-play operation with innovative eco-materials.",
      date: "March 10, 2023",
      author: "Emily Rodriguez",
      image:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      title: "Customizable Packaging Systems",
      excerpt: "Tailored solutions for unique pouch and bag requirements.",
      content:
        "At Galaxy PackTech, we understand that one size doesn't fit all in packaging. Our CustomPro machinery line offers unparalleled flexibility for specialized applications. The modular design allows integration of unique features like dual-chamber pouches for chemical mixing, vacuum-sealed coffee bags with degassing valves, or medical sterile barrier pouches. The machines feature programmable logic that remembers 50+ product configurations for instant changeovers. Our engineering team works directly with clients to develop custom sealing jaws, feeding systems, and quality control mechanisms for non-standard materials. Recent innovations include a pharmaceutical pouch system with integrated label application and a bulk bag maker with automatic palletizing. The CustomPro line's adaptive control system automatically adjusts parameters based on material sensors, ensuring consistent quality even with variable substrates. With over 200 successful custom installations worldwide, we transform unique packaging concepts into production reality.",
      date: "February 22, 2023",
      author: "Alex Wong",
      image:
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
    {
      id: 5,
      title: "Automated Quality Control Systems",
      excerpt: "Intelligent inspection for pouch and bag production.",
      content:
        "Galaxy PackTech's VisionIQ system revolutionizes quality assurance in packaging production. Integrated directly into our pouch and bag making machines, this AI-powered inspection system performs 25 quality checks per second. The high-resolution cameras detect micro-leaks, seal imperfections, and material defects invisible to the human eye. The machine learning algorithms continuously improve detection accuracy based on production data. Our proprietary technology can identify color variations as small as 0.5 ΔE and seal width deviations beyond ±0.1mm. The system automatically adjusts machine parameters to correct issues in real-time and segregates defective units with 99.98% accuracy. Optional features include barcode verification, weight monitoring via integrated scales, and metal detection. The comprehensive reporting dashboard tracks quality metrics across shifts, materials, and operators, providing actionable insights to improve overall equipment effectiveness (OEE).",
      date: "January 18, 2023",
      author: "David Kim",
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 6,
      title: "Compact Machines for SMEs",
      excerpt: "Space-efficient packaging solutions for small manufacturers.",
      content:
        "Galaxy PackTech's CompactPro line brings industrial-grade pouch and bag making capabilities to small and medium enterprises. These space-saving machines (requiring just 6m² floor space) deliver professional results at affordable price points. The CP-200 pouch machine produces up to 60 pouches/minute with professional-grade seals, while the CB-150 bag maker handles everything from simple T-shirt bags to reinforced carrier bags. Despite their compact size, these machines feature robust construction with the same precision components as our industrial lines. The intuitive touchscreen interface requires minimal training, and preset programs for common materials simplify operation. Unique to the CompactPro line is our 'Pay-As-You-Grow' upgrade path - machines can be field-upgraded with additional modules as business needs expand. With energy consumption under 3kW and minimal compressed air requirements, these solutions make professional packaging accessible to craft producers, startups, and small-scale manufacturers.",
      date: "December 5, 2022",
      author: "Lisa Patel",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 7,
      title: "Aseptic Packaging Technology",
      excerpt: "Sterile pouch filling systems for sensitive products.",
      content:
        "Our AseptiPouch line represents the cutting edge in sterile packaging technology. These integrated systems combine pouch forming, sterilization, filling, and sealing in a continuous ISO Class 5 cleanroom environment. The machines utilize hydrogen peroxide vapor sterilization with residual levels below 0.5ppm, meeting strict pharmacopeia standards. Galaxy PackTech's proprietary 'cold-seal' technology allows sterile packaging of heat-sensitive products like probiotics and vaccines without compromising shelf life. The systems feature redundant sterile air barriers and real-time particle monitoring. With filling accuracy of ±0.5% for liquids and ±1% for powders, these machines are ideal for pharmaceutical, nutraceutical, and premium food applications. The complete validation package includes IQ/OQ/PQ documentation and 21 CFR Part 11 compliant data logging. Recent advancements include integrated weight-checking and laser marking systems that eliminate secondary handling of sterile products.",
      date: "November 12, 2022",
      author: "Dr. Robert Chen",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
    },
    {
      id: 8,
      title: "Heavy-Duty Bagging Systems",
      excerpt: "Industrial-strength solutions for bulk packaging.",
      content:
        "For demanding industrial applications, Galaxy PackTech's HD-4000 series sets new standards in heavy-duty bagging. These rugged machines handle materials from fine powders to abrasive aggregates with capacities up to 50kg per bag. The heavy-gauge construction features wear-resistant coatings on all contact surfaces, extending service life in harsh environments. Our patented 'SmartFill' technology uses predictive algorithms to optimize filling speeds while minimizing dust emissions. The system accommodates various bag styles including pinch-bottom, gusseted, and FIBC containers. Specialized options include inert gas flushing for reactive materials and anti-static systems for explosive powders. With production rates up to 12 bags/minute and integrated palletizing, these systems are transforming bulk packaging in chemicals, building materials, and agricultural sectors. The heavy-duty heat sealing system generates up to 500N/15mm seal strength, exceeding international transportation standards. Remote diagnostics and wear-part monitoring minimize downtime in continuous operations.",
      date: "October 8, 2022",
      author: "Sophia Martinez",
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
  ];

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle body overflow when modal opens/closes
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-orange-600 h-[400px] flex justify-center items-center text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-center">
            Galaxy PackTech Blog
          </h1>
          <p className="text-xl text-center mt-4">
            Innovations and Insights in Packaging Technology
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-orange-600 text-sm font-semibold">
                  {blog.date}
                </div>
                <h2 className="text-xl font-bold text-gray-800 mt-2 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    By {blog.author}
                  </span>
                  <button
                    onClick={() => openModal(blog)}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && selectedBlog && (
        <div className="fixed  backdrop-blur-sm inset-0 z-200 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="  inset-0 transition-opacity"
              aria-hidden="true"
              onClick={closeModal}
            ></div>

            {/* Modal content */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4">
                        {selectedBlog.title}
                      </h3>
                      <button
                        onClick={closeModal}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        <span className="sr-only">Close</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-2 min-h-[300px] max-h-[60vh] overflow-y-auto">
                      <img
                        src={selectedBlog.image}
                        alt={selectedBlog.title}
                        className="w-full h-48 sm:h-64 object-cover mb-4 rounded"
                      />
                      <p className="text-gray-700 mb-4 whitespace-pre-line">
                        {selectedBlog.content}
                      </p>
                      <div className="flex justify-between text-sm text-gray-500 mt-4">
                        <span>Published: {selectedBlog.date}</span>
                        <span>Author: {selectedBlog.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
