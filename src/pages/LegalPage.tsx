import React, { useState } from 'react';
import { ShieldCheck, FileText, AlertTriangle } from 'lucide-react';

export const LegalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'reprint'>('privacy');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-10">
      {/* Title */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <span className="text-2xs font-extrabold text-orange-600 uppercase tracking-widest">
          Policies &amp; Legal Documentation
        </span>
        <h1 className="text-3xl font-black text-slate-950">Terms &amp; Policies</h1>
      </div>

      {/* Demo Notice Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong className="block">Demonstration Prototype Draft:</strong>
          <span>
            The policies below represent preliminary template copy designed for the Pronto Prints redesign POC. These clauses must be reviewed and customized by your business legal counsel prior to live commercial deployment.
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 text-xs font-bold text-slate-600">
        <button
          type="button"
          onClick={() => setActiveTab('privacy')}
          className={`px-5 py-3 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'privacy' ? 'border-orange-600 text-orange-600 font-black' : 'border-transparent hover:text-slate-900'
          }`}
        >
          Privacy Policy
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('terms')}
          className={`px-5 py-3 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'terms' ? 'border-orange-600 text-orange-600 font-black' : 'border-transparent hover:text-slate-900'
          }`}
        >
          Terms of Service
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('reprint')}
          className={`px-5 py-3 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'reprint' ? 'border-orange-600 text-orange-600 font-black' : 'border-transparent hover:text-slate-900'
          }`}
        >
          Reprint &amp; Quality Guarantee
        </button>
      </div>

      {/* Policy Content Body */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6 text-xs text-slate-600 leading-relaxed">
        {activeTab === 'privacy' && (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              Pronto Prints respects your personal privacy. In this prototype demonstration, all submitted customer names, email addresses, phone numbers, and uploaded files are stored strictly in client-side browser memory (`localStorage`) and are never transmitted to external cloud servers, third-party analytics trackers, or commercial databases.
            </p>

            <h2 className="text-base font-bold text-slate-900">2. Artwork File Security</h2>
            <p>
              Uploaded print designs (PDF, PNG, JPG) remain locally contained within your device during the proofing session. In production environments, client artwork files are encrypted in transit and purged automatically 30 days after job completion unless retained in your corporate archive.
            </p>

            <h2 className="text-base font-bold text-slate-900">3. Contact &amp; Updates</h2>
            <p>
              For inquiries regarding data privacy practices, contact sales@prontoprints.com or call our Houston facility directly at (713) 212-0247.
            </p>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900">1. Proof Approval &amp; Customer Responsibility</h2>
            <p>
              Customers are solely responsible for reviewing final PDF prepress proofs prior to production sign-off. Please carefully verify spelling, telephone numbers, bleed margins, font rendering, and orientation. Once approved, changes cannot be applied without potential plate re-burn fees.
            </p>

            <h2 className="text-base font-bold text-slate-900">2. Turnaround &amp; Cutoff Times</h2>
            <p>
              Same-day rush orders require proof sign-off and file approval by 10:00 AM CST. Standard production business days exclude weekends and federal holidays.
            </p>

            <h2 className="text-base font-bold text-slate-900">3. Demonstration Disclaimer</h2>
            <p>
              This website is an interactive proof-of-concept prototype. All sample pricing displayed is illustrative and does not constitute a binding commercial contract until formally quoted by an authorized Pronto Prints estimator.
            </p>
          </div>
        )}

        {activeTab === 'reprint' && (
          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900">1. Prepress Craftsmanship Guarantee</h2>
            <p>
              We stand behind our print quality. If an order exhibits manufacturing defects resulting from equipment error, improper paper stock cutting, or color streaks outside commercial GRACoL tolerances, Pronto Prints will reprint the job at zero additional expense.
            </p>

            <h2 className="text-base font-bold text-slate-900">2. Reporting Windows</h2>
            <p>
              Any claims regarding print defects or quantity discrepancies must be reported within 5 business days of local Houston pickup or delivery receipt.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
