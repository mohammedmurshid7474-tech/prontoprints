import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Printer, 
  ShieldCheck, 
  Clock, 
  Layers, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  Truck, 
  Star, 
  Flame, 
  SlidersHorizontal,
  ChevronDown,
  PhoneCall
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HomePage: React.FC = () => {
  const { navigate, setSelectedCategoryFilter, categories, products } = useApp();
  const featuredProducts = useMemo(() => {
    return products.slice(0, 8);
  }, [products]);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the Front & Back artwork proofing work?',
      a: 'You can upload separate front and back high-resolution artwork files (PDF, PNG, JPG). Our interactive browser mockup renders your design on realistic 3D folded greeting cards, business cards, and packaging before production begins.'
    },
    {
      q: 'Do you offer same-day printing in Houston?',
      a: 'Yes! We offer same-day rush printing for business cards, vinyl banners, yard signs, and commercial copies with pickup at our facility located at 8926 Clarkcrest St, Suite C, Houston, TX 77063.'
    },
    {
      q: 'What is bleed and safe margin?',
      a: 'Bleed is the 0.125" (1/8 inch) artwork area that extends beyond the final cut line so that your background color runs seamlessly to the edge of the paper without white borders. Keep all text and essential logos 0.125" inside the trim line.'
    },
    {
      q: 'What are Majestic Foil and Akuafoil cards?',
      a: 'Majestic cards represent our ultra-luxury tier. Akuafoil combines a sparkling silver foil base with CMYK inks for a multi-colored metallic spectrum. We also offer hot-stamped gold foil, edge-painted 32pt cards, and velvet soft-touch suede.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Subtle orange accent ambient glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-orange-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wide">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>Houston’s Premier Commercial Printing Partner</span>
              </div>

              {/* Tagline & Main Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  You Think It! <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-amber-400 to-orange-500">
                    We Ink It!
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal pt-2">
                  High-speed commercial printing, realistic 3D digital proofing, front &amp; back artwork rendering, and same-day Houston rush turnaround. Over 65 professional print products built to elevate your business.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategoryFilter('All');
                    navigate('catalogue');
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-extrabold text-sm shadow-xl shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Product Catalogue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('quote-wizard')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-extrabold text-sm border border-slate-700 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-orange-400" />
                  <span>Request a Custom Quote</span>
                </button>
              </div>

              {/* Trust Metrics Pill Bar */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Free Prepress PDF Inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>Same-Day Houston Rush</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>4.8/5 Rated (149+ Reviews)</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Interactive Mockup Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-linear-to-b from-slate-900 to-slate-950 p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-2xs font-mono text-slate-400 ml-2">Live Proof Engine</span>
                  </div>
                  <span className="text-3xs font-bold px-2 py-0.5 rounded-full bg-orange-950 text-orange-400 border border-orange-800/40">
                    Interactive POC
                  </span>
                </div>

                {/* Simulated Greeting Card / Business Card Preview */}
                <div 
                  onClick={() => navigate('product-detail', 'greeting-cards')}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/60 shadow-inner flex items-center justify-center p-6 cursor-pointer hover:border-orange-500/60 transition-all"
                >
                  {/* Subtle 3D Folded Card Silhouette */}
                  <div className="relative w-4/5 aspect-[7/5] rounded-lg bg-linear-to-tr from-slate-950 to-slate-900 border border-amber-500/30 shadow-2xl p-4 flex flex-col justify-between group-hover:scale-102 transition-transform">
                    <div className="flex justify-between items-center text-3xs text-amber-300 font-bold tracking-widest uppercase">
                      <span>PRONTO PRINTS</span>
                      <span>HOLIDAY 2026</span>
                    </div>
                    <div className="text-center my-auto">
                      <h4 className="text-lg font-serif font-bold text-white">Season’s Greetings</h4>
                      <p className="text-3xs text-amber-200 mt-1">3D Standing Fold Proof</p>
                    </div>
                    <div className="flex justify-between text-4xs text-slate-400 border-t border-white/10 pt-1.5">
                      <span>16pt Dull Cover</span>
                      <span>Click to Test Upload →</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-bold text-white group-hover:text-orange-400 flex items-center gap-1.5 transition-colors">
                        <span>Test Greeting Card Mockup</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-2xs text-slate-400">Front &amp; Back Ready</span>
                    </div>
                  </div>
                </div>

                {/* Feature highlights below visual */}
                <div className="grid grid-cols-2 gap-2 text-2xs text-slate-300">
                  <div 
                    onClick={() => navigate('product-detail', 'business-cards')}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-orange-500 cursor-pointer transition-colors"
                  >
                    <span className="font-bold text-white block">Business Cards</span>
                    <span className="text-3xs text-slate-500">3D Flip &amp; Stack Mode</span>
                  </div>
                  <div 
                    onClick={() => navigate('product-detail', 'vinyl-banners')}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-orange-500 cursor-pointer transition-colors"
                  >
                    <span className="font-bold text-white block">Vinyl Banners</span>
                    <span className="text-3xs text-slate-500">Grommets &amp; Stands</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT TAXONOMY CATEGORIES (5 EXACT GROUPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-2xs font-extrabold text-orange-600 tracking-widest uppercase">
            Product Taxonomy
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            Browse Our Complete Print Catalogue
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Organized into five core categories with over 65 commercial printing products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, idx) => {
            const count = products.filter(p => p.category === cat.name).length;
            return (
              <div
                key={cat.slug}
                onClick={() => {
                  setSelectedCategoryFilter(cat.name);
                  navigate('catalogue');
                }}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 group-hover:bg-orange-600 text-orange-600 group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                    {idx % 5 === 0 && <FileText className="w-6 h-6" />}
                    {idx % 5 === 1 && <Printer className="w-6 h-6" />}
                    {idx % 5 === 2 && <Sparkles className="w-6 h-6" />}
                    {idx % 5 === 3 && <Layers className="w-6 h-6" />}
                    {idx % 5 === 4 && <SlidersHorizontal className="w-6 h-6" />}
                  </div>

                  <div>
                    <h3 className="font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors text-sm">
                      {cat.name}
                    </h3>
                    <p className="text-3xs text-orange-600 font-bold mt-0.5">
                      {count} Products Available
                    </p>
                    <p className="text-2xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-2xs font-bold text-slate-700 group-hover:text-orange-600">
                  <span>Explore Products</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SHOWCASE */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-2xs font-extrabold text-orange-600 tracking-widest uppercase">
                Featured Highlights
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                Most Popular Commercial Prints
              </h2>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedCategoryFilter('All');
                navigate('catalogue');
              }}
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All ({products.length}) Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product: any) => (
              <div
                key={product.id}
                onClick={() => navigate('product-detail', product.id)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-500 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Mockup Preview Area */}
                  <div className="relative aspect-[4/3] bg-slate-900 p-4 flex items-center justify-center overflow-hidden">
                    <div className="w-4/5 aspect-[3/2] bg-white rounded-md shadow-md p-2 flex flex-col justify-between text-slate-900 group-hover:scale-105 transition-transform">
                      <span className="text-4xs font-bold text-orange-600 uppercase">PRONTO PRINTS</span>
                      <div className="text-center my-auto">
                        <span className="text-xs font-bold block">{product.name}</span>
                        <span className="text-4xs text-slate-500">Interactive Proof Ready</span>
                      </div>
                      <span className="text-4xs text-slate-400 text-right">Houston, TX</span>
                    </div>

                    {product.badge && (
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-orange-600 text-white text-3xs font-extrabold shadow-sm">
                        {product.badge}
                      </span>
                    )}

                    {product.supportsFrontAndBack && (
                      <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-full bg-slate-900/90 text-slate-200 border border-slate-700 text-3xs font-medium">
                        Front &amp; Back
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">
                      {product.category}
                    </span>
                    <h3 className="font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors text-base">
                      {product.name}
                    </h3>
                    <p className="text-2xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                  <div>
                    <span className="text-3xs text-slate-400 block">Sample Estimate:</span>
                    <span className="text-sm font-extrabold text-slate-900">
                      From ${product.sampleBasePrice}
                    </span>
                  </div>

                  <span className="px-3 py-1.5 rounded-lg bg-orange-50 group-hover:bg-orange-600 text-orange-600 group-hover:text-white text-xs font-bold transition-colors">
                    Configure →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOUSTON SAME-DAY RUSH ADVERTISEMENT STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-linear-to-r from-orange-600 via-orange-500 to-amber-500 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 text-white text-xs font-bold">
              <Clock className="w-3.5 h-3.5 text-white" />
              <span>Same-Day Houston Pickup Available</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              In a Hurry for Your Houston Event or Tradeshow?
            </h2>

            <p className="text-xs sm:text-sm text-orange-100 leading-relaxed font-normal">
              Whether you need 500 business cards for a luncheon at the George R. Brown Convention Center or emergency trade show banners, our local Clarkcrest Street production facility is ready for rush orders.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="tel:7132120247"
                className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-xs shadow-lg transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-orange-400" />
                <span>Call (713) 212-0247</span>
              </a>

              <button
                type="button"
                onClick={() => navigate('quote-wizard')}
                className="px-6 py-3 rounded-xl bg-white hover:bg-orange-50 text-orange-700 font-extrabold text-xs shadow-lg transition-all cursor-pointer"
              >
                Request Rush Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (4-STEP STREAMLINED JOURNEY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-2xs font-extrabold text-orange-600 tracking-widest uppercase">
            Order Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            How Pronto Prints Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            From digital proof to physical print delivery in four clear steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Select & Configure',
              desc: 'Choose your desired finished size, paper stock, quantity, and coatings with live sample pricing estimation.'
            },
            {
              step: '02',
              title: 'Upload Front & Back Artwork',
              desc: 'Drop in your PDF, PNG, or JPG files. Instantly see your design wrapped onto photorealistic 3D folded cards and banners.'
            },
            {
              step: '03',
              title: 'Request Official Quote',
              desc: 'Submit your contact details and job requirements to generate an official quote reference (e.g. PP-DEMO-1001).'
            },
            {
              step: '04',
              title: 'Fast Production & Pickup',
              desc: 'Upon approval, files are printed on high-precision offset or digital presses with Houston local pickup or nationwide shipping.'
            }
          ].map((item) => (
            <div 
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3 relative overflow-hidden"
            >
              <span className="text-4xl font-black text-slate-100 absolute top-3 right-4 select-none">
                {item.step}
              </span>
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                {item.step}
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ PREVIEW ACCORDION */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-2xs font-extrabold text-orange-600 tracking-widest uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              Commercial Printing Answers
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 text-sm flex items-center justify-between gap-4 hover:bg-slate-50 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-orange-600' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => navigate('faq')}
              className="text-xs font-bold text-orange-600 hover:underline"
            >
              View Full Printing Knowledge Base &amp; FAQ →
            </button>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-950 rounded-3xl p-8 sm:p-14 text-white text-center space-y-6 border border-slate-800 shadow-2xl">
          <span className="text-2xs font-bold text-orange-400 tracking-widest uppercase">
            Start Your Custom Printing Project
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white max-w-xl mx-auto leading-tight">
            Ready to See Your Ideas in Ink?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Configure greeting cards, business cards, banners, or boxes, upload your artwork, and submit a quote in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => navigate('quote-wizard')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-extrabold text-sm shadow-xl shadow-orange-600/30 transition-all cursor-pointer"
            >
              Request a Custom Quote
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedCategoryFilter('All');
                navigate('catalogue');
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-extrabold text-sm border border-slate-700 transition-all cursor-pointer"
            >
              Browse 65+ Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
