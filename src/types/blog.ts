export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  tags: string[];
}

export interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  date: string;
}