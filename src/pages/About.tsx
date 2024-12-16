import AboutHero from '../components/about/AboutHero';
import CompanyHistory from '../components/about/CompanyHistory';
import Leadership from '../components/about/Leadership';
import MissionVision from '../components/about/MissionVision';
import Partnerships from '../components/about/Partnerships';
import AboutCTA from '../components/about/AboutCTA';

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <CompanyHistory />
      <MissionVision />
      <Leadership />
      <Partnerships />
      <AboutCTA />
    </div>
  );
}