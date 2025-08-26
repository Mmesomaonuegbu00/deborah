'use client';
import React from 'react';
import FeatureCard from './FeaturesCard';
import { HeartPulse, Leaf, MessageCircle, MonitorSmartphone } from 'lucide-react';
import Image from 'next/image';


const features = [
  {
    title: 'Youth Health Advocacy',
    description: 'Empowering young people through school-based health programs and campaigns.',
    icon: HeartPulse,
  },
  {
    title: 'Health Communication',
    description: 'Creating accessible health content that informs and engages communities.',
    icon: MessageCircle,
  },
  {
    title: 'Digital Health Research',
    description: 'Exploring how technology can improve health access across African regions.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Environmental Health',
    description: 'Promoting sustainable practices for healthier communities and ecosystems.',
    icon: Leaf,
  },
];

const FeatureHighlights = () => {
  return (
    <div className='bg-white/60'>
      
     <section className="py-20 px-2 border-t border-t-emerald-700/10 w-[93%] xl:w-[75%] mx-auto">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-xl md:text-3xl font-semibold">What I Focus On</h2>
        <p className="mt-3 text-gray-600">
          Key areas that drive my work in public health, communication, and sustainable development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center ">
        <div className='flex flex-col gap-6'>
          <FeatureCard {...features[1]} />
          <FeatureCard {...features[0]} />
        </div>
        
        
        <div className="flex justify-center">
          <Image
            src="/d4.jpg" // Replace with your real image path
            alt="Deborah Onuegbu"
            width={500}
            height={500}
            className="rounded-lg w-[450px] h-[430px] shadow-lg object-cover"
          />
        </div>

        <div className='flex flex-col gap-6'>
           <FeatureCard {...features[2]} />
            <FeatureCard {...features[3]} />
        </div>
       
        <div />
      
      </div>
    </section>
    </div>
  );
};

export default FeatureHighlights;
