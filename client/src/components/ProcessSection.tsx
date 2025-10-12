import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProcessStep {
  id: string;
  title: string;
}


const steps: ProcessStep[] = [
  {
    id: "book-call",
    title: "Book a free discovery call"
  },
  {
    id: "fill-application",
    title: "Fill in the application form"
  },
  {
    id: "get-automation",
    title: "Get your automation delivered in 24 hours"
  },
  {
    id: "setup-server",
    title: "Set it up on your server"
  },
  {
    id: "we-setup",
    title: "Or we'll set it up for you"
  }
];

interface ProcessSectionProps {
  onGetStarted?: () => void;
}

export default function ProcessSection({ onGetStarted }: ProcessSectionProps) {
  // Temporarily hidden
  return null;

  return (
    <section id="process" className="py-40 px-2">
      <div className="max-w-4xl mx-auto">
        {/* Single Card with Steps */}
        <Card className="p-8">
          <CardHeader className="text-left pb-8">
            <CardTitle className="text-2xl md:text-3xl font-bold">
              How to Get Your <span className="text-primary font-bold">Free Instagram Chatbot</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">
                      Step {index + 1}: {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}