# Nayanz - Personal Portfolio Website

A professional, modern portfolio website for **Nayanz**, an aspiring Data Analyst and Machine Learning Developer.

## 🚀 Overview

This is a complete, production-ready personal portfolio website built with:
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with dark/light theme toggle
- **Vanilla JavaScript** - Interactive features without dependencies

The website is fully responsive, accessible, and designed to impress recruiters with a focus on **real projects** and **genuine technical skills**.

## 📋 Features

✅ **Professional Hero Section** - Clear value proposition and call-to-action buttons  
✅ **About Section** - Personal introduction and career direction  
✅ **Skills Section** - Organized technology categories without fake percentages  
✅ **Featured Projects** - Case studies presenting problems, solutions, and impact  
✅ **Project Grid** - Showcase multiple projects with hover interactions  
✅ **Certificates Section** - Display professional credentials  
✅ **Contact Section** - Multiple ways to reach out  
✅ **Dark/Light Theme Toggle** - User preference with localStorage persistence  
✅ **Fully Responsive** - Mobile, tablet, and desktop layouts  
✅ **Smooth Navigation** - Sticky navbar with scroll detection  
✅ **Accessibility** - Semantic HTML, keyboard navigation, ARIA labels  
✅ **Form Validation** - Client-side contact form with validation  
✅ **Modal Project Details** - Expandable case studies  

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── style.css                  # Complete styling
├── script.js                  # Interactive features
├── README.md                  # This file
│
├── assets/
│   ├── images/
│   │   └── profile-placeholder.jpg   # Profile photo (replace with your image)
│   │
│   ├── projects/
│   │   ├── placement-system-placeholder.jpg
│   │   ├── heart-disease-placeholder.jpg
│   │   ├── plant-disease-placeholder.jpg
│   │   └── pothole-detection-placeholder.jpg
│   │
│   ├── certificates/
│   │   └── certificate-placeholder.jpg
│   │
│   └── resume/
│       └── resume.pdf              # Your resume (add your PDF here)
```

## 🏃 Getting Started

### Option 1: View in Browser (Quick Start)

1. **Open the portfolio in your browser:**
   ```bash
   # On Windows
   start c:\Users\NAYANENDHU\Desktop\porfolio\index.html
   
   # Or simply open the file with your browser
   ```

2. **Or drag the index.html file into your browser**

### Option 2: Run with VS Code Live Server (Recommended)

1. **Install Live Server Extension** (if not already installed):
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Click Install

2. **Open the portfolio in VS Code:**
   ```bash
   code c:\Users\NAYANENDHU\Desktop\porfolio
   ```

3. **Right-click on index.html and select "Open with Live Server"**

4. **Your portfolio will open in a browser with auto-refresh on changes**

### Option 3: Use Python's Built-in Server

```bash
# Navigate to portfolio folder
cd c:\Users\NAYANENDHU\Desktop\porfolio

# Start server (Python 3)
python -m http.server 8000

# Open browser to http://localhost:8000
```

## 🛠️ Customization Guide

### 1. Replace Your Personal Information

**Open `index.html` and find & replace:**

```
YOUR_EMAIL_HERE → your.actual.email@gmail.com
YOUR_GITHUB_URL_HERE → https://github.com/yourprofile
YOUR_LINKEDIN_URL_HERE → https://linkedin.com/in/yourprofile
```

**Using Find & Replace in VS Code:**
- Press `Ctrl+H` to open Find & Replace
- Find: `your.email@example.com`
- Replace: `your.actual.email@gmail.com`
- Click "Replace All"

### 2. Add Your Profile Photo

1. **Prepare your image:**
   - Recommended size: 300×300px
   - Format: JPG or PNG
   - Name it: `profile.jpg` or `profile.png`

2. **Replace placeholder image:**
   - Replace `assets/images/profile-placeholder.jpg` with your image
   - Or update the image reference in HTML

3. **Update in HTML (Optional):**
   ```html
   <!-- Find this section and update if needed -->
   <div class="hero-visual">
       <div class="placeholder-avatar">
           <svg>...</svg>  <!-- Or replace with: <img src="assets/images/profile.jpg" alt="Profile"> -->
       </div>
   </div>
   ```

### 3. Update Project Information

**For the Flagship Project (Placement Recommendation System):**

1. Find the section in `index.html`:
   ```html
   <div class="flagship-project">
   ```

2. Update project details:
   - Title
   - Description
   - Problem statement
   - Solution
   - Technologies used
   - Links

3. Add project screenshot:
   ```html
   <div class="project-image">
       <img src="assets/projects/your-project-image.jpg" alt="Placement System">
   </div>
   ```

**For Other Projects (Grid Projects):**

1. Find the `projects-grid` section
2. Update each `project-card` with:
   - Project image path
   - Title
   - Description
   - Approach
   - Technologies
   - GitHub link: `<a href="https://github.com/yourprofile/repo-name">`
   - Live Demo link (if available)

### 4. Add Project Screenshots

1. **Take screenshots of your projects:**
   - Desktop view recommended
   - 400×300px or similar aspect ratio
   - Clear, professional images

2. **Place in `assets/projects/`:**
   - `placement-system.jpg`
   - `heart-disease.jpg`
   - `plant-disease.jpg`
   - `pothole-detection.jpg`

3. **Update HTML to reference your images:**
   ```html
   <div class="placeholder-project">
       <img src="assets/projects/placement-system.jpg" alt="Placement System Screenshot">
   </div>
   ```

### 5. Add Your Resume

1. **Save your resume as PDF:**
   - Name: `resume.pdf`
   - Format: PDF

2. **Place in `assets/resume/`**

3. **Update links in HTML:**
   ```html
   <a href="assets/resume/resume.pdf" class="btn btn-primary">Download My Resume</a>
   ```

### 6. Update Skills Section

**In `index.html`, find the skills section:**

```html
<div class="skill-category">
    <h3>Programming Languages</h3>
    <div class="skill-tags">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">SQL</span>
        <!-- Add or remove as needed -->
    </div>
</div>
```

**To add a new skill:**
```html
<span class="skill-tag">NewSkill</span>
```

### 7. Update Certificates

1. **Find the certificates section:**
   ```html
   <div class="certificates-grid">
   ```

2. **Update or add certificates:**
   ```html
   <div class="certificate-card">
       <div class="certificate-image">
           <img src="assets/certificates/certificate.jpg" alt="Certificate Name">
       </div>
       <div class="certificate-info">
           <h3>Certificate Name</h3>
           <p class="certificate-issuer">Issued by: Organization Name</p>
           <a href="https://credential-link.com" class="certificate-link">View Certificate</a>
       </div>
   </div>
   ```

### 8. Update About Section

**Find and edit:**
```html
<section id="about" class="about">
    <div class="about-text">
        <h3>Who I Am</h3>
        <p>Update this text...</p>
        
        <h3>What I Work With</h3>
        <p>Update this text...</p>
        
        <h3>Currently Exploring</h3>
        <ul class="exploring-list">
            <li>Add your interests</li>
        </ul>
    </div>
</section>
```

### 9. Change Theme Colors

**In `style.css`, find the CSS variables section:**

```css
:root {
    --color-accent: #4a9eff;           /* Main accent color */
    --color-accent-dark: #2e7fd4;      /* Darker accent */
    --color-accent-light: #6bb0ff;     /* Lighter accent */
    
    /* Light Mode Colors */
    --bg-primary: #ffffff;
    --text-primary: #1a1a1a;
    
    /* Dark Mode Colors */
    --dark-bg-primary: #0f0f0f;
    --dark-text-primary: #ffffff;
}
```

**Change the accent color:**
```css
--color-accent: #your-color-code;      /* e.g., #ff6b6b, #4ecdc4 */
```

### 10. Add Contact Form Backend (Optional)

Currently, the form shows a message that it's not configured. To enable email sending:

**Using Formspree (Free, No Backend Needed):**

1. Go to https://formspree.io/
2. Sign up and create a form
3. Get your form endpoint
4. Update the form in HTML:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
       <input type="email" name="email" required>
       <textarea name="message" required></textarea>
       <button type="submit">Send Message</button>
   </form>
   ```

**Using EmailJS (Client-side):**
- No backend required
- Free tier available
- Add library and configure in script.js

## 📱 Responsive Design

The website is fully responsive:

- **Mobile (< 768px):** Single column, hamburger menu, optimized touch targets
- **Tablet (768px - 1024px):** 2-column grids, balanced layout
- **Desktop (> 1024px):** Full multi-column layout, maximum visual hierarchy

**Test responsiveness:**
- Chrome/Edge: F12 → Toggle Device Toolbar (Ctrl+Shift+M)
- Firefox: Ctrl+Shift+M
- Resize browser window

## 🎨 Light/Dark Mode

- **Default:** Dark mode (modern professional look)
- **Toggle:** Click the sun/moon icon in the navigation bar
- **Persistence:** User preference saved to localStorage
- **System Preference:** Respects OS dark mode preference on first visit

## ♿ Accessibility Features

- ✅ Semantic HTML structure
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ ARIA labels for interactive elements
- ✅ Color contrast compliant (WCAG AA)
- ✅ Focus visible states
- ✅ Respects `prefers-reduced-motion`
- ✅ Alt text for images (add if using custom images)
- ✅ Form labels associated with inputs

## 🚀 Deployment

### Deploy to GitHub Pages (Free)

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages
   - Select main branch as source
   - Your portfolio is live at: `https://yourusername.github.io/portfolio`

### Deploy to Netlify (Free)

1. **Connect your GitHub repository to Netlify**
2. **Or drag and drop the portfolio folder**
3. **Your site goes live instantly**

### Deploy to Vercel (Free)

1. **Connect your GitHub repository**
2. **Or use Vercel CLI**
3. **Automatic deployments on push**

## 📋 Customization Checklist

Use this checklist to track what needs updating:

- [ ] Replace email address in contact section
- [ ] Update GitHub URL
- [ ] Update LinkedIn URL
- [ ] Add profile photo (assets/images/)
- [ ] Add project screenshots (assets/projects/)
- [ ] Add/update project descriptions
- [ ] Add project GitHub links
- [ ] Add live demo links (if applicable)
- [ ] Add resume PDF (assets/resume/)
- [ ] Update skills if needed
- [ ] Add/update certificates
- [ ] Update about section
- [ ] Test all links work
- [ ] Test on mobile devices
- [ ] Test dark/light theme toggle
- [ ] Verify form validation
- [ ] Check for broken images
- [ ] Deploy to hosting service

## 🔍 Quality Checklist

Before showing to recruiters:

- [ ] All links are valid (GitHub, LinkedIn, email)
- [ ] No 404 errors or broken images
- [ ] Navigation works smoothly
- [ ] Mobile view looks professional
- [ ] Dark/light theme works correctly
- [ ] Theme toggle persists on reload
- [ ] Forms validate correctly
- [ ] No console errors (F12 → Console)
- [ ] Page loads quickly
- [ ] Text is readable with good contrast
- [ ] All project descriptions are accurate
- [ ] No fake metrics or exaggerated claims

## 🆘 Troubleshooting

### Images not showing
- Check file path (case-sensitive on some servers)
- Use relative paths like `assets/images/photo.jpg`
- Ensure image files exist in correct folder
- Check browser console for 404 errors (F12)

### Theme toggle not working
- Check browser console for errors
- Ensure localStorage is enabled
- Clear browser cache and reload
- Check that `script.js` is loaded

### Mobile menu not opening
- Check hamburger button in console (F12)
- Ensure JavaScript is enabled
- Clear browser cache
- Try different browser

### Form not submitting
- The form displays an information message (no backend configured)
- To enable real email: see "Add Contact Form Backend" section above
- Check console for JavaScript errors

### Styling issues
- Clear browser cache (Ctrl+Shift+Delete)
- Reload page (Ctrl+F5)
- Check CSS file is loaded
- Verify no CSS conflicts

## 📞 Contact Information to Update

Update these placeholders in `index.html`:

1. **Email:** `your.email@example.com`
2. **GitHub:** `https://github.com/yourprofile`
3. **LinkedIn:** `https://linkedin.com/in/yourprofile`

Use Find & Replace:
- `Ctrl+H` in VS Code
- Find: `your.email@example.com`
- Replace with your actual email
- Click "Replace All"

## 🎯 Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Resources & Documentation

- **HTML Semantic Elements:** https://developer.mozilla.org/en-US/docs/Glossary/Semantics
- **CSS Flexbox Guide:** https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **CSS Grid Guide:** https://css-tricks.com/snippets/css/complete-guide-grid/
- **Accessibility (WCAG):** https://www.w3.org/WAI/WCAG21/quickref/
- **GitHub Pages Deployment:** https://pages.github.com/

## 🔐 Security Notes

- The contact form does NOT send emails by default (no backend configured)
- All code is client-side (runs in browser)
- No sensitive data is transmitted
- To enable email: use Formspree, EmailJS, or your own backend

## 💡 Tips for Best Results

1. **Use high-quality project screenshots**
   - Show real work, not just code
   - Include UI/output views
   - 400×300px recommended

2. **Write compelling project descriptions**
   - Focus on problem, solution, impact
   - Avoid jargon
   - Be specific, not vague

3. **Keep information up-to-date**
   - Update as you learn new skills
   - Add new projects regularly
   - Keep links current

4. **Customize the design (Optional)**
   - Change accent color in CSS variables
   - Modify fonts if desired
   - Adjust spacing and layouts
   - Stay professional

5. **Get feedback**
   - Show to friends/mentors
   - Test on different devices
   - Ask for honest critiques

## 📝 License

This portfolio template is yours to use and customize for your personal brand.

## 🙌 Next Steps

1. **Fill in your personal information** (email, GitHub, LinkedIn)
2. **Add your profile photo**
3. **Add project screenshots**
4. **Write your project descriptions**
5. **Add your resume PDF**
6. **Test on multiple devices**
7. **Deploy to GitHub Pages or Netlify**
8. **Share with recruiters!**

---

**Built for:** Nayanz - Data Analyst & Machine Learning Developer  
**Version:** 1.0  
**Last Updated:** 2024

Good luck with your job search! 🚀
