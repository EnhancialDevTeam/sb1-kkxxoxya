import { Gift, DollarSign } from 'lucide-react';

export default function ReferRewards() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Rewards</h2>
          <p className="text-xl text-gray-600">
            Earn fantastic rewards every time you make a successful referral
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-primary-50 rounded-lg p-8 text-center">
          <Gift className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            £100 Gift Voucher
          </h3>
          <p className="text-xl text-gray-600 mb-6">
            For each successful referral
          </p>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-900 mb-4">What counts as a successful referral?</h4>
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Your referred friend must create a Jestone Education account using your referral code
                </span>
              </li>
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  They must enroll in an educational institution with which Jestone Education has a contract
                </span>
              </li>
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  The enrollment must be for a minimum one-year course
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}