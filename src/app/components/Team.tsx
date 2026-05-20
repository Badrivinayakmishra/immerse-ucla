type Member = {
  name: string;
  role: string;
  bg: string;
  initials: string;
};

const team: Member[] = [
  { name: "Founding President", role: "President", bg: "bg-forest", initials: "FP" },
  { name: "VP, Build", role: "Engineering lead", bg: "bg-sky", initials: "VB" },
  { name: "VP, Study", role: "Research lead", bg: "bg-amber", initials: "VS" },
  { name: "VP, Translate", role: "Outreach lead", bg: "bg-orange", initials: "VT" },
  { name: "Design Director", role: "Brand & UX", bg: "bg-lime", initials: "DD" },
  { name: "Faculty Advisor", role: "DGSOM faculty", bg: "bg-cream", initials: "FA" },
];

export function Team() {
  return (
    <section id="team" className="bg-paper py-28 md:py-40 px-6 md:px-10 border-t-2 border-ink/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="sticker bg-cream">03 — Team</span>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] mt-6 text-ink">
              Founding <span className="italic text-orange">crew</span>.
            </h2>
          </div>
          <p className="md:max-w-sm text-ink/70 text-base">
            Six roles, opening week 1 of fall &apos;26. Apply if you want to set the
            tone for what IMMERSE becomes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {team.map((m) => (
            <article
              key={m.role}
              className={`${m.bg} border-2 border-ink rounded-2xl p-4 aspect-[3/4] flex flex-col justify-between`}
            >
              <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/70">
                Open
              </span>
              <div className="display text-6xl text-ink/30 self-end">
                {m.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{m.name}</div>
                <div className="text-xs text-ink/70 uppercase tracking-wider mt-1">
                  {m.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
