import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact", badge: "New" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Startup Support", href: "/startup" },
      { name: "Growth AI", href: "/growth", badge: "New" },
      { name: "Business Support", href: "/business" },
      { name: "Shipping", href: "/shipping" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Community", href: "/community" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "Monitoring", href: "/monitoring", badge: "New" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-[#0A0118] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Logo & Text */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/Logo.png"
              alt="SasifyAI Logo"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold">SasifyAI</span>
          </div>
          <p className="text-sm text-gray-300">
            SasifyAI is an AI-powered writing assistant that creates
            high-quality content effortlessly. Boost productivity and
            streamline your writing process today!
          </p>
        </div>

        {/* Dynamically generated columns */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2 text-gray-300">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white flex items-center gap-2"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="bg-purple-600 text-xs px-2 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SasifyAI Template — Built by{" "}
        <span className="text-purple-400">Way Wise Tech</span>.
      </div>
    </footer>
  );
}
