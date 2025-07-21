import React, { useState } from "react";
import Swal from "sweetalert2";
import "./ContactMe.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const response = await fetch("https://formspree.io/f/xpwppynk", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        });

        if (response.ok) {
            setStatus("success");
            form.reset();
            Swal.fire({
                icon: "success",
                title: "Mensaje enviado",
                text: "¡Gracias por contactarme! Te responderé pronto.",
                confirmButtonColor: "#3085d6",
            });
        } else {
            setStatus("error");
            Swal.fire({
                icon: "error",
                title: "Error al enviar",
                text: "Hubo un problema al enviar el mensaje. Inténtalo nuevamente.",
                confirmButtonColor: "#d33",
            });
        }
    };

    return (
        <section className="contact-me" id="contact-me">
            <div className="contact-me-content">
                <div className="contact-info">
                    <h2>Contáctame</h2>
                    <p>
                        Si deseas ponerte en contacto conmigo,{" "}
                        <span className="skyblue">completa el siguiente formulario</span>.
                        También puedes explorar <span className="skyblue">más sobre mí y mis proyectos </span>
                        a través de mis <span className="skyblue">redes sociales</span> que encontrarás abajo.
                        ¡Será un placer conectar contigo!
                    </p>
                    <div className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/diego-criollo-de-la-cruz-680830258/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
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

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Nombre*" required/>
                    <input type="email" name="email" placeholder="Correo electrónico*" required/>
                    <textarea name="message" placeholder="Escribe tu mensaje aquí*" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className="dashed-line"></div>
        </section>
    );
};

export default ContactMe;
