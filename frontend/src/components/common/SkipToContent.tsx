import React from 'react';

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#0062E3] focus:text-white focus:rounded-xl focus:shadow-lg focus:font-bold focus:outline-none focus:ring-2 focus:ring-white transition-all"
    >
      Skip to main content
    </a>
  );
};

