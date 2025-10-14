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

  // Smooth scroll detection with debounce to prevent flicker
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 16);
      }, 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync hash with active section
  useEffect(() => {
    const setFromHash = () => setActive(window.location.hash || "#home");
    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
      setActive(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border/40 ${isScrolled
          ? "bg-card/90 backdrop-blur-md shadow-lg"
          : "bg-transparent border-transparent"
          }`}
      >
        <nav className="container mx-auto px-3 md:px-5">
          <div className="flex h-[64px] items-center justify-between">
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
                <span className="font-heading font-semibold text-base">STAR</span>
                <span className="text-[11px] text-muted-foreground">Ramki Technologies</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1.5">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-all ${active === item.href
                    ? "text-primary after:absolute after:inset-x-2 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-primary/80"
                    : "text-muted-foreground hover:text-primary"
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full transition-transform hover:scale-105"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              <Button
                onClick={() => scrollToSection("#contact")}
                className="hidden md:inline-flex h-9 bg-primary text-primary-foreground hover:bg-primary/90"
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
                  aria-controls="mobile-menu"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${isMobileMenuOpen ? "max-h-[400px] opacity-100 mt-1" : "max-h-0 opacity-0"
              }`}
          >
            <div className="rounded-xl bg-card/95 backdrop-blur-md shadow-xl border border-border/40">
              <div className="grid grid-cols-3 gap-2 p-3">
                {navItems.slice(0, 6).map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="flex flex-col items-center gap-1 px-2 py-2 rounded-lg text-[12px] text-foreground/90 hover:bg-secondary/50 transition-all active:scale-[0.97]"
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-2 p-3">
                <Button onClick={() => scrollToSection("#contact")} className="w-full">
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

      {/* Bottom Nav (Mobile Only) */}
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
                    ? "text-primary scale-105"
                    : "text-muted-foreground hover:text-primary"
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
              className="relative -mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-2 ring-card/70 transition-transform hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Spacer for header */}
      <div className="h-[64px]" aria-hidden />
    </>
  );
};

export default Navigation;
