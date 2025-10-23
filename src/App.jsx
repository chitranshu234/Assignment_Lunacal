import React, { useState } from 'react';
import { Plus, ArrowLeft, ArrowRight, HelpCircle, Grid } from 'lucide-react';

export default function AssignmentUI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-gray-300 font-sans">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-in-out; }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.5); }
          50% { box-shadow: 0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6); }
        }
        
        .tab-glow { animation: glow 2s ease-in-out infinite; }
        .dark-hover-shadow { transition: all 0.3s ease; }
        .dark-hover-shadow:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.8), 0 10px 30px rgba(0,0,0,0.7);
        }
        
        .loading-bar { position: relative; overflow: hidden; }
        .loading-bar::before {
          content: ''; position: absolute; top: 0; left: 0;
          width: 0; height: 100%;
          background: rgba(107,114,128,0.4);
          transition: width 0.8s cubic-bezier(0.4,0,0.2,1);
          z-index: 0;
        }
        .loading-bar:hover::before { width: 100%; }
        .loading-bar > span { position: relative; z-index: 1; }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="hidden lg:block"></div>
        
        <div className="flex flex-col justify-center gap-6 p-8 lg:pr-12">
          <ProfileWidget />
          
          <div className="relative w-full h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent blur-sm opacity-50"></div>
          </div>
          
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
}

function ProfileWidget() {
  const [activeTab, setActiveTab] = useState('recommended');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' }
  ];

  // todo: maybe refactor this into a separate component later?
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
    )
  };

  return (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl shadow-2xl shadow-black/50 border border-gray-700/50 transition-all duration-500 hover:shadow-3xl hover:border-gray-600/60 dark-hover-shadow">
      <div className="px-8 pt-6 pb-2">
        <div className="flex items-start mb-4">
          <HelpCircle 
            size={22} 
            className="text-gray-500 mr-4 mt-1 flex-shrink-0 transition-all duration-300 hover:text-gray-300 hover:rotate-12 cursor-pointer" 
          />
          
          <div className="flex-1 flex justify-center">
            <div className="inline-flex bg-black rounded-full p-1.5 gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-500 loading-bar ${
                    activeTab === tab.id
                      ? 'bg-gray-700 text-white shadow-xl shadow-black/60'
                      : 'bg-black text-gray-400 hover:text-gray-200 hover:shadow-lg hover:shadow-black/40'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-8 pb-6 pr-6">
        <div 
          className="text-sm leading-relaxed text-gray-400 max-h-48 overflow-y-auto pr-4 transition-all duration-500 ease-in-out animate-fadeIn"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#4b5563 transparent' }}
        >
          {tabContent[activeTab]}
        </div>
      </div>

      <div className="px-8 pb-6">
        <Grid 
          size={22} 
          className="text-gray-500 transition-all duration-300 hover:text-gray-300 hover:scale-110 cursor-pointer" 
        />
      </div>
    </div>
  );
}

function GalleryWidget() {
  // starter images
  const initialImages = [
    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=400&fit=crop'
  ];

  const [images, setImages] = useState(initialImages);
  const [startIndex, setStartIndex] = useState(0);

  const addImage = () => {
    const newImages = [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop'
    ];
    const randomImage = newImages[Math.floor(Math.random() * newImages.length)];
    setImages([randomImage, ...images]);
  };

  const navigateLeft = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };

  const navigateRight = () => {
    setStartIndex(prev => Math.min(images.length - 3, prev + 1));
  };

  const imagesToDisplay = images.slice(startIndex, startIndex + 3);

  return (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl shadow-2xl shadow-black/50 border border-gray-700/50 transition-all duration-500 hover:shadow-3xl hover:border-gray-600/60 dark-hover-shadow">
      <div className="px-8 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <HelpCircle 
              size={22} 
              className="text-gray-500 flex-shrink-0 transition-all duration-300 hover:text-gray-300 hover:rotate-12 cursor-pointer" 
            />
            <button className="bg-black text-white px-7 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-black/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 cursor-pointer loading-bar">
              <span>Gallery</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={addImage}
              className="flex items-center gap-2 bg-gray-800/90 hover:bg-gray-700/90 px-5 py-2.5 rounded-full text-xs font-medium text-white transition-all duration-300 tracking-wide shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.3)]"
            >
              <Plus size={16} />
              <span>ADD IMAGE</span>
            </button>
            
            <button 
              onClick={navigateLeft}
              disabled={startIndex === 0}
              className={`p-3 rounded-full text-white transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${
                startIndex === 0 
                  ? 'bg-gray-700/40 cursor-not-allowed opacity-40' 
                  : 'bg-gray-700/90 hover:bg-blue-400 hover:shadow-[0_12px_40px_rgba(96,165,250,0.4)] active:bg-blue-500'
              }`}
            >
              <ArrowLeft size={18} />
            </button>

            <button 
              onClick={navigateRight}
              disabled={startIndex >= images.length - 3}
              className={`p-3 rounded-full text-white transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${
                startIndex >= images.length - 3
                  ? 'bg-gray-700/40 cursor-not-allowed opacity-40'
                  : 'bg-gray-700/90 hover:bg-blue-400 hover:shadow-[0_12px_40px_rgba(96,165,250,0.4)] active:bg-blue-500'
              }`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 pb-6 overflow-hidden">
        <div className="flex gap-4">
          {imagesToDisplay.map((src, idx) => (
            <img
              key={startIndex + idx}
              src={src}
              alt={`Gallery item ${startIndex + idx + 1}`}
              className="w-48 h-48 object-cover rounded-2xl shadow-xl shadow-black/60 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-black/80 hover:rotate-2 cursor-pointer"
            />
          ))}
        </div>
      </div>

      <div className="px-8 pb-6">
        <Grid 
          size={22} 
          className="text-gray-500 transition-all duration-300 hover:text-gray-300 hover:scale-110 cursor-pointer" 
        />
      </div>
    </div>
  );
}