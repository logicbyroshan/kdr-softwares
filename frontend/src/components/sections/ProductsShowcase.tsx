import React, { useState } from 'react';
import { 
  Layers, 
  FileSpreadsheet, 
  ScanFace, 
  ShieldAlert, 
  FileCheck, 
  Grid, 
  Maximize, 
  QrCode, 
  Sparkles, 
  FileText, 
  Shield, 
  Check, 
  Info 
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const ProductsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'intake' | 'verification' | 'export'>('intake');

  return (
    <section id="products" className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative">
      <Container>
        <SectionHeading
          badge="Product Ecosystem"
          title="Engineered software products built for high-stakes operational workflows."
          description="We create dedicated software applications tailored to resolve specific business bottlenecks—from multi-institution commercial ID production to document sanitization."
        />

        {/* =========================================================================
            PRODUCT 1: CARDFLOW (Heroic Architectural Showcase)
            ========================================================================= */}
        <div className="mb-16 rounded-3xl bg-gradient-to-br from-[#070D1A] via-[#0A1936] to-[#070D1A] border border-blue-900/40 text-white overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0062E3]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="p-8 sm:p-10 lg:p-12 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/30 text-cyan-300 flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                        CardFlow
                      </h3>
                      <Badge variant="emerald" size="sm">
                        Production Active
                      </Badge>
                      <Badge variant="blue" size="sm">
                        Over 100,000 Cards Handled
                      </Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-cyan-300 font-semibold mt-0.5">
                      Commercial ID-Card Data Management & Production Workflow Platform
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button href="/products/cardflow" variant="primary" size="md" withArrow>
                  Explore CardFlow Deep Dive
                </Button>
              </div>
            </div>

            {/* Asymmetric Split: Narrative & Workflow Interactive Tabs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
              {/* Left Column: Product Narrative & Critical Transparency Notice */}
              <div className="lg:col-span-5 space-y-5">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  CardFlow is an end-to-end data intake, verification, and production workflow engine engineered specifically for commercial ID-card printing agencies who manage multiple client institutions.
                </p>

                {/* Important Workflow Clarity Notice */}
                <div className="p-4 rounded-2xl bg-[#0A2558]/50 border border-blue-500/30 text-xs text-blue-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-cyan-300">
                    <Info className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
                    <span>How CardFlow Integrates With Your Print Setup:</span>
                  </div>
                  <p className="leading-relaxed text-blue-100">
                    CardFlow currently manages the high-stakes data and production workflows. Printing agencies use CorelDRAW or their preferred design software for physical card layout and printing. Automated print-ready rendering with PrintFlow is actively underway on our roadmap.
                  </p>
                </div>

                {/* Key Verified Feature Pills */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Core Production Capabilities:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span>Multiple Institution Workspaces</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span>Dynamic Custom Field Schemas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span>Excel & Word Sheet Ingestion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span>Embedded Photo Extraction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span>Automated Photo Matching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span>Duplicate Record Flagging</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span>Verification Approval Portals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span>CorelDRAW Merge Bundles</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Interactive Workflow Stage Demonstration */}
              <div className="lg:col-span-7 bg-[#050C1A] rounded-2xl p-6 border border-slate-800 shadow-inner">
                {/* Stage Selectors */}
                <div className="flex items-center gap-2 pb-4 border-b border-slate-800 text-xs overflow-x-auto" role="tablist" aria-label="Workflow stages">
                  <button
                    type="button"
                    role="tab"
                    id="tab-intake"
                    aria-selected={activeTab === 'intake'}
                    aria-controls="panel-intake"
                    onClick={() => setActiveTab('intake')}
                    className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      activeTab === 'intake'
                        ? 'bg-[#0062E3] text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    1. Data Intake & Parsing
                  </button>
                  <button
                    type="button"
                    role="tab"
                    id="tab-verification"
                    aria-selected={activeTab === 'verification'}
                    aria-controls="panel-verification"
                    onClick={() => setActiveTab('verification')}
                    className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      activeTab === 'verification'
                        ? 'bg-[#0062E3] text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    2. Verification & Duplicates
                  </button>
                  <button
                    type="button"
                    role="tab"
                    id="tab-export"
                    aria-selected={activeTab === 'export'}
                    aria-controls="panel-export"
                    onClick={() => setActiveTab('export')}
                    className={`px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      activeTab === 'export'
                        ? 'bg-[#0062E3] text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    3. Production Export
                  </button>
                </div>

                {/* Tab 1: Intake */}
                {activeTab === 'intake' && (
                  <div id="panel-intake" role="tabpanel" aria-labelledby="tab-intake" className="mt-4 space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-slate-300 font-semibold">Active Ingestion Parser</span>
                      <span className="text-emerald-400 font-semibold">Supported: .xlsx, .xls, .docx, .pdf</span>
                    </div>
                    <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium flex items-center gap-1.5">
                          <FileSpreadsheet className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                          Class_X_Student_List_2026.xlsx
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">350 Records Parsed in 1.4s</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Dynamic columns mapped: Roll Number (ID), Student Full Name, Blood Group, Father Name, Contact Number, Bus Stop.
                      </div>
                    </div>
                    <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium flex items-center gap-1.5">
                          <ScanFace className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                          Embedded Photo Extraction Module
                        </span>
                        <span className="text-[11px] text-cyan-300 font-mono">350 Photos Extracted</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Automatic image cropping from Word roster tables with resolution validation and automated normalization.
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Verification */}
                {activeTab === 'verification' && (
                  <div id="panel-verification" role="tabpanel" aria-labelledby="tab-verification" className="mt-4 space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-slate-300 font-semibold">Multi-Institution Verification Matrix</span>
                      <span className="text-cyan-400 font-semibold">Live Status Check</span>
                    </div>
                    <div className="space-y-2">
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <ShieldAlert className="w-4 h-4 text-amber-400" aria-hidden="true" />
                          <div>
                            <span className="text-white font-medium block">Duplicate Admission #2408 Flagged</span>
                            <span className="text-[10px] text-slate-400">Identical admission number found in Section A and Section B</span>
                          </div>
                        </div>
                        <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800 font-semibold">Pending Action</span>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <FileCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                          <div>
                            <span className="text-white font-medium block">Institutional Approval Signoff</span>
                            <span className="text-[10px] text-slate-400">School Administrator marked 348 records as officially verified</span>
                          </div>
                        </div>
                        <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 font-semibold">Approved</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Export */}
                {activeTab === 'export' && (
                  <div id="panel-export" role="tabpanel" aria-labelledby="tab-export" className="mt-4 space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-slate-300 font-semibold">Pre-Press Production Bundles</span>
                      <span className="text-emerald-400 font-semibold">Agency Formats</span>
                    </div>
                    <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 text-xs space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">CorelDRAW Merged Package (.zip)</span>
                        <span className="text-[11px] text-cyan-400 font-mono font-bold">Ready to Print</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Generates verified data lists paired with organized photo directories formatted directly for CorelDRAW print-merge macros.
                      </p>
                      <div className="pt-1 flex items-center gap-2 text-[10px] text-slate-300 font-mono flex-wrap">
                        <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">CorelDRAW Compatible</span>
                        <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Excel Master Backup</span>
                        <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Normalized JPGs</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PRODUCTS 2 & 3: PRINTFLOW & EAZEFLOW (Harmonized Brand Styling)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PrintFlow */}
          <div className="rounded-3xl bg-slate-50/70 border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between hover:border-blue-300 hover:shadow-card transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062E3] flex items-center justify-center border border-blue-200/80">
                  <Grid className="w-6 h-6" aria-hidden="true" />
                </div>
                <Badge variant="roadmap" size="sm">
                  In Development
                </Badge>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900">PrintFlow</h3>
              <p className="text-xs font-bold text-[#0062E3] uppercase tracking-wider mt-0.5">
                ID-Card Design & Printing Automation Product
              </p>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                An independently hosted printing automation product engineered to streamline sheet imposition, barcode and QR code placement, and high-speed print batch generation.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2.5">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                  Key Capabilities:
                </span>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Maximize className="w-4 h-4 text-[#0062E3] shrink-0" aria-hidden="true" />
                    <span>Automated card sheet imposition for commercial card printers</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <QrCode className="w-4 h-4 text-[#0062E3] shrink-0" aria-hidden="true" />
                    <span>Precision 1D/2D barcode generation engine</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-[#0062E3] shrink-0" aria-hidden="true" />
                    <span className="text-slate-600">Roadmap: Direct bi-directional API pairing with CardFlow</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/70 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Standalone + CardFlow Integration</span>
              <Button href="/products/printflow" variant="outline" size="sm" withArrow>
                PrintFlow Details
              </Button>
            </div>
          </div>

          {/* EazeFlow */}
          <div className="rounded-3xl bg-slate-50/70 border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between hover:border-blue-300 hover:shadow-card transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0084FF] flex items-center justify-center border border-blue-200/80">
                  <Sparkles className="w-6 h-6" aria-hidden="true" />
                </div>
                <Badge variant="roadmap" size="sm">
                  In Development
                </Badge>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900">EazeFlow</h3>
              <p className="text-xs font-bold text-[#0084FF] uppercase tracking-wider mt-0.5">
                Digital Productivity & Document Utility Product
              </p>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                A focused digital productivity and document utility product built to eliminate administrative friction when working with dirty spreadsheets, irregular Word rosters, and unstandardized PDFs.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2.5">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                  Key Capabilities:
                </span>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#0084FF] shrink-0" aria-hidden="true" />
                    <span>Batch document format standardization and sanitization</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#0084FF] shrink-0" aria-hidden="true" />
                    <span>Structured data cleansing (casing, whitespace, invalid characters)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Shield className="w-4 h-4 text-[#0084FF] shrink-0" aria-hidden="true" />
                    <span>Secure offline-first processing protecting customer rosters</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/70 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Document Utility Platform</span>
              <Button href="/products/eazeflow" variant="outline" size="sm" withArrow>
                EazeFlow Details
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
