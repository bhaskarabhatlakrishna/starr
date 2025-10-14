"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    demoDate: "",
    modules: [] as string[],
    message: "",
  });

  const modules = [
    "Real-Time Tracking",
    "Fleet Management",
    "Mobile Apps",
    "Analytics & Reports",
    "Role-Based Access",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      organization: "",
      email: "",
      phone: "",
      demoDate: "",
      modules: [],
      message: "",
    });
  };

  const handleModuleToggle = (module: string) => {
    setFormData((prev) => ({
      ...prev,
      modules: prev.modules.includes(module)
        ? prev.modules.filter((m) => m !== module)
        : [...prev.modules, module],
    }));
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center items-center min-h-screen bg-background py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/10 via-background to-background" />
      <div className="absolute top-1/3 left-[-10%] w-[250px] h-[250px] bg-gradient-to-tr from-yellow-400/30 to-amber-500/10 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-gradient-to-bl from-yellow-400/20 to-amber-500/10 blur-3xl rounded-full animate-pulse-slow" />

      <div className="relative container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Book a Live Demo
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the next generation of fleet and transport management with live tracking and smart automation.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                title: "Email Us",
                desc: "info@ramkitech.com",
                href: "mailto:info@ramkitech.com",
              },
              {
                icon: Phone,
                title: "Call Us",
                desc: "+91 98765 43210",
                href: "tel:+919876543210",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                desc: "Ramki Technologies Pvt. Ltd., Bangalore, Karnataka, India",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-6 backdrop-blur-md border border-border/40 bg-card/50 transition-all hover:shadow-[0_8px_30px_rgba(250,204,21,0.15)] hover:-translate-y-1"
              >
                <div className="flex flex-col items-start">
                  <item.icon className="h-8 w-8 text-yellow-400 mb-3" />
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-primary hover:text-yellow-400 transition-colors"
                    >
                      {item.desc}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-6 sm:p-8 md:p-10 backdrop-blur-md border border-border/40 bg-card/60 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Organization */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Organization *
                  </label>
                  <Input
                    required
                    placeholder="Your organization"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <Input
                    required
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Preferred Demo Date
                </label>
                <Input
                  type="date"
                  value={formData.demoDate}
                  onChange={(e) =>
                    setFormData({ ...formData, demoDate: e.target.value })
                  }
                />
              </div>

              {/* Modules */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Interested Modules
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {modules.map((module) => (
                    <label
                      key={module}
                      className="flex items-center space-x-2 cursor-pointer text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={formData.modules.includes(module)}
                        onChange={() => handleModuleToggle(module)}
                        className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                      />
                      <span>{module}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button
                  type="submit"
                  className="flex-1 text-base px-8 py-5 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-semibold shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition-all hover:scale-[1.02]"
                >
                  Request Demo
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 text-base px-8 py-5 rounded-xl border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-300 transition-all hover:scale-[1.02]"
                >
                  Contact Sales
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
