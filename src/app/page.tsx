import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import ImportantDatesSection from '@/components/ImportantDatesSection';
import KeynoteSection from '@/components/KeynoteSection';
import ProgramSection from '@/components/ProgramSection';
import RegistrationSection from '@/components/RegistrationSection';
import VenueSection from '@/components/VenueSection';
import CommitteeSection from '@/components/CommitteeSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <ImportantDatesSection />
      <KeynoteSection />
      <ProgramSection />
      <RegistrationSection />
      <VenueSection />
      <CommitteeSection />
      <Footer />
    </main>
  );
}
