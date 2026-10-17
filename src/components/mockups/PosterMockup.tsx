import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const PosterMockup: React.FC = () => {
  const { frontArtwork, selectedProduct } = useApp();
  const [frameType, setFrameType] = useState<'gallery-frame' | 'canvas-wrap'>(
    selectedProduct.id === 'mounted-canvas' ? 'canvas-wrap' : 'gallery-frame'
  );

  const defaultPosterDesign = (
    <div className="w-full h-full bg-slate-900 p-8 flex flex-col justify-between text-white border border-slate-800">
      <div className="flex justify-between items-center text-3xs font-bold tracking-widest text-orange-400 uppercase">
        <span>PRONTO PRINTS</span>
        <span>GALLERY EDITION</span>
      </div>
      <div className="my-auto py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">{selectedProduct.name}</h2>
        <p className="text-xs text-orange-300 mt-2 font-mono uppercase">12-Color Archival Pigment Print</p>
        <p className="text-2xs text-slate-400 mt-4 max-w-xs mx-auto">
          Upload large format artwork to preview inside this realistic wall display.
        </p>
      </div>
      <div className="text-3xs text-slate-500 text-center border-t border-slate-800 pt-3">
        “You Think It! We Ink It!” • Houston, Texas
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col bg-slate-900/95 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      {/* Top Toolbar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setFrameType('gallery-frame')}
            className={`px-3 py-1 rounded-md text-2xs font-bold uppercase transition-all ${
              frameType === 'gallery-frame' ? 'bg-orange-600 text-white' : 'bg-slate-900 text-slate-400'
            }`}
          >
            Matte Black Frame
          </button>
          <button
            type="button"
            onClick={() => setFrameType('canvas-wrap')}
            className={`px-3 py-1 rounded-md text-2xs font-bold uppercase transition-all ${
              frameType === 'canvas-wrap' ? 'bg-orange-600 text-white' : 'bg-slate-900 text-slate-400'
            }`}
          >
            1.5" Gallery Wrap Canvas
          </button>
        </div>

        <span className="text-2xs text-slate-400">
          Fade-Resistant 20+ Years
        </span>
      </div>

      {/* 3D Wall Studio Stage */}
      <div 
        className="relative min-h-[460px] md:min-h-[520px] flex items-center justify-center p-8 overflow-hidden select-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 60%, #020617 100%)'
        }}
      >
        {frameType === 'gallery-frame' ? (
          /* BLACK WOOD GALLERY FRAME WITH WHITE MAT BOARD */
          <div className="relative p-3.5 sm:p-5 bg-neutral-900 rounded-sm shadow-2xl border-4 border-neutral-950">
            {/* White Museum Mat Board Margin */}
            <div className="p-4 sm:p-6 bg-slate-100 shadow-inner">
              <div className="relative w-[260px] sm:w-[360px] md:w-[420px] aspect-[4/5] bg-white shadow-md overflow-hidden">
                {frontArtwork.previewUrl ? (
                  <img src={frontArtwork.previewUrl} alt="Framed Poster" className="w-full h-full object-cover" />
                ) : defaultPosterDesign}

                {/* Glass reflection overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Frame Cast Shadow */}
            <div className="absolute -bottom-8 left-4 right-4 h-8 bg-black/60 blur-xl pointer-events-none" />
          </div>
        ) : (
          /* 1.5" GALLERY WRAPPED CANVAS WITH 3D EDGES */
          <div 
            className="relative transform-style-3d"
            style={{
              transform: 'rotateX(10deg) rotateY(-12deg) translateZ(20px)'
            }}
          >
            {/* Ground shadow */}
            <div className="absolute -inset-4 bg-black/60 blur-2xl translate-y-8 pointer-events-none" />

            {/* Main Canvas Face */}
            <div className="relative w-[260px] sm:w-[360px] md:w-[420px] aspect-[4/3] bg-white shadow-2xl overflow-hidden border border-slate-300">
              {frontArtwork.previewUrl ? (
                <img src={frontArtwork.previewUrl} alt="Canvas Face" className="w-full h-full object-cover" />
              ) : defaultPosterDesign}

              {/* Textured Canvas Linen Overlap */}
              <div className="absolute inset-0 sheen-matte opacity-40 pointer-events-none" />
            </div>

            {/* Simulated 1.5" Side Wrap Edge */}
            <div 
              className="absolute top-0 right-0 bottom-0 w-4 bg-slate-700 shadow-inner"
              style={{
                transform: 'rotateY(90deg) translateZ(16px)',
                filter: 'brightness(0.7)'
              }}
            />
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex justify-between items-center">
        <span>Museum Archival Quality • Ready to Hang Hardware Included</span>
        <span className="text-orange-400 font-medium">Houston, TX Facility</span>
      </div>
    </div>
  );
};
