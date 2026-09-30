import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Penerapan API",
    description: "Website pembelajaran dan penerapan API",
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}