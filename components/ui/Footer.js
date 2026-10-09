export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-zinc-950/80 backdrop-blur-md text-zinc-400 font-mono text-xs py-6 px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-white font-bold tracking-wider">SYSTEM_ONLINE</span>
                    <span className="text-zinc-600">|</span>
                    <span>© 2026 Jekky | Implementasi API Pada NextJS. ALL RIGHTS RESERVED.</span>
                </div>

            </div>
        </footer>
    );
}