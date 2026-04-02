import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import { Briefcase, ChevronRight, FileText, Plane, Star } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const serviceData = [
  {
    tab: "tourist",
    label: "Tourist Visas",
    icon: Plane,
    heading: "Tourist & Visitor Visas",
    items: [
      {
        title: "USA Visitor Visa (B1/B2)",
        desc: "Complete assistance with USA B1/B2 tourist visa application, DS-160 form, interview prep, and documentation.",
      },
      {
        title: "UK Visitor Visa",
        desc: "Standard Visitor Visa support for tourism, family visits, and business trips to the United Kingdom.",
      },
      {
        title: "Ireland Visitor Visa",
        desc: "Tourist visa for Ireland — suitable for sightseeing or visiting family in this beautiful European destination.",
      },
      {
        title: "Schengen Visa",
        desc: "Single application for 26 Schengen countries including France, Italy, Spain, Germany, Netherlands and more.",
      },
      {
        title: "Canada Visitor Visa (TRV)",
        desc: "Temporary Resident Visa for Canada — perfect for tourism, family visits, or attending events.",
      },
      {
        title: "Gulf Tourist Visas",
        desc: "Tourist visas for UAE, Saudi Arabia, Qatar, Oman and Kuwait — processed quickly and efficiently.",
      },
    ],
  },
  {
    tab: "immigration",
    label: "Immigration",
    icon: FileText,
    heading: "Immigration Consultancy",
    items: [
      {
        title: "Canada PR Immigration",
        desc: "Expert guidance through Express Entry, Provincial Nominee Programs (PNP), and the Canadian Points System.",
      },
      {
        title: "Australia PR Immigration",
        desc: "Skilled Independent (189), Employer Sponsored (186/482), and State/Territory nominated visa pathways.",
      },
      {
        title: "Germany Opportunity Card",
        desc: "Navigate Germany's new points-based Chancenkarte system to gain work and residence rights in Germany.",
      },
      {
        title: "Skilled Worker Guidance",
        desc: "Comprehensive guidance on qualifying as a skilled worker under various immigration programs worldwide.",
      },
      {
        title: "Documentation Support",
        desc: "Professional document verification, notarization, attestation, and submission to immigration authorities.",
      },
    ],
  },
  {
    tab: "work",
    label: "Work Visas",
    icon: Briefcase,
    heading: "Work Visas & Jobs",
    items: [
      {
        title: "UK Work Visa (Skilled Worker)",
        desc: "Complete support for UK Skilled Worker visa — sponsor letter, CoS, English tests, and application.",
      },
      {
        title: "Europe Work Permit",
        desc: "Work permit applications across European countries including Netherlands, Belgium, Portugal, and more.",
      },
      {
        title: "Germany Chancenkarte",
        desc: "Germany's new Opportunity Card — a points-based pathway for skilled professionals to enter Germany.",
      },
      {
        title: "UAE Job Visa",
        desc: "Work visa for the United Arab Emirates — employer-sponsored or freelance/independent visa options.",
      },
      {
        title: "Qatar Work Visa",
        desc: "Work permit and residence permit for Qatar — including World Cup-era infrastructure and service roles.",
      },
      {
        title: "Saudi Arabia Work Visa",
        desc: "Iqama and work visa assistance for Saudi Arabia's growing Vision 2030 job market.",
      },
      {
        title: "Oman & Kuwait Work Visa",
        desc: "Complete support for work visa applications in Oman and Kuwait across various industries.",
      },
      {
        title: "Job Assistance Guidance",
        desc: "CV writing, job search portals, employer connections, and interview tips for overseas job seekers.",
      },
    ],
  },
  {
    tab: "hajj",
    label: "Hajj & Umrah",
    icon: Star,
    heading: "Hajj & Umrah Packages",
    items: [
      {
        title: "Umrah Packages",
        desc: "Economy, Standard and Premium Umrah packages including flights, hotels near Haram, and ziyarat tours.",
      },
      {
        title: "Hajj Packages",
        desc: "Government-recognized Hajj packages with complete tent, meal, transportation and guidance arrangements.",
      },
      {
        title: "Visa Processing",
        desc: "Dedicated Hajj & Umrah visa processing with biometric support and Embassy liaison services.",
      },
      {
        title: "Accommodation",
        desc: "Hotels ranging from budget to 5-star near Masjid Al Haram in Makkah and Masjid Al Nabawi in Madinah.",
      },
      {
        title: "Food Arrangements",
        desc: "All-inclusive meal packages featuring Indian cuisine to ensure a comfortable spiritual experience.",
      },
      {
        title: "Travel Support",
        desc: "Dedicated group leaders, 24/7 emergency support, and local guides throughout the entire journey.",
      },
    ],
  },
];

export default function Services() {
  useEffect(() => {
    document.title =
      "Our Services — WorldGate Global Visa & Immigration Solutions";
  }, []);

  return (
    <main>
      <section
        className="bg-gradient-to-br from-navy to-navy-light py-20"
        data-ocid="services.hero.section"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="section-eyebrow text-gold/80">What We Offer</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
              Our Services
            </h1>
            <p className="text-white/70 mt-4 max-w-xl mx-auto">
              From tourist visas to permanent residency — we handle it all with
              expertise and care.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white" data-ocid="services.tabs.section">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="tourist">
            <TabsList className="flex flex-wrap gap-2 justify-center bg-transparent mb-10 h-auto">
              {serviceData.map((tab) => (
                <TabsTrigger
                  key={tab.tab}
                  value={tab.tab}
                  data-ocid={`services.${tab.tab}.tab`}
                  className="flex items-center gap-2 rounded-full px-5 py-2.5 border border-border data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:border-navy"
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceData.map((tab) => (
              <TabsContent key={tab.tab} value={tab.tab}>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-navy">
                    {tab.heading}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {tab.items.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="bg-white rounded-xl p-6 shadow-card border border-border card-hover"
                      data-ocid={`services.${tab.tab}.item.${i + 1}`}
                    >
                      <h3 className="font-semibold text-navy text-base mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {item.desc}
                      </p>
                      <Link
                        to="/contact"
                        className="text-gold text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Enquire Now <ChevronRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </main>
  );
}
