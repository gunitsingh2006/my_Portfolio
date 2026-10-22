import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers3, Terminal } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { skillGroups } from "../data/portfolio";

const icons = [Code2, Layers3, Terminal, Layers3, Terminal, Code2];
export default function Skills() {
  return (
    <div className="page-wrap inner-page">
      <SectionHeading
        eyebrow="TOOLKIT"
        title={
          <>
            Skills I’m building
            <br />
            and putting to work.
          </>
        }
        text="A practical mix of computer science fundamentals, full-stack development, and the tools I use to turn ideas into working software."
      />
      <div className="skills-grid">
        {skillGroups.map((group, i) => {
          const Icon = icons[i];
          return (
            <motion.section
              key={group.title}
              className="skill-card glass-card"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="skill-card-head">
                <div className="skill-icon">
                  <Icon size={18} />
                </div>
                <span className="skill-count">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2>{group.title}</h2>
              <p>{group.note}</p>
              <div className="skill-bubbles">
                {group.skills.map((skill, j) => (
                  <span
                    className={
                      j === 0 ? "skill-bubble featured-bubble" : "skill-bubble"
                    }
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
      <div className="learning-note">
        <div>
          <span className="eyebrow">ALWAYS IN PROGRESS</span>
          <h2>Learning is part of the stack.</h2>
          <p>
            Currently strengthening backend fundamentals, system design, and
            practical workflows with Docker, VS Code, Cursor AI, and Postman.
          </p>
        </div>
        <a
          href="https://github.com/gunitsingh2006"
          target="_blank"
          rel="noreferrer"
          className="icon-round"
          aria-label="Open GitHub"
        >
          <ArrowUpRight size={19} />
        </a>
      </div>
    </div>
  );
}
