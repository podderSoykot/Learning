import Image from "next/image";

export function WhyChoose() {
  return (
    <section className="py-4">
      <div>
        <div className="text-center mb-2">
          <p className="text-xs font-medium text-accent mb-2"></p>
          <h1 className="heading-custom">
            Trusted by individuals and teams at the world's boldest companies
          </h1>
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
