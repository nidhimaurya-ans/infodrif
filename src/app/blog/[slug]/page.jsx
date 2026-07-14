import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "../../../lib/mockContent";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="pt-24">
      <div className="mx-auto max-w-3xl px-5 pb-20">
        <div className="rounded-3xl border border-[rgba(255,255,255,0.10)] bg-[#071b33]/70 p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[rgba(255,255,255,0.68)]">
            <span className="rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1">
              {post.readTime}
            </span>
            <span>{post.date}</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm leading-7 text-[rgba(255,255,255,0.76)]">
            {post.excerpt}
          </p>

          <article className="mt-8 space-y-6 text-sm leading-7 text-[rgba(255,255,255,0.78)]">
            {post.content.map((block, idx) => {
              if (block.type === "p") {
                return <p key={idx}>{block.text}</p>;
              }
              if (block.type === "ul") {
                return (
                  <ul key={idx} className="list-disc space-y-2 pl-6">
                    {block.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </article>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-coral/20 to-[#39b0ff]/20 p-6">
            <div className="text-sm font-semibold text-white">Next step</div>
            <p className="mt-2 text-sm leading-6 text-[rgba(255,255,255,0.72)]">
              Pair this guide with an offer page to turn content into commissions.
            </p>
            <div className="mt-4 text-sm font-semibold text-coral">
              Explore offers from the homepage.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

