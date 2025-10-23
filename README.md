# Portfolio UI Assignment

A modern, interactive portfolio interface built with React and Tailwind CSS featuring a dark-themed design with smooth animations.

## 🚀 Live Preview

**[View Live Demo](https://assignmentttlunacal.netlify.app/)**

## Features

### Profile Widget
- **Three Tab System**: About Me, Experiences, and Recommended sections
- Smooth tab transitions with hover effects
- Custom scrollbar styling
- Fade-in animations for content switching

### Gallery Widget
- Image carousel displaying 3 images at a time
- Add new images dynamically
- Left/right navigation with disabled states
- Hover effects with scale and rotation

## Tech Stack
- React 18+
- Tailwind CSS
- Lucide React (icons)
- CSS Animations

## Installation
```bash
# Install dependencies
npm install react lucide-react

# Run the application
npm run dev
```

## Usage

**Profile Widget**: Click tabs to view different content sections. Content area scrolls if text exceeds max height.

**Gallery Widget**: Use "ADD IMAGE" button to prepend random images. Navigate with arrow buttons.

## Customization

### Add New Profile Tab
```javascript
const tabs = [
  { id: 'new-tab', label: 'New Label' },
  // ...existing tabs
];

const tabContent = {
  'new-tab': <div>Your content</div>,
  // ...existing content
};
```

### Add Gallery Images
```javascript
const newImages = [
  'your-image-url',
  // ...more images
];
```

## Design Highlights
- Dark gradient background (gray-800 to gray-900)
- Glassmorphism with backdrop blur
- Hardware-accelerated animations
- Responsive grid layout
- Custom glow and loading effects

## Browser Support
Modern browsers (Chrome, Firefox, Safari, Edge) - latest versions

## Future Enhancements
- [ ] Image upload functionality
- [ ] Persistent storage for gallery
- [ ] Dark/Light theme toggle
- [ ] Export profile as PDF

---

**Author**: Chitranshu Pandey  
**Location**: Pantnagar, Uttarakhand, India