"use client";

import { useState } from "react";
import styles from "../page.module.css";

export default function Contacto(): React.JSX.Element {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica de envío del formulario
        console.log("Form submitted:", formData);
        alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
        setFormData({ name: "", email: "", company: "", message: "" });
    };

    return (
        <>
            {/* Hero Section */}
            <section className={styles.pageHero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                        <span className={styles.heroBadgeDot}></span>
                        Contacto
                    </div>

                    <h1>
                        <span>Contáctanos</span>
                    </h1>

                    <p className={styles.heroDescription}>
                        Estamos aquí para ayudarte a mejorar el bienestar
                        de tu organización. Escríbenos y te responderemos pronto.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.contact}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <h2>Información de Contacto</h2>
                            <p>
                                Nuestro equipo está listo para responder todas tus preguntas
                                y ayudarte a implementar BienEstarAPP en tu organización.
                            </p>

                            <div className={styles.contactDetails}>
                                <div className={styles.contactItem}>
                                    <div className={styles.contactItemIcon}>✉️</div>
                                    <div className={styles.contactItemText}>
                                        <h4>Email</h4>
                                        <p>contacto@elevacultura.com</p>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.contactItemIcon}>📞</div>
                                    <div className={styles.contactItemText}>
                                        <h4>Teléfono</h4>
                                        <p>+51 902 147 276</p>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.contactItemIcon}>🏢</div>
                                    <div className={styles.contactItemText}>
                                        <h4>Organización</h4>
                                        <p>Eleva la Cultura</p>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.contactItemIcon}>📍</div>
                                    <div className={styles.contactItemText}>
                                        <h4>Ubicación</h4>
                                        <p>LATAM & España</p>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.contactItemIcon}>⏰</div>
                                    <div className={styles.contactItemText}>
                                        <h4>Horario</h4>
                                        <p>Lunes a Viernes, 9:00 - 18:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.contactFormContainer}>
                            <form className={styles.contactForm} onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Nombre completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Tu nombre"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="tu@empresa.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="company">Empresa</label>
                                    <input
                                        type="text"
                                        id="company"
                                        placeholder="Nombre de tu empresa"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Mensaje</label>
                                    <textarea
                                        id="message"
                                        placeholder="¿Cómo podemos ayudarte?"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Preguntas Frecuentes</h2>

                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h4>¿Cuánto tiempo toma implementar BienEstarAPP?</h4>
                            <p>
                                La implementación típica toma entre 2-4 semanas, dependiendo del
                                tamaño de tu organización y las integraciones requeridas.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h4>¿Es realmente anónimo para los colaboradores?</h4>
                            <p>
                                Sí, garantizamos 100% de anonimato. Utilizamos encriptación de grado
                                militar y no almacenamos información que pueda identificar a los usuarios.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h4>¿Qué soporte ofrecen?</h4>
                            <p>
                                Ofrecemos soporte técnico 24/7, capacitación para tu equipo y un
                                Customer Success Manager dedicado para asegurar tu éxito.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h4>¿Puedo probarlo antes de comprar?</h4>
                            <p>
                                Absolutamente. Ofrecemos una demo personalizada gratuita y un
                                período de prueba de 30 días sin compromiso.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
