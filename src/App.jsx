import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Sparkles,
  Briefcase,
  ArrowRight,
  MapPin,
} from "lucide-react";
import "./index.css";

const projects = [
  {
    title: "IntervueAI",
    tag: "Flagship Project",
    description:
      "An AI-powered mock interview platform with role-based sessions, resume analysis, performance feedback, and dashboard tracking.",
    stack: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    points: [
      "AI interview flow with practical question generation",
      "Resume upload and ATS-style insights",
      "Protected dashboard and recruiter-friendly results",
    ],
    live: "https://intervue-ai-phi.vercel.app/",
    github: "https://github.com/saketh-cell/IntervueAI",
    accentClass: "accent-one",
  },
  {
    title: "Supermarket Management System",
    tag: "Full Stack",
    description:
      "A management system for inventory, billing, and product operations with clean workflows and REST API integration.",
    stack: ["JavaScript", "Node.js", "Express", "MongoDB"],
    points: [
      "Inventory and stock handling with CRUD operations",
      "Billing and management flows in one application",
      "Backend-driven structure for scalable data handling",
    ],
    live: "#",
    github: "https://github.com/saketh-cell/SuperMarket-Management-System",
    accentClass: "accent-two",
  },
  {
    title: "Mind Game",
    tag: "Frontend",
    description:
      "A browser game focused on responsive interaction, cleaner UX, and smooth state-driven UI updates.",
    stack: ["React", "JavaScript", "CSS"],
    points: [
      "Interactive logic and responsive user feedback",
      "Frontend polish with a public live deployment",
      "Strong demonstration of UI handling and state control",
    ],
    live: "https://mind-game-lime.vercel.app/",
    github: "https://github.com/saketh-cell/MindGame",
    accentClass: "accent-three",
  },
];

const internships = [
  {
    title: "MERN Stack Intern",
    company: "Gradious Technologies",
    year: "2025",
    description:
      "Worked with React.js, Node.js, Express.js, MongoDB, Git/GitHub, and REST APIs while strengthening full-stack fundamentals.",
  },
  {
    title: "AI Internship",
    company: "Aimers Society",
    year: "2024",
    description:
      "Learned AI fundamentals and explored tools including Hugging Face and YOLOv8 through hands-on exposure.",
  },
];

const floatingBadges = [
  "Modern UI",
  "Frontend Focused",
  "MERN Fresher",
  "Recruiter Ready",
];

const navLinks = [
  { id: "projects", label: "Projects" },
  { id: "internships", label: "Internships" },
  { id: "contact", label: "Contact" },
];

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("projects");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") setDarkMode(false);
    if (savedTheme === "dark") setDarkMode(true);

    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((item) => document.getElementById(item.id));

      for (const section of sections) {
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`portfolio-page ${darkMode ? "theme-dark" : "theme-light"}`}>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.55 } }}
            className="loader-overlay"
          >
            <div className="loader-blobs">
              <motion.div
                animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="blob blob-cyan"
              />
              <motion.div
                animate={{ x: [0, -35, 0], y: [0, 22, 0], scale: [1.08, 1, 1.08] }}
                transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
                className="blob blob-violet"
              />
              <motion.div
                animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="blob blob-fuchsia"
              />
            </div>

            <div className="loader-content">
              <motion.div
                initial={{ scale: 0.78, opacity: 0 }}
                animate={{ scale: [0.92, 1.02, 1], opacity: 1 }}
                transition={{ duration: 0.85 }}
                className="loader-logo-wrap"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                  className="loader-ring loader-ring-one"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="loader-ring loader-ring-two"
                />
                <div className="loader-logo">SR</div>
              </motion.div>

              <motion.h1
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="loader-title"
              >
                Launching Portfolio
              </motion.h1>

              <motion.p
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="loader-text"
              >
                Creative UI • Strong Projects • Fresh Talent
              </motion.p>

              <div className="loader-bar">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
                  className="loader-bar-fill"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="page-bg">
        <div className="page-gradient" />
        <div className="floating-glow glow-left" />
        <div className="floating-glow glow-right" />
        <div className="floating-glow glow-bottom" />
      </div>

      <div className="portfolio-container">
        <header className="portfolio-header glass-card">
          <div className="brand-block">
            <p className="section-mini">Portfolio</p>
            <h1 className="brand-name">Saketh Ram Pusuluru</h1>
          </div>

          <nav className="portfolio-nav">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setDarkMode((prev) => !prev)}
              className="theme-toggle"
            >
              <motion.div
                animate={{ x: darkMode ? 36 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="theme-toggle-thumb"
              >
                {darkMode ? <Moon size={16} /> : <Sun size={16} />}
              </motion.div>

              <span className="theme-toggle-icon left-icon">
                <Sun size={14} />
              </span>
              <span className="theme-toggle-icon right-icon">
                <Moon size={14} />
              </span>
            </button>
          </nav>
        </header>

        <section className="hero-section">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="hero-left"
          >
            <div className="hero-pill">
              <Sparkles size={15} /> Frontend / MERN Stack Developer
            </div>

            <h2 className="hero-title">
              <span>I build</span>
              <span className="gradient-text">modern web products</span>
              <span>with strong UI and clean frontend logic.</span>
            </h2>

            <p className="hero-description">
              I am a fresher focused on React, Next.js, Node.js, and MongoDB. I
              build recruiter-friendly web applications that combine attractive
              UI, responsive design, and practical product thinking.
            </p>

            <div className="badge-list">
              {floatingBadges.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="badge-chip"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects <ArrowRight size={17} />
              </a>

              <a href="https://drive.google.com/file/d/1Mlhl8MooXQt3y5az-PF3wFATFvGrB3jk/view?usp=drive_link" download className="btn btn-secondary">
                <Download size={17} /> Download Resume
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/saketh-cell"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="social-btn glass-card"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/saketh-pusuluru/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="social-btn glass-card"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:prasadp87851@gmail.com"
                aria-label="Send email"
                className="social-btn glass-card"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-right"
          >
            <div className="hero-card glass-card strong-card">
              <div className="hero-card-glow glow-secondary" />
              <div className="hero-card-glow glow-primary" />

              <div className="hero-card-grid">
                <div className="profile-shell">
                  <div className="profile-inner recruiter-profile-card">
                    <div className="profile-top-row">
                      <span className="open-badge">Open to Work</span>
                      <span className="profile-location">
                        <MapPin size={12} /> India
                      </span>
                    </div>

                    <div className="profile-image-top-wrap">
                      <div className="profile-image-ring">
                        <img
                          src="/profile.png"
                          alt="Saketh Ram Pusuluru"
                          className="profile-image-top"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.parentElement.innerHTML =
                              '<div class="profile-image-fallback-square">SR</div>';
                          }}
                        />
                      </div>
                    </div>

                    <div className="profile-main-content">
                      <h3 className="profile-name">Saketh Ram Pusuluru</h3>
                      <p className="profile-role-short">
                        Frontend / MERN Stack Developer
                      </p>
                      <p className="profile-role">
                        I build modern, responsive, recruiter-friendly web
                        applications with strong UI focus using React, Next.js,
                        Node.js, Express, and MongoDB.
                      </p>
                    </div>

                    <div className="profile-highlight-grid">
                      <div className="highlight-box">
                        <span className="highlight-number">3+</span>
                        <span className="highlight-label">Projects</span>
                      </div>
                      <div className="highlight-box">
                        <span className="highlight-number">2</span>
                        <span className="highlight-label">Internships</span>
                      </div>
                      <div className="highlight-box">
                        <span className="highlight-number">MERN</span>
                        <span className="highlight-label">Focused</span>
                      </div>
                    </div>

                    <div className="profile-skill-cloud">
                      {[
                        "React",
                        "Next.js",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "REST APIs",
                      ].map((item) => (
                        <span key={item} className="profile-skill-pill">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="profile-bottom-strip">
                      <div className="profile-status">
                        <span className="status-dot" />
                        Available for Frontend / MERN roles
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-side-cards">
                  <div className="mini-card glass-card strong-card">
                    <p className="mini-label">Best Fit</p>
                    <div className="fit-list">
                      <div className="fit-item">Frontend Developer</div>
                      <div className="fit-item fit-alt">React Developer</div>
                      <div className="fit-item fit-mix">MERN Stack Developer</div>
                    </div>
                  </div>

                  <div className="mini-card glass-card strong-card">
                    <p className="mini-label">Strengths</p>
                    <div className="strength-list">
                      {["UI", "Hooks", "APIs", "Auth", "MongoDB", "Responsive"].map(
                        (item) => (
                          <span key={item} className="badge-chip small">
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-head">
            <div>
              <p className="section-mini">Projects</p>
              <h3 className="section-title">
                Featured projects with premium presentation
              </h3>
            </div>
            <p className="section-subtext">
              Instead of plain cards, these are designed to feel more visual,
              modern, and memorable.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="project-card glass-card strong-card"
              >
                <div className={`project-preview ${project.accentClass}`}>
                  <div className="preview-window glass-card">
                    <div className="window-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="preview-box">
                      <div>
                        <p className="preview-title">{project.title}</p>
                        <p className="preview-subtitle">Project preview area</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <span className="tag-pill">{project.tag}</span>
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>

                  <div className="stack-list">
                    {project.stack.map((item) => (
                      <span key={item} className="badge-chip small">
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="point-list">
                    {project.points.map((point) => (
                      <li key={point}>
                        <span className="point-dot" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="project-actions">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary small-btn"
                    >
                      Live Demo <ExternalLink size={15} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary small-btn"
                    >
                      GitHub <Github size={15} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="internships" className="content-section">
          <div className="section-head single">
            <div>
              <p className="section-mini">Experience</p>
              <h3 className="section-title">Internships and learning journey</h3>
            </div>
          </div>

          <div className="experience-grid">
            <div className="about-card glass-card strong-card">
              <p className="section-mini">About Me</p>
              <h4 className="about-title">
                A fresher who cares about design and impact
              </h4>
              <p className="about-text">
                I want my work to feel more than functional. I want it to look
                polished, modern, and professional enough to make recruiters
                pause and explore more.
              </p>
              <p className="about-text">
                My focus is frontend and MERN stack development, with strong
                attention to UI, clean structure, and better user experience.
              </p>
            </div>

            <div className="internship-list">
              {internships.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="internship-card glass-card strong-card"
                >
                  <div className="internship-top">
                    <div className="internship-left">
                      <div className="internship-icon">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <h4 className="internship-title">{item.title}</h4>
                        <p className="internship-company">{item.company}</p>
                      </div>
                    </div>
                    <span className="tag-pill">{item.year}</span>
                  </div>
                  <p className="internship-description">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <div className="contact-card glass-card strong-card">
            <div className="contact-grid">
              <div>
                <p className="section-mini">Contact</p>
                <h3 className="section-title">
                  Let’s connect and build something meaningful
                </h3>
                <p className="section-subtext contact-text">
                  I am actively looking for frontend and MERN stack opportunities
                  where I can contribute, learn fast, and keep building better
                  products.
                </p>
              </div>

              <div className="contact-links">
                <a
                  href="mailto:prasadp87851@gmail.com"
                  className="contact-item glass-card"
                >
                  <Mail size={18} />
                  <div>
                    <p className="contact-label">Email</p>
                    <p className="contact-value">prasadp87851@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/saketh-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item glass-card"
                >
                  <Github size={18} />
                  <div>
                    <p className="contact-label">GitHub</p>
                    <p className="contact-value">github.com/saketh-cell</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/saketh-pusuluru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item glass-card"
                >
                  <Linkedin size={18} />
                  <div>
                    <p className="contact-label">LinkedIn</p>
                    <p className="contact-value">
                      linkedin.com/in/saketh-pusuluru
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}