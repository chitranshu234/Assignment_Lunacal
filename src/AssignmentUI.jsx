import React from 'react';
import ProfileWidget from './components/ProfileWidget';
import GalleryWidget from './components/GalleryWidget';

export default function AssignmentUI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-gray-300 font-sans">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.7),
                        0 0 30px rgba(0, 0, 0, 0.5),
                        0 0 45px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.8),
                        0 0 40px rgba(0, 0, 0, 0.6),
                        0 0 60px rgba(0, 0, 0, 0.4);
          }
        }
        
        .tab-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .dark-hover-shadow {
          transition: all 0.3s ease;
        }
        
        .dark-hover-shadow:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8),
                      0 10px 30px rgba(0, 0, 0, 0.7),
                      0 0 20px rgba(0, 0, 0, 0.6);
        }
        
        .loading-bar {
          position: relative;
          overflow: hidden;
        }
        
        .loading-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: rgba(107, 114, 128, 0.4);
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }
        
        .loading-bar:hover::before {
          width: 100%;
        }
        
        .loading-bar > span {
          position: relative;
          z-index: 1;
        }
      `}</style>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left half - empty for laptop, responsive for mobile */}
        <div className="hidden lg:block"></div>
        
        {/* Right half - widgets */}
        <div className="flex flex-col justify-center gap-6 p-8 lg:pr-12">
          <ProfileWidget />
          
          {/* Divider line */}
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