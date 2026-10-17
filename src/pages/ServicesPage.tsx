import React from 'react';
import { 
  Printer, 
  Layers, 
  Sparkles, 
  FileText, 
  Mail, 
  Globe, 
  Scissors, 
  Shirt, 
  Tag, 
  Briefcase, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getProductsByCategory } from '../data/products';

export const ServicesPage: React.FC = () => {
  const { navigate } = useApp();
  const otherServices = getProductsByCategory('Other Products and Services');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-2xs font-extrabold text-orange-600 uppercase tracking-widest">
          Comprehensive Capabilities
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950">
          Specialty Printing &amp; Commercial Services
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Beyond our standard paper lines, Pronto Prints provides high-volume copying, thermal encapsulation, specialty thermography, apparel embroidery, and turnkey direct mail.
        </p>
      </div>

      {/* Grid of 12 Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherServices.map((service, idx) => (
          <div
            key={service.id}
            onClick={() => navigate('product-detail', service.id)}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xs font-mono font-bold text-orange-600 uppercase">
                  Service 0{idx + 1}
                </span>
                {service.badge && (
                  <span className="text-3xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold">
                    {service.badge}
                  </span>
                )}
              </div>

              <h3 className="font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors text-base">
                {service.name}
              </h3>

              <p className="text-2xs text-slate-500 leading-relaxed line-clamp-3">
                {service.fullDescription}
              </p>

              <div className="pt-2">
                <span className="text-3xs font-bold text-slate-400 block mb-1 uppercase tracking-wider">
                  Features:
                </span>
                <ul className="text-2xs text-slate-600 space-y-1">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-2xs font-bold text-slate-700 group-hover:text-orange-600">
              <span>Sample Estimate From ${service.sampleBasePrice}</span>
              <span className="flex items-center gap-1">
                <span>Configure</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Corporate Consultation CTA */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <span className="text-2xs font-extrabold text-orange-400 uppercase tracking-widest block">
            Enterprise Procurement
          </span>
          <h3 className="text-2xl font-black text-white">Need multi-branch volume contracts?</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            We offer centralized brand portals, scheduled fulfillment, and dedicated account managers for franchises, hospitals, and multi-location businesses.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate('contact')}
          className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-lg transition-all shrink-0 cursor-pointer"
        >
          Schedule Corporate Consultation
        </button>
      </div>
    </div>
  );
};
