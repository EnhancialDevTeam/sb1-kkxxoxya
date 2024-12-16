import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(10);
  const interestRate = 0.115; // 11.5% example rate

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return monthlyPayment.toFixed(2);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Loan Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Estimate your monthly payments
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (USD)
                </label>
                <input
                  type="range"
                  min="10000"
                  max="100000"
                  step="1000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-2xl font-bold text-primary-500 mt-2">
                  ${loanAmount.toLocaleString()}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term (Years)
                </label>
                <input
                  type="range"
                  min="5"
                  max="15"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-2xl font-bold text-primary-500 mt-2">
                  {loanTerm} years
                </div>
              </div>

              <div className="pt-6 border-t">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">
                    Estimated Monthly Payment*
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    ${calculateMonthlyPayment()}
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                * This is an estimate only. Actual rates and payments may vary based on your profile, 
                program, and market conditions. Variable rates are comprised of an individual fixed 
                margin rate plus a quarterly averaged US SOFR base rate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}