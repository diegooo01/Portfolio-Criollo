import React, { useEffect, useRef, useState } from "react";
import "./JobTimelineItem.scss";

const JobTimelineItem = ({ jobTitle, company, description, duration, firstItem, lastItem }) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={itemRef}
            className={`timeline-content ${isVisible ? "visible" : ""} 
                        ${firstItem ? "first" : ""} ${lastItem ? "last" : ""}`}
        >
            <div className="line-container">
                <div className="line"></div>
                <div className="circle"></div>
            </div>
            <div className="job-text">
                <div className="job-title">
                    <h1>{company}</h1>
                </div>
                <div className="job-paragraph">
                    <h1>{jobTitle}</h1>
                    <p>{description}</p>
                    <p>{duration}</p>
                </div>
            </div>
        </div>
    );
};

export default JobTimelineItem;
