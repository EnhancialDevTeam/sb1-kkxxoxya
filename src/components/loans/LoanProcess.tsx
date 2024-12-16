const steps = [
  {
    step: 1,
    title: 'Check Eligibility',
    description: 'Verify if your school and program are supported',
    timeframe: '2 minutes'
  },
  {
    step: 2,
    title: 'Submit Application',
    description: 'Complete the online application with required documents',
    timeframe: '15-20 minutes'
  },
  {
    step: 3,
    title: 'Get Approval',
    description: 'Receive a conditional offer within 5 business days',
    timeframe: '5 business days'
  },
  {
    step: 4,
    title: 'Accept & Receive Funds',
    description: 'Accept your offer and funds are sent directly to your school',
    timeframe: '2-3 weeks'
  }
];

export default function LoanProcess() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple Application Process
          </h2>
          <p className="text-xl text-gray-600">
            Get your loan approved in four easy steps
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