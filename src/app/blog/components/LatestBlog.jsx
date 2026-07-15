"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

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

export default function LatestBlog({
  posts,
  title = "Latest insights and trends",
  sectionLabel = "Blog and articles",
}) {
  return (
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
          {sectionLabel}
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl font-medium mt-4"
        >
          {title}
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
                key={post.slug ?? post.id}
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
                    {post.tag ? (
                      <span className="inline-block text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                        {post.tag}
                      </span>
                    ) : null}

                    <h3 className="text-base sm:text-lg font-medium mt-3 group-hover:text-gray-700 transition">
                      {post.title}
                    </h3>

                    {post.excerpt ? (
                      <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    ) : post.description ? (
                      <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                        {post.description}
                      </p>
                    ) : null}
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

