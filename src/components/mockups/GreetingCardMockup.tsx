import React, { useState } from 'react';
import { RotateCcw, Layers, Sparkles, Sun, Type, Move } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const GreetingCardMockup: React.FC = () => {
  const { frontArtwork, backArtwork, productConfiguration, updateTextOverlay } = useApp();

  type ViewMode = 'front' | 'back' | 'open3d' | 'spread';
  const [viewMode, setViewMode] = useState<ViewMode>('front');
  const [sheenEffect, setSheenEffect] = useState<'matte' | 'gloss' | 'foil'>('matte');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isRotated, setIsRotated] = useState<boolean>(false);
  const [isTextOverlayHovered, setIsTextOverlayHovered] = useState<boolean>(false);
  const [isEditingInline, setIsEditingInline] = useState<boolean>(false);

  const isLandscape = productConfiguration.orientation === 'horizontal';
  const textOverlay = productConfiguration.textOverlay;

  // Fallback placeholder when no artwork is uploaded
  const defaultFrontPlaceholder = (
    <div className="w-full h-full bg-linear-to-br from-slate-900 via-slate-800 to-slate-950 p-8 flex flex-col justify-between text-white border border-slate-700/50">
      <div className="flex items-center justify-between">
        <span className="text-2xs font-bold tracking-widest text-orange-400 uppercase">PRONTO PRINTS</span>
        <span className="text-2xs px-2 py-0.5 rounded-full bg-white/10 text-slate-300">Front Cover Proof</span>
      </div>
      <div className="text-center my-auto py-8">
        <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 mx-auto flex items-center justify-center mb-3">
          <Sparkles className="w-6 h-6" />
        </div>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-100">Upload Front Artwork</h3>
        <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto">
          Your custom high-resolution cover will render automatically on this realistic card mockup.
        </p>
      </div>
      <div className="flex items-center justify-between text-2xs text-slate-400 border-t border-white/10 pt-3">
        <span>Scored 16pt Cover Stock</span>
        <span>“You Think It! We Ink It!”</span>
      </div>
    </div>
  );

  const defaultBackPlaceholder = (
    <div className="w-full h-full bg-linear-to-br from-slate-50 via-white to-slate-100 p-8 flex flex-col justify-between text-slate-800 border border-slate-200">
      <div className="flex items-center justify-between">
        <span className="text-2xs font-bold tracking-widest text-slate-400 uppercase">PRONTO PRINTS</span>
        <span className="text-2xs px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">Inside / Back Proof</span>
      </div>
      <div className="text-center my-auto py-8">
        <h3 className="text-lg md:text-xl font-serif font-semibold text-slate-700">Inside Message or Back Cover</h3>
        <p className="text-xs text-slate-500 mt-2 max-w-xs mx-auto">
          Upload your interior sentiment, return address, or custom barcode design.
        </p>
      </div>
      <div className="flex items-center justify-between text-2xs text-slate-400 border-t border-slate-200 pt-3">
        <span>Smooth Writable Stock</span>
        <span>Houston, Texas</span>
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

  const getOverlayFontClass = () => {
    if (!textOverlay) return 'font-serif';
    switch (textOverlay.fontFamily) {
      case 'sans': return 'font-sans';
      case 'script': return 'font-serif italic';
      case 'serif':
      default: return 'font-serif';
    }
  };

  // Editable Text Overlay Component
  const renderTextOverlayElement = () => {
    if (!textOverlay || !textOverlay.enabled) return null;

    return (
      <div
        className="absolute inset-x-4 z-30 transition-all cursor-text pointer-events-auto"
        style={{
          top: `${textOverlay.positionY}%`,
          transform: 'translateY(-50%)'
        }}
        onMouseEnter={() => setIsTextOverlayHovered(true)}
        onMouseLeave={() => setIsTextOverlayHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          setIsEditingInline(true);
        }}
      >
        <div
          className={`relative p-2 rounded-lg transition-all ${
            isTextOverlayHovered || isEditingInline
              ? 'ring-2 ring-orange-500 bg-black/30 backdrop-blur-2xs'
              : 'hover:ring-1 hover:ring-orange-400/60'
          }`}
        >
          {/* Hover Affordance Pill */}
          {isTextOverlayHovered && (
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-3xs font-bold tracking-wider uppercase shadow-md flex items-center gap-1 whitespace-nowrap pointer-events-none">
              <Move className="w-3 h-3" />
              <span>Editable Greeting Overlay (Click to Edit)</span>
            </div>
          )}

          {isEditingInline ? (
            <input
              type="text"
              autoFocus
              value={textOverlay.text}
              onChange={(e) => updateTextOverlay({ text: e.target.value })}
              onBlur={() => setIsEditingInline(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setIsEditingInline(false);
              }}
              className={`w-full bg-transparent text-center font-bold outline-none ${getOverlayFontClass()}`}
              style={{
                color: textOverlay.color,
                fontSize: `${textOverlay.fontSize * 0.75}px`,
                textShadow: textOverlay.hasShadow ? '0 2px 8px rgba(0,0,0,0.8)' : 'none'
              }}
            />
          ) : (
            <div
              className={`text-center font-bold tracking-wide select-none ${getOverlayFontClass()}`}
              style={{
                color: textOverlay.color,
                fontSize: `${textOverlay.fontSize * 0.75}px`,
                textShadow: textOverlay.hasShadow ? '0 2px 8px rgba(0,0,0,0.8)' : 'none'
              }}
            >
              {textOverlay.text || 'Add Greeting Message'}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex flex-col bg-slate-900/95 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      {/* Top Mockup Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 text-xs">
        {/* View Mode Switcher */}
        <div className="flex items-center bg-slate-900 rounded-lg p-1 border border-slate-700/60 shadow-inner">
          <button
            type="button"
            onClick={() => setViewMode('front')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer ${
              viewMode === 'front'
                ? 'bg-orange-600 text-white shadow-2xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Front Cover
          </button>
          <button
            type="button"
            onClick={() => setViewMode('back')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer ${
              viewMode === 'back'
                ? 'bg-orange-600 text-white shadow-2xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Inside / Back
          </button>
          <button
            type="button"
            onClick={() => setViewMode('open3d')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all flex items-center gap-1 cursor-pointer ${
              viewMode === 'open3d'
                ? 'bg-orange-600 text-white shadow-2xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>3D Standing Open</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('spread')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all hidden sm:inline-block cursor-pointer ${
              viewMode === 'spread'
                ? 'bg-orange-600 text-white shadow-2xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Flat Proof Spread
          </button>
        </div>

        {/* Finishing Texture & Lighting Sheen */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400 hidden sm:inline-flex items-center gap-1 text-2xs">
            <Sun className="w-3 h-3 text-amber-400" />
            Finish:
          </span>
          <div className="inline-flex rounded-lg bg-slate-900 p-0.5 border border-slate-700/60">
            {(['matte', 'gloss', 'foil'] as const).map((finish) => (
              <button
                key={finish}
                type="button"
                onClick={() => setSheenEffect(finish)}
                className={`px-2.5 py-1 text-2xs font-bold uppercase rounded-md transition-colors cursor-pointer ${
                  sheenEffect === finish
                    ? 'bg-slate-700 text-amber-300'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {finish}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsRotated(!isRotated)}
            title="Rotate card angle"
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main 3D Studio Stage Area */}
      <div 
        className="relative min-h-[440px] md:min-h-[520px] flex items-center justify-center p-6 md:p-12 overflow-hidden perspective-1500 select-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 60%, #020617 100%)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-500/10 blur-[100px] pointer-events-none rounded-full" />

        {/* ======================================================== */}
        {/* MODE 1 & 2: SINGLE ANGLE PERSPECTIVE (FRONT or BACK) */}
        {/* ======================================================== */}
        {(viewMode === 'front' || viewMode === 'back') && (
          <div
            className={`relative transition-all duration-700 ease-out transform-style-3d ${
              isLandscape 
                ? 'w-[340px] sm:w-[460px] md:w-[540px] aspect-[7/5]' 
                : 'w-[280px] sm:w-[360px] md:w-[420px] aspect-[5/7]'
            }`}
            style={{
              transform: `
                rotateX(${isHovered ? '8deg' : '14deg'}) 
                rotateY(${isHovered ? (isRotated ? '-20deg' : '20deg') : (isRotated ? '-14deg' : '14deg')}) 
                rotateZ(${isRotated ? '-2deg' : '2deg'})
                translateZ(20px)
              `
            }}
          >
            {/* Paper Stack Shadow underneath */}
            <div className="absolute -inset-1 rounded-xl bg-black/40 blur-xl translate-y-8 -translate-x-3 pointer-events-none" />
            <div 
              className="absolute inset-0 rounded-xl bg-slate-900 translate-y-1.5 translate-x-1.5 opacity-70 pointer-events-none"
              style={{ boxShadow: '0 25px 40px -10px rgba(0,0,0,0.7)' }}
            />

            {/* The Physical Card Body */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-white shadow-2xl border border-slate-300/40 transform-style-3d">
              {/* Paper Bevel Highlight Edge */}
              <div className="absolute inset-0 rounded-xl border border-white/80 pointer-events-none z-20" />
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-b from-black/20 via-black/5 to-transparent z-20 pointer-events-none" />

              {/* Artwork Rendered */}
              {viewMode === 'front' ? (
                frontArtwork.previewUrl ? (
                  <img
                    src={frontArtwork.previewUrl}
                    alt="Greeting Card Front"
                    className={`w-full h-full ${
                      frontArtwork.fitMode === 'contain' ? 'object-contain bg-slate-950' : 'object-cover'
                    }`}
                  />
                ) : defaultFrontPlaceholder
              ) : (
                backArtwork.previewUrl ? (
                  <img
                    src={backArtwork.previewUrl}
                    alt="Greeting Card Back"
                    className={`w-full h-full ${
                      backArtwork.fitMode === 'contain' ? 'object-contain bg-slate-100' : 'object-cover'
                    }`}
                  />
                ) : defaultBackPlaceholder
              )}

              {/* EDITABLE TEXT OVERLAY (ONLY IF ENABLED) */}
              {viewMode === 'front' && renderTextOverlayElement()}

              {/* Finishing Sheen */}
              <div className={`absolute inset-0 pointer-events-none z-10 ${getSheenClass()}`} />

              <div 
                className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-15"
                style={{
                  transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
                  transition: 'transform 1.2s ease-in-out'
                }}
              />
            </div>

            {/* Card Info Tag */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-2xs text-slate-300 shadow-lg flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span>{viewMode === 'front' ? 'Front Cover View' : 'Inside / Back View'}</span>
              <span>•</span>
              <span className="text-amber-400 capitalize">{sheenEffect} Finish</span>
              {textOverlay?.enabled && (
                <>
                  <span>•</span>
                  <span className="text-orange-400 font-bold">Text Overlay Active</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MODE 3: 3D STANDING OPEN FOLD VIEW */}
        {/* ======================================================== */}
        {viewMode === 'open3d' && (
          <div 
            className="relative flex items-center justify-center transform-style-3d duration-700 transition-transform"
            style={{
              transform: `
                rotateX(${isHovered ? '10deg' : '15deg'}) 
                rotateY(${isHovered ? '-5deg' : '0deg'}) 
                translateZ(30px)
              `
            }}
          >
            <div className="absolute -bottom-8 w-[90%] h-12 bg-black/70 blur-2xl rounded-full pointer-events-none" />

            {/* Left Panel: Inside Message Spread */}
            <div 
              className="relative w-[180px] sm:w-[260px] md:w-[310px] aspect-[5/7] rounded-l-lg overflow-hidden bg-white shadow-2xl border-y border-l border-slate-300/40 origin-right transition-transform duration-500"
              style={{
                transform: 'rotateY(30deg) translateZ(0px)',
                boxShadow: '-15px 20px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div className="absolute top-0 right-0 bottom-0 w-8 bg-linear-to-l from-black/35 via-black/10 to-transparent z-20 pointer-events-none" />
              <div className="absolute top-0 right-0 bottom-0 w-[1.5px] bg-slate-400/60 z-30 pointer-events-none" />

              {backArtwork.previewUrl ? (
                <img
                  src={backArtwork.previewUrl}
                  alt="Greeting Card Inside"
                  className={`w-full h-full ${
                    backArtwork.fitMode === 'contain' ? 'object-contain bg-slate-50' : 'object-cover'
                  }`}
                />
              ) : defaultBackPlaceholder}

              <div className="absolute inset-0 sheen-matte mix-blend-multiply opacity-30 pointer-events-none z-10" />

              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 text-white text-3xs font-semibold uppercase tracking-wider z-20">
                Inside Page
              </div>
            </div>

            {/* Right Panel: Front Cover Artwork */}
            <div 
              className="relative w-[180px] sm:w-[260px] md:w-[310px] aspect-[5/7] rounded-r-lg overflow-hidden bg-white shadow-2xl border-y border-r border-slate-300/40 origin-left transition-transform duration-500"
              style={{
                transform: 'rotateY(-30deg) translateZ(0px)',
                boxShadow: '15px 20px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div className="absolute top-0 left-0 bottom-0 w-8 bg-linear-to-r from-black/35 via-black/10 to-transparent z-20 pointer-events-none" />
              <div className="absolute top-0 left-0 bottom-0 w-[1.5px] bg-slate-400/60 z-30 pointer-events-none" />

              {frontArtwork.previewUrl ? (
                <img
                  src={frontArtwork.previewUrl}
                  alt="Greeting Card Front"
                  className={`w-full h-full ${
                    frontArtwork.fitMode === 'contain' ? 'object-contain bg-slate-950' : 'object-cover'
                  }`}
                />
              ) : defaultFrontPlaceholder}

              {/* Text Overlay if enabled */}
              {renderTextOverlayElement()}

              <div className={`absolute inset-0 pointer-events-none z-10 ${getSheenClass()}`} />

              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-orange-600 text-white text-3xs font-semibold uppercase tracking-wider z-20 shadow-2xs">
                Front Cover
              </div>
            </div>

            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-2xs text-slate-300 shadow-lg flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>3D Standing Open Fold Preview</span>
              <span>•</span>
              <span className="text-orange-400">Fold Crease Centered</span>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MODE 4: FLAT PRINTER'S SPREAD PROOF */}
        {/* ======================================================== */}
        {viewMode === 'spread' && (
          <div className="relative w-full max-w-[680px] p-4 bg-slate-950/60 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between text-3xs text-slate-400 uppercase tracking-wider mb-2 font-mono">
              <span>← Bleed Trim (0.125")</span>
              <span className="text-orange-400 font-bold">Unfolded Printer Proof Spread</span>
              <span>Score Line Center →</span>
            </div>

            <div className="relative grid grid-cols-2 gap-0 border-2 border-dashed border-orange-500/40 rounded-lg overflow-hidden bg-white shadow-2xl">
              {/* Back / Left Half */}
              <div className="relative aspect-[5/7] border-r border-dashed border-red-500/60 overflow-hidden">
                {backArtwork.previewUrl ? (
                  <img src={backArtwork.previewUrl} alt="Back Half" className="w-full h-full object-cover" />
                ) : defaultBackPlaceholder}
                <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-black/70 text-white text-3xs">
                  Back / Left
                </div>
              </div>

              {/* Front / Right Half */}
              <div className="relative aspect-[5/7] overflow-hidden">
                {frontArtwork.previewUrl ? (
                  <img src={frontArtwork.previewUrl} alt="Front Half" className="w-full h-full object-cover" />
                ) : defaultFrontPlaceholder}
                {renderTextOverlayElement()}
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-orange-600 text-white text-3xs">
                  Front / Right
                </div>
              </div>

              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-red-500/80 pointer-events-none z-30" />
            </div>

            <p className="text-center text-2xs text-slate-400 mt-2.5 font-mono">
              Red dashed line indicates high-precision scoring &amp; creasing zone.
            </p>
          </div>
        )}
      </div>

      {/* Bottom Mockup Footer Specs Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3 bg-slate-950 border-t border-slate-800 text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 font-semibold">CMYK Pre-Flight Verified</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="hidden sm:inline">16pt Heavy Cover Stock</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="hidden sm:inline">Scored Creasing</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode(viewMode === 'front' ? 'back' : 'front')}
            className="text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
          >
            Flip to {viewMode === 'front' ? 'Back' : 'Front'} →
          </button>
        </div>
      </div>
    </div>
  );
};
