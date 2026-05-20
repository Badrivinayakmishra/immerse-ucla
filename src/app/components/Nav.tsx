import Image from "next/image";
import { asset } from "./asset";

export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-5">
      <a href="#top" className="flex items-center gap-3">
        <Image src={asset("/logo.png")} alt="IMMERSE" width={140} height={42} priority className="h-9 w-auto" />
      </a>
      <ul className="hidden md:flex items-center gap-7 text-[13px] font-medium uppercase tracking-wider">
        <li><a href="#about" className="hover:text-orange transition-colors">About</a></li>
        <li><a href="#projects" className="hover:text-orange transition-colors">Projects</a></li>
        <li><a href="#team" className="hover:text-orange transition-colors">Team</a></li>
        <li><a href="#join" className="hover:text-orange transition-colors">Join</a></li>
      </ul>
      <a
        href="#join"
        className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink text-paper px-5 py-2.5 text-[13px] font-medium uppercase tracking-wider hover:bg-forest transition-colors"
      >
        Apply
        <span aria-hidden>↗</span>
      </a>
      <a
        href="#join"
        className="md:hidden inline-flex items-center gap-2 rounded-full bg-ink text-paper px-4 py-2 text-xs font-medium uppercase"
      >
        Apply
      </a>
    </nav>
  );
}
