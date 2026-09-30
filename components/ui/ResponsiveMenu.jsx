'use client';

import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { NavbarMenu } from './Navbar';

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode='wait'>
        {
            open && (
                <motion.div initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -100}} transition={{duration: 0.3}}>
                    
                    <div className="absolute top-21 left-0 z-20 h-screen w-full lg:hidden">
                        <div className='text-xl text-white font-medium py-10 m-6 rounded-3xl bg-slate-900/21 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)]'>
                            <ul className="flex flex-col items-center gap-10">
                                {NavbarMenu.map((menu) => (
                                    <li key={menu.id}>
                                        <a href={menu.link}>
                                            {menu.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default ResponsiveMenu