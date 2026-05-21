import { Intro } from "./components/Intro";
import { MotionEngine } from "./components/MotionEngine";
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
      <HeroNarrative />
      <CardStackProjects />
      <Intro />
      <Nav />
      <main>
        <ScrubSection bg="bg-paper" dwell={1.0}>
          <Hero />
        </ScrubSection>
        <Marquee />
        <ScrubSection bg="bg-cream" dwell={1.0}>
          <About />
        </ScrubSection>
        <ScrubSection bg="bg-sky" dwell={0.8}>
          <GraphicBreak
            bg="bg-sky"
            markColor="var(--color-ink)"
            mark="headset"
            caption="Put it on."
          />
        </ScrubSection>
        <ScrubSection bg="bg-paper" dwell={1.3}>
          <Projects />
        </ScrubSection>
        <ScrubSection bg="bg-amber" dwell={0.7}>
          <Manifesto
            bg="bg-amber"
            textColor="text-ink"
            kicker="The pillars"
            lines={["Build.", "Study.", "Translate."]}
            accentWord="Translate."
            accentColor="var(--forest)"
          />
        </ScrubSection>
        <ScrubSection bg="bg-cream" dwell={1.1}>
          <Team />
        </ScrubSection>
        <ScrubSection bg="bg-forest" dwell={0.9} recede={false}>
          <Join />
        </ScrubSection>
      </main>
      <Footer />
    </>
  );
}
