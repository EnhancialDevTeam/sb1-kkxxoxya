const destinations = [
  {
    country: 'United States',
    image: 'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?auto=format&fit=crop&q=80',
    universities: '1000+',
    students: '5000+',
  },
  {
    country: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80',
    universities: '500+',
    students: '3000+',
  },
  {
    country: 'Canada',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80',
    universities: '300+',
    students: '2500+',
  },
  {
    country: 'Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80',
    universities: '200+',
    students: '2000+',
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Study Destinations</h2>
          <p className="text-xl text-gray-600">Choose from top educational destinations worldwide</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={destination.image}
                alt={destination.country}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition-all">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{destination.country}</h3>
                  <div className="flex justify-between text-white/80">
                    <span>{destination.universities} Universities</span>
                    <span>{destination.students} Students</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}