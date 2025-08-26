'use client';
import React from 'react';
import Image from 'next/image';

const articles = [
    {
        title: 'Revolutionizing Rural Vaccination Access in Nigeria for Children',
        url: 'https://www.linkedin.com/pulse/revolutionizing-rural-vaccination-access-nigeria-deborah-wilson-o-bn2pf',
        summary: 'Exploring new approaches to delivering vaccines in remote Nigerian communities, and how innovative models can increase child immunization rates.',
        tag: 'Public Health',
    },
    {
        title: 'Non-Communicable Diseases: The Silent Killers and the Health Growing Threat in Nigeria',
        url: 'https://www.linkedin.com/pulse/non-communicable-diseases-silent-killers-health-growing-onuegbu-jsblf',
        summary: 'An urgent look at the rising tide of chronic diseases in Nigeria and strategies to tackle this public health challenge.',
        tag: 'NCDs',
    },
    {
        title: 'Environmental Health and Public Health in Low and Middle Countries',
        url: 'https://www.linkedin.com/pulse/environmental-health-public-low-middle-countries-deborah-onuegbu-oemsf',
        summary: 'How environmental factors shape health outcomes in developing countries and why public health must prioritize them.',
        tag: 'Environmental Health',
    },
    {
        title: 'Understanding the Buyer-User Gap in Digital Health',
        url: 'https://digitalhealth-africa.org/understanding-the-buyer-user-gap-in-digital-health-why-great-innovations-struggle-to-scale-in-africa/',
        summary: 'Why many promising health innovations fail to scale — and how we can close the gap between designers, funders, and users.',
        tag: 'Digital Health',
    },
    {
        title: 'Digital Health Will Fail Without the Right People to Deliver It',
        url: 'https://digitalhealth-africa.org/digital-health-will-fail-without-the-right-people-to-deliver-it/',
        summary: 'A call to action to invest in the workforce needed to make digital health solutions effective and sustainable.',
        tag: 'Health Systems',
    },
];

const ProjectsBlogsPage = () => {
    return (
        <div className="min-h-screen px-2 py-20 pt-36 bg-white text-gray-900">


            {/* 1. Intro */}
            <section className="text-center max-w-3xl mx-auto  bg-gray-700 p-2">
                <h1 className="text-xl font-bold text-white mb-4">
                    Projects & Thought Leadership
                </h1>
                <p className="text-base text-gray-100">
                    Explore insights, community projects, and public health resources I’ve contributed to—from articles and toolkits to interviews and visual storytelling.
                </p>
            </section>
            <div className="w-[93%] md:max-w-6xl mx-auto space-y-20 pt-20">
                {/* 2. Thought Leadership Quotes */}
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-emerald-700">Reflections & Opinions</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base">
                        <blockquote className="border-l-4 border-emerald-700 pl-4 italic text-gray-700">
                            “True public health impact begins with listening to the people we serve.”
                        </blockquote>
                        <blockquote className="border-l-4 border-emerald-700 pl-4 italic text-gray-700">
                            “Digital tools must enhance—not replace—community-led care.”
                        </blockquote>
                    </div>
                </section>

                {/* 3. Multimedia (Video + Infographic) */}
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-emerald-700">Multimedia Insights</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-xl shadow">
                            <h3 className="font-semibold mb-2">Interview: Digital Health in Rural Nigeria</h3>
                            <iframe
                                className="w-full aspect-video rounded-md"
                                src="https://www.youtube.com/embed/voVjU43xYNw"
                                title="Health Interview"
                                allowFullScreen
                            />
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl shadow text-center">
                            <Image
                                src="/d7.png"
                                alt="Infographic"
                                width={800}
                                height={450}
                                className="w-full rounded-lg"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* 4. Resources Hub */}
                {/* <section>
          <h2 className="text-xl font-semibold mb-4 text-emerald-700">📚 Resources Hub</h2>
          <ul className="space-y-4 list-disc pl-6 text-gray-700">
            <li>
              <a href="/toolkits/community-health-guide.pdf" className="text-emerald-700 hover:underline" download>
                Community Health Engagement Toolkit (PDF)
              </a>
            </li>
            <li>
              <a href="https://example.com/webinar" className="text-emerald-700 hover:underline" target="_blank">
                Webinar: Youth-Led Health Interventions
              </a>
            </li>
            <li>
              <a href="/summaries/ncd-article-summary.pdf" className="text-emerald-700 hover:underline" download>
                Summary: Non-Communicable Diseases Article
              </a>
            </li>
          </ul>
        </section> */}

                {/* 5. Articles Section */}
                <section className="py-12">
                    <h2 className="text-xl font-semibold mb-6 text-emerald-700 text-center">Published Work</h2>

                    <div className="space-y-12">
                        {articles.map((article, index) => (
                            <div key={index} className="border-b border-gray-200 pb-8">
                                <p className="text-sm text-emerald-600 font-medium mb-1">{article.tag}</p>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base text-gray-900 font-bold hover:text-emerald-700 transition-colors duration-150"
                                >
                                    {article.title}
                                </a>
                                <p className="text-gray-700 mt-2">{article.summary}</p>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-emerald-700 font-medium mt-2 inline-block hover:underline"
                                >
                                    Read full article →
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
                {/* 6. Project Highlights */}
                {/* <section>
          <h2 className="text-xl font-semibold mb-4 text-emerald-700">📸 Field Highlights</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <img src="/gallery/health-outreach1.jpg" alt="Project" className="rounded-lg shadow" />
            <img src="/gallery/health-outreach2.jpg" alt="Workshop" className="rounded-lg shadow" />
            <img src="/gallery/impact-metric.png" alt="Stats" className="rounded-lg shadow" />
          </div>
          <p className="mt-4 text-sm text-gray-600">e.g., “Achieved 80% vaccine coverage in Region X”</p>
        </section> */}

                {/* 7. Collaborations */}
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-emerald-700">Collaborations</h2>
                    <p className="text-gray-700 mb-4">
                        I&apos;ve had the privilege of contributing to public health projects with local NGOs, community leaders, and academic researchers. If you&#39;re building something that aligns, let&lsquo;s talk.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition"
                    >
                        Partner with Me
                    </a>
                </section>
            </div>
        </div>
    );
};

export default ProjectsBlogsPage;
