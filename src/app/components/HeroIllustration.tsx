export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 500 600"
      className="w-full h-auto"
      role="img"
      aria-label="A VR headset wearer surrounded by molecules and DNA"
    >
      <defs>
        <linearGradient id="visorGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#73f8ff" />
          <stop offset="0.45" stopColor="#8bd94f" />
          <stop offset="0.75" stopColor="#ffb407" />
          <stop offset="1" stopColor="#ff8639" />
        </linearGradient>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff1c7" />
          <stop offset="1" stopColor="#fffaf0" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="500" height="600" rx="32" fill="url(#bgGrad)" stroke="#0e1f1a" strokeWidth="3" />

      <g opacity="0.5">
        {Array.from({ length: 18 }).map((_, r) =>
          Array.from({ length: 14 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={30 + c * 35} cy={30 + r * 32} r="1.6" fill="#0e1f1a" />
          ))
        )}
      </g>

      <g transform="translate(250 330)">
        <ellipse cx="0" cy="115" rx="120" ry="14" fill="#0e1f1a" opacity="0.18" />

        <path d="M-95 -75 Q-95 -140 0 -140 Q95 -140 95 -75 L95 60 Q95 130 0 130 Q-95 130 -95 60 Z"
          fill="#25936f" stroke="#0e1f1a" strokeWidth="4" />

        <circle cx="-40" cy="-110" r="22" fill="#fff1c7" stroke="#0e1f1a" strokeWidth="3" />
        <circle cx="40" cy="-110" r="22" fill="#fff1c7" stroke="#0e1f1a" strokeWidth="3" />

        <rect x="-110" y="-50" width="220" height="90" rx="22" fill="#0e1f1a" />
        <rect x="-100" y="-42" width="200" height="74" rx="16" fill="url(#visorGrad)" />
        <path d="M-100 -5 Q0 25 100 -5" stroke="#fff" strokeWidth="3" fill="none" opacity="0.55" />

        <rect x="-118" y="-15" width="20" height="40" rx="6" fill="#0e1f1a" />
        <rect x="98" y="-15" width="20" height="40" rx="6" fill="#0e1f1a" />

        <path d="M-92 60 Q-130 90 -130 130" stroke="#0e1f1a" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M92 60 Q130 90 130 130" stroke="#0e1f1a" strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>

      <g transform="translate(85 110)" stroke="#0e1f1a" strokeWidth="3" fill="none">
        <circle cx="0" cy="0" r="10" fill="#73f8ff" />
        <circle cx="38" cy="-22" r="10" fill="#8bd94f" />
        <circle cx="76" cy="0" r="10" fill="#ffb407" />
        <circle cx="38" cy="22" r="10" fill="#ff8639" />
        <line x1="10" y1="0" x2="28" y2="-22" />
        <line x1="48" y1="-22" x2="66" y2="0" />
        <line x1="66" y1="0" x2="48" y2="22" />
        <line x1="28" y1="22" x2="10" y2="0" />
        <line x1="38" y1="-22" x2="38" y2="22" />
      </g>

      <g transform="translate(390 100)" stroke="#0e1f1a" strokeWidth="3" fill="none">
        <path d="M0 -40 Q30 -25 0 0 Q-30 25 0 40 Q30 55 0 80"
          stroke="#73f8ff" strokeWidth="4" />
        <path d="M0 -40 Q-30 -25 0 0 Q30 25 0 40 Q-30 55 0 80"
          stroke="#ff8639" strokeWidth="4" />
        <line x1="-12" y1="-30" x2="12" y2="-30" />
        <line x1="-12" y1="-10" x2="12" y2="-10" />
        <line x1="-12" y1="10" x2="12" y2="10" />
        <line x1="-12" y1="30" x2="12" y2="30" />
        <line x1="-12" y1="50" x2="12" y2="50" />
        <line x1="-12" y1="70" x2="12" y2="70" />
      </g>

      <g transform="translate(80 470)" stroke="#0e1f1a" strokeWidth="3">
        <path d="M-30 0 Q-30 -25 -10 -25 Q0 -25 0 -12 Q0 -25 10 -25 Q30 -25 30 0 Q30 20 0 40 Q-30 20 -30 0 Z"
          fill="#ff8639" />
        <path d="M-22 0 L-10 0 L-4 -8 L4 14 L10 0 L22 0" fill="none" stroke="#0e1f1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g transform="translate(410 470)" stroke="#0e1f1a" strokeWidth="3">
        <circle cx="0" cy="0" r="18" fill="#fff1c7" />
        <circle cx="0" cy="0" r="6" fill="#0e1f1a" />
        <line x1="0" y1="18" x2="0" y2="36" />
        <rect x="-12" y="36" width="24" height="12" rx="3" fill="#ffb407" />
        <rect x="-3" y="-30" width="6" height="14" rx="2" fill="#8bd94f" />
      </g>

      <text x="35" y="40" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="700" fill="#0e1f1a">
        IMMERSE · UCLA · MMXXVI
      </text>
    </svg>
  );
}
