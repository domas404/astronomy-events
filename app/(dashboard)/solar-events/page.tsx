import { Metadata } from "next";
import SunView from "@/app/components/large-body/SunView";

export const metadata: Metadata = {
	title: 'Solar Events | Astronomy Events',
}

export default function Page() {

    return (
        <div className="w-full flex flex-col justify-center mx-auto lg:border-x pt-20 md:pt-24 pb-10 min-h-full
			bg-space-background lg:border-space-border lg:w-[90%] md:max-w-[1200px] items-center">
            <SunView />
        </div>
    );
}