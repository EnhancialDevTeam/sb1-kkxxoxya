export default function ContactHero() {
  return (
    <section className="relative h-[50vh] pt-16 bg-gradient-to-br from-primary-900 to-primary-700">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
          alt="Contact us"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch with Jestone Education
          </h1>
          <p className="text-xl text-primary-100">
            Have questions about studying abroad? Our expert counselors are here to help.
            Reach out to us for personalized guidance on your educational journey.
          </p>
        </div>
      </div>
    </section>
  );
}