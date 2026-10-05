import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import SoundcloudPlayer from "@/components/ui/SoundCloud";
import { Poppins } from "next/font/google";



export const metadata = {
    title: "Penerapan API",
    description: "Website pembelajaran dan penerapan API",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], });

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body className={poppins.className}>
                <Navbar />
                {children}
                
                <Footer />
                <SoundcloudPlayer />
            </body>
        </html>
    );
}