// High-resolution SVG data-URIs for instantaneous 1-click sample artwork testing

export interface SampleArtworkPair {
  id: string;
  name: string;
  productType: 'greeting-card' | 'business-card' | 'flyer' | 'banner';
  frontName: string;
  frontUrl: string;
  backName: string;
  backUrl: string;
}

// 1. Holiday & Celebration Greeting Card
const GREETING_FRONT_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="700" viewBox="0 0 1000 700">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="50%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCD34D"/>
      <stop offset="35%" stop-color="#F59E0B"/>
      <stop offset="70%" stop-color="#FDE68A"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#FF5A00" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#FF5A00" stop-opacity="0"/>
    </radialGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1000" height="700" fill="url(#bgGrad)"/>
  <circle cx="500" cy="300" r="350" fill="url(#glow)"/>
  
  <!-- Subtle geometric foil borders -->
  <rect x="40" y="40" width="920" height="620" fill="none" stroke="url(#goldGrad)" stroke-width="2.5" opacity="0.8"/>
  <rect x="52" y="52" width="896" height="596" fill="none" stroke="#FFFFFF" stroke-dasharray="6,6" stroke-width="1" opacity="0.3"/>
  
  <!-- Corner Ornaments -->
  <g stroke="url(#goldGrad)" stroke-width="2" fill="none">
    <path d="M 60 90 L 60 60 L 90 60"/>
    <path d="M 940 90 L 940 60 L 910 60"/>
    <path d="M 60 610 L 60 640 L 90 640"/>
    <path d="M 940 610 L 940 640 L 910 640"/>
  </g>
  
  <!-- Central Emblem -->
  <circle cx="500" cy="240" r="70" fill="#1E293B" stroke="url(#goldGrad)" stroke-width="3"/>
  <polygon points="500,195 513,228 548,228 520,248 531,280 500,260 469,280 480,248 452,228 487,228" fill="url(#goldGrad)"/>
  
  <!-- Typography -->
  <text x="500" y="370" font-family="'Cinzel', 'Playfair Display', Georgia, serif" font-size="20" fill="#FDE68A" letter-spacing="8" text-anchor="middle" font-weight="600">SEASON'S GREETINGS</text>
  
  <text x="500" y="445" font-family="'Playfair Display', 'Times New Roman', serif" font-size="52" fill="#FFFFFF" font-style="italic" text-anchor="middle" font-weight="700">Warmest Wishes</text>
  
  <text x="500" y="505" font-family="'Montserrat', sans-serif" font-size="16" fill="#94A3B8" letter-spacing="4" text-anchor="middle">AND A PROSPEROUS NEW YEAR</text>
  
  <!-- Divider ribbon -->
  <line x1="380" y1="535" x2="620" y2="535" stroke="url(#goldGrad)" stroke-width="1.5"/>
  <circle cx="500" cy="535" r="4" fill="#F59E0B"/>
  
  <!-- Footer Brand -->
  <text x="500" y="605" font-family="'Montserrat', sans-serif" font-size="14" fill="#FF5A00" letter-spacing="3" text-anchor="middle" font-weight="700">PRONTO PRINTS • HOUSTON, TX</text>
  <text x="500" y="628" font-family="'Montserrat', sans-serif" font-size="11" fill="#64748B" letter-spacing="2" text-anchor="middle">YOU THINK IT! WE INK IT!</text>
</svg>
`)}`;

const GREETING_BACK_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="700" viewBox="0 0 1000 700">
  <defs>
    <linearGradient id="insideBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCFCFC"/>
      <stop offset="100%" stop-color="#F1F5F9"/>
    </linearGradient>
  </defs>
  
  <rect width="1000" height="700" fill="url(#insideBg)"/>
  
  <!-- Subtle inner border -->
  <rect x="40" y="40" width="920" height="620" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
  
  <!-- Greeting Message inside -->
  <text x="500" y="220" font-family="'Playfair Display', Georgia, serif" font-size="34" fill="#1E293B" font-style="italic" text-anchor="middle" font-weight="600">To Our Valued Friends &amp; Partners</text>
  
  <text x="500" y="290" font-family="'Inter', sans-serif" font-size="18" fill="#475569" text-anchor="middle" font-weight="400">May this festive season bring joy, health, and inspiring</text>
  <text x="500" y="325" font-family="'Inter', sans-serif" font-size="18" fill="#475569" text-anchor="middle" font-weight="400">new creative horizons to you and your loved ones.</text>
  
  <text x="500" y="380" font-family="'Inter', sans-serif" font-size="18" fill="#475569" text-anchor="middle" font-weight="400">Thank you for letting us bring your ideas to life this year!</text>
  
  <!-- Handwritten signature mockup -->
  <path d="M 430 460 Q 460 430 490 460 T 540 440 T 580 470" fill="none" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/>
  <text x="500" y="510" font-family="'Playfair Display', Georgia, serif" font-size="20" fill="#334155" text-anchor="middle" font-weight="500">The Entire Pronto Prints Team</text>
  
  <!-- Bottom publisher seal -->
  <line x1="420" y1="560" x2="580" y2="560" stroke="#CBD5E1" stroke-width="1"/>
  <text x="500" y="605" font-family="'Inter', sans-serif" font-size="12" fill="#94A3B8" letter-spacing="3" text-anchor="middle">CUSTOM PRINTED IN HOUSTON, TEXAS</text>
  <text x="500" y="625" font-family="'Inter', sans-serif" font-size="10" fill="#CBD5E1" text-anchor="middle">www.prontoprints.com • 713-212-0247</text>
</svg>
`)}`;

// 2. Executive Business Card Front & Back
const BUSINESSCARD_FRONT_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1050" height="600" viewBox="0 0 1050 600">
  <defs>
    <linearGradient id="cardDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="60%" stop-color="#1F2937"/>
      <stop offset="100%" stop-color="#0B0F17"/>
    </linearGradient>
    <linearGradient id="orangeAccent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF5A00"/>
      <stop offset="100%" stop-color="#FF8A00"/>
    </linearGradient>
  </defs>
  
  <rect width="1050" height="600" fill="url(#cardDark)"/>
  
  <!-- High-tech diagonal grid line -->
  <path d="M 0 0 L 350 0 L 150 600 L 0 600 Z" fill="#FF5A00" opacity="0.08"/>
  <line x1="350" y1="0" x2="150" y2="600" stroke="#FF5A00" stroke-width="4"/>
  
  <!-- Orange accent dot -->
  <circle cx="100" cy="100" r="14" fill="url(#orangeAccent)"/>
  <circle cx="100" cy="100" r="28" fill="none" stroke="#FF5A00" stroke-width="1.5" opacity="0.4"/>
  
  <!-- Company Brand -->
  <text x="145" y="108" font-family="'Montserrat', sans-serif" font-size="34" fill="#FFFFFF" font-weight="900" letter-spacing="2">PRONTO<tspan fill="#FF5A00">PRINTS</tspan></text>
  <text x="145" y="132" font-family="'Inter', sans-serif" font-size="12" fill="#9CA3AF" letter-spacing="4" font-weight="600">COMMERCIAL PRINT LAB</text>
  
  <!-- Person Info -->
  <text x="100" y="320" font-family="'Montserrat', sans-serif" font-size="44" fill="#FFFFFF" font-weight="800">MARCUS VANCE</text>
  <text x="100" y="360" font-family="'Inter', sans-serif" font-size="18" fill="#FF5A00" font-weight="600" letter-spacing="3">SENIOR PRODUCTION DIRECTOR</text>
  
  <!-- Accent bar -->
  <rect x="100" y="385" width="80" height="4" fill="url(#orangeAccent)"/>
  
  <!-- Contact Grid -->
  <g font-family="'Inter', sans-serif" font-size="16" fill="#D1D5DB">
    <text x="100" y="445">Direct: (713) 212-0247</text>
    <text x="100" y="480">Email: mvance@prontoprints.com</text>
    <text x="520" y="445">HQ: 8926 Clarkcrest St, Houston TX</text>
    <text x="520" y="480">Web: www.prontoprints.com</text>
  </g>
  
  <!-- Bottom Corner Tagline -->
  <text x="960" y="540" font-family="'Inter', sans-serif" font-size="12" fill="#6B7280" letter-spacing="2" text-anchor="end">YOU THINK IT! WE INK IT!</text>
</svg>
`)}`;

const BUSINESSCARD_BACK_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1050" height="600" viewBox="0 0 1050 600">
  <defs>
    <linearGradient id="backBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF5A00"/>
      <stop offset="100%" stop-color="#D94800"/>
    </linearGradient>
  </defs>
  
  <rect width="1050" height="600" fill="url(#backBg)"/>
  
  <!-- Center Brand Icon & Monogram -->
  <circle cx="525" cy="240" r="85" fill="#111827" filter="drop-shadow(0 15px 30px rgba(0,0,0,0.3))"/>
  
  <!-- Ink drop / Pronto icon in orange inside circle -->
  <path d="M 525 180 C 510 215 480 250 480 275 C 480 300 500 320 525 320 C 550 320 570 300 570 275 C 570 250 540 215 525 180 Z" fill="#FF5A00"/>
  <circle cx="515" cy="265" r="7" fill="#FFFFFF" opacity="0.8"/>
  
  <!-- Typography on Orange -->
  <text x="525" y="380" font-family="'Montserrat', sans-serif" font-size="38" fill="#FFFFFF" font-weight="900" letter-spacing="4" text-anchor="middle">PRONTO PRINTS</text>
  <text x="525" y="420" font-family="'Montserrat', sans-serif" font-size="18" fill="#FFF3ED" font-weight="600" letter-spacing="8" text-anchor="middle">“YOU THINK IT! WE INK IT!”</text>
  
  <!-- Feature Bullets at bottom -->
  <text x="525" y="500" font-family="'Inter', sans-serif" font-size="14" fill="#FFFFFF" opacity="0.9" letter-spacing="3" text-anchor="middle">SAME-DAY PRINTING • LARGE FORMAT • MAJESTIC FOILS • PACKAGING</text>
</svg>
`)}`;

export const SAMPLE_ARTWORK_PAIRS: SampleArtworkPair[] = [
  {
    id: 'holiday-gold',
    name: 'Luxury Season’s Greetings (Gold & Midnight)',
    productType: 'greeting-card',
    frontName: 'Seasons_Greetings_Front_Foil.svg',
    frontUrl: GREETING_FRONT_SVG,
    backName: 'Seasons_Greetings_Inside_Message.svg',
    backUrl: GREETING_BACK_SVG
  },
  {
    id: 'executive-dark',
    name: 'Executive Dark Mode Business Card',
    productType: 'business-card',
    frontName: 'Executive_BusinessCard_Front.svg',
    frontUrl: BUSINESSCARD_FRONT_SVG,
    backName: 'ProntoPrints_Brand_Back.svg',
    backUrl: BUSINESSCARD_BACK_SVG
  }
];
