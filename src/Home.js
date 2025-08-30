import React from 'react';
import AboutSection from './AboutSection';
import CompanyIntro from './CompanyIntro';
import MissionSection from './MissionSection';
import JourneySection from './JourneySection';
import PartnersSection from './PartnersSection';
import PressNewsSection from './PressNewsSection';

export default function Home() {
  return (
    <>
      <AboutSection />
      <CompanyIntro />
      <MissionSection />
      <JourneySection />
      <PartnersSection />
      <PressNewsSection />
    </>
  );
}
