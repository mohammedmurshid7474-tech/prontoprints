import React, { useState } from 'react';
import { 
  Sliders, 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  FileText, 
  MessageSquare, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Eye, 
  Printer, 
  Save, 
  Check, 
  Send,
  Layers,
  Sparkles,
  ArrowRight,
  Truck,
  Plus,
  Trash2,
  Edit,
  DollarSign,
  Tag,
  FolderPlus,
  Package,
  X
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { QuoteRequest, QuoteStatus, Product, CategoryItem, ProductOption } from '../../types';

export const AdminDashboard: React.FC = () => {
  const { 
    quoteRequests, 
    updateQuoteStatus, 
    addStaffNote, 
    deleteQuoteRequest,
    categories,
    products,
    addCategory,
    updateCategory,
    deleteCategory,
    addProduct,
    updateProduct,
    updateProductPrice,
    deleteProduct,
    showToast 
  } = useApp();

  // Active Tab
  const [activeTab, setActiveTab] = useState<'quotes' | 'products' | 'categories'>('quotes');

  // ==========================================
  // TAB 1: QUOTES STATE
  // ==========================================
  const [quoteSearchQuery, setQuoteSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedQuoteId, setSelectedQuoteId] = useState<string>(quoteRequests[0]?.id || '');
  const [newStatus, setNewStatus] = useState<QuoteStatus>('Under Review');
  const [internalNoteText, setInternalNoteText] = useState<string>('');
  const [customPriceInput, setCustomPriceInput] = useState<string>('');

  const selectedQuote = quoteRequests.find(q => q.id === selectedQuoteId) || quoteRequests[0] || null;

  React.useEffect(() => {
    if (selectedQuote) {
      setNewStatus(selectedQuote.status);
      setCustomPriceInput(selectedQuote.estimatedTotal?.toString() || '');
    }
  }, [selectedQuoteId, selectedQuote]);

  const filteredQuotes = quoteRequests.filter(q => {
    if (statusFilter !== 'All' && q.status !== statusFilter) return false;
    if (quoteSearchQuery.trim() !== '') {
      const query = quoteSearchQuery.toLowerCase();
      const matchId = q.id.toLowerCase().includes(query);
      const matchClient = q.customer.fullName.toLowerCase().includes(query);
      const matchProduct = q.product.name.toLowerCase().includes(query);
      const matchCategory = (q.product.category || '').toLowerCase().includes(query);
      const matchCompany = (q.customer.companyName || '').toLowerCase().includes(query);
      if (!matchId && !matchClient && !matchProduct && !matchCompany && !matchCategory) return false;
    }
    return true;
  });

  const handleStatusUpdate = () => {
    if (!selectedQuote) return;
    const price = customPriceInput ? parseFloat(customPriceInput) : undefined;
    updateQuoteStatus(selectedQuote.id, newStatus, undefined, price);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedQuote || !internalNoteText.trim()) return;
    addStaffNote(selectedQuote.id, internalNoteText.trim());
    setInternalNoteText('');
  };

  // ==========================================
  // TAB 2: PRODUCTS & PRICING STATE
  // ==========================================
  const [productSearch, setProductSearch] = useState('');
  const [productCategoryFilter, setProductCategoryFilter] = useState('All');
  const [quickPrices, setQuickPrices] = useState<{ [productId: string]: string }>({});

  // Product Add / Edit Modal & Options Tab State
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [modalTab, setModalTab] = useState<'details' | 'sizes' | 'stocks' | 'coatings'>('details');

  const [prodFormName, setProdFormName] = useState('');
  const [prodFormCategory, setProdFormCategory] = useState(categories[0]?.name || 'Marketing Products');
  const [prodFormBasePrice, setProdFormBasePrice] = useState('45');
  const [prodFormTagline, setProdFormTagline] = useState('');
  const [prodFormShortDesc, setProdFormShortDesc] = useState('');
  const [prodFormTurnaround, setProdFormTurnaround] = useState('2-4 Business Days');

  // Product Design & Process Options: Sizes, Paper Stocks, Coatings
  const [prodFormSizes, setProdFormSizes] = useState<ProductOption[]>([]);
  const [newSizeName, setNewSizeName] = useState('');
  const [newSizeModifier, setNewSizeModifier] = useState('0');

  const [prodFormStocks, setProdFormStocks] = useState<ProductOption[]>([]);
  const [newStockName, setNewStockName] = useState('');
  const [newStockModifier, setNewStockModifier] = useState('0');

  const [prodFormCoatings, setProdFormCoatings] = useState<ProductOption[]>([]);
  const [newCoatingName, setNewCoatingName] = useState('');
  const [newCoatingModifier, setNewCoatingModifier] = useState('0');

  const filteredProductsList = products.filter(p => {
    if (productCategoryFilter !== 'All' && p.category !== productCategoryFilter) return false;
    if (productSearch.trim() !== '') {
      const q = productSearch.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q);
    }
    return true;
  });

  const handleOpenAddProduct = () => {
    setEditingProductId(null);
    setModalTab('details');
    setProdFormName('');
    setProdFormCategory(categories[0]?.name || 'Marketing Products');
    setProdFormBasePrice('45');
    setProdFormTagline('Commercial Grade Printing');
    setProdFormShortDesc('Custom printed with vibrant CMYK ink and crisp finishing.');
    setProdFormTurnaround('2-4 Business Days');
    setProdFormSizes([
      { id: 'size-std', name: 'Standard Finished Size (5" x 7")', priceModifier: 0, badge: 'Standard' },
      { id: 'size-large', name: 'Large Format Size (6" x 9")', priceModifier: 15, badge: 'Large' }
    ]);
    setProdFormStocks([
      { id: 'stock-16pt', name: '16pt Premium Heavy Cover', priceModifier: 0, badge: 'Popular' },
      { id: 'stock-14pt', name: '14pt Classic Uncoated Cardstock', priceModifier: -5 }
    ]);
    setProdFormCoatings([
      { id: 'coat-matte', name: 'Matte / Silk Protective Coating', priceModifier: 0 },
      { id: 'coat-gloss', name: 'High Gloss UV Finish', priceModifier: 10, badge: 'Vibrant' }
    ]);
    setNewSizeName('');
    setNewSizeModifier('0');
    setNewStockName('');
    setNewStockModifier('0');
    setNewCoatingName('');
    setNewCoatingModifier('0');
    setIsProductModalOpen(true);
  };

  const handleOpenEditProduct = (prod: Product) => {
    setEditingProductId(prod.id);
    setModalTab('details');
    setProdFormName(prod.name);
    setProdFormCategory(prod.category);
    setProdFormBasePrice(prod.sampleBasePrice?.toString() || '45');
    setProdFormTagline(prod.tagline || '');
    setProdFormShortDesc(prod.shortDescription || '');
    setProdFormTurnaround(prod.standardTurnaround || '2-4 Business Days');
    setProdFormSizes(prod.sizes && prod.sizes.length > 0 ? JSON.parse(JSON.stringify(prod.sizes)) : [
      { id: 'size-std', name: 'Standard Finished Size', priceModifier: 0 }
    ]);
    setProdFormStocks(prod.paperStocks && prod.paperStocks.length > 0 ? JSON.parse(JSON.stringify(prod.paperStocks)) : [
      { id: 'stock-std', name: '16pt Premium Heavy Cover', priceModifier: 0 }
    ]);
    setProdFormCoatings(prod.coatings && prod.coatings.length > 0 ? JSON.parse(JSON.stringify(prod.coatings)) : [
      { id: 'coat-std', name: 'Matte / Silk Protective Coating', priceModifier: 0 }
    ]);
    setNewSizeName('');
    setNewSizeModifier('0');
    setNewStockName('');
    setNewStockModifier('0');
    setNewCoatingName('');
    setNewCoatingModifier('0');
    setIsProductModalOpen(true);
  };

  // Option Handlers: Sizes
  const handleAddSizeOption = () => {
    if (!newSizeName.trim()) {
      showToast('Please enter a size or dimension name.', 'error');
      return;
    }
    const newOption: ProductOption = {
      id: `size-${Date.now()}`,
      name: newSizeName.trim(),
      priceModifier: parseFloat(newSizeModifier) || 0
    };
    setProdFormSizes(prev => [...prev, newOption]);
    setNewSizeName('');
    setNewSizeModifier('0');
    showToast(`Added size option "${newOption.name}".`, 'success');
  };

  const handleUpdateSizeItem = (index: number, field: 'name' | 'priceModifier', value: string) => {
    setProdFormSizes(prev => {
      const next = [...prev];
      if (field === 'priceModifier') {
        const num = parseFloat(value);
        next[index] = { ...next[index], priceModifier: isNaN(num) ? 0 : num };
      } else {
        next[index] = { ...next[index], name: value };
      }
      return next;
    });
  };

  const handleRemoveSizeItem = (index: number) => {
    if (prodFormSizes.length <= 1) {
      showToast('A product must have at least one selectable size option.', 'error');
      return;
    }
    setProdFormSizes(prev => prev.filter((_, i) => i !== index));
  };

  // Option Handlers: Paper Stocks
  const handleAddStockOption = () => {
    if (!newStockName.trim()) {
      showToast('Please enter a paper stock or material label.', 'error');
      return;
    }
    const newOption: ProductOption = {
      id: `stock-${Date.now()}`,
      name: newStockName.trim(),
      priceModifier: parseFloat(newStockModifier) || 0
    };
    setProdFormStocks(prev => [...prev, newOption]);
    setNewStockName('');
    setNewStockModifier('0');
    showToast(`Added paper stock "${newOption.name}".`, 'success');
  };

  const handleUpdateStockItem = (index: number, field: 'name' | 'priceModifier', value: string) => {
    setProdFormStocks(prev => {
      const next = [...prev];
      if (field === 'priceModifier') {
        const num = parseFloat(value);
        next[index] = { ...next[index], priceModifier: isNaN(num) ? 0 : num };
      } else {
        next[index] = { ...next[index], name: value };
      }
      return next;
    });
  };

  const handleRemoveStockItem = (index: number) => {
    if (prodFormStocks.length <= 1) {
      showToast('A product must have at least one paper stock material.', 'error');
      return;
    }
    setProdFormStocks(prev => prev.filter((_, i) => i !== index));
  };

  // Option Handlers: Coatings & Finishes
  const handleAddCoatingOption = () => {
    if (!newCoatingName.trim()) {
      showToast('Please enter a coating or finish label.', 'error');
      return;
    }
    const newOption: ProductOption = {
      id: `coat-${Date.now()}`,
      name: newCoatingName.trim(),
      priceModifier: parseFloat(newCoatingModifier) || 0
    };
    setProdFormCoatings(prev => [...prev, newOption]);
    setNewCoatingName('');
    setNewCoatingModifier('0');
    showToast(`Added finish option "${newOption.name}".`, 'success');
  };

  const handleUpdateCoatingItem = (index: number, field: 'name' | 'priceModifier', value: string) => {
    setProdFormCoatings(prev => {
      const next = [...prev];
      if (field === 'priceModifier') {
        const num = parseFloat(value);
        next[index] = { ...next[index], priceModifier: isNaN(num) ? 0 : num };
      } else {
        next[index] = { ...next[index], name: value };
      }
      return next;
    });
  };

  const handleRemoveCoatingItem = (index: number) => {
    if (prodFormCoatings.length <= 1) {
      showToast('A product must have at least one surface finish.', 'error');
      return;
    }
    setProdFormCoatings(prev => prev.filter((_, i) => i !== index));
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prodFormName.trim()) {
      showToast('Product name is required.', 'error');
      return;
    }

    const priceNum = parseFloat(prodFormBasePrice) || 45;
    const finalSizes = prodFormSizes.length > 0 ? prodFormSizes : [{ id: 'std-size', name: 'Standard Finished Size', priceModifier: 0 }];
    const finalStocks = prodFormStocks.length > 0 ? prodFormStocks : [{ id: 'std-stock', name: '16pt Premium Heavy Cover', priceModifier: 0 }];
    const finalCoatings = prodFormCoatings.length > 0 ? prodFormCoatings : [{ id: 'std-coat', name: 'Matte / Silk Protective Coating', priceModifier: 0 }];

    if (editingProductId) {
      // Update
      updateProduct(editingProductId, {
        name: prodFormName.trim(),
        category: prodFormCategory,
        sampleBasePrice: priceNum,
        tagline: prodFormTagline,
        shortDescription: prodFormShortDesc,
        standardTurnaround: prodFormTurnaround,
        sizes: finalSizes,
        paperStocks: finalStocks,
        coatings: finalCoatings
      });
    } else {
      // Create New Product
      const newSlug = prodFormName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const newProductObj: Product = {
        id: newSlug || `prod-${Date.now()}`,
        name: prodFormName.trim(),
        category: prodFormCategory,
        categorySlug: prodFormCategory.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        tagline: prodFormTagline || 'Custom Commercial Print Production',
        shortDescription: prodFormShortDesc || 'Professional commercial grade printing with precision finishing.',
        fullDescription: 'Produced with industry-leading offset and digital presses at our Houston facility. Precision trimmed, inspected by prepress specialists, and packaged for commercial distribution.',
        features: ['Full CMYK color press printing', 'Standard turnaround with rush available', 'Prepress inspection included'],
        mockupType: 'flat-sheet',
        supportsFrontAndBack: true,
        defaultOrientation: 'horizontal',
        sizes: finalSizes,
        paperStocks: finalStocks,
        coatings: finalCoatings,
        quantities: [100, 250, 500, 1000, 2500],
        standardTurnaround: prodFormTurnaround || '2-4 Business Days',
        rushAvailable: true,
        sampleBasePrice: priceNum,
        recommendedUse: 'Commercial branding, retail marketing, and business promotions.',
        relatedProductIds: []
      };
      addProduct(newProductObj);
    }

    setIsProductModalOpen(false);
  };

  const handleQuickPriceSave = (productId: string) => {
    const val = quickPrices[productId];
    if (val !== undefined && val !== '') {
      const num = parseFloat(val);
      if (!isNaN(num)) {
        updateProductPrice(productId, num);
      }
    }
  };

  // ==========================================
  // TAB 3: CATEGORIES STATE
  // ==========================================
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingCategorySlug, setEditingCategorySlug] = useState<string | null>(null);
  const [catFormName, setCatFormName] = useState('');
  const [catFormSlug, setCatFormSlug] = useState('');
  const [catFormDesc, setCatFormDesc] = useState('');

  const handleOpenAddCategory = () => {
    setEditingCategorySlug(null);
    setCatFormName('');
    setCatFormSlug('');
    setCatFormDesc('');
    setIsCategoryModalOpen(true);
  };

  const handleOpenEditCategory = (cat: CategoryItem) => {
    setEditingCategorySlug(cat.slug);
    setCatFormName(cat.name);
    setCatFormSlug(cat.slug);
    setCatFormDesc(cat.description);
    setIsCategoryModalOpen(true);
  };

  const handleSaveCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!catFormName.trim()) {
      showToast('Category name is required.', 'error');
      return;
    }

    if (editingCategorySlug) {
      updateCategory(editingCategorySlug, {
        name: catFormName.trim(),
        description: catFormDesc.trim()
      });
    } else {
      addCategory({
        name: catFormName.trim(),
        slug: catFormSlug || catFormName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        description: catFormDesc.trim()
      });
    }

    setIsCategoryModalOpen(false);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-blue-950 text-blue-300 border-blue-800';
      case 'Under Review':
        return 'bg-amber-950 text-amber-300 border-amber-800';
      case 'Quote Sent':
        return 'bg-purple-950 text-purple-300 border-purple-800';
      case 'In Progress':
        return 'bg-orange-950 text-orange-300 border-orange-800';
      case 'Completed':
        return 'bg-emerald-950 text-emerald-300 border-emerald-800';
      case 'Cancelled':
      default:
        return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. TOP ADMIN NAVIGATION BAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('quotes')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'quotes'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Quotes Inbox</span>
            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-white text-3xs">
              {quoteRequests.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'products'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Products &amp; Pricing</span>
            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-white text-3xs">
              {products.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('categories')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'categories'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FolderPlus className="w-4 h-4" />
            <span>Categories Manager</span>
            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-white text-3xs">
              {categories.length}
            </span>
          </button>
        </div>

        <div className="text-2xs text-slate-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Production Sync Active</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* VIEW 1: QUOTES INBOX WORKSPACE */}
      {/* ======================================================== */}
      {activeTab === 'quotes' && (
        <div className="space-y-6">
          {/* Top Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">Total Inquiries</span>
              <span className="text-2xl font-black text-white mt-1 block">{quoteRequests.length}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-3xs font-bold text-blue-400 uppercase tracking-wider block">New Requests</span>
              <span className="text-2xl font-black text-blue-400 mt-1 block">
                {quoteRequests.filter(q => q.status === 'New').length}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-3xs font-bold text-amber-400 uppercase tracking-wider block">Pre-Flight Review</span>
              <span className="text-2xl font-black text-amber-400 mt-1 block">
                {quoteRequests.filter(q => q.status === 'Under Review').length}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-3xs font-bold text-orange-400 uppercase tracking-wider block">In Production</span>
              <span className="text-2xl font-black text-orange-400 mt-1 block">
                {quoteRequests.filter(q => q.status === 'In Progress').length}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-3xs font-bold text-emerald-400 uppercase tracking-wider block">Completed</span>
              <span className="text-2xl font-black text-emerald-400 mt-1 block">
                {quoteRequests.filter(q => q.status === 'Completed').length}
              </span>
            </div>
          </div>

          {/* 2-Column Quotes Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Quotes Queue */}
            <div className="lg:col-span-5 bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-orange-500" />
                  <span>Incoming Customer Inquiries</span>
                </h3>
                <span className="text-3xs text-slate-400">{filteredQuotes.length} filtered</span>
              </div>

              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search quote ID, client name, product..."
                  value={quoteSearchQuery}
                  onChange={(e) => setQuoteSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              </div>

              {/* Status Filter */}
              <div className="flex flex-wrap gap-1.5 text-3xs font-bold">
                {['All', 'New', 'Under Review', 'In Progress', 'Completed', 'Cancelled'].map(st => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                      statusFilter === st
                        ? 'bg-orange-600 text-white border-orange-500'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* List */}
              <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
                {filteredQuotes.length === 0 ? (
                  <div className="p-8 text-center bg-slate-950 rounded-xl border border-dashed border-slate-800 text-slate-500 text-xs">
                    No matching quotes found.
                  </div>
                ) : (
                  filteredQuotes.map(quote => {
                    const isSelected = selectedQuote?.id === quote.id;
                    return (
                      <div
                        key={quote.id}
                        onClick={() => setSelectedQuoteId(quote.id)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-orange-500 bg-orange-950/20 ring-1 ring-orange-500/40 shadow-sm'
                            : 'border-slate-800 bg-slate-950 hover:border-slate-700 hover:bg-slate-800/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-xs font-black text-white">{quote.id}</span>
                          <span className={`px-2 py-0.5 rounded-full text-3xs font-bold border ${getStatusBadge(quote.status)}`}>
                            {quote.status}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-slate-200 truncate">
                          {quote.customer.fullName}
                          {quote.customer.companyName && (
                            <span className="text-slate-400 font-normal"> • {quote.customer.companyName}</span>
                          )}
                        </p>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-3xs text-slate-400">
                          <span className="text-orange-400 font-semibold truncate max-w-[170px]">
                            {quote.product.name}
                          </span>
                          <span className="font-bold text-slate-200">
                            ${quote.estimatedTotal?.toFixed(2) || '0.00'}
                          </span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Right: Detailed Quote Inspector */}
            <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-6">
              {selectedQuote ? (
                <>
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-lg font-black text-white">{selectedQuote.id}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-3xs font-bold border ${getStatusBadge(selectedQuote.status)}`}>
                          {selectedQuote.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-300">
                        {selectedQuote.projectDetails?.projectTitle || `${selectedQuote.product.name} Production`}
                      </h4>
                      <p className="text-3xs text-slate-500 mt-0.5">
                        Received: {new Date(selectedQuote.createdAt).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-3xs font-bold text-slate-400 uppercase tracking-widest block">
                          Quoted Total
                        </span>
                        <span className="text-2xl font-black text-white">
                          ${selectedQuote.estimatedTotal?.toFixed(2) || '0.00'}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteQuoteRequest(selectedQuote.id)}
                        className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-950/40 rounded-lg transition-colors cursor-pointer"
                        title="Delete Quote"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Customer Contact Details */}
                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-2 text-xs">
                    <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">
                      Customer &amp; Fulfillment
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <p className="font-bold text-white flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-orange-400" />
                          <span>{selectedQuote.customer.fullName}</span>
                        </p>
                        {selectedQuote.customer.companyName && (
                          <p className="text-slate-400 text-3xs pl-5">{selectedQuote.customer.companyName}</p>
                        )}
                        <p className="text-slate-300 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-slate-500" />
                          <a href={`mailto:${selectedQuote.customer.email}`} className="hover:text-orange-400">
                            {selectedQuote.customer.email}
                          </a>
                        </p>
                        {selectedQuote.customer.phone && (
                          <p className="text-slate-300 flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-slate-500" />
                            <span>{selectedQuote.customer.phone}</span>
                          </p>
                        )}
                      </div>

                      <div className="space-y-1">
                        <p className="font-bold text-slate-200 flex items-center gap-1.5">
                          <Truck className="w-3.5 h-3.5 text-orange-400" />
                          <span className="capitalize">{selectedQuote.customer.deliveryMethod.replace(/-/g, ' ')}</span>
                        </p>
                        {selectedQuote.projectDetails?.targetDeadline && (
                          <p className="text-slate-400 text-3xs flex items-center gap-1.5 pl-5">
                            <Clock className="w-3 h-3 text-amber-400" />
                            <span>Deadline: {selectedQuote.projectDetails.targetDeadline}</span>
                          </p>
                        )}
                        {selectedQuote.projectDetails?.additionalNotes && (
                          <p className="text-slate-300 text-3xs bg-slate-900 p-2 rounded border border-slate-800 mt-2">
                            "{selectedQuote.projectDetails.additionalNotes}"
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Auto-Detected Product Specs */}
                  <div className="space-y-2">
                    <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">
                      Auto-Detected Specifications
                    </span>
                    <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div>
                        <span className="text-3xs text-slate-500 uppercase block">Category</span>
                        <span className="font-bold text-white truncate block">{selectedQuote.product.category}</span>
                      </div>
                      <div>
                        <span className="text-3xs text-slate-500 uppercase block">Product</span>
                        <span className="font-bold text-white truncate block">{selectedQuote.product.name}</span>
                      </div>
                      <div>
                        <span className="text-3xs text-slate-500 uppercase block">Quantity</span>
                        <span className="font-bold text-orange-400">{selectedQuote.configuration.quantity.toLocaleString()} pcs</span>
                      </div>
                      <div>
                        <span className="text-3xs text-slate-500 uppercase block">Size</span>
                        <span className="font-bold text-white capitalize truncate block">{selectedQuote.configuration.size}</span>
                      </div>
                    </div>
                  </div>

                  {/* Uploaded Artwork Preview */}
                  <div className="space-y-2">
                    <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">
                      Customer Uploaded Artwork Files
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-3xs font-bold text-orange-400 uppercase block">Front Artwork</span>
                        <div className="w-full h-28 bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center">
                          {selectedQuote.artwork.front.previewUrl ? (
                            <img src={selectedQuote.artwork.front.previewUrl} alt="Front" className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-3xs text-slate-500">No front artwork</span>
                          )}
                        </div>
                        <p className="text-3xs text-slate-400 truncate">
                          {selectedQuote.artwork.front.fileName || 'Front_Proof.pdf'}
                        </p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-3xs font-bold text-orange-400 uppercase block">Back / Inside Artwork</span>
                        <div className="w-full h-28 bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center">
                          {selectedQuote.artwork.back?.previewUrl ? (
                            <img src={selectedQuote.artwork.back.previewUrl} alt="Back" className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-3xs text-slate-500">Single-sided / Blank back</span>
                          )}
                        </div>
                        <p className="text-3xs text-slate-400 truncate">
                          {selectedQuote.artwork.back?.fileName || 'Single-sided (Blank Back)'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Status & Pricing Update Form */}
                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-3">
                    <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">
                      Assign Production Status &amp; Pricing
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-3xs font-bold text-slate-400 uppercase mb-1">Status</label>
                        <select
                          value={newStatus}
                          onChange={(e) => setNewStatus(e.target.value as QuoteStatus)}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                        >
                          <option value="New">New</option>
                          <option value="Under Review">Under Review</option>
                          <option value="Quote Sent">Quote Sent</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-3xs font-bold text-slate-400 uppercase mb-1">Final Price ($)</label>
                        <input
                          type="number"
                          step="0.01"
                          value={customPriceInput}
                          onChange={(e) => setCustomPriceInput(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleStatusUpdate}
                      className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Status &amp; Pricing</span>
                    </button>
                  </div>

                  {/* Prepress Notes */}
                  <div className="space-y-3">
                    <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">
                      Internal Prepress Log
                    </span>
                    <div className="space-y-1.5 max-h-36 overflow-y-auto">
                      {(selectedQuote.staffNotes || []).map((note, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-2xs text-slate-300">
                          {note}
                        </div>
                      ))}
                    </div>
                    <form onSubmit={handleAddNote} className="flex gap-2">
                      <input
                        type="text"
                        value={internalNoteText}
                        onChange={(e) => setInternalNoteText(e.target.value)}
                        placeholder="Log staff note (e.g. 'Proof emailed to client on 10/18')..."
                        className="flex-1 px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
                      >
                        Post
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="p-12 text-center text-slate-500 text-xs">
                  Select a quote from the left queue to view details.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* VIEW 2: PRODUCTS & PRICING MANAGEMENT */}
      {/* ======================================================== */}
      {activeTab === 'products' && (
        <div className="space-y-6">
          {/* Action Header */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-5 rounded-2xl">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Package className="w-4 h-4 text-orange-500" />
                <span>Product Catalog &amp; Pricing Suite</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Manage commercial print products, change base prices, assign categories, or add new offerings.
              </p>
            </div>

            <button
              type="button"
              onClick={handleOpenAddProduct}
              className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Product</span>
            </button>
          </div>

          {/* Search & Category Filter */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-slate-900 border border-slate-800 p-4 rounded-xl">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search products by title or description..."
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
              />
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-2xs font-bold text-slate-400 uppercase">Category:</span>
              <select
                value={productCategoryFilter}
                onChange={(e) => setProductCategoryFilter(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
              >
                <option value="All">All Categories ({products.length})</option>
                {categories.map(c => (
                  <option key={c.slug} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 text-3xs font-extrabold uppercase border-b border-slate-800">
                  <tr>
                    <th className="px-5 py-3.5">Product Name</th>
                    <th className="px-4 py-3.5">Category</th>
                    <th className="px-4 py-3.5">Base Price ($)</th>
                    <th className="px-4 py-3.5">Standard Turnaround</th>
                    <th className="px-5 py-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {filteredProductsList.map((prod) => {
                    const priceValue = quickPrices[prod.id] !== undefined ? quickPrices[prod.id] : prod.sampleBasePrice?.toString();
                    return (
                      <tr key={prod.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="px-5 py-3.5">
                          <p className="font-bold text-white text-xs">{prod.name}</p>
                          <p className="text-3xs text-slate-500 line-clamp-1 mt-0.5">{prod.shortDescription}</p>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-3xs font-semibold">
                            {prod.category}
                          </span>
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-400 text-xs">$</span>
                            <input
                              type="number"
                              step="0.01"
                              value={priceValue}
                              onChange={(e) => setQuickPrices({ ...quickPrices, [prod.id]: e.target.value })}
                              className="w-20 px-2 py-1 text-xs rounded bg-slate-950 border border-slate-700 text-white font-bold focus:outline-none focus:border-orange-500"
                            />
                            {quickPrices[prod.id] !== undefined && quickPrices[prod.id] !== prod.sampleBasePrice?.toString() && (
                              <button
                                type="button"
                                onClick={() => handleQuickPriceSave(prod.id)}
                                className="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-3xs transition-colors cursor-pointer"
                              >
                                Save
                              </button>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3.5 text-slate-400 text-3xs">
                          {prod.standardTurnaround}
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleOpenEditProduct(prod)}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                              title="Edit Product"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (window.confirm(`Are you sure you want to delete "${prod.name}"?`)) {
                                  deleteProduct(prod.id);
                                }
                              }}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-900/60 text-slate-400 hover:text-red-300 transition-colors cursor-pointer"
                              title="Delete Product"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* VIEW 3: CATEGORIES MANAGER */}
      {/* ======================================================== */}
      {activeTab === 'categories' && (
        <div className="space-y-6">
          {/* Action Header */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-5 rounded-2xl">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FolderPlus className="w-4 h-4 text-orange-500" />
                <span>Categories Manager</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Add new product categories, rename existing groupings, or delete empty categories. Changes reflect instantly on customer navigation.
              </p>
            </div>

            <button
              type="button"
              onClick={handleOpenAddCategory}
              className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Category</span>
            </button>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const count = products.filter(p => p.category === cat.name).length;
              return (
                <div
                  key={cat.slug}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all space-y-4 shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">{cat.name}</h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-600/20 text-orange-400 text-3xs font-extrabold border border-orange-500/30">
                        {count} Products
                      </span>
                    </div>
                    <p className="text-2xs text-slate-400 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                    <p className="text-3xs text-slate-500 font-mono">
                      slug: /{cat.slug}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => handleOpenEditCategory(cat)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Edit className="w-3 h-3 text-orange-400" />
                      <span>Edit Category</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (count > 0) {
                          if (!window.confirm(`Warning: This category contains ${count} products. Are you sure you want to delete "${cat.name}"?`)) {
                            return;
                          }
                        } else {
                          if (!window.confirm(`Delete category "${cat.name}"?`)) return;
                        }
                        deleteCategory(cat.slug);
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-950/60 text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                      title="Delete Category"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL: ADD / EDIT PRODUCT WITH PROCESS OPTIONS */}
      {/* ======================================================== */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-orange-600/20 text-orange-400 border border-orange-500/30">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {editingProductId ? `Edit Product: ${prodFormName || 'Commercial Item'}` : 'Create New Commercial Product'}
                  </h3>
                  <p className="text-3xs text-slate-400">
                    Configure base specs, category, finished sizes, paper stocks, and protective coatings.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsProductModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs Inside Modal */}
            <div className="flex border-b border-slate-800 bg-slate-950/40 px-5 pt-3 gap-2 overflow-x-auto">
              <button
                type="button"
                onClick={() => setModalTab('details')}
                className={`pb-2.5 px-3 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  modalTab === 'details'
                    ? 'border-orange-500 text-orange-400'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>1. General Details</span>
              </button>

              <button
                type="button"
                onClick={() => setModalTab('sizes')}
                className={`pb-2.5 px-3 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  modalTab === 'sizes'
                    ? 'border-orange-500 text-orange-400'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>2. Sizes &amp; Dimensions</span>
                <span className="px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 text-3xs font-mono">
                  {prodFormSizes.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setModalTab('stocks')}
                className={`pb-2.5 px-3 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  modalTab === 'stocks'
                    ? 'border-orange-500 text-orange-400'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>3. Paper Stocks</span>
                <span className="px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 text-3xs font-mono">
                  {prodFormStocks.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setModalTab('coatings')}
                className={`pb-2.5 px-3 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  modalTab === 'coatings'
                    ? 'border-orange-500 text-orange-400'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>4. Finishes &amp; Coatings</span>
                <span className="px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 text-3xs font-mono">
                  {prodFormCoatings.length}
                </span>
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleSaveProduct} className="flex-1 overflow-y-auto p-6 space-y-5 text-xs">
              {/* TAB 1: GENERAL DETAILS */}
              {modalTab === 'details' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-3xs font-bold text-slate-300 uppercase mb-1">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={prodFormName}
                      onChange={(e) => setProdFormName(e.target.value)}
                      placeholder="e.g. Metallic Gold Foil Postcards"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-3xs font-bold text-slate-300 uppercase mb-1">
                        Category Assignment *
                      </label>
                      <select
                        value={prodFormCategory}
                        onChange={(e) => setProdFormCategory(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                      >
                        {categories.map(c => (
                          <option key={c.slug} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-3xs font-bold text-slate-300 uppercase mb-1">
                        Sample Base Price ($) *
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        required
                        value={prodFormBasePrice}
                        onChange={(e) => setProdFormBasePrice(e.target.value)}
                        placeholder="45.00"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-orange-500 font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-3xs font-bold text-slate-300 uppercase mb-1">
                      Tagline / Subheading
                    </label>
                    <input
                      type="text"
                      value={prodFormTagline}
                      onChange={(e) => setProdFormTagline(e.target.value)}
                      placeholder="e.g. Ultra-Heavyweight 16pt Cover with Foil Accents"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-3xs font-bold text-slate-300 uppercase mb-1">
                      Short Description (Card &amp; Search Preview)
                    </label>
                    <textarea
                      rows={2}
                      value={prodFormShortDesc}
                      onChange={(e) => setProdFormShortDesc(e.target.value)}
                      placeholder="Summary for product card and catalog listing..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-3xs font-bold text-slate-300 uppercase mb-1">
                      Standard Production Turnaround
                    </label>
                    <input
                      type="text"
                      value={prodFormTurnaround}
                      onChange={(e) => setProdFormTurnaround(e.target.value)}
                      placeholder="e.g. 2-4 Business Days"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: SIZES & DIMENSIONS */}
              {modalTab === 'sizes' && (
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/60 text-2xs text-blue-300">
                    <p className="font-semibold text-white mb-0.5">Customer Size Options</p>
                    These sizes are presented to clients on the product detail page and quote configurator. Use the price modifier to add or subtract from the baseline price (+/- $).
                  </div>

                  {/* Existing Sizes List */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-12 gap-2 text-3xs font-bold uppercase text-slate-400 px-1">
                      <span className="col-span-8">Size / Dimension Label</span>
                      <span className="col-span-3">Price Adj ($)</span>
                      <span className="col-span-1 text-right">Delete</span>
                    </div>

                    {prodFormSizes.map((sizeItem, idx) => (
                      <div key={sizeItem.id || idx} className="grid grid-cols-12 gap-2 items-center bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                        <div className="col-span-8">
                          <input
                            type="text"
                            value={sizeItem.name}
                            onChange={(e) => handleUpdateSizeItem(idx, 'name', e.target.value)}
                            placeholder="e.g. Standard 5x7 folded"
                            className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                          />
                        </div>
                        <div className="col-span-3">
                          <div className="flex items-center gap-1">
                            <span className="text-3xs text-slate-500">$</span>
                            <input
                              type="number"
                              step="0.01"
                              value={sizeItem.priceModifier || 0}
                              onChange={(e) => handleUpdateSizeItem(idx, 'priceModifier', e.target.value)}
                              className="w-full px-2 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white font-bold focus:outline-none focus:border-orange-500"
                            />
                          </div>
                        </div>
                        <div className="col-span-1 text-right">
                          <button
                            type="button"
                            onClick={() => handleRemoveSizeItem(idx)}
                            className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-950/40 rounded-lg transition-colors cursor-pointer"
                            title="Remove Size"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Size Box */}
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-dashed border-slate-800 space-y-3">
                    <span className="text-3xs font-bold text-orange-400 uppercase tracking-wider block">
                      + Add New Size Option
                    </span>
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-7">
                        <input
                          type="text"
                          value={newSizeName}
                          onChange={(e) => setNewSizeName(e.target.value)}
                          placeholder="e.g. 8.5 x 11 Custom Large"
                          className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div className="col-span-3">
                        <input
                          type="number"
                          step="0.01"
                          value={newSizeModifier}
                          onChange={(e) => setNewSizeModifier(e.target.value)}
                          placeholder="0.00"
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div className="col-span-2">
                        <button
                          type="button"
                          onClick={handleAddSizeOption}
                          className="w-full py-1.5 px-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-3xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: PAPER STOCKS */}
              {modalTab === 'stocks' && (
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-900/60 text-2xs text-purple-300">
                    <p className="font-semibold text-white mb-0.5">Paper Stocks &amp; Materials</p>
                    Manage card stocks, weights, and premium substrates available for this product selection process.
                  </div>

                  {/* Existing Stocks List */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-12 gap-2 text-3xs font-bold uppercase text-slate-400 px-1">
                      <span className="col-span-8">Paper Stock / Weight Label</span>
                      <span className="col-span-3">Price Adj ($)</span>
                      <span className="col-span-1 text-right">Delete</span>
                    </div>

                    {prodFormStocks.map((stockItem, idx) => (
                      <div key={stockItem.id || idx} className="grid grid-cols-12 gap-2 items-center bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                        <div className="col-span-8">
                          <input
                            type="text"
                            value={stockItem.name}
                            onChange={(e) => handleUpdateStockItem(idx, 'name', e.target.value)}
                            placeholder="e.g. 16pt Premium Heavy Cover"
                            className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                          />
                        </div>
                        <div className="col-span-3">
                          <div className="flex items-center gap-1">
                            <span className="text-3xs text-slate-500">$</span>
                            <input
                              type="number"
                              step="0.01"
                              value={stockItem.priceModifier || 0}
                              onChange={(e) => handleUpdateStockItem(idx, 'priceModifier', e.target.value)}
                              className="w-full px-2 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white font-bold focus:outline-none focus:border-orange-500"
                            />
                          </div>
                        </div>
                        <div className="col-span-1 text-right">
                          <button
                            type="button"
                            onClick={() => handleRemoveStockItem(idx)}
                            className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-950/40 rounded-lg transition-colors cursor-pointer"
                            title="Remove Stock"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Stock Box */}
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-dashed border-slate-800 space-y-3">
                    <span className="text-3xs font-bold text-orange-400 uppercase tracking-wider block">
                      + Add New Paper Stock
                    </span>
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-7">
                        <input
                          type="text"
                          value={newStockName}
                          onChange={(e) => setNewStockName(e.target.value)}
                          placeholder="e.g. 100lb Gloss Book with Aqueous"
                          className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div className="col-span-3">
                        <input
                          type="number"
                          step="0.01"
                          value={newStockModifier}
                          onChange={(e) => setNewStockModifier(e.target.value)}
                          placeholder="0.00"
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div className="col-span-2">
                        <button
                          type="button"
                          onClick={handleAddStockOption}
                          className="w-full py-1.5 px-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-3xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: FINISHES & COATINGS */}
              {modalTab === 'coatings' && (
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/60 text-2xs text-emerald-300">
                    <p className="font-semibold text-white mb-0.5">Finishes &amp; Surface Coatings</p>
                    Configure protective coatings, spot UV, lamination, and tactile embellishments selectable by customers.
                  </div>

                  {/* Existing Coatings List */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-12 gap-2 text-3xs font-bold uppercase text-slate-400 px-1">
                      <span className="col-span-8">Finish / Coating Label</span>
                      <span className="col-span-3">Price Adj ($)</span>
                      <span className="col-span-1 text-right">Delete</span>
                    </div>

                    {prodFormCoatings.map((coatItem, idx) => (
                      <div key={coatItem.id || idx} className="grid grid-cols-12 gap-2 items-center bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                        <div className="col-span-8">
                          <input
                            type="text"
                            value={coatItem.name}
                            onChange={(e) => handleUpdateCoatingItem(idx, 'name', e.target.value)}
                            placeholder="e.g. Matte / Dull Protective Finish"
                            className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                          />
                        </div>
                        <div className="col-span-3">
                          <div className="flex items-center gap-1">
                            <span className="text-3xs text-slate-500">$</span>
                            <input
                              type="number"
                              step="0.01"
                              value={coatItem.priceModifier || 0}
                              onChange={(e) => handleUpdateCoatingItem(idx, 'priceModifier', e.target.value)}
                              className="w-full px-2 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white font-bold focus:outline-none focus:border-orange-500"
                            />
                          </div>
                        </div>
                        <div className="col-span-1 text-right">
                          <button
                            type="button"
                            onClick={() => handleRemoveCoatingItem(idx)}
                            className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-950/40 rounded-lg transition-colors cursor-pointer"
                            title="Remove Coating"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Coating Box */}
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-dashed border-slate-800 space-y-3">
                    <span className="text-3xs font-bold text-orange-400 uppercase tracking-wider block">
                      + Add New Finish / Coating
                    </span>
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-7">
                        <input
                          type="text"
                          value={newCoatingName}
                          onChange={(e) => setNewCoatingName(e.target.value)}
                          placeholder="e.g. Spot UV Front Only"
                          className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div className="col-span-3">
                        <input
                          type="number"
                          step="0.01"
                          value={newCoatingModifier}
                          onChange={(e) => setNewCoatingModifier(e.target.value)}
                          placeholder="0.00"
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div className="col-span-2">
                        <button
                          type="button"
                          onClick={handleAddCoatingOption}
                          className="w-full py-1.5 px-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-3xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Footer Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
                <div className="text-3xs text-slate-400 flex items-center gap-2">
                  <span>Options Configured:</span>
                  <span className="font-bold text-white">{prodFormSizes.length} sizes</span> • 
                  <span className="font-bold text-white">{prodFormStocks.length} stocks</span> • 
                  <span className="font-bold text-white">{prodFormCoatings.length} finishes</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsProductModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>{editingProductId ? 'Update Product & Options' : 'Add to Catalog'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL: ADD / EDIT CATEGORY */}
      {/* ======================================================== */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <FolderPlus className="w-4 h-4 text-orange-500" />
                <span>{editingCategorySlug ? 'Edit Category' : 'Create New Category'}</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsCategoryModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCategory} className="space-y-4 text-xs">
              <div>
                <label className="block text-3xs font-bold text-slate-300 uppercase mb-1">
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  value={catFormName}
                  onChange={(e) => setCatFormName(e.target.value)}
                  placeholder="e.g. Hospitality &amp; Menus"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              {!editingCategorySlug && (
                <div>
                  <label className="block text-3xs font-bold text-slate-300 uppercase mb-1">
                    URL Slug (Optional)
                  </label>
                  <input
                    type="text"
                    value={catFormSlug}
                    onChange={(e) => setCatFormSlug(e.target.value)}
                    placeholder="e.g. hospitality-menus"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-orange-500 font-mono text-xs"
                  />
                </div>
              )}

              <div>
                <label className="block text-3xs font-bold text-slate-300 uppercase mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={catFormDesc}
                  onChange={(e) => setCatFormDesc(e.target.value)}
                  placeholder="Brief summary of products in this category..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsCategoryModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold transition-colors shadow-md"
                >
                  {editingCategorySlug ? 'Update Category' : 'Create Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
