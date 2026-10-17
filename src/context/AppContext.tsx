import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Product, 
  ProductConfiguration, 
  ArtworkSide, 
  QuoteRequest, 
  QuoteStatus, 
  TextOverlayConfig,
  CategoryItem
} from '../types';
import { PRODUCTS as INITIAL_PRODUCTS, CATEGORIES as INITIAL_CATEGORIES } from '../data/products';
import { SAMPLE_ARTWORK_PAIRS } from '../data/sampleArtwork';

interface Toast {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}

interface AppContextType {
  currentPage: string;
  navigate: (destination: string, param?: string) => void;

  // Dynamic Catalog: Categories & Products
  categories: CategoryItem[];
  products: Product[];
  addCategory: (category: { name: string; slug: string; description: string }) => void;
  updateCategory: (slug: string, updated: Partial<CategoryItem>) => void;
  deleteCategory: (slug: string) => void;

  addProduct: (product: Product) => void;
  updateProduct: (id: string, updated: Partial<Product>) => void;
  updateProductPrice: (id: string, newBasePrice: number) => void;
  deleteProduct: (id: string) => void;
  getProductById: (id: string) => Product | undefined;

  // Selected Product & Configurator State
  selectedProductId: string;
  selectedProduct: Product;
  setSelectedProductId: (id: string) => void;
  productConfiguration: ProductConfiguration;
  updateConfiguration: (partial: Partial<ProductConfiguration>) => void;
  updateTextOverlay: (partial: Partial<TextOverlayConfig>) => void;
  calculateEstimatedPrice: () => number;

  // Artwork Dropzone Management
  frontArtwork: ArtworkSide;
  backArtwork: ArtworkSide;
  setArtwork: (side: 'front' | 'back', data: Partial<ArtworkSide>) => void;
  clearArtwork: (side: 'front' | 'back') => void;
  loadSampleArtwork: (sampleId?: string) => void;

  // Quotes Management
  quoteRequests: QuoteRequest[];
  submitQuoteRequest: (quoteData: Partial<QuoteRequest>) => string;
  updateQuoteStatus: (quoteId: string, status: QuoteStatus, note?: string, estimatedPrice?: number) => void;
  addStaffNote: (quoteId: string, note: string) => void;
  deleteQuoteRequest: (quoteId: string) => void;

  // Admin Authentication (Strictly Separated for /admin route)
  isAdminAuthenticated: boolean;
  loginAdmin: (username: string, pass: string) => boolean;
  logoutAdmin: () => void;

  // Navigation, Search & Filters
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (category: string) => void;

  // Toasts
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const DEFAULT_TEXT_OVERLAY: TextOverlayConfig = {
  enabled: false,
  text: 'Warmest Wishes & Holiday Greetings',
  fontSize: 32,
  fontFamily: 'serif',
  color: '#FFFFFF',
  positionY: 45,
  alignment: 'center',
  hasShadow: true
};

const INITIAL_FRONT_ARTWORK: ArtworkSide = {
  file: null,
  previewUrl: SAMPLE_ARTWORK_PAIRS[0].frontUrl,
  fileName: SAMPLE_ARTWORK_PAIRS[0].frontName,
  fileSize: '420 KB',
  fileType: 'image/svg+xml',
  aspectRatioMismatch: false,
  fitMode: 'cover'
};

const INITIAL_BACK_ARTWORK: ArtworkSide = {
  file: null,
  previewUrl: SAMPLE_ARTWORK_PAIRS[0].backUrl,
  fileName: SAMPLE_ARTWORK_PAIRS[0].backName,
  fileSize: '310 KB',
  fileType: 'image/svg+xml',
  aspectRatioMismatch: false,
  fitMode: 'cover'
};

const INITIAL_DEMO_QUOTES: QuoteRequest[] = [
  {
    id: 'PP-1001',
    createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
    status: 'In Progress',
    product: INITIAL_PRODUCTS[1], // Business Cards
    configuration: {
      productId: 'business-cards',
      size: 'standard',
      orientation: 'horizontal',
      paperStock: '16pt-premium',
      coating: 'high-gloss-uv',
      quantity: 1000,
      printingSides: 'double',
      turnaround: 'standard'
    },
    artwork: {
      front: {
        fileName: 'Vance_Executive_Front.pdf',
        fileType: 'application/pdf',
        fileSize: '1.8 MB',
        previewUrl: SAMPLE_ARTWORK_PAIRS[1].frontUrl
      },
      back: {
        fileName: 'Vance_Executive_Back.pdf',
        fileType: 'application/pdf',
        fileSize: '1.4 MB',
        previewUrl: SAMPLE_ARTWORK_PAIRS[1].backUrl
      }
    },
    customer: {
      fullName: 'Marcus Vance',
      companyName: 'Apex Energy Partners LLC',
      email: 'mvance@apexenergy.com',
      phone: '(713) 555-0199',
      deliveryMethod: 'houston-pickup',
      address: '1200 Louisiana St, Suite 4400',
      city: 'Houston',
      zipCode: '77002'
    },
    projectDetails: {
      projectTitle: 'Executive Business Cards Rush',
      projectDescription: 'Need 1,000 double-sided premium 16pt business cards for annual shareholder summit in Houston.',
      targetDeadline: '2026-10-25',
      budgetRange: '$50 - $150',
      additionalNotes: 'Please ensure sharp alignment on small typography.'
    },
    staffNotes: [
      'Proof approved by client on 10/16. Sent to offset printing line 2.',
      'Pre-flight check passed: 300 DPI CMYK verified.'
    ],
    estimatedTotal: 68.00,
    lastUpdated: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    id: 'PP-1002',
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
    status: 'Under Review',
    product: INITIAL_PRODUCTS[0], // Greeting Cards
    configuration: {
      productId: 'greeting-cards',
      size: '10x7-folded-5x7',
      orientation: 'horizontal',
      paperStock: '16pt-matte',
      coating: 'spot-uv-outside',
      quantity: 500,
      printingSides: 'double',
      turnaround: 'rush',
      folding: 'half-fold',
      envelopes: 'white-blank',
      textOverlay: { ...DEFAULT_TEXT_OVERLAY }
    },
    artwork: {
      front: {
        fileName: 'Houston_Corporate_Holiday_Cover.png',
        fileType: 'image/png',
        fileSize: '3.2 MB',
        previewUrl: SAMPLE_ARTWORK_PAIRS[0].frontUrl
      },
      back: {
        fileName: 'Inside_Message_Spread.png',
        fileType: 'image/png',
        fileSize: '2.1 MB',
        previewUrl: SAMPLE_ARTWORK_PAIRS[0].backUrl
      }
    },
    customer: {
      fullName: 'Elena Rostova',
      companyName: 'Bayou City Hospitality Group',
      email: 'erostova@bayoucityhospitality.com',
      phone: '(832) 555-8930',
      deliveryMethod: 'texas-shipping',
      address: '2800 Post Oak Blvd',
      city: 'Houston',
      zipCode: '77056'
    },
    projectDetails: {
      projectTitle: 'Annual Corporate Holiday Greeting Cards',
      projectDescription: '500 Scored Folded 5x7 cards with gold foil effect and custom blank matching envelopes.',
      targetDeadline: '2026-11-01',
      budgetRange: '$250 - $500',
      additionalNotes: 'Client requesting spot gloss over the logo emblem.'
    },
    staffNotes: [
      'Artwork inspected by prepress. Recommended Spot UV mask setup.'
    ],
    estimatedTotal: 295.00,
    lastUpdated: new Date(Date.now() - 3600000 * 2).toISOString()
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const routerNavigate = useNavigate();
  const location = useLocation();

  // Dynamic Categories initialized from localStorage or defaults
  const [categories, setCategories] = useState<CategoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('pronto_categories');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_CATEGORIES;
  });

  // Dynamic Products initialized from localStorage or defaults
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('pronto_products');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_PRODUCTS;
  });

  const [selectedProductId, setSelectedProductId] = useState<string>('greeting-cards');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Quote Requests with localStorage persistence
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>(() => {
    try {
      const saved = localStorage.getItem('pronto_quotes');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_DEMO_QUOTES;
  });

  // Persist dynamic categories
  useEffect(() => {
    try {
      localStorage.setItem('pronto_categories', JSON.stringify(categories));
    } catch {}
  }, [categories]);

  // Persist dynamic products
  useEffect(() => {
    try {
      localStorage.setItem('pronto_products', JSON.stringify(products));
    } catch {}
  }, [products]);

  // Persist quotes
  useEffect(() => {
    try {
      localStorage.setItem('pronto_quotes', JSON.stringify(quoteRequests));
    } catch {}
  }, [quoteRequests]);

  // Toast notification system
  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Derive current page name from URL pathname
  const currentPage = useMemo(() => {
    const p = location.pathname;
    if (p === '/') return 'home';
    if (p === '/products') return 'catalogue';
    if (p.startsWith('/products/')) return 'product-detail';
    if (p === '/quote') return 'quote';
    if (p === '/services') return 'services';
    if (p === '/how-it-works') return 'how-it-works';
    if (p === '/artwork-guide') return 'artwork-guide';
    if (p === '/faq') return 'faq';
    if (p === '/about') return 'about';
    if (p === '/contact') return 'contact';
    if (p === '/legal') return 'legal';
    if (p.startsWith('/admin')) return 'admin';
    return 'home';
  }, [location.pathname]);

  const navigate = (destination: string, param?: string) => {
    if (param) {
      setSelectedProductId(param);
    }
    switch (destination) {
      case 'home':
        routerNavigate('/');
        break;
      case 'catalogue':
      case 'products':
        routerNavigate('/products');
        break;
      case 'product-detail':
        routerNavigate(param ? `/products/${param}` : `/products/${selectedProductId}`);
        break;
      case 'quote':
      case 'quote-wizard':
        routerNavigate('/quote');
        break;
      case 'how-it-works':
        routerNavigate('/how-it-works');
        break;
      case 'artwork-guide':
        routerNavigate('/artwork-guide');
        break;
      case 'faq':
        routerNavigate('/faq');
        break;
      case 'about':
        routerNavigate('/about');
        break;
      case 'contact':
        routerNavigate('/contact');
        break;
      case 'services':
        routerNavigate('/services');
        break;
      case 'legal':
        routerNavigate('/legal');
        break;
      case 'admin':
      case 'staff-dashboard':
        routerNavigate('/admin');
        break;
      default:
        if (destination.startsWith('/')) {
          routerNavigate(destination);
        } else {
          routerNavigate(`/${destination}`);
        }
        break;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ADMIN AUTHENTICATION
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('pronto_admin_session') === 'true';
    } catch {
      return false;
    }
  });

  const loginAdmin = (username: string, pass: string): boolean => {
    if (username.trim() === 'admin' && pass === 'ProntoDemo@123') {
      setIsAdminAuthenticated(true);
      try {
        sessionStorage.setItem('pronto_admin_session', 'true');
      } catch {}
      showToast('Admin session started.', 'success');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    try {
      sessionStorage.removeItem('pronto_admin_session');
    } catch {}
    showToast('Signed out of Admin.', 'info');
  };

  // CATEGORY MANAGEMENT
  const addCategory = (newCat: { name: string; slug: string; description: string }) => {
    const slug = newCat.slug.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const existing = categories.find(c => c.slug === slug || c.name.toLowerCase() === newCat.name.toLowerCase());
    if (existing) {
      showToast(`Category "${newCat.name}" already exists!`, 'error');
      return;
    }
    const item: CategoryItem = {
      name: newCat.name.trim(),
      slug: slug || `cat-${Date.now()}`,
      description: newCat.description.trim() || 'Custom commercial print category.',
      count: 0
    };
    setCategories(prev => [...prev, item]);
    showToast(`Added new category "${item.name}".`, 'success');
  };

  const updateCategory = (slug: string, updated: Partial<CategoryItem>) => {
    setCategories(prev => prev.map(cat => {
      if (cat.slug === slug) {
        const newName = updated.name || cat.name;
        // If name changed, update any products mapped to this category
        if (updated.name && updated.name !== cat.name) {
          setProducts(prods => prods.map(p => p.category === cat.name ? { ...p, category: newName } : p));
        }
        return { ...cat, ...updated, name: newName };
      }
      return cat;
    }));
    showToast('Category updated successfully.', 'success');
  };

  const deleteCategory = (slug: string) => {
    const catToDelete = categories.find(c => c.slug === slug);
    if (!catToDelete) return;
    setCategories(prev => prev.filter(c => c.slug !== slug));
    showToast(`Deleted category "${catToDelete.name}".`, 'info');
  };

  // PRODUCT & PRICING MANAGEMENT
  const getProductById = (id: string): Product | undefined => {
    return products.find(p => p.id === id);
  };

  const selectedProduct = getProductById(selectedProductId) || products[0];

  const addProduct = (newProd: Product) => {
    setProducts(prev => [newProd, ...prev]);
    // update category count
    setCategories(prev => prev.map(c => {
      if (c.name.toLowerCase() === newProd.category.toLowerCase()) {
        return { ...c, count: (c.count || 0) + 1 };
      }
      return c;
    }));
    showToast(`Created product "${newProd.name}".`, 'success');
  };

  const updateProduct = (id: string, updated: Partial<Product>) => {
    setProducts(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, ...updated };
      }
      return p;
    }));
    showToast(`Updated product "${updated.name || id}".`, 'success');
  };

  const updateProductPrice = (id: string, newBasePrice: number) => {
    setProducts(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, sampleBasePrice: newBasePrice };
      }
      return p;
    }));
    showToast(`Base price updated to $${newBasePrice.toFixed(2)}.`, 'success');
  };

  const deleteProduct = (id: string) => {
    const p = products.find(prod => prod.id === id);
    if (!p) return;
    setProducts(prev => prev.filter(prod => prod.id !== id));
    // update category count
    setCategories(prev => prev.map(c => {
      if (c.name.toLowerCase() === p.category.toLowerCase()) {
        return { ...c, count: Math.max(0, (c.count || 1) - 1) };
      }
      return c;
    }));
    showToast(`Product "${p.name}" deleted.`, 'info');
  };

  // CONFIGURATOR & ARTWORK STATE
  const [productConfiguration, setProductConfiguration] = useState<ProductConfiguration>({
    productId: 'greeting-cards',
    size: '10x7-folded-5x7',
    orientation: 'horizontal',
    paperStock: '16pt-matte',
    coating: 'gloss-uv-outside',
    quantity: 250,
    printingSides: 'double',
    turnaround: 'standard',
    folding: 'half-fold',
    envelopes: 'white-blank',
    textOverlay: { ...DEFAULT_TEXT_OVERLAY }
  });

  const [frontArtwork, setFrontArtwork] = useState<ArtworkSide>(INITIAL_FRONT_ARTWORK);
  const [backArtwork, setBackArtwork] = useState<ArtworkSide>(INITIAL_BACK_ARTWORK);

  const updateConfiguration = (partial: Partial<ProductConfiguration>) => {
    setProductConfiguration(prev => ({ ...prev, ...partial }));
  };

  const updateTextOverlay = (partial: Partial<TextOverlayConfig>) => {
    setProductConfiguration(prev => ({
      ...prev,
      textOverlay: {
        ...(prev.textOverlay || DEFAULT_TEXT_OVERLAY),
        ...partial
      }
    }));
  };

  const calculateEstimatedPrice = (): number => {
    const prod = selectedProduct;
    const base = prod.sampleBasePrice || 50;
    const sizeMod = prod.sizes.find(s => s.id === productConfiguration.size)?.priceModifier || 0;
    const stockMod = prod.paperStocks.find(p => p.id === productConfiguration.paperStock)?.priceModifier || 0;
    const coatMod = prod.coatings.find(c => c.id === productConfiguration.coating)?.priceModifier || 0;
    
    const qty = productConfiguration.quantity || 100;
    const qtyScale = qty <= 100 ? 1 : 1 + Math.log10(qty / 100) * 0.9;
    
    let subtotal = (base + sizeMod + stockMod + coatMod) * qtyScale;

    if (productConfiguration.printingSides === 'double' && prod.supportsFrontAndBack) {
      subtotal *= 1.25;
    }

    if (productConfiguration.turnaround === 'rush') {
      subtotal += 35;
    } else if (productConfiguration.turnaround === 'same-day') {
      subtotal += 65;
    }

    if (productConfiguration.envelopes === 'white-blank') {
      subtotal += Math.round(qty * 0.12);
    } else if (productConfiguration.envelopes === 'custom-printed') {
      subtotal += Math.round(qty * 0.28);
    }

    return Math.max(15, Math.round(subtotal * 100) / 100);
  };

  const setArtwork = (side: 'front' | 'back', data: Partial<ArtworkSide>) => {
    if (side === 'front') {
      setFrontArtwork(prev => ({ ...prev, ...data }));
    } else {
      setBackArtwork(prev => ({ ...prev, ...data }));
    }
    showToast(`${side === 'front' ? 'Front' : 'Back'} artwork updated.`);
  };

  const clearArtwork = (side: 'front' | 'back') => {
    if (side === 'front') {
      setFrontArtwork({
        file: null,
        previewUrl: null,
        fileName: null,
        fileSize: null,
        fileType: null,
        aspectRatioMismatch: false,
        fitMode: 'cover'
      });
    } else {
      setBackArtwork({
        file: null,
        previewUrl: null,
        fileName: null,
        fileSize: null,
        fileType: null,
        aspectRatioMismatch: false,
        fitMode: 'cover'
      });
    }
    showToast(`${side === 'front' ? 'Front' : 'Back'} artwork removed.`, 'info');
  };

  const loadSampleArtwork = (sampleId?: string) => {
    const pair = SAMPLE_ARTWORK_PAIRS.find(p => p.id === sampleId) || 
      (selectedProduct.id === 'business-cards' ? SAMPLE_ARTWORK_PAIRS[1] : SAMPLE_ARTWORK_PAIRS[0]);
    
    setFrontArtwork({
      file: null,
      previewUrl: pair.frontUrl,
      fileName: pair.frontName,
      fileSize: '450 KB',
      fileType: 'image/svg+xml',
      aspectRatioMismatch: false,
      fitMode: 'cover'
    });

    setBackArtwork({
      file: null,
      previewUrl: pair.backUrl,
      fileName: pair.backName,
      fileSize: '320 KB',
      fileType: 'image/svg+xml',
      aspectRatioMismatch: false,
      fitMode: 'cover'
    });

    showToast(`Loaded sample artwork: "${pair.name}"`, 'success');
  };

  // QUOTE SUBMISSION & INBOX
  const submitQuoteRequest = (data: Partial<QuoteRequest>): string => {
    const nextNum = 1000 + quoteRequests.length + 1;
    const newId = `PP-${nextNum}`;

    const newQuote: QuoteRequest = {
      id: newId,
      createdAt: new Date().toISOString(),
      status: 'New',
      product: selectedProduct,
      configuration: { ...productConfiguration },
      artwork: {
        front: {
          fileName: frontArtwork.fileName || 'Artwork_Front_File',
          fileType: frontArtwork.fileType || 'image/png',
          fileSize: frontArtwork.fileSize || '1.2 MB',
          previewUrl: frontArtwork.previewUrl
        },
        back: {
          fileName: backArtwork.fileName || (selectedProduct.supportsFrontAndBack ? 'Artwork_Back_File' : null),
          fileType: backArtwork.fileType || (selectedProduct.supportsFrontAndBack ? 'image/png' : null),
          fileSize: backArtwork.fileSize || (selectedProduct.supportsFrontAndBack ? '1.0 MB' : null),
          previewUrl: backArtwork.previewUrl
        }
      },
      customer: {
        fullName: data.customer?.fullName || 'Valued Client',
        companyName: data.customer?.companyName || '',
        email: data.customer?.email || 'client@example.com',
        phone: data.customer?.phone || '',
        deliveryMethod: data.customer?.deliveryMethod || 'houston-pickup',
        address: data.customer?.address || '',
        city: data.customer?.city || 'Houston',
        zipCode: data.customer?.zipCode || '77063'
      },
      projectDetails: {
        projectTitle: data.projectDetails?.projectTitle || `${selectedProduct.name} Custom Production`,
        projectDescription: data.projectDetails?.projectDescription || 'Standard commercial quote request.',
        targetDeadline: data.projectDetails?.targetDeadline || '',
        budgetRange: data.projectDetails?.budgetRange || '',
        additionalNotes: data.projectDetails?.additionalNotes || ''
      },
      staffNotes: [
        `Quote inquiry received via website on ${new Date().toLocaleDateString()}. Specs locked: ${selectedProduct.name} (${productConfiguration.quantity} pcs).`
      ],
      estimatedTotal: calculateEstimatedPrice(),
      lastUpdated: new Date().toISOString()
    };

    setQuoteRequests(prev => [newQuote, ...prev]);
    showToast(`Quote request #${newId} submitted! Our team will contact you shortly.`, 'success');
    return newId;
  };

  const updateQuoteStatus = (quoteId: string, status: QuoteStatus, note?: string, estimatedPrice?: number) => {
    setQuoteRequests(prev => prev.map(q => {
      if (q.id === quoteId) {
        const updatedNotes = [...(q.staffNotes || [])];
        if (note && note.trim()) {
          updatedNotes.push(`[${new Date().toLocaleDateString()} Staff]: ${note.trim()}`);
        }
        return {
          ...q,
          status,
          staffNotes: updatedNotes,
          estimatedTotal: estimatedPrice !== undefined ? estimatedPrice : q.estimatedTotal,
          lastUpdated: new Date().toISOString()
        };
      }
      return q;
    }));
    showToast(`Quote #${quoteId} status set to "${status}".`, 'info');
  };

  const addStaffNote = (quoteId: string, note: string) => {
    if (!note.trim()) return;
    setQuoteRequests(prev => prev.map(q => {
      if (q.id === quoteId) {
        return {
          ...q,
          staffNotes: [...(q.staffNotes || []), `[${new Date().toLocaleDateString()} Note]: ${note.trim()}`],
          lastUpdated: new Date().toISOString()
        };
      }
      return q;
    }));
    showToast(`Note logged on #${quoteId}.`, 'info');
  };

  const deleteQuoteRequest = (quoteId: string) => {
    setQuoteRequests(prev => prev.filter(q => q.id !== quoteId));
    showToast(`Quote #${quoteId} removed from queue.`, 'info');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigate,
        categories,
        products,
        addCategory,
        updateCategory,
        deleteCategory,
        addProduct,
        updateProduct,
        updateProductPrice,
        deleteProduct,
        getProductById,
        selectedProductId,
        selectedProduct,
        setSelectedProductId,
        productConfiguration,
        updateConfiguration,
        updateTextOverlay,
        calculateEstimatedPrice,
        frontArtwork,
        backArtwork,
        setArtwork,
        clearArtwork,
        loadSampleArtwork,
        quoteRequests,
        submitQuoteRequest,
        updateQuoteStatus,
        addStaffNote,
        deleteQuoteRequest,
        isAdminAuthenticated,
        loginAdmin,
        logoutAdmin,
        searchQuery,
        setSearchQuery,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
