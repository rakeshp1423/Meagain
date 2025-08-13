// src/pages/Design.jsx  (updated single-file)
import React, { useState, useEffect, useRef } from 'react';

// Helper for class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// --- SVG ICONS ---
const DribbbleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="currentColor" className="text-pink-500">
    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM8.29 5.033c.813-1.187 1.94-2.14 3.24-2.737-.12.33-.23.67-.33 1.01-.52 1.68-1.2 3.82-1.94 5.52-.33.76-.68 1.51-1.04 2.24-.11.22-.22.44-.33.66-.04.08-.08.15-.12.23-1.96-1.03-3.53-2.67-4.5-4.66.19-.03.38-.06.57-.08.8-.09 1.59-.14 2.38-.15.39-.01.78-.01 1.17 0h.01zM4.73 14.1c.29.33.6.65.92.95.83.82 1.78 1.5 2.81 1.98.03-.05.06-.1.09-.15.16-.3.32-.6.47-.91.53-1.08 1.1-2.28 1.6-3.72.1-.28.19-.57.28-.85a15.87 15.87 0 0 1-.29-2.18c-.01-.2-.01-.4-.01-.6 0-.03 0-.06-.01-.09-.11.1-.22.2-.33.29-.3.29-.6.58-.9.88-1.2 1.2-2.1 2.69-2.59 4.35-.05.16-.09.33-.13.49-.01 0-.01.01-.02.02zM12.25 2.1c.24.05.48.1.71.16.02 0 .04 0 .06.01.11.03.22.06.33.09 1.93.55 3.56 1.72 4.71 3.28-.53.21-1.07.45-1.59.7L16.4 6.4c-.1.05-.2.1-.3.15l-.06.04c-.31.18-.61.37-.91.56-1.52.99-2.83 2.3-3.85 3.82-.19.28-.37.57-.55.86-.02.03-.04.06-.06.09-.12.2-.24.4-.36.61-.02.03-.04.06-.05.09-.08.13-.15.27-.23.4l-.02.03c-.1.2-.2.4-.3.61-.03.06-.06.12-.09.18-.07.15-.15.3-.22.45l-.01.01c-1.09-2.49-1.2-5.22-.29-7.65zm7.36 12.72c.22-.35.42-.71.61-1.08.6-1.16.98-2.42 1.12-3.72.03-.29.05-.58.06-.87v-.08c0-.02.01-.03.01-.05a.76.76 0 0 1 0-.15c-.06-2.4-1.25-4.58-2.94-6.07.03.06.05.12.07.18.18.49.32 1 .41 1.5.11.58.15 1.17.11 1.76-.09 1.3-.48 2.57-1.12 3.72-.4.72-.89 1.4-1.45 2.01-.15.16-.3.32-.46.48l-.02.02c.81.63 1.54 1.34 2.17 2.13zM9.61 18.97c1.01.52 2.1.82 3.24.82.53 0 1.05-.06 1.56-.17 1.1-.24 2.12-.71 3.03-1.37-.9-1.2-2.04-2.22-3.33-2.98-.53-.31-1.1-.58-1.68-.81-.8-.31-1.62-.5-2.45-.55-.02 0-.03 0-.05 0-.15 0-.3 0-.45.01-.22.01-.43.03-.65.05l-.05.01c-1.1.12-2.17.41-3.17.85.19.62.43 1.22.72 1.79.08.15.16.3.24.45h.01z"></path>
  </svg>
);

const BehanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.25 10.2h-2.92v1.5h2.79c-.15 2.02-1.64 3.3-3.37 3.3-1.85 0-3.41-1.44-3.41-3.58s1.56-3.58 3.41-3.58c1.54 0 2.45.75 2.86 1.68h2.02c-.49-2.28-2.5-3.83-4.88-3.83-3.23 0-5.56 2.58-5.56 5.73s2.33 5.73 5.56 5.73c2.97 0 4.88-1.83 5.1-4.65zm-8.12-2.45h2.55v-1.5H9.13v1.5z"></path>
  </svg>
);

// --- CUSTOM HOOK FOR SCROLL ANIMATIONS ---
const useScrollAnimation = (options = { threshold: 0.12, triggerOnce: true }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce) observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isInView];
};

// --- UI COMPONENTS ---
const Modal = ({ design, onClose }) => {
  if (!design) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-400 transition-colors z-10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <h2 className="text-3xl font-bold text-white mb-4">{design.title}</h2>
        <img
          src={design.image}
          alt={design.title}
          className="w-full h-auto rounded-md mb-4"
          onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/1200x800/1a202c/ffffff?text=Image+Not+Found`; }}
        />
        <p className="text-gray-300 mb-2">{design.concept}</p>
        <p className="text-gray-400 text-sm"><strong>Tools:</strong> {design.tools}</p>
      </div>
    </div>
  );
};

const AnimatedSection = ({ children, className }) => {
  const [ref, isInView] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-900 transform',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
};

// ---------------------
// UPDATED HERO SECTION
// ---------------------
const HeroSection = ({ onViewDesigns }) => {
  // small stats and tech chips for hero
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects', value: '10+' },
    { label: 'Designs', value: '15+' },
  ];

  const techs = ['Figma', 'React', 'Tailwind', 'Django', 'Framer Motion'];

  return (
    <section
      id="home-hero"
      className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden"
      aria-label="Hero"
    >
      {/* background tiled images (very subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="grid grid-cols-2 md:grid-cols-4 h-full w-full opacity-10 blur-sm scale-105">
          <div style={{ backgroundImage: `url('/hero.png')` }} className="bg-cover bg-center" />
          <div style={{ backgroundImage: `url('/memoz.png')` }} className="bg-cover bg-center" />
          <div style={{ backgroundImage: `url('/car.png')` }} className="bg-cover bg-center" />
          <div style={{ backgroundImage: `url('/pets.png')` }} className="bg-cover bg-center" />
        </div>

        {/* animated subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/60" />
      </div>

      {/* floating glass blobs for depth */}
      <div className="absolute -top-16 -left-10 w-40 h-40 rounded-full bg-green-500/10 backdrop-blur-lg animate-[float_8s_ease-in-out_infinite]" style={{ zIndex: 0 }} />
      <div className="absolute bottom-8 right-6 w-48 h-48 rounded-full bg-green-400/6 backdrop-blur-xl animate-[float_11s_ease-in-out_infinite]" style={{ zIndex: 0 }} />

      {/* content */}
      <div className="relative z-10 w-full max-w-6xl px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-green-400 font-medium mb-2">Designer & Frontend Engineer</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            I design beautiful, usable interfaces — <span className="text-green-400">and ship them with React</span>.
          </h1>

          <p className="text-gray-300 max-w-2xl mb-6 text-sm sm:text-base">
            I blend UI/UX thinking with practical engineering: creating polished visuals in Figma and turning them into responsive, accessible web apps using React, Tailwind CSS and Django for server-side needs. I care about clarity, performance, and craft.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-6">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center px-5 py-3 bg-green-400 text-black font-semibold rounded-lg shadow hover:bg-green-300 transition"
            >
              Download CV
            </a>

            <button
              onClick={onViewDesigns}
              className="inline-flex items-center justify-center px-5 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-400/10 transition"
            >
              View Designs
            </button>
          </div>

          {/* small stats */}
          <div className="flex flex-wrap items-center gap-6 mb-6">
            {stats.map((s, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-white">{s.value}</span>
                <span className="text-sm text-gray-300">{s.label}</span>
              </div>
            ))}
          </div>

          {/* tech chips */}
          <div className="flex flex-wrap gap-3">
            {techs.map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white/6 text-gray-200 text-sm">{t}</span>
            ))}
          </div>
        </div>

        {/* Right visual (rounded mockup) */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-[320px] sm:w-[380px] md:w-[460px] lg:w-[520px]">
            <div className="rounded-2xl overflow-hidden border border-white/6 shadow-2xl bg-gradient-to-b from-white/3 to-white/2 p-4">
              <img src="/me.png" alt="Rakesh preview" className="w-full h-auto object-cover rounded-xl" />
            </div>

            {/* overlay small caption */}
            <div className="absolute -bottom-6 left-4 bg-black/60 px-3 py-2 rounded-md text-xs text-gray-200 border border-white/6">
              Click “View Designs” to see full case studies
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <a href="#latest-work" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-gray-300 hover:text-green-400 transition">
        <span className="text-xs mb-1">Scroll for latest work</span>
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
      </a>

      {/* float keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) }
          50% { transform: translateY(-12px) }
          100% { transform: translateY(0) }
        }
        .animate-[float_8s_ease-in-out_infinite] { animation: float 8s ease-in-out infinite; }
        .animate-[float_11s_ease-in-out_infinite] { animation: float 11s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

// ---------------------
// rest sections unchanged except content enrichments below
// ---------------------

const CarouselSection = () => {
  // Images from your /public folder
  const images = [
    { src: '/hero.png', alt: 'Hero Project' },
    { src: '/memoz.png', alt: 'Memoz Project' },
    { src: '/car.png', alt: 'Car Project' },
    { src: '/pets.png', alt: 'Pets Project' },
    { src: '/Screenshot 2025-08-10 012413.png', alt: 'Screenshot 1' },
    { src: '/Screenshot 2025-08-10 012718.png', alt: 'Screenshot 2' },
  ];
  const extendedImages = [...images, ...images];

  return (
    <section id="latest-work" className="bg-gray-900 py-16 md:py-24 relative overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Latest Work</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-400 mb-8">A quick glance — hover to pause, click images in the listings for full details.</p>
      </div>

      <div className="group relative w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="flex animate-scroll group-hover:pause">
          {extendedImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/1a202c/ffffff?text=Image+Error`; }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none"></div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll { animation: scroll 36s linear infinite; }
        @media (max-width: 1023px) {
          .animate-scroll { animation: none; overflow-x: auto; -webkit-overflow-scrolling: touch; }
        }
      `}</style>
    </section>
  );
};

const DesignShowcase = ({ design, direction = 'left', onOpenModal }) => {
  const isReversed = direction === 'right';

  return (
    <AnimatedSection>
      <div className={cn(
        "flex flex-col md:flex-row items-center gap-8 md:gap-12",
        isReversed && "md:flex-row-reverse"
      )}>
        <div className="w-full md:w-1/2 relative group rounded-lg overflow-hidden shadow-lg">
          <img
            src={design.image}
            alt={design.title}
            className="w-full h-auto object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x600/1a202c/ffffff?text=Image+Error`; }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
            <button
              onClick={() => onOpenModal(design)}
              className="text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-semibold opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-90 transition-all duration-300"
            >
              View Full
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h3 className="text-3xl font-bold text-white mb-3">{design.title}</h3>
          <p className="text-gray-300 mb-4">{design.concept}</p>
          <p className="text-gray-400 text-sm"><strong>Tools / Deliverables:</strong> {design.tools}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const WorkspaceSection = () => (
  <section className="py-16 md:py-24 bg-gray-900">
    <AnimatedSection className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img
            src="/figma-workspace.png"
            alt="Figma Workspace"
            className="rounded-lg shadow-2xl"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/1200x800/1a202c/ffffff?text=Image+Error`; }}
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Workspace</h2>
          <p className="text-gray-300 leading-relaxed">
            Figma is my go-to tool for digital design. Its collaborative nature, powerful vector tools, and component-based workflow allow me to iterate quickly and maintain consistency across complex projects. My process typically involves starting with low-fidelity wireframes, building a design system, and then creating high-fidelity mockups before handing off to development.
          </p>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

const InspirationSection = () => (
  <section className="py-16 md:py-24 bg-gray-950">
    <AnimatedSection className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Inspiration</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            I believe great design is born from a blend of inspiration and experimentation. I constantly browse platforms like Dribbble and Behance to stay updated with trends and discover innovative solutions. This exposure fuels my creativity and pushes me to explore new visual styles, interaction patterns, and user experiences in my own work.
          </p>
        </div>
        <div className="flex justify-center md:justify-end items-center gap-8">
          <a href="#" aria-label="Dribbble" className="transition-transform hover:scale-110"><DribbbleIcon /></a>
          <a href="#" aria-label="Behance" className="transition-transform hover:scale-110"><BehanceIcon /></a>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

// --- MAIN APP COMPONENT ---
export default function Design() {
  const [modalContent, setModalContent] = useState(null);

  // === expanded/descriptive project entries (improved "about my designs") ===
  const designProjects = [
    {
      image: '/hero.png',
      title: 'Hero Section — Bold Entry',
      concept: 'A high-impact hero built to convert: large type hierarchy, clear CTA, and a layered visual that balances illustration and negative space. Designed to improve first-impression clarity and immediate action (download / contact). Delivered: Figma comps, responsive HTML/CSS prototype, React component.',
      tools: 'Figma • React • Tailwind • Framer Motion'
    },
    {
      image: '/memoz.png',
      title: 'Memoz — Productivity App UI',
      concept: 'Focused on quick capture and low-friction reminders. Built flows for rapid note entry, lightweight tagging, and a distraction-free reading mode. Solved onboarding friction by introducing progressive disclosure and subtle micro-interactions in onboarding screens.',
      tools: 'Figma • Prototyping • Lottie animations'
    },
    {
      image: '/car.png',
      title: 'Car Showcase — Visual Commerce',
      concept: 'A product-led showcase for automotive listings with immersive imagery, prioritized specs, and a smooth gallery. Emphasis on hierarchy for pricing, trims, and call-to-action flows to increase click-to-contact by improving visual trust.',
      tools: 'Figma • Photoshop • UI Kit'
    },
    {
      image: '/pets.png',
      title: 'Pet Adoption Portal',
      concept: 'A friendly, empathy-first interface connecting shelters and adopters. Designed for discoverability of pets, easy filtering, and clear adoption steps — with an emotional design language and approachable microcopy.',
      tools: 'Figma • Accessibility review • Usability testing'
    },
    {
      image: '/Screenshot 2025-08-10 012413.png',
      title: 'Dashboard — Analytics Cards',
      concept: 'Admin dashboard for monitoring KPIs with card-based layout, progressive detail drill-downs, and mobile-first responsive tables. Focused on readable data density and fast visual scanning.',
      tools: 'Figma • Charting guidelines • React components'
    },
    {
      image: '/Screenshot 2025-08-10 012718.png',
      title: 'E-commerce Product Detail',
      concept: 'Product page redesign that emphasizes imagery, trust signals, and a frictionless checkout path. Introduced sticky CTAs, clearer shipping info, and image zoom patterns to raise conversions.',
      tools: 'Figma • UX copywriting • Prototyping'
    },
  ];

  useEffect(() => {
    document.body.style.overflow = modalContent ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [modalContent]);

  // simple handler to jump to designs section (used by hero CTA)
  const scrollToDesigns = () => {
    const el = document.getElementById('latest-work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #0A0A0A; }

        /* carousel auto-scroll */
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll { animation: scroll 36s linear infinite; }
        .group-hover\\:pause:hover { animation-play-state: paused; }

        /* hero utilities (fade-in) */
        @keyframes fade-in-down { 0% { opacity:0; transform:translateY(-16px) } 100% { opacity:1; transform:translateY(0) } }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        @keyframes fade-in-up { 0% { opacity:0; transform:translateY(12px) } 100% { opacity:1; transform:translateY(0) } }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.2s forwards; opacity:0; }

        @media (max-width: 1023px) {
          .animate-scroll { animation: none; overflow-x: auto; -webkit-overflow-scrolling: touch; }
        }
      `}</style>

      <div className="bg-gray-950">
        {/* Hero now receives the CTA handler */}
        <HeroSection onViewDesigns={scrollToDesigns} />

        <CarouselSection />

        <main className="py-16 md:py-24 bg-gray-950">
          <div className="container mx-auto px-4 space-y-20 md:space-y-28">
            {designProjects.map((design, index) => (
              <DesignShowcase
                key={index}
                design={design}
                direction={index % 2 === 0 ? 'left' : 'right'}
                onOpenModal={setModalContent}
              />
            ))}
          </div>
        </main>

        <WorkspaceSection />
        <InspirationSection />

        <footer className="bg-gray-950 text-center py-8">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Rakesh Kumar. All Rights Reserved.</p>
        </footer>

        <Modal design={modalContent} onClose={() => setModalContent(null)} />
      </div>
    </>
  );
}
