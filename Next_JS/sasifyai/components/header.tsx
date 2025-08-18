import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="SasifyAI Logo"
            width={1920}
            height={84}
            className="h-9 w-auto"
            priority
          />
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            About
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#blog"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            Blogs
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="bg-accent hover:bg-accent/90">
            Try for Free
          </Button>
        </div>
      </div>
    </header>
  );
}
