/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Link from 'next/link';
import { FaPenNib, FaBullhorn, FaHeartbeat, FaLaptopCode, FaChalkboardTeacher, FaUserMd } from 'react-icons/fa';
import { FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';


const services = [
  {
    icon: <FaPenNib className="text-emerald-700 text-4xl mb-4" />,
    title: "Public Health Writing",
    description: "Crafting policy briefs, research summaries, and advocacy pieces that inform, engage, and inspire action.",
  },
  {
    icon: <FaBullhorn className="text-emerald-700 text-4xl mb-4" />,
    title: "Content Writing for Brands",
    description: "Voice-driven storytelling for lifestyle, wellness, and mission-led brands — from landing pages to newsletters.",
  },
  {
    icon: <FaHeartbeat className="text-emerald-700 text-4xl mb-4" />,
    title: "Digital Health Strategy",
    description: "Content architecture, UX writing, and digital engagement for health platforms serving diverse communities.",
  },
  {
    icon: <FaLaptopCode className="text-emerald-700 text-4xl mb-4" />,
    title: "Digital Marketing",
    description: "Building awareness and audience growth through email, social media strategy, and health storytelling campaigns.",
  },
  {
    icon: <FaUserMd className="text-emerald-700 text-4xl mb-4" />,
    title: "Health Program Consulting",
    description: "Advising organizations on behavior-change communication, youth wellness, and human-centered health design.",
  },
  {
    icon: <FaChalkboardTeacher className="text-emerald-700 text-4xl mb-4" />,
    title: "Speaking & Workshops",
    description: "Hosting sessions on content strategy, storytelling for impact, and digital wellness — online and in-person.",
  },
];

const Hero = () => {
  return (
    <section
      className="relative h-[350px] md:h-[450px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/d5.jpg')", // ✅ Replace with your actual image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 px-4 pt-20">
        <h1 className="text-xl md:text-4xl font-bold text-white mb-4">
          About Deborah Onuegbu
        </h1>
        <p className="text-base text-white max-w-2xl mx-auto leading-relaxed">
          Strategist. Storyteller. Systems thinker. Get to know the mission behind the work and the passion driving it forward.
        </p>

        <div className="w-16 h-1 bg-emerald-500 mt-6 mx-auto rounded-full" />
      </div>
    </section>
  );
};



const AboutHero = () => {
  return (
    <section className="relative py-18 md:py-28 px-2 bg-white overflow-hidden font-lato">
      {/* Decorative Blob */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-emerald-800/10 rounded-full mix-blend-multiply blur-2xl opacity-20 animate-pulse z-0"></div>

      <div className="w-[93%] xl:w-[60%] mx-auto grid md:grid-cols-2 gap-6 items-center relative z-10">
        {/* TEXT SECTION */}
        <div className="relative space-y-4">
          <h2 className="text-sm uppercase tracking-wider text-emerald-700 font-semibold">
            Public Health Strategist & Writer
          </h2>

          <h1 className=" md:text-4xl text-xl font-bold leading-tight text-gray-900">
            Hi, I&lsquo;m <span className="">Deborah Onuegbu</span>
          </h1>

          <p className="text-[16px] text-gray-700 leading-relaxed max-w-xl">
            I use research, storytelling, and digital tools to drive equity in public health. From youth wellness programs to global health policy, I craft systems that center people—and measurable impact.
          </p>

          <p className="text-[17px] text-gray-700 leading-relaxed max-w-xl">
            As a public health writer, I turn complex data into accessible stories that spark dialogue and drive change. Whether it&apos;s a policy brief, op-ed, or thought leadership content, I blend accuracy with empathy to reach diverse audiences.
          </p>

          {/* Expertise Highlight Strip */}
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full">Health Equity</span>
            <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full">Youth Wellness</span>
            <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full">Digital Health</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <a href="mailto:deborah@example.com" className="text-gray-600 hover:text-emerald-700 transition">
              <FaEnvelope size={20} />
            </a>
            <a href="https://linkedin.com/in/deborahonuegbu" target="_blank" className="text-gray-600 hover:text-emerald-700 transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com/deborah_onu" target="_blank" className="text-gray-600 hover:text-emerald-700 transition">
              <FaTwitter size={20} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex gap-4">
            <a
              href="/Deborah_Onuegbu_CV.pdf"
              download
              className="bg-black text-white text-nowrap px-3 lg:px-6 py-2 text-sm rounded-2xl shadow-md hover:bg-emerald-800 transition"
            >
              Download CV
            </a>
            <a
              href="/about"
              className="bg-white border border-emerald-700 text-nowrap text-emerald-700 px-3 lg:px-6 py-2 text-sm rounded-2xl hover:bg-emerald-50 transition"
            >
              See My works
            </a>
          </div>

          {/* Impact Stats */}
          <div className="flex gap-6 pt-4 text-gray-800 text-sm">
            <div>
              <p className="text-xl font-bold text-emerald-700">15+</p>
              <p>Projects</p>
            </div>
            <div>
              <p className="text-xl font-bold text-emerald-700">1K+</p>
              <p>Followers</p>
            </div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative w-full max-w-md mx-auto px-1">
          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-100 transform hover:scale-105 transition duration-500">
            <img
              src="/dp.png"
              alt="Deborah Onuegbu"
              className="w-full h-[420px] lg:h-[480px] object-cover"
            />
          </div>

          {/* Quote Box */}
          <div className="absolute bottom-[-40px] left-0 bg-white border-l-4 border-emerald-600 shadow-xl rounded-xl p-4 w-[90%] text-sm text-gray-600">
            <p className="italic">
              “I believe that public health is most powerful when it&lsquo;s personal, community-driven, and rooted in care.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


const StorySection = () => {
  return (
    <section className="bg-white relative py-8 md:py-24 px-2">
      {/* Optional subtle background shape */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(16,185,129,0.05),_transparent)] z-0" /> */}

      <div className="xl:w-[63%] w-[93%] mx-auto relative z-10">
        <h2 className="md:text-3xl text-xl font-bold text-gray-900 mb-8">My Journey</h2>

        <div className="space-y-6 text-base leading-8 text-gray-700">
          <p>
            I’m a <span className="font-semibold text-gray-900">public health strategist</span> driven by a commitment to health equity, youth wellness, and digital innovation across Africa. My journey has spanned grassroots campaigns, policy work, and creative storytelling — always with impact at the center.
          </p>

          <p>
            With a background in Public Health and years of experience in <span className="text-emerald-700 font-medium">digital health communications</span>, I’ve collaborated with nonprofits, startups, and academic groups to build health systems that are accessible, inclusive, and youth-centered.
          </p>

          <p>
            Whether it’s writing a policy brief, curating a national awareness campaign, or launching community-based initiatives, I bring together <span className="italic text-gray-800">data, empathy, and storytelling</span> to shape health narratives that matter.
          </p>
        </div>

        {/* Optional pull quote */}
        <blockquote className="mt-10 text-xl font-medium italic text-emerald-800 border-l-4 border-emerald-600 pl-4">
          “Public health is about people, stories, and systems — I work where they intersect.”
        </blockquote>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-[#0f0e17] py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <p className="text-lg text-emerald-700 mt-4 font-semibold max-w-2xl mx-auto">
            Strategic storytelling and health communication for people-first and communities.
          </p>
          <h2 className="text-xl md:text-3xl font-bold text-gray-100">What I Offer</h2>
         
        </div>

        <div className="grid grid-cols-6 gap-4 mx-auto auto-rows-fr ">
          {services.map((service, index) => {
            let colSpan = "";

            if (index < 2) {
              // First row: 2 cards
              colSpan = "col-span-6 md:col-span-3";
            } else if (index < 5) {
              // Second row: 3 cards
              colSpan = "col-span-6 md:col-span-2";
            } else {
              // Third row: 1 card full width
              colSpan = "col-span-6";
            }

            return (
              <div
                key={index}
                className={`bg-white/[0.01] border-white/20 border-4 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-2 justify-between ${colSpan}`}
              >
                <div className="text-xl ">{service.icon}</div>
                <h3 className="text-[16px] md:text-[17px] font-semibold text-gray-100 text-center flex uppercase items-center">
                  {service.title}
                </h3>

                <p className="text-[15px] md:text-[16px] text-gray-200 whitespace-pre-line">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

const ProfessionalExperience = () => {
  return (
    <section className="bg-[#0f0e17] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-lg font-semibold text-emerald-700">Roles and Projects I&apos;ve Worked On</p>
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        

        {/* NYSC */}
        <div className="md:flex justify-between gap-10 mb-10 border-b border-gray-700 pb-6">
          <div className="md:w-1/3">
            <h3 className="font-semibold text-white">National Youth Service Corps (NYSC)</h3>
            <p className="text-sm text-emerald-400">Delta State Ministry of Health, Asaba</p>
            <p className="text-sm text-gray-400">Nov 2022 – Oct 2023</p>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0 text-gray-300">
            <p>Served as a corps member within the administrative unit of the Ministry of Health, providing critical support to secretariat operations and contributing to the smooth functioning of public health programs.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Gained firsthand experience in public health administration, including report preparation, file management, and internal communications</li>
              <li>Developed strong communication and teamwork skills while collaborating with senior health officers</li>
              <li>Built a solid foundation in the workings of public sector healthcare systems</li>
            </ul>
          </div>
        </div>

        {/* Maternal Health Advocacy */}
        <div className="md:flex justify-between gap-10 mb-10 border-b border-gray-700 pb-6">
          <div className="md:w-1/3">
            <h3 className="font-semibold text-white">Maternal Health Advocacy Program</h3>
            <p className="text-sm text-emerald-400">Public Health Place (NGO)</p>
            <p className="text-sm text-gray-400">Mar 2025 – Apr 2025</p>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0 text-gray-300">
            <p>Actively engaged in a grassroots advocacy initiative designed to improve access to quality maternal healthcare services in Nigeria.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Recognized as Volunteer of the Month (March) for exceptional dedication, responsiveness, and teamwork</li>
              <li>Contributed to awareness campaigns that reached over 500 women through online and offline platforms</li>
              <li>Gained insight into health policy challenges affecting maternal health outcomes and community-based strategies to address them</li>
            </ul>
          </div>
        </div>

        {/* SRHR Advocacy */}
        <div className="md:flex justify-between gap-10 mb-10 border-b border-gray-700 pb-6">
          <div className="md:w-1/3">
            <h3 className="font-semibold text-white">Sexual and Reproductive Health Advocacy Program</h3>
            <p className="text-sm text-emerald-400">Choosing Inspira Foundation</p>
            <p className="text-sm text-gray-400">Feb 2025 – Jun 2025</p>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0 text-gray-300">
            <p>Completed an advocacy training focused on sexual and reproductive health rights (SRHR), equipping young public health professionals with the skills to engage communities and influence change.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Earned a certificate of completion following intensive training sessions and peer-led advocacy activities</li>
              <li>Improved my ability to communicate SRHR issues with cultural sensitivity and evidence-based information</li>
              <li>Participated in campaigns that fostered open dialogue on reproductive rights among youth</li>
            </ul>
          </div>
        </div>

        {/* Public Health Internship */}
        <div className="md:flex justify-between gap-10 mb-10 border-b border-gray-700 pb-6">
          <div className="md:w-1/3">
            <h3 className="font-semibold text-white">Public Health Internship</h3>
            <p className="text-sm text-emerald-400">West African Institute of Public Health</p>
            <p className="text-sm text-gray-400">Mar 2025 – Jul 2025</p>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0 text-gray-300">
            <p>Interned with a leading regional public health body, contributing to research, advocacy, and professional development initiatives targeted at strengthening public health systems across West Africa.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Led a virtual team presentation on Public Health Ethics during a Zoom webinar, showcasing public speaking and leadership skills</li>
              <li>Supported project implementation and resource development for community health initiatives</li>
              <li>Expanded technical knowledge in disease prevention, health policy, and ethics through hands-on experience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


const FeaturedWorkSection = () => {
  const works = [
    {
      title: "School Health Manual (Delta State)",
      description:
        "Co-designed a practical manual to guide health education and screening practices for secondary schools.",
    },
    {
      title: "Digital Health Africa Articles",
      description:
        "Published articles highlighting digital health trends, gaps, and equity issues across African health systems.",
    },
    {
      title: "Youth Wellness Campaign",
      description:
        "Designed and ran a multi-platform health awareness campaign for adolescents on stress, diet, and relationships.",
    },
    {
      title: "Health Policy Writing (Freelance)",
      description:
        "Collaborated on health policy reports, briefs, and opinion pieces for NGOs and think tanks.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl font-semibold text-center text-gray-900 mb-12">
          Selected Work & Projects
        </h2>
        <div className="grid grid-cols-6 gap-6 auto-rows-fr">
          {works.map((item, index) => (
            <div
              key={index}
              className={`col-span-6 md:col-span-3 lg:col-span-3 bg-white/60 border-2 border-white/70 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between`}
            >
              <h4 className="text-lg font-bold mb-3 text-gray-900">
                {item.title}
              </h4>
              <p className="text-base text-gray-800">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const ContactCTA = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Let’s Collaborate</h2>
        <p className="mb-6 text-base">
          Have a project in mind, need a writer, or want to co-create something impactful?
          Reach out and let’s build together.
        </p>
        <Link
          href="/contact"
          className="inline-block text-white bg-emerald-700 font-semibold px-6 py-2 text-sm rounded-full hover:bg-gray-200"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <main className="text-base">
      <Hero />
      <AboutHero />
      <StorySection />
      <ServicesSection />
      <ProfessionalExperience/>
      <FeaturedWorkSection />
      <ContactCTA />
    </main>
  );
};

export default AboutPage;
