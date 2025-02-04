import AsteroidView from "@/app/components/asteroid/AsteroidView";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Asteroids | Astronomy Events',
}

export default function Page() {
    return (
        <div className="w-full flex flex-col justify-center mx-auto lg:border-x pt-20 md:pt-24 pb-10 min-h-full
			bg-space-background lg:border-space-border lg:w-[90%] md:max-w-[1200px] items-center">
            <AsteroidView />
        </div>
    );
}