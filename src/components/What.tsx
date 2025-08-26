import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ImpactStory = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <FaQuoteLeft className="text-3xl text-blue-500 mx-auto mb-4" />
        <p className="text-base md:text-xl text-gray-800 italic leading-relaxed mb-6">
          “After joining a clean water initiative, Amina’s community saw a 70% drop in disease outbreaks.
          Access to clean water didn’t just save lives — it restored dignity, education, and hope.”
        </p>
        <h4 className="text-lg font-semibold text-gray-700">Community Health Impact</h4>
        <p className="text-sm text-gray-500">Northern Nigeria · 2024</p>
      </div>
    </section>
  );
};

export default ImpactStory;
