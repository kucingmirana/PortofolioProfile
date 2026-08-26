"use client";

import { useEffect, useState } from "react";
import { translations } from "./translations";

export default function Home() {
  const [lang, setLang] = useState("id");
  const t = translations[lang];

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "id") setLang(saved);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleLang = () => {
    const next = lang === "id" ? "en" : "id";
    setLang(next);
    localStorage.setItem("lang", next);
    document.documentElement.lang = next;
  };

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <div className="nav-brand">
            Alexandro<span>.dev</span>
          </div>
          <div className="nav-right">
            <div className="nav-links">
              <a href="#portfolio">{t.nav.portfolio}</a>
              <a href="#education">{t.nav.education}</a>
              <a href="#about">{t.nav.about}</a>
              <a href="#skills">{t.nav.skills}</a>
            </div>
            <button
              className="lang-toggle"
              onClick={toggleLang}
              aria-label="Switch language"
            >
              <span className={lang === "id" ? "active" : ""}>ID</span>
              <span className="divider">|</span>
              <span className={lang === "en" ? "active" : ""}>EN</span>
            </button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h1>
            Alexandro Ricardo <span>Wullur</span>
          </h1>
          <div className="role">{t.hero.role}</div>
          <div className="contact">
            <span>📍 {t.hero.location}</span>
            <span>📞 +62 81219457622</span>
            <span>✉️ alexandrowullur@gmail.com</span>
          </div>
        </div>
      </header>

      <main>
        <section id="portfolio">
          <div className="container reveal">
            <h2 className="section-title">{t.portfolio.title}</h2>
            <p className="section-sub">{t.portfolio.sub}</p>
            <div className="cards">
              <article className="card card-featured">
                <div className="card-thumb">🧡</div>
                <div className="card-body">
                  <span className="card-badge">{t.portfolio.badge}</span>
                  <h3>{t.portfolio.nearkin.title}</h3>
                  <p>{t.portfolio.nearkin.desc}</p>
                  <div className="tags">
                    <span className="tag">Mobile App</span>
                    <span className="tag">Face Recognition</span>
                    <span className="tag">Google Drive Sync</span>
                  </div>
                </div>
              </article>

              <article className="card">
                <div className="card-thumb">🏠</div>
                <div className="card-body">
                  <h3>{t.portfolio.smartHouse.title}</h3>
                  <p>{t.portfolio.smartHouse.desc}</p>
                  <div className="tags">
                    <span className="tag">IoT</span>
                    <span className="tag">Expo 2018</span>
                  </div>
                </div>
              </article>

              <article className="card">
                <div className="card-thumb">📚</div>
                <div className="card-body">
                  <h3>{t.portfolio.repo.title}</h3>
                  <p>{t.portfolio.repo.desc}</p>
                  <div className="tags">
                    <span className="tag">DSpace</span>
                    <span className="tag">Open Source</span>
                  </div>
                </div>
              </article>

              <article className="card">
                <div className="card-thumb">💼</div>
                <div className="card-body">
                  <h3>{t.portfolio.enterprise.title}</h3>
                  <p>{t.portfolio.enterprise.desc}</p>
                  <div className="tags">
                    <span className="tag">ASP.NET MVC</span>
                    <span className="tag">C#</span>
                    <span className="tag">SQL Server</span>
                    <span className="tag">REST API</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="container reveal">
            <h2 className="section-title">{t.education.title}</h2>
            <p className="section-sub">{t.education.sub}</p>
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <div>
                <h3>Institut Teknologi Indonesia</h3>
                <div className="edu-meta">2016 – 2020</div>
                <p>{t.education.degree}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container reveal">
            <h2 className="section-title">{t.about.title}</h2>
            <p className="about-text">{t.about.text}</p>
          </div>
        </section>

        <section id="skills">
          <div className="container reveal">
            <h2 className="section-title">{t.skills.title}</h2>
            <p className="section-sub">{t.skills.sub}</p>
            <div className="skills-grid">
              <div className="skill-group">
                <h3>{t.skills.programming}</h3>
                <ul className="skill-list">
                  <li>ASP.NET MVC (.NET Framework)</li>
                  <li>C#</li>
                  <li>SQL Server (Entity Framework)</li>
                  <li>HTML, CSS (Bootstrap Framework)</li>
                  <li>JavaScript (jQuery Framework)</li>
                </ul>
              </div>
              <div className="skill-group">
                <h3>{t.skills.other}</h3>
                <ul className="skill-list">
                  <li>Manual Testing</li>
                  <li>Scrum &amp; Agile Development</li>
                </ul>
              </div>
              <div className="skill-group">
                <h3>{t.skills.certs}</h3>
                <ul className="skill-list">
                  <li><a href="https://www.dicoding.com/certificates/72ZDME69JZYW" target="_blank" rel="noopener noreferrer">Belajar Fundamental Aplikasi Android</a></li>
                  <li><a href="https://www.dicoding.com/certificates/72ZDME69JZYW" target="_blank" rel="noopener noreferrer">Belajar Fundamental Aplikasi Web dengan React</a></li>
                  <li><a href="https://www.freecodecamp.org/certification/fcc60e124c3-a8d8-4056-82a0-b73dac69b53e/responsive-web-design" target="_blank" rel="noopener noreferrer">Responsive Web Design</a></li>
                  <li><a href="https://www.freecodecamp.org/certification/fcc60e124c3-a8d8-4056-82a0-b73dac69b53e/javascript-algorithms-and-data-structures-v8" target="_blank" rel="noopener noreferrer">JavaScript Algorithms and Data Structures</a></li>
                  <li><a href="https://www.freecodecamp.org/certification/fcc60e124c3-a8d8-4056-82a0-b73dac69b53e/foundational-c-sharp-with-microsoft" target="_blank" rel="noopener noreferrer">Foundational C# with Microsoft Certification</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          © {new Date().getFullYear()} Alexandro Ricardo Wullur — {t.footer}
        </div>
      </footer>
    </>
  );
}
