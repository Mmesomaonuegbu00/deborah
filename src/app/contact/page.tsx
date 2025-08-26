"use client";

import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const sendForm = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!form.current) return;

  try {
    const formData = new FormData(form.current);
    const body = Object.fromEntries(formData.entries()); // convert FormData → JSON

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setSent(true);
      form.current.reset();
    } else {
      alert("Something went wrong.");
    }
  } catch (err) {
    console.error("Failed to send form:", err);
    alert("Something went wrong.");
  }
};


  return (
    <main className="bg-white text-gray-800 min-h-screen pt-20">
      {/* Hero */}
      <section
        className="relative h-[250px] md:h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/d8.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 px-4 pt-10">
          <h1 className="text-xl md:text-4xl font-bold text-white mb-4">
            Contact Me
          </h1>
          <p className="text-base text-white max-w-2xl mx-auto leading-relaxed">
            We’re here to support your health needs and community outreach.
          </p>
          <div className="w-16 h-1 bg-emerald-500 mt-6 mx-auto rounded-full" />
        </div>
      </section>

      {/* Main Section */}
      <section className="w-[93%] md:max-w-7xl mx-auto px-2 py-20 grid md:grid-cols-2 gap-12">
        {/* Left: Form */}
        <div className="bg-gray-100 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Get In Touch
          </h2>
          <form ref={form} onSubmit={sendForm} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
            <button
              type="submit"
              className="bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition"
            >
              Send Now
            </button>
            {sent && (
              <p className="text-green-600 mt-3">✅ Message sent successfully!</p>
            )}
          </form>
        </div>

        {/* Right: Info */}
        <div className="space-y-10">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Contact us anytime. Our team will respond as soon as possible.
              We also offer WhatsApp support and walk-in visits.
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaPhone className="text-emerald-600" />
                <span>tel:+234 816 782 4422</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-emerald-600" />
                <span>deborahchinecherem66@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-emerald-600" />
                <span>Irri, Delta State, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995.8883032826594!2d6.118862399999999!3d5.437194900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1059b48e2d1ae307%3A0xf52f3b957f2210d2!2sIrri%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1689966066345!5m2!1sen!2sng"
              width="100%"
              height="240"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Social */}
          <div className="flex gap-6 text-2xl text-gray-500">
            <a
              href="https://twitter.com"
              className="hover:text-emerald-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-emerald-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-emerald-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
