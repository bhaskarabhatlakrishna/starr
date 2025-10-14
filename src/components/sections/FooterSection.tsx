"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, ChevronUp } from "lucide-react";
import Image from "next/image";

export const FooterSection = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-border/50 text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-14 md:py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 text-center lg:text-left">
          {/* Logo + Info */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center space-x-3 mb-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Ramki Technologies Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl font-bold text-black tracking-wide">
                  STAR
                </span>
                <p className="text-sm text-muted-foreground font-medium">
                  Ramki Technologies Pvt. Ltd.
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-relaxed">
              Headquartered at Hyderabad, Telangana, Ramki Technologies Pvt Ltd is a flagship
              company founded in 2018, delivering streamlined and customizable solutions to our
              clients.
            </p>

            <a
              href="#"
              className="mt-5 inline-block text-sm font-medium text-black bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all hover:scale-[1.03]"
            >
              Download Our Brochure
            </a>
          </div>

          {/* Site Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-yellow-400 mb-3">Site Links</h4>
              <ul className="space-y-1">
                {[
                  "Home",
                  "About",
                  "CEO's Profile",
                  "Management",
                  "Pragati VTS",
                  "Pragati Shop Links",
                  "Pragati Secure IN",
                  "Pragati MTS",
                  "Pragati Kiranam",
                  "Pragati Bharath",
                  "Careers",
                  "Contact Us",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-yellow-400 mb-3">Policies</h4>
              <ul className="space-y-1">
                {[
                  "Return Policy",
                  "Privacy Policy",
                  "Product Warranty",
                  "Product Return Policy",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-yellow-400 mb-3">Office Address</h4>
              <p className="text-sm leading-relaxed">
                Ramki Technologies Pvt Ltd <br />
                1-8-448, Lakshmi Building, 5th Floor, <br />
                S P Road, Begumpet, Hyderabad - 500003
              </p>
              <p className="mt-3 text-sm">
                📞 +91 99590 45474 <br />
                ✉️ info@ramkigroup.com <br />
                🌐 www.ramkitechnologies.com
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-border/30" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
          <p className="text-center sm:text-left">
            © 2018 Ramki Technologies Pvt. Ltd. All Rights Reserved.
          </p>

          {/* Theme Toggle */}
          <Button
            onClick={toggleTheme}
            className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-medium px-5 py-2 rounded-lg shadow-md hover:scale-[1.03] transition-all"
          >
            {theme === "dark" ? (
              <>
                <Sun className="h-4 w-4 mr-2" />
                Light Mode
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 mr-2" />
                Dark Mode
              </>
            )}
          </Button>

          {/* Back to top */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-yellow-400 transition-all"
          >
            Back to top
            <ChevronUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
