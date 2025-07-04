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
function Home() {
  return (
    <div>
      <div className="relative w-full h-[85vh] aspect-video overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          src="/video/galaxypack.mp4"
        />
      </div>
      <AboutSection />
      <Product />
      <GalaxyTechProcess />
      <GalaxyPackTechMachines />
      <MachineGallery />
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
