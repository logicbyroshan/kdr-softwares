import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, GraduationCap, Sparkles } from 'lucide-react';

interface MegaMenuProps {
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onClose }) => {
  const products = [
    {
      name: 'CardFlow',
      slug: 'cardflow',
      badge: 'ID Printing',
      tagline: 'For ID card agencies & print presses',
      icon: Layers,
    },
    {
      name: 'VidyaFlow',
      slug: 'vidyaflow',
      badge: 'School ERP',
      tagline: 'Smart school, attendance & fees system',
      icon: GraduationCap,
    },
    {
      name: 'EazeFlow',
      slug: 'eazeflow',
      badge: 'Data Utility',
      tagline: 'Fast Excel & Word document cleaner',
      icon: Sparkles,
    },
  ];

  return (
    <div 
      className="absolute top-full left-1/2 -translate-x-1/2 w-[380px] max-w-[95vw] mt-2 p-2 bg-white rounded-2xl shadow-xl border border-slate-200/90 transition-all duration-200 z-50 animate-in fade-in slide-in-from-top-2"
      role="menu"
    >
      <div className="space-y-1">
        {products.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.slug}
              to={`/products/${item.slug}`}
              onClick={onClose}
              className="group p-3 rounded-xl hover:bg-slate-50 transition-all duration-150 border border-transparent hover:border-slate-200/80 flex items-center gap-3.5"
              role="menuitem"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062E3] border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#0062E3] group-hover:text-white transition-all duration-200 shadow-2xs">
                <IconComponent className="w-5 h-5" aria-hidden="true" />
              </div>
              
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-slate-900 group-hover:text-[#0062E3] transition-colors text-sm">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 truncate leading-tight">
                  {item.tagline}
                </p>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0062E3] group-hover:translate-x-1 transition-all shrink-0" aria-hidden="true" />
            </Link>
          );
        })}
      </div>

      <div className="mt-2 pt-2 border-t border-slate-100 px-2 pb-1">
        <Link 
          to="/products" 
          onClick={onClose}
          className="text-xs font-bold text-[#0062E3] hover:text-blue-700 flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-blue-50/60 transition-colors"
        >
          <span>Explore All Products Overview</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};
