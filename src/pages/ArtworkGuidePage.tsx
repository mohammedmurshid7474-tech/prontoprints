import React, { useState } from 'react';
import { 
  FileCheck, 
  Layers, 
  HelpCircle, 
  Download, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  Eye,
  Sliders
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ArtworkGuidePage: React.FC = () => {
  const { navigate, showToast } = useApp();
  const [colorMode, setColorMode] = useState<'cmyk' | 'rgb'>('cmyk');

  const downloadDemoTemplate = (type: string) => {
    showToast(`Downloaded ${type} Starter Prepress Template (Demo PDF)`, 'success');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-2xs font-extrabold text-orange-600 uppercase tracking-widest">
          Prepress Specifications
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950">
          Artwork &amp; File Setup Guide
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Ensure flawless commercial reproduction. Follow our standard prepress guidelines for resolution, bleed margins, and color conversion.
        </p>
      </div>

      {/* 1. BLEED, TRIM & SAFE MARGIN DIAGRAM */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div>
          <span className="text-2xs font-bold text-orange-600 uppercase tracking-wider block">
            Critical Geometry
          </span>
          <h2 className="text-xl font-bold text-slate-950">Bleed, Trim Line &amp; Safe Zone</h2>
          <p className="text-xs text-slate-500 mt-1">
            Understanding the three boundaries prevents unprinted white edges or accidentally cut-off text.
          </p>
        </div>

        {/* Visual Box Diagram */}
        <div className="relative p-6 bg-slate-900 rounded-2xl flex items-center justify-center overflow-hidden">
          {/* Outer Bleed Zone (Red Dashed) */}
          <div className="w-full max-w-md aspect-[16/10] border-2 border-dashed border-rose-500/80 bg-rose-950/20 rounded p-4 relative flex items-center justify-center">
            <span className="absolute top-1 left-2 text-3xs font-mono text-rose-400 font-bold uppercase">
              Bleed Line (+0.125" all sides)
            </span>

            {/* Middle Trim Line (Orange Solid) */}
            <div className="w-full h-full border-2 border-orange-500 bg-orange-950/20 rounded p-4 relative flex items-center justify-center">
              <span className="absolute top-1 right-2 text-3xs font-mono text-orange-400 font-bold uppercase">
                Trim Line (Final Cut)
              </span>

              {/* Inner Safe Zone (Green Solid) */}
              <div className="w-full h-full border border-emerald-400 bg-emerald-950/30 rounded p-4 flex flex-col items-center justify-center text-center">
                <span className="text-2xs font-mono font-bold text-emerald-400 uppercase">
                  Safe Zone (Keep all text here)
                </span>
                <p className="text-3xs text-emerald-200 mt-1">
                  Logo &amp; essential text must remain 0.125" inside trim line.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation Table */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600 pt-2">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <strong className="text-rose-600 font-mono block">1. Bleed Area (0.125")</strong>
            <p className="text-2xs text-slate-500">
              Extend background colors, images, and full-bleed graphics 1/8 inch past the trim edge to eliminate paper cut edge slips.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <strong className="text-orange-600 font-mono block">2. Trim Line (Cut Line)</strong>
            <p className="text-2xs text-slate-500">
              The exact physical dimensions of your final finished piece (e.g. 5" x 7" for folded cards, 3.5" x 2" for business cards).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <strong className="text-emerald-600 font-mono block">3. Safe Zone</strong>
            <p className="text-2xs text-slate-500">
              Keep critical elements at least 0.125" away from the trim line so automated industrial cutters do not clip your text.
            </p>
          </div>
        </div>
      </div>

      {/* 2. RESOLUTION & COLOR MODE COMPARISON */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Resolution: 300 DPI vs 72 DPI */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900">Resolution: 300 DPI Standard</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Commercial offset and digital presses require high image resolution. Web images saved at 72 DPI appear pixelated and blurry when printed.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50 text-center space-y-1">
              <span className="text-rose-700 font-bold text-xs block">72 DPI (Web Screen)</span>
              <span className="text-2xs text-rose-600">❌ Blurry &amp; Pixelated in Print</span>
            </div>

            <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50 text-center space-y-1">
              <span className="text-emerald-700 font-bold text-xs block">300 DPI (Commercial)</span>
              <span className="text-2xs text-emerald-600">✓ Sharp &amp; Crystal Clear</span>
            </div>
          </div>
        </div>

        {/* Color Mode: CMYK vs RGB */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">Color: CMYK Inks</h3>
            <div className="flex bg-slate-100 rounded-lg p-0.5 text-3xs font-bold">
              <button
                type="button"
                onClick={() => setColorMode('cmyk')}
                className={`px-2 py-1 rounded cursor-pointer ${colorMode === 'cmyk' ? 'bg-orange-600 text-white' : 'text-slate-600'}`}
              >
                CMYK Print
              </button>
              <button
                type="button"
                onClick={() => setColorMode('rgb')}
                className={`px-2 py-1 rounded cursor-pointer ${colorMode === 'rgb' ? 'bg-orange-600 text-white' : 'text-slate-600'}`}
              >
                RGB Screen
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Printing uses Cyan, Magenta, Yellow, and Key (Black) inks. Digital monitors use Red, Green, and Blue light. Converting files to CMYK before uploading prevents unexpected color shifts.
          </p>

          <div className={`p-4 rounded-xl border transition-all text-xs ${
            colorMode === 'cmyk'
              ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
              : 'border-amber-300 bg-amber-50 text-amber-900'
          }`}>
            <span className="font-bold block">
              {colorMode === 'cmyk' ? '✓ CMYK Color Mode (Recommended)' : '⚠️ RGB Color Mode Detected'}
            </span>
            <p className="text-2xs mt-1">
              {colorMode === 'cmyk'
                ? 'Accurate physical ink representation. We use GRACoL and SWOP commercial profiles.'
                : 'RGB neon shades will shift slightly darker when translated to physical 4-color ink pigments.'}
            </p>
          </div>
        </div>
      </div>

      {/* 3. DOWNLOADABLE TEMPLATES DEMO */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-2xs font-extrabold text-orange-400 uppercase tracking-widest block">
              Starter Starter Kits
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              Download Pre-Configured Blank Templates
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-lg">
              Pre-built with exact bleed lines, fold score guides, and CMYK color spaces for Adobe Illustrator, Photoshop, and InDesign.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
            <span className="text-xs font-bold text-white block">Greeting Card Template</span>
            <p className="text-3xs text-slate-400">10" x 7" (folds to 5" x 7") with center score line</p>
            <button
              type="button"
              onClick={() => downloadDemoTemplate('Greeting Card (5x7 Folded)')}
              className="w-full py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-2xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Template (PDF)</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
            <span className="text-xs font-bold text-white block">Business Card Template</span>
            <p className="text-3xs text-slate-400">3.5" x 2" Standard U.S. with 0.125" bleed</p>
            <button
              type="button"
              onClick={() => downloadDemoTemplate('Business Card (3.5x2)')}
              className="w-full py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-2xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Template (PDF)</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
            <span className="text-xs font-bold text-white block">Vinyl Banner Template</span>
            <p className="text-3xs text-slate-400">3 ft x 6 ft with 1" perimeter welded hem &amp; grommets</p>
            <button
              type="button"
              onClick={() => downloadDemoTemplate('Vinyl Banner (3x6 ft)')}
              className="w-full py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-2xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Template (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
