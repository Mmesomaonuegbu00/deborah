'use client';
import React from 'react';
import Image from 'next/image';
import {
  PiStethoscopeBold,
  PiSyringeBold,
  PiTreeBold,
  PiHeartbeatBold,
  PiShieldCheckBold,
  PiMegaphoneBold,
} from 'react-icons/pi';

const myths = [
  {
    icon: <PiStethoscopeBold className="text-emerald-600 text-3xl" />,
    myth: 'Public health is only about hospitals and doctors.',
    fact: 'It involves disease prevention, mental health, sanitation, education, and social equity.',
  },
  {
    icon: <PiSyringeBold className="text-emerald-600 text-3xl" />,
    myth: 'Vaccines cause the diseases they are supposed to prevent.',
    fact: 'Vaccines protect you by helping your body develop immunity without causing illness.',
  },
  {
    icon: <PiTreeBold className="text-emerald-600 text-3xl" />,
    myth: 'Environmental issues don’t affect public health.',
    fact: 'Air, water, and food safety are core to community health and survival.',
  },
  {
    icon: <PiHeartbeatBold className="text-emerald-600 text-3xl" />,
    myth: 'Public health is only relevant during a pandemic.',
    fact: 'From road safety to clean water, public health is vital daily — not just during crises.',
  },
  {
    icon: <PiShieldCheckBold className="text-emerald-600 text-3xl" />,
    myth: 'Public health has little impact on individuals.',
    fact: 'It affects everyone — clean air, vaccines, maternal care, and health education are public health wins.',
  },
  {
    icon: <PiMegaphoneBold className="text-emerald-600 text-3xl" />,
    myth: 'Health campaigns don’t really work.',
    fact: 'Campaigns on smoking, HIV, or mental health have led to major behavioral and policy changes.',
  },
];

const PublicHealthMyths = () => {
  return (
    <section className="py-20 px-2 md:px-14 border-t border-emerald-200 bg-white/5">
      <div className="xl:w-[63%] w-[93%] mx-auto space-y-12">

        {/* Header + Intro */}
        <div className="text-center">
          <h2 className="text-xl md:text-3xl font-bold text-emerald-900 mb-2">
            Myths & Facts in Public Health
          </h2>
          <p className="text-emerald-800 max-w-2xl mx-auto">
            Understanding public health starts with addressing common myths. Here are some facts that matter.
          </p>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/d7.png"
            alt="Public health illustration"
            width={1024}
            height={300}
            className="rounded-lg shadow-md object-cover w-full max-w-4xl h-[300px]"
            priority
          />
        </div>
        {/* Remove the extra closing div here */}

        <div className="space-y-6">
          {myths.map((item, index) => (
            <div key={index} className="bg-emerald-50/10 p-5 rounded-xl border-l-4 border-emerald-800">
              <div className="flex items-start gap-2 mb-2">
                {item.icon}
                <p className="text-gray-800 font-medium italic">“{item.myth}”</p>
              </div>
              <p className="ml-9 text-sm sm:text-base text-black font-medium">
                <span className="font-semibold text-emerald-700">Public Health says:</span> {item.fact}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PublicHealthMyths;
