import { FaGithub } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="border-t border-[#30373D] min-h-16 bg-[#0F1317]">
            <div className="flex flex-col items-center mx-auto py-10">
                <div className="flex flex-row w-[100%] px-2 gap-4 justify-between">
                    <div className="w-56">
                        <div className="font-semibold mb-4">Data sources</div>
                        <ul className="text-sm text-slate-400">
                            <li>SBDB Query API</li>
                            <li>SBDB Close-Approach Data API</li>
                            <li>SBDB API</li>
                            <li>Sentry API</li>
                            <li>Astronomy API</li>
                        </ul>
                    </div>
                    <div className="w-56">
                        <div className="font-semibold mb-4">Learn more</div>
                        <ul className="text-sm text-slate-400">
                            <li>NASA SBDB</li>
                            <li>...</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div className="w-56 flex flex-col gap-2 items-end justify-between">
                        <div className="flex flex-row gap-2 h-8 items-center rounded-full px-3 text-sm">
                            <div className="font-bold w-5 flex justify-end">EN</div>
                            <div className="w-px bg-[#30373D] h-4"></div>
                            <div className="w-5 text-slate-400 hover:text-white hover:cursor-pointer">LT</div>
                        </div>
                        {/* <div className="font-semibold mb-4">Social</div> */}
                        <div className="w-24 border border-[#30373D] rounded-full h-8 flex justify-center items-center gap-1
                            hover:bg-slate-800 transition-colors hover:cursor-pointer active:bg-slate-700">
                            <FaGithub />
                            <div className="text-sm">GitHub</div>
                        </div>
                    </div>
                </div>
                <div className="pt-6 flex flex-row justify-center items-center w-[100%]">
                    {/* <div className="w-24"></div> */}
                    <div className="text-xs text-slate-400">
                        © 2025 Astronomy Events
                    </div>
                </div>
            </div>
        </div>
    );
}