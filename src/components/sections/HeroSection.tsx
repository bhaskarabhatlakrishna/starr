"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Zap, Shield } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/school-bus-hero.jpg"
          alt="School bus fleet management and tracking system"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/60 backdrop-blur-sm" />
      </div>

      {/* Gradient Flares */}
      <div className="absolute top-1/3 left-[-10%] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] bg-gradient-to-br from-yellow-400/40 to-yellow-600/10 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-yellow-400/30 to-amber-500/20 blur-3xl rounded-full animate-pulse-slow" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col items-center justify-center text-center">
        <div className="max-w-6xl w-full">
          {/* Headline */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-5 tracking-tight animate-fade-up">
            Integrated Bus Management System
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 sm:mb-5 md:mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Live Tracking · Smart Fleet · Total Control
          </p>

          {/* Description */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground/90 max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            A complete, intelligent transportation ecosystem for schools and organizations — enabling
            real-time tracking, fleet optimization, and secure access, all in one unified dashboard.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="text-base sm:text-lg px-8 py-5 sm:py-6 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-semibold shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition-all hover:scale-[1.03]"
            >
              Request Live Demo
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#features")}
              className="text-base sm:text-lg px-8 py-5 sm:py-6 rounded-xl border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-300 transition-all hover:scale-[1.02]"
            >
              Explore Features
            </Button>
          </div>

          {/* Feature Highlights */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              {
                icon: MapPin,
                title: "Real-Time Tracking",
                desc: "Monitor every bus with GPS precision",
              },
              {
                icon: Zap,
                title: "Fleet Intelligence",
                desc: "AI insights for smarter operations",
              },
              {
                icon: Shield,
                title: "Role-Based Access",
                desc: "Secure and scalable control",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md px-6 py-8 shadow-md transition-all duration-300 hover:shadow-[0_8px_30px_rgba(250,204,21,0.15)] hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-gradient-to-br from-yellow-400/30 to-amber-500/10 p-3">
                    <f.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-2">{f.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
