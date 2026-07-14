import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#071b33]">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold tracking-tight text-white">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-coral text-[13px] font-bold text-white">
                DH
              </span>
              DailyHnt
            </div>
            <p className="mt-4 text-sm leading-6 text-[rgba(255,255,255,0.72)]">
              Marketing + affiliate offers with clear tracking, compliant creatives,
              and performance-focused funnels.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Explore</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link className="text-[rgba(255,255,255,0.74)] hover:text-white" href="/blog">
                Blog
              </Link>
              <Link
                className="text-[rgba(255,255,255,0.74)] hover:text-white"
                href="/partners"
              >
                Partners
              </Link>
              <Link
                className="text-[rgba(255,255,255,0.74)] hover:text-white"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Get updates</p>
            <p className="mt-4 text-sm leading-6 text-[rgba(255,255,255,0.72)]">
              Monthly affiliate playbooks (demo content).
            </p>
            <form
              className="mt-4 flex gap-2"
            >

              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full rounded-xl border border-[rgba(255,255,255,0.14)] bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-[rgba(255,255,255,0.5)]"
              />
              <button
                type="submit"
                className="rounded-xl bg-coral px-4 py-2 text-sm font-semibold text-white"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[rgba(255,255,255,0.08)] pt-6 text-xs text-[rgba(255,255,255,0.62)] md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} DailyHnt. All rights reserved.</span>
        
        </div>
      </div>
    </footer>
  );
}




