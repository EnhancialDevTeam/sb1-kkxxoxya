const posts = [
  {
    title: "IELTS vs TOEFL: Which Test Should You Take?",
    excerpt: "A comprehensive comparison of the two most popular English proficiency tests.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
    category: "Test Preparation",
    date: "March 8, 2024",
    readTime: "5 min read"
  },
  {
    title: "Top 10 Student Cities in Canada",
    excerpt: "Discover the best Canadian cities for international students.",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80",
    category: "Destinations",
    date: "March 5, 2024",
    readTime: "7 min read"
  },
  {
    title: "How to Write a Winning Statement of Purpose",
    excerpt: "Tips and examples for crafting an impressive SOP.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80",
    category: "Application Tips",
    date: "March 3, 2024",
    readTime: "6 min read"
  }
];

export default function BlogGrid() {
  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <article
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
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
              <button className="text-primary-500 font-medium hover:text-primary-600">
                Read More →
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}