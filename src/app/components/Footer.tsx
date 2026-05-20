import Image from "next/image";
import { asset } from "./asset";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="bg-orange text-forest relative overflow-hidden">
      <div className="px-6 md:px-10 pt-24 md:pt-28">
        <Reveal direction="up" amount={120}>
          <h2
            className="shout text-[clamp(6rem,28vw,28rem)] leading-[0.78] -tracking-[0.01em] text-forest text-center select-none"
            aria-hidden
          >
            IMMERSE<span className="text-ink">.</span>
          </h2>
        </Reveal>
      </div>

      <div className="bg-ink text-paper px-6 md:px-10 py-10 mt-6 border-t-2 border-ink">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="flex flex-col gap-4">
            <Image
              src={asset("/logo.png")}
              alt="IMMERSE"
              width={180}
              height={54}
              className="h-9 w-auto invert"
            />
            <p className="text-sm text-paper/60 max-w-xs">
              A UCLA student organization. Not affiliated with the Regents.
              Independently run by Bruins.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <Social label="Instagram" href="#" emoji="◎" />
              <Social label="TikTok" href="#" emoji="♪" />
              <Social label="LinkedIn" href="#" emoji="in" />
              <Social label="Email" href="mailto:immerse.ucla@gmail.com" emoji="@" />
            </div>
          </div>
          <div className="text-sm text-paper/70 flex flex-col md:items-end gap-2">
            <span>© {new Date().getFullYear()} IMMERSE at UCLA</span>
            <span className="text-paper/40">Los Angeles, CA · MMXXVI</span>
            <span className="text-paper/40 text-xs uppercase tracking-widest">
              Built with care by Bruins.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({ label, href, emoji }: { label: string; href: string; emoji: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full border-2 border-paper/40 flex items-center justify-center text-xs font-bold hover:bg-paper hover:text-ink transition-colors"
    >
      {emoji}
    </a>
  );
}
