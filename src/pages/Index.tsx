import { useState, useEffect, useRef, FormEvent } from "react";

/* ─── Intersection Observer Hook ─── */
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useInView();
  return <div ref={ref} className={`fade-in-up ${visible ? "visible" : ""} ${className}`}>{children}</div>;
}

/* ═══════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════ */
function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["Home", "About", "Services", "Pricing", "Portfolio", "Contact"];

  const handleClick = () => setOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.jpg" alt="BsoftDigital" className="h-10 w-auto" />
          <span className="font-heading font-bold text-xl text-primary">BsoftDigital</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-bold tracking-wide text-primary-dark hover:text-accent-green transition-colors">
              {l}
            </a>
          ))}
          <a href="#contact" className="bg-accent-green hover:bg-accent-orange text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors">
            Get Started
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden text-foreground text-2xl" onClick={() => setOpen(!open)}>
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 pb-6 space-y-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={handleClick} className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
          <a href="#contact" onClick={handleClick} className="inline-block bg-accent-green hover:bg-accent-orange text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #1a2332 0%, #2c5282 100%)" }}>
      {/* Animated glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent-green/20 blur-[100px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-orange/15 blur-[120px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="animate-fade-in-up">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Empowering Your <span className="text-accent-green">Digital</span> Growth
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            We build cutting-edge websites, mobile apps, and digital solutions that help your business thrive in the modern world.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-accent-green hover:bg-accent-orange text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Start Your Project
            </a>
            <a href="#portfolio" className="border-2 border-white text-white hover:bg-white hover:text-primary-dark font-semibold px-8 py-3 rounded-full transition-colors">
              View Our Work
            </a>
          </div>
        </div>

        {/* SVG Illustration */}
        <div className="hidden md:flex justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <svg viewBox="0 0 500 400" className="w-full max-w-md" fill="none">
            {/* Laptop body */}
            <rect x="80" y="60" width="340" height="220" rx="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            {/* Screen */}
            <rect x="100" y="80" width="300" height="180" rx="4" fill="rgba(255,255,255,0.05)" />
            {/* Code lines */}
            <rect x="120" y="100" width="120" height="6" rx="3" fill="#48bb78" opacity="0.8" />
            <rect x="120" y="116" width="180" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
            <rect x="120" y="132" width="90" height="6" rx="3" fill="#ed8936" opacity="0.7" />
            <rect x="120" y="148" width="200" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
            <rect x="120" y="164" width="140" height="6" rx="3" fill="#48bb78" opacity="0.5" />
            <rect x="120" y="180" width="160" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
            <rect x="120" y="196" width="100" height="6" rx="3" fill="#ed8936" opacity="0.5" />
            <rect x="120" y="212" width="220" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
            {/* Keyboard base */}
            <path d="M60 280 L440 280 L460 310 Q460 320 450 320 L50 320 Q40 320 40 310 Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            {/* Circuit traces */}
            <circle cx="360" cy="120" r="20" stroke="#48bb78" strokeWidth="1" fill="none" opacity="0.4" />
            <circle cx="360" cy="120" r="8" fill="#48bb78" opacity="0.3" />
            <line x1="380" y1="120" x2="420" y2="120" stroke="#48bb78" strokeWidth="1" opacity="0.3" />
            <line x1="360" y1="140" x2="360" y2="180" stroke="#48bb78" strokeWidth="1" opacity="0.3" />
            {/* Floating elements */}
            <rect x="340" y="170" width="50" height="50" rx="8" fill="rgba(237,137,54,0.2)" stroke="rgba(237,137,54,0.4)" strokeWidth="1" transform="rotate(15 365 195)" />
            <circle cx="380" cy="230" r="15" fill="rgba(72,187,120,0.2)" stroke="rgba(72,187,120,0.4)" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   WHY CHOOSE US
   ═══════════════════════════════════════════ */
const benefits = [
  { icon: "fa-rocket", title: "Innovative Solutions", desc: "We leverage the latest technologies to build solutions that keep you ahead of the competition." },
  { icon: "fa-sack-dollar", title: "Affordable Pricing", desc: "Quality digital solutions that fit your budget, from startups to established businesses." },
  { icon: "fa-bolt", title: "Fast Delivery", desc: "We understand time is money. Our agile process ensures rapid development without compromising quality." },
  { icon: "fa-shield-halved", title: "Ongoing Support", desc: "Our relationship doesn't end at launch. We provide continuous support to ensure your digital success." },
];

function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Why Choose BsoftDigital?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-14">We combine technical expertise with creative innovation</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <FadeIn key={i}>
              <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-2xl" style={{ background: "linear-gradient(135deg, #48bb78, #ed8936)" }}>
                  <i className={`fa-solid ${b.icon}`} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════ */
const services = [
  { gradient: "linear-gradient(135deg, #667eea, #764ba2)", icon: "fa-laptop-code", title: "Web Development", desc: "Custom websites and web applications built with modern technologies. From landing pages to complex e-commerce platforms, we deliver responsive, fast, and SEO-optimised solutions." },
  { gradient: "linear-gradient(135deg, #f093fb, #f5576c)", icon: "fa-mobile-screen-button", title: "Mobile App Development", desc: "Native and cross-platform mobile applications for iOS and Android. We create intuitive, high-performance apps that your users will love." },
  { gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", icon: "fa-chart-line", title: "Digital Consulting", desc: "Strategic digital consulting to transform your business. We analyse your needs, identify opportunities, and create roadmaps for digital success." },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-14">Comprehensive digital solutions tailored to your needs</p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={i}>
              <div className="rounded-2xl p-8 text-white text-left hover:scale-105 transition-transform duration-300 h-full flex flex-col" style={{ background: s.gradient }}>
                <i className={`fa-solid ${s.icon} text-4xl mb-6`} />
                <h3 className="font-heading font-bold text-xl mb-4">{s.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed flex-1 mb-6">{s.desc}</p>
                <a href="#contact" className="inline-block bg-white/20 hover:bg-white/30 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors self-start">
                  Learn More
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PRICING
   ═══════════════════════════════════════════ */
const plans = [
  { name: "Starter", price: "$299", period: "one-time", desc: "Perfect for small businesses getting started online", features: ["5-Page Website", "Mobile Responsive", "Basic SEO Setup", "Contact Form", "1 Month Support"], cta: "Get Started", popular: false },
  { name: "Professional", price: "$799", period: "one-time", desc: "Ideal for growing businesses needing more features", features: ["Up to 15 Pages", "E-Commerce Ready", "Advanced SEO", "Custom Animations", "Payment Integration", "3 Months Support"], cta: "Get Started", popular: true },
  { name: "Enterprise", price: "Custom", period: "pricing", desc: "Full-scale digital solutions for large organisations", features: ["Unlimited Pages", "Custom Web App", "Mobile App Included", "Priority Support", "Monthly Maintenance", "Dedicated Team"], cta: "Contact Us", popular: false },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-14">Choose the plan that works best for your business</p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => (
            <FadeIn key={i}>
              <div className={`relative bg-card rounded-2xl p-8 flex flex-col h-full transition-transform ${p.popular ? "border-2 border-accent-green md:scale-105 shadow-xl" : "border border-border shadow-sm"}`}>
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-green text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{p.name}</h3>
                <div className="mb-2">
                  <span className="font-heading font-extrabold text-4xl text-foreground">{p.price}</span>
                  {p.period !== "pricing" && <span className="text-muted-foreground text-sm ml-1">{p.period}</span>}
                </div>
                <p className="text-muted-foreground text-sm mb-6">{p.desc}</p>
                <ul className="text-left space-y-3 mb-8 flex-1">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-foreground">
                      <i className="fa-solid fa-check text-accent-green" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center font-semibold text-sm px-6 py-3 rounded-full transition-colors ${p.popular ? "bg-accent-green hover:bg-accent-orange text-white" : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}>
                  {p.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PORTFOLIO
   ═══════════════════════════════════════════ */
const projects = [
  { image: "portfolio1ecommerse.png", title: "SuperRutanz E-Commerce", desc: "Full-stack e-commerce platform with payment integration and inventory management.", tag: "Web Development" },
  { image: "mobilefacegourd.jpg", title: "FarmConnect Mobile App", desc: "Cross-platform mobile app connecting farmers with buyers across Zimbabwe.", tag: "Mobile App" },
  { image: "analytics.jpg", title: "Corporate Dashboard", desc: "Real-time analytics dashboard for a leading financial services company.", tag: "Web App" },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-muted">
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Our Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-14">Recent projects we're proud of</p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <FadeIn key={i}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden rounded-t-2xl">
                  <img 
                    src={`/images/${p.image}`} 
                    alt={p.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <span className="inline-block bg-accent-green/10 text-accent-green text-xs font-semibold px-3 py-1 rounded-full">{p.tag}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════ */
function Testimonials() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-14">Don't just take our word for it</p>
        </FadeIn>
        <FadeIn>
          <div className="max-w-3xl mx-auto bg-muted rounded-2xl p-10 relative">
            <i className="fa-solid fa-quote-left text-accent-green/15 text-8xl absolute top-6 left-8" />
            <p className="text-foreground text-lg leading-relaxed mb-8 relative z-10">
              "BsoftDigital transformed our online presence completely. The e-commerce platform they built has tripled our sales in just 6 months. Their team is professional, creative, and truly understands business needs."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-white text-sm" style={{ background: "linear-gradient(135deg, #48bb78, #ed8936)" }}>
                TM
              </div>
              <div className="text-left">
                <p className="font-heading font-semibold text-foreground text-sm">Tendai Moyo</p>
                <p className="text-muted-foreground text-xs">CEO, SuperRutanz</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════ */
function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Invalid email";
    if (!formData.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: "fa-location-dot", label: "Location", value: "Harare, Zimbabwe" },
    { icon: "fa-envelope", label: "Email", value: "info@bsoftdigital.co.zw" },
    { icon: "fa-phone", label: "Phone", value: "+263 777 448 666" },
  ];

  const socials = [
    { icon: "fa-facebook-f", href: "#" },
    { icon: "fa-github", href: "#" },
    { icon: "fa-linkedin-in", href: "#" },
    { icon: "fa-instagram", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 relative" style={{ background: "linear-gradient(135deg, #1a2332 0%, #2c5282 100%)" }}>
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Get In Touch</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Let's discuss how we can help transform your digital presence</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <FadeIn>
            <div className="glass rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <i className="fa-solid fa-circle-check text-accent-green text-5xl mb-4" />
                  <p className="text-white text-lg">Thank you for contacting BsoftDigital, <strong>{formData.name}</strong>! We will get back to you shortly at <strong>{formData.email}</strong>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { key: "name", label: "Name", type: "text", required: true },
                    { key: "email", label: "Email", type: "email", required: true },
                    { key: "phone", label: "Phone (Optional)", type: "tel", required: false },
                  ].map(f => (
                    <div key={f.key}>
                      <input
                        type={f.type}
                        placeholder={f.label}
                        value={formData[f.key as keyof typeof formData]}
                        onChange={e => setFormData(p => ({ ...p, [f.key]: e.target.value }))}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-accent-green transition-colors"
                      />
                      {errors[f.key] && <p className="text-accent-orange text-xs mt-1">{errors[f.key]}</p>}
                    </div>
                  ))}
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-accent-green transition-colors resize-none"
                    />
                    {errors.message && <p className="text-accent-orange text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" className="w-full bg-accent-green hover:bg-accent-orange text-white font-semibold py-3 rounded-full transition-colors">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Contact info */}
          <FadeIn>
            <div className="space-y-6">
              {contactInfo.map((c, i) => (
                <div key={i} className="glass rounded-xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent-green/20 text-accent-green">
                    <i className={`fa-solid ${c.icon}`} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-semibold uppercase">{c.label}</p>
                    <p className="text-white">{c.value}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 pt-4">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-accent-green/30 transition-colors">
                    <i className={`fa-brands ${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="py-16 text-white" style={{ background: "#1a2332" }}>
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <i className="fa-solid fa-bolt text-accent-green text-xl" />
              <span className="font-heading font-bold text-lg">BsoftDigital</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              We are a Zimbabwe-based tech startup dedicated to delivering innovative digital solutions that empower businesses and drive growth. From web development to mobile apps and digital strategy, we're your trusted technology partner.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Pricing", "Portfolio"].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-white/60 hover:text-accent-green text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "Mobile Apps", "Consulting", "Get a Quote"].map(l => (
                <li key={l}><a href="#services" className="text-white/60 hover:text-accent-green text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-white/60 hover:text-accent-green text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="text-white/60 hover:text-accent-green text-sm transition-colors">Terms & Conditions</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-accent-green text-sm transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/40 text-sm">© 2026 BsoftDigital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   INDEX PAGE
   ═══════════════════════════════════════════ */
const Index = () => (
  <div className="min-h-screen">
    <Navigation />
    <Hero />
    <WhyChooseUs />
    <Services />
    <Pricing />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default Index;
