
import React, { useRef } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Neil Patel",
    role: "Co-Founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Mike Kamo",
    role: "Co-Founder",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Mike Gullaksen",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Paul Darling",
    role: "CFO",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Traci Rice",
    role: "SVP, Operations",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    role: "VP, Marketing",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "David Lee",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
];


function TeamCard({ member }) {
  return (
    <div className="shrink-0 basis-[82%] sm:basis-[48%] md:basis-[32%] lg:basis-[24%] xl:basis-[20%]">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-[260px] w-full items-end justify-center overflow-hidden bg-white">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-contain object-bottom"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/300x260/ffffff/111111?text=Team";
            }}
          />
        </div>

        <div className="pt-[27px]">
          <h3 className="text-[18px] font-bold leading-[22px] text-black">
            {member.name}
          </h3>
          <p className="mt-[4px] text-[18px] font-normal leading-[22px] text-[#111111]">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
}

function TeamSection() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.clientWidth / 1.2;

    sliderRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 pb-[68px] pt-[36px]">
        {/* Top title area */}
        <div className="mx-auto max-w-[850px] text-center">
          <p className="text-[16px] font-bold uppercase tracking-[0.4px] text-[#ff5a1f]">
            Team
          </p>

          <h1 className="mt-[20px] text-[48px] font-bold leading-[1.5rem] tracking-[-1.5px] text-[#282c32] md:text-[50px]">
            People at InfoDrif.
          </h1>

          <div className="mx-auto mt-[28px] h-[4px] w-[75px] bg-[#ff5a1f]" />

          <p className="mt-[27px] text-[21px] font-normal leading-[33px] text-[#3c3c3c]">
            Our people differentiate us as an agency. Beyond the job titles are
            individuals with unique perspectives and passions that help shape
            the vision and values of InfoDrif.
          </p>
        </div>

        {/* Leadership heading + arrows */}
        <div className="mt-[65px] flex items-center justify-between">
          <h2 className="text-[21px] font-bold leading-none text-black">
            Global Leadership
          </h2>

          <div className="flex items-center gap-[3px]">
            <button
              onClick={() => scrollSlider("prev")}
              className="flex h-[24px] w-[24px] items-center justify-center bg-[#a7a9ac] text-[22px] leading-none text-white hover:bg-[#ff5a1f]"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => scrollSlider("next")}
              className="flex h-[24px] w-[24px] items-center justify-center bg-[#a7a9ac] text-[22px] leading-none text-white hover:bg-[#ff5a1f]"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>

        {/* Scrollable team carousel */}
        <div
          ref={sliderRef}
          className="mt-[52px] flex gap-[30px] overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TeamMember() {
  return (
    <div className="min-h-screen bg-white font-sans">
      

      <main>
        <TeamSection />

      </main>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-[49px] right-[50px] flex h-[50px] w-[50px] items-center justify-center rounded-[2px] bg-[#444444] text-[20px] font-bold text-[#ff5a1f]"
      >
       ⌃
      </button>
    </div>
  );
}