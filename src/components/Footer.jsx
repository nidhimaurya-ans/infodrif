// // import Link from "next/link";

// // export default function Footer() {
// //   return (
// //     <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#071b33]">
// //       <div className="mx-auto max-w-6xl px-5 py-12">
// //         <div className="grid gap-10 md:grid-cols-3">
// //           <div>
// //             <div className="flex items-center gap-2 font-semibold tracking-tight text-white">
// //               <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-coral text-[13px] font-bold text-white">
// //                 ID
// //               </span>
// //               InfoDrift
// //             </div>
// //             <p className="mt-4 text-sm leading-6 text-[rgba(255,255,255,0.72)]">
// //               Marketing + affiliate offers with clear tracking, compliant
// //               creatives, and performance-focused funnels.
// //             </p>
// //           </div>

// //           <div>
// //             <p className="text-sm font-semibold text-white">Explore</p>
// //             <div className="mt-4 flex flex-col gap-2 text-sm">
// //               <Link
// //                 className="text-[rgba(255,255,255,0.74)] hover:text-white"
// //                 href="/blog"
// //               >
// //                 Blog
// //               </Link>
// //               <Link
// //                 className="text-[rgba(255,255,255,0.74)] hover:text-white"
// //                 href="/partners"
// //               >
// //                 Partners
// //               </Link>
// //               <Link
// //                 className="text-[rgba(255,255,255,0.74)] hover:text-white"
// //                 href="/contact"
// //               >
// //                 Contact
// //               </Link>
// //             </div>
// //           </div>

// //           <div>
// //             <p className="text-sm font-semibold text-white">Get updates</p>
// //             <p className="mt-4 text-sm leading-6 text-[rgba(255,255,255,0.72)]">
// //               Monthly affiliate playbooks .
// //             </p>
// //             <form className="mt-4 flex gap-2">
// //               <input
// //                 type="email"
// //                 placeholder="Email address"
// //                 required
// //                 className="w-full rounded-xl border border-[rgba(255,255,255,0.14)] bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-[rgba(255,255,255,0.5)]"
// //               />
// //               <button
// //                 type="submit"
// //                 className="rounded-xl bg-coral px-4 py-2 text-sm font-semibold text-white"
// //               >
// //                 Join
// //               </button>
// //             </form>
// //           </div>
// //         </div>

// //         <div className="mt-10 flex flex-col gap-2 border-t border-[rgba(255,255,255,0.08)] pt-6 text-xs text-[rgba(255,255,255,0.62)] md:flex-row md:justify-between">
// //           <span>
// //             © {new Date().getFullYear()} InfoDrif. All rights reserved.
// //           </span>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// import Link from "next/link";
// import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
// import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

// const serviceLinks = [
//   "Affiliate Branding",
//   "SEO Growth",
//   "Paid Advertising",
//   "Lead Generation",
//   "Analytics",
// ];

// const companyLinks = [
//   ["About", "/about"],
//   ["Services", "/services"],
//   ["Blogs", "/blogs"],
//   ["Contact", "/contact"],
// ];

// const topicLinks = ["Affiliate Branding", "SEO", "Performance", "Content"];

// export default function Footer() {
//   return (
//     <footer className="  relative overflow-hidden bg-[linear-gradient(135deg,#061a2f_0%,#071b33_48%,#1d5edb_100%)] text-white">
//       <div className="relative mx-auto max-w-6xl">
//         <div className="grid gap-10  py-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.72fr_0.72fr_0.72fr_1.08fr] lg:items-start">
//           <div className="anim-fade-up lg:pr-6">
//             <Link
//           href="/"
//           className="flex items-center gap-2 font-semibold tracking-tight text-white"
         
//         >
//           <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-coral text-[13px] font-bold text-white">
//             ID
//           </span>
//           InfoDrift
//         </Link>

//             <p className="mt-5 max-w-sm text-[0.95rem] font-medium leading-7 text-white/72">
//               We help companies build visibility, trust, partnerships, and
//               revenue through affiliate branding and performance-focused
//               marketing.
//             </p>

//             <div className="mt-7 grid gap-3 text-[0.95rem] font-medium text-white/76">
//               <p className="grid grid-cols-[1rem_1fr] items-center gap-3">
//                 <FiMapPin size={16} className="text-sky-200" />
//                 <span>Gurugram, Haryana</span>
//               </p>
//               <p className="grid grid-cols-[1rem_1fr] items-center gap-3">
//                 <FiMail size={16} className="text-sky-200" />
//                 <span>hello@infodrif.com</span>
//               </p>
//               <p className="grid grid-cols-[1rem_1fr] items-center gap-3">
//                 <FiPhone size={16} className="text-sky-200" />
//                 <span>+91 98765 43210</span>
//               </p>
//             </div>
//           </div>

        

//           <div className="anim-fade-up anim-delay-2 lg:pt-2">
//             <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-sky-100">
//               Company
//             </h2>
//             <div className="mt-5 grid gap-3">
//               {companyLinks.map(([label, href]) => (
//                 <Link
//                   key={href}
//                   href={href}
//                   className="block text-[0.95rem] font-medium text-white/72 transition hover:translate-x-1 hover:text-white"
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className="anim-fade-up anim-delay-3 lg:pt-2">
//             <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-sky-100">
//               Topics
//             </h2>
//             <div className="mt-5 grid gap-3">
//               {topicLinks.map((topic) => (
//                 <Link
//                   key={topic}
//                   href="/blogs"
//                   className="block text-[0.95rem] font-medium text-white/72 transition hover:translate-x-1 hover:text-white"
//                 >
//                   {topic}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className="anim-fade-up anim-delay-4 md:col-span-2 lg:col-span-1 lg:pt-2">
//             <div className="mt-7 flex gap-3 text-sm text-white/70">
//               {[
//                 [FaLinkedinIn, "LinkedIn"],
//                 [FaXTwitter, "Twitter / X"],
//                 [FaInstagram, "Instagram"],
//               ].map(([Icon, label]) => (
//                 <a
//                   key={label}
//                   href="#"
//                   className="grid h-10 w-10 place-items-center rounded-full border border-white/14 bg-white/8
//                    transition hover:-translate-y-0.5 hover:border-sky-200/50 hover:bg-red-200 hover:text-ink"
//                   aria-label={label}
//                 >
//                   <Icon size={15} />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col justify-between gap-5 pb-8 pt-7 text-[0.92rem] font-medium text-white/58 md:flex-row md:items-center md:pb-10 anim-fade-up anim-delay-5">
//           <p>Copyright 2026 InfoDrif. All rights reserved.</p>
//           <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
//             <Link
//               href="/privacy-policy"
//               className="transition hover:text-white"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               href="/terms-and-conditions"
//               className="transition hover:text-white"
//             >
//               Terms & Conditions
//             </Link>
//             <span>Where strategy, partnerships, and performance meet.</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }





"use client";

import Link from "next/link";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";


const companyLinks = [
  ["About Us", "/about"],
  ["Careers", "/careers"],
  ["Blog", "/blogs"],
  ["Press", "/press"],
] 

const topicLinks = [
  "Affiliate Marketing",
  "Brand Strategy",
  "Performance Marketing",
  "Partnerships",
] 

const socialLinks  = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#061a2f] text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-[110px]" />
        <div className="absolute bottom-[-14rem] right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,26,47,0.96)_0%,rgba(7,27,51,0.98)_48%,rgba(29,94,219,0.68)_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main footer content */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.75fr_0.9fr_1.15fr] lg:gap-16 lg:py-20">
          {/* Brand section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="InfoDrift home"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ff684a] text-sm font-extrabold text-white shadow-lg shadow-orange-950/20 transition duration-300 group-hover:rotate-[-5deg] group-hover:scale-105">
                ID
              </span>

              <span className="text-lg font-bold tracking-[-0.02em] text-white">
                InfoDrift
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              We help companies build visibility, trust, partnerships, and
              revenue through affiliate branding and performance-focused
              marketing.
            </p>

            {/* Contact information */}
            <div className="mt-7 space-y-4 text-sm text-white/70">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Gurugram%2C%20Haryana"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 transition hover:text-white"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-sky-200 transition group-hover:border-sky-200/40 group-hover:bg-sky-200/10">
                  <FiMapPin size={15} />
                </span>
                <span>Gurugram, Haryana</span>
              </a>

              <a
                href="mailto:hello@infodrift.com"
                className="group flex items-center gap-3 transition hover:text-white"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-sky-200 transition group-hover:border-sky-200/40 group-hover:bg-sky-200/10">
                  <FiMail size={15} />
                </span>
                <span>hello@infodrift.com</span>
              </a>

              <a
                href="tel:+919876543210"
                className="group flex items-center gap-3 transition hover:text-white"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-sky-200 transition group-hover:border-sky-200/40 group-hover:bg-sky-200/10">
                  <FiPhone size={15} />
                </span>
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-sky-100">
              Company
            </h2>

            <nav className="mt-6 space-y-4" aria-label="Company links">
              {companyLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center gap-1.5 text-sm text-white/65 transition duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span>{label}</span>
                  <FiArrowUpRight
                    size={14}
                    className="opacity-0 transition duration-300 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Topics */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-sky-100">
              Topics
            </h2>

            <nav className="mt-6 space-y-4" aria-label="Topic links">
              {topicLinks.map((topic) => (
                <Link
                  key={topic}
                  href={`/blogs?topic=${encodeURIComponent(topic)}`}
                  className="group flex items-center gap-1.5 text-sm text-white/65 transition duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span>{topic}</span>
                  <FiArrowUpRight
                    size={14}
                    className="opacity-0 transition duration-300 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect section */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-sky-100">
              Let&apos;s Connect
            </h2>

            <p className="mt-6 max-w-xs text-sm leading-6 text-white/65">
              Have a project in mind? Let&apos;s discuss how we can help your
              business grow.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ff684a] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff785d] hover:shadow-orange-950/30"
            >
              Start a conversation
              <FiArrowUpRight size={16} />
            </Link>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition duration-300 hover:-translate-y-1 hover:border-sky-200/50 hover:bg-sky-200 hover:text-[#061a2f]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="flex flex-col gap-4 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
            <p>© 2026 InfoDrift. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href="/privacy-policy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="transition hover:text-white"
              >
                Terms &amp; Conditions
              </Link>

              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

              <span>Where strategy, partnerships, and performance meet.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}