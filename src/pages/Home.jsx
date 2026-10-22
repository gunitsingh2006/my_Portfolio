import { useLayoutEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { profile, projects, skillGroups } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import Experience from "./Experience.jsx";
import Contact from "./Contact.jsx";
import { scrollToSection } from "../utils/scrollToSection.js";

const skillLogos = {
  Java: ["java", "ED8B00"],
  JavaScript: ["javascript", "F7DF1E"],
  Python: ["python", "3776AB"],
  C: ["c", "A8B9CC"],
  "C++": ["cplusplus", "00599C"],
  TypeScript: ["typescript", "3178C6"],
  HTML: ["html5", "E34F26"],
  CSS: ["css", "663399"],
  React: ["react", "61DAFB"],
  "Tailwind CSS": ["tailwindcss", "06B6D4"],
  "Framer Motion": ["framer", "0055FF"],
  GSAP: ["greensock", "88CE02"],
  Figma: ["figma", "F24E1E"],
  "Node.js": ["nodedotjs", "5FA04E"],
  "Express.js": ["express", "000000"],
  FastAPI: ["fastapi", "009688"],
  "Socket.io": ["socketdotio", "010101"],
  MongoDB: ["mongodb", "47A248"],
  MySQL: ["mysql", "4479A1"],
  Redis: ["redis", "FF4438"],
  "VS Code": ["visualstudiocode", "007ACC"],
  Postman: ["postman", "FF6C37"],
};
const skillLogoUrls = {
  "Cursor AI": "https://www.cursor.com/assets/images/logo.svg",
  Docker: "https://cdn.simpleicons.org/docker/2496ED",
  Claude: "https://cdn.simpleicons.org/claude/D97757",
  ChatGPT:
    "https://unpkg.com/@lobehub/icons-static-svg@1.95.1/icons/openai.svg",
};
const deviconSkills = {
  Java: "java",
  JavaScript: "javascript",
  Python: "python",
  C: "c",
  "C++": "cplusplus",
  TypeScript: "typescript",
  HTML: "html5",
  CSS: "css3",
  React: "react",
  "Tailwind CSS": "tailwindcss",
  Figma: "figma",
  "Node.js": "nodejs",
  "Express.js": "express",
  FastAPI: "fastapi",
  "Socket.io": "socketio",
  MongoDB: "mongodb",
  MySQL: "mysql",
  Redis: "redis",
  "VS Code": "vscode",
  Postman: "postman",
};
const skillMarks = {
  "Data Structures & Algorithms": "DSA",
  OOP: "OOP",
  "Operating Systems": "OS",
  "Computer Networks": "CN",
  DBMS: "DBMS",
  "System design fundamentals": "SD",
  "REST APIs": "API",
  NoSQL: "NoSQL",
  SQL: "SQL",
  "Cursor AI": "C",
};
const skillInitials = (skill) =>
  skillMarks[skill] ||
  (skill === "C++"
    ? "C++"
    : skill
        .replace(/[^A-Za-z0-9]/g, "")
        .slice(0, 2)
        .toUpperCase());

export default function Home() {
  const hero = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(
      () =>
        gsap.fromTo(
          ".hero-reveal",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        ),
      hero,
    );
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="hero page-wrap anchor-section" id="intro" ref={hero}>
        <div className="hero-copy">
          <div className="status-pill hero-reveal">
            <span className="status-dot" /> Open to internships & opportunities
          </div>
          <p className="eyebrow hero-reveal">COMPUTER SCIENCE · GTBIT · IPU</p>
          <h1 className="hero-title hero-name hero-reveal">
            Gunit Singh
            <br />
            <em>Duggal.</em>
          </h1>
          <p className="hero-tagline hero-reveal">
            Building useful things with code.
          </p>
          <p className="hero-intro hero-reveal">
            I’m a third-year CSE student and full-stack developer. I enjoy
            turning ideas into thoughtful products — from responsive interfaces
            to the systems behind them.
          </p>
          <div className="hero-actions hero-reveal">
            <a
              className="button button-primary"
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("projects");
              }}
            >
              Explore projects <ArrowRight size={16} />
            </a>
            <a className="text-link" href={`mailto:${profile.email}`}>
              Let’s talk <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="hero-education hero-reveal">
            <span className="education-mark">B.Tech</span>
            <span>
              <strong>Computer Science & Engineering</strong>
              <small>
                GTBIT · Guru Gobind Singh Indraprastha University · 2024–2028
              </small>
            </span>
          </div>
          <div className="hero-location hero-reveal">
            <span className="location-mark">↗</span> Gurugram, India
          </div>
        </div>
        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div className="art-glow" />
          <div className="art-card art-card-back">
            <span className="art-index">01 / 03</span>
            <span className="art-code">
              const idea = <b>build</b>()
              <br />
              while (curious) {"{"}
              <br />
              &nbsp;&nbsp;learn();
              <br />
              &nbsp;&nbsp;ship();
              <br />
              {"}"}
            </span>
            <span className="art-foot">
              KEEP MAKING
              <br />
              GOOD THINGS
            </span>
          </div>
          <div className="art-card art-card-front hero-photo-card">
            <img
              className="hero-photo"
              src="/gunit-profile.png"
              alt="Gunit Singh Duggal"
            />
            <div className="hero-photo-shade" />
            <div className="art-caption">
              <span>GSD</span>
              <span>FULL-STACK DEVELOPER</span>
            </div>
          </div>
        </motion.div>
        <a
          className="scroll-hint"
          href="#profile-story"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("profile-story");
          }}
        >
          <ArrowDownRight size={16} /> Scroll to explore
        </a>
      </section>

      <section
        className="profile-story page-wrap"
        id="profile-story"
        aria-labelledby="profile-story-title"
      >
        <div className="profile-story-copy">
          <span className="eyebrow">A LITTLE MORE ABOUT ME</span>
          <h2 id="profile-story-title">
            Curious about how the whole system fits together.
          </h2>
          <p>
            I’m Gunit Singh Duggal, a third-year B.Tech Computer Science and
            Engineering student at Guru Tegh Bahadur Institute of Technology
            (GTBIT), affiliated with Guru Gobind Singh Indraprastha University
            (IPU). I build full-stack web applications, bringing together
            responsive React interfaces and backend services, APIs, databases,
            and real-time features.
          </p>
          <p>
            I’m strengthening my problem-solving skills through data structures
            and algorithms in Java, while building a solid base in
            object-oriented programming, operating systems, computer networks,
            backend architecture, and system design. I’m also exploring
            practical development tools and deployment workflows, including
            Docker.
          </p>
          <p>
            Outside my projects, I serve as President of GENIX at GTBIT and
            contribute to the Google Developer Group GTBIT Web Development Team.
            I enjoy learning with the wider tech community and have attended 10+
            workshops, technical discussions, and speaker sessions.
          </p>
        </div>
        <aside className="resume-panel glass-card">
          <span className="resume-panel-icon">
            <FileText size={22} />
          </span>
          <span className="eyebrow">RESUME</span>
          <h3>My experience, in one place.</h3>
          <p>Education, skills, projects, and experience—ready to review.</p>
          <a
            className="button button-primary resume-panel-button"
            href="/Gunit-Singh-Duggal-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View my resume <ArrowUpRight size={16} />
          </a>
        </aside>
      </section>

      <section className="snapshot-strip page-wrap">
        <div>
          <span className="eyebrow">THE SHORT VERSION</span>
          <h2>
            Curious by nature.
            <br />
            Builder by practice.
          </h2>
        </div>
        <div className="snapshot-copy">
          <p>
            Strong foundations in DSA and Java, with hands-on full-stack work
            across React, Node.js, APIs, and databases. Currently strengthening
            backend and system design fundamentals.
          </p>
          <a
            href="#skills"
            className="arrow-link"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("skills");
            }}
          >
            A closer look at my skills <ArrowRight size={15} />
          </a>
        </div>
        <div className="snapshot-stat">
          <strong>8.80</strong>
          <span>GPA / 10</span>
          <small>GTBIT · IPU</small>
        </div>
      </section>

      <section className="page-wrap onepage-section anchor-section" id="skills">
        <div className="section-row">
          <div>
            <span className="eyebrow">MY TOOLKIT</span>
            <h2 className="section-title">A skill set in motion.</h2>
            <p className="section-subtitle">
              Tap into the things I use, study, and keep getting better at.
            </p>
          </div>
        </div>
        <div className="skill-cloud-grid">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              className="skill-cloud glass-card"
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: groupIndex * 0.05 }}
            >
              <div className="skill-cloud-heading">
                <span className="skill-cloud-index">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.note}</p>
                </div>
              </div>
              <div className="floating-bubbles">
                {group.skills.map((skill, bubbleIndex) => {
                  const logo = skillLogos[skill];
                  const devicon = deviconSkills[skill];
                  const logoUrl =
                    skillLogoUrls[skill] ||
                    (devicon
                      ? `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${devicon}/${devicon}-original.svg`
                      : logo
                        ? `https://cdn.simpleicons.org/${logo[0]}/${logo[1]}`
                        : null);
                  return (
                    <div
                      key={skill}
                      className="skill-bubble-item"
                      style={{
                        "--float-delay": `${((groupIndex + bubbleIndex) % 7) * -0.42}s`,
                        "--float-duration": `${4.5 + (bubbleIndex % 4) * 0.45}s`,
                      }}
                    >
                      <span
                        className={`skill-orb ${bubbleIndex % 3 === 0 ? "bubble-accent" : ""}`}
                      >
                        <span className="skill-orb-fallback">
                          {skillInitials(skill)}
                        </span>
                        {logoUrl && (
                          <img
                            src={logoUrl}
                            alt=""
                            loading="lazy"
                            onError={(event) => {
                              event.currentTarget.style.display = "none";
                            }}
                          />
                        )}
                      </span>
                      <span className="skill-bubble-name">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
        <div className="learning-note">
          <div>
            <span className="eyebrow">ALWAYS IN PROGRESS</span>
            <h3>Learning is part of the stack.</h3>
            <p>
              Backend fundamentals, system design, and modern development
              workflows — one project at a time.
            </p>
          </div>
        </div>
      </section>

      <section
        className="activity-section page-wrap anchor-section"
        id="activity"
      >
        <div className="section-row">
          <div>
            <span className="eyebrow">SHOWING UP & SOLVING</span>
            <h2 className="section-title">Progress, over time.</h2>
          </div>
        </div>
        <motion.div
          className="activity-card glass-card github-activity"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className="activity-head">
            <div>
              <span className="eyebrow">GITHUB CONTRIBUTIONS</span>
              <h3>Code, commit, repeat.</h3>
            </div>
            <a
              className="icon-round small-round"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub"
            >
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="chart-frame github-chart">
            <img
              src="https://ghchart.rshah.org/42b983/gunitsingh2006"
              alt="GitHub contribution graph for Gunit Singh Duggal"
              loading="lazy"
            />
            <span>Contribution history · live chart</span>
          </div>
          <a
            className="activity-foot"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            See my GitHub profile <ArrowUpRight size={14} />
          </a>
        </motion.div>
        <motion.div
          className="codolio-board glass-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <div className="codolio-board-head">
            <div>
              <span className="eyebrow">CODOLIO · CODING PORTFOLIO</span>
              <h3>My complete problem-solving profile.</h3>
              <p>
                Submissions, progress, streaks, and platform breakdown in one
                live dashboard.
              </p>
            </div>
            <a
              className="button button-primary"
              href={profile.codolio}
              target="_blank"
              rel="noreferrer"
            >
              Open Codolio <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="codolio-embed">
            <iframe
              title="Gunit Singh Duggal complete Codolio coding portfolio and submissions board"
              src={profile.codolio}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <a
            className="activity-foot"
            href={profile.codolio}
            target="_blank"
            rel="noreferrer"
          >
            View the full dashboard on Codolio <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </section>

      <section
        className="page-wrap onepage-section anchor-section"
        id="projects"
      >
        <div className="section-row">
          <div>
            <span className="eyebrow">SELECTED WORK · 2025—26</span>
            <h2 className="section-title">Four projects, picked with care.</h2>
            <p className="section-subtitle">
              A quick look at the projects I’ve enjoyed building most.
            </p>
          </div>
          <a
            className="arrow-link"
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub <ArrowRight size={15} />
          </a>
        </div>
        <div className="project-grid home-grid">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="onepage-section anchor-section" id="experience">
        <Experience />
      </section>
      <section className="onepage-section anchor-section" id="contact">
        <Contact />
      </section>
    </>
  );
}
