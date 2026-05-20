import { Intro } from "./components/Intro";
import { SmoothScroll } from "./components/SmoothScroll";
import { ScrollChoreography } from "./components/ScrollChoreography";
import { Stage } from "./components/Stage";
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
      <SmoothScroll />
      <ScrollChoreography />
      <Intro />
      <Nav />
      <main>
        <Stage dwell={1.4}>
          <Hero />
        </Stage>
        <Marquee />
        <Stage dwell={1.4}>
          <About />
        </Stage>
        <Stage dwell={0.9}>
          <Manifesto
            bg="bg-paper"
            textColor="text-ink"
            kicker="Our promise"
            lines={["Medicine", "in 3D."]}
            accentWord="3D"
            accentColor="var(--orange)"
          />
        </Stage>
        <Stage dwell={1.2}>
          <GraphicBreak
            bg="bg-sky"
            markColor="var(--color-ink)"
            mark="headset"
            caption="Put it on."
          />
        </Stage>
        <Stage dwell={1.8}>
          <Projects />
        </Stage>
        <Stage dwell={1.2}>
          <GraphicBreak
            bg="bg-orange"
            markColor="var(--color-paper)"
            mark="cross"
            caption="Medicine, in three dimensions."
            captionColor="text-paper/80"
          />
        </Stage>
        <Stage dwell={0.9}>
          <Manifesto
            bg="bg-amber"
            textColor="text-ink"
            kicker="The pillars"
            lines={["Build.", "Study.", "Translate."]}
            accentWord="Translate."
            accentColor="var(--forest)"
          />
        </Stage>
        <Stage dwell={1.4}>
          <Team />
        </Stage>
        <Stage dwell={1.2}>
          <Join />
        </Stage>
      </main>
      <Footer />
    </>
  );
}
