import { marked } from 'marked';
import { BlogPost } from '../../../types/blog';

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
      
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}