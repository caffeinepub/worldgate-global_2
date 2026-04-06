import { Link } from "@tanstack/react-router";
import {
  Briefcase,
  CheckCircle,
  ChevronRight,
  FileText,
  Globe2,
  MapPin,
  Plane,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import BookingModal from "../components/BookingModal";

const STAR_NUMS = [1, 2, 3, 4, 5] as const;

const services = [
  {
    icon: Plane,
    title: "Tourist & Visitor Visas",
    desc: "USA, UK, Schengen, Canada, Ireland & Gulf tourist visas — we handle the documentation end-to-end.",
    link: "/services",
  },
  {
    icon: FileText,
    title: "Immigration Consultancy",
    desc: "Canada PR, Australia PR, Germany Opportunity Card and skilled worker pathways explained clearly.",
    link: "/services",
  },
  {
    icon: Briefcase,
    title: "Work Visas & Jobs",
    desc: "UK work visa, Europe work permits, Germany Chancenkarte, and Gulf job visas with job assistance.",
    link: "/services",
  },
  {
    icon: Star,
    title: "Hajj & Umrah",
    desc: "Complete Hajj & Umrah packages with visa processing, accommodation, food and travel support.",
    link: "/services",
  },
];

const stats = [
  { icon: CheckCircle, number: "10,000+", label: "Successful Applications" },
  { icon: TrendingUp, number: "15+", label: "Years Experience" },
  { icon: Users, number: "98%", label: "Client Satisfaction" },
  { icon: Globe2, number: "50+", label: "Destination Countries" },
];

const countries = [
  { code: "ca", name: "Canada" },
  { code: "gb", name: "UK" },
  { code: "ie", name: "Ireland" },
  { code: "de", name: "Germany" },
  { code: "us", name: "USA" },
  { code: "au", name: "Australia" },
  { code: "ae", name: "UAE" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "qa", name: "Qatar" },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Hyderabad",
    rating: 5,
    text: "WorldGate Global made my Canada PR process incredibly smooth. Their team guided me at every step and I got my PR in just 14 months!",
    service: "Canada PR",
  },
  {
    name: "Priya Nair",
    city: "Kochi",
    rating: 5,
    text: "I got my UK work visa approved on the first attempt. The documentation support they provided was exceptional and professional.",
    service: "UK Work Visa",
  },
  {
    name: "Mohammed Faiz",
    city: "Mumbai",
    rating: 5,
    text: "Excellent Umrah package — everything was arranged perfectly from visa to accommodation. Highly recommend for Hajj & Umrah services.",
    service: "Hajj & Umrah",
  },
];

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    document.title =
      "WorldGate Global — Your Trusted Partner for Global Visas & Immigration";
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "WorldGate Global is India's premier immigration consultancy. We help you get visas and immigrate to Canada, UK, Australia, USA, Europe and Gulf countries.";
  }, []);

  return (
    <main>
      {/* Hero — full-screen background image */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/uploads/chatgpt_image_mar_19_2026_11_26_52_am-019d2e88-09bc-741c-bbe6-a1c9c6bf67de-1.png')",
        }}
        data-ocid="hero.section"
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow text-gold/90 tracking-widest mb-4">
              India's Premier Immigration Consultancy
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
              Your Trusted Partner for{" "}
              <span className="text-gold">Global Visas</span> &amp; Immigration
            </h1>
            <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              We help Indians achieve their international dreams — whether it's
              working abroad, studying overseas, settling permanently, or making
              a spiritual journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                data-ocid="hero.consultation.button"
                onClick={() => setBookingOpen(true)}
                className="btn-gold text-base"
              >
                Book Free Consultation
              </button>
              <Link
                to="/contact"
                data-ocid="hero.apply.button"
                className="btn-outline-white text-base"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white" data-ocid="services.section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-eyebrow">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Comprehensive Immigration Solutions
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card border border-border card-hover"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">
                  {svc.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {svc.desc}
                </p>
                <Link
                  to={svc.link}
                  className="text-gold text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section
        className="bg-gradient-to-r from-navy to-navy-light py-16"
        data-ocid="stats.section"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-12">
            Why Choose <span className="text-gold">WorldGate Global?</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-gold mb-1">
                  {s.number}
                </div>
                <div className="text-white/80 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Strip */}
      <section className="py-16 bg-secondary/30" data-ocid="countries.section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-eyebrow">Global Reach</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy">
              Countries We Serve
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((c) => (
              <Link
                to="/countries"
                key={c.name}
                className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-xs border border-border hover:border-gold hover:shadow-md transition-all duration-200"
              >
                <img
                  src={`https://flagcdn.com/w40/${c.code}.png`}
                  alt={c.name}
                  className="w-7 h-5 object-cover rounded-sm"
                />
                <span className="font-medium text-navy text-sm">{c.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/countries"
              className="btn-gold inline-block text-sm"
              data-ocid="countries.view_all.button"
            >
              View All Countries
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white" data-ocid="testimonials.section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-eyebrow">Client Stories</p>
            <h2 className="text-3xl font-bold text-navy">
              Hear From Our Clients
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card border border-border"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="text-gold text-4xl leading-none mb-3">
                  &ldquo;
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t.text}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 text-gold font-bold flex items-center justify-center text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {t.city}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {STAR_NUMS.slice(0, t.rating).map((n) => (
                      <Star key={n} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/testimonials"
              className="btn-gold inline-block text-sm"
              data-ocid="testimonials.view_all.button"
            >
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="bg-gradient-to-r from-navy to-navy-light py-20"
        data-ocid="cta.section"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your{" "}
            <span className="text-gold">Global Journey?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Let our expert consultants guide you every step of the way. Free
            initial consultation — no obligations.
          </p>
          <button
            type="button"
            data-ocid="cta.consultation.button"
            onClick={() => setBookingOpen(true)}
            className="btn-gold text-base"
          >
            Book Free Consultation
          </button>
        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
