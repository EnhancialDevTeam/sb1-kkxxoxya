import ReferHero from '../components/refer/ReferHero';
import ReferOverview from '../components/refer/ReferOverview';
import ReferProcess from '../components/refer/ReferProcess';
import ReferRewards from '../components/refer/ReferRewards';
import ReferEligibility from '../components/refer/ReferEligibility';
import ReferRegistration from '../components/refer/ReferRegistration';
import ReferFAQ from '../components/refer/ReferFAQ';

export default function ReferAndEarn() {
  return (
    <div className="min-h-screen">
      <ReferHero />
      <ReferOverview />
      <ReferProcess />
      <ReferRewards />
      <ReferEligibility />
      <ReferRegistration />
      <ReferFAQ />
    </div>
  );
}