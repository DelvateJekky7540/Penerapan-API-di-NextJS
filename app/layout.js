import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import SoundcloudPlayer from "@/components/ui/SoundCloud";
import { Poppins, Space_Grotesk } from "next/font/google";

export const metadata = {
    title: "Penerapan API",
    description: "Website pembelajaran dan penerapan API",
};

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-space-grotesk",
});

export default function RootLayout({ children }) {
    return (
        <html lang="id" className={`${poppins.variable} ${spaceGrotesk.variable}`}>
            <body className={`${poppins.className} bg-black text-white antialiased selection:bg-white selection:text-black flex flex-col min-h-screen`}>
                <Navbar />

                {/* Content */}
                <main className="flex-1">
                    {children}
                </main>
                
                
                <Footer />
                <SoundcloudPlayer />
            </body>
        </html>
    );
}