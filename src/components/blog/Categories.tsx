const categories = [
  { name: 'Study Guides', count: 15 },
  { name: 'Test Preparation', count: 12 },
  { name: 'Student Life', count: 8 },
  { name: 'Application Tips', count: 10 },
  { name: 'Visa Guide', count: 7 },
  { name: 'Financial Aid', count: 9 },
  { name: 'Career Advice', count: 11 },
  { name: 'Destinations', count: 14 }
];

export default function Categories() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Categories</h2>
      <ul className="space-y-3">
        {categories.map((category, index) => (
          <li key={index}>
            <button className="w-full flex items-center justify-between text-left hover:text-primary-500 transition-colors">
              <span>{category.name}</span>
              <span className="text-gray-500 text-sm">{category.count}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}