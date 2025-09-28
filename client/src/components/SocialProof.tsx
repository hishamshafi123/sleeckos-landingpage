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
    company: "TechFlow Solutions",
    content: "The AI chatbot increased our lead response rate by 400%. We're now capturing leads 24/7 and our sales team can focus on closing deals instead of initial inquiries.",
    rating: 5,
    results: "400% increase in lead response rate"
  },
  {
    id: "2", 
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "GrowthHub Agency",
    content: "Voice agents handle all our appointment booking now. We went from missing 30% of calls to booking 95% of qualified leads automatically. Game changer for our business.",
    rating: 5,
    results: "95% appointment booking rate"
  },
  {
    id: "3",
    name: "Jennifer Walsh",
    role: "Founder",
    company: "EcoLiving Store", 
    content: "The automated lead campaigns helped us scale from $50K to $200K monthly revenue in 6 months. The ROI is incredible - every dollar spent returns $8 in revenue.",
    rating: 5,
    results: "4x revenue growth in 6 months"
  }
];

const stats = [
  { value: "500+", label: "Businesses Automated" },
  { value: "10M+", label: "Leads Processed" },
  { value: "300%", label: "Average ROI Increase" },
  { value: "24/7", label: "System Uptime" }
];

export default function SocialProof({ className }: SocialProofProps) {
  return (
    <section id="testimonials" className={`py-32 px-4 ${className}`}>
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
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
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by startups to enterprises
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos */}
            <div className="text-xs border rounded px-3 py-2">TECHFLOW</div>
            <div className="text-xs border rounded px-3 py-2">GROWTHHUB</div>
            <div className="text-xs border rounded px-3 py-2">ECOLIVING</div>
            <div className="text-xs border rounded px-3 py-2">+497 MORE</div>
          </div>
        </div>
      </div>
    </section>
  );
}