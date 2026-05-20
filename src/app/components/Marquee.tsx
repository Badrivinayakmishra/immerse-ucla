export function Marquee() {
  const items = [
    "Virtual Reality",
    "Anatomy",
    "Surgical Simulation",
    "Spatial Computing",
    "Neuroscience",
    "Patient Empathy",
    "Genomics in 3D",
    "Telemedicine",
    "Clinical Training",
  ];
  const repeated = [...items, ...items];

  return (
    <div className="bg-forest text-cream border-y-2 border-ink overflow-hidden py-6">
      <div className="marquee">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="display text-5xl md:text-6xl whitespace-nowrap px-8 flex items-center gap-8"
          >
            {item}
            <span className="text-amber text-3xl" aria-hidden>✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}
