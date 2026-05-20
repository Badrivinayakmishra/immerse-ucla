import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  dwell?: number;
};

export function Stage({ children, dwell = 1.4 }: Props) {
  return (
    <div
      className="stage relative"
      style={{ height: `${(1 + dwell) * 100}vh` }}
    >
      {children}
    </div>
  );
}
