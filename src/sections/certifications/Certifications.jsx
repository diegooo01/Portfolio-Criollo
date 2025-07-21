import "./Certifications.scss"
import CertificationItem from "./components/CertificationItem.jsx";
import React from "react";

const certifications = [
    {
        image: "https://enwadil.com/wp-content/uploads/2024/11/IELTSSQUARE.jpeg",
        title: "IELTS Academic - B2",
        institution: "British Council IDP",
        year: "2025",
        link: "/PE10125500260-28-06-2025-ETRF.pdf",
    },
    {
        image: "https://raw.githubusercontent.com/diegooo01/Portfolio-Diego/refs/heads/main/public/certifications-logos/u-macquire.png",
        title: "Excel Skills: Advanced",
        institution: "Macquire University",
        year: "2024",
        link: "https://www.coursera.org/account/accomplishments/verify/BODDETQ1I5ZL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
        image: "https://raw.githubusercontent.com/diegooo01/Portfolio-Diego/refs/heads/main/public/certifications-logos/u-rutgers.png",
        title: "Supply Chain Analytics",
        institution: "Rutgers University",
        year: "2024",
        link: "https://www.coursera.org/account/accomplishments/specialization/EIOD3S1HKZOY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
    },
    {
        image: "https://raw.githubusercontent.com/diegooo01/Portfolio-Diego/refs/heads/main/public/certifications-logos/mongodb-certification.png",
        title: "MongoDB Indexes",
        institution: "MongoDB",
        year: "2023",
        link: "https://learn.mongodb.com/c/u2vXfPknRgKfx_XJE3ehBw"
    },
    {
        image: "https://raw.githubusercontent.com/diegooo01/Portfolio-Diego/refs/heads/main/public/certifications-logos/mongodb-certification.png",
        title: "Introduction to MongoDB",
        institution: "MongoDB",
        year: "2023",
        link: "https://learn.mongodb.com/c/u2vXfPknRgKfx_XJE3ehBw"
    },
    {
        image: "https://raw.githubusercontent.com/diegooo01/Portfolio-Diego/refs/heads/main/public/certifications-logos/u-michigan-certification.png",
        title: "Python Data Structures",
        institution: "Michigan University",
        year: "2023",
        link: "https://www.coursera.org/account/accomplishments/verify/ZLW7ELJD8JE4"
    },
    {
        image: "https://raw.githubusercontent.com/diegooo01/Portfolio-Diego/refs/heads/main/public/certifications-logos/u-michigan-certification.png",
        title: "Programming For Everybody (Python)",
        institution: "Michigan University",
        year: "2023",
        link: "https://www.coursera.org/account/accomplishments/verify/CX84G8Q92G2F"
    },
    {
        image: "https://raw.githubusercontent.com/diegooo01/Portfolio-Diego/refs/heads/main/public/certifications-logos/scrum-certification.png",
        title: "Scrum Fundamentals",
        institution: "ScrumStudy",
        year: "2023",
        link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=983615"
    },
];


const CertificationSection = () => {
    return (
        <section className="certifications" id="certifications">
            <div className="certifications-content">
                <h2>Certificaciones</h2>
                <CertificationItem certifications={certifications}/>
            </div>
            <div className="dashed-line"></div>
        </section>
    );
}

export default CertificationSection;