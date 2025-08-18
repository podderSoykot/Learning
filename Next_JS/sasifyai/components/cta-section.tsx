import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight font-sans sm:text-4xl mb-4">
            Boost your writing productivity
          </h2>
          <p className="text-xl text-muted-foreground font-serif mb-8">
            Ready to elevate your content creation? Start using SasifyAI today and experience the power of AI-driven
            writing—effortlessly!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground font-serif">
            <span>No credit card required</span>
            <span className="hidden sm:block">•</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
