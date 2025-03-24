import "./Hero.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const HeroSection = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <p>Hola, mi nombre es</p>
                <h1>DIEGO CRIOLLO</h1>
                <p>Estudiante de <span className="skyblue">Ingeniería de Software</span>  y <br/>  <span className="skyblue">Desarrollador FullStack</span></p>
            </div>
            <div className="button-content">
                <a href="/Diego%20Criollo%20CV.pdf" className="download-btn" download>
                    <HiDownload className="icon"/><span className="bold-text">Descargar CV</span>
                </a>
            </div>
            <div className="social-icons">
                <a
                    href="https://www.linkedin.com/in/diego-criollo-de-la-cruz-680830258/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin/>
                </a>
                <a
                    href="https://github.com/diegooo01"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub/>
                </a>
            </div>
            <div className="dashed-line"></div>
        </section>
    );
};

export default HeroSection;