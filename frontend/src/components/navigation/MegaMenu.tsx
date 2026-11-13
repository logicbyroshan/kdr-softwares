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
      tagline: 'ID-Card Data & Production Platform',
      description: 'Multi-institution rosters, Excel/Word data intake, embedded photo extraction, and CorelDRAW export packages.',
      icon: Layers,
      color: 'text-[#0062E3] bg-blue-50 border-blue-200',
      badge: '100k+ Handled',
    },
    {
      name: 'VidyaFlow',
      slug: 'vidyaflow',
      tagline: 'Smart School Management System',
      description: 'Unified admissions, automated attendance, dynamic fee collection, report cards, and parent communications.',
      icon: GraduationCap,
      color: 'text-teal-600 bg-teal-50 border-teal-200',
      badge: 'School ERP',
    },
    {
      name: 'EazeFlow',
      slug: 'eazeflow',
      tagline: 'Digital Productivity & Document Utility',
      description: 'Batch document transformations, data sanitization, structured cleansing, and file normalization.',
      icon: Sparkles,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      badge: 'Productivity Tool',
    },
  ];

  return (
    <div 
      className="absolute top-full left-1/2 -translate-x-1/2 w-[740px] max-w-[95vw] mt-2 p-5 bg-white rounded-2xl shadow-xl border border-slate-200/90 transition-all duration-200 z-50 animate-in fade-in slide-in-from-top-2"
      role="menu"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {products.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.slug}
              to={`/products/${item.slug}`}
              onClick={onClose}
              className="group p-4 rounded-xl hover:bg-slate-50 transition-colors duration-150 border border-transparent hover:border-slate-200/80 flex flex-col justify-between"
              role="menuitem"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${item.color}`}>
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0062E3] transition-colors text-base flex items-center gap-1.5">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-100 flex items-center text-xs font-semibold text-[#0062E3] group-hover:text-blue-700">
                <span>View Product</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between px-2 text-xs text-slate-600">
        <span>Looking for multi-license commercial deployment or school onboarding?</span>
        <Link 
          to="/contact" 
          onClick={onClose}
          className="font-bold text-[#0062E3] hover:text-blue-700 hover:underline flex items-center gap-1"
        >
          Contact Our Product Desk <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};
