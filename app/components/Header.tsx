import Navigation from "./ui/Navigation";
import Location from "./ui/Location";
import Link from "next/link";
import { fetchIpGeoData } from "../lib/utils/getIpgeoData";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center order-2 md:order-1 basis-1/3 justify-center md:justify-start">
            <div className="w-10 h-10 border border-white bg-space-background rounded-full shadow-[0_0_4px] hover:shadow-[0_0_6px_2px] transition-shadow shadow-white"></div>
        </Link>
    );
}

export default async function Header() {

    const locationData = await fetchIpGeoData();
    // const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="w-full flex flex-col fixed z-30 py-4 px-2 border-b border-space-border bg-space-background
                md:justify-center md:flex-row">
                    <div className="flex justify-between relative max-w-[1200px] md:w-[90%]">
                        <Logo />
                        <Navigation />
                        <Location location={locationData} />
                    </div>
            </nav>
            {/* {
                menuOpen &&
                <div
                    className="z-20 fixed h-full w-full bg-black/20 [backdrop-filter:blur(4px)] md:invisible md:pointer-events-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                ></div>
            } */}
        </>
    )
}