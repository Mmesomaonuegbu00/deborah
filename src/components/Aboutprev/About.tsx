'use client';
import React from 'react';
import {
  FaHandsWash,
  FaHeartbeat,
  FaUserNurse,
  FaSyringe,
  FaBrain,
  FaWater,
} from 'react-icons/fa';

const publicHealthServices = [
  {
    title: 'Health Education',
    description:
      'Community programs that teach people how to stay healthy and prevent disease.',
    icon: <FaUserNurse />,
  },
  {
    title: 'Disease Prevention',
    description:
      'Vaccinations, screenings, and health checks to stop the spread of illness early.',
    icon: <FaSyringe />,
  },
  {
    title: 'Mental Health Support',
    description:
      'Counseling and support to help individuals cope with stress, anxiety, and depression.',
    icon: <FaBrain />,
  },
  {
    title: 'Sanitation & Hygiene',
    description:
      'Access to clean water, toilets, and handwashing education for healthier communities.',
    icon: <FaHandsWash />,
  },
  {
    title: 'Maternal & Child Health',
    description:
      'Care during pregnancy, birth, and early childhood to ensure healthy mothers and babies.',
    icon: <FaHeartbeat />,
  },
  {
    title: 'Environmental Health',
    description:
      'Protecting air, water, and food quality to create a safe and healthy environment.',
    icon: <FaWater />,
  },
];

const PublicHealthGlassCards = () => {
  return (
    <section className="py-20 px-2 md:px-12 bg-gradient-to-tr from-emerald-700/10 to-white/10 backdrop-blur-md border-t border-emerald-200">
      <div className="w-[93%] xl:w-[63%] mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold text-emerald-800 mb-4">
          Public Health Focus Areas
        </h2>
        <p className="text-base text-gray-600 mb-12 max-w-3xl mx-auto">
          These services help protect and improve the health of communities every day.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {publicHealthServices.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="max-w-xs text-left">
                <h3 className="text-base font-bold text-emerald-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-900 text-sm">{item.description}</p>
                <p className="mt-2 text-sm font-semibold text-emerald-600 cursor-pointer hover:underline">
                  More details
                </p>
              </div>
              <div className="text-5xl text-emerald-700/30 opacity-80">{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicHealthGlassCards;
