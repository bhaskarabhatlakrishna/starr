"use client";

import { useState } from "react";
import {
  Building,
  Users,
  MapPin,
  Clock,
  Bus,
  UserCheck,
  Bell,
  X,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Building,
    title: "Organization & Branch Management",
    description:
      "Multi-location support with hierarchical organization structure and centralized control.",
    details:
      "Manage your entire organizational hierarchy effortlessly. Add and configure multiple branches, assign administrators, and sync operations with central dashboards in real time. Supports region-specific settings and access isolation for enhanced security.",
  },
  {
    icon: Users,
    title: "User & Role Management",
    description:
      "Granular access control with custom roles, permissions, and security policies.",
    details:
      "Define roles like Admin, Driver, Staff, and Parents with customizable permissions. Advanced RBAC ensures users can only access what they are authorized for. Includes login tracking, two-factor authentication, and audit trails.",
  },
  {
    icon: MapPin,
    title: "Route & Geofence Setup",
    description:
      "Google Maps integration for route planning, stop management, and geofencing alerts.",
    details:
      "Visualize and manage routes directly on an interactive map. Create custom geofences to trigger alerts for route deviation, delays, or safety violations. Supports both dynamic and static route scheduling.",
  },
  {
    icon: Clock,
    title: "Trip Timing & Scheduling",
    description:
      "Automated scheduling with real-time updates, delay notifications, and time optimization.",
    details:
      "Set up recurring trip schedules with smart suggestions based on route performance and vehicle availability. The system automatically calculates optimal departure and arrival times with predictive delay alerts.",
  },
  {
    icon: Bus,
    title: "Bus & Vehicle Database",
    description:
      "Complete vehicle profiles with registration, insurance, maintenance records, and documentation.",
    details:
      "Maintain all vehicle data including registration, fitness, insurance expiry, driver assignment, and maintenance logs. Smart reminders for upcoming renewals or service requirements.",
  },
  {
    icon: UserCheck,
    title: "Passenger Management",
    description:
      "Digital passenger database with routes, stops, attendance tracking, and contact information.",
    details:
      "Centralized passenger directory integrated with route, trip, and attendance systems. Real-time updates, attendance via RFID, and communication channels for parents and school management.",
  },
  {
    icon: Bell,
    title: "Live ETA & Notifications",
    description:
      "Real-time arrival predictions with automated SMS, email, and push notifications.",
    details:
      "Accurate ETA calculations powered by GPS and AI algorithms. Automatically notify parents and staff on delays, arrivals, or emergency alerts. Fully configurable notification templates.",
  },
];

export const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  return (
    <section
      id="features"
      className="relative flex flex-col items-center justify-center min-h-screen py-20 sm:py-24 lg:py-28 bg-secondary/20 scroll-smooth"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
            Core System Features
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Everything you need to power a modern, intelligent transportation system
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isExpanded = selectedFeature === index;
            return (
              <Card
                key={index}
                className={`group relative p-6 sm:p-8 rounded-2xl border border-border/40 bg-card/70 backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgba(250,204,21,0.15)] transition-all duration-300 hover:-translate-y-1 ${isExpanded ? "lg:col-span-2 xl:col-span-3 bg-card shadow-lg" : ""
                  }`}
              >
                <div className="flex flex-col items-start">
                  {/* Icon */}
                  <div className="mb-5 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-yellow-400/20 to-amber-500/10 group-hover:from-yellow-400/30 group-hover:to-amber-500/20 transition-all">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-yellow-400 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Learn More Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setSelectedFeature(isExpanded ? null : index)
                    }
                    className="mt-auto text-sm sm:text-base px-5 py-2 rounded-lg bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-medium shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:scale-[1.03] transition-all border-none"
                  >
                    {isExpanded ? "Close" : "Learn More →"}
                  </Button>

                  {/* Expanded Content (Desktop / Tablet Inline) */}
                  {isExpanded && (
                    <div className="mt-6 w-full animate-fade-in">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {feature.details}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Popup for Mobile */}
      {selectedFeature !== null && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative mx-4 w-full max-w-md rounded-2xl bg-white dark:bg-[#0b1220] p-6 shadow-xl border border-border/40 overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-yellow-400 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-start">
              <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400/20 to-amber-500/10">
                {(() => {
                  const Icon = features[selectedFeature].icon;
                  return <Icon className="w-8 h-8 text-yellow-400" />;
                })()}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                {features[selectedFeature].title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {features[selectedFeature].description}
              </p>
              <p className="text-base text-foreground leading-relaxed">
                {features[selectedFeature].details}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturesSection;
