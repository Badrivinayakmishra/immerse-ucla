type Props = {
  skin: string;
  hair: string;
  shirt: string;
  bg: string;
  variant: 1 | 2 | 3 | 4 | 5 | 6;
};

export function Portrait({ skin, hair, shirt, bg, variant }: Props) {
  return (
    <svg viewBox="0 0 200 240" className="w-full h-auto block" aria-hidden>
      <rect width="200" height="240" fill={bg} />
      <g opacity="0.35">
        {Array.from({ length: 9 }).map((_, r) =>
          Array.from({ length: 7 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={15 + c * 28} cy={15 + r * 28} r="1.2" fill="#0e1f1a" />
          ))
        )}
      </g>

      <ellipse cx="100" cy="240" rx="80" ry="20" fill="#0e1f1a" opacity="0.15" />

      <path
        d="M40 240 Q40 175 100 170 Q160 175 160 240 Z"
        fill={shirt}
        stroke="#0e1f1a"
        strokeWidth="3"
      />
      <line x1="100" y1="170" x2="100" y2="240" stroke="#0e1f1a" strokeWidth="2" opacity="0.4" />

      <ellipse cx="100" cy="130" rx="42" ry="48" fill={skin} stroke="#0e1f1a" strokeWidth="3" />

      {variant === 1 && <path d="M58 110 Q60 70 100 70 Q140 70 142 110 Q145 95 130 88 Q115 80 100 82 Q85 80 70 88 Q55 95 58 110 Z" fill={hair} stroke="#0e1f1a" strokeWidth="3" />}
      {variant === 2 && <path d="M62 105 Q62 65 100 65 Q138 65 138 105 Q138 130 130 145 L135 95 Q125 80 100 80 Q75 80 65 95 L70 145 Q62 130 62 105 Z" fill={hair} stroke="#0e1f1a" strokeWidth="3" />}
      {variant === 3 && <circle cx="100" cy="86" r="32" fill={hair} stroke="#0e1f1a" strokeWidth="3" />}
      {variant === 4 && <path d="M58 110 Q58 70 100 70 Q142 70 142 110 L150 175 Q145 178 138 175 L132 130 Q132 120 100 118 Q68 120 68 130 L62 175 Q55 178 50 175 Z" fill={hair} stroke="#0e1f1a" strokeWidth="3" />}
      {variant === 5 && <path d="M65 110 Q60 72 100 70 Q140 72 135 110 Q138 88 100 85 Q72 88 75 100 Z" fill={hair} stroke="#0e1f1a" strokeWidth="3" />}
      {variant === 6 && <path d="M55 100 Q55 65 100 65 Q145 65 145 100 Q150 140 140 175 L132 130 Q120 118 100 118 Q80 118 68 130 L60 175 Q50 140 55 100 Z" fill={hair} stroke="#0e1f1a" strokeWidth="3" />}

      <circle cx="84" cy="128" r="3" fill="#0e1f1a" />
      <circle cx="116" cy="128" r="3" fill="#0e1f1a" />
      <path d="M88 148 Q100 156 112 148" stroke="#0e1f1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      <circle cx="58" cy="130" r="4" fill={shirt} opacity="0.6" />
      <circle cx="142" cy="130" r="4" fill={shirt} opacity="0.6" />
    </svg>
  );
}
