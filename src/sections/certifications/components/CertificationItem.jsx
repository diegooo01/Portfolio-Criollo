import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./CertificationItem.scss";

const CertificationItem = ({ certifications }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.2 });
    const [hasAnimated, setHasAnimated] = useState(false);

    if (inView && !hasAnimated) {
        setHasAnimated(true);
    }

    return (
        <motion.div
            ref={ref}
            className="certification-container"
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            {certifications.map((cert, index) => (
                <motion.a
                    href={cert.link}
                    key={index}
                    className="certification-card"
                    target="_blank"
                    initial={{ opacity: 0, y: 50 }}
                    animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                    <img src={cert.image} alt={cert.institution} className="cert-logo" />
                    <div className="cert-info">
                        <h3 className="cert-title">{cert.title}</h3>
                        <p className="cert-institution">{cert.institution}</p>
                        <span className="cert-year">Emitido: {cert.year}</span>
                    </div>
                </motion.a>
            ))}
        </motion.div>
    );
};

export default CertificationItem;
