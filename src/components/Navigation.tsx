"use client";

import { useState, useEffect, useRef } from "react";
import {
  Moon,
  Sun,
  Home,
  Info,
  Layers,
  Lock,
  Smartphone,
  Truck,
  BarChart2,
  CreditCard,
  Mail,
  X,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

/**
 * Advanced Navigation
 * - Desktop: top nav with gradient active/hover underline and Request Demo button.
 * - Mobile/Tablet: bottom nav with Home | About | More (center) | Features | Access
 * - "More" opens a centered floating glass card.
 * - Smooth, flicker-free popup animations and transitions.
 * - Fixed scroll spy behavior corrected.
 */

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Features", href: "#features", icon: Layers },
  { name: "Access", href: "#rbac", icon: Lock },
  { name: "Mobile", href: "#mobile", icon: Smartphone },
  { name: "Fleet", href: "#fleet", icon: Truck },
  { name: "Analytics", href: "#analytics", icon: BarChart2 },
  { name: "Pricing", href: "#pricing", icon: CreditCard },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  // header background on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Corrected scroll spy observer
  useEffect(() => {
    const sections = navItems.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[];

    if (!sections.length || typeof IntersectionObserver === "undefined") {
      const h = () => setActive(window.location.hash || "#home");
      window.addEventListener("hashchange", h);
      h();
      return () => window.removeEventListener("hashchange", h);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target) {
          const id = `#${visible.target.id}`;
          setActive((prev) => (prev === id ? prev : id));
          history.replaceState(null, "", id);
        }
      },
      {
        // slightly adjusted top/bottom margins for more stable detection
        rootMargin: "-50% 0px -45% 0px",
        threshold: [0, 0.3, 0.6, 0.9],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // ✅ Improved smooth scroll offset (avoids false triggers)
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) {
      const yOffset = -80; // offset for sticky header height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.replaceState(null, "", href);
    }
    setIsMoreOpen(false);
  };

  // Close popup on outside click or Escape
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!isMoreOpen) return;
      const t = e.target as Node;
      if (popupRef.current && !popupRef.current.contains(t)) {
        setIsMoreOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMoreOpen(false);
    document.addEventListener("click", onDocClick, { capture: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick, { capture: true });
      document.removeEventListener("keydown", onKey);
    };
  }, [isMoreOpen]);

  const leftPrimary = [navItems[0], navItems[1]];
  const rightPrimary = [navItems[2], navItems[3]];
  const moreItems = [navItems[4], navItems[5], navItems[6], navItems[7], navItems[8]];

  return (
    <>
      {/* TOP HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-background/88 backdrop-blur-md border-border/40 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 md:px-8">
          <div className="flex h-[68px] items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <div className="relative h-10 w-10 flex-shrink-0">
                <Image src="/images/logo.png" alt="STAR Logo" fill className="object-contain" priority />
              </div>
              <div className="hidden md:flex flex-col leading-tight text-left">
                <span className="font-heading font-semibold text-base tracking-tight">STAR</span>
                <span className="text-[11px] text-muted-foreground">Ramki Technologies</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    active === item.href
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400 after:absolute after:inset-x-3 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-yellow-400 after:to-amber-400"
                      : "text-muted-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-400"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:scale-105 transition-transform"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button
                onClick={() => scrollToSection("#contact")}
                className="hidden md:inline-flex h-10 px-6 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-semibold shadow-[0_0_16px_rgba(250,204,21,0.25)] hover:shadow-[0_0_22px_rgba(250,204,21,0.45)] transition-all"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* BOTTOM NAV (mobile & tablet) */}
      <div className="lg:hidden">
        <nav
          aria-label="Bottom navigation"
          className="fixed bottom-4 left-1/2 z-50 w-[min(92%,720px)] -translate-x-1/2 rounded-2xl bg-card/92 backdrop-blur-md shadow-xl px-3 py-2 border border-border/40"
        >
          <div className="flex items-center justify-between">
            {leftPrimary.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex flex-col items-center gap-1 py-1 px-2 text-[11px] transition-all ${
                    isActive ? "text-yellow-400 scale-105" : "text-muted-foreground hover:text-yellow-400"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="truncate">{item.name}</span>
                </button>
              );
            })}

            {/* Center: More */}
            <div className="relative flex items-center justify-center">
              <button
                onClick={() => setIsMoreOpen((s) => !s)}
                aria-expanded={isMoreOpen}
                aria-controls="more-popup"
                className="relative -mt-16 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 text-black shadow-lg ring-2 ring-card/70 transition-transform hover:scale-105 focus:outline-none"
                title="More"
              >
                {isMoreOpen ? <X className="h-5 w-5" /> : <MoreHorizontal className="h-5 w-5" />}
              </button>
            </div>

            {rightPrimary.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex flex-col items-center gap-1 py-1 px-2 text-[11px] transition-all ${
                    isActive ? "text-yellow-400 scale-105" : "text-muted-foreground hover:text-yellow-400"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="truncate">{item.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* More Popup */}
        <div
          id="more-popup"
          ref={popupRef}
          role="dialog"
          aria-hidden={!isMoreOpen}
          className={`pointer-events-none fixed left-1/2 z-50 w-[min(88%,420px)] -translate-x-1/2 transform-gpu transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMoreOpen
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-3 scale-95 pointer-events-none"
          }`}
          style={{ bottom: "92px", willChange: "transform, opacity" }}
        >
          <div className="mx-auto rounded-2xl bg-white/90 dark:bg-[#0b1220]/75 backdrop-blur-md border border-border/30 shadow-xl px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              {moreItems.map((mi) => {
                const Icon = mi.icon;
                return (
                  <button
                    key={mi.name}
                    onClick={() => {
                      scrollToSection(mi.href);
                      setIsMoreOpen(false);
                    }}
                    className="flex flex-col items-center gap-1 py-1 rounded-lg hover:bg-secondary/40 transition-colors"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-card/60">
                      <Icon className="h-5 w-5 text-foreground/90" />
                    </div>
                    <span className="text-xs">{mi.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for header height */}
      <div className="h-[68px]" aria-hidden />
    </>
  );
};

export default Navigation;
