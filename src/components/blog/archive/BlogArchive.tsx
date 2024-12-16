import BlogArchiveGrid from './BlogArchiveGrid';
import BlogArchiveFilters from './BlogArchiveFilters';
import BlogArchivePagination from './BlogArchivePagination';
import { useBlogPosts } from '../../../hooks/useBlogPosts';

export default function BlogArchive() {
  const {
    posts,
    categories,
    currentPage,
    totalPages,
    selectedCategory,
    setCurrentPage,
    setSelectedCategory,
    setSearchQuery,
  } = useBlogPosts();

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogArchiveFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSearch={setSearchQuery}
        />
        
        <BlogArchiveGrid posts={posts} />
        
        {totalPages > 1 && (
          <BlogArchivePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
}