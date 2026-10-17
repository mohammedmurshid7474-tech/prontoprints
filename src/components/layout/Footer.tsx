import React from 'react';
import { Printer, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { navigate, setSelectedCategoryFilter, categories, products } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Brand & Houston Facility */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-md">
                <Printer className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white">PRONTO</span>
                <span className="text-xl font-black text-orange-500">PRINTS</span>
                <p className="text-3xs font-extrabold tracking-widest text-slate-400 uppercase">
                  You Think It! We Ink It!
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Full-service commercial printing lab based in Houston, Texas. Specializing in same-day business cards, large format vinyl banners, custom folding cartons, majestic foil stamping, and apparel branding.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>8926 Clarkcrest St, Suite C, Houston, TX 77063</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="tel:7132120247" className="hover:text-white transition-colors font-semibold">
                  (713) 212-0247
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="mailto:sales@prontoprints.com" className="hover:text-white transition-colors">
                  sales@prontoprints.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Mon–Fri: 8:00 AM – 5:00 PM | Sat: 10:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 3: Product Taxonomies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {categories.map(cat => {
                const count = products.filter(p => p.category === cat.name).length;
                return (
                  <li key={cat.slug}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategoryFilter(cat.name);
                        navigate('catalogue');
                      }}
                      className="hover:text-orange-400 transition-colors text-left cursor-pointer"
                    >
                      {cat.name} ({count})
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: Popular Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Featured Showcase
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => navigate('product-detail', 'greeting-cards')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Greeting Cards (3D Preview)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('product-detail', 'business-cards')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Same-Day Business Cards
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('product-detail', 'vinyl-banners')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Heavy Vinyl Banners
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('product-detail', 'akuafoil-cards')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Akuafoil Multi-Color Cards
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('product-detail', 'custom-boxes')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Custom Packaging Cartons
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('product-detail', 'screen-printing')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Screen Printing &amp; Apparel
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Client Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Client Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => navigate('how-it-works')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('artwork-guide')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Artwork &amp; Bleed Guidelines
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('faq')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('about')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  About Pronto Prints
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('contact')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Contact &amp; Map Location
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('legal')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left"
                >
                  Terms &amp; Policies (Draft)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Houston Service Coverage */}
        <div className="pt-6 border-t border-slate-900 text-3xs text-slate-500 space-y-2">
          <p className="font-semibold text-slate-400 uppercase tracking-wider">
            Houston Metro Local Service Areas:
          </p>
          <p className="leading-relaxed">
            Houston • Sugar Land • Stafford • Missouri City • Richmond • The Woodlands • Cypress • Conroe • Spring • Kingwood • Pasadena • Rosenberg • Pearland • League City • Galveston • Katy • The Galleria • Midtown • Energy Corridor • Westchase
          </p>
        </div>

        {/* Bottom Disclaimer Banner */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span>Interactive Frontend POC • Pronto Prints Redesign Concept</span>
          </div>

          <div className="flex items-center gap-4 text-3xs">
            <span>© {new Date().getFullYear()} Pronto Prints. All rights reserved.</span>
            <span>•</span>
            <button type="button" onClick={() => navigate('legal')} className="hover:underline">
              Privacy Policy
            </button>
            <span>•</span>
            <button type="button" onClick={() => navigate('legal')} className="hover:underline">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
