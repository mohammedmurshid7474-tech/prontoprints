import React, { useState } from 'react';
import { 
  Printer, 
  FileText, 
  Layers, 
  CheckCircle2, 
  LogOut, 
  ExternalLink, 
  Search, 
  ShieldCheck, 
  Menu, 
  X,
  Clock,
  Sliders,
  Settings
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface AdminLayoutProps {
  children?: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { logoutAdmin, navigate, quoteRequests, products } = useApp();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const pendingQuotesCount = quoteRequests.filter(q => q.status === 'New' || q.status === 'Under Review').length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row font-sans">
      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white">
            <Printer className="w-4 h-4" />
          </div>
          <div>
            <span className="text-sm font-black text-white">PRONTO</span>
            <span className="text-sm font-black text-orange-500">PRINTS</span>
            <span className="ml-1 text-3xs font-bold text-slate-400 uppercase">ADMIN</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 text-slate-400 hover:text-white"
        >
          {isMobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* SIDEBAR NAVIGATION */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between transition-transform duration-300 md:static md:translate-x-0
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Sidebar Brand Top */}
        <div className="p-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-md">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-baseline">
                <span className="text-base font-black tracking-tight text-white">PRONTO</span>
                <span className="text-base font-black tracking-tight text-orange-500">PRINTS</span>
              </div>
              <p className="text-3xs font-extrabold uppercase tracking-widest text-slate-400">
                Admin Control Room
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation Items */}
        <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          <div className="px-3 pb-2 text-3xs font-extrabold text-slate-400 uppercase tracking-wider">
            Management Workflows
          </div>

          <button
            type="button"
            onClick={() => {
              navigate('admin');
              setIsMobileSidebarOpen(false);
            }}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs shadow-md shadow-orange-600/20 cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Sliders className="w-4 h-4" />
              <span>Quote Management</span>
            </div>
            {pendingQuotesCount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-white text-orange-600 font-extrabold text-3xs">
                {pendingQuotesCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              navigate('catalogue');
              setIsMobileSidebarOpen(false);
            }}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 font-semibold text-xs transition-colors cursor-pointer"
          >
            <Layers className="w-4 h-4 text-slate-400" />
            <span>Product Catalogue ({products.length})</span>
          </button>

          <button
            type="button"
            onClick={() => {
              navigate('home');
              setIsMobileSidebarOpen(false);
            }}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 font-semibold text-xs transition-colors cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-slate-400" />
            <span>View Customer Website</span>
          </button>
        </div>

        {/* Sidebar User Info & Logout Button */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/60 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-600/20 border border-orange-500/40 text-orange-400 flex items-center justify-center font-bold text-xs">
              AD
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-white truncate">Prepress Manager</p>
              <p className="text-3xs text-slate-400 truncate">admin@prontoprints.com</p>
            </div>
          </div>

          <button
            type="button"
            onClick={logoutAdmin}
            className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-red-950/60 hover:text-red-300 border border-slate-700/80 hover:border-red-800/60 text-slate-300 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out of Admin</span>
          </button>
        </div>
      </aside>

      {/* MAIN ADMIN WORKSPACE */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Desktop Bar */}
        <header className="hidden md:flex items-center justify-between px-8 py-4 bg-slate-900 border-b border-slate-800 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-3xs font-bold uppercase tracking-wider">
              PRONTO PRINTS ADMIN
            </span>
            <span className="text-slate-500 text-xs">•</span>
            <span className="text-xs text-slate-400">Prepress Queue &amp; Production Management</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('home')}
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
              <span>Public Website</span>
            </button>

            <button
              type="button"
              onClick={logoutAdmin}
              className="px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-800/50 text-red-300 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Dynamic Admin Page View */}
        <main className="flex-1 p-4 sm:p-8 bg-slate-950">
          {children}
        </main>
      </div>
    </div>
  );
};
