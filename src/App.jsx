import { useState, useEffect } from "react";
import "./App.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import developerImg from "./assets/developer.png";

function App() {
  /* ===========================
          THEME
  ============================ */

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="app">

      {/*==========================
              NAVBAR
      ===========================*/}

      <nav className="navbar">

        <div className="logo">
          <span>&lt;</span>Srikanth<span>/&gt;</span>
        </div>

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

        <div className="nav-actions">

          <button
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {theme === "dark"
              ? <FaSun />
              : <FaMoon />}
          </button>

    

        </div>

      </nav>

      {/*==========================
              HERO
      ===========================*/}

      <section
        className="hero"
        id="home"
      >

        {/* LEFT */}

        <div className="hero-left">

          <p className="hello">
            👋 Hello, I'm
          </p>

          <h1>
            Bandaru <span>Srikanth</span>
          </h1>

          <h2>
            Full Stack Software Engineer
          </h2>

          <p className="description">
            I build scalable, secure and
            high-performance web applications
            using React, Java, Spring Boot,
            Microservices, AWS, Docker and
            Kubernetes.

            <br />
            <br />

            Passionate about solving complex
            engineering problems, designing clean
            architectures and delivering
            production-ready software that creates
            real business value.
          </p>

          <div className="buttons">

            <a
              href="/resume.pdf"
              className="primary-btn"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Hire Me
              <FaArrowRight />
            </a>

          </div>

          <div className="socials">

            <a
              href="https://www.linkedin.com/in/bandaru-srikanth-69aa61212/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/srikanthbandaru79"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a href="mailto:srikanthbandaru79@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <div className="image-bg"></div>
        
          <img
            src={developerImg}
            alt="Developer Workstation"
          />
        

        </div>

      </section>

            {/*==========================
            CONTACT
      ===========================*/}

      <section
        className="contact"
        id="contact"
      >

        <div className="contact-card">

          <h2>Let's Connect</h2>

          <p>
            Interested in working together?
            Feel free to send me a message.
            I'll get back to you as soon as possible.
          </p>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been submitted.");
            }}
          >

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="primary-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/*==========================
              FOOTER
      ===========================*/}

      <footer>

        <div className="footer-content">

          <h3>Bandaru Srikanth</h3>

          <p>
            Full Stack Software Engineer
          </p>

          <div className="footer-socials">

            <a
              href="https://www.linkedin.com/in/bandaru-srikanth-69aa61212/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/srikanthbandaru79"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a href="mailto:srikanthbandaru79@@gmail.com">
              <FaEnvelope />
            </a>

          </div>

          <hr />

          <p className="copyright">
            © {new Date().getFullYear()} Bandaru Srikanth.
            All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;