"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Building2, GraduationCap, Users, Cpu, ShieldCheck, Smartphone } from "lucide-react";
import Image from "next/image";

export const AboutSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // prevent body scroll when modal is open
  useEffect(() => {
    if (isPopupOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isPopupOpen]);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,230,0,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(255,230,0,0.1),transparent_70%)] pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-5 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-400 leading-tight">
            Smart Transportation Management for Every Organization
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            The Integrated Bus Management System by{" "}
            <span className="text-foreground font-semibold">
              Ramki Technologies Pvt. Ltd.
            </span>{" "}
            simplifies and secures transportation logistics — providing total
            visibility of buses, routes, drivers, and passengers through a
            centralized platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {[
            {
              icon: Building2,
              title: "Enterprises",
              text: "Manage employee transportation efficiently with real-time tracking, route optimization, and performance analytics.",
            },
            {
              icon: GraduationCap,
              title: "Educational Institutions",
              text: "Ensure student safety with live GPS updates, parent notifications, and automated attendance features.",
            },
            {
              icon: Users,
              title: "Organizations",
              text: "Improve operations, cut costs, and enhance passenger experience through intelligent route planning and scheduling.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background/70 via-secondary/10 to-background/50 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-yellow-400/10 to-amber-500/10" />
              <div className="relative flex flex-col items-start">
                <div className="bg-yellow-500/15 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-5">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-yellow-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 sm:mb-3">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => setIsPopupOpen(true)}
            className="relative overflow-hidden px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-xl font-semibold text-sm sm:text-base text-white shadow-lg border-0 transition-all hover:scale-105 group"
            style={{
              background:
                "linear-gradient(90deg, #facc15 0%, #fbbf24 50%, #f59e0b 100%)",
            }}
          >
            <span className="relative z-10">View Technical Overview</span>

            {/* Shimmer effect layer */}
            <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0)_100%)] animate-shimmer bg-[length:200%_100%]" />
          </Button>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop (slightly dim, not transparent) */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            onClick={() => setIsPopupOpen(false)}
          />

          {/* Popup Card */}
          <div className="relative z-10 w-full max-w-2xl bg-white dark:bg-[#0b1220] rounded-2xl shadow-2xl border border-border/40 overflow-hidden animate-in fade-in-50 slide-in-from-bottom-4">
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border/40">
              <h3 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-400">
                Technical Overview
              </h3>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="p-2 hover:bg-secondary/40 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-400/15 flex-shrink-0">
                  <Cpu className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg">
                    Advanced Architecture
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Built on a microservices-based architecture, ensuring
                    scalability, modularity, and secure API integration.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-400/15 flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg">
                    Security & Compliance
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Incorporates RBAC, encrypted communication, and audit
                    logging to meet enterprise-grade data protection standards.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-400/15 flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg">
                    Mobile Integration
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Fully responsive mobile app support with live GPS, push
                    notifications, and real-time analytics dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
