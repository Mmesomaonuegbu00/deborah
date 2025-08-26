// File: app/page.tsx
'use client';

import PublicHealthServices from "@/components/Aboutprev/About";

import CTASection from "@/components/Cta/Cta";
import FeatureHighlights from "@/components/Features/Features";
import HeroSection from "@/components/Hero/Hero";
import PublicHealthMyths from "@/components/Myths";
import PublicHealthSection from "@/components/PublicHealth";
import ImpactStory from "@/components/What";


// import HeroSection from '@/components/HeroSection';
// import FeatureHighlights from '@/components/FeatureHighlights';
// import AboutPreview from '@/components/AboutPreview';
// import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <main className="min-h-screen  text-gray-700">
      <HeroSection />
        <PublicHealthSection />
       <FeatureHighlights />
     <PublicHealthMyths/>
      <PublicHealthServices/>
      <CTASection /> 
      <ImpactStory/>
      
    </main>
  );
}
