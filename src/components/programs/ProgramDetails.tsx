const levels = [
  {
    title: 'Undergraduate',
    description: 'Bachelor degrees across various disciplines',
    duration: '3-4 years',
    requirements: [
      'High School Certificate',
      'English Proficiency (IELTS/TOEFL)',
      'Statement of Purpose',
      'Letters of Recommendation'
    ]
  },
  {
    title: 'Postgraduate',
    description: 'Master\'s degrees and specialized programs',
    duration: '1-2 years',
    requirements: [
      'Bachelor\'s Degree',
      'English Proficiency (IELTS/TOEFL)',
      'Work Experience (for some programs)',
      'Research Proposal (for research degrees)'
    ]
  },
  {
    title: 'Doctorate',
    description: 'PhD and doctoral research programs',
    duration: '3-5 years',
    requirements: [
      'Master\'s Degree',
      'Research Proposal',
      'Academic References',
      'Interview'
    ]
  }
];

export default function ProgramDetails() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Levels</h2>
          <p className="text-xl text-gray-600">
            Comprehensive education options for every stage of your academic journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-primary-500 mb-4">
                {level.title}
              </h3>
              <p className="text-gray-600 mb-4">{level.description}</p>
              <p className="text-gray-700 font-medium mb-4">
                Duration: {level.duration}
              </p>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                <ul className="space-y-2">
                  {level.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}