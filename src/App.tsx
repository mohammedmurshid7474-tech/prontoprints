import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/common/ToastContainer';

// Customer Facing Pages
import { HomePage } from './pages/HomePage';
import { CataloguePage } from './pages/CataloguePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { QuoteRequestPage } from './pages/QuoteRequestPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ArtworkGuidePage } from './pages/ArtworkGuidePage';
import { FAQPage } from './pages/FAQPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';
import { LegalPage } from './pages/LegalPage';

// Dedicated Admin Portal Pages
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';

// Clean Customer Website Layout
const CustomerLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

// Admin Route Guard & Dedicated Layout
const AdminRoute: React.FC = () => {
  const { isAdminAuthenticated } = useApp();

  if (!isAdminAuthenticated) {
    return (
      <>
        <AdminLoginPage />
        <ToastContainer />
      </>
    );
  }

  return (
    <AdminLayout>
      <AdminDashboard />
      <ToastContainer />
    </AdminLayout>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          {/* Admin Route - Strictly Isolated at /admin (Zero links on customer site) */}
          <Route path="/admin" element={<AdminRoute />} />
          <Route path="/admin/*" element={<AdminRoute />} />

          {/* Customer Facing Website */}
          <Route element={<CustomerLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<CataloguePage />} />
            <Route path="/products/:productSlug" element={<ProductDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/artwork-guide" element={<ArtworkGuidePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuoteRequestPage />} />
            <Route path="/legal" element={<LegalPage />} />
            {/* Any legacy route redirects cleanly */}
            <Route path="/account" element={<Navigate to="/quote" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
