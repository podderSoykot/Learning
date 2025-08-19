import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-8">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-medium text-white mb-8">
          Boost your productivity
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight font-sans sm:text-6xl lg:text-7xl text-gray-900">
          Capture the perfect audience
          <br />
          pull with <span className="text-purple-600">SasifyAI</span>!
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-xl text-gray-600 font-serif max-w-5xl mx-auto">
          Generate content effortlessly with AI-driven precision, whether you
          need a landing page, blog, or marketing copy for your business.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
          >
            Start Free Trial
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Image */}
        <div className="mt-12 flex justify-center w-full">
          <div className="relative w-[970px]">
            <Image
              src="/images/group2.png"
              alt="SasifyAI Product Interface"
              width={970}
              height={546}
              className="rounded-lg shadow-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
