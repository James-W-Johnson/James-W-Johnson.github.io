# James Johnson - Professional Portfolio Website

A modern, dual-mode portfolio website showcasing technical skills and creative work. Features a unique toggle system that allows visitors to switch between a Technical/Resume view and a Creative Portfolio view with a smooth 3D flip animation.

## 🌟 Features

### Dual Mode System
The website operates in two distinct modes:

- **Technical Mode (Default)**: Professional resume-style layout with a dark, technical color palette. Highlights cybersecurity and software engineering skills, projects, and experience.

- **Creative Mode**: Lighter, expressive design with creative typography. Showcases creative projects, film production work, and multimedia experience.

### Key Features
- **3D Flip Animation**: Smooth card-flip transition when switching between modes
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation support
- **SEO-Friendly**: Proper meta tags and semantic structure
- **Performance Optimized**: Lightweight, fast-loading, no external dependencies (except Google Fonts)
- **Mode Persistence**: Remembers user's preferred mode using localStorage

## 🏗️ How It Works

### Architecture
The website uses a card-flip system where both modes exist simultaneously in the DOM. The JavaScript toggles visibility and positioning to create a seamless transition:

1. **Technical Mode Card**: Positioned relatively when active, absolutely when hidden
2. **Creative Mode Card**: Positioned absolutely when hidden, relatively when active
3. **Flip Animation**: CSS transitions handle the smooth opacity and position changes
4. **Mode Toggle Button**: Located in the navbar, updates icon and text based on current mode

### Navigation
- Fixed navbar with smooth scrolling to sections
- Active section highlighting as you scroll
- Mode toggle button with attention animation on page load

### Sections

1. **Hero Section**: Name, title, tagline, and call-to-action buttons
2. **About Me**: Personal introduction, education, and key strengths
3. **Skills**: Organized by category (Programming, OS, Security, Networking, Tools)
4. **Projects**: Detailed project cards with tech stack and descriptions
5. **Experience**: Professional roles and volunteer work
6. **Contact**: Email, LinkedIn, and GitHub links

## 📁 Project Structure

```
James Professional Website 2/
├── index.html          # Main HTML file (contains both mode layouts)
├── css/
│   └── styles.css      # All styles (Technical + Creative modes, responsive design)
├── js/
│   └── script.js       # JavaScript for mode switching, smooth scrolling, animations
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with proper structure
- **CSS3**: Modern features including Grid, Flexbox, CSS Variables, and smooth transitions
- **Vanilla JavaScript**: No frameworks - lightweight and performant
- **Google Fonts**: Inter (primary font) and Playfair Display (creative mode)

## 🌐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## ⚡ Performance

- No external JavaScript frameworks
- Optimized CSS with efficient selectors
- Minimal external dependencies (only Google Fonts)
- Fast page load times
- Smooth animations with hardware acceleration

## 🔧 Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Visible focus indicators
- Respects `prefers-reduced-motion` media query
- Proper heading hierarchy
- Screen reader friendly

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: Full layout with all features
- **Tablet** (≤768px): Adjusted grid layouts, stacked navigation
- **Mobile** (≤480px): Single column layouts, optimized spacing

## 📧 Contact

**James Johnson**
- Email: jwalkerjohnson@proton.me
- LinkedIn: [linkedin.com/in/jwalkerjohnson](https://linkedin.com/in/jwalkerjohnson)
- GitHub: [github.com/James-W-Johnson](https://github.com/James-W-Johnson)

---
