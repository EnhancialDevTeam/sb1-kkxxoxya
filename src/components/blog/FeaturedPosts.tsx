import { ArrowRight } from 'lucide-react';

const featuredPosts = [
  {
    title: "Guide to Studying in the UK: 2024 Edition",
    excerpt: "Everything you need to know about UK universities, visa requirements, and student life.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80",
    category: "Study Guides",
    date: "March 15, 2024",
    readTime: "8 min read"
  },
  {
    title: "How to Secure Study Abroad Scholarships",
    excerpt: "Expert tips on finding and applying for international education scholarships.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    category: "Financial Aid",
    date: "March 10, 2024",
    readTime: "6 min read"
  }
];

export default function FeaturedPosts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Articles</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="text-primary-500">{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-primary-500 font-medium inline-flex items-center hover:text-primary-600">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}