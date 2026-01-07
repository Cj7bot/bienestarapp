import Link from "next/link";
import styles from "../page.module.css";

export default function Beneficios(): React.JSX.Element {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.pageHero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                        <span className={styles.heroBadgeDot}></span>
                        Beneficios
                    </div>

                    <h1>
                        Beneficios para tu <span>Organización</span>
                    </h1>

                    <p className={styles.heroDescription}>
                        Transforma el ambiente de trabajo y potencia el rendimiento
                        de tu equipo con nuestra plataforma integral de bienestar laboral.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className={styles.benefits}>
                <div className="container">
                    <div className={styles.benefitsFullGrid}>
                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>🌟</div>
                            <div className={styles.benefitText}>
                                <h4>Mejor Ambiente de Trabajo</h4>
                                <p>
                                    Colaboradores más motivados, comprometidos y felices
                                    en su día a día laboral. Un ambiente positivo que
                                    impulsa la creatividad y la colaboración.
                                </p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>📊</div>
                            <div className={styles.benefitText}>
                                <h4>Mayor Productividad</h4>
                                <p>
                                    Un buen clima laboral impacta positivamente en los
                                    resultados y objetivos de negocio. Estudios demuestran
                                    hasta un 25% de aumento en productividad.
                                </p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>🎯</div>
                            <div className={styles.benefitText}>
                                <h4>Toma de Decisiones Informada</h4>
                                <p>
                                    Información confiable y actualizada para decisiones
                                    estratégicas basadas en datos reales, no en suposiciones.
                                </p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>🤝</div>
                            <div className={styles.benefitText}>
                                <h4>Retención de Talento</h4>
                                <p>
                                    Reduce la rotación identificando y resolviendo problemas
                                    antes de que escalen. Mantén a tus mejores colaboradores
                                    comprometidos.
                                </p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>💰</div>
                            <div className={styles.benefitText}>
                                <h4>Reducción de Costos</h4>
                                <p>
                                    Disminuye gastos asociados a la rotación, ausentismo
                                    y baja productividad. ROI comprobado desde el primer
                                    trimestre de implementación.
                                </p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>🏆</div>
                            <div className={styles.benefitText}>
                                <h4>Marca Empleadora</h4>
                                <p>
                                    Mejora tu reputación como empleador y atrae el mejor
                                    talento del mercado. Destaca como una empresa que
                                    realmente se preocupa por su gente.
                                </p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>📈</div>
                            <div className={styles.benefitText}>
                                <h4>Cultura de Mejora Continua</h4>
                                <p>
                                    Fomenta una mentalidad de crecimiento donde el feedback
                                    constructivo y la evolución constante son parte del ADN
                                    organizacional.
                                </p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>🧘</div>
                            <div className={styles.benefitText}>
                                <h4>Bienestar Integral</h4>
                                <p>
                                    No solo mide, sino que impulsa acciones concretas para
                                    el bienestar físico, mental y emocional de todos los
                                    colaboradores.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.statsSection}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>+35%</div>
                            <div className={styles.statLabel}>Mejora en engagement</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>-45%</div>
                            <div className={styles.statLabel}>Reducción en rotación</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>+28%</div>
                            <div className={styles.statLabel}>Aumento en productividad</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>92%</div>
                            <div className={styles.statLabel}>Satisfacción de clientes</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaBox}>
                        <h2>Comienza a transformar tu organización hoy</h2>
                        <p>
                            Únete a más de 500 empresas que ya están disfrutando
                            de estos beneficios con BienEstarAPP.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contacto" className="btn btn-primary">
                                Comenzar Ahora
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
