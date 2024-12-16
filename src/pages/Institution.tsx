import { useParams } from 'react-router-dom';
import { mockInstitutions } from '../data/mockInstitutions';
import InstitutionHeader from '../components/destinations/institution/InstitutionHeader';
import InstitutionOverview from '../components/destinations/institution/InstitutionOverview';
import ProgramsOffered from '../components/destinations/institution/ProgramsOffered';
import AdmissionRequirements from '../components/destinations/institution/AdmissionRequirements';
import CampusLife from '../components/destinations/institution/CampusLife';
import InstitutionCTA from '../components/destinations/institution/InstitutionCTA';

export default function Institution() {
  const { id } = useParams<{ id: string }>();
  const institution = mockInstitutions.find(inst => inst.id === id);

  if (!institution) {
    return <div>Institution not found</div>;
  }

  return (
    <div className="min-h-screen">
      <InstitutionHeader institution={institution} />
      <InstitutionOverview institution={institution} />
      <ProgramsOffered institution={institution} />
      <AdmissionRequirements institution={institution} />
      <CampusLife institution={institution} />
      <InstitutionCTA institution={institution} />
    </div>
  );
}