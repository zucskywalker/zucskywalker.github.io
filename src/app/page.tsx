import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { NewsSection } from "@/components/NewsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { InstallationGuide } from "@/components/InstallationGuide";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-14"> {/* Add padding to account for fixed navbar */}
        <Hero />
        <NewsSection />
        <FeaturesSection />
        <InstallationGuide />
        <Footer />
      </div>
    </main>
  );
}
