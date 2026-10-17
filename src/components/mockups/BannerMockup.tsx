import React, { useState } from 'react';
import { Eye, Sun, RotateCw } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const BannerMockup: React.FC = () => {
  const { frontArtwork, selectedProduct } = useApp();
  const [displayType, setDisplayType] = useState<'stand' | 'hanging'>(
    selectedProduct.id === 'banner-stands' ? 'stand' : 'hanging'
  );

  const defaultBannerGraphic = (
    <div className="w-full h-full bg-linear-to-b from-slate-900 via-orange-950/40 to-slate-900 p-8 flex flex-col justify-between text-white text-center">
      <div className="flex justify-between items-center text-2xs text-orange-400 font-bold tracking-widest uppercase">
        <span>PRONTO PRINTS</span>
        <span>HOUSTON COMMERCIAL</span>
      </div>
      <div className="my-auto py-12">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
          HIGH-IMPACT VINYL BANNER
        </h2>
        <p className="text-sm font-semibold text-orange-400 mt-2 tracking-widest uppercase">
          “You Think It! We Ink It!”
        </p>
        <p className="text-xs text-slate-300 mt-4 max-w-sm mx-auto">
          Heavy 13oz or 18oz blockout vinyl with heat-welded seams and brass grommets.
        </p>
      </div>
      <div className="text-2xs text-slate-400 border-t border-white/10 pt-3">
        713-212-0247 • sales@prontoprints.com • 8926 Clarkcrest St
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col bg-slate-900/95 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      {/* Top Toolbar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 text-xs">
        <div className="flex items-center bg-slate-900 rounded-lg p-1 border border-slate-700/60">
          <button
            type="button"
            onClick={() => setDisplayType('hanging')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              displayType === 'hanging' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Hanging Vinyl with Grommets
          </button>
          <button
            type="button"
            onClick={() => setDisplayType('stand')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              displayType === 'stand' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Retractable Roll-Up Stand
          </button>
        </div>

        <span className="text-2xs text-slate-400 hidden sm:inline">
          Outdoor UV Cured Latex Ink
        </span>
      </div>

      {/* 3D Studio Area */}
      <div 
        className="relative min-h-[460px] md:min-h-[520px] flex items-center justify-center p-8 overflow-hidden select-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 60%, #020617 100%)'
        }}
      >
        {displayType === 'stand' ? (
          /* RETRACTABLE ROLL-UP STAND MOCKUP */
          <div className="relative flex flex-col items-center">
            {/* Top Aluminum Hanger Clamp Bar */}
            <div className="w-[260px] sm:w-[320px] h-4 bg-linear-to-r from-slate-400 via-slate-200 to-slate-400 rounded-xs shadow-md z-20 border border-slate-500" />

            {/* Tensioned Printed Graphic */}
            <div className="relative w-[252px] sm:w-[312px] h-[360px] sm:h-[420px] bg-white shadow-2xl overflow-hidden border-x border-slate-300">
              {frontArtwork.previewUrl ? (
                <img src={frontArtwork.previewUrl} alt="Banner" className="w-full h-full object-cover" />
              ) : defaultBannerGraphic}

              {/* Anti-curl edge shadow */}
              <div className="absolute inset-y-0 left-0 w-2 bg-linear-to-r from-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-2 bg-linear-to-l from-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 sheen-matte opacity-25 pointer-events-none" />
            </div>

            {/* Heavy Anodized Aluminum Cassette Base */}
            <div className="relative w-[290px] sm:w-[360px] h-9 bg-linear-to-b from-slate-300 via-slate-100 to-slate-400 rounded-sm shadow-2xl z-20 border border-slate-400 flex items-center justify-center">
              <span className="text-3xs font-black tracking-widest text-slate-600 uppercase">
                PRONTO PRINTS DELUXE STAND
              </span>
              {/* Swivel stabilizing feet */}
              <div className="absolute -bottom-2 left-6 w-12 h-2.5 bg-slate-500 rounded-b-xs shadow" />
              <div className="absolute -bottom-2 right-6 w-12 h-2.5 bg-slate-500 rounded-b-xs shadow" />
            </div>

            {/* Ground Shadow */}
            <div className="w-[380px] h-8 bg-black/60 blur-xl rounded-full mt-1 pointer-events-none" />
          </div>
        ) : (
          /* OUTDOOR HANGING VINYL WITH REINFORCED GROMMETS */
          <div className="relative w-full max-w-[620px] aspect-[16/9] shadow-2xl rounded-xs overflow-hidden border-2 border-slate-300 bg-white">
            {/* Brass Grommets at 4 Corners */}
            <div className="absolute top-2.5 left-2.5 w-4 h-4 rounded-full bg-amber-400 border-2 border-amber-600 flex items-center justify-center z-30 shadow-md">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            </div>
            <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-amber-400 border-2 border-amber-600 flex items-center justify-center z-30 shadow-md">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            </div>
            <div className="absolute bottom-2.5 left-2.5 w-4 h-4 rounded-full bg-amber-400 border-2 border-amber-600 flex items-center justify-center z-30 shadow-md">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            </div>
            <div className="absolute bottom-2.5 right-2.5 w-4 h-4 rounded-full bg-amber-400 border-2 border-amber-600 flex items-center justify-center z-30 shadow-md">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            </div>

            {/* Heat Welded Perimeter Seam */}
            <div className="absolute inset-1.5 border border-dashed border-slate-400/50 pointer-events-none z-20" />

            {/* Banner Artwork */}
            {frontArtwork.previewUrl ? (
              <img src={frontArtwork.previewUrl} alt="Hanging Banner" className="w-full h-full object-cover" />
            ) : defaultBannerGraphic}

            <div className="absolute inset-0 sheen-matte opacity-30 pointer-events-none z-10" />
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex justify-between items-center">
        <span>Waterproof 13oz Scrim Vinyl • Welded Hem Edges Included</span>
        <span className="text-orange-400 font-medium">Houston Same-Day Ready</span>
      </div>
    </div>
  );
};
