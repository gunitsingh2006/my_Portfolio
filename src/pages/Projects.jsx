import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects, profile } from '../data/portfolio'

export default function Projects() {
  return <div className="page-wrap inner-page"><SectionHeading eyebrow="SELECTED WORK · 2025—26" title={<>Small teams, big ideas,<br />working software.</>} text="A selection of projects from my GitHub — spanning full-stack products, real-time collaboration, and community tools. Every card links directly to its source." />
    <div className="project-grid all-projects">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div>
    <a className="github-banner glass-card" href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer"><div><span className="eyebrow">MORE IN THE WORKSHOP</span><h2>Browse all 23 public repositories.</h2><p>Follow along as I keep learning, experimenting, and shipping.</p></div><span className="icon-round"><ArrowUpRight size={19} /></span></a>
  </div>
}
