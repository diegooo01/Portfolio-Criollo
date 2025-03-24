import "./Projects.scss";
import ProjectItem from "./components/ProjectItem.jsx";
import {FaAngular, FaPhp, FaVuejs, FaJs, FaPython, FaDocker} from "react-icons/fa";
import {SiMysql, SiMongodb, SiDotnet  } from "react-icons/si";
import React from "react";

const ProjectsSection = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-content">
                <h2>Proyectos</h2>
                <ProjectItem
                    title="Sistema de Cobranza Partner247"
                    description="Sistema de cobranza y gestión de créditos con módulos de seguridad, clientes y agentes. Permite registrar préstamos, asignar cobradores y monitorear pagos. Genera reportes y estadísticas financieras para optimizar la gestión de procesos administrativos."
                    link="https://github.com/slinkype/SistemaCobranza"
                    subtitle="Link del repositorio"
                    technologies={[FaAngular, FaPhp, SiMysql]}
                    images={
                        [
                            "public/project-one/SistemaCobranza01.png",
                            "public/project-one/SistemaCobranza03.png",
                            "public/project-one/SistemaCobranza04.png",
                            "public/project-one/SistemaCobranza05.png",
                            "public/project-one/SistemaCobranza06.png",
                            "public/project-one/SistemaCobranza07.png"
                        ]
                    }
                    infoPosition="left"
                />
                <ProjectItem
                    title="Dilingence Tech Landing Page"
                    description="Landing Page sobre Diligence Tech, aplicativo móvil para la gestión y análisis de documentos financieros, optimizando la seguridad y eficiencia en el manejo de información sensible. Ofrece una Virtual Data Room intuitiva, herramientas avanzadas de edición y extracción automática de documentos públicos, con cifrado de extremo a extremo para garantizar la máxima protección."
                    link="https://diligence-tech-landing.netlify.app/"
                    subtitle="Link de la página web"
                    technologies={[FaVuejs, FaJs]}
                    images={
                        [
                            "public/project-two/diligencetech01.png",
                            "public/project-two/diligencetech02.png",
                            "public/project-two/diligencetech03.png",
                            "public/project-two/diligencetech04.png",
                        ]
                    }
                    infoPosition="right"
                />
                <ProjectItem
                    title="Hidra.Net"
                    description="Aplicativo web que optimiza la gestión de hidrantes en el Callao mediante algoritmos de grafos. Permite crear una red conectada minimizando distancias y calcular el hidrante más cercano ante un incendio, mejorando la respuesta a emergencias."
                    link="https://github.com/diegooo01/HidraNet"
                    subtitle="Link del repositorio"
                    technologies={[FaVuejs, FaPython]}
                    images={
                        [
                            "public/project-three/hidranet01.png",
                            "public/project-three/hidranet02.png",
                            "public/project-three/hidranet03.png",
                        ]
                    }
                    infoPosition="left"
                />
                <ProjectItem
                    title="FindU"
                    description="Red social diseñada para que estudiantes universitarios puedan interactuar, colaborar y establecer conexiones académicas y profesionales. El proyecto implementa un enfoque escalable y eficiente, utilizando tecnologías de virtualización para gestionar dinámicamente la infraestructura de la aplicación y la base de datos, asegurando alto rendimiento y disponibilidad."
                    link="https://github.com/diegooo01/FindU"
                    subtitle="Link del repositorio"
                    technologies={[FaAngular, FaPython, FaDocker, SiMongodb]}
                    images={
                        [
                            "public/project-four/findu01.png",
                            "public/project-four/findu02.png",
                            "public/project-four/findu04.png",
                            "public/project-four/findu03.png",
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
                            "public/project-five/cambiazo01.png",
                            "public/project-five/cambiazo02.png",
                            "public/project-five/cambiazo03.png",
                            "public/project-five/cambiazo04.png",
                            "public/project-five/cambiazo05.png",
                            "public/project-five/cambiazo06.png",

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


