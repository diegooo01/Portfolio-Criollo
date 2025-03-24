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

        let start = 0;
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
                    Estudiante de cuarto año de <span className="skyblue">Ingeniería de Software</span>  en la Universidad
                    Peruana de Ciencias Aplicadas (UPC). Me especializo en el <span className="skyblue">desarrollo
                    full-stack</span>, con experiencia en la creación de aplicaciones y sistemas
                    integrales. Me caracteriza una <span className="skyblue">mentalidad analítica</span> y orientada a
                    la
                    resolución de problemas, con un compromiso por el aprendizaje continuo y
                    la <span className="skyblue">innovación tecnológica</span> para crear soluciones de impacto.
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
                    jobTitle="Practicante en Analista de Programación"
                    company="Agencia SLINKY"
                    description="Como practicante, desarrollé componentes en HTML y SCSS con Angular 18 y Bootstrap, además de corregir estilos en HubSpot. Participé en proyectos ágiles (SCRUM y KANBAN), colaborando usando Git. También creé web services en PHP nativo, probándolos con POSTMAN."
                    duration="Diciembre 2024 - Presente"
                    firstItem={true} // Marca el primer elemento
                />
                <JobTimelineItem
                    jobTitle="Agente Bilingüe"
                    company="TP"
                    description="Como teleoperador bilingüe, desempeñé funciones de atención y soporte a clientes extranjeros de Estados Unidos y Australia. Además de ello, realicé la mejoría de la experiencia de los servicios que poseía el usuario con la compañía."
                    duration="Enero 2024 - Marzo 2024"
                    lastItem={true} // Marca el último elemento
                />
            </div>
            <div className="dashed-line"></div>
        </section>
    );
}

export default AboutMeSection;