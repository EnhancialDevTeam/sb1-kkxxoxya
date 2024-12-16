import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { NewsArticle } from '../../types/news';

interface NewsGridProps {
  articles: NewsArticle[];
}

export default function NewsGrid({ articles }: NewsGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <article
          key={article.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <Link to={`/news/${article.slug}`}>
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="text-primary-500">{article.category}</span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </div>
            <Link to={`/news/${article.slug}`}>
              <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                {article.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-medium text-gray-900">{article.author.name}</div>
                  <div className="text-sm text-gray-500">{article.author.role}</div>
                </div>
              </div>
              <Link
                to={`/news/${article.slug}`}
                className="text-primary-500 font-medium inline-flex items-center hover:text-primary-600"
              >
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}