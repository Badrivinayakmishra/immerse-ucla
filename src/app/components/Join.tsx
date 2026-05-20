import { Reveal } from "./Reveal";

export function Join() {
  return (
    <section id="join" className="bg-forest text-cream py-32 md:py-44 px-6 md:px-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <Reveal>
            <span className="sticker bg-cream text-ink">04 / Join</span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display text-[clamp(3rem,9.5vw,8.5rem)] mt-6 leading-[0.85]">
              Put it <br />
              <span className="italic text-amber">on.</span>
            </h2>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-cream/90">
              Membership is open to any UCLA student (undergrad, graduate, or
              professional) with an interest in immersive technology and
              healthcare. No prior 3D or coding experience required.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-5 flex flex-col gap-4">
          {[
            { kicker: "Email", title: "immerse.ucla@gmail.com", href: "mailto:immerse.ucla@gmail.com" },
            { kicker: "Membership form", title: "Apply for fall '26", href: "#" },
            { kicker: "Instagram", title: "@immerse.ucla", href: "#" },
          ].map((item, i) => (
            <Reveal key={item.kicker} direction="left" delay={i * 120}>
              <a
                href={item.href}
                className="group flex items-center justify-between border-2 border-cream rounded-2xl p-6 hover:bg-cream hover:text-ink transition-colors"
              >
                <span>
                  <span className="block text-[11px] uppercase tracking-widest opacity-70">
                    {item.kicker}
                  </span>
                  <span className="display text-2xl md:text-3xl block mt-1">
                    {item.title}
                  </span>
                </span>
                <span className="display text-3xl group-hover:translate-x-1 transition-transform" aria-hidden>↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
