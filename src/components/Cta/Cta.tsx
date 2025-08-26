'use client';
import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-white  py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-4xl font-bold mb-4 text-emerald-700">
          Get Involved in Public Health
        </h2>
        <p className="text-base mb-8 ">
          Join our efforts in building healthier communities. Stay informed or take direct action today.
        </p>
        <div className="flex flex-col text-sm sm:flex-row justify-center gap-4">
          {/* <button className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-full hover:bg-emerald-100 transition">
        Subscribe to Updates
      </button> */}
          <a
            href="https://wa.me/+2348167824422?text=Hi%20I%20would%20like%20to%20volunteer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-emerald-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-800 transition">
              Volunteer with me
            </button>
          </a>

        </div>
      </div>
    </section>

  );
};

export default CTASection;
