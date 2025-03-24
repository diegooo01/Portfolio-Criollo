import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProjectItem.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectItem = ({ title, description, link, subtitle, technologies, images, infoPosition = "left" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <motion.div
            className={`project-item ${infoPosition === "right" ? "reverse" : ""}`}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="project-info">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
                    {subtitle}
                </a>
                <div className="technologies">
                    {technologies.map((TechIcon, index) => (
                        <TechIcon key={index} className="tech-icon" />
                    ))}
                </div>
            </div>
            <div className="project-carousel">
                <button className="carousel-btn left" onClick={handlePrev}>
                    <FaChevronLeft />
                </button>

                <div className="carousel-container">
                    <motion.div
                        className="carousel-track"
                        animate={{ x: `-${currentIndex * 100}%` }}
                        transition={{ duration: 0.12, ease: "easeInOut" }}
                    >
                        {images.map((image, index) => (
                            <div className="carousel-item" key={index}>
                                <img src={image} alt={title} className="project-image" />
                            </div>
                        ))}
                    </motion.div>
                </div>

                <button className="carousel-btn right" onClick={handleNext}>
                    <FaChevronRight />
                </button>
                <div className="carousel-indicator">
                    {currentIndex + 1}/{images.length}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectItem;
