import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does SasifyAI work?",
    answer:
      "SasifyAI instantly generates high-quality content by analyzing your input, leveraging advanced AI to produce engaging, SEO-optimized text that enhances readability, boosts rankings, and streamlines your content creation process effortlessly.",
  },
  {
    question: "Can I customize the AI-generated content?",
    answer:
      "Yes, SasifyAI allows you to fully customize the tone, style, and format of your content to match your brand's unique voice and target audience preferences.",
  },
  {
    question: "Is SasifyAI suitable for all types of content?",
    answer:
      "SasifyAI is versatile and can generate various types of content including blog posts, social media content, emails, ads, landing pages, and more.",
  },
  {
    question: "Do I need technical skills to use SasifyAI?",
    answer:
      "Not at all! SasifyAI is designed to be user-friendly and intuitive. Simply provide your requirements, and our AI will handle the rest.",
  },
  {
    question: "Does SasifyAI support multiple languages?",
    answer:
      "Yes, SasifyAI supports content generation in multiple languages to help you reach a global audience effectively.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent mb-4">SasifyAI FAQ</p>
          <h2 className="text-3xl font-bold tracking-tight font-sans sm:text-4xl">Got Questions? We've Got Answers!</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="font-sans text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="font-serif text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
