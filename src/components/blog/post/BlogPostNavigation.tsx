import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogPost } from '../../../types/blog';

interface BlogPostNavigationProps {
  previousPost?: BlogPost;
  nextPost?: BlogPost;
}

export default function BlogPostNavigation({ previousPost, nextPost }: BlogPostNavigationProps) {
  return (
    <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
      <div className="flex justify-between">
        {previousPost ? (
          <Link
            to={`/blog/${previousPost.slug}`}
            className="flex items-center text-primary-600 hover:text-primary-700"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            <div>
              <div className="text-sm text-gray-500">Previous</div>
              <div className="font-medium">{previousPost.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextPost ? (
          <Link
            to={`/blog/${nextPost.slug}`}
            className="flex items-center text-right text-primary-600 hover:text-primary-700"
          >
            <div>
              <div className="text-sm text-gray-500">Next</div>
              <div className="font-medium">{nextPost.title}</div>
            </div>
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}