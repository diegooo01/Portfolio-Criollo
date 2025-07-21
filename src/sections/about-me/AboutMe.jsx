import React, { useEffect, useState, useRef  } from "react";
import "./AboutMe.scss";
import JobTimelineItem from "./components/JobTimelineItem.jsx";

const easeOutExpo = (t) => 1 - Math.pow(2, -10 * t);

const AnimatedNumber = ({ value }) => {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const numberRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (numberRef.current) {
            observer.observe(numberRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;

        const duration = 2500; // 1 segundo
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Progreso entre 0 y 1

            setCount(Math.ceil(value * easeOutExpo(progress)));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(value); // Asegura que termine exactamente en el valor final
            }
        };

        requestAnimationFrame(animate);
    }, [visible, value]);

    return <span className="number" ref={numberRef}>{`+${count}`}</span>;
};

const AboutMeSection = () => {
    return (
        <section className="about-me" id="about-me">
            <div className="about-me-content">
                <h2>Acerca de mí</h2>
                <p>
                    Soy Diego Criollo, estudiante de 4to año de <span className="skyblue">Ingeniería de Software </span>  en la UPC
                    (Universidad Peruana de Ciencias Aplicadas). Me interesa especialmente el
                    <span className="skyblue"> desarrollo frontend </span>
                     por su impacto en la experiencia del usuario y las oportunidades
                    que ofrece para la innovación visual y funcional. También me gusta involucrarme en
                    <span className="skyblue"> distintas áreas del desarrollo de software</span>, explorando tanto el diseño de interfaces
                    como la lógica del backend.
                </p>
                <p>
                    Actualmente realizo prácticas en una entidad financiera, donde
                    colaboro en el <span className="skyblue">desarrollo de la arquitectura del core bancario</span>.
                    Este rol me ha permitido adquirir una visión sólida sobre <span className="skyblue">sistemas
                    complejos, diseño estructurado y buenas prácticas de escalabilidad</span>.
                    Me adapto con facilidad a distintos entornos de trabajo y disfruto
                    integrarme en equipos donde puedo aportar ideas, escuchar activamente
                    y contribuir con soluciones funcionales y bien fundamentadas.
                </p>
            </div>
            <div className="stats">
                <div className="stat">
                    <AnimatedNumber value={5}/>
                    <span className="label">Proyectos Universitarios y Profesionales</span>
                </div>
                <div className="stat">
                    <AnimatedNumber value={6}/>
                    <span className="label">Tecnologías Dominadas a nivel Avanzado</span>
                </div>
            </div>
            <div className="timeline" id="professional-experience">
                <h2>Experiencia Profesional</h2>
                <JobTimelineItem
                    jobTitle="Practicante en Arquitectura Core Banking"
                    company="Santander Consumer Bank"
                    description="En mi rol como practicante me encuentro colaborando con la arquitectura del Core Bancario. Realizo el mapeo y análisis de los requerimientos estipulados del Core, así como la documentación técnica de los servicios, para posteriormente apoyar en la fase de construcción utilizando Java 18, SpringBoot y Oracle."
                    duration="Mayo 2025 - Presente"
                    firstItem={true}
                />
                <JobTimelineItem
                    jobTitle="Practicante en Analista de Programación"
                    company="Agencia SLINKY"
                    description="Como practicante, desarrollé componentes en HTML y SCSS con Angular 18 y Bootstrap, además de corregir estilos en HubSpot. Participé en proyectos ágiles (SCRUM y KANBAN), colaborando usando Git. También creé web services en PHP nativo, probándolos con POSTMAN."
                    duration="Diciembre 2024 - Marzo 2025"
                    lastItem={true}
                />
            </div>
            <div className="dashed-line"></div>
        </section>
    );
}

export default AboutMeSection;