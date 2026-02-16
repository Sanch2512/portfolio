import React, { useState } from 'react';
import { Linkedin, Github, Mail, Sprout } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { SectionId } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const handleNavigate = (id: SectionId) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-latte text-umber min-h-screen font-sans selection:bg-forest selection:text-white">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        <Hero />
        <Features />
        <Experience />
        <Projects />
        
        {/* Connect section */}
        <section id="connect" className="py-32 bg-forest text-paper flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
            {/* Texture overlay for footer */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <Sprout className="w-12 h-12 text-sage mb-6 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's cultivate something great.</h2>
            <p className="text-sage/80 max-w-xl mb-10 text-lg font-light">
                I'm currently rooted in building AI/ML solutions, but always looking to branch out into new opportunities.
            </p>
            <a href="mailto:monetc724@gmail.com" className="bg-paper text-forest hover:bg-sage hover:text-white px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-paper">
                Get In Touch
            </a>
            
            <footer className="w-full border-t border-paper/10 mt-24 pt-8">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="text-sage/60 text-sm font-medium">
                        &copy; {new Date().getFullYear()} Sanchita Thakur. Crafted with code & coffee.
                    </span>
                    <div className="flex items-center gap-6">
                        <a href="https://www.linkedin.com/in/sanchita-thakur-96275b294/" target="_blank" rel="noopener noreferrer" className="text-sage hover:text-white transition-colors transform hover:-translate-y-1">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/Sanch2512" target="_blank" rel="noopener noreferrer" className="text-sage hover:text-white transition-colors transform hover:-translate-y-1">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="mailto:monetc724@gmail.com" className="text-sage hover:text-white transition-colors transform hover:-translate-y-1">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </footer>
        </section>
      </main>
    </div>
  );
}

export default App;