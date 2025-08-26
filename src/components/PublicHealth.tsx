'use client';
import React from 'react';

const PublicHealthSection = () => {
  return (
   <section className="px-2 py-20 bg-white border-t border-gray-200">
  <div className="w-[93%] xl:w-[63%] mx-auto space-y-16">

    {/* Heading */}
    <div className="">
      <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
        Understanding Public Health
      </h2>
      <p className="text-gray-600 text-base md:text-xl max-w-3xl leading-relaxed">
        Public health is about more than medicine it’s about building healthier communities from the ground up. From clean water to mental wellness, it protects people where they live, work, and grow.
      </p>
    </div>

    {/* Why Public Health Matters */}
    <div className="bg-gray-50 p-3 lg:p-8 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
        Why Public Health Matters
      </h3>
      <ul className="list-disc list-inside space-y-3 text-gray-700 text-base md:text-base">
        <li>Stopping the spread of disease through early detection and community awareness.</li>
        <li>Making nutritious food and clean water accessible for all.</li>
        <li>Promoting physical and mental health through education and outreach.</li>
        <li>Shaping environments where safety and well-being come first — at home, work, and school.</li>
        <li>Helping communities prepare for and recover from public health emergencies.</li>
        <li>Reducing health risks caused by pollution, housing, and social inequalities.</li>
      </ul>
    </div>

    {/* Public Health Professionals */}
    <div className="bg-white p-3 lg:p-8 rounded-lg shadow-xs">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
        Who Makes Public Health Happen?
      </h3>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Public health relies on a wide range of professionals who bring science, strategy, and care into communities. Here are just a few roles making an impact every day:
      </p>
      <div className="grid md:grid-cols-2 gap-6 text-gray-700">
        <ul className="space-y-2 list-disc list-inside">
          <li>Community health advocates</li>
          <li>Public health nurses</li>
          <li>Epidemiologists</li>
          <li>Environmental health officers</li>
          <li>Mental health campaigners</li>
        </ul>
        <ul className="space-y-2 list-disc list-inside">
          <li>Health policy strategists</li>
          <li>Nutrition and wellness specialists</li>
          <li>Outreach educators</li>
          <li>Sanitation and safety engineers</li>
          <li>Emergency preparedness planners</li>
        </ul>
      </div>
    </div>

  </div>
</section>
  );
};

export default PublicHealthSection;
