"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header(): React.JSX.Element {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = (): void => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    const isActive = (path: string): boolean => {
        return pathname === path;
    };

    const toggleMobileMenu = (): void => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = (): void => {
        setMobileMenuOpen(false);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
                    <span className={styles.logoIcon}>✦</span>
                    BienEstarAPP
                </Link>

                <ul className={styles.navLinks}>
                    <li>
                        <Link
                            href="/"
                            className={isActive("/") ? styles.active : ""}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/funciones"
                            className={isActive("/funciones") ? styles.active : ""}
                        >
                            Funciones
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/beneficios"
                            className={isActive("/beneficios") ? styles.active : ""}
                        >
                            Beneficios
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contacto"
                            className={isActive("/contacto") ? styles.active : ""}
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>

                <button
                    className={`${styles.mobileMenuBtn} ${mobileMenuOpen ? styles.menuOpen : ""}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`${styles.mobileMenuOverlay} ${mobileMenuOpen ? styles.overlayOpen : ""}`}
                onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
                {/* Close Button */}
                <button
                    className={styles.closeMenuBtn}
                    onClick={closeMobileMenu}
                    aria-label="Cerrar menú"
                >
                    <span></span>
                    <span></span>
                </button>

                <ul className={styles.mobileNavLinks}>
                    <li>
                        <Link
                            href="/"
                            className={isActive("/") ? styles.mobileActive : ""}
                            onClick={closeMobileMenu}
                        >
                            <span className={styles.mobileNavIcon}>🏠</span>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/funciones"
                            className={isActive("/funciones") ? styles.mobileActive : ""}
                            onClick={closeMobileMenu}
                        >
                            <span className={styles.mobileNavIcon}>⚡</span>
                            Funciones
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/beneficios"
                            className={isActive("/beneficios") ? styles.mobileActive : ""}
                            onClick={closeMobileMenu}
                        >
                            <span className={styles.mobileNavIcon}>✨</span>
                            Beneficios
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contacto"
                            className={isActive("/contacto") ? styles.mobileActive : ""}
                            onClick={closeMobileMenu}
                        >
                            <span className={styles.mobileNavIcon}>📧</span>
                            Contacto
                        </Link>
                    </li>
                </ul>

                <div className={styles.mobileMenuFooter}>
                    <p>© 2026 BienEstarAPP</p>
                </div>
            </div>
        </header>
    );
}
