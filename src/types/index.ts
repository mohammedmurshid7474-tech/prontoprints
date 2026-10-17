export type ProductCategory = 
  | 'Large Format Products'
  | 'Majestic Products'
  | 'Marketing Products'
  | 'Packaging Products'
  | 'Other Products and Services'
  | string;

export interface CategoryItem {
  name: string;
  slug: string;
  count: number;
  description: string;
  icon?: string;
}

export type MockupType = 
  | 'greeting-card'
  | 'business-card'
  | 'flat-sheet'
  | 'poster-frame'
  | 'banner-stand'
  | 'box-package'
  | 'apparel'
  | 'generic';

export interface ProductOption {
  id: string;
  name: string;
  priceModifier?: number; // Sample price modifier
  description?: string;
  badge?: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categorySlug: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  mockupType: MockupType;
  supportsFrontAndBack: boolean;
  defaultOrientation: 'horizontal' | 'vertical';
  sizes: ProductOption[];
  paperStocks: ProductOption[];
  coatings: ProductOption[];
  quantities: number[];
  standardTurnaround: string;
  rushAvailable: boolean;
  sampleBasePrice: number; // For demo calculations
  badge?: string;
  recommendedUse: string;
  relatedProductIds: string[];
}

export interface ArtworkSide {
  file: File | null;
  previewUrl: string | null;
  fileName: string | null;
  fileSize: string | null;
  fileType: string | null;
  aspectRatioMismatch?: boolean;
  dimensions?: { width: number; height: number };
  fitMode: 'cover' | 'contain' | 'fill';
}

export interface TextOverlayConfig {
  enabled: boolean;
  text: string;
  fontSize: number; // in pixels, e.g. 28
  fontFamily: 'serif' | 'sans' | 'script';
  color: string;
  positionY: number; // percentage 10% - 90%
  alignment: 'center' | 'left' | 'right';
  hasShadow: boolean;
}

export interface ProductConfiguration {
  productId: string;
  size: string;
  orientation: 'horizontal' | 'vertical';
  paperStock: string;
  coating: string;
  quantity: number;
  printingSides: 'single' | 'double';
  turnaround: 'standard' | 'rush' | 'same-day';
  folding?: 'none' | 'half-fold' | 'tri-fold' | 'z-fold';
  envelopes?: 'none' | 'white-blank' | 'custom-printed';
  textOverlay?: TextOverlayConfig;
  customInstructions?: string;
}

export type QuoteStatus = 
  | 'New'
  | 'Under Review'
  | 'Quote Sent'
  | 'In Progress'
  | 'Completed'
  | 'Cancelled';

export interface QuoteRequest {
  id: string; // e.g. PP-DEMO-1001
  createdAt: string;
  status: QuoteStatus;
  product: Product;
  configuration: ProductConfiguration;
  artwork: {
    front: {
      fileName: string | null;
      fileType: string | null;
      fileSize: string | null;
      previewUrl: string | null;
    };
    back: {
      fileName: string | null;
      fileType: string | null;
      fileSize: string | null;
      previewUrl: string | null;
    };
  };
  customer: {
    fullName: string;
    companyName?: string;
    email: string;
    phone?: string;
    deliveryMethod: 'houston-pickup' | 'texas-shipping' | 'nationwide-freight';
    address?: string;
    city?: string;
    zipCode?: string;
  };
  projectDetails: {
    projectTitle: string;
    projectDescription: string;
    targetDeadline?: string;
    budgetRange?: string;
    additionalNotes?: string;
  };
  staffNotes?: string[];
  estimatedTotal?: number;
  lastUpdated?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  configuration: ProductConfiguration;
  frontArtworkName?: string;
  backArtworkName?: string;
  estimatedPrice: number;
  addedAt: string;
}
