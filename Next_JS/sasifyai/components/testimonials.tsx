import Image from "next/image";

export function Testimonials() {
  return (
    <section className="py-20">
      <div
        className="flex justify-center items-center"
        style={{ width: "100%", padding: "80px" }}
      >
        <Image
          src="/images/rx.png"
          alt="Trusted by companies including CNN, IBM, Samsung, Meta, Uber, Ingenico, and Accenture"
          width={1800}  // Set your desired width
          height={400}  // Set your desired height
          className="w-full h-auto max-w-full"
        />
      </div>
    </section>
  );
}
