import Link from "next/link";
import { notFound } from "next/navigation";
import { offers, getOfferBySlug } from "../../../lib/mockContent";

export function generateStaticParams() {
  return offers.map((o) => ({ slug: o.slug }));
}

export default function OfferPage({ params }) {
  const offer = getOfferBySlug(params.slug);
  if (!offer) notFound();

  return (
    <main className="pt-24">
      <div className="mx-auto max-w-4xl px-5 pb-20">
        <div className="rounded-3xl border border-[rgba(255,255,255,0.10)] bg-[#071b33]/70 p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[rgba(255,255,255,0.68)]">
            <span className="rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1">
              {offer.category}
            </span>
            <span>Payout: {offer.payout}</span>
            <span>Cookie: {offer.cookie}</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {offer.name}
          </h1>
          <p className="mt-4 text-sm leading-7 text-[rgba(255,255,255,0.76)]">
            {offer.description}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[rgba(255,255,255,0.10)] bg-white/5 p-6">
              <div className="text-sm font-semibold text-white">Highlights</div>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-6 text-[rgba(255,255,255,0.75)]">
                {offer.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[rgba(255,255,255,0.10)] bg-white/5 p-6">
              <div className="text-sm font-semibold text-white">FAQ</div>
              <div className="mt-4 space-y-4">
                {offer.faq.map((f) => (
                  <div key={f.q}>
                    <div className="text-sm font-semibold text-white">{f.q}</div>
                    <div className="mt-1 text-sm leading-6 text-[rgba(255,255,255,0.74)]">
                      {f.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#"
              onClick={(e) => e.preventDefault()}
              className="rounded-xl bg-coral px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Get affiliate link (demo)
            </Link>
            <Link
              href="/partners"
              className="rounded-xl border border-[rgba(255,255,255,0.14)] bg-transparent px-6 py-3 text-center text-sm font-semibold text-white/90"
            >
              Become a partner
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

