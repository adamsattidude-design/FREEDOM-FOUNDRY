import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Floating Mini Prompt Tooltip */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 p-3 rounded-xl bg-[#0a1a2f] text-white border-2 border-[#c5a021] shadow-2xl max-w-xs animate-bounce">
          <div className="text-left">
            <p className="text-xs font-bold text-[#c5a021] uppercase tracking-wider">Book a Viewing</p>
            <p className="text-[11px] text-slate-200">
              DM <strong className="text-[#c5a021]">“PROPERTY”</strong> for instant WhatsApp chat
            </p>
          </div>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="p-1 text-slate-400 hover:text-white rounded-full transition-colors"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppLink('PROPERTY')}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95 border-2 border-white"
        aria-label="Chat with Freedom Foundry Real Estate on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a021] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#c5a021] border-2 border-[#0a1a2f]"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
