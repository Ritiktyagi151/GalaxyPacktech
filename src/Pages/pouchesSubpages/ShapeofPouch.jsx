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

const ShapeofPouch = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pouchTypes = [
    {
      id: "pdtbh",
      title: "GALAXY BOX POUCH®",
      subtitle: "High-speed BOX POUCH® making machine",
      color: "from-orange-400 to-red-500",
      items: [
        {
          id: "tnbhd01",
          title:
            "This model can make BOX POUCH® (Galaxy's original flat bottom pouch)",
          description:
            "Galaxy's machine can make various pouches, such as packing bags for food, pouches for commodities and infusion bags for the medical field. The BH-60DG-F model features high-speed production with precision sealing technology that ensures durability and leak-proof packaging. Ideal for food, medical, and industrial applications.",
          link: "BH-60DG-F.html",
          image: "/images/products/box-pouch.jpg",
          category: "BOX POUCH® Series",
          specs: [
            "Production Speed: 60 pouches/min",
            "Pouch Size: 100-300mm (W) x 150-450mm (L)",
            "Material Thickness: 0.03-0.2mm",
            "Power Supply: 3-phase 200V/400V",
            "Machine Dimensions: 2500 x 1500 x 1800mm",
            "Weight: 1500kg",
          ],
        },
        {
          id: "tnbhd02",
          title: "This model can make large-capacity BOX POUCH®",
          description:
            "Galaxy's BH-80DG-F model specializes in large flat bottom pouches suitable for prolonged food preservation and liquid transport. With enhanced stability and a wider sealing area, this machine produces pouches that stand upright and maintain structural integrity even with heavy contents. Perfect for bulk packaging in food and chemical industries.",
          link: "BH-80DG-F.html",
          image: "/images/products/large-box-pouch.jpg",
          category: "Large Capacity BOX POUCH®",
          specs: [
            "Production Speed: 45 pouches/min",
            "Pouch Size: 200-400mm (W) x 250-600mm (L)",
            "Material Thickness: 0.05-0.25mm",
            "Optional Features: Zipper attachment, spout insertion",
            "Power Consumption: 5.5kW",
            "Air Consumption: 0.5MPa, 200L/min",
          ],
        },
      ],
    },
    {
      id: "pdtbh2",
      title: "Three-Side-Seal",
      subtitle:
        "Pouch made by joining two films and sealing three positions around pouch",
      color: "from-orange-500 to-amber-500",
      items: [
        {
          id: "tnbh01",
          title: "Three-side-seal type pouch",
          description:
            "Used for retort food packaging with high-temperature resistance. The BH-60D model features precise temperature control for consistent sealing and can handle various packaging materials including aluminum foil and plastic laminates.",
          link: "BH-60D.html",
          image: "/images/products/three-side-seal.jpg",
          category: "Retort Packaging Series",
          specs: [
            "Production Speed: 80 pouches/min",
            "Pouch Size: 80-250mm (W) x 100-350mm (L)",
            "Seal Width: 8-12mm",
            "Material Compatibility: PET/AL/CPP, NY/PE, etc.",
            "Temperature Control: ±1°C accuracy",
          ],
        },
        {
          id: "tnbh02",
          title: "Three-side-seal type standing pouch",
          description:
            "Designed for retort food packaging with enhanced display capabilities. The BH-60DLLS model creates pouches with a stable base that stands upright on shelves, perfect for retail environments.",
          link: "BH-60DLLS.html",
          image: "/images/products/standing-pouch.jpg",
          category: "Standing Pouch Series",
          specs: [
            "Production Speed: 70 pouches/min",
            "Base Width: 60-120mm",
            "Optional Features: Hanger hole, tear notch",
            "Material Thickness: 0.06-0.25mm",
            "Machine Footprint: 2000 x 1200 x 1600mm",
          ],
        },
        {
          id: "tnbh03",
          title: "Three-side-seal type pouch with zipper",
          description:
            "Ideal for resealable packaging of snacks and dry goods. The BH-60DLLC model features precision zipper application with leak-proof technology for extended product freshness.",
          link: "BH-60DLLC.html",
          image: "/images/products/zipper-pouch.jpg",
          category: "Zipper Pouch Series",
          specs: [
            "Production Speed: 60 pouches/min",
            "Zipper Types: Single-track, double-track options",
            "Zipper Width: 3-8mm",
            "Special Features: Tamper-evident seal option",
            "Power Requirements: 3-phase 380V, 50Hz",
          ],
        },
        {
          id: "tnbh04",
          title: "Three-side-seal type standing pouch with zipper",
          description:
            "Combines the convenience of resealable zippers with the display advantages of standing pouches. The BH-60DLLSC model is perfect for premium food products and household items requiring both functionality and shelf appeal.",
          link: "BH-60DLLSC.html",
          image: "/images/products/standing-zipper.jpg",
          category: "Premium Standing Pouch Series",
          specs: [
            "Production Speed: 55 pouches/min",
            "Maximum Pouch Height: 450mm",
            "Base Width Options: 70mm, 90mm, 110mm",
            "Zipper Color Options: Multiple available",
            "Optional Features: Spout attachment",
          ],
        },
        {
          id: "tnbh05",
          title: "Slightly larger three-side-seal type pouch",
          description:
            "The BH-80D model handles larger format packaging for family-sized portions or bulk products. Features enhanced film handling capabilities for thicker materials and larger pouch dimensions.",
          link: "BH-80D.html",
          image: "/images/products/large-retort.jpg",
          category: "Large Format Packaging Series",
          specs: [
            "Production Speed: 50 pouches/min",
            "Maximum Pouch Width: 400mm",
            "Material Thickness: Up to 0.3mm",
            "Special Features: Automatic film splicing",
            "Machine Weight: 1800kg",
          ],
        },
        {
          id: "tnbh06",
          title: "Half fold fusion, standing pouch and zipper seal",
          description:
            "The BH-60DLLSC+CT combines multiple technologies for premium packaging solutions. Features include half-fold construction for material efficiency, standing base for display, and resealable zipper for product protection.",
          link: "BH-60DLLSC+CT.html",
          image: "/images/products/half-fold.jpg",
          category: "Hybrid Packaging Series",
          specs: [
            "Production Speed: 40 pouches/min",
            "Material Savings: Up to 30% compared to standard pouches",
            "Zipper Types: Press-to-close or slider options",
            "Base Construction: Gusseted for stability",
            "Optional Features: Hang hole, QR code window",
          ],
        },
      ],
    },
    {
      id: "pdtct",
      title: "Half fold fusion",
      subtitle: "Pouch made by folding a film in half and sealing it",
      color: "from-amber-500 to-yellow-500",
      items: [
        {
          id: "tnct01",
          title: "Half fold fusion type standing pouch with zipper",
          description:
            "The CT-60DLLSC model creates efficient half-fold pouches with zipper closure. Ideal for pet food, agricultural products, and granular materials where material efficiency and resealability are key requirements.",
          link: "CT-60DLLSC.html",
          image: "/images/products/half-fold-zipper.jpg",
          category: "Efficient Packaging Series",
          specs: [
            "Production Speed: 65 pouches/min",
            "Material Savings: 25-30% vs three-side seal",
            "Zipper Application Accuracy: ±0.5mm",
            "Film Width Utilization: Up to 95%",
            "Optional Features: Ventilation holes",
          ],
        },
        {
          id: "tnct02",
          title: "Large Half fold fusion type standing pouch with zipper",
          description:
            "The CT-80DLLSC handles larger capacity pouches with the material efficiency of half-fold construction. Features reinforced bottom gusset for heavy products and precision zipper application for reliable closure.",
          link: "CT-80DLLSC.html",
          image: "/images/products/large-half-fold.jpg",
          category: "Large Capacity Efficient Packaging",
          specs: [
            "Production Speed: 45 pouches/min",
            "Maximum Capacity: Up to 10kg",
            "Bottom Gusset Depth: 30-80mm",
            "Zipper Strength: Tested to 5000 open/close cycles",
            "Machine Dimensions: 2800 x 1600 x 1900mm",
          ],
        },
      ],
    },
    {
      id: "pdtfd",
      title: "Center Press-Seal",
      subtitle: "Pouch made by folding a film in half and sealing its center",
      color: "from-yellow-500 to-orange-500",
      items: [
        {
          id: "tnfd01",
          title: "Pouch made by folding a film from both sides and sealing it",
          description:
            "The FD-35V model specializes in center-seal packaging for moisture-sensitive products. Features precise center alignment and adjustable seal pressure for consistent package integrity.",
          link: "FD-35V.html",
          image: "/images/products/center-seal.jpg",
          category: "Moisture Barrier Series",
          specs: [
            "Production Speed: 120 pouches/min",
            "Seal Width: 5-10mm adjustable",
            "Material Compatibility: Multi-layer barrier films",
            "Moisture Protection: <0.1g/m²/24hr",
            "Special Features: Nitrogen flushing option",
          ],
        },
        {
          id: "tnfd02",
          title: "Pouch made by folding a film from both sides and sealing it",
          description:
            "The FD-60D model offers wider format center-seal packaging for confectionery and snack products. Features enhanced film handling for delicate materials and precision sealing for attractive packages.",
          link: "FD-60D.html",
          image: "/images/products/center-seal-candy.jpg",
          category: "Confectionery Packaging Series",
          specs: [
            "Production Speed: 100 pouches/min",
            "Pouch Width Range: 100-250mm",
            "Seal Temperature Control: 4-zone independent",
            "Optional Features: Date coding, batch numbering",
            "Power Requirements: 220V, 50/60Hz",
          ],
        },
        {
          id: "tnfd03",
          title: "Standing pouch made by folding a film from both sides",
          description:
            "The FD-35VSC combines center-seal efficiency with standing pouch convenience. Features automatic bottom forming and precision sealing for stable, attractive packages that stand upright on shelves.",
          link: "FD-35VSC.html",
          image: "/images/products/standing-center.jpg",
          category: "Center-Seal Standing Pouch Series",
          specs: [
            "Production Speed: 80 pouches/min",
            "Base Width Options: 50mm, 70mm, 90mm",
            "Material Savings: 20% vs traditional standing pouch",
            "Standing Stability: Tested to 1.5kg load",
            "Optional Features: Tear notch, hang hole",
          ],
        },
        {
          id: "tnfd04",
          title: "Large standing pouch made by folding a film from both sides",
          description:
            "The FD-60DLLSC handles large-format center-seal standing pouches for bulk products. Features reinforced bottom construction and wide sealing jaws for reliable package integrity with heavy contents.",
          link: "FD-60DLLSC.html",
          image: "/images/products/large-standing.jpg",
          category: "Bulk Packaging Series",
          specs: [
            "Production Speed: 60 pouches/min",
            "Maximum Pouch Height: 600mm",
            "Bottom Gusset Depth: 50-100mm",
            "Material Thickness: Up to 0.3mm",
            "Special Features: Automatic weight compensation",
          ],
        },
      ],
    },
    {
      id: "pdthk",
      title: "Side-Weld",
      subtitle: "Pouch made by sealing and cutting a film",
      color: "from-orange-600 to-red-500",
      items: [
        {
          id: "tnhkvk01",
          title: "Pouch made by sealing and cutting a film",
          description:
            "The HK-40V model produces simple side-weld pouches for non-food items with high efficiency. Features continuous motion operation and quick changeover for flexible production of various pouch sizes.",
          link: "HK-40V.html",
          image: "/images/products/side-weld.jpg",
          category: "Basic Packaging Series",
          specs: [
            "Production Speed: 150 pouches/min",
            "Pouch Width Range: 50-200mm",
            "Cutting System: Rotary knife with auto-sharpening",
            "Changeover Time: <5 minutes",
            "Material Compatibility: LDPE, OPP, PET",
          ],
        },
        {
          id: "tnhkvk02",
          title: "Slightly larger pouch made by sealing and cutting a film",
          description:
            "The HK-65V handles larger side-weld pouches for textiles and soft goods. Features enhanced film tension control and wider sealing jaws for consistent package quality across larger formats.",
          link: "HK-65V.html",
          image: "/images/products/large-side-weld.jpg",
          category: "Textile Packaging Series",
          specs: [
            "Production Speed: 120 pouches/min",
            "Maximum Pouch Width: 350mm",
            "Seal Strength: >3kg/inch",
            "Optional Features: Perforation, hang hole",
            "Machine Footprint: 1800 x 1000 x 1500mm",
          ],
        },
        {
          id: "tnhkvk03",
          title: "Vertically long pouch made by sealing and cutting a film",
          description:
            "The HK-90V specializes in vertically-oriented pouches for clothing and long items. Features unique film feeding system that minimizes waste when producing tall, narrow pouches.",
          link: "HK-90V.html",
          image: "/images/products/vertical-pouch.jpg",
          category: "Vertical Packaging Series",
          specs: [
            "Production Speed: 100 pouches/min",
            "Pouch Height: Up to 900mm",
            "Width Range: 100-250mm",
            "Special Features: Anti-static film handling",
            "Material Utilization: >90% efficiency",
          ],
        },
        {
          id: "tnhkvk05",
          title:
            "Trapezoidal or triangular pouch made by sealing and cutting a film",
          description:
            "The VK-65 creates unique trapezoidal and triangular pouches for specialty applications. Features programmable angle adjustment and precision cutting for consistent package shapes.",
          link: "VK-65.html",
          image: "/images/products/triangular-pouch.jpg",
          category: "Specialty Shape Series",
          specs: [
            "Production Speed: 80 pouches/min",
            "Angle Adjustment: 30°-60° programmable",
            "Cutting Accuracy: ±0.3mm",
            "Optional Features: Corner rounding",
            "Special Applications: Sandwich, produce packaging",
          ],
        },
        {
          id: "tnhkvk06",
          title: "Large triangular pouch made by sealing and cutting a film",
          description:
            "The VK-90 produces oversized triangular pouches for bulk items and specialty retail. Features heavy-duty film handling and reinforced seals for large, heavy packages.",
          link: "VK-90.html",
          image: "/images/products/large-triangular.jpg",
          category: "Large Specialty Packaging",
          specs: [
            "Production Speed: 60 pouches/min",
            "Maximum Base Width: 400mm",
            "Material Thickness: Up to 0.35mm",
            "Special Features: Double-seal option",
            "Machine Weight: 2000kg",
          ],
        },
      ],
    },
    {
      id: "pdtst",
      title: "Spout inserter",
      subtitle:
        "Galaxy's unit can insert spout automatically in making pouches for juice package and refill cleanser.",
      color: "from-red-500 to-pink-500",
      items: [
        {
          id: "tnst01",
          title: "Automatic spout insertion",
          description:
            "The ST-30 spout inserter integrates seamlessly with pouch machines to automatically apply spouts for liquid products. Features precision placement and multiple spout size options for flexible production.",
          link: "ST-30.html",
          image: "/images/products/spout-inserter.jpg",
          category: "Liquid Packaging Series",
          specs: [
            "Speed: Up to 50 spouts/min",
            "Spout Sizes: 15mm-40mm diameter",
            "Placement Accuracy: ±0.5mm",
            "Cap Options: Flip-top, screw, press-fit",
            "Material Compatibility: HDPE, PP spouts",
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
            Search by Shape of Pouch
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Select the shape of the pouch you want to make, and you can see
            detailed information about the pouch making machine you selected.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {pouchTypes.map((section) => (
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
          <div className="flex items-center backdrop-blur-sm  bg-opacity-75 justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={closeModal}
            >
              <div className="absolute  inset-0 "></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div className="inline-block  align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-700">
                      {selectedProduct.title}
                    </h3>
                    <p className="text-orange-600">
                      {selectedProduct.category}
                    </p>
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
              Ready to Transform Your Packaging?
            </h2>
            <p className="text-orange-200 mb-8 max-w-2xl mx-auto">
              Discover how Galaxy Pack Tech can revolutionize your production
              with cutting-edge pouch manufacturing solutions.
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
          <div className="mt-12 pt-8 border-t border-orange-700 flex flex-col md:flex-row justify-between items-center">
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

export default ShapeofPouch;
