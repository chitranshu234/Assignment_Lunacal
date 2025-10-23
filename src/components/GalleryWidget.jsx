import React, { useState } from 'react';
import { Plus, ArrowLeft, ArrowRight, HelpCircle, Grid } from 'lucide-react';

export default function GalleryWidget() {
  // initial placeholder images
  const initialImages = [
    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=400&fit=crop'
  ];

  const [images, setImages] = useState(initialImages);
  const [startIndex, setStartIndex] = useState(0);

  // handler to add a random new image to the gallery
  const addImage = () => {
    const newImages = [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop'
    ];
    const randomImage = newImages[Math.floor(Math.random() * newImages.length)];
    setImages([randomImage, ...images]);
  };

  // navigation handlers
  const navigateLeft = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };

  const navigateRight = () => {
    setStartIndex(prev => Math.min(images.length - 3, prev + 1));
  };

  // get the 3 images to display based on current index
  const imagesToDisplay = images.slice(startIndex, startIndex + 3);

  return (
    <div className="bg-gray-600/85 backdrop-blur-sm rounded-3xl shadow-2xl shadow-black/50 border border-gray-500/50 transition-all duration-500 hover:shadow-3xl hover:border-gray-400/60 dark-hover-shadow">
      {/* header with controls */}
      <div className="px-8 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <HelpCircle 
              size={24} 
              className="text-gray-300 flex-shrink-0 transition-all duration-300 hover:text-white hover:rotate-12 cursor-pointer" 
            />
            <button className="bg-black text-white px-7 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-black/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 cursor-pointer loading-bar">
              <span>Gallery</span>
            </button>
          </div>

          {/* control buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={addImage}
              className="flex items-center gap-2 bg-gray-800/90 hover:bg-gray-700/90 px-5 py-2.5 rounded-full text-xs font-semibold text-white transition-all duration-300 tracking-wide shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.3)]"
            >
              <Plus size={18} strokeWidth={2.5} />
              <span>ADD IMAGE</span>
            </button>
            
            {/* Left navigation button */}
            <button 
              onClick={navigateLeft}
              disabled={startIndex === 0}
              className={`p-3 rounded-full text-white transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${
                startIndex === 0 
                  ? 'bg-gray-700/40 cursor-not-allowed opacity-40' 
                  : 'bg-gray-700/90 hover:bg-blue-400 hover:shadow-[0_12px_40px_rgba(96,165,250,0.4)] active:bg-blue-500'
              }`}
            >
              <ArrowLeft size={20} strokeWidth={2.5} />
            </button>

            {/* Right navigation button */}
            <button 
              onClick={navigateRight}
              disabled={startIndex >= images.length - 3}
              className={`p-3 rounded-full text-white transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${
                startIndex >= images.length - 3
                  ? 'bg-gray-700/40 cursor-not-allowed opacity-40'
                  : 'bg-gray-700/90 hover:bg-blue-400 hover:shadow-[0_12px_40px_rgba(96,165,250,0.4)] active:bg-blue-500'
              }`}
            >
              <ArrowRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Image gallery display */}
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

      {/* Footer grid icon */}
      <div className="px-8 pb-6">
        <Grid 
          size={24} 
          className="text-gray-300 transition-all duration-300 hover:text-white hover:scale-110 cursor-pointer" 
        />
      </div>
    </div>
  );
}