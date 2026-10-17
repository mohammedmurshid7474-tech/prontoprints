import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Clock, 
  Printer, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Header: React.FC = () => {
  const { 
    navigate, 
    categories, 
    products, 
    searchQuery, 
    setSearchQuery,
    setSelectedCategoryFilter
  } = useApp();

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('Marketing Products');

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Set default active tab if categories change
  useEffect(() => {
    if (categories.length > 0 && !categories.some(c => c.name === activeCategoryTab)) {
      setActiveCategoryTab(categories[0].name);
    }
  }, [categories, activeCategoryTab]);

  // Filter products for search autocomplete dropdown
  const filteredProducts = searchQuery.trim() === '' 
    ? [] 
    : products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6);

  // Products under active tab in mega-menu
  const activeTabProducts = products.filter(p => p.category === activeCategoryTab);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs">
      {/* 1. TOP CONTACT & ANNOUNCEMENT STRIP */}
      <div className="bg-slate-950 text-slate-300 text-2xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Houston Contact Info */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a 
              href="tel:7132120247" 
              className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-semibold">(713) 212-0247</span>
            </a>
            <a 
              href="mailto:sales@prontoprints.com" 
              className="hidden md:flex items-center gap-1.5 hover:text-orange-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              <span>sales@prontoprints.com</span>
            </a>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <span>8926 Clarkcrest St, Suite C, Houston, TX 77063</span>
            </span>
          </div>

          {/* Quick Announcement */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-950/70 text-orange-400 border border-orange-800/40 font-semibold text-3xs">
              <Clock className="w-3 h-3 text-orange-400" />
              <span>Houston Same-Day Rush Orders Welcome</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo & Tagline */}
        <div 
          onClick={() => navigate('home')}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-linear-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Printer className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-baseline">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">PRONTO</span>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-orange-600">PRINTS</span>
            </div>
            <p className="text-3xs sm:text-2xs font-extrabold tracking-widest text-slate-500 uppercase">
              You Think It! We Ink It!
            </p>
          </div>
        </div>

        {/* Search Bar - Center Desktop */}
        <div className="hidden lg:block relative flex-1 max-w-md mx-6" ref={searchRef}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products (business cards, banners, boxes, flyers...)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              className="w-full pl-9 pr-4 py-2.5 rounded-full border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-xs text-slate-800 placeholder-slate-400 bg-slate-50/70 transition-all outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search Autocomplete Results Dropdown */}
          {isSearchOpen && filteredProducts.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50">
              <div className="p-2 border-b border-slate-100 text-3xs font-bold text-slate-400 uppercase tracking-wider">
                Matching Products ({filteredProducts.length})
              </div>
              <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                {filteredProducts.map(prod => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      navigate('product-detail', prod.id);
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="p-3 hover:bg-orange-50/60 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <p className="text-xs font-bold text-slate-900">{prod.name}</p>
                      <p className="text-2xs text-slate-500">{prod.category}</p>
                    </div>
                    <span className="text-2xs font-semibold text-orange-600">
                      Configure &amp; Quote →
                    </span>
                  </div>
                ))}
              </div>
              <div 
                onClick={() => {
                  setSelectedCategoryFilter('All');
                  navigate('catalogue');
                  setIsSearchOpen(false);
                }}
                className="p-2.5 text-center text-xs font-bold text-orange-600 bg-slate-50 hover:bg-orange-100/60 cursor-pointer border-t border-slate-100"
              >
                View Complete Product Catalogue →
              </div>
            </div>
          )}
        </div>

        {/* Action Controls & Navigation Shortcuts */}
        <div className="flex items-center gap-3">
          {/* Quick Direct Call Button */}
          <a
            href="tel:7132120247"
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950 text-xs font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-orange-600" />
            <span>(713) 212-0247</span>
          </a>

          {/* Primary "Get a Quote" Button */}
          <button
            type="button"
            onClick={() => navigate('quote')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-xs shadow-md shadow-orange-600/20 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get a Fast Quote</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. MAIN NAVIGATION BAR & MEGA MENU TRIGGER */}
      <nav className="hidden lg:block bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between text-xs font-bold">
          <div className="flex items-center">
            {/* All Products Mega-Menu Button */}
            <div className="relative" ref={megaMenuRef}>
              <button
                type="button"
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className={`px-5 py-3.5 bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2.5 transition-colors cursor-pointer select-none ${
                  isMegaMenuOpen ? 'bg-orange-700' : ''
                }`}
              >
                <Menu className="w-4 h-4" />
                <span>EXPLORE PRODUCTS ({products.length})</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega-Menu Dropdown Panel */}
              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 w-[860px] bg-white text-slate-900 shadow-2xl rounded-b-2xl border border-slate-200 overflow-hidden z-50 flex">
                  {/* Left Column: Categories List */}
                  <div className="w-64 bg-slate-50 border-r border-slate-200 p-3 space-y-1">
                    <p className="px-3 py-2 text-3xs font-extrabold uppercase tracking-wider text-slate-400">
                      Product Categories
                    </p>
                    {categories.map((cat) => {
                      const count = products.filter(p => p.category === cat.name).length;
                      return (
                        <button
                          key={cat.slug}
                          type="button"
                          onMouseEnter={() => setActiveCategoryTab(cat.name)}
                          onClick={() => {
                            setSelectedCategoryFilter(cat.name);
                            navigate('catalogue');
                            setIsMegaMenuOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                            activeCategoryTab === cat.name
                              ? 'bg-orange-600 text-white shadow-xs'
                              : 'text-slate-700 hover:bg-slate-200/60'
                          }`}
                        >
                          <span className="truncate pr-2">{cat.name}</span>
                          <span className={`text-3xs px-1.5 py-0.5 rounded-full font-bold ${
                            activeCategoryTab === cat.name ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}

                    <div className="pt-3 border-t border-slate-200">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCategoryFilter('All');
                          navigate('catalogue');
                          setIsMegaMenuOpen(false);
                        }}
                        className="w-full text-center py-2 text-xs font-bold text-orange-600 hover:underline"
                      >
                        View Full Catalogue (All {products.length}) →
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Products Under Active Category */}
                  <div className="flex-1 p-6 space-y-4 max-h-[460px] overflow-y-auto">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <h3 className="text-sm font-bold text-slate-900">
                        {activeCategoryTab}
                      </h3>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCategoryFilter(activeCategoryTab);
                          navigate('catalogue');
                          setIsMegaMenuOpen(false);
                        }}
                        className="text-2xs text-orange-600 hover:underline font-semibold"
                      >
                        Filter by this category →
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {activeTabProducts.map(prod => (
                        <div
                          key={prod.id}
                          onClick={() => {
                            navigate('product-detail', prod.id);
                            setIsMegaMenuOpen(false);
                          }}
                          className="p-3 rounded-xl border border-slate-100 hover:border-orange-300 hover:bg-orange-50/50 transition-all cursor-pointer group"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                              {prod.name}
                            </h4>
                            {prod.badge && (
                              <span className="text-4xs px-1.5 py-0.5 rounded bg-orange-100 text-orange-700 font-semibold">
                                {prod.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-3xs text-slate-500 mt-1 line-clamp-1">
                            {prod.shortDescription}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Navigation Links */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategoryFilter('All');
                  navigate('catalogue');
                }}
                className="px-4 py-3.5 hover:text-orange-400 transition-colors cursor-pointer"
              >
                All Products
              </button>
              <button
                type="button"
                onClick={() => navigate('how-it-works')}
                className="px-4 py-3.5 hover:text-orange-400 transition-colors cursor-pointer"
              >
                How It Works
              </button>
              <button
                type="button"
                onClick={() => navigate('artwork-guide')}
                className="px-4 py-3.5 hover:text-orange-400 transition-colors cursor-pointer"
              >
                Artwork &amp; Bleed Guide
              </button>
              <button
                type="button"
                onClick={() => navigate('faq')}
                className="px-4 py-3.5 hover:text-orange-400 transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <button
                type="button"
                onClick={() => navigate('about')}
                className="px-4 py-3.5 hover:text-orange-400 transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => navigate('contact')}
                className="px-4 py-3.5 hover:text-orange-400 transition-colors cursor-pointer"
              >
                Contact &amp; Location
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-2xs text-slate-400">
            <span>Houston Facility: 8am - 5pm Mon-Fri</span>
          </div>
        </div>
      </nav>

      {/* 4. MOBILE DRAWER NAVIGATION */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-5 py-4 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Search Input for Mobile */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search print products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:border-orange-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>

          {/* Primary Mobile Action */}
          <button
            type="button"
            onClick={() => {
              navigate('quote');
              setIsMobileMenuOpen(false);
            }}
            className="w-full py-3 rounded-xl bg-orange-600 text-white font-bold text-xs shadow-md shadow-orange-600/20 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get a Fast Quote</span>
          </button>

          {/* Mobile Links */}
          <div className="space-y-1 text-xs">
            <button
              type="button"
              onClick={() => { navigate('home'); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-2 font-bold text-slate-900 border-b border-slate-100"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => { setSelectedCategoryFilter('All'); navigate('catalogue'); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-2 font-bold text-slate-900 border-b border-slate-100"
            >
              Complete Product Catalogue ({products.length})
            </button>
            <button
              type="button"
              onClick={() => { navigate('how-it-works'); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-slate-700 border-b border-slate-100"
            >
              How It Works
            </button>
            <button
              type="button"
              onClick={() => { navigate('artwork-guide'); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-slate-700 border-b border-slate-100"
            >
              Artwork &amp; Bleed Setup Guide
            </button>
            <button
              type="button"
              onClick={() => { navigate('faq'); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-slate-700 border-b border-slate-100"
            >
              Frequently Asked Questions
            </button>
            <button
              type="button"
              onClick={() => { navigate('about'); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-slate-700 border-b border-slate-100"
            >
              About Pronto Prints
            </button>
            <button
              type="button"
              onClick={() => { navigate('contact'); setIsMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-slate-700 border-b border-slate-100"
            >
              Contact Us &amp; Location
            </button>
          </div>

          <div className="pt-2 border-t border-slate-200">
            <p className="text-3xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Browse Categories
            </p>
            {categories.map(cat => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => {
                  setSelectedCategoryFilter(cat.name);
                  navigate('catalogue');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-1.5 text-xs text-slate-600 flex justify-between"
              >
                <span>{cat.name}</span>
                <span className="text-slate-400 font-semibold">{products.filter(p => p.category === cat.name).length}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
