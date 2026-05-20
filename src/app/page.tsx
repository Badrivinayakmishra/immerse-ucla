import { Intro } from "./components/Intro";
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
      <Intro />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Manifesto
          bg="bg-paper"
          textColor="text-ink"
          kicker="Our promise"
          lines={["Medicine", "in 3D."]}
          accentWord="3D"
          accentColor="var(--orange)"
        />
        <GraphicBreak
          bg="bg-sky"
          markColor="var(--color-ink)"
          mark="headset"
          caption="Put it on."
        />
        <Projects />
        <GraphicBreak
          bg="bg-orange"
          markColor="var(--color-paper)"
          mark="cross"
          caption="Medicine, in three dimensions."
          captionColor="text-paper/80"
        />
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
