import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  results: string;
}

interface SocialProofProps {
  className?: string;
}

// todo: remove mock functionality - replace with real testimonials
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "",
    content: "The AI chatbot increased our lead reply rate by 70%. We're now capturing leads 24/7 and our sales team can focus on closing deals instead of initial inquiries.",
    rating: 5,
    results: "70% increase in lead response rate"
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "",
    content: "Voice agents handle all our appointment booking now. We went from missing 7-8 of calls to booking 95% of qualified leads automatically. Game changer for our business.",
    rating: 5,
    results: "95% appointment booking rate"
  },
  {
    id: "3",
    name: "Jennifer Walsh",
    role: "Founder",
    company: "",
    content: "The automated lead campaigns helped us scale from $13K to $20K monthly revenue in 2 months. hardworking dudes, they are truly some badass innovators",
    rating: 5,
    results: "$8k revenue growth in 2 months"
  }
];

const stats = [
  { value: "100+", label: "Automations Built" },
  //{ value: "10M+", label: "Leads Processed" },
  { value: "56%", label: "Average ROI Increase" },
  { value: "24/7", label: "System Uptime" }
];

export default function SocialProof({ className }: SocialProofProps) {
  return (
    <section id="testimonials" className={`py-316 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by <span className="text-primary">Growing Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how our AI automation solutions have transformed businesses across industries.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="flex justify-center mb-4">
          <div className="grid grid-cols-3 gap-4 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full hover-elevate">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-sm mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Results Highlight */}
                <div className="bg-primary/10 rounded-lg p-3 mb-4">
                  <div className="text-sm font-semibold text-primary">
                    Key Result:
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.results}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>
  );
}