import { Calendar, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const posts = [
  {
    title: "Canada PR: The Complete Guide for Indians in 2025",
    category: "Immigration",
    date: "March 15, 2025",
    excerpt:
      "A comprehensive walkthrough of Canada's Express Entry system, Provincial Nominee Programs, and CRS scoring — everything an Indian applicant needs to know in 2025.",
    slug: "canada-pr-guide-indians-2025",
  },
  {
    title: "Germany Opportunity Card: How to Apply from India",
    category: "Work Visa",
    date: "February 28, 2025",
    excerpt:
      "Germany's new Chancenkarte (Opportunity Card) opens doors for skilled Indian professionals. Learn the points criteria, document requirements, and step-by-step process.",
    slug: "germany-opportunity-card-india",
  },
  {
    title: "UK Work Visa 2025: Requirements and Process for Indians",
    category: "Work Visa",
    date: "February 10, 2025",
    excerpt:
      "The UK Skilled Worker visa post-Brexit has new rules. This guide covers sponsorship requirements, salary thresholds, English language tests, and the ILR pathway.",
    slug: "uk-work-visa-2025-requirements",
  },
  {
    title: "Schengen Visa Tips for First-Time Indian Applicants",
    category: "Tourist Visa",
    date: "January 22, 2025",
    excerpt:
      "First time applying for a Schengen visa? Avoid common mistakes with our expert tips on bank statements, itinerary, travel insurance, and embassy interviews.",
    slug: "schengen-visa-tips-indians",
  },
  {
    title: "Gulf Job Opportunities for Indians: UAE & Qatar Guide 2025",
    category: "Work Visa",
    date: "January 8, 2025",
    excerpt:
      "UAE and Qatar remain hotspots for Indian job seekers. Discover in-demand sectors, average salaries, visa types, and how WorldGate Global can help you land your dream Gulf job.",
    slug: "gulf-jobs-uae-qatar-indians-2025",
  },
  {
    title: "Hajj 2025: Visa Application Process from India",
    category: "Hajj & Umrah",
    date: "December 20, 2024",
    excerpt:
      "Everything Indian Muslims need to know about the Hajj 2025 visa process — quota system, application timelines, required documents, and how to book through authorized operators.",
    slug: "hajj-2025-visa-application-india",
  },
];

const categoryColors: Record<string, string> = {
  Immigration: "bg-blue-100 text-blue-800",
  "Work Visa": "bg-purple-100 text-purple-800",
  "Tourist Visa": "bg-green-100 text-green-800",
  "Hajj & Umrah": "bg-amber-100 text-amber-800",
};

export default function Blog() {
  useEffect(() => {
    document.title = "Visa & Immigration Blog — WorldGate Global";
  }, []);

  return (
    <main>
      <section
        className="bg-gradient-to-br from-navy to-navy-light py-20"
        data-ocid="blog.hero.section"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="section-eyebrow text-gold/80">Stay Informed</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
              Visa & Immigration Blog
            </h1>
            <p className="text-white/70 mt-4 max-w-xl mx-auto">
              Expert insights, visa updates, immigration news, and guides for
              Indian applicants.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30" data-ocid="blog.list.section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-card border border-border card-hover"
                data-ocid={`blog.item.${i + 1}`}
              >
                <div className="h-2 bg-gradient-to-r from-navy to-gold" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                  </div>
                  <h2 className="font-bold text-navy text-base leading-snug mb-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button
                    type="button"
                    className="text-gold text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
