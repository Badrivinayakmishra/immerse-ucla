import { Intro } from "./components/Intro";
import { MotionEngine } from "./components/MotionEngine";
import { HeroNarrative } from "./components/HeroNarrative";
import { CardStackProjects } from "./components/CardStackProjects";
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
        <Hero />
        <Marquee />
        <About />
        <GraphicBreak
          bg="bg-sky"
          markColor="var(--color-ink)"
          mark="headset"
          caption="Put it on."
        />
        <Projects />
        <Manifesto
          bg="bg-amber"
          textColor="text-ink"
          kicker="The pillars"
          lines={["Build.", "Study.", "Translate."]}
          accentWord="Translate."
          accentColor="var(--forest)"
        />
        <Team />
        <Join />
      </main>
      <Footer />
    </>
  );
}
