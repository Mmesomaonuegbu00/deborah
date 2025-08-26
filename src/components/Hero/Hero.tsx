'use client';
import Image from 'next/image';
import React from 'react';
import {FaPenNib, FaBullhorn, FaGlobeAfrica } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative px-3 py-20 pt-36 md:pt-46 text-center bg-gradient-to-br from-white to-white/30">
      <div className="absolute left-1/5 top-40 transform -translate-x-1/2 bg-emerald-900/20 text-emerald-900/20 p-2 rounded-full shadow-md">
        <FaPenNib className="text-xl" />
      </div>

      <div className="absolute bottom-[60%] bg-emerald-900/20 text-white/50 p-2 rounded-full shadow-md">
        <FaBullhorn className="text-xl" />
      </div>

      <div className="absolute right-[10%] bottom-[70%] bg-emerald-900/20 text-emerald-900/30 p-2 rounded-full shadow-md">
        <FaGlobeAfrica className="text-xl" />
      </div>

      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-xl mx-auto text-black">
         Shaping Public Health Through <span className="text-emerald-700">Stories and Strategy</span>

      </h1>

      <p className="mt-4 text-base text-gray-700 md:max-w-2xl mx-auto font-medium">
        I’m <span className='font-bold uppercase'>Deborah Onuegbu </span> a public health practitioner and content writer working at the intersection of
        youth wellness, digital health, and equitable care across Nigeria and beyond.
      </p>

      <div className="w-[93%] md:w-[63%] mx-auto mt-10 flex justify-center gap-4 items-center overflow-hidden">
        {/* Mobile Card */}
        <div className="block sm:hidden relative w-[250px] h-[280px] rounded-xl overflow-hidden shadow-lg shrink-0">
          <Image
            src="/ha.jpg"
            alt="Deborah Onuegbu writing about public health"
            fill
            sizes="(max-width: 768px) 100vw, 250px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-end justify-center">
            <div className="bg-emerald-600/50 rounded-3xl p-4 -mt-4 text-white">
              <p className="font-bold">Words that move wellness forward.</p>
              <p className="pt-2 text-xs lg:text-base">I write to make public health accessible and actionable.</p>
            </div>
          </div>
        </div>

        {/* Desktop Cards */}
        <div className="hidden sm:flex justify-center gap-4 items-center w-full">
          <div className="bg-emerald-900/10 rounded-3xl p-4 w-[180px] h-[150px] flex items-center justify-center text-sm text-emerald-700 shadow shrink-0">
            <p className="text-center font-medium">Your health is your power.</p>
          </div>

          <div className="w-[180px] lg:w-[240px] flex flex-col max-h-[300px] shrink-0">
            <div className="bg-emerald-900/10 rounded-3xl p-4">
              <p className="font-bold">Health equity begins with a voice.</p>
              <p className="pt-2 text-sm lg:text-base">Every health story is a human story worth telling.</p>
            </div>
            <div className="bg-emerald-900/50 rounded-3xl p-4 -mt-4 text-white">
              <p className="font-bold">Words that move wellness forward.</p>
              <p className="pt-2 text-xs lg:text-base">I write to make public health accessible and actionable.</p>
            </div>
          </div>

          <div className="relative w-[200px] lg:w-[250px] h-[300px] lg:h-[350px] rounded-xl overflow-hidden shadow-lg shrink-0">
            <Image
              src="/ha.jpg"
              alt="Digital health awareness"
              fill
              sizes="(max-width: 1024px) 100vw, 250px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30 flex items-end justify-center">
              <p className="text-white text-sm p-2">Digital Health</p>
            </div>
          </div>

          <div className="relative w-[200px] h-[250px] rounded-xl overflow-hidden shadow-md shrink-0">
            <Image
              src="/d.png"
              alt="Health Equity focus"
              fill
              sizes="(max-width: 1024px) 100vw, 200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end justify-center">
              <p className="text-white text-sm p-2">Equity First</p>
            </div>
          </div>

          <div className="relative w-[180px] h-[150px] rounded-xl overflow-hidden shadow shrink-0">
            <Image
              src="/d2.jpg"
              alt="Community care matters"
              fill
              sizes="(max-width: 1024px) 100vw, 180px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-xs px-2 text-center">Care is community.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-2 text-sm w-[93%] md:w-[63%] mx-auto">
        <a href="/about" className="px-6 py-2 bg-black text-white rounded-full hover:bg-emerald-700 text-nowrap">
          Learn More About Me
        </a>
        <a href="/contact" className="px-6 py-2 border border-black text-black rounded-full hover:bg-emerald-50">
          Collaborate
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
