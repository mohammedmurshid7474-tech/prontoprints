import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  X, 
  ArrowRight, 
  SlidersHorizontal, 
  ChevronRight, 
  Check, 
  Clock, 
  Sparkles,
  Layers,
  FileCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CataloguePage: React.FC = () => {
  const { 
    navigate, 
    searchQuery, 
    setSearchQuery, 
    selectedCategoryFilter, 
    setSelectedCategoryFilter,
    categories,
    products
  } = useApp();

  const [sortBy, setSortBy] = useState<'featured' | 'alpha-asc' | 'alpha-desc' | 'price-asc' | 'price-desc'>('featured');
  const [filterFrontBackOnly, setFilterFrontBackOnly] = useState<boolean>(false);
  const [filterRushOnly, setFilterRushOnly] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Filter and sort the products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category match
      if (selectedCategoryFilter !== 'All' && product.category !== selectedCategoryFilter) {
        return false;
      }

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesTag = product.tagline.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCategory && !matchesTag) {
          return false;
        }
      }

      // Front & Back filter
      if (filterFrontBackOnly && !product.supportsFrontAndBack) {
        return false;
      }

      // Rush filter
      if (filterRushOnly && !product.rushAvailable) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'alpha-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'alpha-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'price-asc') return a.sampleBasePrice - b.sampleBasePrice;
      if (sortBy === 'price-desc') return b.sampleBasePrice - a.sampleBasePrice;
      // Default: featured priority (greeting cards, business cards first)
      if (a.id === 'greeting-cards') return -1;
      if (b.id === 'greeting-cards') return 1;
      if (a.id === 'business-cards') return -1;
      if (b.id === 'business-cards') return 1;
      return 0;
    });
  }, [selectedCategoryFilter, searchQuery, filterFrontBackOnly, filterRushOnly, sortBy]);

  const resetFilters = () => {
    setSelectedCategoryFilter('All');
    setSearchQuery('');
    setFilterFrontBackOnly(false);
    setFilterRushOnly(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      {/* 1. BREADCRUMBS & TITLE */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button 
            type="button" 
            onClick={() => navigate('home')}
            className="hover:text-orange-600 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold">Product Catalogue</span>
          {selectedCategoryFilter !== 'All' && (
            <>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-orange-600 font-bold">{selectedCategoryFilter}</span>
            </>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-3xl font-black text-slate-950">Commercial Print Products</h1>
            <p className="text-xs text-slate-500 mt-1">
              Browse all 65 commercial printing solutions with interactive 3D front &amp; back proofing.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of {products.length} items</span>
          </div>
        </div>
      </div>

      {/* 2. TOP FILTER BAR (SEARCH, CATEGORY PILLS, SORT DROPDOWN) */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Filter by product name, finish, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-xs text-slate-800 bg-white shadow-2xs outline-none"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Mobile Filter Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="lg:hidden px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 text-xs font-bold flex items-center gap-2 shadow-2xs"
          >
            <Filter className="w-4 h-4 text-orange-600" />
            <span>Filters</span>
          </button>

          {/* Quick Front & Back filter pill */}
          <button
            type="button"
            onClick={() => setFilterFrontBackOnly(!filterFrontBackOnly)}
            className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 cursor-pointer ${
              filterFrontBackOnly
                ? 'bg-orange-50 border-orange-500 text-orange-700'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-orange-500" />
            <span>Front &amp; Back Upload ({products.filter(p => p.supportsFrontAndBack).length})</span>
          </button>

          {/* Quick Same-day Rush filter pill */}
          <button
            type="button"
            onClick={() => setFilterRushOnly(!filterRushOnly)}
            className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 cursor-pointer ${
              filterRushOnly
                ? 'bg-amber-50 border-amber-500 text-amber-800'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>Same-Day Ready</span>
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 pl-2">
            <span className="text-2xs text-slate-500 hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-2 px-3 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-slate-800 outline-none focus:border-orange-500 shadow-2xs cursor-pointer"
            >
              <option value="featured">Featured / Recommended</option>
              <option value="alpha-asc">Name: A to Z</option>
              <option value="alpha-desc">Name: Z to A</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. MAIN CATALOGUE GRID WITH DESKTOP SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block space-y-6">
          {/* Category Filter List */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-3">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              Product Categories
            </h3>

            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setSelectedCategoryFilter('All')}
                className={`w-full px-3 py-2 rounded-lg text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  selectedCategoryFilter === 'All'
                    ? 'bg-orange-600 text-white shadow-2xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>All Categories</span>
                <span className={`text-2xs ${selectedCategoryFilter === 'All' ? 'text-orange-200' : 'text-slate-400'}`}>
                  {products.length}
                </span>
              </button>

              {categories.map((cat) => {
                const count = products.filter(p => p.category === cat.name).length;
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => setSelectedCategoryFilter(cat.name)}
                    className={`w-full px-3 py-2 rounded-lg text-left text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                      selectedCategoryFilter === cat.name
                        ? 'bg-orange-600 text-white shadow-2xs'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="truncate">{cat.name}</span>
                    <span className={`text-2xs shrink-0 ${selectedCategoryFilter === cat.name ? 'text-orange-200' : 'text-slate-400'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feature Filters */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              Proofing &amp; Features
            </h3>

            <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={filterFrontBackOnly}
                onChange={(e) => setFilterFrontBackOnly(e.target.checked)}
                className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500 border-slate-300"
              />
              <span>Front &amp; Back Proofing</span>
            </label>

            <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={filterRushOnly}
                onChange={(e) => setFilterRushOnly(e.target.checked)}
                className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500 border-slate-300"
              />
              <span>Houston Rush Available</span>
            </label>

            {(selectedCategoryFilter !== 'All' || searchQuery || filterFrontBackOnly || filterRushOnly) && (
              <button
                type="button"
                onClick={resetFilters}
                className="w-full py-2 text-xs font-bold text-orange-600 hover:bg-orange-50 rounded-lg transition-colors border border-dashed border-orange-300 mt-2"
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Houston Pickup Help Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3 shadow-md">
            <span className="text-3xs font-extrabold text-orange-400 uppercase tracking-widest block">
              Houston Facility
            </span>
            <h4 className="font-extrabold text-sm">Need a custom dimension or die-cut?</h4>
            <p className="text-2xs text-slate-400 leading-relaxed">
              Our prepress specialists can configure unique shapes, foil embossing, or custom sizes not listed.
            </p>
            <button
              type="button"
              onClick={() => navigate('contact')}
              className="w-full py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold cursor-pointer"
            >
              Contact Our Lab
            </button>
          </div>
        </aside>

        {/* Product Cards Grid Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Active Filter Chips */}
          {(selectedCategoryFilter !== 'All' || searchQuery || filterFrontBackOnly || filterRushOnly) && (
            <div className="flex flex-wrap items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
              <span className="text-slate-500 font-semibold">Active filters:</span>
              {selectedCategoryFilter !== 'All' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 font-bold text-2xs">
                  {selectedCategoryFilter}
                  <button onClick={() => setSelectedCategoryFilter('All')}>✕</button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-200 text-slate-800 font-bold text-2xs">
                  "{searchQuery}"
                  <button onClick={() => setSearchQuery('')}>✕</button>
                </span>
              )}
              {filterFrontBackOnly && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 font-bold text-2xs">
                  Front &amp; Back Only
                  <button onClick={() => setFilterFrontBackOnly(false)}>✕</button>
                </span>
              )}
              {filterRushOnly && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-2xs">
                  Rush Ready
                  <button onClick={() => setFilterRushOnly(false)}>✕</button>
                </span>
              )}
              <button
                type="button"
                onClick={resetFilters}
                className="text-orange-600 font-bold text-2xs hover:underline ml-auto"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Empty Results State */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No products match your current filters. Try searching for "cards", "banner", or selecting "All Categories".
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="px-6 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs hover:bg-orange-700 shadow-sm cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            /* Product Cards */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate('product-detail', product.id)}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xl hover:border-orange-500 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Simulated Mockup Thumbnail */}
                    <div className="relative aspect-[16/10] bg-slate-900 p-4 flex items-center justify-center overflow-hidden">
                      <div className="w-4/5 aspect-[7/5] bg-white rounded shadow-md p-2 flex flex-col justify-between text-slate-900 group-hover:scale-105 transition-transform">
                        <span className="text-4xs font-bold text-orange-600 uppercase">PRONTO PRINTS</span>
                        <div className="text-center my-auto">
                          <span className="text-xs font-bold block">{product.name}</span>
                          <span className="text-4xs text-slate-500">Interactive Proof Ready</span>
                        </div>
                        <span className="text-4xs text-slate-400 text-right">Houston, TX</span>
                      </div>

                      {product.badge && (
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-orange-600 text-white text-3xs font-extrabold shadow-sm">
                          {product.badge}
                        </span>
                      )}

                      {product.supportsFrontAndBack && (
                        <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-full bg-slate-950/80 text-slate-200 border border-slate-700 text-3xs font-semibold">
                          Front &amp; Back
                        </span>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-4 space-y-2">
                      <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">
                        {product.category}
                      </span>
                      <h3 className="font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors text-sm">
                        {product.name}
                      </h3>
                      <p className="text-2xs text-slate-500 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      {/* Feature Pills */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {product.features.slice(0, 2).map((feat, i) => (
                          <span key={i} className="text-3xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                    <div>
                      <span className="text-3xs text-slate-400 block">Sample Estimate:</span>
                      <span className="text-sm font-extrabold text-slate-900">
                        From ${product.sampleBasePrice}
                      </span>
                    </div>

                    <span className="px-3 py-1.5 rounded-lg bg-orange-50 group-hover:bg-orange-600 text-orange-600 group-hover:text-white text-xs font-bold transition-colors">
                      Configure →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
