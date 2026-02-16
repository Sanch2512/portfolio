import React from 'react';
import { ArrowRight, Github, Linkedin, PenTool, Code, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-latte">
      
      {/* Decorative Background Elements (Botanical/Paper) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-forest/5 skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 border-4 border-umber/10 rounded-full opacity-50"></div>
      
      {/* Hand-drawn SVG Leaf Decoration */}
      <svg className="absolute top-24 left-10 w-32 h-32 text-sage/30 rotate-45" viewBox="0 0 24 24" fill="currentColor">
         <path d="M12 2C7.5 2 4 6.5 4 12s4.5 9 9 9c5.5 0 8-5.5 8-10 0-4.5-4.5-9-9-9zm0 16c-3.5 0-6-3.5-6-7s3.5-6 6-6c3.5 0 5 3.5 5 7 0 3.5-3.5 6-5 6z" />
         <path d="M12 4v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-8 relative">
           {/* 'Sticker' Badge */}
           <div className="inline-block transform -rotate-2">
                <div className="bg-clay text-white px-4 py-1.5 font-bold font-serif text-sm tracking-widest uppercase shadow-md border-2 border-white/20">
                  SIH 2025 Runner-Up
                </div>
           </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-serif text-umber/80 italic">
              Hello, I'm Sanchita
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-umber leading-[1.1]">
              Engineering <br />
              <span className="relative z-10 text-forest">
                Intelligence.
                <svg className="absolute w-full h-3 bottom-1 left-0 -z-10 text-sage" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.4" />
                </svg>
              </span>
            </h1>
          </div>
          
          <p className="text-umber/80 text-lg md:text-xl font-light leading-relaxed max-w-lg">
            Full-Stack Developer & AI/ML Engineer crafting scalable products and intelligent systems. <br/>
            <span className="font-bold text-forest">B.Tech CSE @ DTU</span> • 550+ LeetCode solved • 4× National Hackathon Finalist
          </p>
          
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-forest hover:bg-umber text-paper text-lg font-bold font-serif px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1"
            >
              Explore Portfolio
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-4 pl-4 border-l-2 border-umber/20">
                <SocialLink icon={Github} href="https://github.com/Sanch2512" />
                <SocialLink icon={Linkedin} href="https://www.linkedin.com/in/sanchita-thakur-96275b294/" />
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL: Sketchbook/Frame Style */}
        <div className="relative flex justify-center items-center">
            
            {/* The "Paper" Card behind the image */}
            <div className="absolute inset-0 bg-white shadow-2xl transform rotate-3 rounded-sm border border-gray-200 z-0 w-3/4 h-3/4 mx-auto my-auto"></div>
            
            {/* Main Content Area */}
            <div className="relative z-10 bg-paper p-8 shadow-xl border border-umber/10 rounded-sm transform -rotate-2 max-w-md w-full">
                
                {/* Drawn Icons Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-latte p-6 rounded flex flex-col items-center justify-center border-2 border-dashed border-umber/20">
                        <Cpu className="w-10 h-10 text-umber mb-2" />
                        <span className="font-serif font-bold text-umber">AI / ML</span>
                    </div>
                    <div className="bg-forest/10 p-6 rounded flex flex-col items-center justify-center border-2 border-dashed border-forest/30">
                        <Code className="w-10 h-10 text-forest mb-2" />
                        <span className="font-serif font-bold text-forest">Full Stack</span>
                    </div>
                </div>

                <div className="space-y-4 text-center">
                    <div className="h-1 w-20 bg-umber/20 mx-auto rounded-full"></div>
                    <p className="font-serif text-2xl text-umber font-bold">
                      "Code is poetry written in logic."
                    </p>
                    <div className="flex justify-center gap-2 text-sage">
                        <PenTool className="w-5 h-5" />
                        <span className="text-sm font-sans uppercase tracking-widest">Designed & Coded</span>
                    </div>
                </div>
                
                {/* Tape Graphic */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 backdrop-blur-sm border-l border-r border-white/60 transform -rotate-1 shadow-sm"></div>
            </div>

            {/* Floating Elements */}
            <FloatingElement className="absolute -bottom-10 -left-4 text-forest" delay="0s">
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                 </svg>
            </FloatingElement>

             <FloatingElement className="absolute -top-10 -right-4 text-clay" delay="1s">
                 <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                 </svg>
            </FloatingElement>

        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ icon: Icon, href }: { icon: any, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-umber/20 text-umber hover:text-paper hover:bg-umber hover:border-umber transition-all duration-300">
    <Icon className="w-5 h-5" />
  </a>
);

const FloatingElement = ({ children, className, delay }: { children: React.ReactNode, className: string, delay: string }) => (
    <div className={`${className} animate-bounce`} style={{ animationDuration: '3s', animationDelay: delay }}>
        {children}
    </div>
);

export default Hero;