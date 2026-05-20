import { VelocityMarquee } from "./VelocityMarquee";

const row1 = [
  "Virtual Reality",
  "Anatomy in 3D",
  "Surgical Simulation",
  "Spatial Computing",
  "Neuroscience",
  "Patient Empathy",
  "Telemedicine",
  "Clinical Training",
];

const row2 = [
  "Build · Study · Translate",
  "Pre-Med x XR",
  "WebXR Fridays",
  "Quest 3 · Vision Pro",
  "DGSOM Collab",
  "Apply now",
];

const row1Items = row1.flatMap((item) => [item, "✺"]);
const row2Items = row2.flatMap((item) => [item, "●"]);

export function Marquee() {
  return (
    <div className="bg-forest text-cream border-y-2 border-ink relative z-20 -mt-6">
      <VelocityMarquee
        items={row1Items}
        baseSpeed={70}
        direction={1}
        className="py-5"
        itemClassName="display text-5xl md:text-7xl px-6 flex items-center gap-6 text-cream [&:nth-child(even)]:text-amber"
      />
      <VelocityMarquee
        items={row2Items}
        baseSpeed={55}
        direction={-1}
        className="border-t border-cream/30 py-5 bg-orange"
        itemClassName="display text-4xl md:text-6xl px-6 flex items-center gap-6 text-ink [&:nth-child(even)]:text-forest"
      />
    </div>
  );
}
