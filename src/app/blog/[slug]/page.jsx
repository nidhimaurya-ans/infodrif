"use client";




import React, { useState } from 'react';

// Mock Data
const blogData = {
  category: 'Blog',
  title: "What's new for serverless LLM usage in 2025?",
  subtitle:
    'Out of all of the use cases that our serverless architecture has, dependent on the human using it to process, digest, and type a response',
  author: {
    name: 'Emmett Fear',
    avatar: 'https://i.pravatar.cc/40?img=11',
  },
  date: 'January 28, 2025',
  heroImage:
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  tableOfContents: [
    'Newly Released Features',
    'Increased 80GB GPUs per Worker',
    'Serverless SGLang Quick',
    'Improved Model Selection Screen',
  ],
  content: [
    {
      type: 'paragraph',
      text: 'Out of all of the use cases that our serverless architecture has, LLMs are one of the best examples of it. Because so much of LLM use is dependent on the human using it to process, digest, and type a response, you save so much on GPU spend by ensuring that you only pay for the inference time rather than an entire pod – why continue to spend for GPU time when it\'s just going to sit idle? Not only that, but serverless allows you to scale seamlessly up to spikes in demand with a minimum of fuss. We are leaning hard into serverless and want to share what we\'ve created with you.',
    },
    {
      type: 'heading',
      text: 'Newly Released Features',
    },
    {
      type: 'paragraph',
      text: 'We have been working tirelessly to bring you the best serverless experience possible. Our team has focused on performance improvements, new GPU options, and a completely redesigned model selection interface that makes it easier than ever to deploy your models.',
    },
    {
      type: 'heading',
      text: 'Increased 80GB GPUs per Worker',
    },
    {
      type: 'paragraph',
      text: 'One of the most requested features has been the ability to use larger GPU configurations for more demanding models. We\'re excited to announce that you can now allocate up to 80GB GPUs per worker, enabling you to run even the largest language models with ease. This is particularly useful for models like LLaMA 70B and other large-scale architectures.',
    },
    {
      type: 'heading',
      text: 'Serverless SGLang Quick',
    },
    {
      type: 'paragraph',
      text: 'SGLang Quick is our new rapid deployment feature that allows you to spin up serverless endpoints in seconds rather than minutes. By pre-warming containers and optimizing our scheduling algorithm, we\'ve reduced cold start times by up to 90%. This means your users get faster responses and you spend less on idle compute.',
    },
    {
      type: 'heading',
      text: 'Improved Model Selection Screen',
    },
    {
      type: 'paragraph',
      text: 'Our new model selection screen provides a streamlined interface for browsing, filtering, and deploying models. You can now see real-time pricing estimates, performance benchmarks, and compatibility information all in one place. We\'ve also added support for custom model uploads with automatic optimization suggestions.',
    },
  ],
};

const navItems = [
  { label: 'Product', hasDropdown: true },
  { label: 'Use Cases', hasDropdown: true },
  { label: 'Pricing', hasDropdown: false },
  { label: 'Resources', hasDropdown: true },
  { label: 'Company', hasDropdown: true },
];

// Chevron Down Icon
const ChevronDown = () => (
  <svg
    className="w-4 h-4 ml-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// Social Icons
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const BlogDetails = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (index) => {
    setActiveSection(index);
    const headings = document.querySelectorAll('.content-heading');
    if (headings[index]) {
      headings[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className=" bg-[#0d0d14] text-white">
     

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8">
        <div className="max-w-3xl">
          {/* Category Badge */}
          <span className="inline-block bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            {blogData.category}
          </span>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 text-white">
            {blogData.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
            {blogData.subtitle}
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-800/60" />
      </div>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Author */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                  Author
                </h3>
                <div className="flex items-center space-x-3">
                  <img
                    src={blogData.author.avatar}
                    alt={blogData.author.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-500/30"
                  />
                  <span className="text-sm text-gray-300 font-medium">
                    {blogData.author.name}
                  </span>
                </div>
              </div>

              {/* Date */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                  Date
                </h3>
                <div className="flex items-center space-x-3">
                  <CalendarIcon />
                  <span className="text-sm text-gray-300">{blogData.date}</span>
                </div>
              </div>

              {/* Table of Contents */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Table of contents
                </h3>
                <nav className="space-y-1">
                  {blogData.tableOfContents.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(idx)}
                      className={`block w-full text-left text-sm py-2.5 px-4 rounded-lg transition-all duration-200 ${
                        activeSection === idx
                          ? 'bg-purple-600/20 text-white border-l-2 border-purple-500 font-medium'
                          : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/40 border-l-2 border-transparent'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Share */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Share
                </h3>
                <div className="flex items-center space-x-3">
                  <button className="p-2.5 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200">
                    <FacebookIcon />
                  </button>
                  <button className="p-2.5 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200">
                    <XIcon />
                  </button>
                  <button className="p-2.5 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200">
                    <LinkedInIcon />
                  </button>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25">
                  Get started
                </button>
              </div>
            </div>
          </aside>

          {/* Blog Content */}
          <div className="flex-1 min-w-0">
            {/* Featured Image */}
            <div className="mb-10 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-blue-900/20 border border-purple-500/20 shadow-2xl shadow-purple-900/20">
              <div className="relative aspect-video sm:aspect-[16/10]">
                <img
                  src={blogData.heroImage}
                  alt="Blog hero"
                  className="w-full h-full object-cover opacity-80"
                />
                {/* Overlay Content on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/30 to-transparent flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                    Seedream 4.0
                    <br />
                    Design Jam
                  </h2>
                  <p className="text-sm sm:text-base text-gray-300 drop-shadow-md">
                    6pm - 10pm / 329 Bryant St
                  </p>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              {blogData.content.map((block, idx) => {
                if (block.type === 'heading') {
                  return (
                    <h2
                      key={idx}
                      className="content-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-12 mb-6 scroll-mt-24 border-b border-gray-800/50 pb-4"
                    >
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <p
                    key={idx}
                    className="text-gray-400 leading-relaxed text-base sm:text-lg mb-6"
                  >
                    {block.text}
                  </p>
                );
              })}
            </article>

            {/* Additional Content Sections */}
            <div className="mt-16 pt-12 border-t border-gray-800/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                What's Next?
              </h3>
              <p className="text-gray-400 leading-relaxed text-base sm:text-lg mb-8">
                We're constantly working on improving our serverless
                infrastructure. In the coming months, expect to see even more
                GPU options, faster cold starts, and tighter integrations with
                popular ML frameworks. Stay tuned for more updates!
              </p>

              {/* Code Block Example */}
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 mb-8 overflow-x-auto">
                <pre className="text-sm text-gray-300 font-mono">
                  <code>{`import runpod

# Initialize serverless endpoint
endpoint = runpod.Endpoint("your-endpoint-id")

# Run inference
result = endpoint.run_sync({
    "input": {
        "prompt": "Hello, how are you?",
        "max_tokens": 100
    }
})

print(result["output"])`}</code>
                </pre>
              </div>

              <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                Try it out today and see the difference serverless can make for
                your LLM workloads. Our team is here to help you get started
                and optimize your deployments for maximum performance and cost
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="border-t border-gray-800/50 pt-12 lg:pt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Getting Started with Serverless GPUs',
                date: 'January 20, 2025',
                category: 'Tutorial',
                image:
                  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
              },
              {
                title: 'How to Optimize Your LLM Inference Costs',
                date: 'January 15, 2025',
                category: 'Guide',
                image:
                  'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&q=80',
              },
              {
                title: 'Scaling AI Applications in Production',
                date: 'January 10, 2025',
                category: 'Engineering',
                image:
                  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80',
              },
            ].map((article, idx) => (
              <div
                key={idx}
                className="group bg-gray-900/50 border border-gray-800/50 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-900/10"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block text-xs font-semibold text-purple-400 bg-purple-600/10 px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 bg-[#0a0a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Logo Column */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2L2 6l8 4 8-4-8-4zM2 14l8 4 8-4M2 10l8 4 8-4" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">runpod</span>
              </div>
              <p className="text-sm text-gray-500 max-w-xs">
                The cloud platform for AI & ML workloads.
              </p>
            </div>

            {/* Footer Links */}
            {[
              {
                title: 'Product',
                links: ['GPU Cloud', 'Serverless', 'Templates', 'Pricing'],
              },
              {
                title: 'Resources',
                links: ['Documentation', 'Blog', 'Changelog', 'Status'],
              },
              {
                title: 'Company',
                links: ['About', 'Careers', 'Contact', 'Partners'],
              },
              {
                title: 'Legal',
                links: [
                  'Privacy Policy',
                  'Terms of Service',
                  'Cookie Policy',
                ],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © 2025 RunPod. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-white transition-colors">
                <FacebookIcon />
              </button>
              <button className="text-gray-500 hover:text-white transition-colors">
                <XIcon />
              </button>
              <button className="text-gray-500 hover:text-white transition-colors">
                <LinkedInIcon />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetails;