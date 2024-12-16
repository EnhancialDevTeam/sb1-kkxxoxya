import ServicesHero from '../components/services/ServicesHero';
import CoreServices from '../components/services/CoreServices';
import SupportServices from '../components/services/SupportServices';
import CounselingServices from '../components/services/CounselingServices';
import CareerServices from '../components/services/CareerServices';
import ServicesCTA from '../components/services/ServicesCTA';

export default function Services() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <CoreServices />
      <SupportServices />
      <CounselingServices />
      <CareerServices />
      <ServicesCTA />
    </div>
  );
}