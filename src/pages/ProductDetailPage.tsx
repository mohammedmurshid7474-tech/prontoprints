import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Sparkles, 
  FileText, 
  HelpCircle, 
  Layers, 
  CheckCircle2, 
  Send,
  Check,
  User,
  Mail,
  Phone,
  Building,
  Calendar,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MockupViewer } from '../components/mockups/MockupViewer';
import { ArtworkUploader } from '../components/mockups/ArtworkUploader';
import { ProductConfigurator } from '../components/configurator/ProductConfigurator';
import { getProductById } from '../data/products';

export const ProductDetailPage: React.FC = () => {
  const { productSlug } = useParams<{ productSlug?: string }>();
  const { 
    selectedProduct, 
    setSelectedProductId, 
    navigate, 
    setSelectedCategoryFilter,
    productConfiguration,
    calculateEstimatedPrice,
    frontArtwork,
    backArtwork,
    submitQuoteRequest
  } = useApp();

  const [activeTab, setActiveTab] = useState<'specs' | 'artwork-prep' | 'delivery'>('specs');

  // Embedded Quote Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'houston-pickup' | 'texas-shipping' | 'nationwide-freight'>('houston-pickup');
  const [targetDeadline, setTargetDeadline] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuoteId, setSubmittedQuoteId] = useState<string | null>(null);

  useEffect(() => {
    if (productSlug && productSlug !== selectedProduct.id) {
      const prod = getProductById(productSlug);
      if (prod) {
        setSelectedProductId(productSlug);
      }
    }
  }, [productSlug, selectedProduct.id, setSelectedProductId]);

  const estimatedTotal = calculateEstimatedPrice();

  // Selected specs labels
  const selectedSizeName = selectedProduct.sizes.find(s => s.id === productConfiguration.size)?.name || productConfiguration.size;
  const selectedStockName = selectedProduct.paperStocks.find(s => s.id === productConfiguration.paperStock)?.name || productConfiguration.paperStock;
  const selectedCoatingName = selectedProduct.coatings.find(c => c.id === productConfiguration.coating)?.name || productConfiguration.coating;

  const handleEmbeddedQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setFormError('Please enter a valid business email address.');
      return;
    }
    if (!phone.trim()) {
      setFormError('Please provide a contact phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const newId = submitQuoteRequest({
        customer: {
          fullName,
          companyName,
          email,
          phone,
          deliveryMethod,
          city: 'Houston',
          zipCode: '77063'
        },
        projectDetails: {
          projectTitle: `${selectedProduct.name} Commercial Print Order`,
          projectDescription: `Configured via product page: Size ${selectedSizeName}, Stock ${selectedStockName}, Finish ${selectedCoatingName}, Quantity ${productConfiguration.quantity} pcs, Turnaround ${productConfiguration.turnaround}.`,
          targetDeadline,
          additionalNotes
        }
      });
      setIsSubmitting(false);
      setSubmittedQuoteId(newId);
    }, 400);
  };

  const handleResetForm = () => {
    setSubmittedQuoteId(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setCompanyName('');
    setAdditionalNotes('');
    setTargetDeadline('');
  };

  // Related products objects
  const relatedProducts = (selectedProduct.relatedProductIds || [])
    .map(id => getProductById(id))
    .filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-12">
      {/* 1. BREADCRUMBS */}
      <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
        <button 
          type="button" 
          onClick={() => navigate('home')}
          className="hover:text-orange-600 transition-colors"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button
          type="button"
          onClick={() => {
            setSelectedCategoryFilter(selectedProduct.category);
            navigate('catalogue');
          }}
          className="hover:text-orange-600 transition-colors"
        >
          {selectedProduct.category}
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-bold">{selectedProduct.name}</span>
      </div>

      {/* 2. MAIN 2-COLUMN EXPERIENCE: MOCKUP & UPLOADER (LEFT) | CONFIGURATOR (RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN (COL 1-7): 3D MOCKUP STAGE & ARTWORK DROPZONES */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Photorealistic Mockup Viewer */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <span>Live Physical Mockup Preview</span>
              </span>
              <span className="text-3xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                ● Real-Time Rendering
              </span>
            </div>

            <MockupViewer />
          </div>

          {/* Front and Back Artwork Dropzone Area */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">
                Front &amp; Back Artwork Upload
              </h3>
              <button
                type="button"
                onClick={() => navigate('artwork-guide')}
                className="text-3xs font-semibold text-orange-600 hover:underline flex items-center gap-1"
              >
                <HelpCircle className="w-3 h-3" />
                <span>Bleed &amp; Resolution Guide</span>
              </button>
            </div>

            <ArtworkUploader showBackSide={selectedProduct.supportsFrontAndBack} />
          </div>
        </div>

        {/* RIGHT COLUMN (COL 8-12): INTERACTIVE PRODUCT CONFIGURATOR */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          <ProductConfigurator />
        </div>
      </div>

      {/* 3. PRODUCT SPECIFICATIONS & PREPRESS DETAILS TABS */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        {/* Tab Headers */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-600">
          <button
            type="button"
            onClick={() => setActiveTab('specs')}
            className={`px-6 py-4 border-b-2 transition-all cursor-pointer ${
              activeTab === 'specs' 
                ? 'border-orange-600 text-orange-600 bg-white' 
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Product Specifications
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('artwork-prep')}
            className={`px-6 py-4 border-b-2 transition-all cursor-pointer ${
              activeTab === 'artwork-prep' 
                ? 'border-orange-600 text-orange-600 bg-white' 
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Artwork &amp; Bleed Guidelines
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('delivery')}
            className={`px-6 py-4 border-b-2 transition-all cursor-pointer ${
              activeTab === 'delivery' 
                ? 'border-orange-600 text-orange-600 bg-white' 
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Houston Pickup &amp; Shipping
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8">
          {activeTab === 'specs' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Description &amp; Use Cases</h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                  {selectedProduct.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h5 className="text-xs font-bold text-slate-900">Recommended Commercial Uses</h5>
                  <p className="text-2xs text-slate-600 leading-relaxed">
                    {selectedProduct.recommendedUse}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h5 className="text-xs font-bold text-slate-900">Key Production Features</h5>
                  <ul className="text-2xs text-slate-600 space-y-1">
                    {selectedProduct.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'artwork-prep' && (
            <div className="space-y-4 max-w-3xl text-xs text-slate-600 leading-relaxed">
              <h4 className="text-sm font-bold text-slate-900">Standard Prepress File Preparation</h4>
              <p>
                To achieve razor-sharp commercial print results at our Houston facility, please follow our standard prepress checklist:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="font-bold text-slate-900 block text-xs">Resolution: 300 DPI</span>
                  <p className="text-2xs text-slate-500 mt-1">
                    Ensure all raster images and photos are at least 300 DPI at 100% scale.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="font-bold text-slate-900 block text-xs">Bleed: 0.125" (1/8")</span>
                  <p className="text-2xs text-slate-500 mt-1">
                    Extend background graphics 1/8 inch past the trim line to eliminate white borders.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="font-bold text-slate-900 block text-xs">Color: CMYK Mode</span>
                  <p className="text-2xs text-slate-500 mt-1">
                    Convert RGB artwork to CMYK (SWOP v2) to ensure accurate color matching.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'delivery' && (
            <div className="space-y-4 max-w-3xl text-xs text-slate-600 leading-relaxed">
              <h4 className="text-sm font-bold text-slate-900">Houston Facility &amp; Nationwide Delivery</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                    <Truck className="w-4 h-4 text-orange-600" />
                    <span>Free Houston Local Pickup</span>
                  </div>
                  <p className="text-2xs text-slate-500">
                    Pick up your completed print jobs at our Houston lab at 8926 Clarkcrest St, Suite C, Houston, TX 77063.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Texas Courier &amp; Nationwide UPS</span>
                  </div>
                  <p className="text-2xs text-slate-500">
                    Overnight courier service across Austin, Dallas, and San Antonio, or UPS Ground nationwide.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. EMBEDDED STREAMLINED QUOTE REQUEST FORM */}
      <div 
        id="embedded-quote-section" 
        className="bg-white rounded-2xl border-2 border-orange-500/30 p-6 md:p-10 shadow-lg scroll-mt-24 space-y-8"
      >
        {submittedQuoteId ? (
          /* Success State */
          <div className="text-center py-8 px-4 space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-8 h-8" />
            </div>
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                Quote Request Received
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Thank You, {fullName}!
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Your quote inquiry for <span className="font-bold text-slate-900">{selectedProduct.name}</span> has been logged with our Houston production team.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Reference Number:</span>
                <span className="font-mono font-bold text-slate-900">{submittedQuoteId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Product:</span>
                <span className="font-semibold text-slate-800">{selectedProduct.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Quantity:</span>
                <span className="font-semibold text-slate-800">{productConfiguration.quantity.toLocaleString()} pcs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated Sample Total:</span>
                <span className="font-bold text-orange-600">${estimatedTotal.toFixed(2)}</span>
              </div>
            </div>

            <p className="text-2xs text-slate-500">
              Our prepress team will verify your specifications and email your official quote &amp; PDF proof to <span className="font-semibold text-slate-700">{email}</span> within 1-2 hours.
            </p>

            <button
              type="button"
              onClick={handleResetForm}
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Request Another Quote
            </button>
          </div>
        ) : (
          /* Clean Quote Form with Auto-Detected Context */
          <>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 text-3xs font-extrabold uppercase tracking-wide">
                  Fast Commercial Quote
                </span>
                <span className="text-3xs text-slate-400">• Houston Print Facility</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-950">
                Get an Official Quote for {selectedProduct.name}
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl">
                Fill in your contact information below. Your selected product specifications and any uploaded artwork files above are automatically detected and attached.
              </p>
            </div>

            {/* Auto-Detection Badge Pill */}
            <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 space-y-2">
              <span className="text-3xs font-black text-orange-800 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                <span>Auto-Detected Order Specifications</span>
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-2xs text-slate-700">
                <div>
                  <span className="text-3xs text-slate-400 block uppercase">Category</span>
                  <span className="font-bold text-slate-900">{selectedProduct.category}</span>
                </div>
                <div>
                  <span className="text-3xs text-slate-400 block uppercase">Product</span>
                  <span className="font-bold text-slate-900">{selectedProduct.name}</span>
                </div>
                <div>
                  <span className="text-3xs text-slate-400 block uppercase">Size &amp; Stock</span>
                  <span className="font-bold text-slate-900 truncate block">{selectedSizeName} • {selectedStockName}</span>
                </div>
                <div>
                  <span className="text-3xs text-slate-400 block uppercase">Quantity</span>
                  <span className="font-bold text-orange-600">{productConfiguration.quantity.toLocaleString()} pcs (~${estimatedTotal.toFixed(2)})</span>
                </div>
              </div>
              {frontArtwork.fileName && (
                <div className="pt-2 border-t border-orange-200/60 text-3xs text-slate-600 flex items-center gap-1.5">
                  <FileText className="w-3 h-3 text-orange-600" />
                  <span>Attached Artwork: <span className="font-semibold text-slate-900">{frontArtwork.fileName}</span></span>
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleEmbeddedQuoteSubmit} className="space-y-6">
              {formError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sjenkins@company.com"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. (713) 555-0144"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Company / Organization
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Houston Energy Partners"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                    />
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Fulfillment Preference
                  </label>
                  <select
                    value={deliveryMethod}
                    onChange={(e) => setDeliveryMethod(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none bg-white"
                  >
                    <option value="houston-pickup">Houston Facility Pickup (Clarkcrest St - Free)</option>
                    <option value="texas-shipping">Texas Ground Delivery</option>
                    <option value="nationwide-freight">Nationwide Freight Delivery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                    Target In-Hands Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={targetDeadline}
                      onChange={(e) => setTargetDeadline(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none bg-white"
                    />
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                  Special Instructions / Bindery Notes
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="Provide any custom specifications, PMS Pantone color codes, folding requirements, or rush timing requests..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                  />
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-3xs text-slate-500">
                  No credit card required. Our prepress specialists will inspect your files and email an official quote.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-sm shadow-md shadow-orange-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Quote Request...' : 'Send Quote Request'}</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      {/* 5. RELATED PRODUCTS ROW */}
      {relatedProducts.length > 0 && (
        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-bold text-slate-900">Related Products in this Category</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedProducts.slice(0, 4).map((rel) => {
              if (!rel) return null;
              return (
                <div
                  key={rel.id}
                  onClick={() => navigate('product-detail', rel.id)}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:border-orange-500 shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <span className="text-3xs text-orange-600 font-bold uppercase">{rel.category}</span>
                    <h4 className="font-bold text-slate-900 group-hover:text-orange-600 text-xs">{rel.name}</h4>
                    <p className="text-3xs text-slate-500 line-clamp-2">{rel.shortDescription}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-2xs mt-3">
                    <span className="font-bold text-slate-900">From ${rel.sampleBasePrice}</span>
                    <span className="text-orange-600 font-semibold group-hover:underline">View →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
