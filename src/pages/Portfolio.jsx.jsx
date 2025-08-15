import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Mail, Github, Linkedin, Menu, X } from "lucide-react";
// import profileImg from '../assets/profile.jpg';
import "./Portfolio.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = Object.keys(sectionsRef.current);
      const currentSection = sections.find((section) => {
        const element = sectionsRef.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    // { id: 'skills', label: 'Skills' },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // const skills = [
  //   { name: 'React.js', level: 8 },
  //   { name: 'Flutter', level: 7 },
  //   { name: 'JavaScript (ES6+)', level: 7 },
  //   { name: 'Node.js', level: 6 },
  //   { name: 'Express.js', level: 6 },
  //   { name: 'Firebase', level: 8 },
  //   { name: 'MongoDB', level: 6 },
  //   { name: 'MySQL', level: 8 },
  //   { name: 'PHP', level: 7 },
  //   { name: 'HTML5 & CSS3', level: 9 },
  //   { name: 'UI/UX Design', level: 8 },
  //   { name: 'Cybersecurity Basics', level: 6 }
  // ];

  const projects = [
    {
      title: "Comprehensive Legal Interaction Platform",
      description:
        "Flutter mobile app providing secure, real-time access to legal cases, communication with professionals, emergency alerts, and legal resources.",
      tech: ["Flutter", "Dart", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=600&h=400&fit=crop", // Legal / law related
      link: "https://github.com/Abhijith-T-P/Link---The-legal-connection-app",
    },
    {
      title: "PureFlow Water Management System",
      description:
        "Digital platform for water management with automated billing, service requests, admin controls, and user-friendly interfaces.",
      tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcommunity-cdn-digitalocean-com.global.ssl.fastly.net%2FvVjVqmz2i1ZMVP49VpC1fH3z&f=1&nofb=1&ipt=1c77aa59377b5b0bbb7158d8e280b061cdcf16a67452fcf37422af68992bf8ea?w=600&h=400&fit=crop", // Water management related
      link: "#", // add when deployed
    },
    {
      title: "Task Master – Simple Work Allocation Website",
      description:
        "Dynamic algorithm that assigns tasks to team members based on skills, availability, and workload to improve productivity and reduce bottlenecks.",
      tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=600&h=400&fit=crop", // Task management related
      link: "http://articulable-deputie.000webhostapp.com/",
    },
    {
      title: "Forge – Inventory Management App",
      description:
        "A React and Firebase-powered inventory management system with real-time updates and secure cloud storage.",
      tech: ["React", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop", // Inventory / warehouse related
      link: "#", // add when deployed
    },
    {
      title: "Hotel Task Allocation Website",
      description:
        "Custom task allocation platform tailored for hotel operations, optimizing workload distribution among staff.",
      tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop", // Hotel related
      link: "#", // add when deployed
    },
    {
      title: "Vectopix E-Learning Platform",
      description:
        "Comprehensive e-learning platform with user and admin interfaces, built with React and Firebase, offering courses, quizzes, and user management tools.",
      tech: ["React", "Firebase", "React Router", "CSS Modules"],
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fupwork-cloud%2Fimage%2Fupload%2Fc_scale%2Cw_1000%2Fv1694599067%2Fcatalog%2F1701894711810232320%2Fx3ehurgbjlapcdcrx69m.jpg&f=1&nofb=1&ipt=51bb6ac56152efc1e3b6beb45476e970b0f488792df141b1224ff235f5e20e97?w=600&h=400&fit=crop", // E-learning related
      link: "https://vectopix.netlify.app/",
    },
  ];

  return (
    <div className="portfolio">
      {/* Custom cursor */}
      <div
        className={`custom-cursor ${isMobileMenuOpen ? "hidden" : ""}`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-content">
            {/* <div className="logo">
              Portfolio
            </div> */}

            {/* Desktop Navigation */}
            <div className="nav-desktop">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-item ${
                    activeSection === item.id ? "active" : ""
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="nav-underline" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-nav-content">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="mobile-nav-item"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={(el) => (sectionsRef.current["home"] = el)}
        className="hero-section"
      >
        <div className="hero-bg" />
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-line" style={{ animationDelay: "0.2s" }}>
              Creative
            </span>
            <span className="hero-line" style={{ animationDelay: "0.4s" }}>
              Developer
            </span>
          </h1>
          <p className="hero-subtitle" style={{ animationDelay: "0.6s" }}>
            Crafting digital experiences with precision and passion
          </p>
          <button
            onClick={() => scrollToSection("about")}
            className="hero-scroll-btn"
            style={{ animationDelay: "0.8s" }}
          >
            <ChevronDown size={32} className="bounce" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={(el) => (sectionsRef.current["about"] = el)}
        className="about-section"
      >
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <div className="about-paragraphs">
                <p>
                  I’m Abhijith — a curious, hands-on developer who loves turning
                  ideas into things people can actually use. I keep my work
                  simple, clean, and efficient, whether it’s in design or code.
                </p>
                <p>
                  I work with modern web and mobile tools like React, Flutter,
                  Firebase, Node.js, and MongoDB. Over time, I’ve built
                  everything from mobile apps to dashboards, always aiming to
                  make them easy and enjoyable to use.
                </p>
                <p>
                  When I’m not coding, I’m usually learning something new in
                  tech, exploring UI/UX trends, or planning my next side
                  project. I’m all about growing my skills and building things
                  that make a difference.
                </p>
              </div>
            </div>
            <div className="about-image">
              <div className="image-container">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEQIMv_Q4M-uQ/profile-displayphoto-crop_800_800/B56ZiuXQK7HUAQ-/0/1755271988689?e=1758153600&v=beta&t=177XrNCWIjozT8burXeEf3WhETV0JmqNgAOcoDys-yU"
                  alt="Profile_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section 
        ref={el => sectionsRef.current['skills'] = el}
        className="skills-section"
      >
        <div className="skills-container">
          <h2 className="section-title center">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">lvl {skill.level}</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: `${(skill.level/10)*100}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section
        ref={(el) => (sectionsRef.current["projects"] = el)}
        className="projects-section"
      >
        <div className="projects-container">
          <h2 className="section-title center">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.title} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <button className="project-link">
                    View Project <ExternalLink size={14} />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={(el) => (sectionsRef.current["contact"] = el)}
        className="contact-section"
      >
        <div className="contact-container">
          <h2 className="section-title center">Let's Create Together</h2>
          <p className="contact-subtitle">
            Have a project in mind? I'd love to hear about it and explore how we
            can bring your vision to life.
          </p>

          <div className="contact-links">
            <a href="mailto:abhijithtp2003@gmail.com" className="contact-link">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://github.com/Abhijith-T-P" className="contact-link">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abhijith-t-p/"
              className="contact-link"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="footer">
            © 2025 Portfolio. Crafted with precision.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
