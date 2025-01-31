'use client';

import { usePathname } from "next/navigation"
import { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdMenu } from "react-icons/md";

const navItems = ['asteroids', 'comets', 'solar-events', 'lunar-events'];
const navItemNames = ['Asteroids', 'Comets', 'Solar Events', 'Lunar Events'];

const Logo = () => {
    return (
        <a href="./" className="flex items-center order-2 md:order-1 basis-1/3 justify-center md:justify-start">
            <div className="w-10 h-10 border border-white bg-space-background rounded-full shadow-[0_0_4px] hover:shadow-[0_0_6px_2px] transition-shadow shadow-white"></div>
        </a>
    );
}

const Location = () => {
    return (
        <div className="flex justify-end items-center order-3 basis-1/3">
            <div className="flex flex-row h-8 w-20 justify-center items-center border rounded-full text-space-text-secondary  border-space-border  
                hover:bg-space-button-hover hover:cursor-pointer active:bg-space-button-active">
                <MdOutlineLocationOn size={18} />
                <div className="text-sm">Vilnius</div>
            </div>
        </div>
    );
}

export default function Header() {

    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const mappedNavItems = navItems.map((item, index) => {
        return (
            <li key={index} className='w-full flex md:w-32 md:justify-center'>
                <a
                    href={`./${item}`}
                    className={`w-full flex items-center p-2 pl-4 rounded-md text-slate-200 
                        hover:cursor-pointer hover:text-white hover:bg-space-button-hover active:bg-space-button-active transition-colors
                        md:w-[116px] md:justify-center md:p-1 md:pl-1 md:rounded-full
                        ${pathname === `/${item}` ? 'bg-space-button-active' : 'bg-space-background'}`}
                >
                    {navItemNames[index]}
                </a>
            </li>
        );
    });

    return (
        <>
            <nav
                className="w-full flex flex-col fixed z-30 py-4 px-2 border-b border-space-border bg-space-background
                md:justify-center md:flex-row"
            >
                <div className="flex justify-between relative max-w-[1200px] md:w-[90%]">
                    <Logo />
                    <div className="flex items-center basis-1/3 order-1 md:order-2">
                        <button className="flex items-center p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            <MdMenu size={24} />
                        </button>
                        <ul
                            className={`${menuOpen ? 'visible' : 'invisible'} w-[100%] top-16 rounded-lg absolute
                                flex flex-col border py-2 px-2 border-space-border bg-space-background
                                md:flex-row md:text-sm md:relative md:top-0 md:rounded-full md:visible md:py-1 md:px-0`}
                        >
                            {mappedNavItems}
                        </ul>
                    </div>
                    <Location />
                </div>
            </nav>
            {
                menuOpen &&
                <div
                    className="fixed h-full w-full bg-black/20 [backdrop-filter:blur(4px)] md:invisible md:pointer-events-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                ></div>
            }
        </>
    )
}