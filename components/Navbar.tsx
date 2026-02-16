import React, { useState, useEffect } from 'react';
import { Download, Coffee } from 'lucide-react';
import { NavItem, SectionId } from '../types';

declare global {
  interface Window {
    jspdf: any;
  }
}

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'connect', label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    // (Resume generation logic remains exactly the same as requested, just omitted here for brevity if logic hasn't changed. 
    // Re-pasting the exact logic to ensure functionality persists)
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    let yPos = 20;
    
    const addText = (text: string, size: number, isBold: boolean = false, align: 'left' | 'center' | 'right' = 'left', color: [number, number, number] = [0, 0, 0]) => {
      doc.setFont("helvetica", isBold ? "bold" : "normal");
      doc.setFontSize(size);
      doc.setTextColor(color[0], color[1], color[2]);
      doc.text(text, align === 'center' ? pageWidth / 2 : (align === 'right' ? pageWidth - margin : margin), yPos, { align });
    };

    const addSectionHeader = (title: string) => {
        yPos += 5;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(46, 74, 61); // Forest Green for PDF
        doc.text(title.toUpperCase(), margin, yPos);
        yPos += 2;
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, yPos, pageWidth - margin, yPos);
        yPos += 6;
    };

    // --- HEADER ---
    addText("SANCHITA THAKUR", 22, true, 'center');
    yPos += 7;
    addText("Software Engineer Intern | B.Tech CSE @ DTU", 11, false, 'center', [80, 80, 80]);
    yPos += 6;
    addText("monetc724@gmail.com  |  +91-9868883459", 9, false, 'center', [50, 50, 50]);
    yPos += 5;
    addText("linkedin.com/in/sanchita-thakur-96275b294  |  github.com/Sanch2512", 9, false, 'center', [50, 50, 50]);
    yPos += 8;

    // --- EDUCATION ---
    addSectionHeader("Education");
    doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(0, 0, 0);
    doc.text("B.Tech (Computer Science)", margin, yPos); doc.text("2023 - 2027", pageWidth - margin, yPos, { align: "right" }); yPos += 5;
    doc.setFont("helvetica", "normal");
    doc.text("Delhi Technological University, New Delhi", margin, yPos); doc.text("CGPA: 7.99", pageWidth - margin, yPos, { align: "right" }); yPos += 6;

    doc.setFont("helvetica", "bold");
    doc.text("CBSE (Class XII)", margin, yPos); doc.text("2022", pageWidth - margin, yPos, { align: "right" }); yPos += 5;
    doc.setFont("helvetica", "normal");
    doc.text("RPVV Rohini Sec-21", margin, yPos); doc.text("93.4 %", pageWidth - margin, yPos, { align: "right" }); yPos += 6;

    // --- TECHNICAL SKILLS ---
    addSectionHeader("Technical Skills");
    const skills = [
        { label: "Languages:", val: "C, C++, Python, JavaScript" },
        { label: "Web Technologies:", val: "HTML5, CSS3, React.js, Node.js, Express.js, RESTful API" },
        { label: "Data Science & AI:", val: "Machine Learning, Deep Learning, NLP, BERT, TensorFlow" },
        { label: "Database & Tools:", val: "MongoDB, MySQL, Git, VSCode" },
        { label: "Core Concepts:", val: "OS, DBMS, Computer Networks, DSA" }
    ];
    skills.forEach(skill => {
        doc.setFont("helvetica", "bold"); doc.setFontSize(10);
        doc.text(skill.label, margin, yPos);
        const labelWidth = doc.getTextWidth(skill.label);
        doc.setFont("helvetica", "normal");
        doc.text(skill.val, margin + labelWidth + 2, yPos); yPos += 5;
    });

    // --- INTERNSHIPS ---
    addSectionHeader("Internships");
    doc.setFont("helvetica", "bold");
    doc.text("Cyber Security Intern", margin, yPos); doc.text("07/2025 - 08/2025", pageWidth - margin, yPos, { align: "right" }); yPos += 5;
    doc.setFont("helvetica", "normal"); doc.setFont("helvetica", "bold");
    doc.text("Cybergyaan CDAC - NOIDA", margin, yPos); doc.setFont("helvetica", "normal"); yPos += 5;
    const internPoints = [
        "Ransomware Simulator: Created simulator encrypting/decrypting 100 files using 256-bit key.",
        "Simulated realistic ransomware behavior enhancing understanding of defense mechanisms.",
        "Streamlined key generation and file manipulation processes."
    ];
    internPoints.forEach(point => { doc.text("• " + point, margin + 2, yPos); yPos += 5; });

    // --- PROJECTS ---
    addSectionHeader("Academic Projects");
    doc.setFont("helvetica", "bold");
    doc.text("AI Resume Analyzer & Career Compass | NLP, BERT", margin, yPos); doc.text("01/2025 - 03/2025", pageWidth - margin, yPos, { align: "right" }); yPos += 5;
    doc.setFont("helvetica", "normal");
    doc.text("• Engineered NLP model (BERT) for resume categorization and skill gap analysis.", margin + 2, yPos); yPos += 5;
    doc.text("• Integrated cosine similarity for job matching across 1000 roles.", margin + 2, yPos); yPos += 6;

    doc.setFont("helvetica", "bold");
    doc.text("Full-Stack Blog API Development | MERN Stack", margin, yPos); doc.text("03/2025 - 04/2025", pageWidth - margin, yPos, { align: "right" }); yPos += 5;
    doc.setFont("helvetica", "normal");
    doc.text("• Developed React.js frontend with RESTful API integration.", margin + 2, yPos); yPos += 5;
    doc.text("• Structured Node.js/Express.js backend with JWT authentication.", margin + 2, yPos); yPos += 5;

    // --- ACHIEVEMENTS ---
    addSectionHeader("Achievements & Awards");
    const achievements = [
        "SIH 2025 Grand Finalist (Selected among Top 100 teams).",
        "4x National Hackathon Finalist.",
        "Solved 500+ LeetCode problems (Rank #138k).",
        "97.9%ile in JEE-Mains.",
        "AI Agentic Hackathon: Architected multi-agent AI web app leveraging CrewAI."
    ];
    achievements.forEach(ach => { doc.text("• " + ach, margin + 2, yPos); yPos += 5; });

    doc.save("Sanchita_Thakur_Resume.pdf");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-6 py-4 md:px-12 ${scrolled ? 'bg-paper/95 shadow-md border-b border-umber/10' : 'bg-transparent'} backdrop-blur-sm`}>
      {/* Logo */}
      <div className="flex-shrink-0 z-50">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="group flex items-center gap-2">
            <div className="p-2 bg-umber text-paper rounded-lg group-hover:bg-forest transition-colors">
                <Coffee className="w-5 h-5" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-umber group-hover:text-forest transition-colors">
                Sanchita.
            </span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center">
        <ul className="flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-bold tracking-wide uppercase transition-all duration-300 relative py-1 group ${
                  activeSection === item.id
                    ? 'text-forest'
                    : 'text-umber/60 hover:text-umber'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-forest transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Side Actions */}
      <div className="flex-shrink-0 flex items-center gap-4 z-50">
        <button 
          onClick={handleDownloadResume}
          className="hidden sm:flex items-center gap-2 bg-transparent hover:bg-umber/5 border-2 border-umber text-umber px-5 py-2 rounded-lg transition-all duration-300 group cursor-pointer font-serif font-bold"
        >
          <Download className="w-4 h-4 text-umber group-hover:scale-110 transition-transform" />
          <span className="text-sm">Resume</span>
        </button>
        
        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
             <button className="text-umber p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
             </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;