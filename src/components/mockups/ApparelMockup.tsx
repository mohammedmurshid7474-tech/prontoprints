import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const ApparelMockup: React.FC = () => {
  const { frontArtwork, backArtwork, selectedProduct } = useApp();
  const [activeSide, setActiveSide] = useState<'front' | 'back'>('front');
  const [shirtColor, setShirtColor] = useState<'black' | 'white' | 'orange' | 'heather'>('black');

  const getColorHex = () => {
    switch (shirtColor) {
      case 'white': return '#F8FAFC';
      case 'orange': return '#EA580C';
      case 'heather': return '#475569';
      case 'black':
      default: return '#18181B';
    }
  };

  return (
    <div className="relative flex flex-col bg-slate-900/95 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      {/* Top Controls Toolbar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 text-xs">
        <div className="flex items-center bg-slate-900 rounded-lg p-1 border border-slate-700/60">
          <button
            type="button"
            onClick={() => setActiveSide('front')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              activeSide === 'front' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Front Chest
          </button>
          <button
            type="button"
            onClick={() => setActiveSide('back')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              activeSide === 'back' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Full Back
          </button>
        </div>

        {/* Color Switcher */}
        <div className="flex items-center gap-1.5">
          <span className="text-2xs text-slate-400 mr-1 hidden sm:inline">Color:</span>
          {(['black', 'white', 'orange', 'heather'] as const).map(color => (
            <button
              key={color}
              type="button"
              onClick={() => setShirtColor(color)}
              className={`w-5 h-5 rounded-full border-2 transition-transform ${
                shirtColor === color ? 'scale-125 border-orange-500 shadow-md' : 'border-slate-600 hover:scale-110'
              }`}
              style={{
                backgroundColor: color === 'white' ? '#FFFFFF' : color === 'orange' ? '#EA580C' : color === 'heather' ? '#64748B' : '#18181B'
              }}
            />
          ))}
        </div>
      </div>

      {/* 3D Studio Canvas */}
      <div 
        className="relative min-h-[460px] md:min-h-[500px] flex items-center justify-center p-8 overflow-hidden select-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 60%, #020617 100%)'
        }}
      >
        {/* T-Shirt Silhouette Container */}
        <div className="relative w-[300px] sm:w-[380px] aspect-[4/5] flex items-center justify-center">
          {/* T-Shirt SVG Outline and Fabric Folds */}
          <svg viewBox="0 0 400 480" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="fabricShading" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#000" stop-opacity="0.3"/>
                <stop offset="25%" stop-color="#fff" stop-opacity="0.08"/>
                <stop offset="50%" stop-color="#000" stop-opacity="0.05"/>
                <stop offset="75%" stop-color="#fff" stop-opacity="0.08"/>
                <stop offset="100%" stop-color="#000" stop-opacity="0.35"/>
              </linearGradient>
            </defs>

            {/* Base Garment Body */}
            <path
              d="M 130 30 Q 200 65 270 30 L 370 100 L 320 170 L 285 145 L 285 450 L 115 450 L 115 145 L 80 170 L 30 100 Z"
              fill={getColorHex()}
              stroke="#27272A"
              strokeWidth="2"
            />
            {/* Fabric Shading Overlay */}
            <path
              d="M 130 30 Q 200 65 270 30 L 370 100 L 320 170 L 285 145 L 285 450 L 115 450 L 115 145 L 80 170 L 30 100 Z"
              fill="url(#fabricShading)"
            />
            {/* Crew Neck Collar */}
            <path
              d="M 130 30 Q 200 65 270 30"
              fill="none"
              stroke="#3F3F46"
              strokeWidth="5"
            />
          </svg>

          {/* Printable Area Placement */}
          <div className="absolute top-[120px] w-[140px] sm:w-[170px] aspect-[1/1.2] rounded-xs overflow-hidden flex items-center justify-center pointer-events-none">
            {activeSide === 'front' ? (
              frontArtwork.previewUrl ? (
                <img
                  src={frontArtwork.previewUrl}
                  alt="T-Shirt Print"
                  className="w-full h-full object-contain mix-blend-multiply opacity-95 filter contrast-110"
                />
              ) : (
                <div className="text-center p-3 border border-dashed border-white/40 rounded-md">
                  <span className="text-2xs font-bold text-white uppercase block">Print Graphic</span>
                  <span className="text-3xs text-white/70 block mt-1">12" x 14" printable area</span>
                </div>
              )
            ) : (
              backArtwork.previewUrl ? (
                <img
                  src={backArtwork.previewUrl}
                  alt="T-Shirt Back Print"
                  className="w-full h-full object-contain mix-blend-multiply opacity-95 filter contrast-110"
                />
              ) : (
                <div className="text-center p-3 border border-dashed border-white/40 rounded-md">
                  <span className="text-2xs font-bold text-white uppercase block">Back Graphic</span>
                  <span className="text-3xs text-white/70 block mt-1">Full Back Area</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex justify-between items-center">
        <span>High-Density Plastisol or Water-Based Inks • Ring-Spun Cotton</span>
        <button
          type="button"
          onClick={() => setActiveSide(activeSide === 'front' ? 'back' : 'front')}
          className="text-orange-400 font-semibold hover:underline"
        >
          View {activeSide === 'front' ? 'Back View' : 'Front View'} →
        </button>
      </div>
    </div>
  );
};
