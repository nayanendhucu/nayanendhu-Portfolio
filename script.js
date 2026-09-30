/* ===============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   =============================================== */

// ==========================================
// Theme Management
// ==========================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;
const THEME_STORAGE_KEY = 'portfolio-theme';

// Initialize theme on page load
function initializeTheme() {
    // Check localStorage first
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }
}

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        localStorage.setItem(THEME_STORAGE_KEY, 'dark');
        updateThemeToggleIcon('dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem(THEME_STORAGE_KEY, 'light');
        updateThemeToggleIcon('light');
    }
}

function updateThemeToggleIcon(theme) {
    // Icon changes based on current theme
    if (theme === 'dark') {
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
}

function getCurrentTheme() {
    return body.classList.contains('dark-mode') ? 'dark' : 'light';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only apply if user hasn't manually set a theme
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

// ==========================================
// Navigation Management
// ==========================================

const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Update active nav link based on scroll position
function updateActiveNavLink() {
    let currentSection = '';
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ==========================================
// Smooth Scrolling for Navigation
// ==========================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==========================================
// Form Handling
// ==========================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        if (!name || !email || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Since there's no backend configured, show a user-friendly message
        showFormMessage(
            'Thank you for your message! Since the contact form backend is not configured yet, please use the email or LinkedIn links to reach out directly.',
            'success'
        );
        
        // Reset form
        contactForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.classList.remove('hidden');
}

function openShristiCaseStudy() {
    if (!projectModal || !modalBody) return;

    modalBody.innerHTML = `
        <article class="shristi-case-study">
            <header class="case-study-hero">
                <span class="project-badge">FLAGSHIP PROJECT</span>
                <h2>SHRISTI</h2>
                <p>Connecting clients with artists for personalized artwork.</p>
                <span class="case-study-category">Full-Stack Web Application | Artist Marketplace | Booking Platform</span>
                <div class="project-cta">
                    <a href="#" class="btn btn-primary btn-sm">Live Demo</a>
                    <a href="https://github.com/nayanendhucu" target="_blank" rel="noreferrer" class="btn btn-secondary btn-sm">View Source Code</a>
                    <a href="assets/projects/shristi/shristi-project-report.pdf" target="_blank" class="btn btn-outline btn-sm">Open Project Report</a>
                </div>
            </header>

            <section class="case-study-section">
                <span class="case-study-number">01</span>
                <div><h3>Overview</h3><p>Shristi is an end-to-end marketplace MVP that brings artist discovery, portfolio presentation, custom booking requests, media uploads, and client-artist communication into one centralized platform.</p></div>
            </section>

            <section class="case-study-section">
                <span class="case-study-number">02</span>
                <div><h3>Problem</h3><p>Clients often discover artists through social media, personal contacts, or offline references. That makes portfolios, booking details, reference images, and conversations difficult to keep organized. Artists also need one place to present their work and manage requests.</p></div>
            </section>

            <section class="case-study-section">
                <span class="case-study-number">03</span>
                <div><h3>Solution</h3><p>Shristi provides a role-based platform where clients can discover artists, review styles and services, submit custom requests, upload references, and communicate with artists. Artists can manage their profile, portfolio, services, bookings, and conversations.</p></div>
            </section>

            <section class="case-study-section case-study-wide">
                <span class="case-study-number">04</span>
                <div><h3>Key Features</h3>
                    <div class="case-feature-grid">
                        <div><strong>Artist Discovery</strong><span>Browse, search, and filter available artists.</span></div>
                        <div><strong>Artist Profiles</strong><span>Show styles, portfolios, services, and pricing.</span></div>
                        <div><strong>Portfolio Management</strong><span>Upload and present artwork in a focused gallery.</span></div>
                        <div><strong>Booking System</strong><span>Submit custom requests with reference images.</span></div>
                        <div><strong>Messaging</strong><span>Support client-artist conversation threads and attachments.</span></div>
                        <div><strong>Authentication</strong><span>Registration, login, sessions, and role-based navigation.</span></div>
                        <div><strong>Dashboards</strong><span>Manage profiles, portfolios, bookings, and requests.</span></div>
                        <div><strong>Gallery</strong><span>Explore artwork and artist portfolios.</span></div>
                    </div>
                </div>
            </section>

            <section class="case-study-section case-study-wide">
                <span class="case-study-number">05</span>
                <div><h3>User Flow</h3>
                    <div class="flow-grid">
                        <div><h4>Client</h4><p>Register / Login <b>→</b> Browse Artists <b>→</b> View Profile <b>→</b> Explore Portfolio <b>→</b> View Services <b>→</b> Submit Booking <b>→</b> Upload Reference <b>→</b> Chat <b>→</b> Track Booking</p></div>
                        <div><h4>Artist</h4><p>Register / Login <b>→</b> Create Profile <b>→</b> Add Styles <b>→</b> Upload Portfolio <b>→</b> Add Services <b>→</b> Receive Booking <b>→</b> Communicate <b>→</b> Manage Order</p></div>
                    </div>
                </div>
            </section>

            <section class="case-study-section case-study-wide">
                <span class="case-study-number">06</span>
                <div><h3>Technical Architecture</h3>
                    <div class="architecture-flow"><span>HTML / CSS / JavaScript / Bootstrap</span><b>↓</b><span>REST API / HTTP</span><b>↓</b><span>Django + Django REST Framework</span><b>↓</b><span>Django ORM</span><b>↓</b><span>SQLite Database</span></div>
                    <p class="architecture-note">Django manages authentication, routing, APIs, database operations, media uploads, role handling, and application logic across the Users, Artists, Bookings, and Messaging areas.</p>
                </div>
            </section>

            <section class="case-study-section case-study-wide">
                <span class="case-study-number">07</span>
                <div><h3>Application Screenshots / Outputs</h3>
                    <p>The supplied Shristi project report is preserved as the visual evidence source. Open it to inspect the documented application screens and outputs.</p>
                    <div class="report-preview"><iframe src="assets/projects/shristi/shristi-project-report.pdf#page=1" title="Shristi project report preview"></iframe></div>
                    <div class="output-links">
                        ${['Home Page','Register Page','Sign In Page','Artist Dashboard','Portfolio','Artist Profile & Styles','Pricing & Services','Browse Artists','Gallery','Messages','Booking Page','Order View','Forgot Password','Terms & Conditions','Privacy Policy'].map((label, index) => `<a href="assets/projects/shristi/shristi-project-report.pdf#page=${index + 1}" target="_blank" rel="noreferrer">${label}</a>`).join('')}
                    </div>
                </div>
            </section>

            <section class="case-study-section">
                <span class="case-study-number">08</span>
                <div><h3>Technology Stack</h3><div class="tech-tags"><span class="tech-tag">HTML</span><span class="tech-tag">CSS</span><span class="tech-tag">JavaScript</span><span class="tech-tag">Bootstrap</span><span class="tech-tag">Django</span><span class="tech-tag">Django REST Framework</span><span class="tech-tag">SQLite</span><span class="tech-tag">Django ORM</span></div></div>
            </section>

            <section class="case-study-section">
                <span class="case-study-number">09</span>
                <div><h3>What I Built</h3><ul class="case-list"><li>Designed the application interface and responsive interactions.</li><li>Implemented artist discovery, profiles, portfolios, and services.</li><li>Developed booking workflows and media/file upload handling.</li><li>Worked with Django architecture, REST API endpoints, and SQLite through Django ORM.</li><li>Implemented authentication and role-based behavior for clients and artists.</li><li>Implemented messaging functionality and data management flows.</li></ul></div>
            </section>

            <section class="case-study-section">
                <span class="case-study-number">10</span>
                <div><h3>Future Improvements</h3><p>Potential enhancements include secure online payments, email and in-app notifications, moderation tools, improved search and recommendations, reviews and ratings, performance optimization, and further mobile-first improvements.</p></div>
            </section>
        </article>
    `;
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ==========================================
// Project Modal
// ==========================================

const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

function openProjectModal(projectId) {
    const projectContent = getProjectContent(projectId);
    modalBody.innerHTML = projectContent;
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function getProjectContent(projectId) {
    const projects = {
        placement: `
            <div class="project-modal-content">
                <h2>Placement Recommendation System - Case Study</h2>
                
                <div class="modal-section">
                    <h3>Project Overview</h3>
                    <p>
                        A comprehensive machine learning-based system designed to predict student placement 
                        opportunities and recommend suitable companies based on student profiles, academic performance, 
                        skills, and available company requirements.
                    </p>
                </div>
                
                <div class="modal-section">
                    <h3>The Problem</h3>
                    <p>
                        Students often find it challenging to identify companies and opportunities that match their 
                        academic background and skill set. Traditional placement processes rely on manual matching, which 
                        is time-consuming, inconsistent, and may miss better-fitting opportunities.
                    </p>
                </div>
                
                <div class="modal-section">
                    <h3>The Solution</h3>
                    <p>
                        I developed an intelligent system that analyzes both student profiles and company requirements 
                        to predict placement outcomes and generate personalized company recommendations. The system uses 
                        machine learning to identify patterns and optimize the matching process.
                    </p>
                </div>
                
                <div class="modal-section">
                    <h3>Technical Approach</h3>
                    <ul>
                        <li><strong>Data Collection & Preprocessing:</strong> Aggregated student and company data, handled missing values, and standardized formats.</li>
                        <li><strong>Feature Engineering:</strong> Extracted meaningful features from raw data including academic metrics, skill relevance, and company preferences.</li>
                        <li><strong>Exploratory Data Analysis:</strong> Analyzed patterns in placement data to understand success factors.</li>
                        <li><strong>Model Development:</strong> Built and trained machine learning models for placement prediction.</li>
                        <li><strong>Recommendation Algorithm:</strong> Implemented a scoring system to rank companies based on student fit.</li>
                        <li><strong>Backend API:</strong> Developed RESTful APIs using Flask to serve predictions and recommendations.</li>
                        <li><strong>Database Integration:</strong> Designed MySQL database schema for efficient data storage and retrieval.</li>
                        <li><strong>Frontend Interface:</strong> Created an intuitive web interface for students and placement officers.</li>
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h3>Key Technologies</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">Pandas</span>
                        <span class="tech-tag">Scikit-learn</span>
                        <span class="tech-tag">Flask</span>
                        <span class="tech-tag">MySQL</span>
                        <span class="tech-tag">HTML/CSS/JavaScript</span>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3>Features & Capabilities</h3>
                    <ul>
                        <li>Comprehensive student profile analysis</li>
                        <li>Predictive placement outcome scoring</li>
                        <li>Personalized company recommendations</li>
                        <li>Company-company similarity matching</li>
                        <li>Historical data-based insights</li>
                        <li>Role-based access control</li>
                        <li>Real-time placement tracking</li>
                        <li>Export and reporting capabilities</li>
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h3>Impact & Learnings</h3>
                    <p>
                        This project provided hands-on experience with the entire machine learning pipeline, from data 
                        collection through deployment. It demonstrated the practical application of ML techniques in solving 
                        real-world problems and reinforced the importance of data quality and feature engineering in model 
                        performance.
                    </p>
                </div>
            </div>
        `
    };
    
    return projects[projectId] || '<p>Project details not available.</p>';
}

if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
}

// Close modal when clicking outside content
if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ==========================================
// Scroll Animations
// ==========================================

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply initial styles and observe elements
const animatedElements = document.querySelectorAll('.project-card, .skill-category, .stat-card, .certificate-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
    observer.observe(el);
});

// ==========================================
// Resume Download Handler
// ==========================================

const resumeBtn = document.getElementById('resumeBtn');
const downloadResumeBtn = document.getElementById('downloadResumeBtn');

function handleResumeClick(e) {
    e.preventDefault();
    
    // Check if resume.pdf exists by trying to fetch it
    fetch('assets/resume/resume.pdf', { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                // Resume exists, download it
                const link = document.createElement('a');
                link.href = 'assets/resume/resume.pdf';
                link.download = 'resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                showResumeMessage();
            }
        })
        .catch(() => {
            // Resume doesn't exist or error occurred
            showResumeMessage();
        });
}

function showResumeMessage() {
    alert('Resume PDF has not been added yet.\n\nTo add your resume:\n1. Name your resume file: resume.pdf\n2. Place it in: assets/resume/\n3. Refresh this page');
}

if (resumeBtn) {
    resumeBtn.addEventListener('click', handleResumeClick);
}

if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', handleResumeClick);
}

// ==========================================
// Utility: Set Active Nav Link on Page Load
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    updateActiveNavLink();
});

// ==========================================
// Keyboard Navigation Support
// ==========================================

// Add keyboard support for buttons
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (document.activeElement.classList.contains('btn')) {
            document.activeElement.click();
        }
    }
});

// ==========================================
// Performance: Lazy Load Content
// ==========================================

// Images (if added in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==========================================
// Accessibility Enhancements
// ==========================================

// Ensure all interactive elements are keyboard accessible
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        if (document.activeElement === hamburger) {
            hamburger.click();
        }
        if (document.activeElement === themeToggle) {
            themeToggle.click();
        }
    }
});

// ==========================================
// Console Message (Professional Touch)
// ==========================================

console.log('%cWelcome to Nayanz\'s Portfolio!', 'color: #4a9eff; font-size: 16px; font-weight: bold;');
console.log('%cFeel free to explore the code and reach out if you\'d like to work together!', 'color: #4a9eff; font-size: 14px;');
console.log('%cGitHub: https://github.com/yourprofile', 'color: #4a9eff; font-size: 12px;');
