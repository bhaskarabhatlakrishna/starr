"use client";

import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  Home,
  Info,
  Layers,
  Lock,
  Smartphone,
  Truck,
  BarChart2,
  CreditCard,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // Detect scroll position & active section
  useEffect(() => {
    const sectionIds = navItems.map((i) => i.href);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      let current = "#home";
      for (const id of sectionIds) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35) {
            current = id;
            break;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/40 shadow-[0_8px_30px_rgba(250,204,21,0.1)]"
          : "bg-transparent border-transparent"
          }`}
      >
        <nav className="container mx-auto px-4 md:px-8">
          <div className="flex h-[68px] items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo.png"
                  alt="STAR Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden md:flex flex-col leading-tight">
                <span className="font-heading font-semibold text-base tracking-tight">STAR</span>
                <span className="text-[11px] text-muted-foreground">Ramki Technologies</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 
                  ${active === item.href
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
                className="hidden md:inline-flex h-10 px-6 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-semibold shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all"
              >
                Request Demo
              </Button>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen((s) => !s)}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen
              ? "max-h-[420px] opacity-100 mt-1"
              : "max-h-0 opacity-0"
              }`}
          >
            <div className="rounded-2xl bg-card/95 backdrop-blur-md shadow-xl border border-border/40">
              <div className="grid grid-cols-3 gap-2 p-3">
                {navItems.slice(0, 6).map((item) => {
                  const Icon = item.icon;
                  const isActive = active === item.href;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg text-[12px] transition-all ${isActive
                        ? "text-yellow-400 scale-105"
                        : "text-foreground/90 hover:text-yellow-400 hover:bg-secondary/50"
                        }`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-2 p-3">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-semibold hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
                >
                  Request Demo
                </Button>
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Bottom Nav (Unchanged as per request) */}
      <div className="lg:hidden">
        <nav
          aria-label="Bottom navigation"
          className="fixed bottom-4 left-1/2 z-50 w-[min(92%,720px)] -translate-x-1/2 rounded-2xl bg-card/85 backdrop-blur-md shadow-xl px-2.5 py-2 border border-border/40"
        >
          <div className="flex items-center justify-between">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              const isActive = active === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex flex-1 flex-col items-center gap-1 text-[11px] transition-all ${isActive
                    ? "text-yellow-400 scale-105"
                    : "text-muted-foreground hover:text-yellow-400"
                    }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </button>
              );
            })}
            {/* Floating CTA */}
            <button
              onClick={() => scrollToSection("#contact")}
              className="relative -mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 text-black shadow-lg ring-2 ring-card/70 transition-transform hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Spacer for header */}
      <div className="h-[68px]" aria-hidden />
    </>
  );
};

export default Navigation;
