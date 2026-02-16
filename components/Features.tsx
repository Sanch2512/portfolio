import React, { useState, useEffect } from 'react';
import { Brain, Code2, ShieldCheck, Layout, Server, Database, Briefcase, Leaf, X } from 'lucide-react';

interface SkillDetail {
  title: string;
  description: string;
  applications: string[];
  projects: string[];
}

const SKILL_DETAILS: Record<string, SkillDetail> = {
  ai: {
    title: "AI & Generative ML",
    description: "Specialized in deep learning architectures, transformer models, and multi-agent AI systems. Built production-ready ML pipelines with measurable impact across competition-winning projects.",
    applications: [
      "Multi-modal deep learning for image + sensor fusion (Air Quality Classification)",
      "Fine-tuned MobileNetV2 for edge deployment with ONNX optimization",
      "Multi-agent AI workflows using CrewAI and Groq LLM (Competitor Tracker)",
      "Hybrid recommendation systems with matrix factorization",
      "Ensemble anomaly detection with Isolation Forest (Aadhaar project)"
    ],
    projects: ["Air Quality Classification (Hack4Delhi Top-5)", "AI Competitor Tracker", "Movie Recommender", "Aadhaar Anomaly Detection (UIDAI)"]
  },
  cp: {
    title: "Competitive Programming",
    description: "550+ problems solved on LeetCode with rank #138k. Strong foundation in data structures, algorithms, and problem-solving patterns essential for optimized system design.",
    applications: [
      "Advanced data structures: graphs, trees, heaps, tries",
      "Dynamic programming and greedy algorithms",
      "System design and optimization techniques",
      "Time and space complexity analysis",
      "Contest participation and rapid problem-solving"
    ],
    projects: ["LeetCode Profile", "Competitive coding in hackathons"]
  },
  internship: {
    title: "Cybersecurity Experience",
    description: "CDAC Noida internship focused on cryptographic security testing and ransomware simulation for controlled research environments.",
    applications: [
      "Python-based ransomware simulator encrypting 100+ files",
      "256-bit Fernet key cryptography implementation",
      "Modeled realistic attack patterns for security research",
      "30% improvement in key-generation analysis throughput",
      "Windows VM security testing and defense mechanisms"
    ],
    projects: ["Ransomware Simulator (CDAC Project)"]
  },
  frontend: {
    title: "Frontend Development",
    description: "Building responsive, accessible, and performant user interfaces with modern frameworks and design systems.",
    applications: [
      "React.js for SIH 2025 disaster management dashboard (SAKSHAM)",
      "Real-time map visualizations with Mapbox GL JS",
      "Tailwind CSS for rapid, maintainable styling",
      "Next.js for SSR and optimized web apps",
      "Component-driven architecture and reusable design systems"
    ],
    projects: ["SAKSHAM GIS Dashboard (SIH Runner-Up)", "AI Resume Analyzer UI"]
  },
  backend: {
    title: "Backend Development",
    description: "Designing scalable APIs, real-time systems, and server-side logic for high-traffic applications.",
    applications: [
      "Node.js + Express APIs for SAKSHAM disaster platform",
      "Socket.io for real-time map updates (500+ concurrent users)",
      "FastAPI for ML model serving and high-performance endpoints",
      "RESTful API design and authentication (JWT, OAuth)",
      "Microservices architecture and load balancing"
    ],
    projects: ["SAKSHAM Backend (SIH)", "AI Competitor Tracker API"]
  },
  database: {
    title: "Database & Storage",
    description: "Experienced with relational and NoSQL databases, query optimization, and data modeling for production systems.",
    applications: [
      "MongoDB for real-time disaster incident tracking (SAKSHAM)",
      "PostgreSQL for structured data and complex queries",
      "Redis for caching and session management",
      "Query optimization and indexing strategies",
      "Data pipeline design for ML workflows"
    ],
    projects: ["SAKSHAM (SIH)", "Housing Price ML (Kaggle)"]
  }
};

interface FeaturesProps {
  onModalChange?: (isOpen: boolean) => void;
}

const Features: React.FC<FeaturesProps> = ({ onModalChange }) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  useEffect(() => {
    if (selectedSkill) {
      document.body.style.overflow = 'hidden';
      onModalChange?.(true);
    } else {
      document.body.style.overflow = 'unset';
      onModalChange?.(false);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedSkill, onModalChange]);

  return (
    <section id="skills" className="py-24 bg-paper relative overflow-hidden">
        {/* Background Grain */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#4A3728_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="mb-16 text-center">
                <div className="inline-flex items-center gap-2 mb-4">
                    <div className="h-[1px] w-12 bg-forest"></div>
                    <Leaf className="w-5 h-5 text-forest" />
                    <div className="h-[1px] w-12 bg-forest"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-umber mb-2">Technical <span className="text-forest underline decoration-sage decoration-wavy decoration-2 underline-offset-4">Harvest</span></h2>
                <p className="text-umber/60 font-sans mt-4 max-w-2xl mx-auto">
                    A curated selection of my skills, grown through academic rigor and hands-on application.
                </p>
            </div>
            
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Card 1: AI & Generative ML */}
                <button 
                  onClick={() => setSelectedSkill('ai')}
                  className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-xl p-8 bg-forest text-paper shadow-xl border-4 border-paper outline outline-1 outline-forest hover:scale-[1.02] transition-transform cursor-pointer text-left"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Brain className="w-48 h-48 text-white" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20">
                            <Brain className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-serif font-bold mb-3">AI & Generative ML</h3>
                        <p className="text-white/80 mb-8 font-light text-lg max-w-lg">Deep learning, transformers, and agentic workflows focused on real-world impact and measurable accuracy.</p>
                        
                        <div className="flex flex-wrap gap-3">
                            {["PyTorch", "TensorFlow", "Transformers", "RAG", "LangChain", "CrewAI"].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </button>

                {/* Card 2: Competitive Programming */}
                <button 
                  onClick={() => setSelectedSkill('cp')}
                  className="col-span-1 bg-latte rounded-xl p-8 border-2 border-umber/10 hover:border-umber/30 transition-all shadow-lg flex flex-col justify-between hover:scale-[1.02] cursor-pointer text-left"
                >
                    <div>
                        <div className="flex justify-between items-start mb-6">
                             <div className="w-12 h-12 bg-clay/10 rounded-full flex items-center justify-center text-clay">
                                <Code2 className="w-6 h-6" />
                             </div>
                             <span className="text-xs font-bold text-umber uppercase tracking-widest bg-white/50 px-3 py-1 rounded-full border border-umber/10">Rank #138k</span>
                        </div>
                        <div className="text-5xl font-serif font-extrabold text-umber mb-1">550+</div>
                        <p className="text-umber/60 text-sm font-bold uppercase tracking-wide mb-8">Problems Solved</p>
                        
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs font-bold text-umber/60 mb-2">
                                    <span>HARD</span>
                                    <span>37</span>
                                </div>
                                <div className="h-2 w-full bg-umber/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-clay w-[15%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold text-umber/60 mb-2">
                                    <span>MEDIUM</span>
                                    <span>273</span>
                                </div>
                                <div className="h-2 w-full bg-umber/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-forest w-[60%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>

                {/* Card 3: Internship */}
                <button 
                  onClick={() => setSelectedSkill('internship')}
                  className="col-span-1 bg-white rounded-xl p-8 border-2 border-umber/10 hover:shadow-xl transition-all relative hover:scale-[1.02] cursor-pointer text-left"
                >
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-clay text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm rounded-sm">
                        Experience
                    </div>
                    <Briefcase className="w-10 h-10 text-umber mb-6" />
                    
                    <h4 className="text-sm text-forest font-bold uppercase tracking-wide mb-2">Cybersecurity Intern</h4>
                    <h3 className="text-2xl font-serif font-bold text-umber mb-4">CDAC Noida</h3>
                    <p className="text-umber/70 text-sm leading-relaxed mb-6 font-sans">
                        Built a ransomware simulator for controlled security testing, optimizing 256-bit key generation and analysis throughput.
                    </p>
                    <div className="flex gap-2">
                         <Badge text="Cryptography" />
                         <Badge text="Security" />
                    </div>
                </button>

                {/* Card 4, 5, 6: Smaller Skills */}
                {[
                    { title: "Frontend", icon: Layout, tags: ["React", "Next.js", "Tailwind"], key: "frontend" },
                    { title: "Backend", icon: Server, tags: ["Node.js", "Express", "FastAPI"], key: "backend" },
                    { title: "Database", icon: Database, tags: ["MongoDB", "PostgreSQL", "MySQL"], key: "database" }
                ].map((item, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setSelectedSkill(item.key)}
                      className="bg-latte/50 rounded-xl p-6 border border-umber/10 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer text-left"
                    >
                        <item.icon className="w-8 h-8 text-forest mb-4" />
                        <h4 className="text-xl font-serif font-bold text-umber mb-3">{item.title}</h4>
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((t, i) => (
                                <span key={i} className="text-xs text-umber/70 bg-umber/5 px-2 py-1 rounded border border-umber/5">{t}</span>
                            ))}
                        </div>
                    </button>
                ))}

            </div>
        </div>

        {/* Skill Detail Modal */}
        {selectedSkill && SKILL_DETAILS[selectedSkill] && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-umber/60 backdrop-blur-sm" onClick={() => setSelectedSkill(null)} />
            <div className="relative w-full max-w-3xl max-h-[90vh] bg-paper border-2 border-umber/10 rounded-sm shadow-2xl overflow-y-auto">
              <div className="sticky top-0 bg-paper border-b border-umber/10 px-6 py-5 flex items-center justify-between z-10">
                <div>
                  <h3 className="text-clay font-sans font-bold uppercase tracking-widest text-xs">Skill Deep Dive</h3>
                  <h2 className="text-3xl font-serif font-bold text-umber">{SKILL_DETAILS[selectedSkill].title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedSkill(null)} 
                  className="p-2 bg-paper text-umber rounded-full hover:bg-umber hover:text-white transition-colors border border-umber/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                <p className="text-umber/80 text-lg leading-relaxed italic border-l-4 border-forest pl-4 bg-forest/5 py-3">
                  {SKILL_DETAILS[selectedSkill].description}
                </p>

                <div>
                  <h4 className="text-xl font-serif font-bold text-umber mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-forest" />
                    Real-World Applications
                  </h4>
                  <ul className="space-y-3">
                    {SKILL_DETAILS[selectedSkill].applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-umber/70 text-sm">
                        <span className="text-forest font-bold mt-1">•</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold text-umber mb-4 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-clay" />
                    Featured In Projects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {SKILL_DETAILS[selectedSkill].projects.map((proj, idx) => (
                      <span key={idx} className="px-4 py-2 bg-forest/10 border border-forest/20 rounded-full text-forest text-sm font-medium">
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  );
};

const Badge = ({ text }: { text: string }) => (
    <span className="text-xs font-bold text-forest bg-forest/10 px-3 py-1 rounded-full border border-forest/20">
        {text}
    </span>
);

export default Features;