import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  ExternalLink, 
  Building2, 
  Layers, 
  Maximize2, 
  ShieldCheck, 
  Sparkles,
  X,
  Loader2
} from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { getTrustedClients, addTrustedClient, getSiteSettings } from '../../api/client';
import { TrustedClientCard, SiteSettings } from '../../types';

export const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [trustedClients, setTrustedClients] = useState<TrustedClientCard[]>([]);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form state for adding a new trusted client card
  const [newClient, setNewClient] = useState({
    name: '',
    category: 'Commercial Agency',
    tag: 'Verified Client',
    summary: '',
    image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80',
    link_url: '/products/cardflow',
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Load site settings and trusted client cards
  useEffect(() => {
    getSiteSettings().then((s) => setSettings(s)).catch(() => {});
    getTrustedClients().then((data) => setTrustedClients(data)).catch(() => {});
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

  // Interactive 3D technical wireframe / CAD animation on Canvas (matches PTC's technical engineering aesthetic)
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

    // 3D Wireframe geometric points (simulating CAD part coordinates like PTC Jetstream)
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
      ctx.clearRect(0, 0, width, height);

      // Subtle engineering grid
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.07)';
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

      // Rotate CAD wireframe
      if (isPlaying) {
        angleX += 0.003;
        angleY += 0.004;
      }

      const cx = width * 0.72; // Anchor on right half behind graphic
      const cy = height * 0.46;
      const fov = 420;

      const projected = vertices.map((v) => {
        // Rotate around Y
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const x1 = v.x * cosY - v.z * sinY;
        const z1 = v.z * cosY + v.x * sinY;

        // Rotate around X
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const y2 = v.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + v.y * sinX;

        const scale = fov / (fov + z2 + 250);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          scale,
        };
      });

      // Draw wireframe edges
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.lineWidth = 1.5;
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Draw vertices with coordinate dots
      projected.forEach((p, idx) => {
        ctx.fillStyle = idx === 0 ? '#38BDF8' : 'rgba(96, 165, 250, 0.7)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, idx === 0 ? 3.5 : 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  // Handle client creation from the UI
  const handleAddClientSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClient.name.trim() || !newClient.summary.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await addTrustedClient(newClient);
      if (res.data) {
        setTrustedClients((prev) => [res.data!, ...prev]);
      }
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowAddModal(false);
        setNewClient({
          name: '',
          category: 'Commercial Agency',
          tag: 'Verified Client',
          summary: '',
          image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80',
          link_url: '/products/cardflow',
        });
      }, 1500);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const defaultVideoUrl = settings?.hero_video_url || "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-31913-large.mp4";

  return (
    <section className="relative bg-[#07090E] text-white overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16 border-b border-slate-800">
      {/* =========================================================================
          BACKGROUND VIDEO & 3D TECHNICAL CAD OVERLAY (Inspired by PTC)
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Real HTML5 Loop Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 filter contrast-125"
          src={defaultVideoUrl}
        />

        {/* Real-time 3D CAD Wireframe Simulation Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* High-contrast Vignette / Gradient overlays for crisp editorial legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090E] via-[#07090E]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-[#07090E]/60" />
      </div>

      {/* Engineering Technical Annotation HUD Markers (Matching PTC's Dimension Callouts) */}
      <div className="hidden lg:block absolute right-16 top-36 font-mono text-[11px] text-cyan-400/80 pointer-events-none z-10 select-none space-y-1 bg-slate-950/70 p-3 rounded-lg border border-cyan-500/20 backdrop-blur-xs">
        <div className="flex items-center gap-2 text-cyan-300 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>CardFlow Architecture Node</span>
        </div>
        <div className="text-slate-400 text-[10px]">Part: CF-PROD-2026-A1</div>
        <div className="text-slate-400 text-[10px]">Envelope: (100k+, Multi-Institution, Sync)</div>
        <div className="text-emerald-400 text-[10px]">Verification: 100% CorelDRAW Compatible</div>
      </div>

      <div className="hidden lg:block absolute right-32 top-72 font-mono text-[10px] text-slate-400 pointer-events-none z-10 select-none bg-slate-900/60 px-2.5 py-1 rounded border border-slate-700/50">
        <span className="text-cyan-400 font-semibold">Z ~10.625</span> | Coordinates Locked
      </div>

      <div className="hidden lg:block absolute right-72 bottom-48 font-mono text-[10px] text-slate-400 pointer-events-none z-10 select-none bg-slate-900/60 px-2.5 py-1 rounded border border-slate-700/50">
        <span className="text-cyan-400 font-semibold">X -23.446</span> | Vector Raster Pass
      </div>

      {/* Video Play / Pause Floating Toggle (Just like PTC bottom-right pause button) */}
      <div className="absolute right-6 top-28 lg:top-auto lg:bottom-44 z-20">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause background animation" : "Play background animation"}
          className="w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 flex items-center justify-center backdrop-blur-md shadow-lg transition-transform active:scale-95 group"
          title={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-4 h-4 ml-0.5 text-cyan-400 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>

      {/* =========================================================================
          MAIN HERO HEADLINE CONTENT (High-Contrast Editorial Typography)
          ========================================================================= */}
      <Container className="relative z-10">
        <div className="max-w-3xl space-y-6 pt-4 lg:pt-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-950/80 border border-blue-700/50 text-blue-300 shadow-sm backdrop-blur-xs">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>KDR Softwares — Software Products & Custom Technology</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.12]">
            We turn complex operations into <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">powerful digital solutions.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            From our industry-proven ID production platform <span className="text-white font-semibold">CardFlow</span> to tailored enterprise web, mobile, and AI architectures, we build practical software engineered for precision, durability, and business growth.
          </p>

          {/* Quick Production Signals */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100,000+ Cards Processed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>CorelDRAW Pre-Press Export</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Navlakha, Indore Engineering</span>
            </div>
          </div>

          {/* Action CTAs (Vibrant high-contrast button like PTC Jetstream) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
            <Button
              href="/products/cardflow"
              variant="primary"
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20 border-0"
              withArrow
            >
              Meet CardFlow Platform
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

        {/* =========================================================================
            DOCKED CARDS: TRUSTED CLIENTS / PARTNERS / FEATURED CAPABILITIES
            (Matches the cards docked below the video in the PTC screenshot)
            ========================================================================= */}
        <div className="mt-16 lg:mt-24 pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Trusted Client Deployments & Featured Solutions
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-800/60 transition-all shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Client / Partner Card</span>
              </button>
            </div>
          </div>

          {/* Horizontal Card Deck */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustedClients.map((card) => (
              <a
                key={card.id}
                href={card.link_url || "/products/cardflow"}
                className="group p-4 rounded-2xl bg-white text-slate-900 border border-slate-200/90 hover:border-cyan-400 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex gap-4 items-start relative overflow-hidden"
              >
                {/* Left Thumbnail Image */}
                <div className="w-24 h-24 sm:w-28 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-slate-900 relative border border-slate-100">
                  <img
                    src={card.image || card.image_url || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80"}
                    alt={card.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Right Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[11px] font-bold text-blue-600 block leading-none">
                      {card.category}
                    </span>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm mt-1.5 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {card.name}
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {card.summary}
                    </p>
                  </div>

                  <div className="mt-2 pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-mono text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">
                      {card.tag}
                    </span>
                    <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>

      {/* =========================================================================
          ADD TRUSTED CLIENT MODAL (Empowering Users to Add & Manage Client Cards)
          ========================================================================= */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">
                  Add a Trusted Client / Partner Card
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  The new card will immediately dock below the hero video and persist to the database.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Client Card Added!</h4>
                <p className="text-xs text-slate-500">Your trusted client card is now live on the homepage.</p>
              </div>
            ) : (
              <form onSubmit={handleAddClientSubmit} className="mt-4 space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Client / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Identification Systems"
                    value={newClient.name}
                    onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Category Tag *
                    </label>
                    <select
                      value={newClient.category}
                      onChange={(e) => setNewClient({ ...newClient, category: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Commercial Agency">Commercial Agency</option>
                      <option value="Institutional Client">Institutional Client</option>
                      <option value="Enterprise Partner">Enterprise Partner</option>
                      <option value="Technology Alliance">Technology Alliance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Highlight Tag *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 100k+ Cards / CorelDRAW"
                      value={newClient.tag}
                      onChange={(e) => setNewClient({ ...newClient, tag: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Operational Deployment Summary *
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Short summary of the operational problem solved or deployment outcome..."
                    value={newClient.summary}
                    onChange={(e) => setNewClient({ ...newClient, summary: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Thumbnail Image URL (Optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    value={newClient.image_url}
                    onChange={(e) => setNewClient({ ...newClient, image_url: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Page Link
                  </label>
                  <input
                    type="text"
                    placeholder="/products/cardflow"
                    value={newClient.link_url}
                    onChange={(e) => setNewClient({ ...newClient, link_url: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    isLoading={isSubmitting}
                    withArrow
                  >
                    Save & Display Card
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
