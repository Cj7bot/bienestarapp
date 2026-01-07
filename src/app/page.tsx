"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Home(): React.JSX.Element {
    return (
        <>
            {/* Hero Section */}
            <section id="inicio" className={styles.hero}>
                <div className={styles.floatingElements}>
                    <div className={styles.floatingCircle}></div>
                    <div className={styles.floatingCircle}></div>
                    <div className={styles.floatingCircle}></div>
                </div>

                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                        <span className={styles.heroBadgeDot}></span>
                        Plataforma de Bienestar Organizacional
                    </div>

                    <h1>
                        Eleva la Cultura,<br />
                        <span>Impulsa el Bienestar</span>
                    </h1>

                    <p className={styles.heroDescription}>
                        Plataforma digital diseñada para medir, comprender y mejorar el clima laboral
                        en las organizaciones, utilizando datos reales para fortalecer la cultura
                        organizacional y el bienestar de los colaboradores.
                    </p>

                    <div className={styles.heroButtons}>
                        <Link href="/contacto" className="btn btn-primary">
                            Solicitar Demo
                            <span>→</span>
                        </Link>
                        <Link href="/funciones" className="btn btn-secondary">
                            Conocer Más
                        </Link>
                    </div>

                    <div className={styles.heroStats}>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>500+</div>
                            <div className={styles.statLabel}>Empresas</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>50K+</div>
                            <div className={styles.statLabel}>Colaboradores</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>98%</div>
                            <div className={styles.statLabel}>Satisfacción</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={styles.about}>
                <div className="container">
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutContent}>
                            <h2>¿Qué es BienEstarAPP?</h2>
                            <p>
                                Somos la plataforma líder en medición y mejora del clima laboral.
                                Ayudamos a las organizaciones a entender las necesidades de sus colaboradores
                                y a tomar decisiones basadas en datos reales.
                            </p>

                            <div className={styles.aboutFeatures}>
                                <div className={styles.aboutFeature}>
                                    <div className={styles.aboutFeatureIcon}>📊</div>
                                    <div className={styles.aboutFeatureText}>
                                        <h4>Análisis en Tiempo Real</h4>
                                        <p>Visualiza métricas actualizadas constantemente</p>
                                    </div>
                                </div>
                                <div className={styles.aboutFeature}>
                                    <div className={styles.aboutFeatureIcon}>🔒</div>
                                    <div className={styles.aboutFeatureText}>
                                        <h4>100% Confidencial</h4>
                                        <p>Respuestas anónimas y datos encriptados</p>
                                    </div>
                                </div>
                                <div className={styles.aboutFeature}>
                                    <div className={styles.aboutFeatureIcon}>🎯</div>
                                    <div className={styles.aboutFeatureText}>
                                        <h4>Recomendaciones Inteligentes</h4>
                                        <p>Sugerencias personalizadas para tu organización</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.aboutVisual}>
                            <div className={styles.dashboardMockup}>
                                <div className={styles.mockupHeader}>
                                    <span className={styles.mockupDot}></span>
                                    <span className={styles.mockupDot}></span>
                                    <span className={styles.mockupDot}></span>
                                </div>
                                <div className={styles.mockupContent}>
                                    <div className={styles.mockupCard}>
                                        <div className={styles.mockupCardValue}>87%</div>
                                        <div className={styles.mockupCardLabel}>Satisfacción</div>
                                    </div>
                                    <div className={styles.mockupCard}>
                                        <div className={styles.mockupCardValue}>92%</div>
                                        <div className={styles.mockupCardLabel}>Compromiso</div>
                                    </div>
                                    <div className={styles.mockupCard}>
                                        <div className={styles.mockupCardValue}>78%</div>
                                        <div className={styles.mockupCardLabel}>Bienestar</div>
                                    </div>
                                    <div className={styles.mockupChart}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaBox}>
                        <h2>¿Listo para transformar tu organización?</h2>
                        <p>
                            Únete a más de 500 empresas que ya están mejorando
                            su cultura organizacional con BienEstarAPP.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contacto" className="btn btn-primary">
                                Solicitar Demo Gratuita
                            </Link>
                            <Link href="/funciones" className="btn btn-secondary">
                                Ver Funciones
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
