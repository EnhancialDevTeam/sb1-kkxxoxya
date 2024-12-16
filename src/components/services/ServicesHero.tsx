export default function ServicesHero() {
  return (
    <section className="relative h-[60vh] pt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
          alt="Students receiving guidance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Comprehensive Support for Your Educational Journey</h1>
          <p className="text-xl opacity-90">
            From academic counseling to visa assistance, we provide end-to-end services
            to help you achieve your international education goals.
          </p>
        </div>
      </div>
    </section>
  );
}