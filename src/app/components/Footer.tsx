import Image from "next/image";
import { asset } from "./asset";

export function Footer() {
  return (
    <footer className="bg-ink text-paper px-6 md:px-10 py-14">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <Image
            src={asset("/logo.png")}
            alt="IMMERSE"
            width={180}
            height={54}
            className="h-10 w-auto invert"
          />
          <p className="mt-4 text-sm text-paper/60 max-w-xs">
            UCLA student organization. Not affiliated with the Regents.
            Independently run by students.
          </p>
        </div>
        <div className="text-sm text-paper/70 flex flex-col md:items-end gap-1">
          <span>© {new Date().getFullYear()} IMMERSE at UCLA</span>
          <span className="text-paper/40">Los Angeles, CA</span>
        </div>
      </div>
    </footer>
  );
}
