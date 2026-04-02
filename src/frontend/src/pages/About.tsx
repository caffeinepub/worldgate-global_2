import {
  Award,
  Eye,
  FileCheck,
  HeartHandshake,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    desc: "No hidden fees, no surprises. We walk you through every step with full clarity.",
  },
  {
    icon: Star,
    title: "Expert Guidance",
    desc: "15+ years of specialized immigration experience. Our consultants are certified and up-to-date.",
  },
  {
    icon: FileCheck,
    title: "Document Support",
    desc: "We meticulously prepare and review every document to maximize your visa approval chances.",
  },
  {
    icon: TrendingUp,
    title: "98% Success Rate",
    desc: "Our track record speaks for itself — over 10,000 successful visa applications and counting.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    desc: "Every client gets a dedicated consultant tailored to their unique immigration goals.",
  },
  {
    icon: Users,
    title: "End-to-End Assistance",
    desc: "From initial consultation to arrival — we're with you throughout the entire journey.",
  },
];

const team = [
  {
    name: "Amir Khan",
    role: "Founder & Senior Immigration Consultant",
    exp: "20 years experience",
    initials: "AK",
  },
  {
    name: "Divya Reddy",
    role: "Canada & Australia PR Specialist",
    exp: "12 years experience",
    initials: "DR",
  },
  {
    name: "Farhan Sheikh",
    role: "Gulf & Work Visa Expert",
    exp: "10 years experience",
    initials: "FS",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us — WorldGate Global Immigration Consultancy";
  }, []);

  return (
    <main>
      {/* Hero Banner */}
      <section
        className="bg-gradient-to-br from-navy to-navy-light py-20"
        data-ocid="about.hero.section"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-eyebrow text-gold/80">Who We Are</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
              About WorldGate Global
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
              Empowering Indians to achieve their global dreams through expert,
              transparent, and compassionate immigration support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white" data-ocid="about.mission.section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To simplify the complex world of global immigration for every
                Indian family and professional. We believe in making quality
                immigration guidance accessible, transparent, and result-driven
                — no matter where you dream of going.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted immigration gateway from India to the
                world — a company that every Indian thinks of first when they
                consider building a life abroad. We envision a world without
                borders holding back human potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="py-20 bg-secondary/30"
        data-ocid="about.story.section"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-eyebrow">Our Story</p>
            <h2 className="text-3xl font-bold text-navy mb-6">
              15+ Years of Trusted Service
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              WorldGate Global was founded with a single purpose: to navigate
              the complex landscape of global immigration so our clients don't
              have to. With over 15 years in the immigration and visa
              consultancy space, we have helped more than 10,000 families,
              professionals, students, and pilgrims from across India achieve
              their international goals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From helping a software engineer from Hyderabad get a Canada PR to
              arranging a seamless Hajj package for a family from Kerala — our
              work is personal, purposeful, and impactful. Our team of certified
              consultants stays updated with the latest immigration laws and
              visa policies across 50+ countries.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white" data-ocid="about.whyus.section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-eyebrow">Our Strengths</p>
            <h2 className="text-3xl font-bold text-navy">
              Why Choose WorldGate Global?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card border border-border card-hover"
                data-ocid={`about.feature.item.${i + 1}`}
              >
                <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="py-20 bg-gradient-to-br from-navy to-navy-light"
        data-ocid="about.team.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-eyebrow text-gold/80">The People</p>
            <h2 className="text-3xl font-bold text-white">
              Meet Our Expert Team
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20"
                data-ocid={`about.team.item.${i + 1}`}
              >
                <div className="w-20 h-20 rounded-full bg-gold/20 text-gold font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-semibold text-white text-lg">
                  {member.name}
                </h3>
                <p className="text-gold text-sm mt-1">{member.role}</p>
                <p className="text-white/60 text-xs mt-2">{member.exp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section
        className="py-16 bg-white"
        data-ocid="about.certifications.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-navy">
              Trusted & Certified
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "ISO Certified",
              "ICCRC Affiliated",
              "Government Recognized",
              "IATA Member",
              "BBB Accredited",
            ].map((b) => (
              <div
                key={b}
                className="flex items-center gap-2 border border-border rounded-full px-5 py-2.5"
              >
                <Award className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-navy">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
