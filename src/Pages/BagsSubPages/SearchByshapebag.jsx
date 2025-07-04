import React, { useState } from "react";
import { ArrowRight, ChevronRight, Package, Download, X } from "lucide-react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// PDF Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ea580c",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
    color: "#9a3412",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    objectFit: "contain",
  },
  description: {
    fontSize: 14,
    lineHeight: 1.5,
    marginBottom: 20,
  },
  specsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ea580c",
  },
  specItem: {
    fontSize: 12,
    marginBottom: 5,
  },
  footer: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 30,
    color: "#666",
  },
});

// PDF Document Component
const ProductPDF = ({ product }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.subtitle}>{product.category}</Text>
        <Image src={product.image} style={styles.image} />
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.specsTitle}>Specifications:</Text>
        {product.specs.map((spec, index) => (
          <Text key={index} style={styles.specItem}>
            • {spec}
          </Text>
        ))}
        <Text style={styles.footer}>
          For more information, please contact Galaxy Pack Tech
        </Text>
      </View>
    </Page>
  </Document>
);

const ShapeofBags = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bagTypes = [
    {
      id: "flat-bags",
      title: "Flat Bags",
      subtitle: "Simple, flat plastic bags for various applications",
      color: "from-amber-400 to-orange-500",
      items: [
        {
          id: "fb-100",
          title: "High-Speed Flat Bag Making Machine",
          description:
            "Our FB-100 model produces standard flat bags with precision and efficiency. Ideal for retail, food service, and general packaging applications. The machine features automatic film feeding, precise cutting, and consistent sealing for high-quality output.",
          link: "FB-100.html",
          image: "/images/products/flat-bags.jpg",
          category: "Flat Bag Series",
          specs: [
            "Production Speed: 200-300 bags/min",
            "Bag Width: 100-500mm adjustable",
            "Bag Length: 150-800mm adjustable",
            "Material Thickness: 0.015-0.05mm",
            "Power Supply: 3-phase 380V/50Hz",
          ],
        },
        {
          id: "fb-200",
          title: "Heavy-Duty Flat Bag Machine",
          description:
            "The FB-200 model handles thicker materials for more durable flat bags. Perfect for industrial applications requiring stronger packaging. Features reinforced sealing jaws and heavy-duty cutting system for consistent performance with tough materials.",
          link: "FB-200.html",
          image: "/images/products/heavy-flat-bags.jpg",
          category: "Industrial Flat Bag Series",
          specs: [
            "Production Speed: 150-200 bags/min",
            "Material Thickness: Up to 0.1mm",
            "Seal Width: 5-15mm adjustable",
            "Optional Features: Perforation, hang holes",
            "Machine Weight: 1200kg",
          ],
        },
      ],
    },
    {
      id: "gusseted-bags",
      title: "Gusseted Bags",
      subtitle: "Bags with side gussets for expanded capacity",
      color: "from-yellow-400 to-amber-500",
      items: [
        {
          id: "gb-150",
          title: "Automatic Gusseted Bag Making Machine",
          description:
            "The GB-150 produces high-quality gusseted bags with precise side folds. Ideal for coffee, snacks, and bulk products. Features automatic gusset forming and consistent side seal technology for reliable production.",
          link: "GB-150.html",
          image: "/images/products/gusseted-bags.jpg",
          category: "Standard Gusseted Series",
          specs: [
            "Production Speed: 120-180 bags/min",
            "Gusset Width: 20-100mm adjustable",
            "Bag Dimensions: 150-600mm (W) x 200-800mm (L)",
            "Material Compatibility: LDPE, HDPE, OPP",
            "Power Consumption: 5.5kW",
          ],
        },
        {
          id: "gb-250",
          title: "Premium Gusseted Bag Machine with Zipper",
          description:
            "The GB-250 combines gusseted design with resealable zippers for premium packaging solutions. Perfect for high-end food products and reusable packaging applications. Features precision zipper application and reinforced gusset seals.",
          link: "GB-250.html",
          image: "/images/products/gusseted-zipper.jpg",
          category: "Premium Gusseted Series",
          specs: [
            "Production Speed: 80-120 bags/min",
            "Zipper Types: Single or double track",
            "Gusset Options: Side or bottom gusset",
            "Special Features: Tamper-evident seal option",
            "Machine Footprint: 2500 x 1500 x 1800mm",
          ],
        },
      ],
    },
    {
      id: "woven-sacks",
      title: "Woven Sacks",
      subtitle: "Heavy-duty woven polypropylene bags",
      color: "from-orange-400 to-red-500",
      items: [
        {
          id: "ws-300",
          title: "Automatic Woven Sack Making Machine",
          description:
            "The WS-300 produces durable woven polypropylene sacks for agriculture, construction, and industrial use. Features heavy-duty stitching and precise cutting for consistent sack production. Handles various woven PP materials with ease.",
          link: "WS-300.html",
          image: "/images/products/woven-sacks.jpg",
          category: "Woven Sack Series",
          specs: [
            "Production Speed: 30-50 sacks/min",
            "Sack Width: 300-800mm",
            "Sack Length: 400-1200mm",
            "Material: Woven PP 70-120gsm",
            "Stitching Options: Single or double stitch",
          ],
        },
        {
          id: "ws-400",
          title: "Laminated Woven Sack Machine",
          description:
            "The WS-400 produces laminated woven sacks with enhanced moisture barrier properties. Ideal for fertilizers, chemicals, and food products requiring extra protection. Features precise lamination application and reinforced stitching.",
          link: "WS-400.html",
          image: "/images/products/laminated-sacks.jpg",
          category: "Laminated Sack Series",
          specs: [
            "Production Speed: 20-40 sacks/min",
            "Lamination Thickness: 20-50 micron",
            "Printing Options: Up to 6 colors",
            "Special Features: UV coating option",
            "Power Requirements: 15kW",
          ],
        },
      ],
    },
    {
      id: "standup-bags",
      title: "Stand-up Bags",
      subtitle: "Self-standing flexible packaging with flat bottoms",
      color: "from-red-400 to-orange-500",
      items: [
        {
          id: "sb-200",
          title: "Automatic Stand-up Bag Making Machine",
          description:
            "The SB-200 produces premium stand-up pouches with excellent shelf presence. Features precise bottom gusset forming and consistent side seals. Ideal for snacks, coffee, pet food, and other retail products.",
          link: "SB-200.html",
          image: "/images/products/standup-bags.jpg",
          category: "Stand-up Bag Series",
          specs: [
            "Production Speed: 60-100 bags/min",
            "Bag Width: 100-400mm",
            "Bag Height: 150-600mm",
            "Bottom Gusset: 30-100mm",
            "Material Options: PET/PE, OPP/PE, PET/AL/PE",
          ],
        },
        {
          id: "sb-300",
          title: "Stand-up Bag Machine with Spout",
          description:
            "The SB-300 combines stand-up bag production with automatic spout insertion. Perfect for liquid products, powders, and flowable materials. Features precision spout placement and leak-proof sealing technology.",
          link: "SB-300.html",
          image: "/images/products/standup-spout.jpg",
          category: "Liquid Packaging Series",
          specs: [
            "Production Speed: 40-70 bags/min",
            "Spout Sizes: 15-40mm diameter",
            "Spout Materials: HDPE, PP",
            "Cap Options: Flip-top, screw, press-fit",
            "Special Features: Nitrogen flushing option",
          ],
        },
      ],
    },
    {
      id: "tshirt-bags",
      title: "T-Shirt Bags",
      subtitle: "Common carry bags with handle cuts",
      color: "from-amber-500 to-orange-600",
      items: [
        {
          id: "tb-100",
          title: "High-Speed T-Shirt Bag Making Machine",
          description:
            "The TB-100 produces standard T-shirt bags at high speeds for retail and grocery applications. Features precise handle cutting and consistent side welding. Offers excellent production efficiency for high-volume needs.",
          link: "TB-100.html",
          image: "/images/products/tshirt-bags.jpg",
          category: "T-Shirt Bag Series",
          specs: [
            "Production Speed: 200-400 bags/min",
            "Bag Width: 200-600mm",
            "Handle Height: 50-150mm",
            "Material Thickness: 0.015-0.04mm",
            "Optional Features: Perforated roll",
          ],
        },
        {
          id: "tb-200",
          title: "Heavy-Duty T-Shirt Bag Machine",
          description:
            "The TB-200 produces thicker T-shirt bags for heavier loads and reusable applications. Features reinforced handle areas and stronger side seals. Ideal for department stores and premium retail packaging.",
          link: "TB-200.html",
          image: "/images/products/heavy-tshirt.jpg",
          category: "Premium T-Shirt Series",
          specs: [
            "Production Speed: 120-200 bags/min",
            "Material Thickness: Up to 0.08mm",
            "Handle Reinforcement: Double-layer option",
            "Printing Options: Up to 4 colors",
            "Machine Weight: 1500kg",
          ],
        },
      ],
    },
    {
      id: "zipper-bags",
      title: "Zipper Bags",
      subtitle: "Resealable bags with zip-lock closures",
      color: "from-orange-400 to-amber-500",
      items: [
        {
          id: "zb-150",
          title: "Automatic Zipper Bag Making Machine",
          description:
            "The ZB-150 produces standard zipper bags with reliable resealable closures. Features precise zipper application and consistent sealing. Perfect for food storage, electronics, and various consumer products.",
          link: "ZB-150.html",
          image: "/images/products/zipper-bags.jpg",
          category: "Standard Zipper Series",
          specs: [
            "Production Speed: 100-160 bags/min",
            "Zipper Width: 3-8mm",
            "Bag Dimensions: 100-400mm (W) x 150-600mm (L)",
            "Zipper Types: Single or double track",
            "Material Compatibility: PE, CPP, OPP",
          ],
        },
        {
          id: "zb-250",
          title: "Premium Zipper Bag Machine with Degassing Valve",
          description:
            "The ZB-250 combines zipper closure with degassing valves for coffee and fresh food packaging. Features precise valve insertion and airtight sealing technology. Ensures product freshness with convenient resealability.",
          link: "ZB-250.html",
          image: "/images/products/zipper-valve.jpg",
          category: "Premium Zipper Series",
          specs: [
            "Production Speed: 60-100 bags/min",
            "Valve Types: One-way or two-way",
            "Valve Sizes: 5mm, 8mm, 10mm",
            "Special Features: Oxygen barrier options",
            "Power Requirements: 5kW",
          ],
        },
      ],
    },
    {
      id: "custom-bags",
      title: "Custom Shapes",
      subtitle: "Specialty bags with unique shapes and features",
      color: "from-amber-400 to-orange-600",
      items: [
        {
          id: "cb-100",
          title: "Custom Shape Bag Making Machine",
          description:
            "The CB-100 produces bags with unique shapes and special features. Features programmable cutting dies and flexible sealing options. Perfect for promotional packaging, specialty retail, and unique product requirements.",
          link: "CB-100.html",
          image: "/images/products/custom-bags.jpg",
          category: "Custom Shape Series",
          specs: [
            "Production Speed: 40-80 bags/min",
            "Maximum Bag Width: 500mm",
            "Cutting Options: Rotary or flatbed die",
            "Special Features: Handle punching, window cutting",
            "Changeover Time: 15-30 minutes",
          ],
        },
        {
          id: "cb-200",
          title: "Multi-Function Bag Machine",
          description:
            "The CB-200 combines multiple bag types in one machine with quick changeover capabilities. Produces various bag styles including flat, gusseted, and stand-up options. Ideal for flexible packaging operations with diverse product lines.",
          link: "CB-200.html",
          image: "/images/products/multi-bags.jpg",
          category: "Multi-Function Series",
          specs: [
            "Production Speed: 50-120 bags/min (varies by type)",
            "Bag Types: 5+ configurations",
            "Changeover Time: <10 minutes",
            "Material Compatibility: All standard films",
            "Machine Dimensions: 3000 x 1800 x 2000mm",
          ],
        },
      ],
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-20">
        <div className="container mx-auto px-4">
          <p className="text-orange-200 text-lg mb-2">Products</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Search by Shape of Bag
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Select the type of bag you want to produce, and you can see detailed
            information about the bag making machine you selected.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {bagTypes.map((section) => (
          <section
            key={section.id}
            className={`mb-16 p-8 rounded-xl shadow-lg bg-gradient-to-br ${section.color}/10 to-white`}
          >
            <div className="flex items-center mb-4">
              <div
                className={`p-3 rounded-lg bg-gradient-to-br ${section.color} mr-4`}
              >
                <Package className="text-white w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800">
                  {section.title}
                </h2>
                <p className="text-lg text-orange-600 font-normal">
                  {section.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-orange-700 group-hover:text-orange-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 line-clamp-2">
                      {item.description}
                    </p>
                    <button
                      onClick={() => openModal(item)}
                      className="mt-4 flex items-center text-orange-500 hover:text-orange-700 transition-colors"
                    >
                      <span className="mr-1">View details</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center backdrop-blur-sm bg-opacity-75 justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={closeModal}
            >
              <div className="absolute inset-0"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-700">
                      {selectedProduct.title}
                    </h3>
                    <p className="text-orange-600">{selectedProduct.category}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="w-full h-64 object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Product Description
                    </h4>
                    <p className="text-gray-700 mb-6">
                      {selectedProduct.description}
                    </p>

                    <h4 className="text-lg font-semibold mb-2">
                      Specifications
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 mb-6">
                      {selectedProduct.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                      <PDFDownloadLink
                        document={<ProductPDF product={selectedProduct} />}
                        fileName={`${selectedProduct.title.replace(
                          /\s+/g,
                          "_"
                        )}_specsheet.pdf`}
                        className="flex items-center bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        {({ loading }) => (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            {loading
                              ? "Preparing PDF..."
                              : "Download Spec Sheet"}
                          </>
                        )}
                      </PDFDownloadLink>
                      <a
                        href={selectedProduct.link}
                        className="flex items-center border border-orange-600 text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-md transition-colors"
                      >
                        <span>View Product Page</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-orange-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Transform Your Packaging Production?
            </h2>
            <p className="text-orange-200 mb-8 max-w-2xl mx-auto">
              Discover how Galaxy Pack Tech can revolutionize your bag
              manufacturing with cutting-edge solutions for all types of bags.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/en/contactus/"
                className="group bg-white text-orange-700 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all hover:scale-105 flex items-center justify-center"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/en/proposals/"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-700 transition-all hover:scale-105"
              >
                Request Proposal
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-orange-600 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img
                src="/images2/base/hd-logo-white.png"
                alt="Galaxy Pack Tech"
                className="h-10"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShapeofBags;