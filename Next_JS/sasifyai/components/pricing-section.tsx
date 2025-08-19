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
    <section
      id="pricing"
      className="w-full py-16 bg-gradient-to-b from-purple-50 via-pink-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-tight font-sans inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full">
            SasifyAI Pricing
          </h2>
          <p className="text-3xl font-bold text-gray-900 mt-6 mb-2">
            Unlock AI-Powered Writing at the Best Price
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan to access AI-driven writing, enhance
            creativity, and streamline content creation effortlessly for any
            project or business.
          </p>

          {/* Save text + Monthly/Yearly Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <p className="text-sm text-purple-600">Save 15% on yearly plan!</p>

            <div className="inline-flex items-center space-x-1 bg-white rounded-full p-1 shadow-md border border-gray-200">
              <button className="px-4 py-2 text-sm font-medium text-white bg-[#3F3EED] rounded-full shadow-sm hover:bg-[#2e2ddd] transition">
                Yearly
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 rounded-full transition">
                Monthly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              style={
                plan.popular
                  ? {
                      borderColor: "#3F3EED",
                      borderWidth: "4px",
                      borderStyle: "solid",
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 25px -5px rgba(63, 62, 237, 0.2)",
                    }
                  : {}
              }
              className={`relative rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                plan.popular ? "" : "hover:shadow-2xl"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#3F3EED] text-white px-27 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                  <span></span>
                  <span>Most Popular ⭐</span>
                </Badge>
              )}

              <CardHeader className="pb-4 pt-8 px-6">
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
                <div className="mt-3 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                {/* All GET STARTED buttons color #3F3EED with px-20 py-6 */}
                <Button
                  className="w-full font-semibold text-sm px-20 py-6 transition-all bg-[#3F3EED] hover:bg-[#2e2ddd] text-white border-none"
                  variant="default"
                >
                  {plan.buttonText}
                </Button>

                <div className="mt-6 space-y-3">
                  <p className="font-medium text-gray-800 text-sm">
                    What you get:
                  </p>
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-2"
                    >
                      <Check className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-tight">
                        {feature}
                      </span>
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
