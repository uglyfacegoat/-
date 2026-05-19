import { useState } from "react";
import { LeadModal } from "./components/lead-modal";
import { CasesSection } from "./sections/CasesSection";
import { FinalLeadSection } from "./sections/FinalLeadSection";
import { Footer } from "./sections/Footer";
import { HeroSection } from "./sections/HeroSection";
import { LeadRequestSection } from "./sections/LeadRequestSection";
import { ProcessSection } from "./sections/ProcessSection";
import { ReliabilitySection } from "./sections/ReliabilitySection";
import { TypesSection } from "./sections/TypesSection";
import { COLORS } from "./theme";
import { trackGoal } from "./utils/analytics";

export default function App() {
  const [modal, setModal] = useState<{
    open: boolean;
    type?: string;
    title?: string;
    subtitle?: string;
  }>({ open: false });
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = (
    opts: { type?: string; title?: string; subtitle?: string } = {},
  ) => {
    trackGoal("modal_open");
    setModal({ open: true, ...opts });
  };

  return (
    <div style={{ background: COLORS.warmBg, color: COLORS.text }}>
      <HeroSection
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        openModal={() => openModal()}
      />
      <ReliabilitySection openModal={openModal} />
      <TypesSection openModal={openModal} />
      <CasesSection openModal={openModal} />
      <ProcessSection />
      <FinalLeadSection />
      <LeadRequestSection faqOpen={faqOpen} setFaqOpen={setFaqOpen} />
      <Footer />

      <LeadModal
        open={modal.open}
        onClose={() => setModal({ open: false })}
        title={modal.title}
        subtitle={modal.subtitle}
        defaultType={modal.type}
      />
    </div>
  );
}
