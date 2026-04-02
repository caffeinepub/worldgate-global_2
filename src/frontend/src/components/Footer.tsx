import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp, SiX } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/uploads/chatgpt_image_mar_18_2026_03_26_41_pm-019d2e82-7349-7377-ac4e-7ab9541f2992-2.png"
                alt="WorldGate Global Logo"
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-lg">
                  WorldGate Global
                </span>
                <span className="text-gold text-xs font-medium">
                  Immigrations &amp; Visa Service
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              India's trusted immigration & visa consultancy. We help you
              achieve your global dreams — work, study, travel, or settle
              abroad.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-colors duration-200"
                aria-label="X"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                "Tourist & Visitor Visas",
                "Immigration Consultancy",
                "Work Visas & Jobs",
                "Hajj & Umrah Packages",
                "Document Support",
                "Skilled Worker Guidance",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Countries", to: "/countries" },
                { label: "Testimonials", to: "/testimonials" },
                { label: "Blog", to: "/blog" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  WorldGate Global, Hyderabad, Telangana, India – 500001
                </span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+919999999999" className="hover:text-gold">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="mailto:info@worldgateglobal.com"
                  className="hover:text-gold"
                >
                  info@worldgateglobal.com
                </a>
              </li>
              <li className="flex gap-2">
                <MessageCircle className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-white/50 gap-2">
          <span>
            © {year} WorldGate Global Immigrations &amp; Visa Service. All
            rights reserved.
          </span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
