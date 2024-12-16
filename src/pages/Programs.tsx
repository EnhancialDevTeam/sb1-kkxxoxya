import ProgramsHero from '../components/programs/ProgramsHero';
import FeaturedPrograms from '../components/programs/FeaturedPrograms';
import ProgramDetails from '../components/programs/ProgramDetails';
import WhyChooseUs from '../components/programs/WhyChooseUs';
import ProgramsTestimonials from '../components/programs/ProgramsTestimonials';
import ProgramsFAQ from '../components/programs/ProgramsFAQ';
import ProgramsCTA from '../components/programs/ProgramsCTA';

export default function Programs() {
  return (
    <div className="min-h-screen">
      <ProgramsHero />
      <FeaturedPrograms />
      <ProgramDetails />
      <WhyChooseUs />
      <ProgramsTestimonials />
      <ProgramsFAQ />
      <ProgramsCTA />
    </div>
  );
}