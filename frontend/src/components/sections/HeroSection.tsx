import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { getTrustedClients, getSiteSettings } from '../../api/client';
import { TrustedClientCard, SiteSettings } from '../../types';

export const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [trustedClients, setTrustedClients] = useState<TrustedClientCard[]>([]);
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Load site settings and trusted client cards from backend
  useEffect(() => {
    let isMounted = true;
    getSiteSettings().then((s) => {
      if (isMounted) setSettings(s);
    }).catch(() => {});
    getTrustedClients().then((data) => {
      if (isMounted) setTrustedClients(data);
    }).catch(() => {});
    return () => {
      isMounted = false;
    };
  }, []);

  // Performance optimization: Pause animation loop when hero is off-screen
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
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

  // Interactive 3D technical wireframe / CAD animation on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 1200);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 700);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const vertices = [
      { x: -140, y: -90, z: -70 },
      { x: 140, y: -90, z: -70 },
      { x: 140, y: 90, z: -70 },
      { x: -140, y: 90, z: -70 },
      { x: -100, y: -60, z: 70 },
      { x: 100, y: -60, z: 70 },
      { x: 100, y: 60, z: 70 },
      { x: -100, y: 60, z: 70 },
      { x: 0, y: -120, z: 0 },
      { x: 0, y: 120, z: 0 },
    ];

    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
      [8, 0], [8, 1], [8, 4], [8, 5],
      [9, 2], [9, 3], [9, 6], [9, 7],
    ];

    let angleX = 0.2;
    let angleY = 0.3;

    const render = () => {
      if (!isPlaying || !isIntersecting) return;

      ctx.clearRect(0, 0, width, height);

      // Subtle engineering grid lines
      ctx.strokeStyle = 'rgba(0, 132, 255, 0.08)';
      ctx.lineWidth = 1;
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      angleX += 0.003;
      angleY += 0.004;

      const cx = width * 0.72;
      const cy = height * 0.46;
      const fov = 420;

      const projected = vertices.map((v) => {
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const x1 = v.x * cosY - v.z * sinY;
        const z1 = v.z * cosY + v.x * sinY;

        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const y2 = v.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + v.y * sinX;

        const scale = fov / (fov + z2 + 250);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
        };
      });

      // Draw wireframe edges
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 1.5;
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Draw vertices
      projected.forEach((p, idx) => {
        ctx.fillStyle = idx === 0 ? '#38BDF8' : 'rgba(0, 132, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, idx === 0 ? 3.5 : 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    if (isPlaying && isIntersecting) {
      render();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, isIntersecting]);

  const defaultVideoUrl = settings?.hero_video_url || "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-31913-large.mp4";

  return (
    <section 
      ref={heroRef}
      className="relative bg-[#070D1A] text-white pt-28 pb-32 sm:pb-36 md:pb-32 lg:pt-36 lg:pb-36 border-b border-slate-800/80 overflow-hidden"
    >
      {/* Background Video & Real-Time CAD Simulation Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-20 filter contrast-125"
          src={defaultVideoUrl}
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* High-contrast Vignette / Gradient overlays for crisp editorial legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D1A] via-[#070D1A]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D1A] via-transparent to-[#070D1A]/70" />
      </div>

      {/* Engineering Technical Annotation HUD Markers & 3D Brand Emblem */}
      <div className="hidden lg:flex flex-col items-end gap-3 absolute right-12 xl:right-16 top-28 pointer-events-none z-10 select-none">
        {/* Glowing 3D Emblem Card */}
        <div className="p-4 rounded-2xl bg-[#0A1936]/80 border border-blue-500/30 backdrop-blur-md shadow-[0_0_40px_rgba(0,98,227,0.3)] flex items-center gap-4 pointer-events-auto hover:border-blue-400/60 transition-all duration-300">
          <picture className="w-16 h-16 flex items-center justify-center shrink-0">
            <source srcSet="/logo.webp" type="image/webp" />
            <img 
              src="/logo.png" 
              alt="KDR Softwares 3D Logo" 
              width="64"
              height="64"
              decoding="async"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(0,132,255,0.45)]"
            />
          </picture>
          <div className="font-mono text-left">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" aria-hidden="true" />
              <span>KDR Softwares Mark</span>
            </div>
            <div className="text-slate-400 text-[10px] mt-0.5">Proprietary 3D Identity</div>
            <div className="text-emerald-400 text-[10px]">Active Platform • v2026.1</div>
          </div>
        </div>

        {/* Technical Callout Node */}
        <div className="font-mono text-[11px] text-cyan-300/90 space-y-1 bg-[#0A1936]/70 p-3 rounded-lg border border-cyan-500/20 backdrop-blur-xs text-left w-full max-w-[240px]">
          <div className="text-white font-bold text-[11px]">CardFlow Architecture Node</div>
          <div className="text-slate-400 text-[10px]">Part: CF-PROD-2026-A1</div>
          <div className="text-slate-400 text-[10px]">Envelope: 100k+ Cards Workflow</div>
          <div className="text-emerald-400 text-[10px]">CorelDRAW Compatible</div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-32 top-84 font-mono text-[10px] text-slate-400 pointer-events-none z-10 select-none bg-slate-900/60 px-2.5 py-1 rounded border border-slate-700/50">
        <span className="text-cyan-400 font-semibold">Z ~10.625</span> | Coordinates Locked
      </div>

      {/* Video Play / Pause Floating Toggle */}
      <div className="absolute right-6 top-24 lg:top-auto lg:bottom-28 z-20">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause background animation" : "Play background animation"}
          className="w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 flex items-center justify-center backdrop-blur-md shadow-lg transition-transform active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          title={isPlaying ? "Pause background animation" : "Play background animation"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" aria-hidden="true" />
          ) : (
            <Play className="w-4 h-4 ml-0.5 text-cyan-400 group-hover:scale-110 transition-transform" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Main Hero Content */}
      <Container className="relative z-10">
        <div className="max-w-3xl space-y-6 pt-4 lg:pt-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0A2558]/80 border border-blue-500/40 text-blue-200 shadow-sm backdrop-blur-xs">
            <picture className="w-4 h-4 flex items-center justify-center shrink-0">
              <source srcSet="/logo.webp" type="image/webp" />
              <img src="/logo.png" alt="KDR Monogram" width="16" height="16" decoding="async" className="w-full h-full object-contain filter drop-shadow-[0_1px_4px_rgba(0,132,255,0.6)]" />
            </picture>
            <span>KDR Softwares — Software Products & Custom Technology</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.14] text-balance">
            We turn complex operations into <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-[#7CC2FD] bg-clip-text text-transparent">powerful digital solutions.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-balance">
            From our industry-proven ID production platform <span className="text-white font-bold">CardFlow</span> to tailored enterprise web, mobile, and AI architectures, we build practical software engineered for precision, durability, and business growth.
          </p>

          {/* Quick Production Signals */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
              <span>100,000+ Cards Handled</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
              <span>CorelDRAW Export Pipeline</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
              <span>Navlakha, Indore Engineering</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
            <Button
              href="/products/cardflow"
              variant="primary"
              size="lg"
              className="shadow-xl shadow-blue-600/30 font-bold"
              withArrow
            >
              Explore CardFlow Platform
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white bg-slate-900/60 backdrop-blur-xs"
            >
              Explore Custom Services
            </Button>
          </div>
        </div>
      </Container>

      {/* Docked Client Cards: Sleek 50/50 Overlap */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-30 pointer-events-none">
        <Container className="pointer-events-auto">
          <div className="flex md:grid md:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto no-scrollbar snap-x pb-2 md:pb-0">
            {trustedClients.slice(0, 3).map((card) => (
              <a
                key={card.id}
                href={card.link_url || "/products/cardflow"}
                className="group flex-1 min-w-[270px] md:min-w-0 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white text-slate-900 shadow-xl hover:shadow-2xl border border-slate-200/90 hover:border-[#0062E3]/60 transition-all duration-200 flex items-center gap-3.5 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E3]"
              >
                {/* Left Thumbnail Image */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden shrink-0 bg-slate-900 relative border border-slate-100">
                  <img
                    src={card.image || card.image_url || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80"}
                    alt={card.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Right Editorial Info */}
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-bold text-[#0062E3] block tracking-wide uppercase leading-tight mb-1">
                    {card.category}
                  </span>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-[#0062E3] transition-colors line-clamp-2">
                    {card.name}
                  </h4>
                  <div className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-slate-500 group-hover:text-[#0062E3] transition-colors">
                    <span>{card.tag}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};
