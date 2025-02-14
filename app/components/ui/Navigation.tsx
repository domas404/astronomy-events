'use client';

import { usePathname } from "next/navigation"
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { useAppSelector } from "@/app/lib/redux/hooks";
import { headerText } from "@/app/lib/locale-text/ui-text";
import Logo from "./Logo";

const navItems = [
    'asteroids',
    'comets',
    // 'solarEvents',
    // 'lunarEvents'
];

const navItemRoutes = [
    'asteroids',
    'comets',
    'solar-events',
    'lunar-events'
];

export default function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const { language } = useAppSelector((state) => state.language);

    const mappedNavItems = navItems.map((item, index) => {
        return (
            <li key={index} className='flex mx-2 md:w-[116px] md:justify-center md:mx-0'>
                <a
                    href={`/${navItemRoutes[index]}`}
                    className={`w-full flex items-center p-4 rounded-md text-slate-200 
                        hover:cursor-pointer hover:text-white hover:bg-space-button-hover active:bg-space-button-active transition-colors
                        md:w-[108px] md:justify-center md:p-1 md:rounded-full
                        ${pathname === `/${item}` ? 'bg-space-button-active' : 'bg-space-background'}`}
                >
                    {headerText[language][item]}
                </a>
            </li>
        );
    });

    return (
        <>
            <div className="flex items-center basis-1/3 order-1 md:order-2 py-4 md:py-0">
                <button className="flex items-center p-2 md:hidden ml-2" onClick={() => setMenuOpen(!menuOpen)}>
                    <MdMenu size={24} className="text-space-text-secondary" />
                </button>
                <ul
                    className={`${menuOpen ? 'visible' : 'invisible'} w-4/5 top-0 h-screen md:h-auto gap-1 absolute
                        flex flex-col border-r md:border p-2 border-space-border bg-space-background z-30
                        md:w-auto md:mx-auto md:flex-row md:text-sm md:relative md:top-0 md:rounded-full md:visible md:py-1 md:px-0`}
                >
                    <li className="md:hidden pt-4 px-2 flex justify-start items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <MdClose size={24} className="text-space-text-secondary" />
                        </button>
                    </li>
                    <li className="md:hidden p-6 mb-1 flex border-b border-space-border justify-start items-center gap-4">
                        <Logo />
                        <span className="w-32 tracking-wider leading-tight font-semibold text-space-text-secondary">Astronomy Events</span>
                    </li>
                    {mappedNavItems}
                </ul>
            </div>
            {
                menuOpen &&
                <div
                    className="z-20 fixed -top-2 h-screen w-full bg-black/20 [backdrop-filter:blur(4px)] md:invisible md:pointer-events-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                ></div>
            }
        </>
    );
}