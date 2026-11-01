import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers, FileSpreadsheet, Download, RefreshCw, Users } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const HeroSection: React.FC = () => {
  const [activeInstitution, setActiveInstitution] = useState<'school' | 'college' | 'corporate'>('school');

  const institutions = {
    school: {
      name: 'Delhi Public School — Session 2026',
      records: '1,420 Students',
      verified: '1,418 Approved',
      photos: '1,420 Matched (100%)',
      duplicates: '0 Flagged',
      status: 'Ready for CorelDRAW Export',
    },
    college: {
      name: 'Prestige Institute of Management & Tech',
      records: '3,850 Students',
      verified: '3,810 Approved',
      photos: '3,845 Matched',
      duplicates: '5 Resolved',
      status: 'Verification In-Progress',
    },
    corporate: {
      name: 'Central Logistics & Transport Corp',
      records: '680 Employees',
      verified: '680 Approved',
      photos: '680 Extracted from Word',
      duplicates: '0 Flagged',
      status: 'Ready for Print Run',
    },
  };

  const current = institutions[activeInstitution];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/60">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition (5-second clarity) */}
          <div className="lg:col-span-6 space-y-6 lg:pr-4">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200/80 text-blue-700 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Independent Software Products & Custom Technology</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              We turn complex operations into <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">powerful digital solutions.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              From our purpose-built ID production engine <span className="font-semibold text-slate-800">CardFlow</span> to tailored enterprise web, mobile, and AI architectures, we build practical software that eliminates manual bottlenecks and scales with your business.
            </p>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100,000+ Real ID Cards Processed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Production-Tested Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Per-Seat Licensing Penalties</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Indore, MP Engineering Team</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <Button href="/products" variant="primary" size="lg" withArrow>
                Explore Our Products
              </Button>
              <Button href="/services" variant="white" size="lg">
                Explore Custom Services
              </Button>
            </div>
          </div>

          {/* Right Column: Layered Interactive Interface Preview (CardFlow Workflow Simulator) */}
          <div className="lg:col-span-6 relative">
            {/* Outer Decorative Glow Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 p-3 sm:p-5 shadow-2xl border border-slate-800">
              {/* Window Controls Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">CardFlow Agency Hub v2.4</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Production Session
                  </span>
                </div>
              </div>

              {/* Institution Switcher Tabs */}
              <div className="mt-3.5 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveInstitution('school')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 ${
                    activeInstitution === 'school'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  Delhi Public School
                </button>
                <button
                  type="button"
                  onClick={() => setActiveInstitution('college')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 ${
                    activeInstitution === 'college'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  Prestige Institute
                </button>
                <button
                  type="button"
                  onClick={() => setActiveInstitution('corporate')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 ${
                    activeInstitution === 'corporate'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  Central Logistics
                </button>
              </div>

              {/* Institution Context Card */}
              <div className="mt-4 bg-slate-950/70 rounded-xl p-4 border border-slate-800/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/60">
                  <div>
                    <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-400" />
                      {current.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">Custom Schema: Roll No, Name, Blood Group, Father Name, Bus Route, Photo Embed</p>
                  </div>
                  <Badge variant="blue" size="sm">
                    {current.status}
                  </Badge>
                </div>

                {/* Metric Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3 pt-1">
                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 block uppercase font-mono">Total Roster</span>
                    <span className="text-sm font-bold text-white">{current.records}</span>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-[10px] text-emerald-400 block uppercase font-mono">Verified Records</span>
                    <span className="text-sm font-bold text-emerald-300">{current.verified}</span>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-[10px] text-purple-400 block uppercase font-mono">Photos Matched</span>
                    <span className="text-sm font-bold text-purple-300">{current.photos}</span>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-[10px] text-amber-400 block uppercase font-mono">Duplicates</span>
                    <span className="text-sm font-bold text-amber-300">{current.duplicates}</span>
                  </div>
                </div>

                {/* Table Simulation Sample */}
                <div className="mt-3.5 bg-slate-900/50 rounded-lg p-2.5 border border-slate-800/60 text-[11px]">
                  <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                    <span>Recent Intake Batch #409 (Excel Sheet)</span>
                    <span className="text-blue-400 font-mono">Photo Extraction: OK</span>
                  </div>
                  <div className="mt-2 space-y-1.5 font-mono text-[10px]">
                    <div className="flex items-center justify-between text-slate-300 bg-slate-800/40 px-2 py-1 rounded">
                      <span>#1042 — Aarav Mehta (Class 10-A)</span>
                      <span className="text-emerald-400">✓ Verified & Approved</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300 bg-slate-800/40 px-2 py-1 rounded">
                      <span>#1043 — Priya Sharma (Class 10-A)</span>
                      <span className="text-emerald-400">✓ Verified & Approved</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300 bg-slate-800/40 px-2 py-1 rounded">
                      <span>#1044 — Rohan Verma (Class 10-B)</span>
                      <span className="text-blue-400">⚡ Auto-matched by Roll#</span>
                    </div>
                  </div>
                </div>

                {/* Export Action Bar */}
                <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                    <span className="text-slate-500">Output Pipeline:</span>
                    <span className="text-slate-300 font-medium">CorelDRAW Compatible ZIP Bundle</span>
                  </div>
                  <Button href="/products/cardflow" variant="white" size="sm" withArrow>
                    Inspect CardFlow
                  </Button>
                </div>
              </div>

              {/* Floating Technology Feature Pill */}
              <div className="absolute -bottom-4 -left-3 hidden sm:flex items-center gap-2.5 bg-white text-slate-800 px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 text-xs font-semibold">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                <span>Direct Excel & Word Intake</span>
              </div>

              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-blue-600 text-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Automated Photo Extraction</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
