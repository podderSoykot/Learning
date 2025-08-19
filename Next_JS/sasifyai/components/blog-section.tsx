import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "How AI is Transforming Content Creation in 2025",
    description:
      "Discover how AI-powered tools are revolutionizing writing, making content creation faster, smarter, and more efficient than ever",
    date: "21 Sep, 2020",
    readTime: "08 min Read",
    image: "/images/b1.png",
  },
  {
    title: "5 Ways to Write Engaging Content Using AI",
    description:
      "Learn how AI can help you craft compelling, high-quality content that captivates your audience and boosts engagement",
    date: "21 Sep, 2020",
    readTime: "08 min Read",
    image: "/images/b2.png",
  },
  {
    title: "AI vs Human Writing: Can AI Replace Writers?",
    description:
      "Explore the strengths and limitations of AI-generated content and how it complements human creativity in writing",
    date: "21 Sep, 2020",
    readTime: "08 min Read",
    image: "/images/b3.png",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            Industry Insights
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-black">
            Latest Insights & Trends in AI-Powered Writing
          </h2>
          <p className="text-gray-600 font-serif max-w-3xl mx-auto">
            Stay updated with expert tips, industry trends, and the latest innovations in AI-driven content creation
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              {/* Card Image */}
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Header */}
              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-gray-500 font-serif mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="font-sans group-hover:text-accent transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              {/* Card Content */}
              <CardContent>
                <CardDescription className="font-serif">
                  {post.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
