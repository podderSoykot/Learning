import Image from "next/image";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div
        className="container max-w-6xl mx-auto"
        style={{ paddingLeft: "375px", paddingRight: "375px" }}
      >
        <div className="text-center mb-16">
          <Image
            src="/images/Content.png"
            alt="Key Features of SasifyAI - Powerful AI writing tools to supercharge your content creation"
            width={800}
            height={200}
            className="mx-auto"
            priority
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/card.png"
            alt="SasifyAI Features: AI-Powered Writing, Customizable Tone & Style, Fast & Efficient, Multiple Use Cases, SEO-Optimized Content, Seamless Integrations"
            width={1200}
            height={600}
            className="max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
