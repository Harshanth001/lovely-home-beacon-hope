
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DonationSection from "@/components/DonationSection";
import ScheduleSection from "@/components/ScheduleSection";
import TalentShowcase from "@/components/TalentShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <DonationSection />
        <ScheduleSection />
        <TalentShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
