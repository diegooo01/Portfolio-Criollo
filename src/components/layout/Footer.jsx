import React from "react";
import "./Footer.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {HiDownload} from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h1>Diego Criollo</h1>
                    <div className="button-content">
                        <a href="/Diego%20Criollo.pdf" className="download-btn" download>
                            <HiDownload className="icon"/><span className="bold-text">Descarga mi CV aquí</span>
                        </a>
                    </div>
                </div>
                <div className="footer-data">
                    <p className="footer-credits">
                        Portafolio diseñado en <span className="skyblue">Figma</span> y desarrollado en <span
                        className="skyblue">React</span>. <br/>
                        Todos los derechos reservados ©. Diego Criollo 2025
                    </p>
                    <div className="footer-icons">
                        <a href="https://www.linkedin.com/in/diego-criollo-de-la-cruz-680830258/" target="_blank"
                           rel="noopener noreferrer">
                            <FaLinkedin/>
                        </a>
                        <a href="https://github.com/diegooo01" target="_blank" rel="noopener noreferrer">
                            <FaGithub/>
                        </a>
                        <a href="mailto:criollodiego542@gmail.com">
                            <MdEmail/>
                        </a>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
