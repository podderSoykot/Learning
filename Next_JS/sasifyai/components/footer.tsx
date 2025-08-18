import Link from "next/link";

const footerSections = [
  {
    title: "Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
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
    <footer className="bg-muted/30 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <span className="text-lg font-bold text-accent-foreground">
                  S
                </span>
              </div>
              <span className="text-xl font-bold font-sans">SasifyAI</span>
            </div>
            <p className="text-muted-foreground font-serif max-w-sm">
              SasifyAI is an AI-powered writing assistant that creates
              high-quality content effortlessly. Boost productivity and
              streamline your writing process today!
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold font-sans mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors font-serif flex items-center space-x-2"
                    >
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
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

        <div className="border-t pt-8 text-center">
          <p className="text-muted-foreground font-serif">
            © SasifyAI Template | Build by{" "}
            <Link href="#" className="text-accent hover:underline">
              WayWise Tech
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
