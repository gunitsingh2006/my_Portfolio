import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/portfolio";
import HomePage from "../pages/Home.jsx";
import { scrollToSection } from "../utils/scrollToSection.js";

const links = [
  ["#intro", "Home"],
  ["#skills", "Skills"],
  ["#projects", "Projects"],
  ["#experience", "Experience"],
  ["#contact", "Contact"],
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="site-shell min-h-screen">
      <header className="topbar">
        <a
          href="#intro"
          className="brand"
          onClick={(event) => {
            event.preventDefault();
            setOpen(false);
            scrollToSection("intro");
          }}
        >
          <span className="brand-mark">g.</span>
          <span>Gunit Singh Duggal</span>
        </a>
        <button
          className="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav
          className={`nav-links ${open ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map(([to, label]) => (
            <a
              key={to}
              href={to}
              onClick={(event) => {
                event.preventDefault();
                setOpen(false);
                scrollToSection(to.slice(1));
              }}
            >
              {label}
            </a>
          ))}
          <a
            className="resume-link"
            href="/Gunit-Singh-Duggal-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume <Download size={14} />
          </a>
        </nav>
      </header>
      <main className="w-full">
        <HomePage />
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Gunit Singh Duggal</span>
        <span>
          Made with curiosity <span className="footer-dot">●</span> Gurugram,
          India
        </span>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={13} />
        </a>
      </footer>
    </div>
  );
}
