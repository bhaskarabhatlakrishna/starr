"use client";

import { Activity, Fuel, Wrench, CircleDot, AlertTriangle, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const fleetModules = [
  {
    icon: Activity,
    title: "Vehicle Health Dashboard",
    description:
      "Track odometer readings, trip data, route utilization, and vehicle performance metrics in real-time.",
  },
  {
    icon: Fuel,
    title: "Fuel Management",
    description:
      "Monitor refills, calculate mileage, detect abnormal consumption, and optimize fuel expenses with analytics.",
  },
  {
    icon: Wrench,
    title: "Service & Maintenance",
    description:
      "Automate maintenance schedules, track service records, manage costs, and prevent downtime proactively.",
  },
  {
    icon: CircleDot,
    title: "Tyre Management",
    description:
      "Record tyre lifecycles, track wear, monitor repairs and replacements, and reduce operational costs.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Management",
    description:
      "Drivers can log incidents instantly with GPS, photos, timestamps, and detailed notes for quick resolution.",
  },
];

export const FleetSection = () => {
  return (
    <section
      id="fleet"
      className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-gradient-to-b from-background via-background/95 to-background py-16 sm:py-20 md:py-24"
    >
      {/* Soft background gradient / flare */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-yellow-400/20 to-amber-600/10 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-yellow-300/15 to-amber-400/10 blur-3xl rounded-full animate-pulse-slow" />
      </div>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-14 md:mb-16 px-4">
        <div className="inline-flex items-center gap-3 mb-4">
          <Star className="h-8 w-8 text-yellow-400 animate-spin-slow" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Fleet Intelligence
          </h2>
          <Star className="h-8 w-8 text-yellow-400 animate-spin-slow" />
        </div>
        <p className="text-lg sm:text-xl text-yellow-400 font-semibold mb-2">Beyond Tracking</p>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform your fleet operations into a smart, connected ecosystem powered by analytics and automation.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {fleetModules.map((module, index) => (
          <Card
            key={index}
            className="relative group p-8 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md hover:shadow-[0_8px_30px_rgba(250,204,21,0.15)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-yellow-400/20 to-amber-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
              <module.icon className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">{module.description}</p>
            <Button
              variant="default"
              size="sm"
              className="w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-semibold shadow-[0_0_15px_rgba(250,204,21,0.2)] hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all hover:scale-[1.03]"
            >
              Explore Module →
            </Button>
          </Card>
        ))}

        {/* Highlight Card */}
        <Card className="p-8 rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-yellow-400/5 to-amber-400/5 backdrop-blur-md shadow-[0_0_25px_rgba(250,204,21,0.05)] hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300 col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
          <div>
            <Star className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Complete Fleet Control</h3>
            <p className="text-muted-foreground mb-5">
              Experience seamless integration across all fleet modules — analytics, performance, and safety in one place.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
                Reduce operational costs up to 30%
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
                Predict and prevent breakdowns
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
                Optimize maintenance schedules
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
                Track every expense digitally
              </li>
            </ul>
          </div>

          <Button className="w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-semibold hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all hover:scale-[1.03]">
            View All Features
          </Button>
        </Card>
      </div>
    </section>
  );
};
