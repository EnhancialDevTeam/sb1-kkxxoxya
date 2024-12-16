const steps = [
  {
    step: 1,
    title: 'Register & Get Code',
    description: 'Sign up for the Refer and Earn programme to receive your unique referral code',
    timeframe: '2 minutes'
  },
  {
    step: 2,
    title: 'Share with Friends',
    description: 'Spread the word by sharing your referral code with friends, family, and anyone interested in studying abroad',
    timeframe: 'Anytime'
  },
  {
    step: 3,
    title: 'Friend Enrolls',
    description: 'When someone uses your referral code to create an account with Jestone Education and enrolls in an educational institution with a minimum one-year course',
    timeframe: '1-3 months'
  },
  {
    step: 4,
    title: 'Receive Reward',
    description: 'Get your £100 reward once your referred friend meets the enrollment criteria',
    timeframe: 'Within 30 days'
  }
];

export default function ReferProcess() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Follow these simple steps to start earning rewards
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 h-full w-0.5 bg-primary-100 transform -translate-x-1/2 md:block hidden" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
              >
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-sm text-primary-500">
                      Estimated time: {step.timeframe}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-primary-500 rounded-full p-2">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
                
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}