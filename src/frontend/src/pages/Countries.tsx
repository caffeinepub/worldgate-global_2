import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const countries = [
  {
    flag: "🇨🇦",
    name: "Canada",
    visaTypes: [
      "Express Entry PR",
      "Provincial Nominee (PNP)",
      "Student Visa",
      "Visitor Visa",
      "Work Permit",
    ],
    desc: "Canada is one of the top destinations for Indian immigrants, offering multiple pathways to permanent residency through the Express Entry system and Provincial Nominee Programs.",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    visaTypes: [
      "Skilled Worker Visa",
      "Visitor Visa",
      "Student Visa",
      "Family Visa",
    ],
    desc: "The UK's Skilled Worker visa allows qualified professionals from India to live and work in Britain. Points-based system with clear requirements and a path to settlement.",
  },
  {
    flag: "🇮🇪",
    name: "Ireland",
    visaTypes: [
      "Critical Skills Work Permit",
      "General Work Permit",
      "Visitor Visa",
    ],
    desc: "Ireland is a growing destination for Indian IT professionals and graduates. The Critical Skills Work Permit offers a fast-track to residency for in-demand roles.",
  },
  {
    flag: "🇪🇺",
    name: "Europe / Schengen",
    visaTypes: [
      "Schengen Tourist Visa",
      "Germany Opportunity Card",
      "Work Permits",
      "Portugal D7 Visa",
    ],
    desc: "Europe offers multiple immigration pathways including Germany's new Opportunity Card (Chancenkarte), skilled worker permits, and the Schengen tourist visa covering 26 countries.",
  },
  {
    flag: "🇺🇸",
    name: "United States",
    visaTypes: ["B1/B2 Visitor Visa", "F1 Student Visa", "H1B Work Visa"],
    desc: "The USA B1/B2 visitor visa is one of the most applied-for visas from India. Our consultants help you prepare a strong application with proper documentation.",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    visaTypes: [
      "Skilled Independent (189)",
      "Employer Sponsored (186)",
      "Student Visa",
      "Visitor Visa",
    ],
    desc: "Australia welcomes skilled migrants through its points-tested system. High demand for healthcare, engineering, and IT professionals from India.",
  },
  {
    flag: "🇦🇪",
    name: "UAE (Dubai)",
    visaTypes: [
      "Work Visa (Employment)",
      "Freelance/Investor Visa",
      "Tourist Visa",
    ],
    desc: "Dubai remains the top Gulf destination for Indian workers. Wide range of sectors from construction to finance, IT, healthcare, and hospitality.",
  },
  {
    flag: "🇸🇦",
    name: "Saudi Arabia",
    visaTypes: ["Iqama Work Visa", "Hajj Visa", "Umrah Visa", "Tourist Visa"],
    desc: "Saudi Arabia's Vision 2030 is creating thousands of new job opportunities. We process all Saudi work visa categories including Iqama for long-term stays.",
  },
  {
    flag: "🇶🇦",
    name: "Qatar",
    visaTypes: ["Work Visa", "Tourist Visa", "Residence Permit"],
    desc: "Qatar has a growing economy with demand for skilled Indian workers in construction, energy, IT, and hospitality sectors. We facilitate all Qatar work visas.",
  },
  {
    flag: "🇴🇲",
    name: "Oman",
    visaTypes: ["Work Visa", "Tourist Visa", "eVisa"],
    desc: "Oman offers employment opportunities in oil & gas, engineering, healthcare, and hospitality. We provide end-to-end support for Oman work visas.",
  },
  {
    flag: "🇰🇼",
    name: "Kuwait",
    visaTypes: ["Work Visa", "Visitor Visa"],
    desc: "Kuwait has significant demand for Indian professionals especially in construction, engineering, and medical sectors. We handle all Kuwait visa categories.",
  },
];

export default function Countries() {
  useEffect(() => {
    document.title = "Countries We Serve — WorldGate Global";
  }, []);

  return (
    <main>
      <section
        className="bg-gradient-to-br from-navy to-navy-light py-20"
        data-ocid="countries.hero.section"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="section-eyebrow text-gold/80">Global Reach</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
              Countries We Serve
            </h1>
            <p className="text-white/70 mt-4 max-w-xl mx-auto">
              We provide visa and immigration services to 50+ countries. Explore
              your destination of choice below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white" data-ocid="countries.list.section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card border border-border card-hover"
                data-ocid={`countries.item.${i + 1}`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-5xl">{c.flag}</span>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-navy mb-2">
                      {c.name}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {c.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {c.visaTypes.map((v) => (
                        <span
                          key={v}
                          className="bg-gold/10 text-navy text-xs font-medium px-3 py-1 rounded-full border border-gold/20"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="text-gold text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Get Consultation <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
