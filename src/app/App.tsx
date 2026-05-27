import { useState } from "react";
import { CasesSection } from "./sections/CasesSection";
import { FinalLeadSection } from "./sections/FinalLeadSection";
import { Footer } from "./sections/Footer";
import { HeroSection } from "./sections/HeroSection";
import { LeadRequestSection } from "./sections/LeadRequestSection";
import { ProcessSection } from "./sections/ProcessSection";
import { ReliabilitySection } from "./sections/ReliabilitySection";
import { TypesSection } from "./sections/TypesSection";
import { COLORS } from "./theme";
import { FloatingContacts } from "./components/floating-contacts";

export default function App() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div style={{ background: COLORS.warmBg, color: COLORS.text }}>
      <HeroSection
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onContactClick={scrollToContact}
      />
      <ReliabilitySection onContactClick={scrollToContact} />
      <TypesSection onContactClick={scrollToContact} />
      <CasesSection onContactClick={scrollToContact} />
      <ProcessSection />
      <FinalLeadSection />
      <LeadRequestSection faqOpen={faqOpen} setFaqOpen={setFaqOpen} />
      <Footer />
      <FloatingContacts />
    </div>
  );
}
