import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Github, LayoutGrid, X, Sprout, Target, ExternalLink, Play } from 'lucide-react';
import { Project, FlavorProfile } from '../types';

// Data with Flavor Profile
const FEATURED_PROJECTS: Project[] = [
  { 
    id: 1, 
    title: "Air Quality Classification System", 
    category: "Hack4Delhi Top-5 Finalist", 
    description: "Multi-modal deep learning pipeline classifying urban pollution images into AQI severity levels.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800", 
    tags: ["PyTorch", "MobileNetV2", "ONNX", "Scikit-learn"],
    link: "https://github.com/Sanch2512/aqi-classification",
    siteUrl: "https://delhi-pollution-goverment-portal.vercel.app/",
    demoUrl: "https://youtu.be/Z-mdqGnRBQA?si=lKAWTxRjA9SN8u7O",
    longDescription: "Fused MobileNetV2 visual features with 6 sensor inputs to classify 1,000+ pollution images across 3 AQI levels with ~90% validation accuracy.",
    problem: "Urban pollution monitoring lacks fast, reliable, multi-modal classification at scale.",
    solution: "Built a fused vision+sensor model with ONNX export for faster edge inference.",
    audience: "Smart-city teams and environmental agencies.",
    flavor: { tech: 92, innovation: 88, complexity: 90, design: 70, impact: 95 }
  },
  { 
    id: 2, 
    title: "SAKSHAM - GIS Disaster Management", 
    category: "SIH 2025 Runner-Up", 
    description: "Real-time GIS heatmaps and emergency resource overlays for disaster response.",
    image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&q=80&w=800", 
    tags: ["React", "Node.js", "Mapbox", "Socket.io", "MongoDB"],
    link: "https://github.com/Sanch2512/SIH_Saksham_FInal_Combined",
    longDescription: "Engineered live disaster heatmaps with overlays for NDRF units, blood banks, and shelters, enabling sub-second map refresh for 500+ concurrent users.",
    problem: "Emergency response needs centralized, real-time geospatial intelligence.",
    solution: "Built a real-time GIS dashboard with Socket.io and optimized geospatial queries.",
    audience: "Government agencies and emergency responders.",
    flavor: { tech: 90, innovation: 86, complexity: 92, design: 72, impact: 100 }
  },
  { 
    id: 3, 
    title: "Aadhaar Authentication Anomaly Detection", 
    category: "UIDAI Hackathon", 
    description: "Ensemble anomaly detection for national identity authentication data.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Pandas", "Scikit-learn", "Isolation Forest"],
    link: "https://github.com/Sanch2512/aadhaar-anomaly",
    siteUrl: "https://geovision-uidai.vercel.app/",
    demoUrl: "https://docs.google.com/file/d/1Ya-kOR3qcCS5Y3NOXrxBkHaPoLi9ngBe4uh0z3myxgA/preview",
    longDescription: "Combined Z-Score, IQR, and Isolation Forest to flag anomalies across 500+ districts with rolling baselines and actionable reports.",
    problem: "Large-scale authentication systems need early anomaly detection to prevent fraud.",
    solution: "Built an ensemble pipeline with district-level baselines and audit-ready reporting.",
    audience: "Government analysts and fraud detection teams.",
    flavor: { tech: 88, innovation: 82, complexity: 86, design: 58, impact: 94 }
  }
];

const OTHER_PROJECTS: Project[] = [
  { 
    id: 4, 
    title: "AI Competitor Tracker", 
    category: "Agentic AI", 
    description: "Multi-agent web monitoring system with high-accuracy change detection.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", 
    tags: ["Python", "CrewAI", "Groq", "OpenAI", "Serper"],
    link: "https://github.com/Sanch2512/ai-competitor-tracker",
    longDescription: "Automated competitive intelligence with multi-agent workflows and 95% change-detection accuracy across 10+ domains.",
    problem: "Manual competitor tracking is slow and error-prone.",
    solution: "Built an agentic pipeline to monitor, extract, and summarize changes.",
    audience: "Product and market intelligence teams.",
    flavor: { tech: 90, innovation: 88, complexity: 80, design: 65, impact: 85 }
  },
  { 
    id: 5, 
    title: "Movie Recommendation System", 
    category: "ML Project", 
    description: "Hybrid recommendation engine using collaborative + content filtering.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800", 
    tags: ["Python", "Pandas", "Scikit-learn", "Surprise"],
    link: "https://github.com/Sanch2512/movie-recommender",
    longDescription: "Improved engagement with matrix factorization and cosine similarity on 25,000+ ratings.",
    problem: "Generic recommendations fail to capture user taste.",
    solution: "Combined collaborative and content signals for personalized results.",
    audience: "Media platforms and analytics teams.",
    flavor: { tech: 82, innovation: 70, complexity: 76, design: 60, impact: 78 }
  },
  { 
    id: 6, 
    title: "Housing Price Predictor", 
    category: "Kaggle Competition", 
    description: "Advanced regression with extensive feature engineering and XGBoost tuning.",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=800", 
    tags: ["Python", "XGBoost", "Feature Engineering", "Kaggle"],
    link: "https://github.com/Sanch2512/housing-price-ml",
    longDescription: "Achieved top 15% ranking with 20+ engineered features and GridSearchCV tuning.",
    problem: "Housing prices are influenced by complex, nonlinear factors.",
    solution: "Engineered robust features and optimized gradient boosting models.",
    audience: "Real-estate analytics and data science teams.",
    flavor: { tech: 85, innovation: 65, complexity: 80, design: 55, impact: 80 }
  },
  { 
    id: 7, 
    title: "Ransomware Simulator", 
    category: "Cybersecurity", 
    description: "Safe ransomware simulation environment for security testing.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Cryptography", "Fernet", "Windows VM"],
    link: "https://github.com/Sanch2512/ransomware-simulator",
    longDescription: "Encrypted 100+ files using 256-bit Fernet keys in a controlled VM to test defenses.",
    problem: "Security teams need realistic, safe ransomware drills.",
    solution: "Built a simulator for controlled encryption patterns and analysis.",
    audience: "Cybersecurity analysts and red teams.",
    flavor: { tech: 80, innovation: 72, complexity: 88, design: 40, impact: 84 }
  }
];


// --- FLAVOR WHEEL COMPONENT ---
const FlavorWheel = ({ data }: { data: FlavorProfile }) => {
    const size = 120;
    const center = size / 2;
    const radius = 50;
    const axes = Object.keys(data);
    const totalAxes = axes.length;
    
    // Calculate points for the polygon
    const points = axes.map((key, i) => {
        const value = data[key as keyof FlavorProfile];
        const angle = (Math.PI * 2 * i) / totalAxes - Math.PI / 2;
        const r = (value / 100) * radius;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return `${x},${y}`;
    }).join(" ");

    // Calculate axis lines
    const axisLines = axes.map((_, i) => {
        const angle = (Math.PI * 2 * i) / totalAxes - Math.PI / 2;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return { x, y };
    });

    return (
        <div className="relative flex flex-col items-center">
            <svg width={size} height={size} className="overflow-visible">
                {/* Background Circle */}
                <circle cx={center} cy={center} r={radius} fill="#F3E9D2" stroke="#4A3728" strokeOpacity="0.1" />
                <circle cx={center} cy={center} r={radius * 0.6} fill="none" stroke="#4A3728" strokeOpacity="0.1" />
                
                {/* Axis Lines */}
                {axisLines.map((pos, i) => (
                    <line key={i} x1={center} y1={center} x2={pos.x} y2={pos.y} stroke="#4A3728" strokeOpacity="0.1" />
                ))}

                {/* Data Polygon */}
                <polygon points={points} fill="rgba(46, 74, 61, 0.4)" stroke="#2E4A3D" strokeWidth="2" />
            </svg>
            <span className="text-[10px] font-bold text-umber uppercase tracking-widest mt-2">Flavor Profile</span>
        </div>
    );
};


const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    if (selectedProject || showGallery) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject, showGallery]);

  return (
    <section id="projects" className="py-24 bg-paper relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
            <h3 className="text-clay font-sans font-bold uppercase tracking-widest mb-2">Featured Projects</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-umber">Top <span className="text-forest italic">3</span> Competition Winners</h2>
            </div>
            <a href="https://github.com/Sanch2512" target="_blank" rel="noopener noreferrer" className="text-umber border-b-2 border-forest pb-1 hover:text-forest transition-colors flex items-center gap-2 font-bold font-serif">
            GitHub Archive <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURED_PROJECTS.map((project) => (
                <div 
                  key={project.id} 
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-white rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col border border-umber/5 hover:-translate-y-2"
                >
                    {/* Image Area - Paper Frame Style */}
                    <div className="p-3 pb-0">
                        <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative border border-umber/10">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-umber/10 group-hover:bg-transparent transition-colors" />
                        </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow relative">
                        <div className="flex justify-between items-start mb-3">
                            <span className="text-forest text-xs font-bold uppercase tracking-wider border border-forest/20 px-2 py-1 rounded-sm">{project.category}</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-umber mb-2 group-hover:text-forest transition-colors">{project.title}</h3>
                        <p className="text-umber/60 text-sm leading-relaxed mb-6 line-clamp-2">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-umber/10 border-dashed">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="text-xs text-umber/50 font-medium">#{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <button
            onClick={() => setShowGallery(true)}
            className="flex items-center gap-3 bg-forest text-paper hover:bg-umber px-8 py-3 rounded-full font-bold font-serif transition-all shadow-lg hover:shadow-xl"
          >
            View All Projects
            <LayoutGrid className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-umber/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
          
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-paper border-2 border-umber/10 rounded-sm shadow-2xl overflow-y-auto custom-scrollbar flex flex-col md:flex-row">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 p-2 bg-paper text-umber rounded-full hover:bg-umber hover:text-white transition-colors border border-umber/10"><X className="w-6 h-6" /></button>

            {/* Left: Visual & Flavor */}
            <div className="w-full md:w-2/5 bg-latte p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-umber/10 relative">
               <div className="w-full aspect-square bg-white p-2 shadow-lg mb-8 rotate-1">
                   <img src={selectedProject.image} alt="" className="w-full h-full object-cover" />
               </div>
               
               <div className="bg-white p-6 rounded-xl shadow-sm border border-umber/5 w-full">
                    <h4 className="text-center font-serif font-bold text-umber mb-4 border-b border-umber/10 pb-2">Flavor Profile</h4>
                    <FlavorWheel data={selectedProject.flavor} />
                    <div className="grid grid-cols-2 gap-2 text-[10px] text-center mt-4 text-umber/60 uppercase font-bold">
                        <div>Tech: {selectedProject.flavor.tech}%</div>
                        <div>Impact: {selectedProject.flavor.impact}%</div>
                    </div>
               </div>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-3/5 p-8 md:p-12">
                <span className="text-forest font-bold tracking-widest uppercase text-xs mb-2 block">{selectedProject.category}</span>
                <h2 className="text-4xl font-serif font-bold text-umber mb-6">{selectedProject.title}</h2>
                
                <p className="text-umber/80 text-lg leading-relaxed mb-8 italic border-l-4 border-forest pl-4 bg-forest/5 py-2">
                    "{selectedProject.longDescription || selectedProject.description}"
                </p>

                <div className="grid gap-6 mb-8">
                    <div>
                        <h4 className="flex items-center gap-2 font-bold text-clay mb-2"><Target className="w-4 h-4"/> Problem</h4>
                        <p className="text-sm text-umber/70">{selectedProject.problem}</p>
                    </div>
                    <div>
                         <h4 className="flex items-center gap-2 font-bold text-forest mb-2"><Sprout className="w-4 h-4"/> Solution</h4>
                         <p className="text-sm text-umber/70">{selectedProject.solution}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-8 border-t border-umber/10">
                    {selectedProject.link && (
                     <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-umber text-white hover:bg-forest px-6 py-3 rounded-full font-bold transition-all shadow-lg">
                       <Github className="w-5 h-5" /> View Repository
                     </a>
                    )}
                    {selectedProject.siteUrl && (
                     <a href={selectedProject.siteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-forest text-white hover:bg-clay px-6 py-3 rounded-full font-bold transition-all shadow-lg">
                       <ExternalLink className="w-5 h-5" /> View Live Site
                     </a>
                    )}
                    {selectedProject.demoUrl && (
                     <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-clay text-white hover:bg-umber px-6 py-3 rounded-full font-bold transition-all shadow-lg">
                       <Play className="w-5 h-5" /> Watch Demo
                     </a>
                    )}
                </div>
            </div>
          </div>
        </div>
      )}

      {showGallery && (
        <div className="fixed inset-0 z-[190] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-umber/60 backdrop-blur-sm" onClick={() => setShowGallery(false)} />
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-paper border-2 border-umber/10 rounded-sm shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-umber/10">
              <div>
                <h3 className="text-clay font-sans font-bold uppercase tracking-widest text-xs">Project Gallery</h3>
                <h2 className="text-3xl font-serif font-bold text-umber">More Impactful Projects</h2>
              </div>
              <button onClick={() => setShowGallery(false)} className="p-2 bg-paper text-umber rounded-full hover:bg-umber hover:text-white transition-colors border border-umber/10">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {OTHER_PROJECTS.map((project) => (
                <button
                  key={project.id}
                  onClick={() => { setSelectedProject(project); setShowGallery(false); }}
                  className="text-left bg-white rounded-sm border border-umber/10 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="p-3 pb-0">
                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden border border-umber/10">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-forest text-xs font-bold uppercase tracking-wider border border-forest/20 px-2 py-1 rounded-sm">{project.category}</span>
                    <h4 className="text-xl font-serif font-bold text-umber mt-3 mb-2">{project.title}</h4>
                    <p className="text-umber/60 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs text-umber/50 font-medium">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;