import Image from "next/image";
import { Star } from "lucide-react";

// Define type for testimonial data
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string; // path to avatar image
  rating: number;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Darlene Robertson",
    role: "CEO",
    company: "UpdateAI",
    avatar: "/avatars/darlene.jpg",
    rating: 5,
    content:
      "I'd recommend SasifyAI to any SaaS business looking for top-tier AI-powered content generation with exceptional quality, efficiency, and support.",
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    role: "Chief Executive Officer",
    company: "UpdateAI",
    avatar: "/avatars/savannah.jpg",
    rating: 5,
    content:
      "I'd recommend SasifyAI to any SaaS business looking for top-tier AI-powered content generation with exceptional quality, efficiency, and support.",
  },
  {
    id: 3,
    name: "Dianne Russell",
    role: "Front End Developer",
    company: "UpdateAI",
    avatar: "/avatars/dianne.jpg",
    rating: 5,
    content:
      "I'd recommend SasifyAI to any SaaS business looking for top-tier AI-powered content generation with exceptional quality, efficiency, and support.",
  },
  {
    id: 4,
    name: "Kathryn Murphy",
    role: "UX Designer",
    company: "UpdateAI",
    avatar: "/avatars/kathryn.jpg",
    rating: 5,
    content:
      "I'd recommend SasifyAI to any SaaS business looking for top-tier AI-powered content generation with exceptional quality, efficiency, and support.",
  },
  {
    id: 5,
    name: "Bessie Cooper",
    role: "Finance",
    company: "UpdateAI",
    avatar: "/avatars/bessie.jpg",
    rating: 5,
    content:
      "I'd recommend SasifyAI to any SaaS business looking for top-tier AI-powered content generation with exceptional quality, efficiency, and support.",
  },
  {
    id: 6,
    name: "Brooklyn Simmons",
    role: "Senior Developer",
    company: "UpdateAI",
    avatar: "/avatars/brooklyn.jpg",
    rating: 5,
    content:
      "I'd recommend SasifyAI to any SaaS business looking for top-tier AI-powered content generation with exceptional quality, efficiency, and support.",
  },
];

export function Testimonials() {
  return (
    <section className=" text-white rounded-3xl py-5 px-[50px] shadow-2xl overflow-hidden px-5">
      {/* Header */}
      <div className="bg-gray-900 ease-out rounded-t-[80px] rounded-b-[80px]">
        <div className="text-center mb-12 py-10 ">
          <div className="inline-block  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            SasifyAI Review
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See What Our Customers Are Saying About SasifyAI!
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Read real user experiences and discover how SasifyAI is transforming
            content creation with efficiency, quality, and seamless integration.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto py-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {testimonial.content}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-700 my-4"></div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Image
                    src="/icons/updateai-logo.svg"
                    alt="UpdateAI"
                    width={20}
                    height={20}
                  />
                  <span className="ml-1">UpdateAI</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
