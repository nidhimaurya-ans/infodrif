import Link from "next/link";
import { blogPosts } from "../../lib/mockContent";

export default function BlogIndexPage() {
  return (
    <main className="pt-24">
      <div className="mx-auto max-w-6xl px-5 pb-20">
        <div className="mb-10">
          <p className="text-sm font-semibold text-coral">Blog</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Affiliate insights & growth playbooks.
          </h1>
          <p className="mt-5 max-w-2xl text-[rgba(255,255,255,0.72)]">
            Browse demo posts. Click through to a dynamic slug route.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl border border-[rgba(255,255,255,0.10)] bg-[#071b33]/70 p-7 transition hover:border-[rgba(255,255,255,0.20)]"
            >
              <div className="flex items-center gap-3 text-xs text-[rgba(255,255,255,0.68)]">
                <span className="rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1">
                  {post.readTime}
                </span>
                <span>{post.date}</span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-white group-hover:text-coral">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[rgba(255,255,255,0.72)]">
                {post.excerpt}
              </p>
              <div className="mt-5 text-sm font-semibold text-coral">Read →</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

