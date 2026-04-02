import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useSubmitBooking } from "../hooks/useQueries";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

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
  "Document Support",
  "Other",
];

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    message: "",
  });
  const { mutateAsync, isPending, isSuccess } = useSubmitBooking();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(form);
    } catch {
      // error handled by mutation state
    }
  };

  const inputClass =
    "border-border bg-white focus:ring-2 focus:ring-gold focus-visible:ring-gold";

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-lg max-h-[90vh] overflow-y-auto"
        data-ocid="booking.dialog"
      >
        <DialogHeader>
          <DialogTitle className="text-navy font-display text-xl">
            Book a Free Consultation
          </DialogTitle>
        </DialogHeader>

        {isSuccess ? (
          <div
            className="flex flex-col items-center py-8 gap-3"
            data-ocid="booking.success_state"
          >
            <CheckCircle className="w-14 h-14 text-green-500" />
            <p className="text-lg font-semibold text-navy">
              Booking Confirmed!
            </p>
            <p className="text-muted-foreground text-center text-sm">
              We&apos;ll reach out to you within 24 hours to confirm your
              consultation.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn-gold mt-2 text-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="b-name">Full Name *</Label>
                <Input
                  id="b-name"
                  data-ocid="booking.name.input"
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
                <Label htmlFor="b-phone">Phone *</Label>
                <Input
                  id="b-phone"
                  data-ocid="booking.phone.input"
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  className={inputClass}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="b-email">Email Address *</Label>
              <Input
                id="b-email"
                type="email"
                data-ocid="booking.email.input"
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
              <Label>Service Interest *</Label>
              <Select
                value={form.service}
                onValueChange={(v) => setForm((p) => ({ ...p, service: v }))}
              >
                <SelectTrigger
                  data-ocid="booking.service.select"
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
              <Label htmlFor="b-date">Preferred Date</Label>
              <Input
                id="b-date"
                type="date"
                data-ocid="booking.date.input"
                value={form.preferredDate}
                onChange={(e) =>
                  setForm((p) => ({ ...p, preferredDate: e.target.value }))
                }
                className={inputClass}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="b-msg">Message</Label>
              <Textarea
                id="b-msg"
                data-ocid="booking.message.textarea"
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                className={inputClass}
                placeholder="Tell us about your plans..."
                rows={3}
              />
            </div>

            <button
              type="submit"
              data-ocid="booking.submit_button"
              disabled={isPending}
              className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
              {isPending ? "Submitting..." : "Book Free Consultation"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
