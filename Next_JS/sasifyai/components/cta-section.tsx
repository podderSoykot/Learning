import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Blue Gradient Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white">
          {/* Gradient Label */}
          <div className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
            Boost your writing productivity
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to elevate your content creation?
          </h2>

          {/* Subtext */}
          <p className="text-sm text-indigo-100 mb-8 max-w-lg mx-auto">
            Start using SasifyAI today and experience the power of AI-driven
            writing—effortlessly!
          </p>

          {/* Buttons (Same Size) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {/* Start Free Trial – Styled to Match Watch Demo */}
            <Button
              style={{
                height: "56px",
                padding: "10px 40px",
                borderRadius: "10px",
              }}
              className="bg-white text-[#3F3EED] hover:bg-gray-100 text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
            >
              Start Free Trial
            </Button>

            {/* Watch Demo – Same Size */}
            <Button
              style={{
                height: "56px",
                padding: "10px 40px",
                borderRadius: "10px",
              }}
              className="bg-white text-[#3F3EED] hover:bg-gray-100 text-lg font-semibold flex items-center justify-center gap-2 border border-[#3F3EED] transition-all duration-200 shadow-sm"
            >
              <Play className="h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Footer Text with Green Dots */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-indigo-100">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
