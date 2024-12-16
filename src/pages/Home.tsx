import Hero from '../components/hero/Hero';
import Overview from '../components/overview/Overview';
import Services from '../components/services/Services';
import Testimonials from '../components/testimonials/Testimonials';
import News from '../components/news/News';
import Destinations from '../components/Destinations';
import CTA from '../components/cta/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Services />
      <Testimonials />
      <News />
      <Destinations />
      <CTA />
    </>
  );
}