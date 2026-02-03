# James Johnson - Professional Portfolio Website

A modern, professional, mobile-responsive personal portfolio website showcasing technical skills, projects, and experience. Built with a unique dual-mode feature that allows switching between Technical/Resume view and Creative Portfolio view.

## Features

### Core Features
- **Dual Mode Design**: Toggle between Technical/Resume mode (default) and Creative Portfolio mode
- **3D Flip Animation**: Smooth card-flip transition between modes
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation support
- **SEO-Friendly**: Proper meta tags, semantic structure
- **Performance Optimized**: Lightweight, fast-loading, no external dependencies (except fonts)

### Technical Mode (Default)
- Professional resume-style layout
- Dark, technical color palette
- Highlights cybersecurity and software engineering skills
- Project showcase with security focus
- Experience and skills sections
- Contact information

### Creative Mode
- Lighter, expressive color palette
- Creative typography (Playfair Display)
- Space for creative projects and artistic work
- Same structure, different aesthetic

## Project Structure

```
James Professional Website 2/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles (Technical + Creative modes)
├── js/
│   └── script.js       # JavaScript for interactions
└── README.md           # This file
```

## Sections

1. **Hero/Landing**: Name, title, tagline, and call-to-action buttons
2. **About Me**: Education, GPA, key strengths, and personal brand
3. **Skills**: Organized by category (Programming, OS, Security, Networking, Tools)
4. **Projects**: Detailed project cards with tech stack and security focus
5. **Experience**: IT support roles and volunteer work
6. **Contact**: Email, LinkedIn, GitHub links

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, CSS Variables, Transitions)
- **Vanilla JavaScript**: No frameworks, lightweight and fast
- **Google Fonts**: Inter (primary) and Playfair Display (creative mode)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Deployment

### GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Select the main branch as source
4. Your site will be available at `https://[username].github.io/[repository-name]`

### Custom Domain (Optional)

1. Add a `CNAME` file in the root with your domain name
2. Configure DNS records as per GitHub Pages documentation
3. Update DNS settings in your domain registrar

## Customization

### Update Contact Information
Edit the contact links in `index.html`:
- Replace email addresses
- Update LinkedIn and GitHub URLs

### Add Creative Projects
Edit the Creative Projects section in `index.html` to add your creative work.

### Color Scheme
Modify CSS variables in `css/styles.css`:
- Technical mode: `--tech-*` variables
- Creative mode: `--creative-*` variables

### Content Updates
All content is in `index.html`. Update sections as needed:
- About Me text
- Skills list
- Project descriptions
- Experience details

## Performance

- No external JavaScript frameworks
- Optimized CSS with efficient selectors
- Lazy loading ready (can be added)
- Minimal external dependencies (only Google Fonts)

## Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- Respects `prefers-reduced-motion` media query
- Proper heading hierarchy
- Alt text ready for images (when added)

## Future Enhancements

- Add actual project images/screenshots
- Implement dark/light mode toggle (in addition to creative mode)
- Add blog section
- Integrate contact form
- Add analytics (if desired)
- Expand creative portfolio content

## License

Personal portfolio - All rights reserved.

## Contact

James Johnson
- Email: jwalkerjohnson@proton.me
- LinkedIn: https://linkedin.com/in/jwalkerjohnson
- GitHub: https://github.com/James-W-Johnson

---

Built with security-first principles and attention to detail.
