import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import "./Toolbar.scss";

export default function Toolbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subMenuMobileOpen, setSubMenuMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false); // Estado para el efecto de scroll

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
                setSubMenuMobileOpen(false);
            }
        };

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Función para cerrar el submenú al hacer clic en un enlace
    const closeSubMenu = () => {
        setSubMenuOpen(false);
    };

    const closeMenuMobile = () => {
        setMenuOpen(false);
        setSubMenuMobileOpen(false);
    };

    return (
        <nav className={`toolbar ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">
                <a href="#hero"><img src="/diego.svg" alt=""/></a>
                <h1>Diego.dev</h1>
            </div>

            <div className="desktop-menu">
                <a href="#about-me" className="nav-link">Acerca de mí</a>

                <div className="menu-container">
                    <button
                        className="nav-link flex items-center gap-1"
                        onClick={() => setSubMenuOpen(!subMenuOpen)}
                    >
                        Trayectoria
                        <motion.div
                            animate={{ rotate: subMenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="icon"
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </button>

                    {subMenuOpen && (
                        <motion.div
                            initial={{opacity: 0, y: -10}}
                            animate={{opacity: 1, y: 5}}
                            exit={{opacity: 0, y: -10}}
                            className="sub-menu"
                        >
                            <a href="#professional-experience" onClick={closeSubMenu}>Experiencia Profesional</a>
                            <a href="#projects" onClick={closeSubMenu}>Proyectos</a>
                            <a href="#certifications" onClick={closeSubMenu}>Certificaciones</a>
                        </motion.div>
                    )}
                </div>

                <a href="#contact-me" className="nav-link">Contáctame</a>
            </div>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {menuOpen && (
                <motion.div
                    initial={{opacity: 0, y: -10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -10}}
                    className="mobile-menu"
                >
                    <a href="#about-me" className="menu-item" onClick={closeMenuMobile}>Acerca de mí</a>

                    <button
                        className="menu-item-button"
                        onClick={() => setSubMenuMobileOpen(!subMenuMobileOpen)}
                    >
                        Trayectoria
                        <motion.div
                            animate={{rotate: subMenuMobileOpen ? 180 : 0}}
                            transition={{duration: 0.3}}
                            className="icon"
                        >
                            <ChevronDown size={20}/>
                        </motion.div>
                    </button>
                    <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: subMenuMobileOpen ? "auto" : 0, opacity: subMenuMobileOpen ? 1 : 0}}
                        transition={{duration: 0.3}}
                        className="submenu-mobile"
                    >
                        <a href="#professional-experience" className="submenu-item" onClick={closeMenuMobile}>Experiencia
                            Profesional</a>
                        <a href="#projects" className="submenu-item" onClick={closeMenuMobile}>Proyectos</a>
                        <a href="#certifications" className="submenu-item" onClick={closeMenuMobile}>Certificaciones</a>
                    </motion.div>

                    <a href="#contact-me" className="menu-item" onClick={closeMenuMobile}>Contáctame</a>
                </motion.div>
            )}
        </nav>
    );
}
