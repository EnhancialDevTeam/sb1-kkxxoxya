import { ArrowRight } from 'lucide-react';

export default function LoanCTA() {
  return (
    <section className="py-24 bg-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Ready to Fund Your Education?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://prodigyfinance.com/?utm_source=jestone-education&utm_medium=website&utm_content=homepage&utm_campaign=partners-jestone-education-referral-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-500 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 inline-flex items-center"
          >
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10">
            Speak to an Advisor
          </button>
        </div>
      </div>
    </section>
  );
}