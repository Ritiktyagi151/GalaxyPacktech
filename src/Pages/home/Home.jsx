import React from "react";
import ExhibitionsSection from "./ExhibitionsSection";
import { div } from "framer-motion/client";
import Product from "./Product-homepage";
import GlobalPresence from "./GlobalPresence";
import AdvantagesSection from "./AdvantagesSection";
import TestimonialsSection from "./TestimonialsSection";
import GalaxyPackTechMachines from "./GalaxyPackTechMachines";
import AboutSection from "./AboutSection";
import GalaxyVideoSection from "./GalaxyVideoSection";
import GalaxyTechProcess from "./GalaxyTechProcess";
import GalaxyPackTechFAQ from "./GalaxyPackTechFAQ";
import GalaxyPackTechCertifications from "./CertificationsAwards";
import PremiumBlogSlider from "./BlogSlider";
import WhyChooseUs from "./WhyChooseUs";
import ValuedClients from "./ValuedClients";
import TeamSection from "./TeamSection";
import MachineGallery from "./GallerySection";
import ImageSlider from "../../components/ImagesHomepageSlider";
function Home() {
  return (
    <div>
      {/* <div className="relative w-full h-[85vh] overflow-hidden">
        <img
          className="object-fill transition-transform duration-500 ease-in-out"
          src="images/banners/GS-24-PLUS-200.jpg"
          alt=""
        />
      </div> */}
      <div className="relative w-full h-[70vh] aspect-video overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          src="/video/HomePageVideo.mp4"
        />
      </div>
      {/* <ImageSlider /> */}
      <AboutSection />
      <GalaxyTechProcess />
      {/* <Product /> */}
      <GalaxyPackTechMachines />
      {/* <MachineGallery /> */}
      <GalaxyVideoSection />
      <WhyChooseUs />
      <PremiumBlogSlider />
      <GalaxyPackTechCertifications />
      <TestimonialsSection />
      <AdvantagesSection />
      <GalaxyPackTechFAQ />
      {/* <GlobalWorldMapSection /> */}
      <GlobalPresence />
      <ExhibitionsSection />
      <TeamSection />
      <ValuedClients />
    </div>
  );
}
export default Home;
