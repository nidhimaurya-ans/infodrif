import React from "react";

const row1 = [
  {
    name: "Canva",
    desc: "Create content in Canva and seamlessly use it in Mailchimp",
    logo: "C",
    color: "bg-cyan-500",
  },
  {
    name: "Salesforce",
    desc: "Easy to set up bi-directional sync with Salesforce",
    logo: "S",
    color: "bg-sky-500",
  },
  {
    name: "Stripe",
    desc: "Sync Stripe customer and order data",
    logo: "S",
    color: "bg-indigo-500",
  },
  {
    name: "Squarespace",
    desc: "Connect ecommerce and website data to Mailchimp",
    logo: "⌘",
    color: "bg-gray-800",
  },
  {
    name: "WooCommerce",
    desc: "Access powerful marketing features",
    logo: "Woo",
    color: "bg-violet-500",
  },
];

const row2 = [
  {
    name: "Gravity Forms",
    desc: "Grow your email list with a powerful form builder",
    logo: "G",
    color: "bg-gray-700",
  },
  {
    name: "Meta Lead Ads",
    desc: "Connect leads from Facebook, Messenger, or Instagram",
    logo: "∞",
    color: "bg-blue-500",
  },
  {
    name: "Square",
    desc: "Bring customer data and marketing tools together",
    logo: "◫",
    color: "bg-gray-700",
  },
  {
    name: "Shopify",
    desc: "Unite your data with Mailchimp to run personalized campaigns",
    logo: "S",
    color: "bg-lime-500",
  },
  {
    name: "Zapier",
    desc: "Connect your apps and automate workflows",
    logo: "Z",
    color: "bg-orange-500",
  },
];

const row3 = [
  {
    name: "LinkedIn",
    desc: "Connect LinkedIn lead gen forms to Mailchimp",
    logo: "in",
    color: "bg-sky-600",
  },
  {
    name: "Calendly",
    desc: "Streamline your schedule and marketing",
    logo: "C",
    color: "bg-blue-500",
  },
  {
    name: "Make",
    desc: "Design, build, and automate with thousands of apps",
    logo: "M",
    color: "bg-fuchsia-500",
  },
  {
    name: "WordPress",
    desc: "Boost visitor engagement with the Mailchimp block",
    logo: "W",
    color: "bg-stone-500",
  },
];

const Card = ({ item }) => {
  return (
    <div className="flex min-w-[430px] max-w-[430px] items-center gap-4 rounded-[18px] bg-white px-4 py-4">
      <div className="flex h-15 w-15 items-center justify-center ">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color} text-sm font-bold text-white`}
        >
          {item.logo}
        </div>
      </div>

      <div className="pr-2">
        <h3 className="text-[20px] leading-none"></h3>
        <p className="mb-1 text-[20px] font-semibold leading-tight text-[#1f1f1f]">
          {item.name}
        </p>
        <p className="max-w-[270px] text-[12px] leading-[1.35] text-[#3f3f3f]">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

const MarqueeRow = ({ items, direction = "left", speed = "slow" }) => {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-4">
      <div
        className={`flex w-max gap-6 ${
          direction === "left"
            ? speed === "slow"
              ? "animate-marquee-left-slow"
              : "animate-marquee-left"
            : speed === "slow"
            ? "animate-marquee-right-slow"
            : "animate-marquee-right"
        }`}
      >
        {duplicated.map((item, index) => (
          <Card key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default function IntegrationsShowcase() {
  return (
    <section className="w-full bg-white pt-20 pb-24">
      <div className="mx-auto max-w-[1200px] px-4 text-center">
        <h2 className="mx-auto max-w-[900px] text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#111] md:text-[48px]">
          One marketing platform to unite 300+ apps
        </h2>

        <p className="mx-auto mt-6 max-w-[780px] text-[20px] leading-[1.5] text-[#222] md:text-[22px]">
          InfoDrif integrates with hundreds of tools to help you save time and
          get more done.
        </p>

      
      </div>

      <div className="mt-16 space-y-2">
        {/* Row 1: Left to Right */}
        <MarqueeRow items={row1} direction="right" speed="slow" />

        {/* Row 2: Right to Left */}
        <MarqueeRow items={row2} direction="left" speed="slow" />

        {/* Row 3: Left to Right */}
        <MarqueeRow items={row3} direction="right" speed="slow" />
      </div>
    </section>
  );
}