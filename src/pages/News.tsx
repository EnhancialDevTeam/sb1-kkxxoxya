import { useState } from 'react';
import NewsHero from '../components/news/NewsHero';
import NewsGrid from '../components/news/NewsGrid';
import NewsFilters from '../components/news/NewsFilters';
import NewsletterSignup from '../components/news/NewsletterSignup';
import { newsArticles } from '../data/newsArticles';

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Partnerships', count: 5 },
    { name: 'Scholarships', count: 3 },
    { name: 'Success Stories', count: 4 }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <NewsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <NewsFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSearch={setSearchQuery}
        />
        <NewsGrid articles={filteredArticles} />
      </div>
      <NewsletterSignup />
    </div>
  );
}