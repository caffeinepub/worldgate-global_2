import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useSubmitContact } from "../hooks/useQueries";

const services = [
  "Tourist & Visitor Visa",
  "Canada PR Immigration",
  "Australia PR Immigration",
  "UK Work Visa",
  "Europe Work Permit",
  "Germany Opportunity Card",
  "Gulf Job Visa",
  "Hajj & Umrah Package",
  "Schengen Visa",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const { mutateAsync, isPending, isSuccess, isError } = useSubmitContact();

  useEffect(() => {
    document.title = "Contact Us — WorldGate Global";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(form);
    } catch {
      // handled by mutation state
    }
  };

  const inputClass =
    "border-border bg-white focus:ring-2 focus:ring-gold focus-visible:ring-gold";

  return (
    <main>
      <section
        className="bg-gradient-to-br from-navy to-navy-light py-20"
        data-ocid="contact.hero.section"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="section-eyebrow text-gold/80">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            Contact Us
          </h1>
          <p className="text-white/70 mt-4">
            We'd love to hear from you. Send us a message or call us directly.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" data-ocid="contact.main.section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Get in Touch
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">
                      Office Address
                    </div>
                    <div className="text-muted-foreground text-sm mt-1">
                      WorldGate Global, 4th Floor, Cyber Towers, Hitech City,
                      Hyderabad, Telangana 500081, India
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Phone</div>
                    <a
                      href="tel:+919999999999"
                      className="text-muted-foreground text-sm mt-1 hover:text-gold transition-colors"
                    >
                      +91 99999 99999
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Email</div>
                    <a
                      href="mailto:info@worldgateglobal.com"
                      className="text-muted-foreground text-sm mt-1 hover:text-gold transition-colors"
                    >
                      info@worldgateglobal.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">WhatsApp</div>
                    <a
                      href="https://wa.me/919999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="contact.whatsapp.button"
                      className="text-sm mt-1 text-green-600 font-medium hover:underline"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border shadow-xs h-64">
                <iframe
                  title="WorldGate Global Office Location"
                  src="https://maps.google.com/maps?q=Hitech+City+Hyderabad&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Inquiry Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Send an Inquiry
              </h2>
              {isSuccess ? (
                <div
                  className="flex flex-col items-center py-12 gap-3"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle className="w-14 h-14 text-green-500" />
                  <p className="text-lg font-semibold text-navy">
                    Message Sent!
                  </p>
                  <p className="text-muted-foreground text-center text-sm">
                    Thank you for reaching out. We'll contact you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  data-ocid="contact.form"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="c-name">Full Name *</Label>
                      <Input
                        id="c-name"
                        data-ocid="contact.name.input"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="c-phone">Phone *</Label>
                      <Input
                        id="c-phone"
                        data-ocid="contact.phone.input"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, phone: e.target.value }))
                        }
                        className={inputClass}
                        placeholder="+91 XXXXX"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="c-email">Email *</Label>
                    <Input
                      id="c-email"
                      type="email"
                      data-ocid="contact.email.input"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Service Interest</Label>
                    <Select
                      value={form.serviceType}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, serviceType: v }))
                      }
                    >
                      <SelectTrigger
                        data-ocid="contact.service.select"
                        className={inputClass}
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="c-msg">Message *</Label>
                    <Textarea
                      id="c-msg"
                      data-ocid="contact.message.textarea"
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className={inputClass}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                    />
                  </div>
                  {isError && (
                    <p
                      className="text-destructive text-sm"
                      data-ocid="contact.error_state"
                    >
                      Something went wrong. Please try again or contact us
                      directly.
                    </p>
                  )}
                  <button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={isPending}
                    className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                    {isPending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
