import React, { useState } from 'react';
import { Printer, Lock, User, AlertCircle, ArrowRight, ShieldCheck, KeyRound } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminLoginPage: React.FC = () => {
  const { loginAdmin, navigate } = useApp();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      const success = loginAdmin(username, password);
      setIsLoading(false);
      if (!success) {
        setErrorMessage('Invalid credentials. Please use the demo credentials provided below.');
      }
    }, 400);
  };

  const handleAutofill = () => {
    setUsername('admin');
    setPassword('ProntoDemo@123');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4 relative overflow-hidden select-none">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-tr from-orange-600 to-amber-500 text-white shadow-xl shadow-orange-600/20 mb-2">
            <Printer className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white">
              PRONTO<span className="text-orange-500">PRINTS</span>
            </h1>
            <p className="text-2xs font-extrabold uppercase tracking-widest text-slate-400 mt-0.5">
              Production &amp; Prepress Portal
            </p>
          </div>
          <p className="text-xs text-slate-400 max-w-xs mx-auto">
            Authorized staff access only. Review client proofs, configure quotes, and manage prepress workflows.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Staff Authentication
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-3xs font-semibold">
              Demo Security
            </span>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-red-300 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-3xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Staff Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-3xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Staff Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                />
                <KeyRound className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 active:from-orange-700 text-white font-bold text-xs shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <span>Verifying credentials...</span>
              ) : (
                <>
                  <span>Sign In to Admin Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials Pill & Autofill Shortcut */}
          <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-2xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Demo Login Credentials
              </span>
              <button
                type="button"
                onClick={handleAutofill}
                className="text-3xs font-bold text-orange-400 hover:text-orange-300 underline cursor-pointer"
              >
                Autofill Credentials
              </button>
            </div>
            <div className="text-slate-400 space-y-0.5 font-mono text-3xs">
              <div>Username: <span className="text-slate-200 font-bold">admin</span></div>
              <div>Password: <span className="text-slate-200 font-bold">ProntoDemo@123</span></div>
            </div>
            <p className="text-4xs text-slate-500 italic pt-1 border-t border-slate-900">
              * Frontend-only mock session. Does not transmit or store passwords to external servers.
            </p>
          </div>
        </div>

        {/* Back to Public Site Link */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => navigate('home')}
            className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            ← Return to Pronto Prints Customer Website
          </button>
        </div>
      </div>
    </div>
  );
};
