import { NewsArticle } from '../types/news';

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: "Jestone Expands Partnerships with Top UK Universities",
    slug: "jestone-uk-partnerships-2024",
    excerpt: "New collaborations with prestigious UK institutions open more opportunities for international students.",
    content: `Jestone Education is proud to announce new partnerships with several leading UK universities...`,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80",
    category: "Partnerships",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      role: "Partnership Director"
    },
    date: "2024-03-15",
    readTime: "4 min read",
    tags: ["UK", "Universities", "Partnerships"]
  },
  {
    id: '2',
    title: "New Scholarship Programs for International Students",
    slug: "new-scholarships-2024",
    excerpt: "Discover our latest scholarship opportunities for aspiring global students.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    category: "Scholarships",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      role: "Financial Aid Advisor"
    },
    date: "2024-03-10",
    readTime: "5 min read",
    tags: ["Scholarships", "Financial Aid", "Study Abroad"],
    content: `We are excited to announce new scholarship opportunities...`
  },
  {
    id: '3',
    title: "Student Success Story: From Ghana to Harvard",
    slug: "student-success-harvard",
    excerpt: "Read about Kwame's inspiring journey from Accra to Harvard University.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80",
    category: "Success Stories",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
      role: "Student Success Coordinator"
    },
    date: "2024-03-08",
    readTime: "6 min read",
    tags: ["Success Stories", "Harvard", "Ghana"],
    content: `Meet Kwame Mensah, a brilliant student from Accra who achieved his dream...`
  }
];

export const getRecentArticles = (count: number = 3): NewsArticle[] => {
  return newsArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find(article => article.slug === slug);
};