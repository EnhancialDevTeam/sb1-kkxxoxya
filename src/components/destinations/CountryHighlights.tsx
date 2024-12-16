const countries = [
  {
    name: 'United States',
    highlights: [
      { label: 'Average Tuition', value: '$20,000 - $45,000/year' },
      { label: 'Living Costs', value: '$15,000 - $25,000/year' },
      { label: 'Work Rights', value: '20 hours/week during study' },
      { label: 'Post-Study Work', value: 'Up to 3 years (OPT)' }
    ]
  },
  {
    name: 'United Kingdom',
    highlights: [
      { label: 'Average Tuition', value: '£12,000 - £35,000/year' },
      { label: 'Living Costs', value: '£12,000 - £15,000/year' },
      { label: 'Work Rights', value: '20 hours/week during study' },
      { label: 'Post-Study Work', value: '2 years' }
    ]
  },
  {
    name: 'Canada',
    highlights: [
      { label: 'Average Tuition', value: 'CAD 15,000 - 35,000/year' },
      { label: 'Living Costs', value: 'CAD 12,000 - 18,000/year' },
      { label: 'Work Rights', value: '20 hours/week during study' },
      { label: 'Post-Study Work', value: 'Up to 3 years' }
    ]
  }
];

export default function CountryHighlights() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Country-Specific Information
          </h2>
          <p className="text-xl text-gray-600">
            Essential details to help you plan your study abroad journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-primary-500 mb-6">
                {country.name}
              </h3>
              <div className="space-y-4">
                {country.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-gray-600">{highlight.label}</span>
                    <span className="font-medium text-gray-900">{highlight.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}