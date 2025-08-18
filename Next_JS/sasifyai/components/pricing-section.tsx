import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Best for personal use",
    features: [
      "Basic AI Writing",
      "Task Management",
      "Pre-built Templates",
      "Notifications",
    ],
    buttonText: "GET STARTED",
    popular: false,
  },
  {
    name: "Business",
    price: "$16",
    period: "/month",
    description: "Best for personal use",
    features: [
      "All starter features, plus:",
      "Custom Workflows",
      "AI Personalization",
      "Project Planning",
      "API Access",
      "Team Collaboration",
      "Document Management",
      "Agile Support",
    ],
    buttonText: "GET STARTED",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Best for personal use",
    features: [
      "Everything in Starter",
      "Everything in Business",
      "Dedicated Manager",
      "Enterprise Security",
      "Industry Insights",
    ],
    buttonText: "GET STARTED",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-tight font-sans  inline bg-linear-65 from-purple-500 to-pink-500 px-2 py-1">
            SasifyAI Pricing
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto mb-8">
            Unlock AI-Powered Writing at the Best Price
          </p>
          <p className="text-muted-foreground font-serif max-w-4xl mx-auto mb-8">
            Choose the perfect plan to access AI-driven writing, enhance
            creativity, and streamline content creation effortlessly for any
            project or business.
          </p>

          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full p-1">
            <span className="px-4 py-2 text-sm font-medium">Monthly</span>
            <span className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-full">
              Yearly
            </span>
          </div>
          <p className="text-sm text-accent mt-2">Save 15% on yearly plan!</p>
        </div>

        <div className="  grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg ${
                plan.popular ? "ring-2 ring-accent" : ""
              }`}
            >
              {plan.popular && (
                <Badge
                  className="
                    absolute -top-2 
                    left-1/2 transform -translate-x-1/2 
                    bg-accent text-accent-foreground 
                    px-[116px] py-1
                    rounded-full 
                    text-sm font-semibold
                    shadow-md
                  "
                >
                  Most Popular
                </Badge>
              )}


              <CardHeader className="">
                <CardTitle className="font-sans text-2xl">
                  {plan.name}
                </CardTitle>
                <CardDescription className="font-serif">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold font-sans">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground font-serif">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-accent hover:bg-accent/90" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
                <div className="space-y-3">
                  <p className="font-medium font-sans">What you get:</p>
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-serif">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
