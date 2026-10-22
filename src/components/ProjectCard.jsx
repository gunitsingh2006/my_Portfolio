import { ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      className={`project-card glass-card accent-${project.accent}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <div className="project-top">
        <span className="project-number">{project.number}</span>
        <a
          className="project-open"
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} on GitHub`}
        >
          <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="project-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="project-label">{project.label}</p>
      <h2>{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="tag-list">
        {project.stack.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <a
        className="project-repo"
        href={project.href}
        target="_blank"
        rel="noreferrer"
      >
        <Code2 size={15} /> Source code <ArrowUpRight size={14} />
      </a>
    </motion.article>
  );
}
