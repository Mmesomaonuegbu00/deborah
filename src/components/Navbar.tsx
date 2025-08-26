"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaMedium, FaPhone, FaTwitter } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full z-50 fixed top-0 left-0 text-sm">
      {/* Top Strip */}
      <div className="bg-emerald-800 text-emerald-100 px-4 py-1.5 lg:py-3 flex justify-end gap-4 items-center border-b border-gray-200 text-xs md:text-sm">
        <div className="flex justify-end gap-2 capitalize">
          <div className="flex flex-row items-center gap-2 lg:gap-4 text-white text-[15px]">
            <a href="tel:+234 816 782 4422" className="flex items-center gap-2 hover:text-emerald-100">
              <FaPhone className="text-emerald-100" />

            </a>

            <a
              href="https://www.linkedin.com/in/deborah-onuegbu-379452261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-100"
            >
              <FaLinkedin className="text-emerald-100" />

            </a>


            <a
              href="https://www.instagram.com/_deborah_o?igsh=bnJkNjZuc29zeDR2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-100"
            >
              <FaTwitter className="text-emerald-100" />

            </a>

            <a
              href="https://medium.com/@deborahonuegbu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-100"
            >
              <FaMedium className="text-emerald-100" />

            </a>
          </div>

        </div>
        {/* <div className="hidden md:flex gap-2 uppercase">
          <Link href="/cv" className="hover:underline">cv</Link>|
          <Link href="/speaking" className="hover:underline">speaking</Link>|
          <Link href="/testimonials" className="hover:underline">testimonials</Link>
        </div> */}
      </div>

      {/* Main Navbar */}
      <div className={`bg-white transition-all ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="w-[93%] xl:w-[63%] mx-auto flex justify-between items-center px-2 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div className="font-semibold tracking-tight text-emerald-700 leading-tight lowercase">
              <div className="text-base uppercase">deborah</div>
              <div className="text-xs -mt-1 capitalize">onuegbu</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden text-sm md:flex items-center gap-8 capitalize text-black">
            <Link href="/" className="hover:text-emerald-600">home</Link>
            <Link href="/about" className="hover:text-emerald-600">about</Link>
            <Link href="/projects" className="hover:text-emerald-600">projects & blog</Link>
            <Link href="/contact" className="hover:text-emerald-600">contact</Link>
          </nav>

          {/* CTA + Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://x.com/Deborahonuegbu?t=4srJ5Nphp6m9mSLVUcQxwQ&s=09" className="text-emerald-700 hover:text-sky-400 transition text-lg"><FaTwitter /></a>
            <a href="https://www.instagram.com/_deborah_o?igsh=bnJkNjZuc29zeDR2" className="text-emerald-700 hover:text-pink-500 transition text-lg"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/deborah-onuegbu-379452261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-emerald-700 text-lg hover:text-blue-700 transition"><FaLinkedin /></a>
            <Link href="/contact">
              <button className="bg-black text-white font-bold px-4 py-1.5 rounded hover:bg-emerald-800 transition text-sm lowercase">
                get started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black font-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col bg-white capitalize px-4 py-4 space-y-4 text-gray-800">
            <Link href="/" onClick={() => setIsOpen(false)}>home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>about</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>projects & blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>contact</Link>
            <div className="flex items-center gap-4">
              <a href="https://x.com/Deborahonuegbu?t=4srJ5Nphp6m9mSLVUcQxwQ&s=09" className="text-emerald-700 hover:text-sky-400 transition text-lg"><FaTwitter /></a>
              <a href="https://www.instagram.com/_deborah_o?igsh=bnJkNjZuc29zeDR2" className="text-emerald-700 hover:text-pink-500 transition text-lg"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/deborah-onuegbu-379452261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-emerald-700 text-lg hover:text-blue-700 transition"><FaLinkedin /></a>


            </div>
            <Link href="/contact">
              <button className="mt-4 w-full bg-black text-white font-bold py-2 rounded hover:bg-emerald-100 transition lowercase">
                get started
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}