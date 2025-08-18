import Image from "next/image";

export function WhyChoose() {
  return (
    <section className="py-1">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-xs font-medium text-accent mb-2"></p>
          <h1 className="text-xl font-bold tracking-tight font-sans sm:text-2xl mb-2">
            Trusted by individuals and teams at the world's boldest companies
          </h1>

          <p className="text-sm text-muted-foreground font-serif max-w-3xl mx-auto">
            Read real user experiences and discover how SasifyAI is transforming
            content creation with efficiency, quality, and seamless integration.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/testmonial1.png"
            alt="Trusted by companies including CNN, IBM, Samsung, Meta, Uber, Ingenico, and Accenture"
            width={1200}
            height={100}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
