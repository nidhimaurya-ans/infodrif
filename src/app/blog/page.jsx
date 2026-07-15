"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { blogPosts } from "../../lib/mockContent";

const categories = ["All", "Marketing Tips", "Business Strategies", "Industry Insights", "Client Success"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const featuredPost = blogPosts[0];

function resolveCategory(post) {
  // Your slug/data doesn’t include categories; map based on existing title keywords (safe fallback = "All").
  const title = post.title.toLowerCase();
  if (title.includes("landing") || title.includes("conversion")) return "Marketing Tips";
  if (title.includes("email") || title.includes("sequence")) return "Marketing Tips";
  if (title.includes("choose") || title.includes("affiliate")) return "Business Strategies";
  return "Industry Insights";
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const posts = useMemo(() => {
    const mapped = blogPosts.map((p) => ({
      ...p,
      // add fields used by LatestBlog UI
      tag: "News",
      category: resolveCategory(p),
      description: p.excerpt,
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",
    }));

    if (activeCategory === "All") return mapped;
    return mapped.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen font-sans text-gray-900 pt-24">
      {/* HERO / HEADER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight"
        >
          Blog &amp; articles
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerStagger}
          className="flex flex-wrap gap-2 sm:gap-3 mt-6"
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              custom={i}
              variants={fadeUp}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs sm:text-sm rounded-lg border transition ${
                activeCategory === cat
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* FEATURED POST */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
        >
          <div className="overflow-hidden rounded-xl">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              src={
                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
              }
              alt={featuredPost?.title ?? "Featured"}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>

          <div>
            <span className="inline-block text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
              News
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium mt-4 text-white">
              {featuredPost?.title}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-4 leading-relaxed max-w-md">
              {featuredPost?.excerpt}
            </p>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="mt-8 inline-flex items-center justify-center  bg-blue-600 text-white text-sm px-6 py-2.5 rounded-lg  transition"
            >
              Read more
            </Link>
          </div>
        </motion.div>
      </section>

      {/* LATEST */}
      <section className="bg-gray-50 mt-16 sm:mt-20 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <span className="w-2 h-2 rounded-full bg-gray-900" />
            Blog and articles
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-medium mt-4"
          >
            Latest insights and trends
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerStagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10"
          >
            <AnimatePresence mode="popLayout">
              {posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6 }}
                  className="group cursor-pointer"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block focus:outline-none"
                    aria-label={`Read more: ${post.title}`}
                  >
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4">
                      <span className="inline-block text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                        {post.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-medium mt-3 group-hover:text-gray-700 transition">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                        {post.description}
                      </p>
                    </div>

                    <span className="sr-only">Read more</span>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

