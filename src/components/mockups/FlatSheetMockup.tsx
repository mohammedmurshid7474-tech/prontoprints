import React, { useState } from 'react';
import { RotateCw, Sun } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const FlatSheetMockup: React.FC = () => {
  const { frontArtwork, backArtwork, productConfiguration, selectedProduct } = useApp();
  const [activeSide, setActiveSide] = useState<'front' | 'back'>('front');
  const [sheenEffect, setSheenEffect] = useState<'matte' | 'gloss'>('gloss');

  const isLandscape = productConfiguration.orientation === 'horizontal';

  const defaultFrontPlaceholder = (
    <div className="w-full h-full bg-slate-900 p-8 flex flex-col justify-between text-white border border-slate-700">
      <div className="flex justify-between items-center text-2xs text-orange-400 font-bold tracking-widest uppercase">
        <span>PRONTO PRINTS</span>
        <span>HOUSTON COMMERCIAL</span>
      </div>
      <div className="my-auto py-8 text-center">
        <h3 className="text-xl sm:text-2xl font-bold uppercase">{selectedProduct.name}</h3>
        <p className="text-xs text-orange-300 mt-2">“You Think It! We Ink It!”</p>
        <p className="text-2xs text-slate-400 mt-3 max-w-xs mx-auto">
          Upload front artwork above to see it rendered instantly on this realistic sheet.
        </p>
      </div>
      <div className="flex justify-between items-center text-3xs text-slate-500 border-t border-slate-800 pt-3">
        <span>High-Speed Offset &amp; Digital</span>
        <span>713-212-0247</span>
      </div>
    </div>
  );

  const defaultBackPlaceholder = (
    <div className="w-full h-full bg-slate-50 p-8 flex flex-col justify-between text-slate-800 border border-slate-200">
      <div className="flex justify-between items-center text-2xs text-slate-400 font-bold tracking-widest uppercase">
        <span>PRONTO PRINTS</span>
        <span>REVERSE SIDE PROOF</span>
      </div>
      <div className="my-auto py-8 text-center">
        <h4 className="text-lg font-bold text-slate-700">Back / Reverse Printing</h4>
        <p className="text-2xs text-slate-500 mt-2">
          Upload your second page, coupons, schedule, or addressing panel.
        </p>
      </div>
      <div className="text-3xs text-slate-400 text-center border-t border-slate-200 pt-3">
        Houston, Texas • sales@prontoprints.com
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col bg-slate-900/95 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      {/* Top Controls Toolbar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 text-xs">
        {selectedProduct.supportsFrontAndBack ? (
          <div className="flex items-center bg-slate-900 rounded-lg p-1 border border-slate-700/60">
            <button
              type="button"
              onClick={() => setActiveSide('front')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
                activeSide === 'front' ? 'bg-orange-600 text-white shadow-2xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              Front Side
            </button>
            <button
              type="button"
              onClick={() => setActiveSide('back')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
                activeSide === 'back' ? 'bg-orange-600 text-white shadow-2xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              Back Side
            </button>
          </div>
        ) : (
          <span className="text-xs font-semibold text-slate-300">Single-Sided Print Proof</span>
        )}

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSheenEffect(sheenEffect === 'gloss' ? 'matte' : 'gloss')}
            className="px-2.5 py-1 text-2xs font-semibold rounded-md bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
          >
            {sheenEffect === 'gloss' ? 'Gloss Aqueous' : 'Matte Satin'}
          </button>
        </div>
      </div>

      {/* 3D Studio Stage */}
      <div 
        className="relative min-h-[460px] md:min-h-[500px] flex items-center justify-center p-8 overflow-hidden select-none perspective-1000"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 60%, #020617 100%)'
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-orange-500/10 blur-[90px] pointer-events-none rounded-full" />

        {/* The Flat Printed Paper Sheet */}
        <div 
          className={`relative transition-all duration-500 transform-style-3d ${
            isLandscape 
              ? 'w-[360px] sm:w-[480px] aspect-[11/8.5]' 
              : 'w-[280px] sm:w-[360px] aspect-[8.5/11]'
          }`}
          style={{
            transform: 'rotateX(15deg) rotateY(-5deg) rotateZ(1deg) translateZ(20px)',
            boxShadow: '0 25px 40px -10px rgba(0,0,0,0.6)'
          }}
        >
          {/* Ground Shadow */}
          <div className="absolute -inset-2 bg-black/40 blur-xl translate-y-6 pointer-events-none" />

          {/* Paper Sheet Content */}
          <div className="relative w-full h-full bg-white rounded-xs shadow-2xl overflow-hidden border border-slate-300/60">
            {activeSide === 'front' ? (
              frontArtwork.previewUrl ? (
                <img
                  src={frontArtwork.previewUrl}
                  alt="Front Sheet"
                  className={`w-full h-full ${frontArtwork.fitMode === 'contain' ? 'object-contain bg-slate-950' : 'object-cover'}`}
                />
              ) : defaultFrontPlaceholder
            ) : (
              backArtwork.previewUrl ? (
                <img
                  src={backArtwork.previewUrl}
                  alt="Back Sheet"
                  className={`w-full h-full ${backArtwork.fitMode === 'contain' ? 'object-contain bg-slate-100' : 'object-cover'}`}
                />
              ) : defaultBackPlaceholder
            )}

            {/* Sheen Overlay */}
            <div className={`absolute inset-0 pointer-events-none ${sheenEffect === 'gloss' ? 'sheen-gloss mix-blend-overlay' : 'sheen-matte opacity-25'}`} />

            {/* Bottom-right subtle dog-ear paper curl triangle */}
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-linear-to-tl from-slate-400/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex justify-between items-center">
        <span>High-Precision Cut &amp; Trim • Full Bleed Inks</span>
        {selectedProduct.supportsFrontAndBack && (
          <button
            type="button"
            onClick={() => setActiveSide(activeSide === 'front' ? 'back' : 'front')}
            className="text-orange-400 font-semibold hover:underline"
          >
            Flip to {activeSide === 'front' ? 'Back Side' : 'Front Side'} →
          </button>
        )}
      </div>
    </div>
  );
};
