import Navigation from "./ui/Navigation";
import Location from "./ui/Location";
import Logo from "./ui/Logo";
import { fetchIpGeoData } from "../lib/utils/getIpgeoData";

export default async function Header() {

    const locationData = await fetchIpGeoData();

    return (
        <nav className="w-full flex flex-col fixed z-30 md:py-4 md:px-2 border-b border-space-border bg-space-background
            md:justify-center md:flex-row">
                <div className="flex justify-between relative max-w-[1200px] md:w-[90%]">
                    <div className="flex items-center order-2 md:order-1 basis-1/3 justify-center md:justify-start">
                        <Logo />
                    </div>
                    <Navigation />
                    <Location location={locationData} />
                </div>
        </nav>
    )
}