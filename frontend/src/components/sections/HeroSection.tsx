import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { getTrustedClients, getSiteSettings } from '../../api/client';
import { TrustedClientCard, SiteSettings } from '../../types';

const DEFAULT_CARDS: TrustedClientCard[] = [
  {
    id: 1,
    name: 'Card Printing Press & Agency Partner',
    category: 'CardFlow Client',
    tag: '100k+ Cards Workflow',
    summary: 'Commercial agency handling 30+ schools and colleges using CardFlow for automated data intake, photo extraction, and CorelDRAW print packages.',
    image: null,
    image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80',
    link_url: '/products/cardflow',
    display_order: 1,
  },
  {
    id: 2,
    name: 'Smart School & College Campus Network',
    category: 'VidyaFlow Campus',
    tag: 'Daily Attendance & Fees',
    summary: 'Academic verification portals managing tens of thousands of student records, duplicate elimination, and parent approval sign-offs.',
    image: null,
    image_url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&q=80',
    link_url: '/products/vidyaflow',
    display_order: 2,
  },
  {
    id: 3,
    name: 'Messy Excel & Word Document Cleanup',
    category: 'EazeFlow Utility',
    tag: 'Instant Sheet Fixes',
    summary: 'Batch document transformations, data sanitization, structured cleansing, and file normalization.',
    image: null,
    image_url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&q=80',
    link_url: '/products/eazeflow',
    display_order: 3,
  },
];

export const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [trustedClients, setTrustedClients] = useState<TrustedClientCard[]>(DEFAULT_CARDS);
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Load site settings and trusted client cards
  useEffect(() => {
    let isMounted = true;
    getSiteSettings().then((s) => {
      if (isMounted) setSettings(s);
    }).catch(() => {});
    
    getTrustedClients().then((data) => {
      if (isMounted && data && data.length > 0) {
        setTrustedClients(data);
      }
    }).catch(() => {});
    
    return () => {
      isMounted = false;
    };
  }, []);

  // Play / Pause video control
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const defaultVideoUrl = settings?.hero_video_url || "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-31913-large.mp4";

  return (
    <section 
      ref={heroRef}
      className="relative bg-[#070D1A] text-white min-h-[580px] lg:min-h-[620px] xl:min-h-[660px] pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-28 border-b border-slate-800/80 overflow-visible z-20 flex flex-col justify-center"
    >
      {/* Background Subtle Gradient & Grid Mask (strictly contained with overflow-hidden) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />
        
        {/* Subtle Engineering Dot Grid */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38BDF8 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />

        {/* Ambient bottom shade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070D1A] to-transparent pointer-events-none" />
      </div>

      {/* Right-Side Ambient Background Video (Seamless, No Box, No Corners) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[54%] xl:w-[50%] pointer-events-none overflow-hidden z-0 select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover filter brightness-[0.88] contrast-110 opacity-70"
          src={defaultVideoUrl}
        />
        {/* Soft seamless blend gradients on left, top, bottom, and right */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#070D1A] via-[#070D1A]/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#070D1A] via-[#070D1A]/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#070D1A] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#070D1A]/70 to-transparent" />
      </div>

      {/* Main Hero Container */}
      <Container className="relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center w-full">
          
          {/* Left Column: Refined Typography & Punchy Messaging (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0A2558]/80 border border-blue-500/30 text-blue-200 shadow-sm backdrop-blur-xs">
              <picture className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
                <source srcSet="/logo.webp" type="image/webp" />
                <img 
                  src="/logo.png" 
                  alt="KDR" 
                  width="14" 
                  height="14" 
                  decoding="async" 
                  className="w-full h-full object-contain filter drop-shadow-[0_1px_3px_rgba(0,132,255,0.6)]" 
                />
              </picture>
              <span className="tracking-wide">KDR Softwares • Simple &amp; Powerful Tools</span>
            </div>

            {/* Main Clear Headline for Tier 2/3/4 Business & School Owners */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold tracking-tight text-white leading-[1.14]">
              Practical software that makes running your{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-[#7CC2FD] bg-clip-text text-transparent">
                business &amp; schools easy.
              </span>
            </h1>

            {/* Clear, Simple Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
              We build fast, reliable tools like <strong className="text-white font-semibold">CardFlow</strong> for ID card printing agencies and <strong className="text-white font-semibold">VidyaFlow</strong> for schools—saving you hours of manual work and stopping clerical mistakes completely.
            </p>

            {/* Simple, Relatable Signals */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>100,000+ ID Cards Processed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Easy for Staff to Learn in Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Direct WhatsApp &amp; Phone Help</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href="/products/cardflow"
                variant="primary"
                size="md"
                withArrow
                className="font-bold shadow-md shadow-blue-600/30"
              >
                See CardFlow (For Printing)
              </Button>
              <Button
                href="/products/vidyaflow"
                variant="outline"
                size="md"
                className="border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white bg-slate-900/60 backdrop-blur-xs"
              >
                See VidyaFlow (For Schools)
              </Button>
            </div>
          </div>

          {/* Right Column: Open Video Area with Clean Minimal Controls (Exact PTC Layout) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-end items-end relative min-h-[300px] pb-4 pr-2">
            {/* Minimal Play / Pause Toggle Button */}
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>SYSTEM LIVE</span>
              </span>

              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause background video" : "Play background video"}
                className="w-9 h-9 rounded-lg bg-black/40 hover:bg-black/60 text-white border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all active:scale-95 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-white" aria-hidden="true" />
                ) : (
                  <Play className="w-4 h-4 ml-0.5 text-white" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

        </div>
      </Container>

      {/* Docked Client Cards: Sleek 50/50 Overlap (Exact PTC Layout, Clean flat border, NO heavy shadow) */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-30 pointer-events-none">
        <Container className="pointer-events-auto">
          <div className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-6 overflow-x-auto no-scrollbar snap-x pb-2 md:pb-0 px-2 sm:px-0">
            {trustedClients.slice(0, 3).map((card) => (
              <a
                key={card.id}
                href={card.link_url || "/products/cardflow"}
                className="group flex-1 min-w-[270px] sm:min-w-[290px] md:min-w-0 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white text-slate-900 border border-slate-200/90 hover:border-[#0062E3] hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-center gap-3.5 sm:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E3] shadow-xs"
              >
                {/* Left Thumbnail Image */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl overflow-hidden shrink-0 bg-slate-100 relative border border-slate-100">
                  <img
                    src={card.image || card.image_url || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80"}
                    alt={card.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Right Editorial Info */}
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#0062E3] block tracking-wider uppercase leading-none mb-1">
                    {card.category}
                  </span>
                  <h4 className="font-heading font-bold text-slate-900 text-xs sm:text-xs lg:text-sm leading-snug group-hover:text-[#0062E3] transition-colors line-clamp-2">
                    {card.name}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};
