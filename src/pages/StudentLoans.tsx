import StudentLoansHero from '../components/loans/StudentLoansHero';
import LoanFeatures from '../components/loans/LoanFeatures';
import LoanProcess from '../components/loans/LoanProcess';
import LoanEligibility from '../components/loans/LoanEligibility';
import LoanCalculator from '../components/loans/LoanCalculator';
import LoanTestimonials from '../components/loans/LoanTestimonials';
import LoanFAQ from '../components/loans/LoanFAQ';
import LoanCTA from '../components/loans/LoanCTA';

export default function StudentLoans() {
  return (
    <div className="min-h-screen">
      <StudentLoansHero />
      <LoanFeatures />
      <LoanProcess />
      <LoanEligibility />
      <LoanCalculator />
      <LoanTestimonials />
      <LoanFAQ />
      <LoanCTA />
    </div>
  );
}