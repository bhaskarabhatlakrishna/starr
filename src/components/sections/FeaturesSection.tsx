"use client";

import { useState, useRef, useLayoutEffect } from "react";
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
      "Easily manage multi-branch operations from a single dashboard. Assign admins, configure locations, and enforce security policies for each branch independently with centralized reporting.",
  },
  {
    icon: Users,
    title: "User & Role Management",
    description:
      "Granular access control with custom roles, permissions, and security policies.",
    details:
      "Create and assign custom roles like Admin, Staff, Driver, or Parent. Secure access with fine-grained permissions, 2FA, and detailed audit logs to ensure operational integrity.",
  },
  {
    icon: MapPin,
    title: "Route & Geofence Setup",
    description:
      "Google Maps integration for route planning, stop management, and geofencing alerts.",
    details:
      "Plan and visualize bus routes in real-time. Create custom geofences to monitor location accuracy and send alerts for deviations or delays.",
  },
  {
    icon: Clock,
    title: "Trip Timing & Scheduling",
    description:
      "Automated scheduling with real-time updates, delay notifications, and time optimization.",
    details:
      "Build recurring trip schedules with predictive timing. Receive instant notifications for delays or route changes to keep operations efficient.",
  },
  {
    icon: Bus,
    title: "Bus & Vehicle Database",
    description:
      "Complete vehicle profiles with registration, insurance, and maintenance records.",
    details:
      "Maintain a detailed vehicle database with all documentation and service logs. Set auto-reminders for insurance and maintenance renewals.",
  },
  {
    icon: UserCheck,
    title: "Passenger Management",
    description:
      "Digital passenger database with routes, stops, attendance tracking, and contact info.",
    details:
      "Maintain student and passenger data with route mapping, attendance tracking, and instant parent communication tools.",
  },
  {
    icon: Bell,
    title: "Live ETA & Notifications",
    description:
      "Real-time arrival predictions with automated SMS, email, and push notifications.",
    details:
      "Real-time GPS tracking and smart ETA notifications for parents, drivers, and admins with custom message templates.",
  },
];

export const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [popupRect, setPopupRect] = useState<{ top: number; left: number; width: number } | null>(null);
  const [adjustedTop, setAdjustedTop] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const popupRef = useRef<HTMLDivElement | null>(null);

  // Handles click for mobile/tablet anchored popup
  const handleLearnMore = (index: number) => {
    if (window.innerWidth >= 1024) {
      // Desktop inline
      setSelectedFeature((prev) => (prev === index ? null : index));
      setPopupRect(null);
      return;
    }

    const card = cardRefs.current[index];
    if (card) {
      const rect = card.getBoundingClientRect();
      setPopupRect({
        top: rect.bottom - 40, // align popup slightly above button
        left: rect.left + 8,
        width: rect.width - 16,
      });
      setSelectedFeature(index);
      setAdjustedTop(null);
    }
  };

  // Adjust popup if it overflows viewport
  useLayoutEffect(() => {
    if (!popupRect || selectedFeature === null || !popupRef.current) return;
    const popupEl = popupRef.current;
    const popupHeight = popupEl.offsetHeight;
    const viewportHeight = window.innerHeight;

    let top = popupRect.top;
    const overflowBottom = top + popupHeight + 16 - viewportHeight;

    if (overflowBottom > 0) {
      top = Math.max(12, popupRect.top - overflowBottom - 12);
    }

    setAdjustedTop(top);
  }, [popupRect, selectedFeature]);

  const closePopup = () => {
    setSelectedFeature(null);
    setPopupRect(null);
    setAdjustedTop(null);
  };

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
            const isExpanded = selectedFeature === index && window.innerWidth >= 1024;

            return (
              <div key={index} ref={(el) => { cardRefs.current[index] = el; }}>
                <Card
                  className={`group relative p-6 sm:p-8 rounded-2xl border border-border/40 bg-card/70 backdrop-blur-md shadow-sm hover:shadow-[0_8px_30px_rgba(250,204,21,0.15)] transition-all duration-300 ${isExpanded
                    ? "lg:col-span-2 xl:col-span-3 bg-card shadow-lg"
                    : "hover:-translate-y-1"
                    }`}
                >
                  <div className="flex flex-col items-start">
                    <div className="mb-5 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-yellow-400/20 to-amber-500/10 group-hover:from-yellow-400/30 group-hover:to-amber-500/20 transition-all">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-400" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-yellow-400 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleLearnMore(index)}
                      className="mt-auto text-sm sm:text-base px-5 py-2 rounded-lg bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-medium shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:scale-[1.03] transition-all border-none"
                    >
                      {isExpanded ? "Close" : "Learn More →"}
                    </Button>

                    {/* Desktop Inline Details */}
                    {isExpanded && (
                      <div className="mt-6 w-full">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {feature.details}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Popup */}
      {selectedFeature !== null && popupRect && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
            onClick={closePopup}
          />
          <div
            ref={popupRef}
            className="fixed z-50 rounded-2xl bg-white dark:bg-[#0b1220] border border-border/40 shadow-xl overflow-hidden transition-all"
            style={{
              left: popupRect.left,
              top: adjustedTop ?? popupRect.top,
              width: popupRect.width,
              maxHeight: "80vh",
            }}
          >
            <div className="relative p-5 overflow-y-auto" style={{ maxHeight: "80vh" }}>
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 text-muted-foreground hover:text-yellow-400 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400/20 to-amber-500/10">
                    {(() => {
                      const Icon = features[selectedFeature].icon;
                      return <Icon className="w-6 h-6 text-yellow-400" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{features[selectedFeature].title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {features[selectedFeature].description}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-foreground leading-relaxed">
                  {features[selectedFeature].details}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default FeaturesSection;
