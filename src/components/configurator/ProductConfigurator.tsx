import React from 'react';
import { Check, ShieldCheck, Clock, Zap, Truck, FileText, ShoppingCart, ArrowRight, Type, Sliders, Palette, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ProductConfigurator: React.FC = () => {
  const { 
    selectedProduct, 
    productConfiguration, 
    updateConfiguration, 
    updateTextOverlay,
    calculateEstimatedPrice, 
    navigate 
  } = useApp();

  const estimatedTotal = calculateEstimatedPrice();
  const unitPrice = (estimatedTotal / (productConfiguration.quantity || 1)).toFixed(2);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      {/* Header / Product Title & Baseline info */}
      <div className="border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2 text-2xs font-bold text-orange-600 tracking-wider uppercase">
          <span>{selectedProduct.category}</span>
          {selectedProduct.badge && (
            <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-semibold">
              {selectedProduct.badge}
            </span>
          )}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
          {selectedProduct.name} Configuration
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          {selectedProduct.shortDescription}
        </p>
      </div>

      {/* 1. Size Selection */}
      <div className="space-y-2.5">
        <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide">
          1. Select Finished Size
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {selectedProduct.sizes.map((size) => {
            const isSelected = productConfiguration.size === size.id;
            return (
              <button
                key={size.id}
                type="button"
                onClick={() => updateConfiguration({ size: size.id })}
                className={`p-3 rounded-xl border text-left transition-all flex items-start justify-between cursor-pointer ${
                  isSelected
                    ? 'border-orange-500 bg-orange-50/60 ring-2 ring-orange-500/20 shadow-2xs'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{size.name}</span>
                  {size.badge && (
                    <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-3xs font-semibold bg-emerald-100 text-emerald-800">
                      {size.badge}
                    </span>
                  )}
                </div>
                {isSelected && <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Orientation */}
      <div className="space-y-2.5">
        <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide">
          2. Orientation
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => updateConfiguration({ orientation: 'horizontal' })}
            className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
              productConfiguration.orientation === 'horizontal'
                ? 'border-orange-500 bg-orange-50/60 ring-2 ring-orange-500/20'
                : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
            }`}
          >
            <div>
              <span className="text-xs font-bold text-slate-900 block">Horizontal / Landscape</span>
              <span className="text-3xs text-slate-500">Wide orientation</span>
            </div>
            {productConfiguration.orientation === 'horizontal' && <Check className="w-4 h-4 text-orange-600" />}
          </button>

          <button
            type="button"
            onClick={() => updateConfiguration({ orientation: 'vertical' })}
            className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
              productConfiguration.orientation === 'vertical'
                ? 'border-orange-500 bg-orange-50/60 ring-2 ring-orange-500/20'
                : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
            }`}
          >
            <div>
              <span className="text-xs font-bold text-slate-900 block">Vertical / Portrait</span>
              <span className="text-3xs text-slate-500">Tall orientation</span>
            </div>
            {productConfiguration.orientation === 'vertical' && <Check className="w-4 h-4 text-orange-600" />}
          </button>
        </div>
      </div>

      {/* 3. Paper Stock / Substrate */}
      <div className="space-y-2.5">
        <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide">
          3. Paper Stock &amp; Material Weight
        </label>
        <div className="space-y-2">
          {selectedProduct.paperStocks.map((stock) => {
            const isSelected = productConfiguration.paperStock === stock.id;
            return (
              <button
                key={stock.id}
                type="button"
                onClick={() => updateConfiguration({ paperStock: stock.id })}
                className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'border-orange-500 bg-orange-50/60 ring-2 ring-orange-500/20 shadow-2xs'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">{stock.name}</span>
                  {stock.badge && (
                    <span className="px-1.5 py-0.5 rounded text-3xs font-semibold bg-blue-100 text-blue-800">
                      {stock.badge}
                    </span>
                  )}
                </div>
                {isSelected && <Check className="w-4 h-4 text-orange-600 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Coating & Finish */}
      <div className="space-y-2.5">
        <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide">
          4. Surface Finish &amp; Protective Coating
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {selectedProduct.coatings.map((coating) => {
            const isSelected = productConfiguration.coating === coating.id;
            return (
              <button
                key={coating.id}
                type="button"
                onClick={() => updateConfiguration({ coating: coating.id })}
                className={`p-3 rounded-xl border text-left transition-all flex items-start justify-between cursor-pointer ${
                  isSelected
                    ? 'border-orange-500 bg-orange-50/60 ring-2 ring-orange-500/20'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <span className="text-xs font-bold text-slate-900 leading-tight">{coating.name}</span>
                {isSelected && <Check className="w-4 h-4 text-orange-600 shrink-0 ml-1 mt-0.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Printing Sides (Front & Back vs Front Only) */}
      {selectedProduct.supportsFrontAndBack && (
        <div className="space-y-2.5">
          <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide">
            5. Printing Sides
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => updateConfiguration({ printingSides: 'double' })}
              className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                productConfiguration.printingSides === 'double'
                  ? 'border-orange-500 bg-orange-50/60 ring-2 ring-orange-500/20'
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
              }`}
            >
              <div>
                <span className="text-xs font-bold text-slate-900 block">Front &amp; Back (4/4)</span>
                <span className="text-3xs text-slate-500">Full color both sides</span>
              </div>
              {productConfiguration.printingSides === 'double' && <Check className="w-4 h-4 text-orange-600" />}
            </button>

            <button
              type="button"
              onClick={() => updateConfiguration({ printingSides: 'single' })}
              className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                productConfiguration.printingSides === 'single'
                  ? 'border-orange-500 bg-orange-50/60 ring-2 ring-orange-500/20'
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
              }`}
            >
              <div>
                <span className="text-xs font-bold text-slate-900 block">Front Only (4/0)</span>
                <span className="text-3xs text-slate-500">Blank white back</span>
              </div>
              {productConfiguration.printingSides === 'single' && <Check className="w-4 h-4 text-orange-600" />}
            </button>
          </div>
        </div>
      )}

      {/* 6. Product-Specific Options (e.g. Envelopes for Greeting Cards) */}
      {selectedProduct.id === 'greeting-cards' && (
        <div className="space-y-2.5 border-t border-slate-100 pt-4">
          <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide">
            Matching A7 Envelopes
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'white-blank', name: 'Blank White Included' },
              { id: 'custom-printed', name: 'Custom Printed' },
              { id: 'none', name: 'No Envelopes' }
            ].map(env => (
              <button
                key={env.id}
                type="button"
                onClick={() => updateConfiguration({ envelopes: env.id as any })}
                className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                  productConfiguration.envelopes === env.id
                    ? 'border-orange-500 bg-orange-50/80 text-orange-700'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {env.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 6B. Greeting Card Custom Text Overlay Controls */}
      {selectedProduct.id === 'greeting-cards' && (
        <div className="space-y-3.5 border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4 text-orange-600" />
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Cover Greeting Text Overlay
              </label>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={productConfiguration.textOverlay?.enabled || false}
                onChange={(e) => updateTextOverlay({ enabled: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-600"></div>
              <span className="ml-2 text-2xs font-semibold text-slate-700">
                {productConfiguration.textOverlay?.enabled ? 'Active' : 'Disabled'}
              </span>
            </label>
          </div>

          <p className="text-3xs text-slate-500">
            Keep disabled if your uploaded artwork already contains text. Enable to add an editable, high-impact foil or ink sentiment over your artwork.
          </p>

          {productConfiguration.textOverlay?.enabled && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-3">
              {/* Text Input */}
              <div>
                <label className="block text-3xs font-bold text-slate-700 uppercase mb-1">
                  Greeting Message
                </label>
                <input
                  type="text"
                  value={productConfiguration.textOverlay.text}
                  onChange={(e) => updateTextOverlay({ text: e.target.value })}
                  placeholder="e.g. Warmest Wishes & Happy Holidays"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Font Choice & Size */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-3xs font-bold text-slate-700 uppercase mb-1">
                    Typography Style
                  </label>
                  <select
                    value={productConfiguration.textOverlay.fontFamily}
                    onChange={(e) => updateTextOverlay({ fontFamily: e.target.value as any })}
                    className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
                  >
                    <option value="serif">Serif Elegant</option>
                    <option value="sans">Sans Modern</option>
                    <option value="script">Script Italic</option>
                  </select>
                </div>

                <div>
                  <label className="block text-3xs font-bold text-slate-700 uppercase mb-1">
                    Text Size
                  </label>
                  <div className="flex gap-1">
                    {[
                      { label: 'S', size: 24 },
                      { label: 'M', size: 32 },
                      { label: 'L', size: 40 }
                    ].map(sz => (
                      <button
                        key={sz.size}
                        type="button"
                        onClick={() => updateTextOverlay({ fontSize: sz.size })}
                        className={`flex-1 py-1 text-2xs font-bold rounded border ${
                          productConfiguration.textOverlay?.fontSize === sz.size
                            ? 'bg-orange-600 text-white border-orange-600'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {sz.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Color Presets */}
              <div>
                <label className="block text-3xs font-bold text-slate-700 uppercase mb-1.5">
                  Text & Foil Color
                </label>
                <div className="flex items-center gap-2">
                  {[
                    { name: 'Pure White', hex: '#FFFFFF' },
                    { name: 'Metallic Gold', hex: '#F59E0B' },
                    { name: 'Deep Black', hex: '#0F172A' },
                    { name: 'Crimson Red', hex: '#DC2626' },
                    { name: 'Royal Blue', hex: '#2563EB' },
                    { name: 'Silver Sheen', hex: '#E2E8F0' }
                  ].map(c => (
                    <button
                      key={c.hex}
                      type="button"
                      title={c.name}
                      onClick={() => updateTextOverlay({ color: c.hex })}
                      className={`w-6 h-6 rounded-full border-2 transition-transform ${
                        productConfiguration.textOverlay?.color === c.hex
                          ? 'scale-125 ring-2 ring-orange-500 border-white'
                          : 'border-slate-300 hover:scale-110'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Vertical Position Slider */}
              <div>
                <div className="flex items-center justify-between text-3xs font-bold text-slate-700 uppercase mb-1">
                  <span>Vertical Position</span>
                  <span>{productConfiguration.textOverlay.positionY}% from top</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="80"
                  value={productConfiguration.textOverlay.positionY}
                  onChange={(e) => updateTextOverlay({ positionY: parseInt(e.target.value, 10) })}
                  className="w-full accent-orange-600"
                />
              </div>

              {/* Shadow toggle */}
              <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 text-2xs">
                <span className="text-slate-600">High-Contrast Drop Shadow</span>
                <input
                  type="checkbox"
                  checked={productConfiguration.textOverlay.hasShadow}
                  onChange={(e) => updateTextOverlay({ hasShadow: e.target.checked })}
                  className="rounded text-orange-600 focus:ring-orange-500"
                />
              </div>

              <div className="flex items-center gap-1.5 text-3xs text-orange-700 bg-orange-100/70 p-2 rounded-lg">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Hover and click the greeting text in the 3D card preview to edit inline!</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 7. Quantity Selector */}
      <div className="space-y-2.5">
        <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide">
          Select Quantity
        </label>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
          {selectedProduct.quantities.map((qty) => {
            const isSelected = productConfiguration.quantity === qty;
            return (
              <button
                key={qty}
                type="button"
                onClick={() => updateConfiguration({ quantity: qty })}
                className={`py-2 px-1 rounded-lg border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'border-orange-500 bg-orange-600 text-white font-bold shadow-2xs'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50 font-medium'
                }`}
              >
                <span className="text-xs block">{qty >= 1000 ? `${qty / 1000}k` : qty}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 8. Production Turnaround Speed */}
      <div className="space-y-2.5 border-t border-slate-100 pt-4">
        <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide">
          Production Turnaround &amp; Speed
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => updateConfiguration({ turnaround: 'standard' })}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              productConfiguration.turnaround === 'standard'
                ? 'border-orange-500 bg-orange-50/70 ring-2 ring-orange-500/20'
                : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
            }`}
          >
            <div className="flex items-center gap-1.5 text-slate-800 font-bold text-xs">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Standard</span>
            </div>
            <p className="text-3xs text-slate-500 mt-1">{selectedProduct.standardTurnaround}</p>
          </button>

          <button
            type="button"
            onClick={() => updateConfiguration({ turnaround: 'rush' })}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              productConfiguration.turnaround === 'rush'
                ? 'border-orange-500 bg-orange-50/70 ring-2 ring-orange-500/20'
                : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
            }`}
          >
            <div className="flex items-center gap-1.5 text-amber-800 font-bold text-xs">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>Rush (24-48h)</span>
            </div>
            <p className="text-3xs text-slate-500 mt-1">+ $35 priority queue</p>
          </button>

          <button
            type="button"
            onClick={() => updateConfiguration({ turnaround: 'same-day' })}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              productConfiguration.turnaround === 'same-day'
                ? 'border-orange-500 bg-orange-50/70 ring-2 ring-orange-500/20'
                : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
            }`}
          >
            <div className="flex items-center gap-1.5 text-orange-700 font-bold text-xs">
              <Truck className="w-3.5 h-3.5 text-orange-600" />
              <span>Houston Same-Day</span>
            </div>
            <p className="text-3xs text-slate-500 mt-1">Pickup at Clarkcrest St</p>
          </button>
        </div>
      </div>

      {/* Sticky Order & Estimate Summary Bar */}
      <div className="bg-slate-900 rounded-xl p-5 text-white space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xs font-semibold text-slate-400 uppercase tracking-widest block">
              Sample Estimated Total
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-3xl font-extrabold text-white">${estimatedTotal.toFixed(2)}</span>
              <span className="text-xs text-slate-400">(${unitPrice} each)</span>
            </div>
          </div>

          <div className="text-right">
            <span className="inline-block px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-3xs font-bold uppercase">
              Demonstration Pricing
            </span>
            <p className="text-3xs text-slate-400 mt-1">
              Quantity: {productConfiguration.quantity.toLocaleString()} pcs
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2 border-t border-slate-800">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('embedded-quote-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('quote', selectedProduct.id);
              }
            }}
            className="w-full py-3.5 px-4 rounded-xl bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 active:from-orange-700 text-white font-bold text-sm shadow-xl shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request Instant Quote for this Product</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-center text-3xs text-slate-400">
          ★ Free PDF Prepress Inspection included with every quote request.
        </p>
      </div>
    </div>
  );
};
