import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactPage: React.FC = () => {
  const { showToast } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('General Commercial Quote');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please enter your name.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'Valid email is required.';
    if (!message.trim()) errs.message = 'Please provide message details.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
    showToast('Your message has been received! Our Houston team will respond shortly.', 'success');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-2xs font-extrabold text-orange-600 uppercase tracking-widest">
          Connect With Our Team
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950">
          Contact Pronto Prints Houston
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Questions about rush turnaround, custom die-cut dimensions, or bulk orders? Reach out directly or visit our facility.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Info & Hours */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-800">
            <div>
              <span className="text-2xs font-bold text-orange-400 uppercase tracking-wider block">
                Houston Production Hub
              </span>
              <h3 className="text-xl font-black text-white mt-1">Pronto Prints</h3>
              <p className="text-3xs font-extrabold text-slate-400 tracking-widest uppercase">
                “You Think It! We Ink It!”
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Facility Address:</strong>
                  <span>8926 Clarkcrest St, Suite C</span>
                  <span className="block">Houston, TX 77063</span>
                  <span className="text-3xs text-slate-400 block mt-0.5">(Westchase / Galleria Area)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Phone:</strong>
                  <a href="tel:7132120247" className="text-orange-400 font-bold hover:underline">
                    (713) 212-0247
                  </a>
                  <span className="text-3xs text-slate-400 block mt-0.5">Direct Prepress &amp; Customer Support</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Email:</strong>
                  <a href="mailto:sales@prontoprints.com" className="text-orange-400 hover:underline">
                    sales@prontoprints.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Operating Hours:</strong>
                  <span>Monday – Friday: 8:00 AM – 5:00 PM</span>
                  <span className="block">Saturday: 10:00 AM – 2:00 PM</span>
                  <span className="text-3xs text-slate-400 block mt-0.5">Sunday: Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Simulated Map Visual */}
          <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200 text-center space-y-2">
            <div className="h-40 bg-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-500 p-4 border border-slate-300">
              <MapPin className="w-8 h-8 text-orange-600 mb-1" />
              <span className="text-xs font-bold text-slate-800">8926 Clarkcrest St, Houston TX</span>
              <span className="text-3xs text-slate-500">Accessible from Westpark Tollway &amp; Gessner Rd</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Send an Inquiry or Quote Request</h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the form below and an estimator will respond within 1 business hour.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-emerald-950">Thank You, {name}!</h3>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                  Your message has been received by our Houston team. We look forward to working with you.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 bg-emerald-700 text-white rounded-lg text-xs font-bold hover:bg-emerald-800 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full p-3 rounded-xl border text-xs outline-none ${
                        errors.name ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-orange-500'
                      }`}
                    />
                    {errors.name && <p className="text-2xs text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full p-3 rounded-xl border text-xs outline-none ${
                        errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-orange-500'
                      }`}
                    />
                    {errors.email && <p className="text-2xs text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number <span className="text-slate-400">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(713) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-orange-500 text-xs outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Subject / Inquiry Type
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-orange-500 text-xs outline-none bg-white"
                    >
                      <option value="General Commercial Quote">General Commercial Quote</option>
                      <option value="Greeting Cards Custom Run">Greeting Cards Custom Run</option>
                      <option value="Same-Day Houston Rush">Same-Day Houston Rush</option>
                      <option value="Majestic Foil / Edge Cards">Majestic Foil / Edge Cards</option>
                      <option value="Packaging & Box Cartons">Packaging &amp; Box Cartons</option>
                      <option value="Apparel & Screen Printing">Apparel &amp; Screen Printing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Job Specifications &amp; Questions <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe quantity, dimensions, desired turnaround, and paper preferences..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full p-3 rounded-xl border text-xs outline-none ${
                      errors.message ? 'border-rose-500 bg-rose-50/20' : 'border-slate-300 focus:border-orange-500'
                    }`}
                  />
                  {errors.message && <p className="text-2xs text-rose-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Houston Prepress</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
