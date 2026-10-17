import React from 'react';
import { Printer, MapPin, Award, CheckCircle2, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutPage: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-2xs font-extrabold text-orange-600 uppercase tracking-widest">
          About Pronto Prints
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950">
          Crafting Ink into Influence Since 2007
        </h1>
        <p className="text-sm font-semibold text-orange-600">
          “You Think It! We Ink It!”
        </p>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Pronto Prints is a full-service commercial print lab based in Houston, Texas, dedicated to delivering exceptional print craftsmanship, ultra-fast rush turnarounds, and cutting-edge visual prepress proofing.
        </p>
      </div>

      {/* Story & Philosophy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">
            Local Houston Heart, Industrial Press Power
          </h2>
          <p>
            From our central production hub at 8926 Clarkcrest Street, we serve businesses of every scale across the greater Houston metropolitan area—from emerging start-ups in Midtown to Fortune 500 corporate offices in the Energy Corridor.
          </p>
          <p>
            Whether producing 1,000 embossed gold foil greeting cards for the holidays, 10,000 door hangers for a local service contractor, or giant outdoor event vinyl banners, we bring unmatched attention to color fidelity, edge scoring, and material selection.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <span className="font-extrabold text-slate-900 text-sm">Pronto Prints Production Team</span>
            <span className="text-slate-400">•</span>
            <span className="text-orange-600 font-semibold">Houston, TX</span>
          </div>
        </div>

        {/* Facility Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl border border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center">
            <Printer className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Our Houston Production Lab</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Equipped with state-of-the-art digital production presses, wide-format UV roll-to-roll printers, high-precision automated CAD cutting tables, and multi-head embroidery stations.
          </p>
          <div className="space-y-2 text-2xs text-slate-300 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <span>8926 Clarkcrest St, Suite C, Houston, TX 77063</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Commercial Grade 300 DPI Pre-Flight Proofing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Uncompromising Quality</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            We use certified heavy stocks—from 16pt cardstock and 32pt triple-layer edge cards to tear-resistant 13oz scrim vinyl.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Digital Proofing First</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Never print blind. Our interactive 3D simulations let you inspect your cards, creases, and finishes before presses roll.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Houston Community First</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Proudly supporting local schools, churches, sports booster clubs, small businesses, and community galas across Texas.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center pt-4">
        <button
          type="button"
          onClick={() => navigate('catalogue')}
          className="px-8 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm shadow-xl shadow-orange-600/30 transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Explore All 65 Products</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
