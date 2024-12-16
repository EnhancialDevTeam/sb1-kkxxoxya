import BlogHero from '../components/blog/BlogHero';
import FeaturedPosts from '../components/blog/FeaturedPosts';
import BlogArchive from '../components/blog/archive/BlogArchive';
import BlogCTA from '../components/blog/BlogCTA';

export default function Blog() {
  return (
    <div className="min-h-screen">
      <BlogHero />
      <FeaturedPosts />
      <BlogArchive />
      <BlogCTA />
    </div>
  );
}