import { useParams } from 'react-router-dom';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';
import BlogPostHeader from '../components/blog/post/BlogPostHeader';
import BlogPostContent from '../components/blog/post/BlogPostContent';
import BlogPostNavigation from '../components/blog/post/BlogPostNavigation';
import RelatedPosts from '../components/blog/post/RelatedPosts';
import SocialShare from '../components/blog/post/SocialShare';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');
  
  if (!post) {
    return <div>Post not found</div>;
  }

  const relatedPosts = getRelatedPosts(post);
  const currentUrl = window.location.href;

  return (
    <div className="min-h-screen">
      <BlogPostHeader post={post} />
      <SocialShare url={currentUrl} title={post.title} />
      <BlogPostContent post={post} />
      <BlogPostNavigation />
      <RelatedPosts posts={relatedPosts} />
    </div>
  );
}