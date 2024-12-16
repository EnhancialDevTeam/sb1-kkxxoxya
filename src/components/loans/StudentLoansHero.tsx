import { ArrowRight } from 'lucide-react';

export default function StudentLoansHero() {
  return (
    <section className="relative h-[70vh] pt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
          alt="Student studying abroad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 text-primary-100 mb-4">
            <img
              src="https://prodigyfinance.com/favicon.ico"
              alt="Prodigy Finance"
              className="w-6 h-6"
            />
            <span>In partnership with Prodigy Finance</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Fund Your International Education Dreams
          </h1>
          <p className="text-xl text-primary-100 mb-8">
            Access flexible student loans with competitive interest rates and no collateral required
          </p>
          <a
            href="https://prodigyfinance.com/?utm_source=jestone-education&utm_medium=website&utm_content=homepage&utm_campaign=partners-jestone-education-referral-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-500 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 inline-flex items-center"
          >
            Check Your Eligibility <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}