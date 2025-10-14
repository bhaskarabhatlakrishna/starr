"use client";

import { Building, Users, MapPin, Clock, Bus, UserCheck, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Building,
    title: "Organization & Branch Management",
    description:
      "Multi-location support with hierarchical organization structure and centralized control.",
  },
  {
    icon: Users,
    title: "User & Role Management",
    description:
      "Granular access control with custom roles, permissions, and security policies.",
  },
  {
    icon: MapPin,
    title: "Route & Geofence Setup",
    description:
      "Google Maps integration for route planning, stop management, and geofencing alerts.",
  },
  {
    icon: Clock,
    title: "Trip Timing & Scheduling",
    description:
      "Automated scheduling with real-time updates, delay notifications, and time optimization.",
  },
  {
    icon: Bus,
    title: "Bus & Vehicle Database",
    description:
      "Complete vehicle profiles with registration, insurance, maintenance records, and documentation.",
  },
  {
    icon: UserCheck,
    title: "Passenger Management",
    description:
      "Digital passenger database with routes, stops, attendance tracking, and contact information.",
  },
  {
    icon: Bell,
    title: "Live ETA & Notifications",
    description:
      "Real-time arrival predictions with automated SMS, email, and push notifications.",
  },
];

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative flex flex-col items-center justify-center min-h-screen py-20 sm:py-24 lg:py-28 bg-secondary/20"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
            Core System Features
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Everything you need to power a modern, intelligent transportation system
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl border border-border/40 bg-card/70 backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgba(250,204,21,0.15)] transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col items-start">
                {/* Icon */}
                <div className="mb-5 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-yellow-400/20 to-amber-500/10 group-hover:from-yellow-400/30 group-hover:to-amber-500/20 transition-all">
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-auto text-sm sm:text-base px-5 py-2 rounded-lg bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-medium shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:scale-[1.03] transition-all border-none"
                >
                  Learn More →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
