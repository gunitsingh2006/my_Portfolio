import { ArrowUpRight, CalendarDays, UsersRound } from "lucide-react";
import { motion } from "framer-motion";
import { experience, profile } from "../data/portfolio";

export default function Experience() {
  return (
    <div className="page-wrap onepage-content">
      <div className="section-row">
        <div>
          <span className="eyebrow">EXPERIENCE & COMMUNITY</span>
          <h2 className="section-title">
            Growing through people
            <br />
            and practical work.
          </h2>
          <p className="section-subtitle">
            I care about building with others just as much as building with
            code. Here’s where I’ve contributed so far.
          </p>
        </div>
      </div>
      <div className="timeline">
        {experience.map((item, i) => (
          <motion.article
            key={item.title}
            className={`timeline-item ${item.upcoming ? "timeline-upcoming" : ""}`}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12 }}
          >
            <div className="timeline-rail">
              <span className="timeline-dot" />
              <span className="timeline-line" />
            </div>
            <div className="timeline-content glass-card">
              <div className="timeline-top">
                <span className="eyebrow">{item.org}</span>
                <span className="date-pill">
                  <CalendarDays size={13} />
                  {item.date}
                </span>
              </div>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              {item.upcoming && (
                <span className="timeline-ready">
                  <span className="status-dot" /> Ready to grow
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
      <div className="community-card">
        <div className="community-icon">
          <UsersRound size={23} />
        </div>
        <div>
          <span className="eyebrow">BEYOND THE CODE</span>
          <h2>Showing up for the tech community.</h2>
          <p>
            Event organizer with GENIX; technical volunteer with GDG New Delhi
            and GDG GTBIT; event organizer for the International Year of Quantum
            Science & Technology (AFSCAP, IAPS Delhi). Attended 10+ workshops,
            technical discussions, and speaker sessions.
          </p>
        </div>
        <a
          href={profile.linkedin}
          className="icon-round"
          target="_blank"
          rel="noreferrer"
          aria-label="View LinkedIn"
        >
          <ArrowUpRight size={19} />
        </a>
      </div>
      <div className="education-row">
        <span className="eyebrow">EDUCATION</span>
        <div>
          <h2>Guru Tegh Bahadur Institute of Technology</h2>
          <p>B.Tech · Computer Science & Engineering · 2024—2028</p>
        </div>
        <strong>
          8.80 <small>/ 10 GPA</small>
        </strong>
      </div>
    </div>
  );
}
