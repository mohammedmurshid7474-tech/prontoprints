import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  Truck, 
  Clock, 
  AlertCircle,
  Copy,
  ExternalLink,
  CheckCircle2,
  Sliders,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { QuoteRequest } from '../types';

export const QuoteRequestPage: React.FC = () => {
  const { 
    selectedProduct, 
    productConfiguration, 
    frontArtwork, 
    backArtwork, 
    calculateEstimatedPrice, 
    submitQuoteRequest, 
    navigate,
    showToast 
  } = useApp();

  const [step, setStep] = useState<number>(1);
  const [submittedQuoteId, setSubmittedQuoteId] = useState<string | null>(null);

  // Form Fields State
  const [fullName, setFullName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [deliveryMethod, setDeliveryMethod] = useState<'houston-pickup' | 'texas-shipping' | 'nationwide-freight'>('houston-pickup');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('Houston');
  const [zipCode, setZipCode] = useState<string>('77063');

  const [projectTitle, setProjectTitle] = useState<string>(`${selectedProduct.name} Commercial Print`);
  const [projectDescription, setProjectDescription] = useState<string>('');
  const [targetDeadline, setTargetDeadline] = useState<string>('');
  const [budgetRange, setBudgetRange] = useState<string>('$100 - $300');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

  // Form Validation Errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const estimatedTotal = calculateEstimatedPrice();

  const validateStep2 = (): boolean => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (deliveryMethod !== 'houston-pickup' && !address.trim()) {
      errs.address = 'Street address is required for shipping.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (step === 2) {
      if (!validateStep2()) return;
    }
    setStep(prev => Math.min(4, prev + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setStep(prev => Math.max(1, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) {
      setStep(2);
      return;
    }

    const newId = submitQuoteRequest({
      customer: {
        fullName,
        companyName,
        email,
        phone,
        deliveryMethod,
        address,
        city,
        zipCode
      },
      projectDetails: {
        projectTitle: projectTitle || `${selectedProduct.name} Custom Run`,
        projectDescription: projectDescription || 'Standard commercial quote specifications.',
        targetDeadline,
        budgetRange,
        additionalNotes
      }
    });

    setSubmittedQuoteId(newId);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const copyQuoteId = () => {
    if (submittedQuoteId) {
      navigator.clipboard.writeText(submittedQuoteId);
      showToast(`Copied ${submittedQuoteId} to clipboard!`);
    }
  };

  // SUCCESS CONFIRMATION SCREEN
  if (submittedQuoteId) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-2xs font-extrabold text-orange-600 uppercase tracking-widest">
              Demonstration Submission Successful
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-950">
              Quote Request Generated
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Your demonstration quote request has been stored in local mock state and assigned a reference ID.
            </p>
          </div>

          {/* Reference Badge */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-sm mx-auto flex items-center justify-between">
            <div className="text-left">
              <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">
                Quote Reference ID:
              </span>
              <span className="text-xl font-mono font-black text-slate-900 tracking-wider">
                {submittedQuoteId}
              </span>
            </div>

            <button
              type="button"
              onClick={copyQuoteId}
              className="p-2 text-slate-500 hover:text-orange-600 hover:bg-white rounded-lg border border-slate-200 transition-colors"
              title="Copy Quote ID"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>

          {/* Summary Checklist */}
          <div className="bg-slate-50/80 rounded-xl p-5 text-left text-xs text-slate-600 space-y-2 border border-slate-100 max-w-md mx-auto">
            <div className="flex justify-between">
              <span className="text-slate-500">Product:</span>
              <span className="font-bold text-slate-800">{selectedProduct.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Quantity:</span>
              <span className="font-bold text-slate-800">{productConfiguration.quantity.toLocaleString()} pcs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Contact:</span>
              <span className="font-bold text-slate-800">{fullName} ({email})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Sample Estimate:</span>
              <span className="font-bold text-orange-600">${estimatedTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Front Artwork:</span>
              <span className="font-mono text-slate-800 truncate max-w-[180px]">
                {frontArtwork.fileName || 'Sample_Front_Proof.png'}
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              type="button"
              onClick={() => navigate('home')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Return to Home</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('catalogue')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore More Products</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      {/* 1. WIZARD STEPPER BAR */}
      <div className="space-y-4">
        <div className="text-center space-y-1">
          <span className="text-2xs font-bold text-orange-600 tracking-widest uppercase">
            Official Prepress Proof &amp; Quote Request
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-950">
            Request a Commercial Print Quote
          </h1>
        </div>

        {/* 4 Steps Indicator */}
        <div className="grid grid-cols-4 gap-2 pt-2">
          {[
            { num: 1, label: 'Specifications & Proof' },
            { num: 2, label: 'Contact Details' },
            { num: 3, label: 'Project Requirements' },
            { num: 4, label: 'Review & Submit' }
          ].map((s) => {
            const isCompleted = step > s.num;
            const isCurrent = step === s.num;
            return (
              <div 
                key={s.num}
                onClick={() => {
                  if (isCompleted) setStep(s.num);
                }}
                className={`p-3 rounded-xl border text-center transition-all ${
                  isCurrent 
                    ? 'border-orange-500 bg-orange-50/70 text-orange-800 ring-2 ring-orange-500/20' 
                    : isCompleted 
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-800 cursor-pointer' 
                    : 'border-slate-200 bg-slate-50 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-2xs font-bold ${
                    isCurrent ? 'bg-orange-600 text-white' : isCompleted ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {isCompleted ? '✓' : s.num}
                  </span>
                </div>
                <span className="text-2xs font-bold hidden sm:block truncate">{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. STEP CONTENT CARDS */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
        {/* STEP 1: SPECIFICATIONS & ARTWORK VERIFICATION */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Step 1: Verify Specifications &amp; Proof</h3>
                <p className="text-xs text-slate-500">
                  Review the selected product, configuration options, and uploaded artwork.
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigate('product-detail', selectedProduct.id)}
                className="text-xs font-semibold text-orange-600 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Change Specs</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Specifications Summary */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xs font-bold text-orange-600 uppercase tracking-wider">
                    {selectedProduct.category}
                  </span>
                  <span className="text-3xs px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-semibold">
                    {productConfiguration.turnaround.toUpperCase()} TURNAROUND
                  </span>
                </div>

                <h4 className="text-base font-extrabold text-slate-900">{selectedProduct.name}</h4>

                <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200">
                  <p>Quantity: <strong className="text-slate-900">{productConfiguration.quantity.toLocaleString()} units</strong></p>
                  <p>Orientation: <strong className="text-slate-900 capitalize">{productConfiguration.orientation}</strong></p>
                  <p>Sides: <strong className="text-slate-900">{productConfiguration.printingSides === 'double' ? 'Double Sided (4/4)' : 'Single Sided (4/0)'}</strong></p>
                  <p>Stock: <strong className="text-slate-900">{productConfiguration.paperStock}</strong></p>
                  <p>Coating: <strong className="text-slate-900">{productConfiguration.coating}</strong></p>
                  {productConfiguration.envelopes && productConfiguration.envelopes !== 'none' && (
                    <p>Envelopes: <strong className="text-slate-900">{productConfiguration.envelopes}</strong></p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
                  <span className="text-xs text-slate-500">Sample Price Estimate:</span>
                  <span className="text-xl font-extrabold text-slate-900">${estimatedTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Artwork Proofs Summary */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <span className="text-2xs font-bold text-slate-500 uppercase tracking-wider block">
                  Uploaded Artwork Proofs
                </span>

                <div className="grid grid-cols-2 gap-3">
                  {/* Front Thumbnail */}
                  <div className="space-y-1">
                    <span className="text-3xs font-semibold text-slate-500 block">Front Side:</span>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-300 relative shadow-2xs">
                      {frontArtwork.previewUrl ? (
                        <img src={frontArtwork.previewUrl} alt="Front proof" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xs text-slate-400 p-2 text-center">
                          Default Sample
                        </div>
                      )}
                    </div>
                    <p className="text-3xs text-slate-600 truncate mt-1">
                      {frontArtwork.fileName || 'Sample_Front_Foil.svg'}
                    </p>
                  </div>

                  {/* Back Thumbnail */}
                  {selectedProduct.supportsFrontAndBack && (
                    <div className="space-y-1">
                      <span className="text-3xs font-semibold text-slate-500 block">Back / Inside:</span>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-slate-300 relative shadow-2xs">
                        {backArtwork.previewUrl ? (
                          <img src={backArtwork.previewUrl} alt="Back proof" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-4xs text-slate-400 p-2 text-center">
                            Default Sample
                          </div>
                        )}
                      </div>
                      <p className="text-3xs text-slate-600 truncate mt-1">
                        {backArtwork.fileName || 'Sample_Back_Proof.svg'}
                      </p>
                    </div>
                  )}
                </div>

                <div className="text-3xs text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200 flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Free automated 300 DPI pre-flight verification on quote submission.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: CUSTOMER CONTACT & DELIVERY DETAILS */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-base font-bold text-slate-900">Step 2: Customer &amp; Delivery Information</h3>
              <p className="text-xs text-slate-500">
                Tell us where to direct the proof approval and whether you prefer Houston pickup or shipping.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Elena Rostova"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full p-3 rounded-xl border text-xs outline-none transition-all ${
                    errors.fullName ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-orange-500'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-2xs text-rose-500 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Company / Organization <span className="text-slate-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bayou City Enterprises LLC"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:border-orange-500 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Work Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="elena@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-3 rounded-xl border text-xs outline-none transition-all ${
                    errors.email ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-orange-500'
                  }`}
                />
                {errors.email && (
                  <p className="text-2xs text-rose-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone Number <span className="text-slate-400">(Optional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="(713) 555-0199"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:border-orange-500 text-xs outline-none"
                />
              </div>
            </div>

            {/* Delivery Method Selection */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-bold text-slate-700">
                Delivery / Pickup Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryMethod('houston-pickup')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    deliveryMethod === 'houston-pickup'
                      ? 'border-orange-500 bg-orange-50/70 ring-2 ring-orange-500/20'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <span className="font-bold text-xs text-slate-900 block">Houston Lab Pickup</span>
                  <span className="text-3xs text-slate-500">Free at 8926 Clarkcrest St</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryMethod('texas-shipping')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    deliveryMethod === 'texas-shipping'
                      ? 'border-orange-500 bg-orange-50/70 ring-2 ring-orange-500/20'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <span className="font-bold text-xs text-slate-900 block">Texas Courier / UPS</span>
                  <span className="text-3xs text-slate-500">Local ground delivery</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryMethod('nationwide-freight')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    deliveryMethod === 'nationwide-freight'
                      ? 'border-orange-500 bg-orange-50/70 ring-2 ring-orange-500/20'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <span className="font-bold text-xs text-slate-900 block">Nationwide Freight</span>
                  <span className="text-3xs text-slate-500">UPS / FedEx across U.S.</span>
                </button>
              </div>
            </div>

            {/* Address fields if shipping */}
            {deliveryMethod !== 'houston-pickup' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="sm:col-span-2">
                  <label className="block text-2xs font-bold text-slate-700 mb-1">
                    Street Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="1200 Louisiana St, Suite 4400"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-xs outline-none bg-white"
                  />
                  {errors.address && (
                    <p className="text-2xs text-rose-500 mt-1">{errors.address}</p>
                  )}
                </div>

                <div>
                  <label className="block text-2xs font-bold text-slate-700 mb-1">
                    City &amp; Zip Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Houston"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-xs outline-none bg-white"
                    />
                    <input
                      type="text"
                      placeholder="77002"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-24 p-2.5 rounded-lg border border-slate-300 text-xs outline-none bg-white"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 3: PROJECT REQUIREMENTS & TIMELINE */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-base font-bold text-slate-900">Step 3: Project Requirements &amp; Timeline</h3>
              <p className="text-xs text-slate-500">
                Help our prepress estimators understand your exact timeline, target budget, and special finishing requests.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  placeholder="e.g. Annual Executive Gala Folded Cards"
                  className="w-full p-3 rounded-xl border border-slate-300 focus:border-orange-500 text-xs outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Hard In-Hand Deadline <span className="text-slate-400">(Optional)</span>
                  </label>
                  <input
                    type="date"
                    value={targetDeadline}
                    onChange={(e) => setTargetDeadline(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:border-orange-500 text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Estimated Budget Range
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:border-orange-500 text-xs outline-none bg-white"
                  >
                    <option value="Under $100">Under $100</option>
                    <option value="$100 - $300">$100 - $300</option>
                    <option value="$300 - $750">$300 - $750</option>
                    <option value="$750 - $2,000">$750 - $2,000</option>
                    <option value="$2,000+">$2,000+ (High Volume)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Special Finishing, Foil Stamping, or Color Matching Instructions
                </label>
                <textarea
                  rows={4}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="e.g. Please verify PMS gold foil alignment over the emblem. We also need blank white matching envelopes included."
                  className="w-full p-3 rounded-xl border border-slate-300 focus:border-orange-500 text-xs outline-none leading-relaxed"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: FINAL REVIEW & SUBMISSION */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-base font-bold text-slate-900">Step 4: Final Review &amp; Submit</h3>
              <p className="text-xs text-slate-500">
                Confirm your details before generating the demonstration quote reference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Summary Box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-2xs font-bold text-orange-600 uppercase tracking-wider block">
                  Configuration Summary
                </span>
                <h4 className="text-base font-extrabold text-slate-900">{selectedProduct.name}</h4>
                <div className="text-xs text-slate-600 space-y-1">
                  <p>Quantity: <strong className="text-slate-900">{productConfiguration.quantity.toLocaleString()} pcs</strong></p>
                  <p>Orientation: <strong className="text-slate-900 capitalize">{productConfiguration.orientation}</strong></p>
                  <p>Stock: <strong className="text-slate-900">{productConfiguration.paperStock}</strong></p>
                  <p>Coating: <strong className="text-slate-900">{productConfiguration.coating}</strong></p>
                  <p>Turnaround: <strong className="text-slate-900 capitalize">{productConfiguration.turnaround}</strong></p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <span className="text-xs text-slate-500 block">Estimated Demo Total:</span>
                  <span className="text-2xl font-black text-slate-900">${estimatedTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Right Summary Box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-2xs font-bold text-slate-500 uppercase tracking-wider block">
                  Customer &amp; Files Summary
                </span>
                <div className="text-xs text-slate-600 space-y-1">
                  <p>Name: <strong className="text-slate-900">{fullName}</strong></p>
                  {companyName && <p>Company: <strong className="text-slate-900">{companyName}</strong></p>}
                  <p>Email: <strong className="text-slate-900">{email}</strong></p>
                  {phone && <p>Phone: <strong className="text-slate-900">{phone}</strong></p>}
                  <p>Delivery: <strong className="text-slate-900 capitalize">{deliveryMethod.replace('-', ' ')}</strong></p>
                  <p>Front Artwork: <span className="font-mono text-slate-800">{frontArtwork.fileName || 'Sample_Front_Foil.svg'}</span></p>
                  {selectedProduct.supportsFrontAndBack && (
                    <p>Back Artwork: <span className="font-mono text-slate-800">{backArtwork.fileName || 'Sample_Back_Proof.svg'}</span></p>
                  )}
                </div>
              </div>
            </div>

            {/* Demo Notice */}
            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-2xs text-orange-900 space-y-1">
              <p className="font-bold">Demonstration Prototype Notice:</p>
              <p>
                Submitting this form stores a demonstration quote record in browser local state and generates a demo reference code. No real financial transaction will occur.
              </p>
            </div>
          </div>
        )}

        {/* 3. STEPPER FOOTER BUTTONS */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrevStep}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-orange-600/20 cursor-pointer"
            >
              <span>Continue to Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-8 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white text-sm font-extrabold flex items-center gap-2 shadow-xl shadow-orange-600/30 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Submit Demonstration Quote</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
