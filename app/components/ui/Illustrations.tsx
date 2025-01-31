import Image from "next/image";

import asteroidIcon from '../../../public/images/asteroid.png';

export const Comet = () => {
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center relative -rotate-[30deg] w-28">
                <div className="[clip-path:polygon(0%_0%,100%_0%,65%_100%,35%_100%)] w-[90px] h-28
                [background:linear-gradient(0deg,#508CA4_0%,#508CA4_10%,#508CA450_40%,#508CA420_60%,#16282F00)]">
                </div>
                <div className="w-[28px] h-[28px] rounded-full z-10 flex justify-center items-end absolute -mb-[10px] bottom-0
                    [background:linear-gradient(0deg,#508CA4_0%,#508CA4_50%,#16282F00)]">
                    <div className="w-[18px] h-[18px] rounded-full bg-white mb-[2px]"></div>
                </div>
            </div>
        </div>
    );
}

export const Asteroid = () => {
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center relative -rotate-[30deg] w-28">
                <div className="[clip-path:polygon(0%_0%,100%_0%,65%_100%,35%_100%)] w-[90px] h-28
                    [background:linear-gradient(0deg,#a47450_0%,#a47450_10%,#a4745050_40%,#a4745020_60%,#16282F00)]">
                </div>
                <div className="w-[28px] h-[28px] rounded-full z-10 flex justify-center items-end absolute -mb-[10px] bottom-0
                    [background:linear-gradient(0deg,#a47450_0%,#a47450_50%,#16282F00)]">
                </div>
                <Image className="rotate-12 absolute z-20 -mb-[12px] -ml-[5px] bottom-0" src={asteroidIcon} alt='' width={30} />
            </div>
        </div>
    );
}

export const SolarEclipse = () => {
    return (
        <div className="">
            <div className="w-28 h-28 flex justify-center items-center">
                <div className="relative w-[76px] h-[76px]">
                    <div className="absolute h-[76px] w-[76px] rounded-full bg-yellow-300"></div>
                    <div className="absolute h-[70px] w-[70px] rounded-full bg-black left-2 top-2"></div>
                </div>
            </div>
        </div>
    );
}

export const LunarEclipse = () => {
    return (
        <div className="">
            <div className="relative w-28 h-28 flex justify-center items-center">
                {/* <div className="relative w-20 h-20"> */}
                    <div className="absolute h-[70px] w-[70px] opacity-80 rounded-full bg-[#961F1F] -rotate-45">
                        <div className="absolute h-[20px] w-[20px] rounded-full bg-red-950 shadow-inner top-[6px] left-4 opacity-80"></div>
                        <div className="absolute h-[14px] w-[14px] rounded-full bg-red-950 opacity-30 top-6 left-12"></div>
                        <div className="absolute h-4 w-4 rounded-full bg-red-950 opacity-70 top-12 left-6"></div>
                        <div className="absolute h-3 w-3 rounded-full bg-red-950 opacity-50 top-8 left-[2px]"></div>
                        <div className="absolute h-3 w-3 rounded-full bg-red-950 opacity-50 top-12 left-12"></div>
                    </div>
                    <div className="absolute h-[60px] w-[60px] ml-[10px] -mt-[10px] bg-black rounded-full opacity-30"></div>
                {/* </div> */}
            </div>
        </div>
    );
}