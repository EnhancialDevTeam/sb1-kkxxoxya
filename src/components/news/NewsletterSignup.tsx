import { Mail } from 'lucide-react';

export default function NewsletterSignup() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest news, updates, and insights delivered straight to your inbox
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-md text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 flex-grow max-w-md"
            />
            <button className="bg-primary-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-600 inline-flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}