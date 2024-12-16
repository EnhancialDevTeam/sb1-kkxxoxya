import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-4">
      <div className="text-gray-500 flex flex-col items-center">
        <Share2 className="w-5 h-5 mb-2" />
        <span className="text-sm">Share</span>
      </div>
      
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-500 hover:text-primary-500 transition-colors"
      >
        <Facebook className="w-5 h-5" />
      </a>
      
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-500 hover:text-primary-500 transition-colors"
      >
        <Twitter className="w-5 h-5" />
      </a>
      
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-500 hover:text-primary-500 transition-colors"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      
      <button
        onClick={copyToClipboard}
        className="p-2 text-gray-500 hover:text-primary-500 transition-colors"
      >
        <LinkIcon className="w-5 h-5" />
      </button>
    </div>
  );
}