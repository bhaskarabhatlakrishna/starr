"use client";

import { BarChart3, TrendingUp, PieChart, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const analyticsFeatures = [
  {
    icon: BarChart3,
    title: "Trip Performance Reports",
    description: "Optimize routes and analyze trip efficiency in real time.",
  },
  {
    icon: TrendingUp,
    title: "Fuel Efficiency Analytics",
    description: "Monitor consumption patterns and reduce operational costs.",
  },
  {
    icon: PieChart,
    title: "Maintenance & Cost Reports",
    description: "Predict costs, track expenses, and manage maintenance proactively.",
  },
  {
    icon: FileText,
    title: "Incident & Downtime Analysis",
    description: "Detect safety patterns and minimize downtime intelligently.",
  },
];

export const AnalyticsSection = () => {
  return (
    <section
      id="analytics"
      className="relative flex items-center justify-center min-h-screen py-16 sm:py-20 md:py-24 bg-background overflow-hidden"
    >
      {/* Background Gradient Flares */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] bg-gradient-to-br from-yellow-400/40 to-yellow-600/10 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[5%] right-[-10%] w-[350px] h-[350px] bg-gradient-to-tr from-yellow-400/30 to-amber-500/20 blur-3xl rounded-full animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Data-Driven Insights
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
            Unlock powerful analytics and reporting to make smarter, faster fleet management decisions.
          </p>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative w-full order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(250,204,21,0.15)]">
              <Image
                src="/images/analytics-dashboard.jpg"
                alt="Analytics dashboard showcasing data insights"
                fill
                className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="order-1 lg:order-2 space-y-6">
            {analyticsFeatures.map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 p-5 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-md hover:border-yellow-400/40 transition-all duration-300 hover:shadow-[0_4px_25px_rgba(250,204,21,0.15)] hover:-translate-y-1"
              >
                <div className="flex-shrink-0 bg-gradient-to-br from-yellow-400/30 to-amber-500/20 rounded-xl p-3">
                  <feature.icon className="h-7 w-7 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { label: "Real-Time", sub: "Live dashboard updates" },
            { label: "Custom", sub: "Configurable reports" },
            { label: "Export", sub: "PDF, Excel, CSV formats" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card/50 border border-border/40 backdrop-blur-md hover:border-yellow-400/30 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">
                {stat.label}
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Button
            size="lg"
            className="px-8 py-5 rounded-xl text-lg font-semibold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition-all hover:scale-[1.03]"
          >
            View Sample Reports
          </Button>
        </div>
      </div>
    </section>
  );
};
