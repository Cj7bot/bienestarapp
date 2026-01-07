import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "BienEstarAPP | Eleva la Cultura, Impulsa el Bienestar",
    description: "Plataforma digital diseñada para medir, comprender y mejorar el clima laboral en las organizaciones. Fortalece la cultura organizacional y el bienestar de los colaboradores.",
    keywords: "bienestar laboral, clima organizacional, cultura empresarial, recursos humanos, encuestas laborales",
    authors: [{ name: "Eleva la Cultura" }],
    openGraph: {
        title: "BienEstarAPP | Eleva la Cultura, Impulsa el Bienestar",
        description: "Plataforma digital para medir y mejorar el clima laboral en las organizaciones.",
        type: "website",
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
    return (
        <html lang="es">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
