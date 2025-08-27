import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white px-6 py-12 mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white tracking-wider">DEBORAH.O</h4>
          <p className="text-sm text-emerald-100 leading-relaxed">
            Inspiring communities through health awareness,<br />
            digital innovation, and grassroots engagement.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Explore</h4>
          <ul className="space-y-2 grid text-sm text-emerald-100">
            <Link href="/" className="hover:text-emerald-600">home</Link>
            <Link href="/about" className="hover:text-emerald-600">about</Link>
            <Link href="/projects" className="hover:text-emerald-600">projects & blog</Link>
            <Link href="/contact" className="hover:text-emerald-600">contact</Link>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Stay Connected</h4>
          <div className="flex justify-center md:justify-start gap-5 text-xl">
            <a href="https://x.com/Deborahonuegbu?t=4srJ5Nphp6m9mSLVUcQxwQ&s=09" className="text-emerald-100 hover:text-sky-400 transition"><FaTwitter /></a>
            <a href="https://www.instagram.com/_deborah_o?igsh=bnJkNjZuc29zeDR2" className="text-emerald-100 hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/deborah-onuegbu-379452261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-emerald-100 hover:text-blue-700 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm mt-12 text-emerald-400 border-t pt-6 border-emerald-800">
        © {new Date().getFullYear()} DEBORAH.O. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer