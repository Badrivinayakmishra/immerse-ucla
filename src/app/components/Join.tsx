export function Join() {
  return (
    <section id="join" className="bg-forest text-cream border-t-2 border-ink py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <span className="sticker bg-cream text-ink">04 — Join</span>
          <h2 className="display text-[clamp(3rem,9vw,8rem)] mt-6">
            Put it <br />
            <span className="italic text-amber">on.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-cream/90">
            Membership is open to any UCLA student — undergraduate, graduate,
            or professional — with an interest in immersive technology and
            healthcare. No prior 3D or coding experience required.
          </p>
        </div>

        <div className="md:col-span-5 flex flex-col gap-4">
          <a
            href="mailto:immerse.ucla@gmail.com"
            className="group flex items-center justify-between border-2 border-cream rounded-2xl p-6 hover:bg-cream hover:text-ink transition-colors"
          >
            <span>
              <span className="block text-[11px] uppercase tracking-widest opacity-70">
                Email
              </span>
              <span className="display text-2xl md:text-3xl block mt-1">
                immerse.ucla@gmail.com
              </span>
            </span>
            <span className="display text-3xl group-hover:translate-x-1 transition-transform" aria-hidden>↗</span>
          </a>

          <a
            href="#"
            className="group flex items-center justify-between border-2 border-cream rounded-2xl p-6 hover:bg-cream hover:text-ink transition-colors"
          >
            <span>
              <span className="block text-[11px] uppercase tracking-widest opacity-70">
                Membership form
              </span>
              <span className="display text-2xl md:text-3xl block mt-1">
                Apply for fall &apos;26
              </span>
            </span>
            <span className="display text-3xl group-hover:translate-x-1 transition-transform" aria-hidden>↗</span>
          </a>

          <a
            href="#"
            className="group flex items-center justify-between border-2 border-cream rounded-2xl p-6 hover:bg-cream hover:text-ink transition-colors"
          >
            <span>
              <span className="block text-[11px] uppercase tracking-widest opacity-70">
                Instagram
              </span>
              <span className="display text-2xl md:text-3xl block mt-1">
                @immerse.ucla
              </span>
            </span>
            <span className="display text-3xl group-hover:translate-x-1 transition-transform" aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
