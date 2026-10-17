import React from 'react';
import { 
  Sliders, 
  Upload, 
  Eye, 
  FileCheck, 
  Printer, 
  Truck, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HowItWorksPage: React.FC = () => {
  const { navigate } = useApp();

  const steps = [
    {
      num: '01',
      title: 'Configure Your Product Specs',
      desc: 'Browse our catalog of 65+ commercial products. Choose your exact finished size, orientation, paper stock weight, and specialty coating (such as Akuafoil, UV gloss, or velvet suede). Our configurator displays instantaneous sample pricing estimates.',
      icon: <Sliders className="w-6 h-6 text-orange-600" />
    },
    {
      num: '02',
      title: 'Upload Front & Back Artwork',
      desc: 'Submit your print-ready artwork (PDF, PNG, JPG, SVG) via our drag-and-drop uploader. For double-sided products like Greeting Cards and Business Cards, you can upload separate files for the front face and back/inside face.',
      icon: <Upload className="w-6 h-6 text-orange-600" />
    },
    {
      num: '03',
      title: 'Interactive 3D Proofing',
      desc: 'Never guess what your final product will look like. Our browser proofing engine realistically applies your artwork to 3D folded greeting cards, business card stacks, banner stands, and packaging cartons with lighting sheens and paper textures.',
      icon: <Eye className="w-6 h-6 text-orange-600" />
    },
    {
      num: '04',
      title: 'Submit Formal Quote Request',
      desc: 'Provide your contact details, hard in-hand deadlines, and special finishing notes. A unique reference ID (e.g. PP-DEMO-1001) is automatically generated for tracking in your customer dashboard.',
      icon: <FileCheck className="w-6 h-6 text-orange-600" />
    },
    {
      num: '05',
      title: 'Precision Houston Production & Pickup',
      desc: 'Our prepress specialists conduct automated pre-flight checks (300 DPI, CMYK color gamut, bleed). Once verified, jobs run on high-speed commercial presses with same-day Houston pickup or Texas courier delivery.',
      icon: <Truck className="w-6 h-6 text-orange-600" />
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* Hero Intro */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-2xs font-extrabold text-orange-600 uppercase tracking-widest">
          The Pronto Prints Experience
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950">
          How Commercial Printing Works
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          From your creative vision to physical ink on paper: a seamless 5-step journey powered by digital proofing and Houston craftsmanship.
        </p>
      </div>

      {/* 5 Steps Vertical Flow */}
      <div className="space-y-6">
        {steps.map((st, i) => (
          <div
            key={st.num}
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start gap-6 relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 shadow-2xs">
              {st.icon}
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-orange-600">STEP {st.num}</span>
              </div>
              <h3 className="text-lg font-black text-slate-900">{st.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pre-Flight Guarantee Box */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
          <div>
            <h3 className="text-base font-bold text-white">Our 100% Pre-Flight File Inspection Guarantee</h3>
            <p className="text-2xs text-slate-400">
              Every submitted artwork file is analyzed by prepress software before plates or digital clicks are made.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>300 DPI Resolution Check</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>0.125" Bleed Boundary Check</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>CMYK Ink Gamut Verification</span>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center pt-4">
        <button
          type="button"
          onClick={() => navigate('product-detail', 'greeting-cards')}
          className="px-8 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm shadow-xl shadow-orange-600/30 transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Test the Interactive Mockup Flow</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
