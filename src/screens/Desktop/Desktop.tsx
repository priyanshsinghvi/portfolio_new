import React from "react";
import { AboutMeSection } from "./sections/AboutMeSection";
import { FeaturedProjectsSection } from "./sections/FeaturedProjectsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { SkillsAndExpertiseSection } from "./sections/SkillsAndExpertiseSection";

export const Desktop = (): JSX.Element => {
  return (
    <main className="bg-black overflow-hidden w-full flex flex-col">
      <HeroSection />
      <AboutMeSection />
      <FeaturedProjectsSection />
      <SkillsAndExpertiseSection />
      <FooterSection />
    </main>
  );
};
