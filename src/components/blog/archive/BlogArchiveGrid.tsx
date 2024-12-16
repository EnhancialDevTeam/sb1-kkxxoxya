import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../../../types/blog';

interface BlogArchiveGridProps {
  posts: BlogPost[];
}

export default function BlogArchiveGrid({ posts }: BlogArchiveGridProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {posts.map((post) => (
        <article
          key={post.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <Link to={`/blog/${post.slug}`} className="block">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
          </Link>
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="text-primary-500">{post.category}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <Link to={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-medium text-gray-900">{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.role}</div>
                </div>
              </div>
              <Link
                to={`/blog/${post.slug}`}
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