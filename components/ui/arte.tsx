/* Ilustraciones SVG — bocetos de taller, sin imágenes externas */

export function TornilloAereo() {
  return (
    <svg viewBox="0 0 320 340" fill="none" role="img" aria-label="Boceto del tornillo aéreo de Leonardo" style={{ width: "100%", height: "auto" }}>
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <ellipse cx="160" cy="96" rx="118" ry="34" />
        <ellipse cx="160" cy="140" rx="100" ry="29" />
        <ellipse cx="160" cy="182" rx="80" ry="23" />
        <ellipse cx="160" cy="220" rx="58" ry="17" />
        <ellipse cx="160" cy="252" rx="36" ry="11" />
        <path d="M160 40v272" />
        <path d="M42 96c30 26 70 40 118 40s88-14 118-40" />
        <path d="M60 140c26 22 60 34 100 34s74-12 100-34" />
        <path d="M80 182c22 18 50 28 80 28s58-10 80-28" />
        <path d="M118 296h84M132 312h56" />
        <path d="M118 296l14-44M202 296l-14-44" />
      </g>
      <g stroke="currentColor" strokeWidth=".7" opacity=".35" strokeDasharray="3 5">
        <path d="M18 96h284M40 140h240M70 182h180" />
      </g>
    </svg>
  );
}

export function BocetoUI() {
  return (
    <svg viewBox="0 0 420 300" fill="none" role="img" aria-label="Boceto renacentista de una interfaz de software" style={{ width: "100%", height: "auto" }}>
      <rect x="14" y="14" width="392" height="272" rx="12" stroke="currentColor" strokeWidth="1.4" opacity=".8" />
      <path d="M14 56h392" stroke="currentColor" strokeWidth="1" opacity=".4" />
      <g stroke="currentColor" strokeWidth="1" opacity=".5">
        <circle cx="36" cy="35" r="5" />
        <path d="M52 35h60M52 42h34" opacity=".6" />
      </g>
      <g stroke="currentColor" strokeWidth="1.2" opacity=".7">
        <rect x="34" y="78" width="112" height="72" rx="8" />
        <rect x="158" y="78" width="112" height="72" rx="8" />
        <rect x="282" y="78" width="104" height="72" rx="8" />
        <rect x="34" y="166" width="236" height="104" rx="8" />
        <rect x="282" y="166" width="104" height="104" rx="8" />
      </g>
      <g stroke="currentColor" strokeWidth="1.6" opacity=".9" strokeLinecap="round">
        <path d="M52 132l18-18 16 12 22-30 20 24" />
      </g>
      <g fill="currentColor" opacity=".75">
        <rect x="52" y="230" width="14" height="24" rx="3" />
        <rect x="76" y="214" width="14" height="40" rx="3" />
        <rect x="100" y="238" width="14" height="16" rx="3" />
        <rect x="124" y="198" width="14" height="56" rx="3" />
        <rect x="148" y="222" width="14" height="32" rx="3" />
        <rect x="172" y="208" width="14" height="46" rx="3" />
      </g>
      <g stroke="currentColor" strokeWidth="1" opacity=".45">
        <path d="M176 100h74M176 112h54M176 124h64" />
        <path d="M300 100h64M300 112h44M300 124h54M300 136h34" />
        <path d="M300 190h64M300 204h48M300 218h58M300 232h40M300 246h52" />
      </g>
    </svg>
  );
}

export function Espiral() {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" style={{ width: "100%", height: "auto" }}>
      <g stroke="currentColor" strokeWidth="1.2" opacity=".75">
        <rect x="4" y="4" width="192" height="192" />
        <path d="M196 4v119H77V4M77 123h45v73M122 168h-27v28" />
        <path d="M196 123A119 119 0 0077 4" strokeWidth="1.6" opacity=".9" />
        <path d="M77 123a45 45 0 0045-45" strokeWidth="1.6" opacity=".9" />
        <path d="M122 168a27 27 0 00-27-27" strokeWidth="1.6" opacity=".9" />
      </g>
    </svg>
  );
}
