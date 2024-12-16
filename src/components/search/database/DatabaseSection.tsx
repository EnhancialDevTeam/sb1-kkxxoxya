import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import VisaRequirements from './VisaRequirements';
import AdmissionRequirements from './AdmissionRequirements';
import ScholarshipOpportunities from './ScholarshipOpportunities';
import LanguageRequirements from './LanguageRequirements';
import ApplicationDeadlines from './ApplicationDeadlines';

export default function DatabaseSection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Resource Database
      </h2>

      <Tabs defaultValue="visa">
        <TabsList>
          <TabsTrigger value="visa">Visa Requirements</TabsTrigger>
          <TabsTrigger value="admission">Admission Requirements</TabsTrigger>
          <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
          <TabsTrigger value="language">Language Tests</TabsTrigger>
          <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
        </TabsList>

        <TabsContent value="visa">
          <VisaRequirements />
        </TabsContent>
        <TabsContent value="admission">
          <AdmissionRequirements />
        </TabsContent>
        <TabsContent value="scholarships">
          <ScholarshipOpportunities />
        </TabsContent>
        <TabsContent value="language">
          <LanguageRequirements />
        </TabsContent>
        <TabsContent value="deadlines">
          <ApplicationDeadlines />
        </TabsContent>
      </Tabs>
    </div>
  );
}