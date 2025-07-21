import "./Projects.scss";
import ProjectItem from "./components/ProjectItem.jsx";
import {FaAngular, FaPhp, FaVuejs, FaJs, FaPython, FaDocker, FaUserAstronaut} from "react-icons/fa";
import {SiMysql, SiMongodb, SiDotnet  } from "react-icons/si";
import React from "react";

const ProjectsSection = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-content">
                <h2>Proyectos</h2>
                <ProjectItem
                    title="NutriControl Landing Page"
                    description="Landing page de NutriControl, una solución de AgroSense que integra web, app móvil e IoT para optimizar el riego y fertilización agrícola mediante sensores que monitorean el suelo en tiempo real, mejorando el rendimiento y promoviendo una agricultura sostenible."
                    link="https://nutricontrol.netlify.app/"
                    subtitle="Link de la página web"
                    technologies={[FaUserAstronaut]}
                    images={
                        [
                            "/project-six/nutricontrol01.png",
                            "/project-six/nutricontrol02.png",
                            "/project-six/nutricontrol03.png",
                            "/project-six/nutricontrol04.png",
                            "/project-six/nutricontrol05.png"
                        ]
                    }
                    infoPosition="left"
                />
                <ProjectItem
                    title="Sistema de Cobranza Partner247"
                    description="Sistema de cobranza y gestión de créditos con módulos de seguridad, clientes y agentes. Permite registrar préstamos, asignar cobradores y monitorear pagos. Genera reportes y estadísticas financieras para optimizar la gestión de procesos administrativos."
                    link="https://github.com/slinkype/SistemaCobranza"
                    subtitle="Link del repositorio"
                    technologies={[FaAngular, FaPhp, SiMysql]}
                    images={
                        [
                            "/project-one/SistemaCobranza01.png",
                            "/project-one/SistemaCobranza03.png",
                            "/project-one/SistemaCobranza04.png",
                            "/project-one/SistemaCobranza05.png",
                            "/project-one/SistemaCobranza06.png",
                            "/project-one/SistemaCobranza07.png"
                        ]
                    }
                    infoPosition="right"
                />
                <ProjectItem
                    title="Dilingence Tech Landing Page"
                    description="Landing Page sobre Diligence Tech, aplicativo móvil para la gestión y análisis de documentos financieros, optimizando la seguridad y eficiencia en el manejo de información sensible. Ofrece una Virtual Data Room intuitiva, herramientas avanzadas de edición y extracción automática de documentos públicos, con cifrado de extremo a extremo para garantizar la máxima protección."
                    link="https://diligence-tech-landing.netlify.app/"
                    subtitle="Link de la página web"
                    technologies={[FaVuejs, FaJs]}
                    images={
                        [
                            "/project-two/diligencetech01.png",
                            "/project-two/diligencetech02.png",
                            "/project-two/diligencetech03.png",
                            "/project-two/diligencetech04.png",
                        ]
                    }
                    infoPosition="left"
                />
                <ProjectItem
                    title="Hidra.Net"
                    description="Aplicativo web que optimiza la gestión de hidrantes en el Callao mediante algoritmos de grafos. Permite crear una red conectada minimizando distancias y calcular el hidrante más cercano ante un incendio, mejorando la respuesta a emergencias."
                    link="https://github.com/diegooo01/HidraNet"
                    subtitle="Link del repositorio"
                    technologies={[FaVuejs, FaPython]}
                    images={
                        [
                            "/project-three/hidranet01.png",
                            "/project-three/hidranet02.png",
                            "/project-three/hidranet03.png",
                        ]
                    }
                    infoPosition="right"
                />
                <ProjectItem
                    title="Cambiazo"
                    description="Aplicativo web para el intercambio de bienes entre usuarios, promoviendo la sostenibilidad y la economía circular. Diseñada para ser intuitiva, ofrece herramientas que mejoran la experiencia y facilitan las transacciones. Además, incluye un apartado informativo sobre organizaciones benéficas y cómo apoyar sus iniciativas."
                    link="https://github.com/TechZo-Organization/Fronted"
                    subtitle="Link del repositorio"
                    technologies={[FaVuejs, SiDotnet, SiMysql]}
                    images={
                        [
                            "/project-five/cambiazo01.png",
                            "/project-five/cambiazo02.png",
                            "/project-five/cambiazo03.png",
                            "/project-five/cambiazo04.png",
                            "/project-five/cambiazo05.png",
                            "/project-five/cambiazo06.png",

                        ]
                    }
                    infoPosition="left"
                />
            </div>
            <div className="dashed-line"></div>
        </section>

    );
}

export default ProjectsSection;


