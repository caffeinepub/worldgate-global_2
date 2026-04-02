import { MapPin, Star } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const STAR_NUMS = [1, 2, 3, 4, 5] as const;

const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Hyderabad",
    rating: 5,
    text: "WorldGate Global made my Canada PR process incredibly smooth. Got my PR in just 14 months thanks to their expertise!",
    service: "Canada PR",
  },
  {
    name: "Priya Nair",
    city: "Kochi",
    rating: 5,
    text: "My UK work visa was approved on the first attempt. Their document checklist and interview prep were invaluable.",
    service: "UK Work Visa",
  },
  {
    name: "Mohammed Faiz",
    city: "Mumbai",
    rating: 5,
    text: "Perfect Umrah package — visa, accommodation near Haram, and group leader support. Truly a spiritual and hassle-free experience.",
    service: "Umrah Package",
  },
  {
    name: "Ananya Reddy",
    city: "Bangalore",
    rating: 5,
    text: "Got my Australia PR through the 189 skilled independent visa. WorldGate's EOI optimization strategy was key to getting an invite.",
    service: "Australia PR",
  },
  {
    name: "Suresh Kumar",
    city: "Chennai",
    rating: 4,
    text: "Applied for Schengen visa for a Europe trip. Got it in 10 days. The team was super responsive and professional.",
    service: "Schengen Visa",
  },
  {
    name: "Fatima Begum",
    city: "Delhi",
    rating: 5,
    text: "WorldGate arranged our family Hajj package with great care. Everything from the visa to the tent in Mina was organized beautifully.",
    service: "Hajj Package",
  },
  {
    name: "Vikram Singh",
    city: "Pune",
    rating: 5,
    text: "Secured a Gulf job visa for UAE within 3 weeks. Their employer network and documentation guidance saved me a lot of time.",
    service: "UAE Work Visa",
  },
  {
    name: "Deepa Menon",
    city: "Thrissur",
    rating: 5,
    text: "Germany Chancenkarte application was confusing at first but WorldGate's team explained everything clearly. Submitted my application confidently!",
    service: "Germany Opportunity Card",
  },
  {
    name: "Arun Patel",
    city: "Ahmedabad",
    rating: 4,
    text: "Visitor visa to Canada was approved. Though it was my second attempt (first was rejected elsewhere), WorldGate identified the gaps perfectly.",
    service: "Canada Visitor Visa",
  },
  {
    name: "Nisha George",
    city: "Trivandrum",
    rating: 5,
    text: "Used their Ireland work permit service. Got a Critical Skills permit for my IT job offer. Excellent guidance on the entire process.",
    service: "Ireland Work Permit",
  },
  {
    name: "Harish Reddy",
    city: "Vijayawada",
    rating: 5,
    text: "My entire family relocated to Canada. WorldGate handled our Express Entry profiles and we received ITAs within 6 months. Highly recommended!",
    service: "Canada PR",
  },
  {
    name: "Zara Khan",
    city: "Lucknow",
    rating: 5,
    text: "Booked Umrah for my parents through WorldGate. The package was comprehensive, reasonably priced, and the group leader was very helpful throughout.",
    service: "Umrah Package",
  },
];

export default function Testimonials() {
  useEffect(() => {
    document.title = "Client Testimonials — WorldGate Global";
  }, []);

  return (
    <main>
      <section
        className="bg-gradient-to-br from-navy to-navy-light py-20"
        data-ocid="testimonials.hero.section"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="section-eyebrow text-gold/80">Real Experiences</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
              Client Testimonials
            </h1>
            <p className="text-white/70 mt-4 max-w-xl mx-auto">
              Over 10,000 families and professionals trust WorldGate Global with
              their immigration journeys.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 bg-secondary/30"
        data-ocid="testimonials.grid.section"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card border border-border"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="text-gold text-3xl leading-none mb-3">
                  &ldquo;
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t.text}
                </p>
                <div className="mb-3">
                  <span className="bg-gold/10 text-navy text-xs font-medium px-2.5 py-1 rounded-full border border-gold/20">
                    {t.service}
                  </span>
                </div>
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
                        <MapPin className="w-3 h-3" />
                        {t.city}
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
        </div>
      </section>
    </main>
  );
}
