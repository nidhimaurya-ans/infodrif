"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Partners", "/partners"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b border-[rgba(255,255,255,0.08)] transition-all duration-300 ${
        scrolled ? "bg-[rgba(7,27,51,0.65)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-coral text-[13px] font-bold text-white">
            DH
          </span>
          DailyHnt
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {nav.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative whitespace-nowrap py-2 text-sm font-semibold transition ${
                  active ? "text-coral" : "text-[rgba(255,255,255,0.74)] hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-coral transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                />
              </Link>
            );
          })}
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-[rgba(255,255,255,0.12)] text-white/90"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={20} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[999] bg-[rgba(7,27,51,0.55)] backdrop-blur-sm lg:hidden">
          <div className="absolute right-0 top-0 h-full w-full max-w-sm border-l border-[rgba(255,255,255,0.10)] bg-[#071b33] p-6">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-coral text-[13px] font-bold text-white">
                  DH
                </span>
                <span className="text-sm font-semibold text-white">DailyHnt</span>
              </span>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(255,255,255,0.18)] text-white"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-1">
              {nav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-lg font-semibold text-white/90 hover:bg-white/5"
                >
                  {label}
                </Link>
              ))}
            </div>

            <p className="mt-8 text-sm leading-6 text-[rgba(255,255,255,0.72)]">
              Affiliate strategy + partner offers built for performance.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

