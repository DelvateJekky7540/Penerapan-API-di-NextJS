// components/SoundcloudPlayer.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { FaPlay, FaChevronDown, FaStepForward, FaStepBackward } from "react-icons/fa";

export default function SoundcloudPlayer() {
    const [isExpanded, setIsExpanded] = useState(true);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [trackTitle, setTrackTitle] = useState("Loading...");
    const iframeRef = useRef(null);
    const widgetRef = useRef(null);
    const isFirstRender = useRef(true);

  // 1. Daftar Lagu Pilihanmu
    const playlist = [
    { title: "About You", url: "https://soundcloud.com/ibmanggapraharjasd/the-1975-about-you", },
    { title: "See You Again", url: "https://soundcloud.com/kurniawan-ardi-kusuma-effendy/128a", },
    { title: "Blank Space", url: "https://soundcloud.com/h-m-h-m-d-4/blank-space-by-taylor-swift", },
    { title: "Love Me Not Breakbeat", url: "https://soundcloud.com/fahmi-anwar-690788355/ravyn-lenae-love-me-not-fahmi", },
    { title: "Habbits Stay High X Breakbeat Thailand", url: "https://soundcloud.com/pandu-ws-928329716/dj-nueng-habits-stay-high", },
    { title: "We Can Be Friend", url: "https://soundcloud.com/raymond-wijaya-462260559/dj-we-can-t-be-friends-tiktok", },
    { title: "Susubuhan Breakbeat", url: "https://soundcloud.com/haze-431352322/dj-susubuhan-sudah-tulak", },
    ];

    const themeColor = "6366f1";
    const currentTrack = playlist[currentTrackIndex];

    const initialEmbedUrl = "https://w.soundcloud.com/player/?url=" + encodeURIComponent(playlist[0].url) + "&color=%23" + themeColor + "&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false";
    
    const updateTrackMetadata = (widget) => {
        if (!widget) return;
        // API SoundCloud untuk mengambil objek lagu yang sedang aktif
        widget.getCurrentSound((sound) => {
            if (sound && sound.title) {
                setTrackTitle(sound.title);
            }
        });
    };

    const handleScriptLoad = () => {
        if (window.SC && iframeRef.current) {
            const widget = window.SC.Widget(iframeRef.current);
            widgetRef.current = widget;

            // Saat widget siap, ambil judul lagu pertamanya
            widget.bind(window.SC.Widget.Events.READY, () => {
                updateTrackMetadata(widget);
            });

            // Update judul saat lagu mulai diputar
            widget.bind(window.SC.Widget.Events.PLAY, () => {
                updateTrackMetadata(widget);
            });
        }
    };

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (widgetRef.current) {
            widgetRef.current.load(currentTrack.url, {
            color: "#" + themeColor,
            auto_play: true,
            hide_related: true,
            show_comments: false,
            show_user: false,
            show_reposts: false,
            show_teaser: false,
            visual: false,
            callback: () => {
                widgetRef.current.unbind(window.SC.Widget.Events.FINISH);
                widgetRef.current.bind(window.SC.Widget.Events.FINISH, () => {
                handleNext();
                });
            },
            });
        }
    }, [currentTrackIndex]);

    const handleNext = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    };

    const handlePrev = () => {
        setCurrentTrackIndex((prevIndex) =>
        prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <Script src="https://w.soundcloud.com/player/api.js" onLoad={handleScriptLoad} />

            <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 font-mono">
                {/* Control Bar Atas */}
                <div className="flex items-center gap-1 bg-slate-900 border border-cyan-500/50 rounded-lg p-1 shadow-[0_0_15px_rgba(0,243,255,0.2)]">

                    {/* Tombol Prev */}
                    <div className="relative group flex items-center justify-center">
                        <button onClick={handlePrev} className="p-1.5 text-cyan-400 hover:text-white transition-all cursor-pointer">
                            <FaStepBackward size={10} />
                        </button>

                        <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-50">
                            <span className="relative z-10 p-1.5 text-[10px] whitespace-nowrap leading-none text-cyan-400 bg-slate-900 border border-cyan-500/50 rounded shadow-lg">
                                Kembali
                            </span>

                            <div className="w-2 h-2 -mt-1 rotate-45 bg-slate-900 border-r border-b border-cyan-500/50"></div>
                        </div>
                    </div>
                    
                    {/* Tombol Next */}
                    <div className="relative group flex items-center justify-center">
                        <button onClick={handleNext} className="p-1.5 text-cyan-400 hover:text-white transition-all cursor-pointer">
                            <FaStepForward size={10} />
                        </button>

                        {/* Tooltip Kustom Tailwind */}
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-50">
                            <span className="relative z-10 p-1.5 text-[10px] whitespace-nowrap leading-none text-cyan-400 bg-slate-900 border border-cyan-500/50 rounded shadow-lg">
                                Skip
                            </span>

                            <div className="w-2 h-2 -mt-1 rotate-45 bg-slate-900 border-r border-b border-cyan-500/50"></div>
                        </div>
                    </div>

                    {/* Tombol Minimize */}
                    <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-2 px-3 py-1 text-cyan-400 text-xs font-bold tracking-wider cursor-pointer">
                        {isExpanded ? (
                            <>
                                <span>MINIMIZE</span>
                                <FaChevronDown size={10} />
                            </>
                        ) : (
                            <>
                                <FaPlay size={10} className="animate-pulse" />
                                <span>AUDIO SYSTEM</span>
                            </>
                        )}
                    </button>
                </div>

                <div className="w-[187px] overflow-hidden whitespace-nowrap">
                    <div className="inline-block animate-marquee text-xs font-bold text-white">
                        {trackTitle}
                    </div>
                </div>

                {/* Frame Player */}
                <div className={"relative w-[294px] h-[120px] rounded-xl overflow-hidden border border-cyan-500/30 bg-black shadow-2xl transition-all duration-300 " + (isExpanded ? "block scale-100 opacity-100" : "hidden scale-95 opacity-0") }>
                    <iframe ref={iframeRef}
                        width="100%"
                        height="140px"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={initialEmbedUrl}
                        className="absolute top-0 left-0 rounded-xl "
                    ></iframe>
                </div>
            </div>

        </>
    );
}