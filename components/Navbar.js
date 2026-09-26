import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Penerapan API</Link>

            <div>
                <Link href="/tentang-api">Tentang API</Link>
                <Link href="/materi">Materi</Link>
                <Link href="/tentang">Tentang</Link>
            </div>
        </nav>
    );
}