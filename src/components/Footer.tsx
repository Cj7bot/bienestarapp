import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer(): React.JSX.Element {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerMain}>
                    <div className={styles.footerBrand}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoIcon}>✦</span>
                            BienEstarAPP
                        </Link>
                        <p>
                            Plataforma líder en medición y mejora del clima laboral.
                            Transformamos organizaciones a través del bienestar.
                        </p>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4>Plataforma</h4>
                        <ul>
                            <li><Link href="/funciones">Funciones</Link></li>
                            <li><Link href="/beneficios">Beneficios</Link></li>
                            <li><Link href="#">Precios</Link></li>
                            <li><Link href="#">Casos de Éxito</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4>Recursos</h4>
                        <ul>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Guías</Link></li>
                            <li><Link href="#">Webinars</Link></li>
                            <li><Link href="#">Centro de Ayuda</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4>Empresa</h4>
                        <ul>
                            <li><Link href="#">Sobre Nosotros</Link></li>
                            <li><Link href="/contacto">Contacto</Link></li>
                            <li><Link href="#">Carreras</Link></li>
                            <li><Link href="#">Privacidad</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© 2026 Eleva la Cultura, Impulsa tu Bienestar. Todos los derechos reservados.</p>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialLink}>𝕏</a>
                        <a href="#" className={styles.socialLink}>in</a>
                        <a href="#" className={styles.socialLink}>📷</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
