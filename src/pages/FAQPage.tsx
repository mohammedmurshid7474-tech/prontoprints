import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FAQPage: React.FC = () => {
  const { navigate } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndices, setOpenIndices] = useState<{ [key: number]: boolean }>({ 0: true, 1: true });

  const categories = ['All', 'Ordering & Proofs', 'Turnaround & Shipping', 'Artwork & Bleed', 'Majestic Specialty Finishes'];

  const allFaqs = [
    {
      category: 'Ordering & Proofs',
      q: 'How does the interactive front and back 3D proofing work?',
      a: 'Our browser mockup engine maps your uploaded PNG, JPG, or PDF directly to physical 3D simulations of greeting cards, business cards, boxes, and banners. You can inspect the front face, flip to the back, view a standing 3D open fold, and verify crease alignments before requesting a quote.'
    },
    {
      category: 'Ordering & Proofs',
      q: 'Will I receive a hard digital proof before printing starts?',
      a: 'Yes! Every formal quote and order undergoes our automated prepress inspection. A final PDF proof with cut and fold lines will be sent to your email for sign-off prior to press time.'
    },
    {
      category: 'Ordering & Proofs',
      q: 'Can I reorder past jobs or update artwork later?',
      a: 'Yes, your previous specifications and file references are saved in your customer demo dashboard. You can re-open any past quote reference (e.g. PP-DEMO-1001) and request a reprint.'
    },
    {
      category: 'Turnaround & Shipping',
      q: 'Do you offer same-day printing in Houston?',
      a: 'Yes, same-day rush turnaround is available for business cards, vinyl banners, foam boards, yard signs, and commercial copies. Orders submitted by 10:00 AM can be picked up at our Clarkcrest Street facility the same afternoon.'
    },
    {
      category: 'Turnaround & Shipping',
      q: 'Where is your Houston pickup facility located?',
      a: 'Our production facility is located at 8926 Clarkcrest St, Suite C, Houston, TX 77063, conveniently situated near the Westchase and Galleria districts.'
    },
    {
      category: 'Turnaround & Shipping',
      q: 'Do you ship across Texas and nationwide?',
      a: 'Yes, we provide local Texas courier delivery to Austin, Dallas, and San Antonio, as well as reliable UPS and FedEx Ground and Express shipping across the continental United States.'
    },
    {
      category: 'Artwork & Bleed',
      q: 'What is a bleed and why is it necessary?',
      a: 'A bleed is an extra 0.125" (1/8 inch) margin of artwork beyond the trim line. Industrial high-speed paper guillotines cut stacks of hundreds of sheets at once; having bleed prevents hairline white unprinted borders on edges.'
    },
    {
      category: 'Artwork & Bleed',
      q: 'What file format is best for submission?',
      a: 'High-resolution print-ready PDF (PDF/X-1a or PDF/X-4) is the gold standard for commercial printing. We also accept high-resolution PNG, TIFF, JPG, and AI/EPS vector files with fonts outlined.'
    },
    {
      category: 'Artwork & Bleed',
      q: 'What resolution should my images be?',
      a: 'All raster graphics should be at least 300 DPI (dots per inch) at 100% final physical size. Graphics downloaded from social media or web pages are typically 72 DPI and will print blurry.'
    },
    {
      category: 'Majestic Specialty Finishes',
      q: 'What makes Majestic Akuafoil different from standard foil stamping?',
      a: 'Traditional foil stamping stamps a single solid foil color (like gold or silver). Akuafoil applies a silver foil base under CMYK color ink, producing a dazzling multi-color metallic gradient spectrum with unlimited metallic hues on the same card.'
    },
    {
      category: 'Majestic Specialty Finishes',
      q: 'What are Edge Cards?',
      a: 'Edge Cards are ultra-thick 32pt triple-layer cards with a bold colored core center slice or metallic painted rim (available in gold, silver, electric blue, or orange) that commands attention whenever viewed from the side.'
    },
    {
      category: 'Majestic Specialty Finishes',
      q: 'What does Suede Velvet lamination feel like?',
      a: 'Suede cards feature a soft-touch scuff-resistant velvet film that feels identical to rich suede leather or smooth velvet peach skin. It provides a tactile sensory experience that recipients keep.'
    }
  ];

  const filteredFaqs = allFaqs.filter(f => activeCategory === 'All' || f.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-2xs font-extrabold text-orange-600 uppercase tracking-widest">
          Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Find fast answers regarding commercial printing turnaround, artwork proofing, file setup, and majestic finishes.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = !!openIndices[idx];
          return (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left font-bold text-slate-900 text-sm flex items-center justify-between gap-4 hover:bg-slate-50/70 cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-orange-600' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Need more help banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
        <h3 className="text-lg font-bold">Have a custom question not covered here?</h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Our Houston commercial prepress specialists are standing by to assist with file verification and custom quotes.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:7132120247"
            className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold inline-flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call (713) 212-0247</span>
          </a>
          <button
            type="button"
            onClick={() => navigate('contact')}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold"
          >
            Send Inquiry Form
          </button>
        </div>
      </div>
    </div>
  );
};
