import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Animation Variants ───────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const lineGrow = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1.2, ease: "easeInOut" } },
};

const dotPulse = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

// ─── Timeline Data ────────────────────────────────────────────────────
const timelineData = [
  {
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    description:
      "In 2021, we started with a simple idea: to create a platform that empowers creators and businesses to tell their stories in the most authentic way. What began as a small team of three passionate individuals working out of a garage quickly evolved into something much bigger.",
    imageSide: "left",
  },
  {
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop",
    description:
      "In 2022, we secured $5M in Seed Series A funding and grew our team to 25 talented individuals. We launched our beta platform and onboarded over 1,000 early adopters who believed in our vision and helped shape the product into what it is today.",
    imageSide: "right",
  },
  {
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    description:
      "In 2023, we expanded to five cities globally. Our user base surpassed 100K, and we introduced AI-powered storytelling tools that revolutionized how our community creates and shares content. We also won the TechCrunch Startup of the Year award.",
    imageSide: "left",
  },
  {
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    description:
      "In 2024, we launched our enterprise suite, partnering with Fortune 500 companies. Our platform now supports over 50 languages and serves millions of users worldwide. We opened new offices in London, Tokyo, and São Paulo to better serve our global community.",
    imageSide: "right",
  },
  {
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    description:
      "In 2025, we continue to push boundaries. With a team of over 200 people across 12 countries, we're building the future of digital storytelling. Our mission remains the same: empower every voice, everywhere, to share their story with the world.",
    imageSide: "left",
  },
];

// ─── Animated Section Wrapper ─────────────────────────────────────────
const AnimatedSection = ({ children, variants, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── Timeline Dot Component ───────────────────────────────────────────
const TimelineDot = ({ index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={dotPulse}
      className="absolute left-1/2 transform -translate-x-1/2 z-10"
      style={{ top: "50%" }}
    >
      <div className="relative">
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          animate={
            isInView ? { scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] } : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{ width: 16, height: 16 }}
        />
        {/* Inner dot */}
        <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-400 shadow-lg shadow-white/30" />
      </div>
    </motion.div>
  );
};

// ─── Timeline Item Component ──────────────────────────────────────────
const TimelineItem = ({ item, index }) => {
  const isLeft = item.imageSide === "left";

  return (
    <div className="relative flex items-center w-full mb-24 md:mb-32 last:mb-0">
      {/* Vertical connecting line segment */}
      <AnimatedSection
        variants={lineGrow}
        className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-white/10 via-white/30 to-white/10 origin-top"
      />

      {/* Timeline dot */}
      <div className="hidden md:block">
        <TimelineDot index={index} />
      </div>

      {/* Content Grid */}
      <div className="w-full md:grid md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
        {/* Image Section */}
        <AnimatedSection
          variants={isLeft ? fadeInLeft : fadeInRight}
          className={`${isLeft ? "md:order-1" : "md:order-2"} mb-8 md:mb-0`}
        >
          <motion.div
            className="relative group overflow-hidden rounded-lg shadow-2xl shadow-black/50"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <img
              src={item.image}
              alt={`Story ${item.year}`}
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* Shine effect on hover */}
            <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Text Section */}
        <AnimatedSection
          variants={isLeft ? fadeInRight : fadeInLeft}
          className={`${isLeft ? "md:order-2" : "md:order-1"} px-4 md:px-0`}
        >
          <div className="space-y-4">
            {/* Year badge */}
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {item.year}
              </h3>
              <motion.div
                className="h-0.5 bg-gradient-to-r from-white/80 to-transparent mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed lg:leading-loose max-w-lg">
              {item.description}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

// ─── Floating Particles Background ───────────────────────────────────
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/5"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// ─── Main OurStory Component ──────────────────────────────────────────
const OurStory = () => {
  return (
    <div className="min-h-screen  bg-blue-500/10  text-white relative overflow-hidden">
      {/* Floating background particles */}
      <FloatingParticles />

      {/* Subtle radial gradient overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        {/* ── Header ─────────────────────────────────────────── */}
        <AnimatedSection
          variants={fadeInUp}
          className="text-center mb-20 sm:mb-28 lg:mb-36"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-wide text-white"
            initial={{ opacity: 0, y: 40, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Our story
          </motion.h1>

          {/* Decorative line under title */}
          <motion.div
            className="mx-auto mt-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-gray-500 text-sm sm:text-base max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            A journey of passion, innovation, and relentless pursuit of
            excellence.
          </motion.p>
        </AnimatedSection>

        {/* ── Timeline ──────────────────────────────────────── */}
        <div className="relative">
          {/* Central vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA / Closing ───────────────────────────── */}
        <AnimatedSection
          variants={scaleIn}
          className="text-center mt-24 sm:mt-32"
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button  href="/contact"className="group relative px-10 py-4 border border-white/20 cursor-pointer rounded-full text-white text-sm tracking-widest uppercase overflow-hidden transition-colors duration-500 hover:border-white/50">
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                Join Our Journey
              </span>
            </button>
          </motion.div>

          <motion.p
            className="mt-8 text-gray-600 text-xs tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            The best chapters are yet to be written.
          </motion.p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default OurStory;
