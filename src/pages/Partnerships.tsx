import PartnershipsHero from '../components/partnerships/PartnershipsHero';
import PartnershipOverview from '../components/partnerships/PartnershipOverview';
import PartnershipBenefits from '../components/partnerships/PartnershipBenefits';
import PartnershipContact from '../components/partnerships/PartnershipContact';

export default function Partnerships() {
  return (
    <div className="min-h-screen">
      <PartnershipsHero />
      <PartnershipOverview />
      <PartnershipBenefits />
      <PartnershipContact />
    </div>
  );
}