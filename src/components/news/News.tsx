import { ArrowRight } from 'lucide-react';
import NewsCard from './NewsCard';

const newsItems = [
  {
    title: "Jestone Expands Partnerships with Top UK University in Ghana",
    snippet: "We are thrilled to announce new collaborations with several prestigious universities in Europe.",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    action: () => console.log('Navigate to full news article')
  },
  {
    title: "New Scholarship Programs for International Students",
    snippet: "Discover our latest scholarship opportunities for aspiring global students.",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
    action: () => console.log('Navigate to scholarships news')
  }
];

export default function News() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Updates from Jestone</h2>
          <p className="text-xl text-gray-600">Stay informed about our latest partnerships and opportunities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {newsItems.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              snippet={news.snippet}
              date={news.date}
              image={news.image}
              onClick={news.action}
            />
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors">
            Explore More News
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}