"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BusFront, UserCheck } from "lucide-react"; // modern realistic vector icons

export const MobileAppsSection = () => {
  const apps = [
    {
      title: "Operational Staff App",
      icon: BusFront,
      image: "/images/mobile-apps.jpg",
      points: [
        "View assigned bus and route details",
        "Access personal schedules & duties",
        "Report incidents with GPS & images",
        "Works offline in low-signal areas",
      ],
      btn: "Download Driver App",
    },
    {
      title: "End-User App",
      icon: UserCheck,
      image: "/images/mobile-apps.jpg",
      points: [
        "Track buses in real-time with live map",
        "Get instant ETA notifications & alerts",
        "View stop details and route insights",
        "Pay fees and request changes easily",
      ],
      btn: "Download Parent App",
    },
  ];

  return (
    <section
      id="mobile"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-background py-16 sm:py-20 md:py-24"
    >
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-yellow-50/10" />
      <div className="absolute top-[10%] left-[-10%] w-[250px] h-[250px] bg-gradient-to-br from-yellow-400/30 to-amber-500/10 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-gradient-to-tr from-yellow-400/25 to-amber-400/10 blur-3xl rounded-full animate-pulse-slow" />

      {/* Title Section */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
          Mobile Apps for Every Role
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Seamless native apps built for drivers, parents, and staff — empowering control and connectivity on the go.
        </p>
      </div>

      {/* Apps Grid */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {apps.map((app, i) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-card/60 backdrop-blur-xl rounded-3xl border border-border/40 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(250,204,21,0.15)] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image Preview */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={app.image}
                    alt={app.title}
                    width={1000}
                    height={600}
                    className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>

                {/* Icon + Title */}
                <div className="flex items-center mb-5">
                  <div className="bg-gradient-to-br from-yellow-400/20 to-amber-400/10 w-14 h-14 rounded-xl flex items-center justify-center mr-4 shadow-inner">
                    <Icon className="h-7 w-7 text-yellow-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">{app.title}</h3>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {app.points.map((p, j) => (
                    <li key={j} className="flex items-start text-muted-foreground">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="mt-auto w-full rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-semibold shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] hover:scale-[1.02] transition-all"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {app.btn}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
