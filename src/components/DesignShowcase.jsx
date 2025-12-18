import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Palette, MousePointer2, Monitor, Smartphone, Figma, PenTool } from 'lucide-react';

const DesignShowcase = () => {
  const [isHoveringDeck, setIsHoveringDeck] = useState(false);

  // Variant for the "Spread" effect on the cards
  const cardVariants = {
    hover: (custom) => ({
      rotate: custom.rotate,
      x: custom.x,
      y: custom.y,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }),
    initial: {
      rotate: -6, // All cards slightly tilted together
      x: 0,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <div className="min-h-screen bg-[#02020A] text-white p-6 md:p-12 font-sans selection:bg-[#10B981] selection:text-white flex items-center justify-center">
      
      <div className="max-w-6xl w-full">
        
        {/* SEPARATOR LINE */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent mb-20"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content & Interactive Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8 relative z-10"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              Design Portfolio
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Digital</span> <br />
              <span className="text-[#10B981]">Experiences.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-md border-l-2 border-[#10B981]/30 pl-6">
              It's not just about pixels; it's about the feeling. Explore my collection of user-centric interfaces, interactive prototypes, and design systems.
            </p>

            {/* Stats / Tools Row (New Content) */}
            <div className="flex gap-6 py-4">
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">50+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Prototypes</span>
               </div>
               <div className="w-px h-10 bg-gray-800"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">20+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Systems</span>
               </div>
               <div className="w-px h-10 bg-gray-800"></div>
               <div className="flex items-center gap-3 text-gray-400">
                  <Figma size={20} className="hover:text-[#10B981] transition-colors cursor-pointer" />
                  <PenTool size={20} className="hover:text-[#10B981] transition-colors cursor-pointer" />
                  <Monitor size={20} className="hover:text-[#10B981] transition-colors cursor-pointer" />
               </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="/designs"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-4 bg-[#10B981] text-white px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
            >
              <span className="relative z-10">Explore Gallery</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></div>
            </motion.a>
          </motion.div>


          {/* RIGHT COLUMN: Interactive Card Deck */}
          <div 
            className="relative h-[500px] w-full flex items-center justify-center perspective-[1200px]"
            onMouseEnter={() => setIsHoveringDeck(true)}
            onMouseLeave={() => setIsHoveringDeck(false)}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#10B981] opacity-5 filter blur-[150px] rounded-full pointer-events-none"></div>

            {/* Back Card: Mobile Design */}
            <motion.div
              variants={cardVariants}
              custom={{ rotate: -15, x: -60, y: 10 }}
              initial="initial"
              animate={isHoveringDeck ? "hover" : "initial"}
              className="absolute w-64 h-80 bg-gray-800 rounded-3xl border border-gray-700 shadow-xl flex flex-col items-center justify-center z-0 origin-bottom-center"
            >
               <Smartphone size={40} className="text-gray-600 mb-2" />
               <span className="text-gray-500 font-mono text-xs">Mobile App</span>
            </motion.div>

            {/* Middle Card: Web Design */}
            <motion.div
              variants={cardVariants}
              custom={{ rotate: 15, x: 60, y: 10 }}
              initial="initial"
              animate={isHoveringDeck ? "hover" : "initial"}
              className="absolute w-64 h-80 bg-gray-800 rounded-3xl border border-gray-700 shadow-xl flex flex-col items-center justify-center z-10 origin-bottom-center"
            >
              <Monitor size={40} className="text-gray-600 mb-2" />
              <span className="text-gray-500 font-mono text-xs">Web Interface</span>
            </motion.div>

            {/* Front Card: Main Feature */}
            <motion.div
              variants={cardVariants}
              custom={{ rotate: 0, x: 0, y: -20 }}
              initial="initial"
              animate={isHoveringDeck ? "hover" : "initial"}
              className="absolute w-64 h-84 bg-gradient-to-br from-[#10B981] to-[#047857] rounded-3xl shadow-[0_20px_60px_rgba(16,185,129,0.4)] z-20 flex flex-col justify-between p-6 text-white overflow-hidden origin-bottom-center border border-[#6ee7b7]/30"
            >
              {/* Card Content */}
              <div className="space-y-2">
                <Palette className="w-8 h-8 opacity-80" />
                <h4 className="text-2xl font-bold">UI / UX</h4>
                <p className="text-sm text-white/80 leading-snug">
                  Modern, accessible, and performant design systems.
                </p>
              </div>

              {/* Fake UI Elements inside the card */}
              <div className="space-y-2 mt-4 opacity-90">
                <div className="h-2 w-full bg-white/20 rounded-full"></div>
                <div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
                <div className="flex gap-2 mt-4">
                   <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md"></div>
                   <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md"></div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </motion.div>
            
            {/* Interaction Hint */}
            <motion.div 
               animate={{ opacity: isHoveringDeck ? 0 : 1 }}
               className="absolute bottom-10 flex items-center gap-2 text-gray-500 text-sm font-mono"
            >
               <MousePointer2 size={14} className="animate-bounce" />
               Hover to expand
            </motion.div>

          </div>

        </div>

        {/* BOTTOM: "Philosophy" Cards (Added Content) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {[
              { title: "Research", icon: <Layers size={24} />, desc: "Deep diving into user needs before drawing a single pixel." },
              { title: "Visuals", icon: <Palette size={24} />, desc: "Creating stunning, accessible aesthetics that align with brands." },
              { title: "Interaction", icon: <MousePointer2 size={24} />, desc: "Ensuring every click and transition feels natural and snappy." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-[#10B981]/30 hover:bg-gray-900 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white mb-4 group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default DesignShowcase;