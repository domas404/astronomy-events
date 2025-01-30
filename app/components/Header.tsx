'use client';

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";
// import '@/app/globals.css';


export default function Header() {

    const pathURL = usePathname();

    const [pathname, setPathname] = useState('');

    // const pathname = usePathname();

    useEffect(() => {
        setPathname(pathURL.slice(1));
    }, [pathURL]);

    return (
        <nav className="py-4 w-full flex justify-center">
            <div className="max-w-[1200px] w-[80%] min-w-[800px] flex justify-between">
                <div className="w-32 flex items-center">
                    <div className="w-10 h-10 border border-white bg-[#0F1317] rounded-full shadow-[0_0_4px] shadow-white"></div>
                </div>
                <ul className="flex flex-row border rounded-full border-[#30373D] bg-[#0F1317]">
                    <li className={`w-32 flex justify-center py-2 rounded-full text-slate-200
                        hover:cursor-pointer hover:text-white transition-colors
                        ${pathname === 'comets' ? 'bg-[#16282F]' : 'bg-[#0F1317]'}`}>
                        <a href="./comets">Comets</a>
                    </li>
                    <li className={`w-32 flex justify-center py-2 rounded-full text-slate-200
                        hover:cursor-pointer hover:text-white transition-colors
                        ${pathname === 'solar-events' ? 'bg-[#16282F]' : 'bg-[#0F1317]'}`}>
                        <a href="./solar-events">Solar events</a>
                    </li>
                    <li className={`w-32 flex justify-center py-2 rounded-full text-slate-200
                        hover:cursor-pointer hover:text-white transition-colors
                        ${pathname === 'lunar-events' ? 'bg-[#16282F]' : 'bg-[#0F1317]'}`}>
                        <a href="./lunar-events">Lunar events</a>
                    </li>
                </ul>
                <div className="w-32"></div>
            </div>
        </nav>
    )
}