const steps = [
  {
    title: 'Initial Consultation',
    description: 'Discuss partnership opportunities and alignment of objectives'
  },
  {
    title: 'Proposal Development',
    description: 'Create a customized partnership proposal based on mutual goals'
  },
  {
    title: 'Agreement Finalization',
    description: 'Review and finalize partnership terms and agreements'
  },
  {
    title: 'Implementation',
    description: 'Launch the partnership with dedicated support and resources'
  },
  {
    title: 'Growth & Optimization',
    description: 'Regular review and optimization of partnership outcomes'
  }
];

export default function PartnershipProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Process</h2>
          <p className="text-xl text-gray-600">
            A streamlined approach to establishing successful partnerships
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 h-full w-0.5 bg-primary-100 transform -translate-x-1/2" />
          
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
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
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