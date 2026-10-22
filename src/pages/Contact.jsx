import { useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Copy,
  Code2,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { profile } from "../data/portfolio";

function PhoneReveal() {
  const [show, setShow] = useState(false);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [answer, setAnswer] = useState("");
  const [verified, setVerified] = useState(false);
  const challenge = () => {
    setA(Math.floor(Math.random() * 5) + 2);
    setB(Math.floor(Math.random() * 5) + 1);
    setAnswer("");
    setVerified(false);
    setShow(true);
  };
  const check = (e) => {
    e.preventDefault();
    if (Number(answer) === a + b) setVerified(true);
  };
  return (
    <div className="contact-card glass-card">
      <div className="contact-icon">
        <ShieldCheck size={18} />
      </div>
      <span className="eyebrow">PHONE</span>
      <h2>{verified ? profile.phone : "Hidden for a little privacy"}</h2>
      {verified ? (
        <p>Thanks for taking a moment to verify.</p>
      ) : (
        <>
          <p>Quick check before I reveal my number.</p>
          {!show ? (
            <button className="button button-secondary" onClick={challenge}>
              Reveal with a quick check
            </button>
          ) : (
            <form className="challenge-form" onSubmit={check}>
              <label htmlFor="challenge">
                What is {a} + {b}?
              </label>
              <div>
                <input
                  id="challenge"
                  inputMode="numeric"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  aria-label="Answer to addition check"
                />
                <button className="button button-primary" type="submit">
                  Verify
                </button>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      if (!navigator.clipboard?.writeText) return;
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="page-wrap onepage-content contact-page">
      <div className="section-row">
        <div>
          <span className="eyebrow">CONTACT</span>
          <h2 className="section-title">
            Have something good in mind? Let’s talk.
          </h2>
          <p className="section-subtitle">
            Open to internships, collaborative projects, and conversations about
            building useful things.
          </p>
        </div>
      </div>
      <div className="contact-grid">
        <div className="contact-intro">
          <span className="availability">
            <span className="status-dot" /> Open to opportunities
          </span>
          <h2>
            Make the first
            <br />
            move.{" "}
            <em>
              I’ll take it
              <br />
              from there.
            </em>
          </h2>
          <p>
            I’m always glad to meet people who care about thoughtful software
            and learning by doing.
          </p>
          <div className="contact-location">
            <MapPin size={15} /> Gurugram, India
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-card glass-card">
            <div className="contact-icon">
              <Mail size={18} />
            </div>
            <span className="eyebrow">EMAIL</span>
            <h2>{profile.email}</h2>
            <p>Usually the quickest way to reach me.</p>
            <div className="contact-buttons">
              <a
                className="button button-primary"
                href={`mailto:${profile.email}`}
              >
                Send an email <ArrowUpRight size={15} />
              </a>
              <button
                className="copy-button"
                onClick={copyEmail}
                aria-label="Copy email"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
          <PhoneReveal />
        </div>
      </div>
      <div className="social-discovery">
        <div className="social-discovery-heading">
          <span className="eyebrow">FIND ME ON THE WEB</span>
          <h3>Let’s stay connected.</h3>
          <p>Follow my work, projects, and what I’m learning.</p>
        </div>
        <div className="social-links">
          <a
            className="social-link-card"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-link-icon">
              <Code2 size={22} />
            </span>
            <span>
              <strong>GitHub</strong>
              <small>Projects & contributions</small>
            </span>
            <ArrowUpRight size={19} />
          </a>
          <a
            className="social-link-card"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-link-icon social-linkedin-mark">in</span>
            <span>
              <strong>LinkedIn</strong>
              <small>Connect professionally</small>
            </span>
            <ArrowUpRight size={19} />
          </a>
          <a
            className="social-link-card"
            href={profile.codolio}
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-link-icon">
              <BarChart3 size={22} />
            </span>
            <span>
              <strong>Codolio</strong>
              <small>Coding profile & activity</small>
            </span>
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </div>
  );
}
