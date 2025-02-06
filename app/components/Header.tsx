'use client';

import { usePathname } from "next/navigation"
import { useState } from "react";

import { MdMenu } from "react-icons/md";
import Location from "./ui/Location";

const navItems = [
    'asteroids',
    'comets',
    // 'solar-events',
    // 'lunar-events'
];

const navItemNames = [
    'Asteroids',
    'Comets',
    // 'Solar Events',
    // 'Lunar Events'
];

const Logo = () => {
    return (
        <a href="./" className="flex items-center order-2 md:order-1 basis-1/3 justify-center md:justify-start">
            <div className="w-10 h-10 border border-white bg-space-background rounded-full shadow-[0_0_4px] hover:shadow-[0_0_6px_2px] transition-shadow shadow-white"></div>
        </a>
    );
}

export default function Header() {

    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const mappedNavItems = navItems.map((item, index) => {
        return (
            <li key={index} className='flex mx-2 md:w-[116px] md:justify-center md:mx-0'>
                <a
                    href={`./${item}`}
                    className={`w-full flex items-center p-4 rounded-md text-slate-200 
                        hover:cursor-pointer hover:text-white hover:bg-space-button-hover active:bg-space-button-active transition-colors
                        md:w-[108px] md:justify-center md:p-1 md:rounded-full
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
                            <MdMenu size={24} className="text-space-text-secondary" />
                        </button>
                        <ul
                            className={`${menuOpen ? 'visible' : 'invisible'} w-full top-16 gap-1 rounded-lg absolute pb-4
                                flex flex-col border py-2 px-2 border-space-border bg-space-background
                                md:w-auto md:mx-auto md:flex-row md:text-sm md:relative md:top-0 md:rounded-full md:visible md:py-1 md:px-0`}
                        >
                            <li className="md:hidden p-4 mx-5 mb-1 uppercase tracking-wider font-semibold flex
                                text-space-text-secondary border-b border-space-border justify-center">
                                Astronomy Events
                            </li>
                            {mappedNavItems}
                        </ul>
                    </div>
                    <Location />
                </div>
            </nav>
            {
                menuOpen &&
                <div
                    className="z-20 fixed h-full w-full bg-black/20 [backdrop-filter:blur(4px)] md:invisible md:pointer-events-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                ></div>
            }
        </>
    )
}