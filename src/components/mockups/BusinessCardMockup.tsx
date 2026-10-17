import React, { useState } from 'react';
import { RotateCw, Layers, Sparkles, Check, Sun } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const BusinessCardMockup: React.FC = () => {
  const { frontArtwork, backArtwork, productConfiguration, selectedProduct } = useApp();

  type ViewMode = 'single' | 'stack' | 'dual';
  const [viewMode, setViewMode] = useState<ViewMode>('single');
  const [activeSide, setActiveSide] = useState<'front' | 'back'>('front');
  const [isRoundedCorners, setIsRoundedCorners] = useState<boolean>(false);
  const [sheenEffect, setSheenEffect] = useState<'matte' | 'gloss' | 'foil'>('gloss');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Check orientation
  const isLandscape = productConfiguration.orientation !== 'vertical';

  const defaultFrontPlaceholder = (
    <div className="w-full h-full bg-slate-900 p-6 flex flex-col justify-between text-white border border-slate-700/60">
      <div className="flex items-center justify-between">
        <span className="text-2xs font-black tracking-widest text-orange-500 uppercase">PRONTO PRINTS</span>
        <span className="text-3xs px-2 py-0.5 rounded bg-white/10 text-slate-300">Front Design</span>
      </div>
      <div className="text-center my-auto">
        <h4 className="text-lg font-bold text-white tracking-wide">Upload Front Artwork</h4>
        <p className="text-2xs text-slate-400 mt-1">High-Resolution 300 DPI Prepress Proof</p>
      </div>
      <div className="flex justify-between items-center text-3xs text-slate-500 border-t border-slate-800 pt-2">
        <span>Houston, TX</span>
        <span>713-212-0247</span>
      </div>
    </div>
  );

  const defaultBackPlaceholder = (
    <div className="w-full h-full bg-orange-600 p-6 flex flex-col justify-between text-white">
      <div className="flex items-center justify-between">
        <span className="text-2xs font-black tracking-widest text-white uppercase">PRONTO PRINTS</span>
        <span className="text-3xs px-2 py-0.5 rounded bg-black/20 text-white">Back Side</span>
      </div>
      <div className="text-center my-auto">
        <h4 className="text-lg font-black tracking-wide">“YOU THINK IT! WE INK IT!”</h4>
        <p className="text-2xs text-orange-100 mt-1">Same-Day Business Card Printing Houston</p>
      </div>
      <div className="text-center text-3xs text-orange-200">
        www.prontoprints.com
      </div>
    </div>
  );

  const getSheenClass = () => {
    switch (sheenEffect) {
      case 'gloss':
        return 'sheen-gloss mix-blend-overlay';
      case 'foil':
        return 'sheen-foil mix-blend-color-dodge';
      case 'matte':
      default:
        return 'sheen-matte mix-blend-soft-light';
    }
  };

  const cornerRadiusClass = isRoundedCorners ? 'rounded-2xl' : 'rounded-sm';

  return (
    <div className="relative flex flex-col bg-slate-900/95 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      {/* Top Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 text-xs">
        {/* View Switcher */}
        <div className="flex items-center bg-slate-900 rounded-lg p-1 border border-slate-700/60 shadow-inner">
          <button
            type="button"
            onClick={() => setViewMode('single')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              viewMode === 'single'
                ? 'bg-orange-600 text-white shadow-2xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            3D Flip View
          </button>
          <button
            type="button"
            onClick={() => setViewMode('stack')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all flex items-center gap-1 ${
              viewMode === 'stack'
                ? 'bg-orange-600 text-white shadow-2xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Card Stack</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('dual')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              viewMode === 'dual'
                ? 'bg-orange-600 text-white shadow-2xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Front &amp; Back Side-by-Side
          </button>
        </div>

        {/* Finishing Options */}
        <div className="flex items-center gap-2">
          {/* Rounded Corners Toggle */}
          <button
            type="button"
            onClick={() => setIsRoundedCorners(!isRoundedCorners)}
            className={`px-2.5 py-1 text-2xs font-semibold rounded-md border transition-colors flex items-center gap-1.5 ${
              isRoundedCorners
                ? 'bg-orange-950/60 border-orange-500/80 text-orange-300'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className={`w-2.5 h-2.5 border border-current ${isRoundedCorners ? 'rounded-full' : 'rounded-none'}`} />
            <span>{isRoundedCorners ? '1/4" Rounded' : 'Standard 90°'}</span>
          </button>

          {/* Sheen */}
          <div className="inline-flex rounded-lg bg-slate-900 p-0.5 border border-slate-700/60">
            {(['matte', 'gloss', 'foil'] as const).map((finish) => (
              <button
                key={finish}
                type="button"
                onClick={() => setSheenEffect(finish)}
                className={`px-2 py-1 text-2xs font-bold uppercase rounded-md transition-colors ${
                  sheenEffect === finish
                    ? 'bg-slate-700 text-amber-300'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {finish}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Studio Canvas */}
      <div
        className="relative min-h-[440px] md:min-h-[500px] flex items-center justify-center p-8 overflow-hidden perspective-1500 select-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 60%, #020617 100%)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Soft Background Grid */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Studio Lighting Spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-orange-500/10 blur-[90px] pointer-events-none rounded-full" />

        {/* ======================================================== */}
        {/* MODE 1: SINGLE CARD WITH 3D FLIP */}
        {/* ======================================================== */}
        {viewMode === 'single' && (
          <div className="flex flex-col items-center">
            <div
              className={`relative cursor-pointer transition-transform duration-700 ease-out transform-style-3d ${
                isLandscape ? 'w-[320px] sm:w-[420px] aspect-[3.5/2]' : 'w-[240px] sm:w-[280px] aspect-[2/3.5]'
              }`}
              style={{
                transform: `
                  rotateX(${isHovered ? '8deg' : '15deg'}) 
                  rotateY(${activeSide === 'back' ? '180deg' : (isHovered ? '-15deg' : '15deg')}) 
                  translateZ(20px)
                `
              }}
              onClick={() => setActiveSide(activeSide === 'front' ? 'back' : 'front')}
            >
              {/* Paper Stack Shadow underneath */}
              <div 
                className="absolute -inset-1 rounded-lg bg-black/50 blur-xl translate-y-10 pointer-events-none"
              />

              {/* FRONT SIDE FACE */}
              <div 
                className={`absolute inset-0 backface-hidden ${cornerRadiusClass} overflow-hidden bg-white shadow-2xl border border-slate-300/40`}
                style={{
                  boxShadow: '0 20px 35px -5px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.4)'
                }}
              >
                {frontArtwork.previewUrl ? (
                  <img
                    src={frontArtwork.previewUrl}
                    alt="Business Card Front"
                    className={`w-full h-full ${frontArtwork.fitMode === 'contain' ? 'object-contain bg-slate-950' : 'object-cover'}`}
                  />
                ) : defaultFrontPlaceholder}

                {/* Finishing Sheen */}
                <div className={`absolute inset-0 pointer-events-none ${getSheenClass()}`} />
                <div className="absolute inset-0 border border-white/60 pointer-events-none" />
              </div>

              {/* BACK SIDE FACE (ROTATED 180 DEG) */}
              <div 
                className={`absolute inset-0 backface-hidden rotate-y-180 ${cornerRadiusClass} overflow-hidden bg-white shadow-2xl border border-slate-300/40`}
                style={{
                  boxShadow: '0 20px 35px -5px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.4)'
                }}
              >
                {backArtwork.previewUrl ? (
                  <img
                    src={backArtwork.previewUrl}
                    alt="Business Card Back"
                    className={`w-full h-full ${backArtwork.fitMode === 'contain' ? 'object-contain bg-slate-950' : 'object-cover'}`}
                  />
                ) : defaultBackPlaceholder}

                {/* Finishing Sheen */}
                <div className={`absolute inset-0 pointer-events-none ${getSheenClass()}`} />
                <div className="absolute inset-0 border border-white/60 pointer-events-none" />
              </div>
            </div>

            {/* Click to Flip Prompt Pill */}
            <button
              type="button"
              onClick={() => setActiveSide(activeSide === 'front' ? 'back' : 'front')}
              className="mt-8 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-orange-500 text-xs text-slate-300 hover:text-white shadow-lg flex items-center gap-2 cursor-pointer transition-all"
            >
              <RotateCw className="w-3.5 h-3.5 text-orange-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Viewing <strong>{activeSide === 'front' ? 'Front Side' : 'Back Side'}</strong> (Click to Flip)</span>
            </button>
          </div>
        )}

        {/* ======================================================== */}
        {/* MODE 2: CARD STACK (RESTING ON A DECK OF 50 CARDS) */}
        {/* ======================================================== */}
        {viewMode === 'stack' && (
          <div 
            className="relative transform-style-3d duration-700 transition-transform"
            style={{
              transform: `
                rotateX(30deg) 
                rotateY(-18deg) 
                rotateZ(8deg) 
                translateZ(30px)
              `
            }}
          >
            {/* Deep Ground Shadow for the Stack */}
            <div className="absolute -bottom-10 -left-6 w-full h-full bg-black/60 blur-2xl rounded-xl pointer-events-none" />

            {/* Simulated 50-Card Stack Paper Edge Layers */}
            <div 
              className={`relative ${isLandscape ? 'w-[320px] sm:w-[420px] aspect-[3.5/2]' : 'w-[240px] sm:w-[280px] aspect-[2/3.5]'} ${cornerRadiusClass} bg-white shadow-card-stack border border-slate-300`}
            >
              {/* Stack Edge Depth Simulation Lines */}
              <div className="absolute -bottom-3 left-2 right-0 h-3 bg-slate-300/80 rounded-b-md border-x border-b border-slate-400" />
              <div className="absolute -bottom-6 left-4 right-0 h-3 bg-slate-400/80 rounded-b-md border-x border-b border-slate-500" />
              
              {/* Top Leaning Card on the Stack */}
              <div className={`w-full h-full ${cornerRadiusClass} overflow-hidden bg-white shadow-xl relative`}>
                {frontArtwork.previewUrl ? (
                  <img
                    src={frontArtwork.previewUrl}
                    alt="Card on Stack"
                    className="w-full h-full object-cover"
                  />
                ) : defaultFrontPlaceholder}

                {/* Sheen */}
                <div className={`absolute inset-0 pointer-events-none ${getSheenClass()}`} />
              </div>
            </div>

            {/* Stack Info Pill */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full bg-slate-900/95 border border-slate-700 text-2xs text-slate-300 shadow-xl flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>Full Print Run Stack (16pt Stiff Cardstock)</span>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MODE 3: SIDE-BY-SIDE DUAL CARDS */}
        {/* ======================================================== */}
        {viewMode === 'dual' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center justify-center max-w-4xl w-full">
            {/* Front Card */}
            <div className="flex flex-col items-center">
              <div 
                className={`relative ${isLandscape ? 'w-full max-w-[340px] aspect-[3.5/2]' : 'w-[220px] aspect-[2/3.5]'} ${cornerRadiusClass} overflow-hidden bg-white shadow-2xl border border-slate-300/40`}
                style={{
                  boxShadow: '0 20px 30px -5px rgba(0,0,0,0.5)'
                }}
              >
                {frontArtwork.previewUrl ? (
                  <img src={frontArtwork.previewUrl} alt="Front View" className="w-full h-full object-cover" />
                ) : defaultFrontPlaceholder}
                <div className={`absolute inset-0 pointer-events-none ${getSheenClass()}`} />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-white text-3xs font-bold uppercase tracking-wider">
                  Front Side
                </div>
              </div>
            </div>

            {/* Back Card */}
            <div className="flex flex-col items-center">
              <div 
                className={`relative ${isLandscape ? 'w-full max-w-[340px] aspect-[3.5/2]' : 'w-[220px] aspect-[2/3.5]'} ${cornerRadiusClass} overflow-hidden bg-white shadow-2xl border border-slate-300/40`}
                style={{
                  boxShadow: '0 20px 30px -5px rgba(0,0,0,0.5)'
                }}
              >
                {backArtwork.previewUrl ? (
                  <img src={backArtwork.previewUrl} alt="Back View" className="w-full h-full object-cover" />
                ) : defaultBackPlaceholder}
                <div className={`absolute inset-0 pointer-events-none ${getSheenClass()}`} />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-orange-600 text-white text-3xs font-bold uppercase tracking-wider">
                  Back Side
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Footer Information */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3 bg-slate-950 border-t border-slate-800 text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span className="text-white font-medium">Standard 3.5" x 2" U.S. Format</span>
          <span className="text-slate-600">•</span>
          <span>Double-Sided 4/4 Color</span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-400 font-semibold">Same-Day Houston Rush Available</span>
        </div>

        <div className="flex items-center gap-2 text-2xs text-slate-400">
          <span>Click card to flip 360°</span>
        </div>
      </div>
    </div>
  );
};
