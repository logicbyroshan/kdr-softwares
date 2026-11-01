import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Database, 
  FileSpreadsheet, 
  ScanFace, 
  FolderSync, 
  ShieldAlert, 
  FileCheck, 
  Smartphone, 
  ArrowRight, 
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
    <section id="products" className="py-20 md:py-28 bg-white border-b border-slate-200/60 relative">
      <Container>
        <SectionHeading
          badge="Product Ecosystem"
          title="Engineered software products built for high-stakes operational workflows."
          description="We create dedicated software applications tailored to resolve specific business bottlenecks—from multi-institution commercial ID production to document sanitization."
        />

        {/* =========================================================================
            PRODUCT 1: CARDFLOW (Heroic Architectural Showcase)
            ========================================================================= */}
        <div className="mb-20 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-800 text-white overflow-hidden shadow-2xl">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                        CardFlow
                      </h3>
                      <Badge variant="emerald" size="sm">
                        Production Active
                      </Badge>
                      <Badge variant="blue" size="sm">
                        Over 100k Cards Handled
                      </Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-blue-400 font-medium mt-0.5">
                      ID-Card Data Management & Production Workflow Platform
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
                <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 text-xs text-blue-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-blue-300">
                    <Info className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>How CardFlow Integrates With Your Print Setup:</span>
                  </div>
                  <p className="leading-relaxed text-blue-300/90">
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
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Multiple Institution Workspaces</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Dynamic Custom Field Schemas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Excel & Word Sheet Ingestion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Embedded Photo Extraction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Automated Photo Matching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Duplicate Record Flagging</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Verification Approval Portals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Android Field Companion App</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Interactive Workflow Stage Demonstration */}
              <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 shadow-inner">
                {/* Stage Selectors */}
                <div className="flex items-center gap-2 pb-4 border-b border-slate-800 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab('intake')}
                    className={`px-3.5 py-2 rounded-lg font-semibold transition-all ${
                      activeTab === 'intake'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    1. Data Intake & Parsing
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('verification')}
                    className={`px-3.5 py-2 rounded-lg font-semibold transition-all ${
                      activeTab === 'verification'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    2. Verification & Duplicates
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('export')}
                    className={`px-3.5 py-2 rounded-lg font-semibold transition-all ${
                      activeTab === 'export'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    3. Production Export
                  </button>
                </div>

                {/* Tab 1: Intake */}
                {activeTab === 'intake' && (
                  <div className="mt-4 space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-slate-300 font-semibold">Active Ingestion Parser</span>
                      <span className="text-emerald-400">Supported: .xlsx, .xls, .docx, .pdf</span>
                    </div>
                    <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium flex items-center gap-1.5">
                          <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                          Class_X_Student_List_2026.xlsx
                        </span>
                        <span className="text-[11px] text-slate-400">350 Records Parsed in 1.4s</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Dynamic columns mapped: Roll Number (ID), Student Full Name, Blood Group, Father Name, Contact Number, Bus Stop.
                      </div>
                    </div>
                    <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium flex items-center gap-1.5">
                          <ScanFace className="w-4 h-4 text-purple-400" />
                          Embedded Photo Extraction Module
                        </span>
                        <span className="text-[11px] text-purple-300">350 Photos Extracted</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Automatic image cropping from Word roster tables with resolution validation and automated normalization.
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Verification */}
                {activeTab === 'verification' && (
                  <div className="mt-4 space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-slate-300 font-semibold">Multi-Institution Verification Matrix</span>
                      <span className="text-blue-400">Live Status Check</span>
                    </div>
                    <div className="space-y-2">
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <ShieldAlert className="w-4 h-4 text-amber-400" />
                          <div>
                            <span className="text-white font-medium block">Duplicate Admission #2408 Flagged</span>
                            <span className="text-[10px] text-slate-400">Identical admission number found in Section A and Section B</span>
                          </div>
                        </div>
                        <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800/80">Pending Action</span>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <FileCheck className="w-4 h-4 text-emerald-400" />
                          <div>
                            <span className="text-white font-medium block">Institutional Approval Signoff</span>
                            <span className="text-[10px] text-slate-400">School Administrator marked 348 records as officially verified</span>
                          </div>
                        </div>
                        <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/80">Approved</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Export */}
                {activeTab === 'export' && (
                  <div className="mt-4 space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-slate-300 font-semibold">Pre-Press Production Bundles</span>
                      <span className="text-emerald-400">Agency Formats</span>
                    </div>
                    <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 text-xs space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">CorelDRAW Merged Package (.zip)</span>
                        <span className="text-[11px] text-blue-400 font-mono">Ready to Print</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Generates verified data lists paired with organized photo directories formatted directly for CorelDRAW print-merge macros.
                      </p>
                      <div className="pt-1 flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                        <span className="bg-slate-800 px-2 py-0.5 rounded">CorelDRAW Compatible</span>
                        <span className="bg-slate-800 px-2 py-0.5 rounded">Excel Master Backup</span>
                        <span className="bg-slate-800 px-2 py-0.5 rounded">Normalized JPGs</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PRODUCTS 2 & 3: PRINTFLOW & EAZEFLOW (Asymmetric Dual Grid)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PrintFlow */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-8 flex flex-col justify-between hover:border-purple-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center border border-purple-200">
                  <Grid className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="roadmap" size="sm">
                    In Development
                  </Badge>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">PrintFlow</h3>
              <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider mt-0.5">
                ID-Card Design & Printing Automation Product
              </p>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                An independently hosted printing automation product engineered to streamline sheet imposition, barcode and QR code placement, and high-speed print batch generation.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2.5">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Key Capabilities:
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Maximize className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Automated card sheet imposition for commercial card printers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Precision 1D/2D barcode generation engine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-600 shrink-0" />
                    <span className="text-slate-600">Roadmap: Direct bi-directional API pairing with CardFlow</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-xs text-slate-500">Standalone + CardFlow Integration</span>
              <Button href="/products/printflow" variant="outline" size="sm" withArrow>
                PrintFlow Details
              </Button>
            </div>
          </div>

          {/* EazeFlow */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-8 flex flex-col justify-between hover:border-teal-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center border border-teal-200">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="roadmap" size="sm">
                    In Development
                  </Badge>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">EazeFlow</h3>
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mt-0.5">
                Digital Productivity & Document Utility Product
              </p>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                A focused digital productivity and document utility product built to eliminate administrative friction when working with dirty spreadsheets, irregular Word rosters, and unstandardized PDFs.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2.5">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Key Capabilities:
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Batch document format standardization and sanitization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Structured data cleansing (casing, whitespace, invalid characters)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Secure offline-first processing protecting customer rosters</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-xs text-slate-500">Document Utility Platform</span>
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

