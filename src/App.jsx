import { useState, useEffect } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

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
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  /* ===========================
        CONTACT FORM
  ============================ */

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_k4me114",
        "template_8ls3elb",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "4HzRsr-CdvVKt60uq"
      )
      .then(() => {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="app">

      {/*==========================
              NAVBAR
      ==========================*/}

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
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

        </div>

      </nav>

      {/*==========================
              HERO
      ==========================*/}

      <section
        className="hero"
        id="home"
      >

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
     Backend Software Engineer with 5+ years of experience designing and building scalable Java/Spring Boot microservices,
distributed systems, and cloud-native enterprise payment platforms. Experienced in Kubernetes, AWS, GCP, Apache Kafka,
Redis, and OpenTelemetry, with a proven track record of improving performance, scalability, observability, and reliability
for enterprise applications serving 200+ customers.
          </p>

          <div className="buttons">

            <a
              href="https://drive.google.com/drive/folders/1cjqsVMatir5gF6n19YvEFUV7SjCEZ1KZ?usp=drive_link"
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
      ==========================*/}

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
            onSubmit={sendEmail}
          >

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              required
            />

            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) =>
                setForm({
                  ...form,
                  subject: e.target.value,
                })
              }
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              required
            ></textarea>

            <button
              type="submit"
              className="primary-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="success-msg">
                ✅ Thank you! Your message has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="error-msg">
                ❌ Failed to send your message. Please try again.
              </p>
            )}

          </form>

        </div>

      </section>

      {/*==========================
              FOOTER
      ==========================*/}

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

            <a href="mailto:srikanthbandaru79@gmail.com">
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
