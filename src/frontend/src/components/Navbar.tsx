import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Countries", to: "/countries" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/uploads/chatgpt_image_mar_18_2026_03_26_41_pm-019d2e82-7349-7377-ac4e-7ab9541f2992-2.png"
              alt="WorldGate Global Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-navy text-lg font-display hidden sm:block">
                WorldGate Global
              </span>
              <span className="text-gold text-xs font-medium hidden sm:block">
                Immigrations &amp; Visa Service
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  currentPath === link.to ? "text-gold" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button
              type="button"
              data-ocid="nav.consultation.button"
              onClick={() => setBookingOpen(true)}
              className="btn-gold text-sm"
            >
              Get a Free Consultation
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-navy"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-2 text-sm font-medium text-foreground hover:text-gold"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setBookingOpen(true);
                setMenuOpen(false);
              }}
              className="mt-3 w-full btn-gold text-sm"
            >
              Get a Free Consultation
            </button>
          </div>
        )}
      </header>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
