
 "use client";

import { AboutSection } from "./components/AboutSection";
import { AboutHero } from "./components/AboutHero";
import { AboutServices } from "./components/AboutServices";
import OurStory from "./components/OurStory";




export default function AboutPage() {
  return (
    <div className="relative">
      <AboutHero />
      <AboutSection />
      <AboutServices />
      <OurStory/>
    </div>
  );
}






 
