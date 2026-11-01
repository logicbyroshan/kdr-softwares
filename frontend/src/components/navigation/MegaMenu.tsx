import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Grid, Sparkles } from 'lucide-react';
import { Badge } from '../common/Badge';

interface MegaMenuProps {
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onClose }) => {
  const products = [
    {
      name: 'CardFlow',
      slug: 'cardflow',
      tagline: 'ID-Card Data Management & Production Workflow Platform',
      description: 'Multi-institution rosters, Excel/Word data intake, embedded photo extraction, and CorelDRAW export packages.',
      icon: Layers,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
      status: 'Production Active',
      statusVariant: 'emerald' as const,
    },
    {
      name: 'PrintFlow',
      slug: 'printflow',
      tagline: 'ID-Card Design & Printing Automation Engine',
      description: 'Automated sheet imposition, barcode placement, and vector print batch formatting.',
      icon: Grid,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
      status: 'In Development',
      statusVariant: 'roadmap' as const,
    },
    {
      name: 'EazeFlow',
      slug: 'eazeflow',
      tagline: 'Digital Productivity & Document Utility',
      description: 'Streamlined document transformations, data sanitization, and batch file normalization.',
      icon: Sparkles,
      color: 'text-teal-600 bg-teal-50 border-teal-100',
      status: 'In Development',
      statusVariant: 'roadmap' as const,
    },
  ];

  return (
    <div 
      className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] max-w-[95vw] mt-2 p-5 bg-white rounded-2xl shadow-xl border border-slate-200/80 transition-all duration-200 z-50 animate-in fade-in slide-in-from-top-2"
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
              className="group p-4 rounded-xl hover:bg-slate-50 transition-colors duration-150 border border-transparent hover:border-slate-200/70 flex flex-col justify-between"
              role="menuitem"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${item.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <Badge variant={item.statusVariant} size="sm">
                    {item.status}
                  </Badge>
                </div>
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-base flex items-center gap-1.5">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                <span>View Product</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between px-2 text-xs text-slate-500">
        <span>Need a custom software solution engineered specifically for your business?</span>
        <Link 
          to="/services/custom-software" 
          onClick={onClose}
          className="font-semibold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
        >
          Explore Custom Services <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

