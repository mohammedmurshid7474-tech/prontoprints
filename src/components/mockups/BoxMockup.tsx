import React, { useState } from 'react';
import { Package, Sparkles, Box } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const BoxMockup: React.FC = () => {
  const { frontArtwork, selectedProduct } = useApp();
  const [boxStyle, setBoxStyle] = useState<'white' | 'kraft'>('white');

  const defaultBoxDesign = (
    <div className="w-full h-full bg-slate-900 p-6 flex flex-col justify-between text-white border border-slate-700">
      <div className="flex justify-between items-center text-3xs text-orange-400 font-bold uppercase tracking-wider">
        <span>PRONTO PACKAGING</span>
        <span>CUSTOM CARTON</span>
      </div>
      <div className="text-center my-auto">
        <Package className="w-8 h-8 text-orange-500 mx-auto mb-2" />
        <h4 className="text-base font-bold text-white uppercase tracking-wider">{selectedProduct.name}</h4>
        <p className="text-3xs text-slate-400 mt-1">Full-Color 18pt SBS Folding Paperboard</p>
      </div>
      <div className="text-3xs text-slate-500 text-center border-t border-slate-800 pt-2">
        “You Think It! We Ink It!”
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col bg-slate-900/95 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      {/* Top Toolbar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-2xs font-semibold">Substrate:</span>
          <button
            type="button"
            onClick={() => setBoxStyle('white')}
            className={`px-3 py-1 rounded-md text-2xs font-bold uppercase transition-all ${
              boxStyle === 'white' ? 'bg-orange-600 text-white' : 'bg-slate-900 text-slate-400'
            }`}
          >
            White SBS Boxboard
          </button>
          <button
            type="button"
            onClick={() => setBoxStyle('kraft')}
            className={`px-3 py-1 rounded-md text-2xs font-bold uppercase transition-all ${
              boxStyle === 'kraft' ? 'bg-amber-800 text-amber-100' : 'bg-slate-900 text-slate-400'
            }`}
          >
            Organic Kraft
          </button>
        </div>

        <span className="text-2xs text-slate-400">
          Auto-Lock Crash Bottom
        </span>
      </div>

      {/* 3D Studio Canvas */}
      <div 
        className="relative min-h-[460px] md:min-h-[500px] flex items-center justify-center p-8 overflow-hidden select-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 60%, #020617 100%)'
        }}
      >
        {/* Soft Background Spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-500/10 blur-[80px] pointer-events-none rounded-full" />

        {/* 3D ISOMETRIC FOLDING CARTON */}
        <div className="relative flex items-center justify-center transform-style-3d scale-90 sm:scale-100">
          {/* Ground Cast Shadow */}
          <div className="absolute -bottom-10 w-[380px] h-14 bg-black/70 blur-2xl rounded-full pointer-events-none" />

          {/* FRONT FACE OF BOX */}
          <div 
            className={`relative w-[240px] sm:w-[280px] aspect-[4/5] ${
              boxStyle === 'white' ? 'bg-white' : 'bg-[#D2B48C]'
            } shadow-2xl rounded-xs overflow-hidden border border-slate-300/40 z-20`}
            style={{
              transform: 'rotateY(-20deg) rotateX(10deg) translateZ(30px)',
              boxShadow: '-20px 25px 40px rgba(0,0,0,0.6)'
            }}
          >
            {frontArtwork.previewUrl ? (
              <img src={frontArtwork.previewUrl} alt="Box Front" className="w-full h-full object-cover" />
            ) : defaultBoxDesign}

            {/* Front Sheen and Edge Bevels */}
            <div className="absolute inset-0 sheen-matte opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/40 pointer-events-none" />
          </div>

          {/* RIGHT SIDE FACE OF BOX */}
          <div 
            className={`relative w-[130px] sm:w-[150px] aspect-[2/5] ${
              boxStyle === 'white' ? 'bg-slate-200' : 'bg-[#C19A6B]'
            } shadow-xl rounded-xs overflow-hidden border border-slate-400/40 z-10`}
            style={{
              transform: 'rotateY(70deg) rotateX(10deg) translateX(-15px) translateZ(10px)',
              filter: 'brightness(0.85)'
            }}
          >
            <div className="w-full h-full p-4 flex flex-col justify-between text-slate-600 font-mono text-3xs">
              <span className="font-bold">BARCODE SPEC</span>
              <div className="space-y-1">
                <div className="h-6 bg-slate-800/80 rounded-xs" />
                <span>LOT 8926-HOU</span>
              </div>
            </div>
          </div>

          {/* TOP TUCK LID FACE OF BOX */}
          <div 
            className={`absolute -top-14 w-[240px] sm:w-[280px] h-[100px] ${
              boxStyle === 'white' ? 'bg-slate-100' : 'bg-[#DEB887]'
            } rounded-xs border border-slate-300/50 shadow-md z-30`}
            style={{
              transform: 'rotateX(75deg) rotateZ(10deg) translateY(-20px)',
              filter: 'brightness(1.15)'
            }}
          >
            {/* Top tuck flap thumb notch */}
            <div className="w-8 h-2.5 bg-slate-300 rounded-b-full mx-auto shadow-inner" />
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex justify-between items-center">
        <span>Engineered Dieline • Food &amp; Cosmetic Safe Inks</span>
        <span className="text-orange-400 font-medium">Custom Dimensions Available</span>
      </div>
    </div>
  );
};
