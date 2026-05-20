import { Intro } from "./components/Intro";
import { MotionEngine } from "./components/MotionEngine";
import { MagneticCursor } from "./components/MagneticCursor";
import { HeroNarrative } from "./components/HeroNarrative";
import { CardStackProjects } from "./components/CardStackProjects";
import { ScrubSection } from "./components/ScrubSection";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Manifesto } from "./components/Manifesto";
import { GraphicBreak } from "./components/GraphicBreak";
import { Projects } from "./components/Projects";
import { Team } from "./components/Team";
import { Join } from "./components/Join";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <MotionEngine />
      <MagneticCursor />
      <HeroNarrative />
      <CardStackProjects />
      <Intro />
      <Nav />
      <main>
        <ScrubSection dwell={1.2}>
          <Hero />
        </ScrubSection>
        <Marquee />
        <ScrubSection dwell={1.3}>
          <About />
        </ScrubSection>
        <ScrubSection dwell={0.7}>
          <Manifesto
            bg="bg-paper"
            textColor="text-ink"
            kicker="Our promise"
            lines={["Medicine", "in 3D."]}
            accentWord="3D"
            accentColor="var(--orange)"
          />
        </ScrubSection>
        <ScrubSection dwell={1.0}>
          <GraphicBreak
            bg="bg-sky"
            markColor="var(--color-ink)"
            mark="headset"
            caption="Put it on."
          />
        </ScrubSection>
        <ScrubSection dwell={1.6}>
          <Projects />
        </ScrubSection>
        <ScrubSection dwell={1.0}>
          <GraphicBreak
            bg="bg-orange"
            markColor="var(--color-paper)"
            mark="cross"
            caption="Medicine, in three dimensions."
            captionColor="text-paper/80"
          />
        </ScrubSection>
        <ScrubSection dwell={0.7}>
          <Manifesto
            bg="bg-amber"
            textColor="text-ink"
            kicker="The pillars"
            lines={["Build.", "Study.", "Translate."]}
            accentWord="Translate."
            accentColor="var(--forest)"
          />
        </ScrubSection>
        <ScrubSection dwell={1.3}>
          <Team />
        </ScrubSection>
        <ScrubSection dwell={1.0} recede={false}>
          <Join />
        </ScrubSection>
      </main>
      <Footer />
    </>
  );
}
