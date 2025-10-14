"use client";

import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";
import Image from "next/image";

export const MobileAppsSection = () => {
  return (
    <section
      id="mobile"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background py-16 sm:py-20 md:py-24"
    >
      {/* Background gradient flare */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-yellow-50/10" />
      <div className="absolute top-[10%] left-[-10%] w-[250px] h-[250px] bg-gradient-to-br from-yellow-400/30 to-amber-500/10 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-gradient-to-tr from-yellow-400/25 to-amber-400/10 blur-3xl rounded-full animate-pulse-slow" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Heading Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Mobile Apps for Every Role
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamless native apps built for drivers, parents, and staff — empowering control and connectivity on the go.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image Section */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/mobile-apps.jpg"
                alt="Mobile app preview"
                width={1200}
                height={800}
                className="object-cover rounded-3xl"
              />
              <div className="absolute bottom-4 right-4 bg-yellow-400/90 text-black font-semibold px-5 py-2 rounded-xl shadow-lg backdrop-blur-md">
                Available on iOS & Android
              </div>
            </div>
          </div>

          {/* App Details */}
          <div className="space-y-8 md:space-y-10">
            {[
              {
                title: "Operational Staff App",
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
                points: [
                  "Track buses in real-time with live map",
                  "Get instant ETA notifications & alerts",
                  "View stop details and route insights",
                  "Pay fees and request changes easily",
                ],
                btn: "Download Parent App",
              },
            ].map((app, i) => (
              <div
                key={i}
                className="group bg-card/60 backdrop-blur-xl rounded-2xl border border-border/40 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(250,204,21,0.15)] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-5">
                  <div className="bg-yellow-400/15 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Smartphone className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">{app.title}</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {app.points.map((p, j) => (
                    <li key={j} className="flex items-start text-muted-foreground">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="w-full rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-semibold shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] hover:scale-[1.02] transition-all"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {app.btn}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
