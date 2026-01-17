"use client";

import { useState } from "react";
import styles from "../page.module.css";

interface SubmitStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

export default function Contacto(): React.JSX.Element {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
        type: 'idle',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        // Limpiar mensaje de error cuando el usuario empieza a escribir
        if (submitStatus.type === 'error') {
            setSubmitStatus({ type: 'idle', message: '' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: 'loading', message: 'Enviando mensaje...' });

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al enviar el mensaje');
            }

            setSubmitStatus({
                type: 'success',
                message: '¡Gracias por tu mensaje! Te hemos enviado un correo de confirmación y te contactaremos pronto.'
            });
            setFormData({ name: "", email: "", company: "", message: "" });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.'
            });
        } finally {
            setIsLoading(false);
        }
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
                                        <p>Yoveracheroomayra@gmail.com</p>
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

                                {/* Status Message */}
                                {submitStatus.type !== 'idle' && (
                                    <div
                                        style={{
                                            padding: '12px 16px',
                                            borderRadius: '8px',
                                            marginBottom: '16px',
                                            backgroundColor:
                                                submitStatus.type === 'success' ? 'rgba(16, 185, 129, 0.1)' :
                                                    submitStatus.type === 'error' ? 'rgba(239, 68, 68, 0.1)' :
                                                        'rgba(102, 126, 234, 0.1)',
                                            borderLeft: `4px solid ${submitStatus.type === 'success' ? '#10b981' :
                                                    submitStatus.type === 'error' ? '#ef4444' :
                                                        '#667eea'
                                                }`,
                                            color:
                                                submitStatus.type === 'success' ? '#10b981' :
                                                    submitStatus.type === 'error' ? '#ef4444' :
                                                        '#667eea'
                                        }}
                                    >
                                        {submitStatus.type === 'loading' && '⏳ '}
                                        {submitStatus.type === 'success' && '✅ '}
                                        {submitStatus.type === 'error' && '❌ '}
                                        {submitStatus.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{
                                        width: '100%',
                                        opacity: isLoading ? 0.7 : 1,
                                        cursor: isLoading ? 'not-allowed' : 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px'
                                    }}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <span style={{
                                                display: 'inline-block',
                                                width: '16px',
                                                height: '16px',
                                                border: '2px solid rgba(255,255,255,0.3)',
                                                borderTopColor: '#fff',
                                                borderRadius: '50%',
                                                animation: 'spin 1s linear infinite'
                                            }} />
                                            Enviando...
                                        </>
                                    ) : (
                                        'Enviar Mensaje'
                                    )}
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
