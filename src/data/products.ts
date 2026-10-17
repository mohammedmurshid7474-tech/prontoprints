import { Product, ProductCategory } from '../types';
export type { ProductCategory };

export const CATEGORIES: { name: ProductCategory; slug: string; description: string; count: number }[] = [
  {
    name: 'Marketing Products',
    slug: 'marketing',
    description: 'Essential business stationery, promotional handouts, cards, and direct marketing collateral.',
    count: 20
  },
  {
    name: 'Large Format Products',
    slug: 'large-format',
    description: 'High-impact signage, trade show displays, banners, adhesive graphics, and mounted prints.',
    count: 12
  },
  {
    name: 'Majestic Products',
    slug: 'majestic',
    description: 'Ultra-luxurious premium cards featuring foil stamping, edge painting, suede velvet, and silk finishes.',
    count: 7
  },
  {
    name: 'Packaging Products',
    slug: 'packaging',
    description: 'Custom branded folding cartons, product boxes, bottle tags, and retail presentation packaging.',
    count: 14
  },
  {
    name: 'Other Products and Services',
    slug: 'other-services',
    description: 'Commercial copying, specialty thermography, apparel embroidery, screen printing, and EDDM mailing.',
    count: 12
  }
];

export const PRODUCTS: Product[] = [
  // ----------------------------------------------------
  // MARKETING PRODUCTS (20 items)
  // ----------------------------------------------------
  {
    id: 'greeting-cards',
    name: 'Greeting Cards',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Custom Folded & Flat Cards for Holidays, Corporate Thanks & Invitations',
    shortDescription: 'Premium folded greeting cards with matching envelopes, scoring, and vibrant full-color printing on heavy cover stock.',
    fullDescription: 'Our custom greeting cards are scored for crisp, clean folding and printed on ultra-sturdy 14pt or 16pt card stock. Perfect for holiday greetings, thank you notes, corporate milestone announcements, and invitations. Choose between high-gloss UV, matte dull, or writable uncoated interior.',
    features: ['High-precision creasing & scoring', 'Optional blank or printed matching envelopes', 'Full color inside & outside', 'Ultra-heavy card stocks'],
    mockupType: 'greeting-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '10x7-folded-5x7', name: '10" x 7" (Folds to 5" x 7")', priceModifier: 0, badge: 'Most Popular' },
      { id: '8.5x5.5-folded-4.25x5.5', name: '8.5" x 5.5" (Folds to 4.25" x 5.5")', priceModifier: -5 },
      { id: '10x8-folded-5x8', name: '10" x 8" (Folds to 5" x 8")', priceModifier: 10 },
      { id: '6x9-folded-4.5x6', name: '6" x 9" (Folds to 4.5" x 6")', priceModifier: 5 },
      { id: '5x7-flat', name: '5" x 7" Flat Card', priceModifier: -10 }
    ],
    paperStocks: [
      { id: '14pt-gloss', name: '14pt Gloss Coated Cover', priceModifier: 0 },
      { id: '16pt-matte', name: '16pt Premium Dull / Matte', priceModifier: 8, badge: 'Editor Choice' },
      { id: '100lb-linen', name: '100lb Textured Linen Cover', priceModifier: 15 },
      { id: '18pt-c1s', name: '18pt C1S (Gloss Front / Uncoated Writable Inside)', priceModifier: 12 }
    ],
    coatings: [
      { id: 'gloss-uv-outside', name: 'Gloss UV Outside / Uncoated Inside', priceModifier: 0 },
      { id: 'matte-both', name: 'Satin Matte Finish Both Sides', priceModifier: 5 },
      { id: 'spot-uv-outside', name: 'Spot UV Highlight on Front Cover', priceModifier: 20 },
      { id: 'uncoated', name: 'Natural Uncoated (Easy to Write With Any Pen)', priceModifier: 0 }
    ],
    quantities: [50, 100, 250, 500, 1000, 2500, 5000],
    standardTurnaround: '2-4 Business Days',
    rushAvailable: true,
    sampleBasePrice: 48,
    badge: 'Popular for Holidays',
    recommendedUse: 'Holiday mailings, client appreciation, branded thank-you cards, festive announcements.',
    relatedProductIds: ['business-cards', 'announcement-cards', 'envelopes', 'postcards']
  },
  {
    id: 'business-cards',
    name: 'Business Cards',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Houston Standard in Professional First Impressions',
    shortDescription: 'Sturdy, sharp 16pt business cards with high-gloss UV, silky matte, or uncoated writing finish.',
    fullDescription: 'Make an undeniable first impression. Our standard business cards are printed on ultra-thick 16pt cardstock with rich CMYK inks and laser-sharp text resolution. Same-day rush available for Houston pickup.',
    features: ['Standard 3.5" x 2" or square 2" x 2"', 'Full-color front and back', 'Optional rounded corners (1/4" or 1/8")', 'Same-day Houston rush available'],
    mockupType: 'business-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: 'standard', name: '3.5" x 2" Standard U.S.', priceModifier: 0, badge: 'Standard' },
      { id: 'square', name: '2" x 2" Modern Square', priceModifier: 5 },
      { id: 'slim', name: '3.5" x 1.75" Slimline Euro', priceModifier: 5 },
      { id: 'folded', name: '3.5" x 4" Folded Card (Folds to 3.5" x 2")', priceModifier: 18 }
    ],
    paperStocks: [
      { id: '16pt-premium', name: '16pt Ultra-Heavy Cardstock', priceModifier: 0, badge: 'Best Value' },
      { id: '14pt-standard', name: '14pt Classic Cover', priceModifier: -4 },
      { id: '18pt-c1s', name: '18pt Heavy Coated 1-Side', priceModifier: 8 },
      { id: '100lb-uncoated', name: '100lb Smooth Recycled White', priceModifier: 6 }
    ],
    coatings: [
      { id: 'high-gloss-uv', name: 'High-Gloss UV Both Sides', priceModifier: 0 },
      { id: 'matte-dull', name: 'Silky Matte Finish Both Sides', priceModifier: 4 },
      { id: 'uv-front-only', name: 'UV Front / Writable Uncoated Back', priceModifier: 2 },
      { id: 'soft-touch', name: 'Velvet Soft-Touch Lamination', priceModifier: 16 }
    ],
    quantities: [100, 250, 500, 1000, 2500, 5000, 10000],
    standardTurnaround: '2-3 Business Days',
    rushAvailable: true,
    sampleBasePrice: 24,
    badge: 'Houston Same-Day Ready',
    recommendedUse: 'Networking, team collateral, appointment reminder cards, VIP discount loyalty cards.',
    relatedProductIds: ['akuafoil-cards', 'suede-cards', 'presentation-folders', 'postcards']
  },
  {
    id: 'announcement-cards',
    name: 'Announcement Cards',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Elegant Announcements with Matching A-Style Envelopes',
    shortDescription: 'Ideal for save-the-dates, grand openings, milestones, and formal event invitations.',
    fullDescription: 'Print stunning announcement cards for momentous occasions. Available flat or folded with optional gold/silver metallic inks and custom sizes.',
    features: ['Flat or scored folded format', 'Premium matching envelopes', 'Heavyweight tactile stocks', 'Edge-to-edge full color'],
    mockupType: 'greeting-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '5x7', name: '5" x 7" (A7)', priceModifier: 0 },
      { id: '4.25x5.5', name: '4.25" x 5.5" (A2)', priceModifier: -4 },
      { id: '4x6', name: '4" x 6" (A6)', priceModifier: -2 }
    ],
    paperStocks: [
      { id: '16pt-matte', name: '16pt Dull Matte', priceModifier: 0 },
      { id: '100lb-linen', name: '100lb Textured Linen', priceModifier: 12 },
      { id: 'pearl-metallic', name: '110lb Pearl Metallic Shimmer', priceModifier: 18 }
    ],
    coatings: [
      { id: 'matte', name: 'Matte Finish', priceModifier: 0 },
      { id: 'uncoated', name: 'Writable Smooth Finish', priceModifier: 0 }
    ],
    quantities: [50, 100, 250, 500, 1000],
    standardTurnaround: '3-4 Business Days',
    rushAvailable: true,
    sampleBasePrice: 42,
    recommendedUse: 'Save the date, award ceremonies, corporate grand openings, graduations.',
    relatedProductIds: ['greeting-cards', 'envelopes', 'event-tickets']
  },
  {
    id: 'bookmarks',
    name: 'Bookmarks',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Long-Lasting Tangible Branding for Readers & Events',
    shortDescription: 'Durable bookmarks with optional hole drilling for tassels or ribbons.',
    fullDescription: 'Custom bookmarks serve as memorable marketing tools, church mementos, author promotions, and trade show giveaways.',
    features: ['Double-sided printing included', 'Optional 1/8" or 1/4" center hole drilling', 'UV protective coating'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '2x6', name: '2" x 6" Standard', priceModifier: 0 },
      { id: '2x7', name: '2" x 7" Extended', priceModifier: 3 },
      { id: '2.5x7', name: '2.5" x 7" Wide', priceModifier: 5 }
    ],
    paperStocks: [
      { id: '16pt-gloss', name: '16pt Heavy Gloss Cardstock', priceModifier: 0 },
      { id: '16pt-matte', name: '16pt Premium Matte', priceModifier: 4 }
    ],
    coatings: [
      { id: 'uv-both', name: 'Gloss UV Both Sides', priceModifier: 0 },
      { id: 'matte-both', name: 'Matte Finish Both Sides', priceModifier: 2 }
    ],
    quantities: [100, 250, 500, 1000, 2500],
    standardTurnaround: '2-4 Business Days',
    rushAvailable: true,
    sampleBasePrice: 32,
    recommendedUse: 'Author promotions, church literature, library handouts, festival giveaways.',
    relatedProductIds: ['flyers-and-brochures', 'postcards', 'catalogues-booklets']
  },
  {
    id: 'calendars',
    name: 'Calendars',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: '365 Days of Top-of-Mind Brand Visibility',
    shortDescription: 'Wall calendars saddle-stitched with center drill holes, vibrant monthly photo grids.',
    fullDescription: 'Keep your brand front and center all year long. Our wall calendars feature heavy 100lb gloss cover stock with 100lb text pages, 28 pages total, and precision saddle-stitching.',
    features: ['Saddle-stitched binding with 1/8" drill hole', 'Full-color 28-page layout', 'Thick durable cover stock'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '8.5x11-hangs-11x17', name: '8.5" x 11" (Hangs as 11" x 17")', priceModifier: 0 },
      { id: '12x12-hangs-12x24', name: '12" x 12" Large Square (Hangs 12" x 24")', priceModifier: 25 }
    ],
    paperStocks: [
      { id: '100lb-gloss', name: '100lb Gloss Book with 100lb Gloss Cover', priceModifier: 0 }
    ],
    coatings: [
      { id: 'aqueous', name: 'High-Luster Aqueous Coating', priceModifier: 0 }
    ],
    quantities: [50, 100, 250, 500, 1000],
    standardTurnaround: '4-6 Business Days',
    rushAvailable: false,
    sampleBasePrice: 195,
    recommendedUse: 'Year-end corporate gifting, school fundraisers, automotive & real estate marketing.',
    relatedProductIds: ['catalogues-booklets', 'notepads', 'presentation-folders']
  },
  {
    id: 'catalogues-booklets',
    name: 'Catalogues / Booklets',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Professional Multi-Page Booklets & Lookbooks',
    shortDescription: 'Saddle-stitched multi-page brochures, annual reports, product lookbooks, and programs.',
    fullDescription: 'From 8 pages to 64 pages, showcase your comprehensive product line, quarterly reports, event programs, or service directories with vibrant, bound booklets.',
    features: ['Saddle-stitched wire staples', '8 to 64 pages in 4-page increments', 'Self-cover or heavier card cover'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '8.5x11', name: '8.5" x 11" Standard Magazine Size', priceModifier: 0 },
      { id: '5.5x8.5', name: '5.5" x 8.5" Digest Booklet', priceModifier: -20 },
      { id: '6x9', name: '6" x 9" Pocket Guide', priceModifier: -10 }
    ],
    paperStocks: [
      { id: '100lb-gloss-self', name: '100lb Gloss Book Throughout (Self-Cover)', priceModifier: 0 },
      { id: '100lb-cover-plus-text', name: '100lb Gloss Cover + 100lb Text Interior', priceModifier: 30 }
    ],
    coatings: [
      { id: 'aqueous', name: 'Satin Aqueous Coating', priceModifier: 0 }
    ],
    quantities: [25, 50, 100, 250, 500, 1000],
    standardTurnaround: '4-7 Business Days',
    rushAvailable: true,
    sampleBasePrice: 160,
    recommendedUse: 'Product lines, corporate annual reports, theater programs, church directories.',
    relatedProductIds: ['presentation-folders', 'flyers-and-brochures', 'sell-sheets']
  },
  {
    id: 'door-hangers',
    name: 'Door Hangers',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Targeted Neighborhood Direct Marketing That Gets Noticed',
    shortDescription: 'Die-cut door hangers with 1.25" round hook cutouts, ideal for local service providers.',
    fullDescription: 'Put your message right on the front door handle. Pre-punched with slit or round die-cut holes, these sturdy cards cannot be missed by homeowners.',
    features: ['Pre-cut 1.25" standard knob hole with slit', 'Optional tear-off perforated business card bottom', 'Weather-resistant gloss coating'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '4.25x11', name: '4.25" x 11" Large (High Impact)', priceModifier: 0 },
      { id: '3.5x8.5', name: '3.5" x 8.5" Standard', priceModifier: -8 },
      { id: '4.25x14', name: '4.25" x 14" Jumbo', priceModifier: 15 }
    ],
    paperStocks: [
      { id: '16pt-cardstock', name: '16pt Heavy Cardstock', priceModifier: 0 },
      { id: '100lb-gloss-cover', name: '100lb Gloss Cover', priceModifier: -6 }
    ],
    coatings: [
      { id: 'uv-both', name: 'Gloss UV Both Sides', priceModifier: 0 },
      { id: 'matte-both', name: 'Matte Finish', priceModifier: 5 }
    ],
    quantities: [250, 500, 1000, 2500, 5000],
    standardTurnaround: '3-4 Business Days',
    rushAvailable: true,
    sampleBasePrice: 65,
    recommendedUse: 'Roofers, landscapers, political campaigns, home contractors, pizza delivery.',
    relatedProductIds: ['postcards', 'flyers-and-brochures', 'tear-off-cards', 'yard-signs']
  },
  {
    id: 'envelopes',
    name: 'Envelopes',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Branded Commercial & Announcement Envelopes',
    shortDescription: 'Full-color printed envelopes for invoices, letters, checks, and greeting cards.',
    fullDescription: 'Seal your brand identity with custom printed envelopes. Available with regular gum flap, peel & stick, or window styles in standard #10 and A-series sizes.',
    features: ['Crisp offset or digital printing', 'Matching 70lb uncoated bright white linen or smooth stock', 'Window and non-window styles'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: 'num-10', name: '#10 Standard (9.5" x 4.125")', priceModifier: 0 },
      { id: 'num-10-window', name: '#10 Left Window', priceModifier: 8 },
      { id: 'a7', name: 'A-7 (5.25" x 7.25" for 5x7 Cards)', priceModifier: 5 },
      { id: '9x12', name: '9" x 12" Catalog / Document Envelope', priceModifier: 28 }
    ],
    paperStocks: [
      { id: '70lb-smooth-white', name: '70lb Premium Opaque Smooth White', priceModifier: 0 },
      { id: '70lb-linen', name: '70lb Classic Linen White', priceModifier: 18 }
    ],
    coatings: [
      { id: 'uncoated', name: 'Uncoated (Printer & Pen Compatible)', priceModifier: 0 }
    ],
    quantities: [100, 250, 500, 1000, 2500, 5000],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: true,
    sampleBasePrice: 58,
    recommendedUse: 'Corporate stationery, greeting card delivery, direct mail invoicing.',
    relatedProductIds: ['greeting-cards', 'business-cards', 'presentation-folders']
  },
  {
    id: 'event-tickets',
    name: 'Event Tickets',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Perforated, Sequentially Numbered Admissions Tickets',
    shortDescription: 'Concert, fundraiser, gala, and sports tickets with clean perforation and security numbering.',
    fullDescription: 'Manage admissions with custom tickets featuring perforated stubs, sequential numbering in black or red ink, and vibrant full-color printing on heavy cover stock.',
    features: ['Variable sequential numbering', 'Clean tear-off perforation line', 'Heavy 14pt cardstock', 'Gloss or matte coating'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '2x5.5', name: '2" x 5.5" Standard Ticket', priceModifier: 0 },
      { id: '2.75x5.5', name: '2.75" x 5.5" Wide Ticket', priceModifier: 4 },
      { id: '3.5x8.5', name: '3.5" x 8.5" Large VIP Pass', priceModifier: 12 }
    ],
    paperStocks: [
      { id: '14pt-gloss', name: '14pt Gloss Cardstock', priceModifier: 0 },
      { id: '16pt-matte', name: '16pt Matte Cardstock', priceModifier: 5 }
    ],
    coatings: [
      { id: 'uv-front-only', name: 'Gloss UV Front / Uncoated Writable Back', priceModifier: 0 }
    ],
    quantities: [100, 250, 500, 1000, 2500],
    standardTurnaround: '2-4 Business Days',
    rushAvailable: true,
    sampleBasePrice: 38,
    recommendedUse: 'Concerts, comedy shows, school sports, charity galas, VIP festivals.',
    relatedProductIds: ['bookmarks', 'postcards', 'flyers-and-brochures']
  },
  {
    id: 'flyers-and-brochures',
    name: 'Flyers & Brochures',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Versatile Tri-Fold, Bi-Fold & Flat Promotional Handouts',
    shortDescription: 'Vibrant full-color flyers and multi-panel folded brochures on premium gloss or matte text papers.',
    fullDescription: 'Essential for every sales campaign. Our flyers and brochures are printed with razor-sharp detail on 100lb book or cover stock, with optional tri-fold, half-fold, or z-fold configuration.',
    features: ['Precision machine folding (Tri-Fold, Half-Fold, Z-Fold)', 'Full-bleed edge-to-edge printing', 'Eco-friendly vibrant inks'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '8.5x11', name: '8.5" x 11" Standard Letter', priceModifier: 0 },
      { id: '8.5x14', name: '8.5" x 14" Legal (Menu Size)', priceModifier: 10 },
      { id: '11x17', name: '11" x 17" Tabloid (4-Panel Spread)', priceModifier: 22 },
      { id: '5.5x8.5', name: '5.5" x 8.5" Half-Sheet Handout', priceModifier: -12 }
    ],
    paperStocks: [
      { id: '100lb-gloss-text', name: '100lb Gloss Book (Standard Brochure Paper)', priceModifier: 0 },
      { id: '100lb-gloss-cover', name: '100lb Heavy Gloss Cover (Firm Card Feel)', priceModifier: 15 },
      { id: '70lb-opaque-matte', name: '70lb Uncoated Matte (Smooth Writing)', priceModifier: -5 }
    ],
    coatings: [
      { id: 'aqueous', name: 'Gloss Aqueous Both Sides', priceModifier: 0 },
      { id: 'satin-matte', name: 'Satin Dull Finish', priceModifier: 6 }
    ],
    quantities: [100, 250, 500, 1000, 2500, 5000, 10000],
    standardTurnaround: '2-3 Business Days',
    rushAvailable: true,
    sampleBasePrice: 45,
    badge: 'Houston Favorite',
    recommendedUse: 'Restaurant menus, sales kits, conference handouts, retail displays.',
    relatedProductIds: ['postcards', 'catalogues-booklets', 'sell-sheets', 'presentation-folders']
  },
  {
    id: 'magnets',
    name: 'Magnets',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Refrigerator & Filing Cabinet Staying Power',
    shortDescription: 'Flexible 17pt magnetic backed cards that stick to steel surfaces for years of visibility.',
    fullDescription: 'Keep your phone number and services permanently affixed to your clients’ refrigerators. Perfect for plumbers, realtors, emergency services, and doctors.',
    features: ['Strong 17pt flexible magnetic substrate', 'High-gloss UV laminated face', 'Optional rounded corners'],
    mockupType: 'business-card',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '2x3.5', name: '2" x 3.5" Business Card Magnet', priceModifier: 0 },
      { id: '4x6', name: '4" x 6" Postcard Magnet', priceModifier: 24 },
      { id: '5x7', name: '5" x 7" Calendar / Announcement Magnet', priceModifier: 42 }
    ],
    paperStocks: [
      { id: '17pt-magnetic', name: '17pt Heavy Flexible Magnet Material', priceModifier: 0 }
    ],
    coatings: [
      { id: 'gloss-uv', name: 'High-Gloss UV Protective Finish', priceModifier: 0 }
    ],
    quantities: [100, 250, 500, 1000, 2500],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: true,
    sampleBasePrice: 52,
    recommendedUse: 'Service technicians, local dentists, real estate agents, calendar reminders.',
    relatedProductIds: ['car-magnets', 'business-cards', 'postcards']
  },
  {
    id: 'ncr-forms',
    name: 'NCR Forms',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Carbonless Multi-Part Invoices, Work Orders & Receipts',
    shortDescription: '2-part, 3-part, and 4-part carbonless transfer paper sets with optional numbering and wraparound covers.',
    fullDescription: 'Eliminate carbon paper mess. When written upon with a ballpoint pen, pressure transfers cleanly across 2, 3, or 4 sheets. Padded in sets of 50 or edge-glued.',
    features: ['2-Part (White/Canary) or 3-Part (White/Canary/Pink)', 'Sequential red ink numbering', 'Padded into books with wraparound manifold cardstock flap'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: false,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '8.5x11', name: '8.5" x 11" Full Letter Size', priceModifier: 0 },
      { id: '5.5x8.5', name: '5.5" x 8.5" Half Letter (Compact Receipt)', priceModifier: -15 },
      { id: '8.5x14', name: '8.5" x 14" Legal Size', priceModifier: 15 }
    ],
    paperStocks: [
      { id: '2-part-ncr', name: '2-Part Carbonless (White / Yellow)', priceModifier: 0 },
      { id: '3-part-ncr', name: '3-Part Carbonless (White / Yellow / Pink)', priceModifier: 18 }
    ],
    coatings: [
      { id: 'uncoated', name: 'Carbonless Transfer Finish', priceModifier: 0 }
    ],
    quantities: [100, 250, 500, 1000, 2500],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: true,
    sampleBasePrice: 68,
    recommendedUse: 'HVAC repair orders, plumbing contracts, mechanic invoices, delivery receipts.',
    relatedProductIds: ['notepads', 'presentation-folders', 'envelopes']
  },
  {
    id: 'notepads',
    name: 'Notepads',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Branded Memo Pads on Every Client Desk',
    shortDescription: '25, 50, or 100 sheets per pad backed with sturdy heavy chipboard.',
    fullDescription: 'Custom printed notepads are one of the most useful promotional giveaways. Printed on 70lb uncoated smooth paper that takes all pen types without feathering or bleed-through.',
    features: ['Sturdy 28pt heavy chipboard backing', 'Clean tear-off padded adhesive top', '25, 50, or 100 sheets per pad options'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: false,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '4.25x5.5', name: '4.25" x 5.5" Desk Memo Pad', priceModifier: 0 },
      { id: '5.5x8.5', name: '5.5" x 8.5" Half Letter Pad', priceModifier: 8 },
      { id: '8.5x11', name: '8.5" x 11" Full Legal / Letter Pad', priceModifier: 25 }
    ],
    paperStocks: [
      { id: '70lb-uncoated', name: '70lb Bright White Opaque Smooth', priceModifier: 0 }
    ],
    coatings: [
      { id: 'uncoated', name: 'Writable Smooth Finish', priceModifier: 0 }
    ],
    quantities: [10, 25, 50, 100, 250, 500],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: true,
    sampleBasePrice: 49,
    recommendedUse: 'Office supplies, hotel room desks, pharmacy prescription pads, corporate gifts.',
    relatedProductIds: ['ncr-forms', 'business-cards', 'presentation-folders']
  },
  {
    id: 'plastic-cards',
    name: 'Plastic Cards',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Credit-Card Grade 20pt & 30pt PVC Plastic Cards',
    shortDescription: 'Waterproof, tear-proof white, clear, or frosted plastic cards with rounded corners.',
    fullDescription: 'Upgrade your brand to high-end plastic cards. Completely waterproof and tear-resistant, ideal for VIP membership cards, gift cards, and ultra-durable business cards.',
    features: ['20pt or heavy 30pt genuine PVC plastic', 'Clear, Frosted, or Solid White plastic substrates', 'Standard 1/8" credit card rounded corners included'],
    mockupType: 'business-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '3.375x2.125', name: '3.375" x 2.125" Credit Card Standard', priceModifier: 0 }
    ],
    paperStocks: [
      { id: '20pt-white-pvc', name: '20pt White Rigid PVC', priceModifier: 0 },
      { id: '20pt-frosted-pvc', name: '20pt Frosted Semi-Transparent PVC', priceModifier: 15 },
      { id: '20pt-clear-pvc', name: '20pt Crystal Clear Transparent PVC', priceModifier: 15 },
      { id: '30pt-heavy-white-pvc', name: '30pt Heavy Credit-Card Thickness PVC', priceModifier: 28 }
    ],
    coatings: [
      { id: 'matte-gloss-pvc', name: 'UV Protective Plastic Coating', priceModifier: 0 }
    ],
    quantities: [100, 250, 500, 1000, 2500],
    standardTurnaround: '5-7 Business Days',
    rushAvailable: false,
    sampleBasePrice: 85,
    recommendedUse: 'Gym memberships, salon gift cards, luxury business cards, loyalty club tags.',
    relatedProductIds: ['business-cards', 'akuafoil-cards', 'suede-cards']
  },
  {
    id: 'posters',
    name: 'Posters',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Vibrant Window & Wall Displays in Medium Format',
    shortDescription: '100lb gloss book or 100lb cover posters for retail sales, events, and announcements.',
    fullDescription: 'Catch every eye with razor-sharp commercial posters. High-resolution printing on rich 100lb gloss paper makes photo graphics and typography pop.',
    features: ['High-contrast color depth', 'Durable 100lb text or cover weight', 'Gloss aqueous coating protects against fading'],
    mockupType: 'poster-frame',
    supportsFrontAndBack: false,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '11x17', name: '11" x 17" Mini Poster', priceModifier: 0 },
      { id: '12x18', name: '12" x 18" Medium Poster', priceModifier: 6 },
      { id: '18x24', name: '18" x 24" Standard Event Poster', priceModifier: 18 },
      { id: '24x36', name: '24" x 36" Large Format Poster', priceModifier: 35 }
    ],
    paperStocks: [
      { id: '100lb-gloss-text', name: '100lb Gloss Book (Foldable)', priceModifier: 0 },
      { id: '100lb-gloss-cover', name: '100lb Stiff Gloss Cover', priceModifier: 12 },
      { id: '80lb-matte', name: '80lb Recycled Matte Text', priceModifier: 4 }
    ],
    coatings: [
      { id: 'aqueous', name: 'Gloss Aqueous Protection', priceModifier: 0 },
      { id: 'matte-coat', name: 'Matte Non-Glare Finish', priceModifier: 5 }
    ],
    quantities: [25, 50, 100, 250, 500, 1000],
    standardTurnaround: '2-3 Business Days',
    rushAvailable: true,
    sampleBasePrice: 55,
    recommendedUse: 'Concerts, movie releases, retail promotional sales, school events.',
    relatedProductIds: ['large-posters', 'mounted-canvas', 'flyers-and-brochures']
  },
  {
    id: 'presentation-folders',
    name: 'Presentation Folders',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Polished Corporate Portfolios with Interior Pockets',
    shortDescription: '9" x 12" folders with dual 4" pockets and die-cut business card slits.',
    fullDescription: 'Hand your prospects a cohesive, executive presentation. Our 9" x 12" folders fit standard 8.5" x 11" proposals, contracts, and marketing sheets with dual pockets and pre-cut business card slits.',
    features: ['Dual 4" deep glued interior pockets', 'Right pocket or dual pocket business card slits', 'Sturdy 14pt or 16pt thick cardstock', 'Spot UV or foil stamping options'],
    mockupType: 'greeting-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '9x12-standard', name: '9" x 12" Standard (Fits 8.5" x 11" Paper)', priceModifier: 0 },
      { id: '6x9-compact', name: '6" x 9" Compact Presentation Folder', priceModifier: -15 },
      { id: '9x14.5-legal', name: '9" x 14.5" Legal Document Folder', priceModifier: 28 }
    ],
    paperStocks: [
      { id: '14pt-gloss', name: '14pt Heavy Gloss Cover', priceModifier: 0 },
      { id: '16pt-matte', name: '16pt Matte Dull Cover', priceModifier: 15 },
      { id: '100lb-linen-cover', name: '100lb Textured Linen Cover', priceModifier: 30 }
    ],
    coatings: [
      { id: 'uv-outside', name: 'High-Gloss UV Outside', priceModifier: 0 },
      { id: 'matte-both', name: 'Matte Finish Throughout', priceModifier: 10 },
      { id: 'spot-uv', name: 'Spot UV on Cover Logo', priceModifier: 35 }
    ],
    quantities: [100, 250, 500, 1000, 2500],
    standardTurnaround: '4-6 Business Days',
    rushAvailable: true,
    sampleBasePrice: 185,
    recommendedUse: 'Corporate sales proposals, architectural tenders, real estate closing kits.',
    relatedProductIds: ['business-cards', 'sell-sheets', 'envelopes', 'catalogues-booklets']
  },
  {
    id: 'postcards',
    name: 'Postcards',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'High-Impact Direct Mail & Promotion Workhorses',
    shortDescription: 'Heavyweight cards ready for USPS EDDM or direct handouts, full color front and back.',
    fullDescription: 'The powerhouse of direct response marketing. Our postcards are printed on rigid 16pt card stock with rich UV gloss or smooth satin matte. Compatible with USPS mailing specifications.',
    features: ['USPS EDDM compliant sizes available', 'Ultra-durable 16pt card stock', 'Optional addressing and mailing preparation'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '4x6', name: '4" x 6" Standard Postcard', priceModifier: 0 },
      { id: '5x7', name: '5" x 7" Classic Size', priceModifier: 12 },
      { id: '6x9', name: '6" x 9" Jumbo Mailer', priceModifier: 24 },
      { id: '6.5x9', name: '6.5" x 9" EDDM Compliant Size', priceModifier: 26 },
      { id: '6x11', name: '6" x 11" Oversized EDDM Mailer', priceModifier: 38 }
    ],
    paperStocks: [
      { id: '16pt-cardstock', name: '16pt Heavyweight Cardstock', priceModifier: 0 },
      { id: '14pt-gloss', name: '14pt Gloss Cardstock', priceModifier: -5 },
      { id: '18pt-c1s', name: '18pt C1S (Gloss Front / Uncoated Writable Back)', priceModifier: 8 }
    ],
    coatings: [
      { id: 'uv-both', name: 'Gloss UV Both Sides', priceModifier: 0 },
      { id: 'uv-front-matte-back', name: 'Gloss UV Front / Uncoated Writable Back', priceModifier: 2 },
      { id: 'matte-both', name: 'Satin Matte Finish Both Sides', priceModifier: 4 }
    ],
    quantities: [100, 250, 500, 1000, 2500, 5000, 10000],
    standardTurnaround: '2-3 Business Days',
    rushAvailable: true,
    sampleBasePrice: 34,
    recommendedUse: 'Direct mail advertising, real estate just listed/sold, event announcements, gallery mailings.',
    relatedProductIds: ['greeting-cards', 'business-cards', 'flyers-and-brochures', 'eddm-services']
  },
  {
    id: 'sell-sheets',
    name: 'Sell Sheets',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Single-Page Product & Specification Fact Sheets',
    shortDescription: 'Flat 8.5" x 11" full-color specification inserts for sales binders and folders.',
    fullDescription: 'Deliver essential product data, pricing tiers, and spec sheets with crisp, full-bleed 8.5" x 11" sell sheets printed on 100lb gloss book or 100lb cover stock.',
    features: ['Exact 8.5" x 11" letter format fits all binders and folders', 'Single or double-sided printing', 'Heavyweight paper that resists dog-earing'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '8.5x11', name: '8.5" x 11" Standard Letter', priceModifier: 0 },
      { id: '8.5x14', name: '8.5" x 14" Legal Sheet', priceModifier: 12 }
    ],
    paperStocks: [
      { id: '100lb-gloss-book', name: '100lb Gloss Book (Heavy Text Weight)', priceModifier: 0 },
      { id: '100lb-gloss-cover', name: '100lb Stiff Gloss Cardstock Cover', priceModifier: 14 }
    ],
    coatings: [
      { id: 'aqueous', name: 'Aqueous Gloss Both Sides', priceModifier: 0 },
      { id: 'satin-dull', name: 'Satin Dull Finish', priceModifier: 6 }
    ],
    quantities: [100, 250, 500, 1000, 2500],
    standardTurnaround: '2-3 Business Days',
    rushAvailable: true,
    sampleBasePrice: 42,
    recommendedUse: 'Technical specs, B2B product datasheets, trade show inserts, pricing guides.',
    relatedProductIds: ['presentation-folders', 'flyers-and-brochures', 'catalogues-booklets']
  },
  {
    id: 'table-tents',
    name: 'Table Tents',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Self-Standing Tabletop Displays for Menus & Drinks',
    shortDescription: 'Interlocking die-cut base table tents that assemble in seconds without tape or glue.',
    fullDescription: 'Capture customer attention right at tables and bar counters. Die-cut with interlocking base tabs for instantaneous pop-up assembly and durable standing stability.',
    features: ['Pre-scored with interlocking die-cut base tabs', 'Displays two distinct visible panels', 'Ultra-stiff 14pt card stock with UV coating'],
    mockupType: 'greeting-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '4x6-standing', name: '4" x 6" Standing Panel (Flat 4" x 16.25")', priceModifier: 0 },
      { id: '5x5.5-standing', name: '5" x 5.5" Square Panel (Flat 5" x 16.5")', priceModifier: 8 }
    ],
    paperStocks: [
      { id: '14pt-gloss', name: '14pt Gloss Cardstock', priceModifier: 0 }
    ],
    coatings: [
      { id: 'gloss-uv', name: 'High-Gloss UV Protective Surface', priceModifier: 0 }
    ],
    quantities: [100, 250, 500, 1000, 2500],
    standardTurnaround: '3-4 Business Days',
    rushAvailable: true,
    sampleBasePrice: 62,
    recommendedUse: 'Bars, breweries, dessert specials, restaurant table promotions, hotel lobbies.',
    relatedProductIds: ['counter-cards', 'flyers-and-brochures', 'postcards']
  },
  {
    id: 'tear-off-cards',
    name: 'Tear-Off Cards',
    category: 'Marketing Products',
    categorySlug: 'marketing',
    tagline: 'Cards with Perforated Tear-Away Business Cards or Coupons',
    shortDescription: 'Postcard size with a micro-perforated 2" x 3.5" detachable card at the bottom.',
    fullDescription: 'Two marketing pieces in one! Your customers keep the upper informational card or calendar and tear off the perforated bottom coupon or business card for their wallet.',
    features: ['Clean micro-perforation line for effortless detachment', 'Standard 2" x 3.5" detachable coupon or business card', 'Durable 16pt card stock'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '3.5x8.5', name: '3.5" x 8.5" (with 2" x 3.5" Tear-Off)', priceModifier: 0 },
      { id: '4.25x11', name: '4.25" x 11" (with 2" x 3.5" Tear-Off)', priceModifier: 15 }
    ],
    paperStocks: [
      { id: '16pt-cardstock', name: '16pt Heavy Cardstock', priceModifier: 0 }
    ],
    coatings: [
      { id: 'uv-both', name: 'Gloss UV Both Sides', priceModifier: 0 },
      { id: 'matte-both', name: 'Matte Finish Both Sides', priceModifier: 4 }
    ],
    quantities: [250, 500, 1000, 2500],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: true,
    sampleBasePrice: 72,
    recommendedUse: 'Realtors, membership sign-ups, discount loyalty clubs, event raffle entries.',
    relatedProductIds: ['door-hangers', 'business-cards', 'postcards']
  },

  // ----------------------------------------------------
  // LARGE FORMAT PRODUCTS (12 items)
  // ----------------------------------------------------
  {
    id: 'adhesive-vinyl',
    name: 'Adhesive Vinyl',
    category: 'Large Format Products',
    categorySlug: 'large-format',
    tagline: 'Custom Peel-and-Stick Vinyl Decals & Wall Graphics',
    shortDescription: 'Waterproof permanent or removable vinyl film for walls, windows, floors, and vehicles.',
    fullDescription: 'Transform any smooth surface with full-color adhesive vinyl. Features high-resolution latex ink printing on 4mil white or clear PVC with air-release adhesive for bubble-free application.',
    features: ['Air-release channels for bubble-free mounting', 'UV and water resistant outdoor latex ink', 'Matte or gloss protective overlaminate'],
    mockupType: 'poster-frame',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '24x36', name: '24" x 36" (2 ft x 3 ft)', priceModifier: 0 },
      { id: '36x48', name: '36" x 48" (3 ft x 4 ft)', priceModifier: 25 },
      { id: '48x72', name: '48" x 72" (4 ft x 6 ft)', priceModifier: 55 },
      { id: 'custom-sqft', name: 'Custom Dimensions (Per Sq Ft)', priceModifier: 10 }
    ],
    paperStocks: [
      { id: '4mil-white-gloss', name: '4mil White Gloss Adhesive Vinyl', priceModifier: 0 },
      { id: '4mil-white-matte', name: '4mil White Matte Adhesive Vinyl', priceModifier: 0 },
      { id: 'translucent-backlit', name: 'Backlit Translucent Vinyl Film', priceModifier: 20 }
    ],
    coatings: [
      { id: 'gloss-lam', name: 'Gloss UV Protective Overlaminate', priceModifier: 12 },
      { id: 'matte-lam', name: 'Matte Anti-Glare Overlaminate', priceModifier: 12 },
      { id: 'no-lam', name: 'Unlaminated (Indoor)', priceModifier: 0 }
    ],
    quantities: [1, 2, 5, 10, 25, 50],
    standardTurnaround: '2-3 Business Days',
    rushAvailable: true,
    sampleBasePrice: 45,
    recommendedUse: 'Storefront signage, retail interior wall murals, vehicle fleet branding, trade booths.',
    relatedProductIds: ['window-graphics', 'car-magnets', 'bumper-stickers']
  },
  {
    id: 'banner-stands',
    name: 'Banner Stands',
    category: 'Large Format Products',
    categorySlug: 'large-format',
    tagline: 'Retractable Roll-Up Stands with Aluminum Base & Case',
    shortDescription: 'Portable pull-up trade show display with anti-curl blockout vinyl and padded carrying bag.',
    fullDescription: 'Set up your display in under 30 seconds! Our premium retractable roll-up banner stands feature a heavy-duty anodized aluminum base, support pole, and vibrant 13oz no-curl blockout graphic that rolls safely into the base.',
    features: ['Heavy anodized aluminum cassette base with swivel feet', '13oz anti-curl polyester blockout film', 'Padded canvas carry case included', 'Assembles in under 30 seconds'],
    mockupType: 'banner-stand',
    supportsFrontAndBack: false,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '33x81-standard', name: '33" x 81" Standard Deluxe Retractable', priceModifier: 0, badge: 'Top Seller' },
      { id: '24x81-mini', name: '24" x 81" Slim Retractable', priceModifier: -15 },
      { id: '36x92-tall', name: '36" x 92" Grand Retractable', priceModifier: 35 },
      { id: '48x81-wide', name: '48" x 81" Double-Wide Backdrop Stand', priceModifier: 75 }
    ],
    paperStocks: [
      { id: '13oz-no-curl', name: '13oz Super Smooth Anti-Curl Blockout Film', priceModifier: 0 }
    ],
    coatings: [
      { id: 'satin-finish', name: 'Satin Non-Glare Photographic Finish', priceModifier: 0 }
    ],
    quantities: [1, 2, 4, 8, 12],
    standardTurnaround: '2-3 Business Days',
    rushAvailable: true,
    sampleBasePrice: 115,
    badge: 'Houston Conference Ready',
    recommendedUse: 'Houston convention center exhibits, hotel seminars, retail sales entrances, showroom lobbies.',
    relatedProductIds: ['vinyl-banners', 'table-throws', 'fabric-banners']
  },
  {
    id: 'bumper-stickers',
    name: 'Bumper Stickers',
    category: 'Large Format Products',
    categorySlug: 'large-format',
    tagline: 'Weatherproof Heavy Vinyl with UV Protective Overcoat',
    shortDescription: 'Durable automotive stickers that withstand Texas heat, rain, and car washes.',
    fullDescription: 'Show your message on the open road. Printed with UV-cure pigments on 4mil thick exterior-grade vinyl that will not fade, crack, or peel in the hot Texas sun.',
    features: ['Exterior weatherproofing rated up to 3 years', 'Clean residue-free removal', 'Vibrant UV stable inks'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '3x10', name: '3" x 10" Standard Automotive Size', priceModifier: 0 },
      { id: '3x11.5', name: '3" x 11.5" Extended Oval/Rectangle', priceModifier: 4 },
      { id: '4x6', name: '4" x 6" Oval Euro Style', priceModifier: 2 }
    ],
    paperStocks: [
      { id: '4mil-automotive-vinyl', name: '4mil High-Tack Gloss Automotive Vinyl', priceModifier: 0 }
    ],
    coatings: [
      { id: 'uv-gloss-coat', name: 'High-Gloss Clear UV Overcoat', priceModifier: 0 }
    ],
    quantities: [50, 100, 250, 500, 1000],
    standardTurnaround: '3-4 Business Days',
    rushAvailable: true,
    sampleBasePrice: 42,
    recommendedUse: 'Political campaigns, sports booster clubs, local breweries, radio stations.',
    relatedProductIds: ['car-magnets', 'adhesive-vinyl', 'labels-and-stickers']
  },
  {
    id: 'car-magnets',
    name: 'Car Magnets',
    category: 'Large Format Products',
    categorySlug: 'large-format',
    tagline: 'Heavy-Duty 30mil Vehicle Magnets Tested up to 75 MPH',
    shortDescription: 'Removable door magnets that turn your everyday car into a mobile billboard.',
    fullDescription: 'Promote your business on company vehicles or personal cars without adhesive wraps. Made of heavy 30mil magnetic material with rounded corners to prevent wind lift at highway speeds.',
    features: ['30mil heavy vehicle-grade magnetic sheeting', 'Highway speed tested with rounded safety corners', 'UV laminated surface prevents yellowing'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '12x24', name: '12" x 24" (Truck & Van Doors)', priceModifier: 0, badge: 'Popular' },
      { id: '12x18', name: '12" x 18" (Compact Car Door)', priceModifier: -10 },
      { id: '18x24', name: '18" x 24" (Large Commercial Truck)', priceModifier: 20 },
      { id: '24x36', name: '24" x 36" (Rear Tailgate / Box Truck)', priceModifier: 45 }
    ],
    paperStocks: [
      { id: '30mil-magnetic', name: '30mil Heavy-Duty Vehicle Magnet', priceModifier: 0 }
    ],
    coatings: [
      { id: 'gloss-laminate', name: 'High-Gloss Protective Laminate', priceModifier: 0 },
      { id: 'matte-laminate', name: 'Matte Non-Glare Laminate', priceModifier: 0 }
    ],
    quantities: [2, 4, 6, 10, 20],
    standardTurnaround: '2-3 Business Days',
    rushAvailable: true,
    sampleBasePrice: 58,
    recommendedUse: 'Contractors, mobile pet groomers, couriers, home appraisers, caterers.',
    relatedProductIds: ['adhesive-vinyl', 'magnets', 'bumper-stickers']
  },
  {
    id: 'fabric-banners',
    name: 'Fabric Banners',
    category: 'Large Format Products',
    categorySlug: 'large-format',
    tagline: 'Wrinkle-Resistant 100% Polyester Dye-Sublimated Banners',
    shortDescription: 'Elegant, glare-free washable fabric banners with sewn hem edges for indoor events and photography backdrops.',
    fullDescription: 'Ditch plastic reflections. Our premium polyester fabric banners are printed via high-heat dye sublimation, permanently infusing ink into the fibers for vibrant, machine-washable, glare-free beauty.',
    features: ['9oz 100% wrinkle-resistant polyester', 'High-heat dye sublimation printing', 'Sewn hems with reinforced brass grommets or pole pockets', 'Machine washable & glare-free for flash photography'],
    mockupType: 'banner-stand',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '3x6', name: '3 ft x 6 ft', priceModifier: 0 },
      { id: '4x8', name: '4 ft x 8 ft', priceModifier: 35 },
      { id: '8x8', name: '8 ft x 8 ft Step-and-Repeat Backdrop', priceModifier: 95 },
      { id: '10x8', name: '10 ft x 8 ft Trade Show Backdrop', priceModifier: 130 }
    ],
    paperStocks: [
      { id: '9oz-poly-fabric', name: '9oz Premium Dye-Sub Washable Polyester', priceModifier: 0 }
    ],
    coatings: [
      { id: 'dye-sub', name: 'Infused Sublimation Matte', priceModifier: 0 }
    ],
    quantities: [1, 2, 4, 8],
    standardTurnaround: '3-4 Business Days',
    rushAvailable: true,
    sampleBasePrice: 85,
    recommendedUse: 'Red carpet step & repeat backdrops, church stages, indoor expo booths, museum displays.',
    relatedProductIds: ['vinyl-banners', 'table-throws', 'banner-stands']
  },
  {
    id: 'flags',
    name: 'Flags',
    category: 'Large Format Products',
    categorySlug: 'large-format',
    tagline: 'Feather, Teardrop & Swooper Flags with Poles & Base',
    shortDescription: 'Attention-grabbing wind flags for curbside marketing, auto dealerships, and outdoor festivals.',
    fullDescription: 'Harness the wind to stop traffic. Printed on durable 4oz polyester mesh with vibrant full-bleed color showing through to the reverse side. Complete hardware kit includes carbon-fiber pole, ground stake or cross-base.',
    features: ['Available in Feather, Teardrop, or Econo shapes', 'Includes flexible carbon-composite pole and carrying bag', 'Ground stake (grass) or weighted water-bag cross base (sidewalk)'],
    mockupType: 'banner-stand',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '9ft-feather', name: '9 ft Small Feather Flag with Hardware', priceModifier: 0 },
      { id: '12ft-feather', name: '12 ft Medium Feather Flag with Hardware', priceModifier: 25, badge: 'Popular' },
      { id: '15ft-feather', name: '15 ft Giant Feather Flag with Hardware', priceModifier: 55 }
    ],
    paperStocks: [
      { id: '4oz-poly-flag', name: '4oz Wind-Permeable Polyester Mesh', priceModifier: 0 }
    ],
    coatings: [
      { id: 'sublimated', name: 'UV Fade-Resistant Dye Inks', priceModifier: 0 }
    ],
    quantities: [1, 2, 4, 8, 12],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: true,
    sampleBasePrice: 89,
    recommendedUse: 'Auto dealerships, apartment leasing offices, street fairs, grand opening events.',
    relatedProductIds: ['yard-signs', 'vinyl-banners', 'banner-stands']
  },
  {
    id: 'large-posters',
    name: 'Large Posters',
    category: 'Large Format Products',
    categorySlug: 'large-format',
    tagline: 'Photographic Quality Prints up to 60" Wide',
    shortDescription: 'Archival grade large posters printed on 8mil satin or gloss photo paper.',
    fullDescription: 'Museum-quality large format poster printing. With our 12-color archival pigment printers, photographic gradients, shadows, and vibrant hues reproduce with breathtaking clarity up to 60 inches wide.',
    features: ['12-color archival pigment ink printing', 'Heavy 8mil photographic paper stock', 'Resistant to indoor UV fading for 20+ years'],
    mockupType: 'poster-frame',
    supportsFrontAndBack: false,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '24x36', name: '24" x 36" (Standard Poster Frame)', priceModifier: 0 },
      { id: '30x40', name: '30" x 40" Movie Poster Size', priceModifier: 18 },
      { id: '36x48', name: '36" x 48" Architectural / Gallery', priceModifier: 38 },
      { id: '48x72', name: '48" x 72" Giant Exhibit Poster', priceModifier: 75 }
    ],
    paperStocks: [
      { id: '8mil-satin-photo', name: '8mil Premium Satin Photo Paper', priceModifier: 0 },
      { id: '8mil-gloss-photo', name: '8mil High-Gloss Photo Paper', priceModifier: 0 },
      { id: 'matte-archival', name: '230gsm Matte Fine Art Paper', priceModifier: 15 }
    ],
    coatings: [
      { id: 'archival-ink', name: 'Archival Pigment Finish', priceModifier: 0 }
    ],
    quantities: [1, 2, 5, 10, 25],
    standardTurnaround: '1-2 Business Days',
    rushAvailable: true,
    sampleBasePrice: 38,
    badge: 'Same-Day Ready',
    recommendedUse: 'Art gallery exhibitions, retail window promotions, movie posters, conference signage.',
    relatedProductIds: ['mounted-canvas', 'posters', 'adhesive-vinyl']
  },
  {
    id: 'mounted-canvas',
    name: 'Mounted Canvas',
    category: 'Large Format Products',
    categorySlug: 'large-format',
    tagline: 'Gallery-Wrapped Canvas with 1.5" Solid Wood Stretcher Bars',
    shortDescription: 'Museum-grade canvas stretched over solid pine frames ready to hang.',
    fullDescription: 'Turn your photography or brand artwork into fine art. Printed on genuine heavyweight 17mil artist cotton canvas, hand-stretched over 1.5" kiln-dried wooden stretcher bars with folded corners and hanging hardware included.',
    features: ['1.5" deep gallery-wrap solid wood stretcher bars', '17mil artist-grade cotton/poly textured canvas', 'Pre-installed sawtooth or wire hanging hardware', 'Mirrored, black, or continuous wrap edge options'],
    mockupType: 'poster-frame',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '16x20', name: '16" x 20" Gallery Canvas', priceModifier: 0 },
      { id: '18x24', name: '18" x 24" Medium Canvas', priceModifier: 20 },
      { id: '24x36', name: '24" x 36" Large Statement Canvas', priceModifier: 55 },
      { id: '36x48', name: '36" x 48" Masterpiece Size', priceModifier: 110 }
    ],
    paperStocks: [
      { id: '17mil-cotton-canvas', name: '17mil Heavyweight Artist Texture Canvas', priceModifier: 0 }
    ],
    coatings: [
      { id: 'semi-gloss-varnish', name: 'Semi-Gloss Protective Varnish', priceModifier: 0 }
    ],
    quantities: [1, 2, 3, 5, 10],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: false,
    sampleBasePrice: 65,
    recommendedUse: 'Executive boardroom decor, lobby artwork, family portraiture, high-end photography.',
    relatedProductIds: ['large-posters', 'posters']
  },
  {
    id: 'table-throws',
    name: 'Table Throws',
    category: 'Large Format Products',
    categorySlug: 'large-format',
    tagline: 'Custom Dye-Sublimated Full-Color Tablecloths',
    shortDescription: 'Fitted and draped 6ft and 8ft trade show table covers with edge-to-edge printing.',
    fullDescription: 'Complete your convention presence. Our 300D polyester table throws are printed edge-to-edge with no color limitations. Flame-retardant, wrinkle-resistant, and machine washable.',
    features: ['Available in 6ft and 8ft standard banquet table dimensions', 'Choice of 4-sided full drape or 3-sided open back for easy legroom', 'NFPA 701 certified flame retardant polyester'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '6ft-4sided', name: '6 ft Table - 4-Sided Full Drape (72" x 30" x 30")', priceModifier: 0 },
      { id: '6ft-3sided', name: '6 ft Table - 3-Sided Open Back', priceModifier: -10 },
      { id: '8ft-4sided', name: '8 ft Table - 4-Sided Full Drape (96" x 30" x 30")', priceModifier: 25 },
      { id: '8ft-3sided', name: '8 ft Table - 3-Sided Open Back', priceModifier: 15 }
    ],
    paperStocks: [
      { id: '300d-poly-throw', name: '300D Washable Flame-Retardant Polyester', priceModifier: 0 }
    ],
    coatings: [
      { id: 'sublimated-soft', name: 'Dye Sublimated Matte', priceModifier: 0 }
    ],
    quantities: [1, 2, 4, 8],
    standardTurnaround: '3-4 Business Days',
    rushAvailable: true,
    sampleBasePrice: 125,
    recommendedUse: 'Trade show booths, college fairs, product demo tables, registration desks.',
    relatedProductIds: ['banner-stands', 'fabric-banners', 'vinyl-banners']
  },
  {
    id: 'vinyl-banners',
    name: 'Vinyl Banners',
    category: 'Large Format Products',
    categorySlug: 'large-format',
    tagline: 'Heavy-Duty 13oz & 18oz Scrim Outdoor Vinyl Banners',
    shortDescription: 'Weatherproof banners with heat-welded hems and nickel brass grommets every 2 feet.',
    fullDescription: 'The most cost-effective outdoor advertising in Texas. Our vinyl banners use tear-resistant 13oz or heavy 18oz vinyl with reinforced welded hem perimeters and grommets, ready to hang indoors or outdoors.',
    features: ['13oz standard or ultra-heavy 18oz blockout scrim vinyl', 'Heat-welded 1" reinforced hem edges included', 'Rust-proof nickel grommets placed every 2 feet around perimeter', 'Waterproof & UV fade-resistant for 3+ years outdoors'],
    mockupType: 'banner-stand',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '3x6', name: '3 ft x 6 ft Standard Banner', priceModifier: 0, badge: 'Popular' },
      { id: '2x4', name: '2 ft x 4 ft Compact Banner', priceModifier: -18 },
      { id: '4x8', name: '4 ft x 8 ft Large Outdoor Banner', priceModifier: 32 },
      { id: '5x10', name: '5 ft x 10 ft Jumbo Event Banner', priceModifier: 70 },
      { id: 'custom-banner', name: 'Custom Banner Dimensions (Sq Ft)', priceModifier: 15 }
    ],
    paperStocks: [
      { id: '13oz-scrim-matte', name: '13oz Matte Scrim Vinyl (Glare-Free)', priceModifier: 0 },
      { id: '13oz-scrim-gloss', name: '13oz Gloss Scrim Vinyl (Vibrant Color)', priceModifier: 0 },
      { id: '18oz-heavy-blockout', name: '18oz Heavy-Duty Double-Sided Blockout', priceModifier: 24 },
      { id: '8oz-mesh-vinyl', name: '8oz Wind-Pass Mesh Vinyl (Fences)', priceModifier: 15 }
    ],
    coatings: [
      { id: 'uv-outdoor-cure', name: 'UV Resistant Outdoor Inks', priceModifier: 0 }
    ],
    quantities: [1, 2, 3, 5, 10, 20],
    standardTurnaround: '1-2 Business Days',
    rushAvailable: true,
    sampleBasePrice: 42,
    badge: 'Houston Same-Day Ready',
    recommendedUse: 'Grand openings, birthday celebrations, sports sponsorships, construction fencing.',
    relatedProductIds: ['banner-stands', 'fabric-banners', 'yard-signs', 'flags']
  },
  {
    id: 'window-graphics',
    name: 'Window Graphics',
    category: 'Large Format Products',
    categorySlug: 'large-format',
    tagline: 'Perforated See-Through One-Way Vision & Frosted Vinyl',
    shortDescription: '60/40 perforated film that displays full-color graphics outside while maintaining full vision inside.',
    fullDescription: 'Maximize your retail window real estate. With 60/40 perforated window film, pedestrians see a giant full-color advertisement from the street, while employees inside see right through to the outdoors with solar shading.',
    features: ['60/40 perforation ratio for optimal exterior clarity', 'Provides 40% interior solar heat and glare reduction', 'Removable acrylic adhesive leaves zero residue on glass'],
    mockupType: 'poster-frame',
    supportsFrontAndBack: false,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '24x36', name: '24" x 36" Window Panel', priceModifier: 0 },
      { id: '36x60', name: '36" x 60" Storefront Door / Window', priceModifier: 35 },
      { id: '48x72', name: '48" x 72" Large Display Window', priceModifier: 65 },
      { id: 'custom-window', name: 'Custom Window Dimensions (Per Sq Ft)', priceModifier: 12 }
    ],
    paperStocks: [
      { id: '60-40-perf', name: '60/40 Perforated One-Way Vision Vinyl', priceModifier: 0 },
      { id: 'frosted-etch', name: 'Etched Glass Frosted Privacy Film', priceModifier: 15 },
      { id: 'static-cling-white', name: 'Static Cling (No Adhesive, Removable)', priceModifier: -5 }
    ],
    coatings: [
      { id: 'optically-clear-lam', name: 'Optically Clear Protective Overlaminate', priceModifier: 15 },
      { id: 'unlaminated', name: 'Unlaminated', priceModifier: 0 }
    ],
    quantities: [1, 2, 4, 6, 10],
    standardTurnaround: '2-3 Business Days',
    rushAvailable: true,
    sampleBasePrice: 55,
    recommendedUse: 'Barbershops, retail storefronts, dental clinics, vehicle back windshields.',
    relatedProductIds: ['adhesive-vinyl', 'yard-signs', 'vinyl-banners']
  },
  {
    id: 'yard-signs',
    name: 'Yard Signs',
    category: 'Large Format Products',
    categorySlug: 'large-format',
    tagline: 'Weatherproof 4mm Coroplast with Galvanized H-Stakes',
    shortDescription: 'Fluted plastic signs for real estate, contractors, elections, and directional guidance.',
    fullDescription: 'The king of local lawn marketing. Printed directly with UV cured ink onto rigid 4mm fluted Coroplast. Waterproof, heat-resistant, and includes durable 10" x 30" galvanized wire H-stakes for push-in lawn installation.',
    features: ['Direct-to-board high-speed UV digital printing', 'Weatherproof 4mm fluted polypropylene Coroplast', 'Galvanized 9-gauge steel wire H-stakes included', 'Single or double-sided printing'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '18x24', name: '18" x 24" Standard Yard Sign', priceModifier: 0, badge: 'Standard' },
      { id: '12x18', name: '12" x 18" Directional Arrow Sign', priceModifier: -4 },
      { id: '24x24', name: '24" x 24" Square Real Estate Sign', priceModifier: 6 },
      { id: '24x36', name: '24" x 36" Large Roadside Sign', priceModifier: 16 }
    ],
    paperStocks: [
      { id: '4mm-coroplast-white', name: '4mm White Fluted Coroplast', priceModifier: 0 },
      { id: '4mm-coroplast-yellow', name: '4mm High-Visibility Yellow Coroplast', priceModifier: 5 },
      { id: '10mm-heavy-coroplast', name: '10mm Ultra-Rigid Heavy Coroplast', priceModifier: 20 }
    ],
    coatings: [
      { id: 'uv-matte-print', name: 'Direct UV Cured Weatherproof Print', priceModifier: 0 }
    ],
    quantities: [5, 10, 25, 50, 100, 250],
    standardTurnaround: '1-3 Business Days',
    rushAvailable: true,
    sampleBasePrice: 45,
    badge: 'Houston Rush Ready',
    recommendedUse: 'Real estate open houses, roofers & painters, political campaigns, graduation celebrations.',
    relatedProductIds: ['vinyl-banners', 'car-magnets', 'flags']
  },

  // ----------------------------------------------------
  // MAJESTIC PRODUCTS (7 items)
  // ----------------------------------------------------
  {
    id: 'akuafoil-cards',
    name: 'Akuafoil Cards',
    category: 'Majestic Products',
    categorySlug: 'majestic',
    tagline: 'Multi-Color Sparkling Foil with CMYK Ink Over Silver Layer',
    shortDescription: 'Mesmerizing multi-colored metallic foil gradients created by printing translucent ink over silver foil.',
    fullDescription: 'Why settle for one foil color when you can have a limitless spectrum? Akuafoil combines a metallic silver foil base with a translucent color ink layer, producing dazzling multicolored metallic reflections anywhere on your card.',
    features: ['Unlimited metallic foil colors on a single card', 'Ultra-thick 16pt card stock with high-gloss UV', 'Foil can be applied to logo, text, or background gradients'],
    mockupType: 'business-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '2x3.5', name: '2" x 3.5" Standard Business Card', priceModifier: 0 },
      { id: '2x2', name: '2" x 2" Square Card', priceModifier: 5 },
      { id: '4x6', name: '4" x 6" Postcard Flyer', priceModifier: 28 }
    ],
    paperStocks: [
      { id: '16pt-akuafoil-stock', name: '16pt Stiff Akuafoil Cardstock', priceModifier: 0 }
    ],
    coatings: [
      { id: 'uv-akuafoil', name: 'Gloss UV Front / Smooth Back', priceModifier: 0 }
    ],
    quantities: [500, 1000, 2500, 5000],
    standardTurnaround: '4-6 Business Days',
    rushAvailable: false,
    sampleBasePrice: 65,
    badge: 'Majestic Metallic',
    recommendedUse: 'High-end beauty salons, nightlife promotions, jewelry brands, luxury realtors.',
    relatedProductIds: ['foil-worx', 'pearl-cards', 'edge-cards', 'business-cards']
  },
  {
    id: 'edge-cards',
    name: 'Edge Cards',
    category: 'Majestic Products',
    categorySlug: 'majestic',
    tagline: 'Ultra-Thick 32pt Triple-Layer Cards with Colored Core Edge',
    shortDescription: 'Unrivaled 32pt thickness with a bold colored core center slice or metallic painted rim.',
    fullDescription: 'Feel the substantial difference. Edge Cards feature a sandwich of three paper layers yielding a massive 32pt thickness. Choose a vibrant colored core or hand-painted metallic edges that catch the light from the side.',
    features: ['Massive 32pt ultra-thick construction', 'Over 15 edge color choices including Neon and Metallic Gold/Silver', 'Smooth uncoated tactile white face paper'],
    mockupType: 'business-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '2x3.5', name: '2" x 3.5" Standard Business Card', priceModifier: 0 }
    ],
    paperStocks: [
      { id: '32pt-uncoated-white', name: '32pt Ultra-Thick Smooth Bright White', priceModifier: 0 }
    ],
    coatings: [
      { id: 'edge-metallic-gold', name: 'Metallic Gold Painted Edges', priceModifier: 15 },
      { id: 'edge-metallic-silver', name: 'Metallic Silver Painted Edges', priceModifier: 15 },
      { id: 'edge-vibrant-orange', name: 'Vibrant Orange Edge Core', priceModifier: 0 },
      { id: 'edge-jet-black', name: 'Jet Black Edge Core', priceModifier: 0 },
      { id: 'edge-cyan-blue', name: 'Electric Blue Edge Core', priceModifier: 0 }
    ],
    quantities: [250, 500, 1000],
    standardTurnaround: '5-7 Business Days',
    rushAvailable: false,
    sampleBasePrice: 95,
    badge: 'Ultra Heavy 32pt',
    recommendedUse: 'C-suite executives, boutique design agencies, luxury architects, law partners.',
    relatedProductIds: ['suede-cards', 'silk-cards', 'foil-worx']
  },
  {
    id: 'foil-worx',
    name: 'Foil Worx',
    category: 'Majestic Products',
    categorySlug: 'majestic',
    tagline: 'Classic Hot Stamped Metallic Foil in Gold, Silver & Copper',
    shortDescription: 'Traditional hot stamp metallic foil pressed into silky 14pt cardstock.',
    fullDescription: 'Timeless luxury. Foil Worx cards feature genuine metallic foil hot-stamped into the paper for a slight tactile deboss and brilliant mirror-like reflectivity. Available in Gold, Silver, Rose Gold, and Copper.',
    features: ['Mirror-finish hot foil stamping', 'Silky smooth matte lamination background', 'Single or double-sided foil accent options'],
    mockupType: 'business-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '2x3.5', name: '2" x 3.5" Standard Business Card', priceModifier: 0 },
      { id: '4x6', name: '4" x 6" Invitation Card', priceModifier: 32 }
    ],
    paperStocks: [
      { id: '14pt-silk-card', name: '14pt Silk Laminated Cover', priceModifier: 0 }
    ],
    coatings: [
      { id: 'gold-foil', name: 'Brilliant Gold Foil Stamping', priceModifier: 0 },
      { id: 'silver-foil', name: 'Mirror Silver Foil Stamping', priceModifier: 0 },
      { id: 'rose-gold-foil', name: 'Rose Gold Foil Stamping', priceModifier: 8 },
      { id: 'copper-foil', name: 'Warm Copper Foil Stamping', priceModifier: 8 }
    ],
    quantities: [500, 1000, 2500],
    standardTurnaround: '5-7 Business Days',
    rushAvailable: false,
    sampleBasePrice: 88,
    badge: 'Mirror Foil',
    recommendedUse: 'Wedding planners, high-end jewelers, private wealth consultants, luxury spas.',
    relatedProductIds: ['akuafoil-cards', 'silk-cards', 'pearl-cards']
  },
  {
    id: 'natural-cards',
    name: 'Natural Cards',
    category: 'Majestic Products',
    categorySlug: 'majestic',
    tagline: 'Eco-Friendly 14pt Kraft & 30% Post-Consumer Recycled Paper',
    shortDescription: 'Earthy, organic cards printed on light brown kraft or warm off-white recycled paper.',
    fullDescription: 'Embrace sustainable beauty. Natural cards feature 30% recycled fiber content with visible organic paper specks and an inviting, tactile tooth. White ink printing is available to make text pop against natural brown kraft.',
    features: ['Light brown Kraft or warm natural off-white stock', 'Optional opaque white ink technology', '100% recyclable and eco-conscious'],
    mockupType: 'business-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '2x3.5', name: '2" x 3.5" Standard Business Card', priceModifier: 0 },
      { id: '4x6', name: '4" x 6" Postcard Card', priceModifier: 20 },
      { id: '5x7', name: '5" x 7" Invitation Card', priceModifier: 28 }
    ],
    paperStocks: [
      { id: '14pt-natural-kraft', name: '14pt Organic Brown Kraft Stock', priceModifier: 0 },
      { id: '14pt-natural-white', name: '14pt Warm Natural Cream Off-White', priceModifier: 0 }
    ],
    coatings: [
      { id: 'uncoated-organic', name: 'Natural Uncoated Matte Feel', priceModifier: 0 }
    ],
    quantities: [250, 500, 1000, 2500],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: true,
    sampleBasePrice: 49,
    badge: 'Eco-Friendly',
    recommendedUse: 'Organic cafes, craft breweries, eco-fashion brands, handmade artisan goods.',
    relatedProductIds: ['business-cards', 'hang-tags', 'pearl-cards']
  },
  {
    id: 'pearl-cards',
    name: 'Pearl Cards',
    category: 'Majestic Products',
    categorySlug: 'majestic',
    tagline: 'Luminous Pearlescent Shimmer Paper with Subtle Sparkle',
    shortDescription: 'Embedded pearl fibers give these 14pt cards an elegant champagne metallic shimmer.',
    fullDescription: 'Add a touch of fairy-tale elegance. Embedded with microscopic reflective pearl mica fibers, Pearl Cards glow with a subtle metallic shimmer as they catch room light.',
    features: ['14pt pearlescent paper embedded with shimmering fibers', 'Warm champagne metallic luster', 'Uncoated tactile surface that works with calligraphy inks'],
    mockupType: 'business-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '2x3.5', name: '2" x 3.5" Business Card', priceModifier: 0 },
      { id: '5x7', name: '5" x 7" Invitation Card', priceModifier: 25 }
    ],
    paperStocks: [
      { id: '14pt-pearl-metallic', name: '14pt Luminous Pearl Metallic Stock', priceModifier: 0 }
    ],
    coatings: [
      { id: 'natural-pearl', name: 'Pearlescent Luster Surface', priceModifier: 0 }
    ],
    quantities: [250, 500, 1000, 2500],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: true,
    sampleBasePrice: 58,
    badge: 'Pearlescent Glow',
    recommendedUse: 'Wedding invitations, boutique bridal shops, luxury cosmetics, perfume marketing.',
    relatedProductIds: ['greeting-cards', 'silk-cards', 'akuafoil-cards']
  },
  {
    id: 'silk-cards',
    name: 'Silk Cards',
    category: 'Majestic Products',
    categorySlug: 'majestic',
    tagline: 'Silky Smooth Matte Lamination with Tear & Water Resistance',
    shortDescription: '16pt cards coated in a sleek matte silk laminate that feels cool and smooth to the touch.',
    fullDescription: 'Sophistication you can feel. Silk cards are laminated on both sides with a microscopic matte polypropylene film, rendering them water-resistant, tear-resistant, and extraordinarily smooth.',
    features: ['Tear and moisture resistant matte silk lamination', 'Optional raised Spot UV gloss accent', 'Premium 16pt finished thickness'],
    mockupType: 'business-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '2x3.5', name: '2" x 3.5" Standard Business Card', priceModifier: 0 },
      { id: '2.5x2.5', name: '2.5" x 2.5" Modern Square Card', priceModifier: 6 }
    ],
    paperStocks: [
      { id: '16pt-silk', name: '16pt Silk Laminated Cardstock', priceModifier: 0 }
    ],
    coatings: [
      { id: 'silk-matte', name: 'Silk Matte Finish Both Sides', priceModifier: 0 },
      { id: 'silk-spot-uv', name: 'Silk Matte + Raised Spot UV Gloss', priceModifier: 22 }
    ],
    quantities: [250, 500, 1000, 2500],
    standardTurnaround: '4-6 Business Days',
    rushAvailable: false,
    sampleBasePrice: 62,
    badge: 'Silk Smooth',
    recommendedUse: 'Medical professionals, financial advisors, interior designers, executive hospitality.',
    relatedProductIds: ['suede-cards', 'edge-cards', 'foil-worx']
  },
  {
    id: 'suede-cards',
    name: 'Suede Cards',
    category: 'Majestic Products',
    categorySlug: 'majestic',
    tagline: 'Ultra Soft-Touch Velvet Lamination on Substantial 19pt Stock',
    shortDescription: 'Cards that feel like soft velvet suede fabric in hand, with optional raised gold or holographic foil.',
    fullDescription: 'The ultimate tactile statement. Suede Cards are treated with an exquisite velvet soft-touch laminate that feels identical to fine suede leather or peach skin. Heavy 19pt finished thickness commands attention.',
    features: ['19pt heavy velvet soft-touch stock', 'Luxurious suede feel that customers cannot stop touching', 'Optional raised foil (Gold, Silver, Holographic) or raised Spot UV'],
    mockupType: 'business-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '2x3.5', name: '2" x 3.5" Standard Business Card', priceModifier: 0 },
      { id: '2x2', name: '2" x 2" Square Card', priceModifier: 5 }
    ],
    paperStocks: [
      { id: '19pt-suede-stock', name: '19pt Velvet Suede Heavy Cardstock', priceModifier: 0 }
    ],
    coatings: [
      { id: 'soft-touch-velvet', name: 'Velvet Soft-Touch Lamination', priceModifier: 0 },
      { id: 'suede-raised-gold-foil', name: 'Suede + Raised Gold Foil', priceModifier: 35 },
      { id: 'suede-raised-spot-uv', name: 'Suede + Raised Gloss Spot UV', priceModifier: 28 }
    ],
    quantities: [250, 500, 1000, 2500],
    standardTurnaround: '5-7 Business Days',
    rushAvailable: false,
    sampleBasePrice: 78,
    badge: 'Velvet Soft Touch',
    recommendedUse: 'Luxury automotive reps, celebrity stylists, plastic surgeons, fine dining sommeliers.',
    relatedProductIds: ['silk-cards', 'edge-cards', 'foil-worx']
  },

  // ----------------------------------------------------
  // PACKAGING PRODUCTS (14 items)
  // ----------------------------------------------------
  {
    id: 'business-card-boxes',
    name: 'Business Card Boxes',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: 'Custom Branded Packaging Boxes for 250 Business Cards',
    shortDescription: 'Sturdy tuck-top cartons designed to securely hold and display standard business cards.',
    fullDescription: 'Present business cards with executive prestige. Custom-printed boxes hold 250 business cards snugly, protecting them from damage while reinforcing your brand.',
    features: ['Fits 250 standard 2" x 3.5" business cards', 'Sturdy 16pt or 18pt C1S folding carton board', 'Auto-locking bottom or tuck flap for quick assembly'],
    mockupType: 'box-package',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: 'box-250-cards', name: 'Holds 250 Cards (3.625" x 2.125" x 2.5")', priceModifier: 0 }
    ],
    paperStocks: [
      { id: '18pt-c1s-boxboard', name: '18pt SBS Premium Paperboard', priceModifier: 0 }
    ],
    coatings: [
      { id: 'matte-lam', name: 'Matte Lamination', priceModifier: 0 },
      { id: 'gloss-uv', name: 'Gloss UV Coating', priceModifier: 0 }
    ],
    quantities: [100, 250, 500, 1000, 2500],
    standardTurnaround: '5-8 Business Days',
    rushAvailable: false,
    sampleBasePrice: 145,
    recommendedUse: 'Corporate stationery bundles, print brokers, luxury marketing gifts.',
    relatedProductIds: ['business-cards', 'cube-boxes', 'custom-boxes']
  },
  {
    id: 'cube-boxes',
    name: 'Cube Boxes',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: 'Versatile Square Folding Gift & Product Cartons',
    shortDescription: 'Equal-dimension folding boxes for candles, mugs, cosmetics, and jewelry.',
    fullDescription: 'A classic packaging favorite. Custom printed cube boxes fold flat for shipping and pop into rigid three-dimensional cubes with secure tuck flaps.',
    features: ['Full-color edge-to-edge exterior printing', 'Easy pop-and-lock bottom with top tuck closure', 'Food-safe and cosmetic-safe paperboard options'],
    mockupType: 'box-package',
    supportsFrontAndBack: false,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '3x3x3', name: '3" x 3" x 3" Small Cube', priceModifier: 0 },
      { id: '4x4x4', name: '4" x 4" x 4" Medium Cube (Mugs & Candles)', priceModifier: 20 },
      { id: '5x5x5', name: '5" x 5" x 5" Large Cube', priceModifier: 40 }
    ],
    paperStocks: [
      { id: '18pt-sbs', name: '18pt White SBS Folding Boxboard', priceModifier: 0 },
      { id: '24pt-heavy-sbs', name: '24pt Heavy Duty Boxboard', priceModifier: 25 }
    ],
    coatings: [
      { id: 'matte-soft', name: 'Matte Anti-Scuff Finish', priceModifier: 0 },
      { id: 'gloss-protective', name: 'High-Gloss Aqueous Coating', priceModifier: 0 }
    ],
    quantities: [100, 250, 500, 1000, 2500],
    standardTurnaround: '6-9 Business Days',
    rushAvailable: false,
    sampleBasePrice: 175,
    recommendedUse: 'Artisan candles, coffee mugs, skincare serums, tech accessories.',
    relatedProductIds: ['custom-boxes', 'pillow-boxes', 'hang-tags']
  },
  {
    id: 'bottle-neck-hang-tags',
    name: 'Bottle-Neck Hang Tags',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: 'Die-Cut Collar Tags for Wine, Spirits, Oils & Sauces',
    shortDescription: 'Collar tags with pre-cut neck holes that slide effortlessly over beverage bottles.',
    fullDescription: 'Promote vintage details, awards, discount neck hangers, and cocktail recipes right on the bottle neck in grocery stores and tasting rooms.',
    features: ['Pre-cut 1.25" round bottle neck hole with radial slits', 'Folded collar or flat hanging card style', '16pt heavy cardstock holds shape on glass bottles'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '2.25x5.25', name: '2.25" x 5.25" Standard Bottle Tag', priceModifier: 0 },
      { id: '2.5x6', name: '2.5" x 6" Folded Collar Tag', priceModifier: 8 }
    ],
    paperStocks: [
      { id: '16pt-matte', name: '16pt Heavy Cardstock', priceModifier: 0 },
      { id: '100lb-linen', name: '100lb Textured Linen Cover', priceModifier: 12 }
    ],
    coatings: [
      { id: 'uv-front', name: 'Gloss UV Front / Uncoated Back', priceModifier: 0 }
    ],
    quantities: [250, 500, 1000, 2500],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: true,
    sampleBasePrice: 65,
    recommendedUse: 'Wineries, craft distilleries, hot sauce brands, olive oil producers.',
    relatedProductIds: ['wine-boxes', 'hang-tags', 'labels-and-stickers']
  },
  {
    id: 'counter-cards',
    name: 'Counter Cards',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: 'Mounted Cardstock Displays with Fold-Out Cardboard Easel Back',
    shortDescription: 'Point-of-purchase tabletop signs with double-wing easel backs ready to display.',
    fullDescription: 'Put your promotional message right by the checkout register. Counter cards are mounted to heavy foam board or rigid cardstock with a pre-glued collapsible easel back.',
    features: ['Sturdy fold-out cardboard easel back pre-attached', 'Mounted onto rigid 1/8" foamcore or 24pt board', 'High-gloss or non-glare matte laminated face'],
    mockupType: 'greeting-card',
    supportsFrontAndBack: false,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '5.5x8.5', name: '5.5" x 8.5" Compact Countertop Sign', priceModifier: 0 },
      { id: '8.5x11', name: '8.5" x 11" Standard Counter Card', priceModifier: 12, badge: 'Popular' },
      { id: '11x14', name: '11" x 14" Large Retail Counter Display', priceModifier: 24 }
    ],
    paperStocks: [
      { id: 'foam-board-mount', name: 'Rigid White Foamcore Board', priceModifier: 0 }
    ],
    coatings: [
      { id: 'gloss-lam', name: 'High-Gloss Protective Laminate', priceModifier: 0 },
      { id: 'matte-lam', name: 'Matte Anti-Glare Laminate', priceModifier: 0 }
    ],
    quantities: [5, 10, 25, 50, 100],
    standardTurnaround: '2-4 Business Days',
    rushAvailable: true,
    sampleBasePrice: 48,
    recommendedUse: 'Cashier checkout counters, hotel concierge desks, trade show tables, salon menus.',
    relatedProductIds: ['table-tents', 'rack-cards', 'sell-sheets']
  },
  {
    id: 'custom-boxes',
    name: 'Custom Boxes',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: 'Tailored Folding Cartons & Mailer Boxes in Any Dimension',
    shortDescription: 'Engineered custom product packaging with full-bleed inside and outside printing.',
    fullDescription: 'Custom dimensions engineered specifically for your product bottles, jars, or electronics. Available in corrugated mailer style or lightweight folding carton board.',
    features: ['Custom dieline engineering available', 'Inside and outside full color printing', 'Food-safe and cosmetic certified coatings'],
    mockupType: 'box-package',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: 'custom-small', name: 'Small Custom Mailer (~6" x 4" x 2")', priceModifier: 0 },
      { id: 'custom-medium', name: 'Medium Custom Mailer (~9" x 6" x 3")', priceModifier: 35 },
      { id: 'custom-large', name: 'Large Custom Mailer (~12" x 9" x 4")', priceModifier: 75 }
    ],
    paperStocks: [
      { id: 'e-flute-corrugated', name: 'E-Flute Sturdy Corrugated Cardboard', priceModifier: 0 },
      { id: '24pt-sbs-boxboard', name: '24pt Thick SBS Folding Paperboard', priceModifier: -10 }
    ],
    coatings: [
      { id: 'matte-soft-touch', name: 'Velvet Soft-Touch Finish', priceModifier: 25 },
      { id: 'gloss-scuff-resistant', name: 'Scuff-Resistant Gloss Overcoat', priceModifier: 0 }
    ],
    quantities: [50, 100, 250, 500, 1000],
    standardTurnaround: '7-10 Business Days',
    rushAvailable: false,
    sampleBasePrice: 220,
    recommendedUse: 'E-commerce subscription boxes, PR influencer kits, retail electronics packaging.',
    relatedProductIds: ['cube-boxes', 'roll-end-tuck-top-boxes', 'sales-presentation-boxes']
  },
  {
    id: 'golf-ball-boxes',
    name: 'Golf-Ball Boxes',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: 'Custom Sleeves & 3-Ball Golf Packaging Cartons',
    shortDescription: 'Tuck boxes engineered precisely to hold a standard 3-ball golf sleeve.',
    fullDescription: 'The quintessential corporate outing giveaway. Fits 3 regulation golf balls with auto-locking ends and full-color branding on all 4 panels.',
    features: ['Precision engineered to fit 3 standard regulation golf balls', '18pt coated SBS cardstock with moisture resistance', 'Ideal for tournament sponsorships and corporate gifts'],
    mockupType: 'box-package',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '3-ball-sleeve', name: '3-Ball Sleeve (1.68" x 1.68" x 5.04")', priceModifier: 0 }
    ],
    paperStocks: [
      { id: '18pt-sbs', name: '18pt SBS Coated Board', priceModifier: 0 }
    ],
    coatings: [
      { id: 'gloss-uv', name: 'Gloss UV Luster Coating', priceModifier: 0 }
    ],
    quantities: [100, 250, 500, 1000, 2500],
    standardTurnaround: '5-7 Business Days',
    rushAvailable: false,
    sampleBasePrice: 125,
    recommendedUse: 'Charity golf tournaments, corporate client gifts, country clubs, athletic swag.',
    relatedProductIds: ['custom-boxes', 'cube-boxes', 'hang-tags']
  },
  {
    id: 'hang-tags',
    name: 'Hang Tags',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: 'Apparel & Product Tags with Precision Hole Drilling',
    shortDescription: 'Apparel swing tags with pre-drilled 1/8" hole for string, twine, or plastic fasteners.',
    fullDescription: 'Essential for boutique retail clothing, specialty foods, and handcrafted merchandise. High-resolution printing on heavy cover stock with clean hole drilling.',
    features: ['Pre-drilled 1/8" or 3/16" hole included', 'Optional stringing / cotton twine attached', 'Vibrant front and back full-color printing'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '2x3.5', name: '2" x 3.5" Standard Clothing Tag', priceModifier: 0 },
      { id: '2x2', name: '2" x 2" Square Tag', priceModifier: -4 },
      { id: '2.5x4', name: '2.5" x 4" Jumbo Apparel Tag', priceModifier: 8 }
    ],
    paperStocks: [
      { id: '16pt-matte', name: '16pt Silky Matte Cardstock', priceModifier: 0 },
      { id: '18pt-kraft', name: '18pt Natural Organic Brown Kraft', priceModifier: 6 },
      { id: '32pt-edge-tag', name: '32pt Ultra-Thick Triple Layer Tag', priceModifier: 28 }
    ],
    coatings: [
      { id: 'matte-finish', name: 'Matte Dull Finish Both Sides', priceModifier: 0 },
      { id: 'spot-uv', name: 'Matte + Spot UV Gloss on Brand Logo', priceModifier: 18 }
    ],
    quantities: [100, 250, 500, 1000, 2500, 5000],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: true,
    sampleBasePrice: 45,
    recommendedUse: 'Clothing lines, handmade jewelry, artisan candles, gourmet food jars.',
    relatedProductIds: ['header-cards', 'bottle-neck-hang-tags', 'embroidery-clothing']
  },
  {
    id: 'header-cards',
    name: 'Header Cards',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: 'Folded Bag Topper Cards with Sombrero Hang Hole',
    shortDescription: 'Pre-scored foldover cards designed to staple across clear poly bags for retail pegboard displays.',
    fullDescription: 'Turn loose parts, candies, or hardware into pegboard-ready retail merchandise. Header cards fold neatly over clear bags with a pre-punched sombrero or round peg hook hole.',
    features: ['Precision center score for clean foldover', 'Die-cut sombrero pegboard hang hole included', 'Ultra-stiff 14pt or 16pt card stock holds bag weight securely'],
    mockupType: 'greeting-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '4x4-folds-4x2', name: '4" x 4" (Folds to 4" x 2")', priceModifier: 0 },
      { id: '5x5-folds-5x2.5', name: '5" x 5" (Folds to 5" x 2.5")', priceModifier: 8 },
      { id: '6x5-folds-6x2.5', name: '6" x 5" (Folds to 6" x 2.5")', priceModifier: 14 }
    ],
    paperStocks: [
      { id: '14pt-gloss', name: '14pt Heavy Gloss Cover', priceModifier: 0 },
      { id: '16pt-matte', name: '16pt Premium Matte Cardstock', priceModifier: 6 }
    ],
    coatings: [
      { id: 'uv-outside', name: 'Gloss UV Outside', priceModifier: 0 },
      { id: 'matte-both', name: 'Matte Dull Both Sides', priceModifier: 4 }
    ],
    quantities: [250, 500, 1000, 2500],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: true,
    sampleBasePrice: 58,
    recommendedUse: 'Candy packaging, craft supplies, hardware fasteners, automotive spare parts.',
    relatedProductIds: ['hang-tags', 'labels-and-stickers', 'counter-cards']
  },
  {
    id: 'pillow-boxes',
    name: 'Pillow Boxes',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: 'Curved Pillow-Shaped Cartons for Gift Cards & Jewelry',
    shortDescription: 'Unique curved packaging with interlocking end flaps that pop open in seconds.',
    fullDescription: 'Add charm and delight to small gifts. Pillow boxes feature curved creased end flaps that fold inward effortlessly, creating an eye-catching rounded pillow silhouette.',
    features: ['Unique curved pillow silhouette stands out on shelves', 'No tape or glue needed for assembly', 'Printed on durable 16pt SBS board'],
    mockupType: 'box-package',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: 'small-pillow', name: 'Small (3.5" x 2.5" x 1")', priceModifier: 0 },
      { id: 'medium-pillow', name: 'Medium (5" x 3.5" x 1.25")', priceModifier: 15 },
      { id: 'large-pillow', name: 'Large (7" x 4.5" x 1.75")', priceModifier: 30 }
    ],
    paperStocks: [
      { id: '16pt-sbs', name: '16pt SBS Folding Boxboard', priceModifier: 0 }
    ],
    coatings: [
      { id: 'matte-scuff', name: 'Satin Matte Coating', priceModifier: 0 },
      { id: 'gloss-aqueous', name: 'Gloss Aqueous Coating', priceModifier: 0 }
    ],
    quantities: [100, 250, 500, 1000, 2500],
    standardTurnaround: '5-7 Business Days',
    rushAvailable: false,
    sampleBasePrice: 135,
    recommendedUse: 'Jewelry boutiques, gift cards, luxury soaps, wedding favor containers.',
    relatedProductIds: ['cube-boxes', 'custom-boxes', 'hang-tags']
  },
  {
    id: 'print-and-trim-boxes',
    name: 'Print-and-Trim Boxes',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: 'Rapid Short-Run Custom Die-Cut Packaging',
    shortDescription: 'Digital short-run packaging with custom digital CAD cutting without expensive die tooling fees.',
    fullDescription: 'Need 50 or 100 custom boxes without paying thousands in tooling dies? Our print-and-trim technology utilizes high-speed digital CAD cutting tables to produce short runs with zero die setup costs.',
    features: ['Zero tooling die fees for short runs', 'Turnaround in days rather than weeks', 'Ideal for prototype testing and short seasonal editions'],
    mockupType: 'box-package',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: 'cad-custom-small', name: 'Short-Run Small Format (< 8" Flat)', priceModifier: 0 },
      { id: 'cad-custom-medium', name: 'Short-Run Medium Format (< 14" Flat)', priceModifier: 40 },
      { id: 'cad-custom-large', name: 'Short-Run Large Format (< 20" Flat)', priceModifier: 80 }
    ],
    paperStocks: [
      { id: '18pt-sbs-digital', name: '18pt SBS Digital Grade Boxboard', priceModifier: 0 }
    ],
    coatings: [
      { id: 'matte-digital', name: 'Matte Finish', priceModifier: 0 },
      { id: 'gloss-digital', name: 'High-Gloss Lamination', priceModifier: 15 }
    ],
    quantities: [25, 50, 100, 250, 500],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: true,
    sampleBasePrice: 165,
    recommendedUse: 'Packaging prototypes, market test batches, limited seasonal runs, Kickstarter rewards.',
    relatedProductIds: ['custom-boxes', 'roll-end-tuck-top-boxes', 'cube-boxes']
  },
  {
    id: 'roll-end-tuck-top-boxes',
    name: 'Roll-End Tuck-Top Boxes',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: 'Classic E-Commerce Subscription & Mailer Boxes (RETTB)',
    shortDescription: 'Self-locking roll-end corrugated boxes engineered for shipping transit durability.',
    fullDescription: 'The gold standard for subscription commerce and unboxing experiences. Double-walled side construction provides superior crush resistance during UPS/FedEx transit.',
    features: ['Double-wall side strength resists crushing in shipping', 'Front locking tabs provide a satisfying unboxing click', 'Printed inside, outside, or full interior/exterior full color'],
    mockupType: 'box-package',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '7x5x2', name: '7" x 5" x 2" Compact Mailer', priceModifier: 0 },
      { id: '9x6x3', name: '9" x 6" x 3" Standard Subscription Box', priceModifier: 30, badge: 'Popular' },
      { id: '11x8.5x4', name: '11" x 8.5" x 4" Large Apparel Box', priceModifier: 60 }
    ],
    paperStocks: [
      { id: 'white-e-flute', name: 'White Outer / Kraft Inner E-Flute Corrugated', priceModifier: 0 },
      { id: 'kraft-e-flute', name: 'All-Natural Eco Kraft Corrugated', priceModifier: -10 },
      { id: 'premium-white-both', name: 'Premium Double White E-Flute (Inside & Out)', priceModifier: 25 }
    ],
    coatings: [
      { id: 'matte-scuff', name: 'Matte Scuff-Resistant Finish', priceModifier: 0 },
      { id: 'gloss-aqueous', name: 'Gloss Aqueous Finish', priceModifier: 0 }
    ],
    quantities: [50, 100, 250, 500, 1000],
    standardTurnaround: '6-9 Business Days',
    rushAvailable: false,
    sampleBasePrice: 195,
    recommendedUse: 'Subscription boxes, retail e-commerce, promotional PR mailers, corporate gift kits.',
    relatedProductIds: ['custom-boxes', 'sales-presentation-boxes', 'cube-boxes']
  },
  {
    id: 'rack-cards',
    name: 'Rack Cards',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: '4" x 9" Displays for Tourism, Hotels & Visitor Centers',
    shortDescription: 'Standard 4" x 9" heavyweight cards designed to stand in tourism brochure racks.',
    fullDescription: 'Stand out in high-traffic hotel lobbies, visitors bureaus, and airport terminals. Printed on heavy 16pt card stock that stays upright in standard multi-tier display racks without flopping.',
    features: ['Standard 4" x 9" rack dimensions fit all tourism displays', '16pt heavy cardstock will not wilt or bend in holders', 'Full-color front and back with high-gloss UV or matte'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '4x9', name: '4" x 9" Standard Tourism Rack Size', priceModifier: 0 },
      { id: '3.5x8.5', name: '3.5" x 8.5" Slim Rack Card', priceModifier: -4 }
    ],
    paperStocks: [
      { id: '16pt-cardstock', name: '16pt Heavy Cardstock', priceModifier: 0 },
      { id: '14pt-gloss', name: '14pt Gloss Cardstock', priceModifier: -6 }
    ],
    coatings: [
      { id: 'uv-both', name: 'High-Gloss UV Both Sides', priceModifier: 0 },
      { id: 'matte-both', name: 'Matte Finish Both Sides', priceModifier: 4 }
    ],
    quantities: [250, 500, 1000, 2500, 5000],
    standardTurnaround: '2-4 Business Days',
    rushAvailable: true,
    sampleBasePrice: 48,
    recommendedUse: 'Museums, theme parks, Houston city tours, medical spas, restaurant menus.',
    relatedProductIds: ['postcards', 'flyers-and-brochures', 'door-hangers']
  },
  {
    id: 'sales-presentation-boxes',
    name: 'Sales Presentation Boxes',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: 'Magnetic Closure Rigid Luxury Presentation Cartons',
    shortDescription: 'High-end rigid boxes with magnetic flap closure and custom die-cut foam inserts.',
    fullDescription: 'Deliver VIP sales tenders with unforgettable weight and luxury. Rigid greyboard wrapped in soft-touch printed paper with hidden magnetic closure clasps.',
    features: ['Concealed neodymium magnetic snap closures', 'Heavy 1200gsm rigid bookbinder greyboard base', 'Optional custom high-density foam product cutout inserts'],
    mockupType: 'box-package',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: 'presentation-letter', name: 'Letter Document Box (12" x 9.5" x 2")', priceModifier: 0 },
      { id: 'presentation-large', name: 'Grand VIP Presentation Box (14" x 11" x 3")', priceModifier: 60 }
    ],
    paperStocks: [
      { id: '1200gsm-rigid-board', name: '1200gsm Premium Rigid Box Board', priceModifier: 0 }
    ],
    coatings: [
      { id: 'velvet-soft-touch', name: 'Velvet Soft Touch Laminate', priceModifier: 0 },
      { id: 'foil-stamp-cover', name: 'Soft Touch + Metallic Gold Foil Logo', priceModifier: 35 }
    ],
    quantities: [25, 50, 100, 250, 500],
    standardTurnaround: '8-12 Business Days',
    rushAvailable: false,
    sampleBasePrice: 280,
    badge: 'Luxury Rigid',
    recommendedUse: 'High-value real estate development tenders, luxury automotive handovers, VIP investor kits.',
    relatedProductIds: ['presentation-folders', 'custom-boxes', 'wine-boxes']
  },
  {
    id: 'wine-boxes',
    name: 'Wine Boxes',
    category: 'Packaging Products',
    categorySlug: 'packaging',
    tagline: 'Custom Single & Double Bottle Folding Wine Cartons',
    shortDescription: 'Reinforced cartons engineered to securely cradle and present 750ml wine bottles.',
    fullDescription: 'Dress up fine vintages for holiday gifting, corporate thank yous, and retail display. Engineered with auto-lock crash bottom to hold bottle weight with supreme confidence.',
    features: ['Fits standard 750ml Bordeaux and Burgundy bottles', 'Crash-lock reinforced bottom supports bottle weight securely', 'Optional die-cut bottle label viewing window'],
    mockupType: 'box-package',
    supportsFrontAndBack: false,
    defaultOrientation: 'vertical',
    sizes: [
      { id: 'single-wine-box', name: 'Single 750ml Bottle (3.25" x 3.25" x 13")', priceModifier: 0 },
      { id: 'double-wine-box', name: 'Double Bottle Carrier (6.5" x 3.25" x 13")', priceModifier: 35 }
    ],
    paperStocks: [
      { id: '24pt-sbs-heavy', name: '24pt Heavy Duty Coated SBS Board', priceModifier: 0 },
      { id: 'e-flute-corrugated', name: 'E-Flute Corrugated with White Liner', priceModifier: 15 }
    ],
    coatings: [
      { id: 'matte-foil', name: 'Matte Lamination with Metallic Foil Accent', priceModifier: 20 },
      { id: 'gloss-aqueous', name: 'High-Gloss Aqueous Coating', priceModifier: 0 }
    ],
    quantities: [50, 100, 250, 500, 1000],
    standardTurnaround: '6-9 Business Days',
    rushAvailable: false,
    sampleBasePrice: 185,
    recommendedUse: 'Wineries, tasting rooms, corporate holiday gifting, luxury auctions.',
    relatedProductIds: ['bottle-neck-hang-tags', 'custom-boxes', 'sales-presentation-boxes']
  },

  // ----------------------------------------------------
  // OTHER PRODUCTS AND SERVICES (12 items)
  // ----------------------------------------------------
  {
    id: 'bw-color-copies',
    name: 'BW / Color Copies',
    category: 'Other Products and Services',
    categorySlug: 'other-services',
    tagline: 'High-Speed Commercial Digital Copying & Document Binding',
    shortDescription: 'Same-day document duplication, training manuals, legal briefs, and presentation sets.',
    fullDescription: 'Fast, crisp digital duplication for legal briefs, training manuals, architectural specifications, and office documents. Fast turnaround for Houston walk-ins and pickup.',
    features: ['Up to 120 pages-per-minute digital presses', 'Collation, staple binding, spiral/coil binding options', 'Same-day rush turnaround available'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '8.5x11', name: '8.5" x 11" Standard Letter', priceModifier: 0 },
      { id: '8.5x14', name: '8.5" x 14" Legal Size', priceModifier: 5 },
      { id: '11x17', name: '11" x 17" Tabloid / Ledger', priceModifier: 12 }
    ],
    paperStocks: [
      { id: '20lb-bond', name: '20lb Standard White Bond', priceModifier: 0 },
      { id: '28lb-laser-smooth', name: '28lb Bright White Premium Laser', priceModifier: 4 },
      { id: '80lb-gloss-text', name: '80lb Gloss Text Paper', priceModifier: 8 }
    ],
    coatings: [
      { id: 'uncoated', name: 'Standard Uncoated Copy Paper', priceModifier: 0 }
    ],
    quantities: [50, 100, 250, 500, 1000, 2500, 5000],
    standardTurnaround: 'Same-Day / 24 Hours',
    rushAvailable: true,
    sampleBasePrice: 18,
    badge: 'Same-Day Pickup',
    recommendedUse: 'Legal exhibits, church bulletins, corporate training manuals, conference syllabi.',
    relatedProductIds: ['lamination', 'flyers-and-brochures', 'ncr-forms']
  },
  {
    id: 'lamination',
    name: 'Lamination',
    category: 'Other Products and Services',
    categorySlug: 'other-services',
    tagline: 'Hot Roll & Pouch Encapsulation from 3mil to 10mil Thick',
    shortDescription: 'Durable waterproof sealing for restaurant menus, badges, maps, and reference charts.',
    fullDescription: 'Shield documents against spills, tears, grease, and moisture. We provide commercial edge-sealed thermal lamination from flexible 3mil up to rigid credit-card like 10mil.',
    features: ['3mil, 5mil, or 10mil heavy sealed encapsulation', 'Gloss clean-wipe or matte non-glare films', 'Sealed waterproof border edges'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '8.5x11', name: '8.5" x 11" Letter Encapsulation', priceModifier: 0 },
      { id: '8.5x14', name: '8.5" x 14" Legal Encapsulation', priceModifier: 3 },
      { id: '11x17', name: '11" x 17" Tabloid Menu Encapsulation', priceModifier: 8 }
    ],
    paperStocks: [
      { id: '100lb-cover-laminated', name: '100lb Cover Base Paper', priceModifier: 0 }
    ],
    coatings: [
      { id: '5mil-gloss-lam', name: '5mil Heavy Gloss Thermal Film', priceModifier: 0 },
      { id: '10mil-ultra-rigid', name: '10mil Credit-Card Rigid Thermal Film', priceModifier: 12 },
      { id: 'matte-wipe-lam', name: 'Matte Easy-Clean Film', priceModifier: 6 }
    ],
    quantities: [10, 25, 50, 100, 250],
    standardTurnaround: '1-2 Business Days',
    rushAvailable: true,
    sampleBasePrice: 28,
    recommendedUse: 'Bar menus, safety checklist cards, factory machine instructions, outdoor field guides.',
    relatedProductIds: ['bw-color-copies', 'flyers-and-brochures', 'posters']
  },
  {
    id: 'promotional-products',
    name: 'Promotional Products',
    category: 'Other Products and Services',
    categorySlug: 'other-services',
    tagline: 'Custom Swag, Laser Engraved Drinkware, Pens & Tech Gifts',
    shortDescription: 'Branded merchandise and tradeshow giveaways customized with your company logo.',
    fullDescription: 'Keep your brand in hand every single day. From insulated stainless steel tumblers and soft-touch metal pens to wireless chargers and tote bags, we curate high-quality branded swag.',
    features: ['Thousands of customizable swag items available', 'Laser engraving, pad printing, and full-color direct UV printing', 'Sample proofs provided prior to full production'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: 'pens-bundle', name: 'Executive Soft-Touch Metal Pens', priceModifier: 0 },
      { id: 'tumblers-bundle', name: '20oz Insulated Stainless Steel Tumbler', priceModifier: 80 },
      { id: 'totes-bundle', name: 'Heavy Cotton Canvas Shopper Totes', priceModifier: 40 }
    ],
    paperStocks: [
      { id: 'swag-standard', name: 'Grade-A Commercial Promotional Substrates', priceModifier: 0 }
    ],
    coatings: [
      { id: 'screen-pad', name: 'Laser Engraved / UV Printed', priceModifier: 0 }
    ],
    quantities: [50, 100, 250, 500, 1000],
    standardTurnaround: '5-8 Business Days',
    rushAvailable: true,
    sampleBasePrice: 120,
    recommendedUse: 'Conference swag bags, employee onboarding gifts, corporate golf tournament giveaways.',
    relatedProductIds: ['embroidery-clothing', 'screen-printing', 'business-cards']
  },
  {
    id: 'website-design',
    name: 'Website Design',
    category: 'Other Products and Services',
    categorySlug: 'other-services',
    tagline: 'Modern Responsive Web Design & E-Commerce for Small Businesses',
    shortDescription: 'Custom, mobile-optimized business websites that convert visitors into paying clients.',
    fullDescription: 'Bridge your print identity with a high-performing digital presence. Our Houston creative team designs fast, responsive, SEO-ready websites tailored for local businesses and service providers.',
    features: ['Mobile-first responsive architecture', 'Local Houston SEO optimization built-in', 'Integrated contact quote forms and click-to-call'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: 'starter-web', name: '5-Page Essential Business Site', priceModifier: 0 },
      { id: 'growth-web', name: '10-Page Growth Site with Blog & Portfolio', priceModifier: 500 },
      { id: 'ecommerce-web', name: 'E-Commerce Online Store Setup', priceModifier: 1200 }
    ],
    paperStocks: [
      { id: 'digital-platform', name: 'Cloud-Hosted High Performance Stack', priceModifier: 0 }
    ],
    coatings: [
      { id: 'ssl-included', name: 'Full SSL & Security Hardened', priceModifier: 0 }
    ],
    quantities: [1],
    standardTurnaround: '2-4 Weeks',
    rushAvailable: false,
    sampleBasePrice: 850,
    recommendedUse: 'Houston contractors, medical practices, law firms, e-commerce boutiques.',
    relatedProductIds: ['corporate', 'eddm-services', 'business-cards']
  },
  {
    id: 'thermography-printing',
    name: 'Thermography Printing',
    category: 'Other Products and Services',
    categorySlug: 'other-services',
    tagline: 'Classic Raised-Ink Printing with Dimensional Gloss Luster',
    shortDescription: 'Traditional thermal powder raised printing for executive stationery and formal invitations.',
    fullDescription: 'Experience the tactile elegance of raised lettering. Thermography uses special resin powder that melts under high heat, fusing with wet ink to create raised, three-dimensional glossy text.',
    features: ['Genuine raised dimensional ink feel', 'Cost-effective alternative to expensive copperplate engraving', 'Available in black, navy, burgundy, metallic gold, and silver inks'],
    mockupType: 'business-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '2x3.5', name: '2" x 3.5" Executive Business Card', priceModifier: 0 },
      { id: '5x7', name: '5" x 7" Formal Invitation', priceModifier: 35 },
      { id: '8.5x11', name: '8.5" x 11" Corporate Letterhead', priceModifier: 50 }
    ],
    paperStocks: [
      { id: '24lb-strathmore', name: '24lb Strathmore Writing 25% Cotton', priceModifier: 0 },
      { id: '100lb-classic-crest', name: '100lb Classic Crest Heavy Cover', priceModifier: 20 }
    ],
    coatings: [
      { id: 'raised-thermal-ink', name: 'Dimensional Raised Thermal Ink', priceModifier: 0 }
    ],
    quantities: [250, 500, 1000, 2500],
    standardTurnaround: '4-6 Business Days',
    rushAvailable: false,
    sampleBasePrice: 95,
    badge: 'Raised Tactile Ink',
    recommendedUse: 'Legal counsel stationery, diplomatic invitations, executive correspondence, diplomas.',
    relatedProductIds: ['wedding-invitations', 'business-cards', 'holiday-cards']
  },
  {
    id: 'holiday-cards',
    name: 'Holiday Cards',
    category: 'Other Products and Services',
    categorySlug: 'other-services',
    tagline: 'Festive Custom Greeting Cards with Foil Accents & Printed Envelopes',
    shortDescription: 'Seasonal business and family greeting cards with custom photo layouts and envelope addressing.',
    fullDescription: 'Celebrate the season with festive style. Custom holiday greeting cards feature premium heavy card stocks, optional gold and silver foil accents, and pre-addressed recipient envelopes for effortless mailing.',
    features: ['Festive foil stamp options (Gold, Silver, Red)', 'Pre-addressed recipient and return envelopes available', 'Scored for effortless foldover'],
    mockupType: 'greeting-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '5x7-folded', name: '5" x 7" Folded (Folds from 10" x 7")', priceModifier: 0, badge: 'Favorite' },
      { id: '5x7-flat', name: '5" x 7" Flat Postcard Card', priceModifier: -8 },
      { id: '4.25x5.5-folded', name: '4.25" x 5.5" Folded Card', priceModifier: -6 }
    ],
    paperStocks: [
      { id: '16pt-matte', name: '16pt Heavy Silk Matte Cover', priceModifier: 0 },
      { id: '14pt-pearl', name: '14pt Shimmering Pearl Mica Cover', priceModifier: 15 },
      { id: '100lb-linen', name: '100lb Classic Textured Linen', priceModifier: 12 }
    ],
    coatings: [
      { id: 'gold-foil-accent', name: 'Gold Foil Stamped Holiday Accent', priceModifier: 25 },
      { id: 'matte-uncoated-inside', name: 'Matte Face / Easy-Write Inside', priceModifier: 0 }
    ],
    quantities: [50, 100, 250, 500, 1000],
    standardTurnaround: '2-4 Business Days',
    rushAvailable: true,
    sampleBasePrice: 55,
    badge: 'Seasonal Top Seller',
    recommendedUse: 'Corporate client appreciation, family holiday cards, Thanksgiving thank-you notes.',
    relatedProductIds: ['greeting-cards', 'envelopes', 'foil-worx']
  },
  {
    id: 'wedding-invitations',
    name: 'Wedding Invitations',
    category: 'Other Products and Services',
    categorySlug: 'other-services',
    tagline: 'Couture Wedding Suites: Save the Dates, RSVPs & Belly Bands',
    shortDescription: 'Bespoke bridal stationery printed on cotton, pearl, linen, or acrylic substrates.',
    fullDescription: 'Set the tone for your unforgettable day. Complete invitation suites include invitation card, RSVP response card, details enclosure, custom envelope liners, and belly bands.',
    features: ['Complete matching suite components available', 'Cotton, velvet, pearl, and vellum paper options', 'White glove proofing and digital calligraphy addressing'],
    mockupType: 'greeting-card',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: '5x7-a7-suite', name: '5" x 7" Main Invitation (A7)', priceModifier: 0 },
      { id: '5.5x8.5-large', name: '5.5" x 8.5" Grand Royal Invitation', priceModifier: 18 }
    ],
    paperStocks: [
      { id: '110lb-pearl-mica', name: '110lb Pearl Shimmer Shimmer', priceModifier: 0 },
      { id: 'cotton-letterpress', name: '100% Pure Cotton Lettra Cover', priceModifier: 35 },
      { id: '16pt-soft-velvet', name: '16pt Velvet Soft Touch Cardstock', priceModifier: 15 }
    ],
    coatings: [
      { id: 'gold-foil-stamped', name: 'Foil Stamping (Gold / Rose Gold / Silver)', priceModifier: 30 },
      { id: 'natural-letterpress', name: 'Natural Textured Finish', priceModifier: 0 }
    ],
    quantities: [50, 75, 100, 150, 200, 300],
    standardTurnaround: '5-7 Business Days',
    rushAvailable: false,
    sampleBasePrice: 120,
    badge: 'Bridal Couture',
    recommendedUse: 'Weddings, vow renewals, anniversary galas, debutante balls.',
    relatedProductIds: ['announcement-cards', 'greeting-cards', 'envelopes', 'pearl-cards']
  },
  {
    id: 'labels-and-stickers',
    name: 'Labels & Stickers',
    category: 'Other Products and Services',
    categorySlug: 'other-services',
    tagline: 'Roll Labels & Sheet Cut Vinyl Stickers in Any Custom Shape',
    shortDescription: 'Custom die-cut stickers and product roll labels for packaging, jars, and bottles.',
    fullDescription: 'Brand every jar, box, bag, or package. Available as individual die-cut handouts with easy-peel backing, or machine-dispensable roll labels for high-speed bottle and container application.',
    features: ['Custom kiss-cut or die-cut to any shape contour', 'Waterproof vinyl, clear film, or silver foil substrates', 'Supplied on rolls (3" core) or individually cut sheets'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '2x2-circle', name: '2" x 2" Circle / Square', priceModifier: 0 },
      { id: '3x3-shape', name: '3" x 3" Custom Contour Die-Cut', priceModifier: 12 },
      { id: '2x4-rectangle', name: '2" x 4" Bottle / Jar Label', priceModifier: 8 },
      { id: '4x6-large-sheet', name: '4" x 6" Product Box Label', priceModifier: 22 }
    ],
    paperStocks: [
      { id: 'white-gloss-vinyl', name: 'Durable Waterproof White Vinyl', priceModifier: 0 },
      { id: 'clear-bopp', name: 'Crystal Clear BOPP Film', priceModifier: 15 },
      { id: 'kraft-paper-label', name: 'Natural Brown Kraft Paper Label', priceModifier: 5 },
      { id: 'metallic-silver-bopp', name: 'Metallic Silver Foil BOPP', priceModifier: 20 }
    ],
    coatings: [
      { id: 'gloss-lam', name: 'Gloss Waterproof Laminate', priceModifier: 0 },
      { id: 'matte-lam', name: 'Matte Soft-Touch Laminate', priceModifier: 5 }
    ],
    quantities: [100, 250, 500, 1000, 2500, 5000],
    standardTurnaround: '2-4 Business Days',
    rushAvailable: true,
    sampleBasePrice: 38,
    badge: 'Waterproof Vinyl',
    recommendedUse: 'Coffee roasters, cosmetics, sauce bottles, merchandise packaging, laptop stickers.',
    relatedProductIds: ['bumper-stickers', 'bottle-neck-hang-tags', 'hang-tags']
  },
  {
    id: 'eddm-services',
    name: 'EDDM Services',
    category: 'Other Products and Services',
    categorySlug: 'other-services',
    tagline: 'Every Door Direct Mail: Target Every Mailbox on a Carrier Route',
    shortDescription: 'USPS EDDM compliant printing, bundling into sets of 50, and postal documentation prep.',
    fullDescription: 'Saturate entire zip codes without buying an expensive mailing list! We print USPS EDDM approved oversized postcards, bundle them in sets of 50 with facing slips, and prepare postal paper documentation.',
    features: ['100% USPS Every Door Direct Mail approved dimensions', 'Pre-bundled into exact stacks of 50 with facing slips', 'Postage as low as $0.20 per door directly through USPS'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: true,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: '6.5x9-eddm', name: '6.5" x 9" Standard EDDM Postcard', priceModifier: 0 },
      { id: '6.25x11-eddm', name: '6.25" x 11" Panoramic EDDM Mailer', priceModifier: 15 },
      { id: '8.5x11-eddm', name: '8.5" x 11" Oversized Letter EDDM', priceModifier: 25 }
    ],
    paperStocks: [
      { id: '16pt-eddm-card', name: '16pt Heavy USPS Approved Cardstock', priceModifier: 0 }
    ],
    coatings: [
      { id: 'uv-front-only', name: 'Gloss UV Front / Uncoated Writable Back', priceModifier: 0 }
    ],
    quantities: [500, 1000, 2500, 5000, 10000],
    standardTurnaround: '3-5 Business Days',
    rushAvailable: true,
    sampleBasePrice: 125,
    recommendedUse: 'Dentists, HVAC home services, restaurant grand openings, auto repair shops.',
    relatedProductIds: ['postcards', 'door-hangers', 'flyers-and-brochures']
  },
  {
    id: 'corporate',
    name: 'Corporate',
    category: 'Other Products and Services',
    categorySlug: 'other-services',
    tagline: 'Enterprise Print Management, Volume Pricing & Brand Portals',
    shortDescription: 'Custom online ordering portals, volume discounting, and brand consistency for corporations.',
    fullDescription: 'Streamline print procurement across all your branch offices. We provide dedicated account managers, custom web-to-print portals with locked brand templates, and volume contracted pricing.',
    features: ['Dedicated Houston account executive', 'Custom web-to-print portal for branch managers', 'Net-30 corporate invoicing terms available'],
    mockupType: 'flat-sheet',
    supportsFrontAndBack: false,
    defaultOrientation: 'horizontal',
    sizes: [
      { id: 'corp-starter', name: 'Multi-Location Starter Agreement', priceModifier: 0 },
      { id: 'corp-enterprise', name: 'Enterprise Fleet & Stationery Management', priceModifier: 500 }
    ],
    paperStocks: [
      { id: 'spec-matched', name: 'Brand Guide Exact Paper Stock Matching', priceModifier: 0 }
    ],
    coatings: [
      { id: 'brand-finish', name: 'Spec-Controlled Finishes', priceModifier: 0 }
    ],
    quantities: [1],
    standardTurnaround: 'Custom Schedule',
    rushAvailable: true,
    sampleBasePrice: 350,
    recommendedUse: 'Franchises, healthcare networks, corporate headquarters, law firms.',
    relatedProductIds: ['presentation-folders', 'business-cards', 'website-design']
  },
  {
    id: 'embroidery-clothing',
    name: 'Embroidery Clothing',
    category: 'Other Products and Services',
    categorySlug: 'other-services',
    tagline: 'Precision Stitching on Polos, Caps, Jackets & Work Uniforms',
    shortDescription: 'High-density computerized embroidery on Nike, Carhartt, TravisMathew, and Port Authority apparel.',
    fullDescription: 'Give your team executive credibility. Using multi-head Tajima embroidery machines with Madeira threads, your company logo is rendered in crisp, three-dimensional thread embroidery that lasts the life of the garment.',
    features: ['Up to 15 thread colors per design with no color upcharge', 'Digitizing service transforms any logo into embroidery stitch file', 'Premium apparel brands: Nike, Carhartt, OGIO, Gildan, Sport-Tek'],
    mockupType: 'apparel',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: 'left-chest', name: 'Left Chest Logo (< 4" x 4")', priceModifier: 0 },
      { id: 'cap-front', name: 'Hat / Baseball Cap Front', priceModifier: 0 },
      { id: 'jacket-back', name: 'Large Jacket Back (< 10" x 10")', priceModifier: 45 }
    ],
    paperStocks: [
      { id: 'polo-cotton', name: 'Port Authority Silk Touch Pique Polo', priceModifier: 0 },
      { id: 'dri-fit-sport', name: 'Nike Dri-FIT Moisture Wicking Polo', priceModifier: 25 },
      { id: 'structured-cap', name: 'Structured Mid-Profile Baseball Cap', priceModifier: -5 },
      { id: 'carhartt-jacket', name: 'Carhartt Heavy Canvas Work Jacket', priceModifier: 75 }
    ],
    coatings: [
      { id: 'standard-embroidery', name: 'High-Density Flat Embroidery', priceModifier: 0 },
      { id: '3d-puff-embroidery', name: '3D Puff Raised Foam Embroidery', priceModifier: 15 }
    ],
    quantities: [12, 24, 48, 72, 144, 288],
    standardTurnaround: '5-8 Business Days',
    rushAvailable: true,
    sampleBasePrice: 180,
    badge: 'Houston Corporate Apparel',
    recommendedUse: 'Service technicians, sales rep polos, corporate trade show uniforms, company hats.',
    relatedProductIds: ['screen-printing', 'promotional-products', 'hang-tags']
  },
  {
    id: 'screen-printing',
    name: 'Screen Printing',
    category: 'Other Products and Services',
    categorySlug: 'other-services',
    tagline: 'Vibrant Plastisol & Water-Based Custom T-Shirt Printing',
    shortDescription: 'High-volume custom printed tees, hoodies, and event apparel with soft-hand feel.',
    fullDescription: 'Houston’s top choice for custom branded t-shirts. Automatic M&R presses deliver ultra-soft, vibrant plastisol or breathable water-based prints that will never crack, peel, or fade in the wash.',
    features: ['Up to 8-color spot printing and CMYK simulated process', 'Ultra-soft discharge and water-based inks available', 'Brands: Bella+Canvas, Next Level, Comfort Colors, Gildan'],
    mockupType: 'apparel',
    supportsFrontAndBack: true,
    defaultOrientation: 'vertical',
    sizes: [
      { id: 'front-chest-print', name: 'Full Front Chest Print (up to 12" x 14")', priceModifier: 0 },
      { id: 'front-and-back-print', name: 'Front Chest + Full Back Print', priceModifier: 35 },
      { id: 'pocket-and-back', name: 'Left Chest Pocket + Giant Back Print', priceModifier: 30 }
    ],
    paperStocks: [
      { id: 'bella-canvas-3001', name: 'Bella+Canvas 3001 Premium Ringspun Tee', priceModifier: 0 },
      { id: 'comfort-colors-1717', name: 'Comfort Colors 1717 Vintage Wash Tee', priceModifier: 28 },
      { id: 'heavy-cotton-gildan', name: 'Gildan 5000 Heavy Cotton Value Tee', priceModifier: -15 },
      { id: 'heavy-fleece-hoodie', name: 'Independent Trading Co. Heavyweight Hoodie', priceModifier: 85 }
    ],
    coatings: [
      { id: 'soft-plastisol', name: 'Soft-Hand Plastisol Ink', priceModifier: 0 },
      { id: 'breathable-waterbase', name: 'Breathable Eco Water-Based Ink', priceModifier: 10 }
    ],
    quantities: [24, 48, 72, 144, 288, 576],
    standardTurnaround: '5-7 Business Days',
    rushAvailable: true,
    sampleBasePrice: 160,
    badge: 'Top Volume Apparel',
    recommendedUse: '5K run races, family reunions, school spirit shirts, band tour merch, employee uniforms.',
    relatedProductIds: ['embroidery-clothing', 'promotional-products', 'banners']
  }
];

// Helper functions for lookup
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getProductsByCategory(categoryName: ProductCategory): Product[] {
  return PRODUCTS.filter(p => p.category === categoryName);
}

export function getFeaturedProducts(): Product[] {
  // Return key showcase products spanning categories
  const featuredIds = [
    'greeting-cards',
    'business-cards',
    'vinyl-banners',
    'akuafoil-cards',
    'custom-boxes',
    'screen-printing',
    'yard-signs',
    'suede-cards'
  ];
  return PRODUCTS.filter(p => featuredIds.includes(p.id));
}
