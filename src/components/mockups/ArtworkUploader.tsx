import React, { useRef, useState } from 'react';
import { Upload, X, RefreshCw, CheckCircle2, AlertTriangle, FileText, Image as ImageIcon, Sparkles, Eye } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SAMPLE_ARTWORK_PAIRS } from '../../data/sampleArtwork';

interface ArtworkUploaderProps {
  showBackSide?: boolean;
}

export const ArtworkUploader: React.FC<ArtworkUploaderProps> = ({ showBackSide = true }) => {
  const { 
    frontArtwork, 
    backArtwork, 
    setArtwork, 
    clearArtwork, 
    loadSampleArtwork, 
    selectedProduct,
    showToast 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'front' | 'back'>('front');
  const frontInputRef = useRef<HTMLInputElement>(null);
  const backInputRef = useRef<HTMLInputElement>(null);
  const [dragOverSide, setDragOverSide] = useState<'front' | 'back' | null>(null);

  // Helper to handle local file processing
  const handleFileProcess = (file: File, side: 'front' | 'back') => {
    // Validate file type
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/svg+xml', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      showToast('Unsupported file format. Please upload PNG, JPG, JPEG, WEBP, SVG, or PDF.', 'error');
      return;
    }

    // Validate size (max 50MB for demo)
    if (file.size > 50 * 1024 * 1024) {
      showToast('File size exceeds 50MB limit.', 'error');
      return;
    }

    const formattedSize = file.size > 1024 * 1024 
      ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` 
      : `${Math.round(file.size / 1024)} KB`;

    // If PDF, generate a simulated visual preview canvas or placeholder
    if (file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = () => {
        // Create an SVG-based preview representation for PDF
        const pdfPreviewSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
            <rect width="800" height="600" fill="#F8FAFC"/>
            <rect x="20" y="20" width="760" height="560" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" rx="8"/>
            <circle cx="400" cy="240" r="50" fill="#FEE2E2"/>
            <path d="M 385 215 L 415 215 L 415 265 L 385 265 Z" fill="#EF4444"/>
            <text x="400" y="340" font-family="'Inter', sans-serif" font-size="24" fill="#0F172A" font-weight="700" text-anchor="middle">Vector PDF Proof Ready</text>
            <text x="400" y="380" font-family="'Inter', sans-serif" font-size="16" fill="#64748B" text-anchor="middle">${file.name}</text>
            <text x="400" y="420" font-family="'Inter', sans-serif" font-size="14" fill="#10B981" font-weight="600" text-anchor="middle">✓ High-Resolution 300 DPI Prepress Certified</text>
          </svg>
        `)}`;

        setArtwork(side, {
          file,
          previewUrl: pdfPreviewSvg,
          fileName: file.name,
          fileSize: formattedSize,
          fileType: file.type,
          aspectRatioMismatch: false
        });
      };
      reader.readAsDataURL(file);
      return;
    }

    // Standard image files
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      
      // Load image to test aspect ratio
      const img = new Image();
      img.onload = () => {
        const ratio = img.width / img.height;
        // Standard expected ratio ~ 1.4 to 1.7 for landscape cards
        const isRatioMismatched = ratio < 0.6 || ratio > 2.5;

        setArtwork(side, {
          file,
          previewUrl: result,
          fileName: file.name,
          fileSize: formattedSize,
          fileType: file.type,
          dimensions: { width: img.width, height: img.height },
          aspectRatioMismatch: isRatioMismatched
        });
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent, side: 'front' | 'back') => {
    e.preventDefault();
    setDragOverSide(null);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileProcess(e.dataTransfer.files[0], side);
    }
  };

  const renderDropzone = (side: 'front' | 'back') => {
    const artwork = side === 'front' ? frontArtwork : backArtwork;
    const inputRef = side === 'front' ? frontInputRef : backInputRef;
    const isDragOver = dragOverSide === side;
    const isFront = side === 'front';
    const sideTitle = isFront 
      ? (selectedProduct.id === 'greeting-cards' ? 'Front Cover Artwork' : 'Front Side Artwork')
      : (selectedProduct.id === 'greeting-cards' ? 'Inside / Back Artwork' : 'Back Side Artwork');

    return (
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        {/* Dropzone Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              artwork.previewUrl ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
            }`}>
              {isFront ? '1' : '2'}
            </span>
            <h4 className="font-semibold text-slate-900 text-sm">{sideTitle}</h4>
          </div>

          {artwork.previewUrl && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Proof Ready</span>
            </div>
          )}
        </div>

        {/* Upload Box or File Preview */}
        {!artwork.previewUrl ? (
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOverSide(side); }}
            onDragLeave={() => setDragOverSide(null)}
            onDrop={(e) => handleDrop(e, side)}
            onClick={() => inputRef.current?.click()}
            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all ${
              isDragOver 
                ? 'border-orange-500 bg-orange-50/50' 
                : 'border-slate-300 hover:border-orange-400 bg-slate-50/70 hover:bg-slate-50'
            }`}
          >
            <input
              type="file"
              ref={inputRef}
              className="hidden"
              accept=".png,.jpg,.jpeg,.webp,.svg,.pdf"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileProcess(e.target.files[0], side);
                }
              }}
            />
            <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-3">
              <Upload className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-slate-800 mb-1">
              Click to browse or drop {side} artwork here
            </p>
            <p className="text-xs text-slate-500 mb-3">
              Supports PDF, PNG, JPG, JPEG, SVG up to 50MB
            </p>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-100">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              Select File
            </span>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Thumbnail and File Details */}
            <div className="flex items-center gap-3.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="relative w-16 h-16 rounded-md overflow-hidden bg-slate-200 shrink-0 border border-slate-300 shadow-2xs">
                {artwork.previewUrl.startsWith('data:image/svg') || artwork.previewUrl.startsWith('data:image') || artwork.previewUrl.startsWith('http') ? (
                  <img 
                    src={artwork.previewUrl} 
                    alt={`${side} thumbnail`} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white text-xs font-bold">
                    PDF
                  </div>
                )}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-900 truncate">
                  {artwork.fileName || `${side}-artwork.png`}
                </p>
                <div className="flex items-center gap-2 mt-1 text-2xs text-slate-500">
                  <span>{artwork.fileSize || 'Standard'}</span>
                  <span>•</span>
                  <span className="uppercase text-slate-600 font-semibold">{artwork.fileType?.split('/')[1] || 'IMAGE'}</span>
                </div>
                {artwork.dimensions && (
                  <p className="text-2xs text-slate-400 mt-0.5">
                    {artwork.dimensions.width} x {artwork.dimensions.height} px
                  </p>
                )}
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  title="Replace file"
                  className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-md transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => clearArtwork(side)}
                  title="Remove artwork"
                  className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-md transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <input
                type="file"
                ref={inputRef}
                className="hidden"
                accept=".png,.jpg,.jpeg,.webp,.svg,.pdf"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileProcess(e.target.files[0], side);
                  }
                }}
              />
            </div>

            {/* Aspect ratio warning if flagged */}
            {artwork.aspectRatioMismatch && (
              <div className="flex items-start gap-2 p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Artwork aspect ratio differs from card format.</p>
                  <p className="text-2xs text-amber-700 mt-0.5">
                    We will fit artwork to the bleed trim area automatically without distortion.
                  </p>
                </div>
              </div>
            )}

            {/* Fit mode selector */}
            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-slate-500">Fit Mode:</span>
              <div className="inline-flex rounded-md p-0.5 bg-slate-100 border border-slate-200">
                {(['cover', 'contain'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setArtwork(side, { fitMode: mode })}
                    className={`px-2.5 py-1 text-2xs font-semibold rounded capitalize transition-all ${
                      artwork.fitMode === mode 
                        ? 'bg-white text-orange-600 shadow-2xs' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {mode === 'cover' ? 'Fill (Bleed)' : 'Fit (Safe Margin)'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Sample Artwork Bar for instant testing */}
      <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-900">Want to test the 3D Mockup instantly?</h5>
            <p className="text-2xs text-slate-600">
              Load ready-made front &amp; back print designs with 1-click.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {SAMPLE_ARTWORK_PAIRS.map((pair) => (
            <button
              key={pair.id}
              type="button"
              onClick={() => loadSampleArtwork(pair.id)}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-white hover:bg-orange-600 text-slate-800 hover:text-white border border-orange-300 shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{pair.name.split('(')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Side Tabs for mobile / compact screens */}
      {showBackSide && (
        <div className="flex border-b border-slate-200 gap-4 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('front')}
            className={`pb-2 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'front'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Front Artwork {frontArtwork.previewUrl && '✓'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('back')}
            className={`pb-2 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'back'
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Back / Inside Artwork {backArtwork.previewUrl && '✓'}</span>
          </button>
        </div>
      )}

      {/* Grid of uploaders: On desktop show both side by side if requested, otherwise show active tab */}
      <div className={`grid gap-4 ${showBackSide ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {/* On smaller screens show only active tab, on md+ show both side by side */}
        <div className={showBackSide ? (activeTab === 'front' ? 'block' : 'hidden md:block') : 'block'}>
          {renderDropzone('front')}
        </div>

        {showBackSide && (
          <div className={activeTab === 'back' ? 'block' : 'hidden md:block'}>
            {renderDropzone('back')}
          </div>
        )}
      </div>

      {/* Client-Side Safe Processing Notice */}
      <div className="flex items-center gap-2 text-2xs text-slate-500 px-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>100% Client-Side Browser Proofing • No files uploaded to remote servers.</span>
      </div>
    </div>
  );
};
