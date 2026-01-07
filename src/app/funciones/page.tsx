import Link from "next/link";
import styles from "../page.module.css";

export default function Funciones(): React.JSX.Element {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.pageHero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                        <span className={styles.heroBadgeDot}></span>
                        Funcionalidades
                    </div>

                    <h1>
                        Funciones <span>Principales</span>
                    </h1>

                    <p className={styles.heroDescription}>
                        Herramientas poderosas diseñadas para transformar
                        la cultura de tu organización y potenciar el bienestar de tus colaboradores.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <div className="container">
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📝</div>
                            <h3>Encuestas Confidenciales</h3>
                            <p>
                                Recolección anónima de opiniones sobre el ambiente laboral,
                                garantizando respuestas honestas y transparentes. Nuestro sistema
                                asegura la privacidad total de cada colaborador.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📈</div>
                            <h3>Panel en Tiempo Real</h3>
                            <p>
                                Dashboard intuitivo con visualización clara de resultados,
                                métricas clave y tendencias históricas. Accede a información
                                actualizada en cualquier momento.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔍</div>
                            <h3>Análisis de Datos</h3>
                            <p>
                                Identificación inteligente de fortalezas organizacionales
                                y áreas críticas de mejora mediante algoritmos avanzados
                                de procesamiento de datos.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⚠️</div>
                            <h3>Alertas de Riesgo</h3>
                            <p>
                                Sistema de detección temprana de problemas en el clima laboral
                                con notificaciones automáticas para actuar rápidamente
                                ante situaciones críticas.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>💡</div>
                            <h3>Recomendaciones IA</h3>
                            <p>
                                Sugerencias estratégicas personalizadas para líderes
                                y equipos basadas en datos reales y mejores prácticas
                                de la industria.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📱</div>
                            <h3>Acceso Multiplataforma</h3>
                            <p>
                                Disponible en web y dispositivos móviles para que
                                todos puedan participar fácilmente desde cualquier
                                lugar y en cualquier momento.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔐</div>
                            <h3>Seguridad Empresarial</h3>
                            <p>
                                Encriptación de grado militar, cumplimiento GDPR y
                                certificaciones de seguridad para proteger los datos
                                sensibles de tu organización.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📊</div>
                            <h3>Reportes Ejecutivos</h3>
                            <p>
                                Generación automática de informes detallados listos
                                para presentar a la alta dirección con insights
                                accionables y métricas clave.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔄</div>
                            <h3>Integraciones</h3>
                            <p>
                                Conecta con tus herramientas favoritas como Slack,
                                Microsoft Teams, y sistemas de RRHH para una experiencia
                                de trabajo fluida.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaBox}>
                        <h2>¿Quieres ver estas funciones en acción?</h2>
                        <p>
                            Agenda una demo personalizada y descubre cómo BienEstarAPP
                            puede transformar tu organización.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contacto" className="btn btn-primary">
                                Solicitar Demo
                            </Link>
                            <Link href="/beneficios" className="btn btn-secondary">
                                Ver Beneficios
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
