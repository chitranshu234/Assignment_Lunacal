import React, { useState } from 'react';
import { HelpCircle, Grid } from 'lucide-react';

export default function ProfileWidget() {
  const [activeTab, setActiveTab] = useState('recommended');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' },
  ];

  const tabContent = {
    about: (
      <div className="space-y-4">
        <p className="transform transition-all duration-500 hover:translate-x-2 hover:text-gray-200">
          Hello! I'm Chitranshu Pandey, a Full Stack Developer from Pantnagar, Uttarakhand, India. I'm currently pursuing my Bachelor of Technology in Electronics and Communication Engineering at G.B. Pant University of Agriculture and Technology with a GPA of 7.4/10.0.
        </p>
        <p className="transform transition-all duration-500 hover:translate-x-2 hover:text-gray-200">
          I specialize in building full-stack applications using Spring Boot, React.js, and RESTful APIs. With expertise in Core Java, Data Structures, Algorithms, and modern JavaScript frameworks, I create intuitive and efficient web experiences. I'm passionate about solving complex problems and continuously learning new technologies.
        </p>
      </div>
    ),
    experiences: (
      <div className="space-y-4">
        <div className="transform transition-all duration-500 hover:translate-x-2 hover:text-gray-200">
          <p className="font-semibold text-gray-200 mb-1">Full Stack Developer | Smart India Hackathon - Leaflink</p>
          <p className="text-xs text-gray-500 mb-2">September 2025 - October 2025</p>
          <p>Developed a supply chain traceability application using HTML5, CSS3, JavaScript, and Node.js with GPS integration. Implemented dynamic QR code generation and blockchain-ready architecture, improving accuracy by 40%. Deployed on Vercel cloud platform achieving 99.9% uptime with optimized performance.</p>
        </div>
        <div className="transform transition-all duration-500 hover:translate-x-2 hover:text-gray-200">
          <p className="font-semibold text-gray-200 mb-1">Key Projects:</p>
          <p>ShopSphere E-Commerce Platform, Gourmet Glide Recipe Platform, and Professional Portfolio Website - all demonstrating proficiency in modern web technologies and best practices in software development.</p>
        </div>
      </div>
    ),
    recommended: (
      <div className="space-y-4">
        <div className="transform transition-all duration-500 hover:translate-x-2 hover:text-gray-200">
          <p className="font-semibold text-gray-200 mb-2">Technical Skills:</p>
          <p>Proficient in Java, JavaScript, Python, Spring Boot, React.js, Node.js, MySQL, MongoDB, and various modern development tools. Strong foundation in OOP, Data Structures, and Algorithms with Agile methodology experience.</p>
        </div>
        <div className="transform transition-all duration-500 hover:translate-x-2 hover:text-gray-200">
          <p className="font-semibold text-gray-200 mb-2">Achievements:</p>
          <p>Winner of the Internal College-Level Hackathon for Smart India Hackathon 2025 for developing an innovative supply chain solution. Built multiple production-ready applications with 99.9% uptime and Google PageSpeed scores of 95+. Certified in HTML, CSS, JavaScript, and PLC & SCADA Systems.</p>
        </div>
      </div>
    ),
  };

  return (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl shadow-2xl shadow-black/50 border border-gray-700/50 transition-all duration-500 hover:shadow-3xl hover:border-gray-600/60 dark-hover-shadow">
      {/* Top section with question mark icon and tabs */}
      <div className="px-8 pt-6 pb-2">
        <div className="flex items-start mb-4">
          <HelpCircle size={22} className="text-gray-500 mr-4 mt-1 flex-shrink-0 transition-all duration-300 hover:text-gray-300 hover:rotate-12 cursor-pointer" />
          
          <div className="flex-1 flex justify-center">
            <div className="inline-flex bg-black rounded-full p-1.5 gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-500 loading-bar
                    ${activeTab === tab.id
                      ? 'bg-gray-700 text-white shadow-xl shadow-black/60'
                      : 'bg-black text-gray-400 hover:text-gray-200 hover:shadow-lg hover:shadow-black/40'
                    }
                  `}
                >
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content section with scrollbar */}
      <div className="px-8 pb-6 pr-6">
        <div className="text-sm leading-relaxed text-gray-400 max-h-48 overflow-y-auto pr-4 transition-all duration-500 ease-in-out animate-fadeIn"
             style={{
               scrollbarWidth: 'thin',
               scrollbarColor: '#4b5563 transparent'
             }}>
          {tabContent[activeTab]}
        </div>
      </div>

      {/* Bottom left grid icon */}
      <div className="px-8 pb-6">
        <Grid size={22} className="text-gray-500 transition-all duration-300 hover:text-gray-300 hover:scale-110 cursor-pointer" />
      </div>
    </div>
  );
}   