import React from 'react';
import { Briefcase, Trophy, Award, BookOpen } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-latte relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
            <h3 className="text-clay font-sans font-bold uppercase tracking-widest mb-2">Timeline</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-umber">Journey & <span className="italic text-forest">Milestones</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Work Experience */}
            <div className="space-y-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-umber text-paper rounded-full shadow-lg">
                        <Briefcase className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-umber">Professional Experience</h3>
                </div>

                {/* Timeline Container */}
                <div className="relative border-l-4 border-forest/20 ml-6 space-y-12 py-2">
                    {/* Item 1 */}
                    <div className="relative pl-8">
                        {/* Leaf Node */}
                        <div className="absolute -left-[14px] top-6 w-6 h-6 bg-forest rounded-full border-4 border-latte shadow-sm z-10"></div>
                        
                        <div className="bg-paper p-8 rounded-tr-3xl rounded-bl-3xl rounded-br-md rounded-tl-md shadow-md border border-umber/5 hover:shadow-xl transition-all duration-300 relative">
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-forest/10 rounded-bl-2xl"></div>
                            
                            <span className="text-xs font-bold text-clay uppercase tracking-wider mb-2 block">
                                July 2025 - Aug 2025
                            </span>
                            <h4 className="text-xl font-serif font-bold text-umber">Cybersecurity Intern</h4>
                            <p className="text-forest font-medium text-sm mb-4">CDAC, Noida</p>
                            
                            <p className="text-umber/70 text-sm leading-relaxed border-t border-umber/10 pt-4 font-sans">
                                Developed a ransomware simulator with <span className="font-bold text-forest">Python/Fernet</span> for controlled security research, improving analysis throughput by 30%.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Hackathon Glory */}
            <div className="space-y-10">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-clay text-white rounded-full shadow-lg">
                        <Trophy className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-umber">Hackathon Glory</h3>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-forest text-paper p-6 rounded-xl shadow-lg text-center transform rotate-1 hover:rotate-0 transition-transform">
                        <div className="text-4xl font-serif font-extrabold mb-1">4x</div>
                        <div className="text-sage text-xs uppercase tracking-widest font-bold">National Finalist</div>
                        <div className="text-sage/70 text-[10px] mt-2 leading-tight">SIH'25, Hack4Delhi, Synaphack 3.0, Startup Spotlight</div>
                    </div>
                     <div className="bg-white text-umber p-6 rounded-xl shadow-lg border border-umber/10 text-center transform -rotate-1 hover:rotate-0 transition-transform">
                        <div className="text-4xl font-serif font-extrabold mb-1 text-clay">SIH'25</div>
                        <div className="text-umber/60 text-xs uppercase tracking-widest font-bold">Runner-Up</div>
                    </div>
                </div>

                {/* Feature Cards (List style) */}
                <div className="space-y-4">
                    <AchievementCard 
                        icon={Award}
                        title="Smart India Hackathon 2025"
                        desc="Runner-Up with SAKSHAM — GIS disaster management platform for NDMA." 
                        color="text-clay"
                    />
                    <AchievementCard 
                        icon={Award}
                        title="Hack4Delhi Top-5 Finalist"
                        desc="Built an air-quality multi-modal DL system for urban pollution monitoring."
                        color="text-forest"
                    />
                    <AchievementCard 
                        icon={BookOpen}
                        title="UIDAI Hackathon"
                        desc="Developed Aadhaar anomaly detection pipeline across 500+ districts."
                        color="text-forest"
                    />
                </div>

            </div>

        </div>
      </div>
    </section>
  );
};

const AchievementCard = ({ icon: Icon, title, desc, color }: any) => (
    <div className="flex items-start gap-4 p-5 bg-white/60 rounded-xl border border-umber/5 hover:bg-white transition-colors">
        <div className={`mt-1 ${color}`}>
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <h4 className="text-lg font-serif font-bold text-umber">{title}</h4>
            <p className="text-umber/60 text-sm leading-relaxed mt-1">{desc}</p>
        </div>
    </div>
);

export default Experience;