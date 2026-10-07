'use client';

import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';
import WeatherCard from "@/components/ui/WeatherCard";

export const NavbarMenu = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },
    {
        id: 2,
        title: 'School Zone',
        link: '#',
    },
    {
        id: 3,
        title: 'Weather',
        link: '#',
    },
    {
        id: 4,
        title: 'Random',
        link: '#',
    },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-50 w-full bg-transparent py-3 md:px-10 lg:px-20">
                <div className="flex w-full items-center justify-between rounded-full border border-white/10 bg-slate-900/[21%] px-3 py-2 text-white shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                    
                    {/* Logo */}
                    <div className="">
                        <a href="/">
                            <img src="/images/D.png" alt="Logo" className="w-5"/>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
                        <ul className="flex gap-9">
                            {NavbarMenu.map((menu) => (
                                <li key={menu.id}>
                                    <a href={menu.link} className="relative cursor-pointer font-medium group">
                                        {menu.title}
                                        <span className="absolute left-0 -bottom-1.25 h-0.75 w-0 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <WeatherCard/>

                    {/* Mobile Menu Button */}
                    <div className="cursor-pointer lg:hidden" onClick={() => setOpen(!open)}>
                        <MdMenu className="text-4xl" />
                    </div>
                </div>
            </nav>

            <ResponsiveMenu open={open} />
        </>
    );
};

export default Navbar;
