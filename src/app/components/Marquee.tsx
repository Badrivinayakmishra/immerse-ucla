export function Marquee() {
  return (
    <div className="bg-forest text-cream border-y-2 border-ink overflow-hidden -mt-6 relative z-20">
      <div className="py-5 marquee">
        {[...row1, ...row1].map((item, i) => (
          <span
            key={`a-${i}`}
            className="display text-5xl md:text-7xl whitespace-nowrap px-6 flex items-center gap-6"
          >
            {item}
            <Asterisk />
          </span>
        ))}
      </div>
      <div className="border-t border-cream/30 py-5 bg-orange text-ink marquee-reverse">
        {[...row2, ...row2].map((item, i) => (
          <span
            key={`b-${i}`}
            className="display text-4xl md:text-6xl whitespace-nowrap px-6 flex items-center gap-6"
          >
            {item}
            <span className="text-forest text-2xl">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

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
  "Pre-Med × XR",
  "WebXR Fridays",
  "Quest 3 · Vision Pro",
  "DGSOM Collab",
  "Apply now",
];

function Asterisk() {
  return <span className="text-amber text-3xl" aria-hidden>✺</span>;
}
