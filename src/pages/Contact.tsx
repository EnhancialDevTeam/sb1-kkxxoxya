import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import OfficeLocations from '../components/contact/OfficeLocations';
import ContactFAQ from '../components/contact/ContactFAQ';
import ContactCTA from '../components/contact/ContactCTA';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <OfficeLocations />
        </div>
      </div>
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
}