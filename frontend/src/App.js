import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Code2, Cpu, Download, Instagram, Linkedin, Mail, Menu, MonitorPlay, MoveDown, Send, Sparkles, X } from "lucide-react";
import "@/App.css";

const ARTWORK = "https://customer-assets-cm19k8pv.emergentagent.net/job_02eeb65e-a3e5-4abb-86d7-8438d30e77a4/artifacts/15r3n97h_ChatGPT%20Image%20Sep%2027%2C%202026%2C%2007_58_14%20PM.png";
const PORTRAIT = "https://customer-assets-cm19k8pv.emergentagent.net/job_02eeb65e-a3e5-4abb-86d7-8438d30e77a4/artifacts/1wtz2jan_PRAJ3161.webp";

const navItems = ["About", "Skills", "Projects", "Education", "Certifications", "Services", "Contact"];
const skillGroups = [
  { number: "01", title: "Programming", icon: Code2, items: ["Python", "JavaScript", "HTML & CSS", "Git / GitHub"] },
  { number: "02", title: "AI & Machine Learning", icon: Cpu, items: ["Machine learning concepts", "Data exploration", "Model experimentation", "Curious by default"] },
  { number: "03", title: "Web Development", icon: MonitorPlay, items: ["Responsive interfaces", "React foundations", "API-driven ideas", "Accessible UI"] },
  { number: "04", title: "Creative Practice", icon: Sparkles, items: ["Video editing", "Visual storytelling", "Motion & pacing", "PC gaming"] },
];
const services = [
  { label: "01", title: "Website Development", text: "Thoughtful, responsive web experiences for personal brands, ideas, and early-stage work." },
  { label: "02", title: "AI / ML Projects", text: "Exploring practical machine learning concepts through experiments, prototypes, and learning-led builds." },
  { label: "03", title: "Video Editing", text: "Creative edits with attention to rhythm, visual identity, and the small details that make a story land." },
  { label: "04", title: "Digital Presence", text: "Personal websites and portfolio systems that make it easier to introduce your work with clarity." },
];

function SectionHeader({ eyebrow, title, intro, light = false }) {
  return <div className={`section-header reveal ${light ? "light" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  const goTo = (id) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submitForm = (event) => { event.preventDefault(); setFormState("success"); setForm({ name: "", email: "", subject: "", message: "" }); };

  return <div className="site-shell">
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`} data-testid="site-navbar">
      <button className="brand" onClick={() => goTo("hero")} data-testid="brand-home-button"><span>I</span>shan H D</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
        {navItems.map((item, index) => <button key={item} className="nav-link" onClick={() => goTo(item)} data-testid={`nav-${item.toLowerCase()}-link`}><small>0{index + 1}</small>{item}</button>)}
        <button className="nav-resume" onClick={() => goTo("contact")} data-testid="nav-contact-cta">Let’s talk <ArrowUpRight size={15} /></button>
      </nav>
      <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)} data-testid="mobile-menu-toggle">{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section className="hero" id="hero" data-testid="hero-section">
        <div className="hero-art" style={{ backgroundImage: `url("${ARTWORK}")` }} role="img" aria-label="Ishan's black and gold creative editing artwork" />
        <div className="hero-shade" />
        <div className="hero-content page-width">
          <div className="hero-copy reveal visible"><div className="eyebrow accent-eyebrow"><span className="eyebrow-dot" /> Welcome to my portfolio</div><h1>Ishan<br /><em>H D</em></h1><p className="hero-subtitle">BCA AI & ML at Vivekananda College, Puttur</p><p className="hero-interests">Video Editor <i>·</i> Web Developer <i>·</i> PC Gamer</p><div className="hero-actions"><button className="button button-orange" onClick={() => goTo("projects")} data-testid="hero-view-work-button">View my work <ArrowUpRight size={17} /></button><button className="text-button" onClick={() => goTo("contact")} data-testid="hero-contact-button">Contact me <span>↗</span></button></div></div>
          <div className="hero-note"><span>01 — 07</span><span>Scroll to explore <MoveDown size={14} /></span></div>
        </div>
      </section>

      <section className="about section-light" id="about" data-testid="about-section"><div className="page-width about-grid"><div className="about-visual reveal"><div className="image-frame"><img src={PORTRAIT} alt="Portrait of Ishan H D" data-testid="about-portrait-image" /><span className="image-caption">Puttur · Karnataka<br /><b>01 / 2026</b></span></div><div className="vertical-note">CURIOUS BY DEFAULT</div></div><div className="about-copy"><SectionHeader eyebrow="A little about me" title={<>Building with a <span>creative</span> mind.</>} intro="I’m Ishan — an AI & ML student, web developer, and video editor learning by making." /><p className="body-copy reveal">I enjoy the space where technology meets visual storytelling. From exploring how intelligent systems work to shaping a clean digital experience or editing a moment until it feels right, I’m drawn to work that is both useful and human.</p><p className="body-copy reveal">Currently pursuing my BCA in Artificial Intelligence and Machine Learning at Vivekananda College, Puttur, I’m open to internships, collaborations, and thoughtful freelance opportunities.</p><div className="about-meta reveal"><div><strong>Based in</strong><span>Kukke Subrahmanya, India</span></div><div><strong>Open to</strong><span>Internships · Collaborations</span></div></div></div></div></section>

      <section className="skills section-cream" id="skills" data-testid="skills-section"><div className="page-width"><SectionHeader eyebrow="What I’m learning" title={<>Skills with room<br /><span>to grow.</span></>} intro="A living toolkit shaped by curiosity, practice, and the next thing I want to understand." light /><div className="skills-grid">{skillGroups.map(({ number, title, icon: Icon, items }, index) => <article className="skill-card reveal" style={{ "--delay": `${index * 80}ms` }} key={title} data-testid={`skill-category-${number}`}><div className="card-top"><span>{number}</span><Icon size={21} strokeWidth={1.5} /></div><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul><div className="card-arrow">↗</div></article>)}</div></div></section>

      <section className="projects section-dark" id="projects" data-testid="projects-section"><div className="page-width"><div className="projects-heading reveal"><SectionHeader eyebrow="Selected work" title={<>The best is<br /><span>in progress.</span></>} intro="No made-up case studies here. Just real curiosity, currently becoming real work." light /><span className="project-count">00 / 00<br /><small>Published projects</small></span></div><div className="project-empty reveal"><span className="empty-index">PROJECTS / 001</span><div><h3>Projects are<br /><em>in progress.</em></h3><p>I’m currently building, experimenting, and learning. New work will be showcased here soon — in the meantime, let’s talk about what we could make together.</p><button className="button button-outline" onClick={() => goTo("contact")} data-testid="projects-contact-button">Get in touch <ArrowUpRight size={16} /></button></div><span className="empty-mark">✳</span></div></div></section>

      <section className="education section-light" id="education" data-testid="education-section"><div className="page-width"><SectionHeader eyebrow="The foundation" title={<>Currently<br /><span>learning.</span></>} intro="A timeline of the places shaping how I think, build, and keep going." /><div className="timeline"><article className="timeline-item reveal"><div className="timeline-marker">01</div><div className="timeline-date">2023 — Present</div><div className="timeline-card"><span className="card-kicker">Undergraduate degree</span><h3>BCA Artificial Intelligence & Machine Learning</h3><p>Vivekananda College, Puttur</p><span className="timeline-location">Puttur, Karnataka · India</span></div></article><article className="timeline-item timeline-muted reveal"><div className="timeline-marker">02</div><div className="timeline-date">Next chapter</div><div className="timeline-card"><span className="card-kicker">Coming into focus</span><h3>Internships & real-world projects</h3><p>A place to add the next milestone, experience, or meaningful collaboration.</p></div></article></div></div></section>

      <section className="certifications section-cream" id="certifications" data-testid="certifications-section"><div className="page-width"><SectionHeader eyebrow="Milestones" title={<>More to<br /><span>come.</span></>} intro="A dedicated space for certifications, achievements, and the proof points I’ll earn along the way." light /><div className="cert-grid"><article className="cert-card reveal"><span className="cert-icon">✦</span><div><span className="card-kicker">Placeholder · 01</span><h3>Certification title</h3><p>Issuing organization and a short note about what this milestone represents.</p></div><span className="cert-plus">+</span></article><article className="cert-card reveal"><span className="cert-icon">✦</span><div><span className="card-kicker">Placeholder · 02</span><h3>Achievement title</h3><p>A clear, editable home for future wins and credentials.</p></div><span className="cert-plus">+</span></article></div></div></section>

      <section className="services section-dark" id="services" data-testid="services-section"><div className="page-width"><SectionHeader eyebrow="Ways I can help" title={<>Ideas into<br /><span>something real.</span></>} intro="Early-stage, honest, and collaborative — a few ways my current skills can create value." light /><div className="services-list">{services.map((service, index) => <article className="service-row reveal" key={service.label} data-testid={`service-card-${index + 1}`}><span className="service-number">{service.label}</span><h3>{service.title}</h3><p>{service.text}</p><ArrowUpRight className="service-arrow" size={22} /></article>)}</div></div></section>

      <section className="contact section-orange" id="contact" data-testid="contact-section"><div className="page-width contact-grid"><div className="contact-copy reveal"><span className="eyebrow dark-eyebrow">Let’s make a start</span><h2>Have an idea?<br /><em>Let’s talk.</em></h2><p>Whether you’re looking for a curious intern, a creative collaborator, or help shaping a digital idea, I’d love to hear from you.</p><div className="contact-details"><a href="mailto:h.d.ishan.2008@gmail.com" data-testid="contact-email-link"><Mail size={16} /> h.d.ishan.2008@gmail.com</a><span><span className="detail-dot" /> Kukke Subrahmanya, Karnataka</span></div><div className="social-row"><a href="https://github.com/Ishan-H-D" target="_blank" rel="noreferrer" data-testid="github-social-link">GitHub ↗</a><a href="https://linkedin.com/in/ishan-h-d" target="_blank" rel="noreferrer" data-testid="linkedin-social-link">LinkedIn ↗</a><a href="https://instagram.com/_the_burning_beast_18_" target="_blank" rel="noreferrer" data-testid="instagram-social-link">Instagram ↗</a></div></div><form className="contact-form reveal" onSubmit={submitForm} data-testid="contact-form"><div className="form-row"><label>Your name<input required name="name" value={form.name} onChange={updateField} placeholder="Ishan / Your name" data-testid="contact-name-input" /></label><label>Email address<input required type="email" name="email" value={form.email} onChange={updateField} placeholder="you@example.com" data-testid="contact-email-input" /></label></div><label>Subject / purpose<input required name="subject" value={form.subject} onChange={updateField} placeholder="Internship, project, hello..." data-testid="contact-subject-input" /></label><label>Your message<textarea required name="message" value={form.message} onChange={updateField} rows="5" placeholder="Tell me a little about it..." data-testid="contact-message-input" /></label>{formState === "success" && <div className="form-success" role="status" data-testid="contact-success-message">Message ready — thanks for reaching out. I’ll be in touch soon.</div>}<button className="button button-dark" type="submit" data-testid="contact-submit-button">Send message <Send size={16} /></button></form></div></section>
    </main>

    <footer className="footer"><div className="page-width footer-inner"><div><button className="footer-brand" onClick={() => goTo("hero")} data-testid="footer-home-button">Ishan <span>H D</span></button><p>Build with curiosity. Create with intent.</p></div><div className="footer-links">{navItems.slice(0, 4).map((item) => <button key={item} onClick={() => goTo(item)} data-testid={`footer-${item.toLowerCase()}-link`}>{item}</button>)}</div><div className="footer-bottom"><span>© 2026 Ishan H D</span><span>Made in Puttur <span className="orange-dot" /> with intention</span></div></div></footer>
  </div>;
}

export default App;
