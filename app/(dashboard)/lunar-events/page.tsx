import LargeBodyView from "@/app/components/large-body/LargeBodyView";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Lunar Events | Astronomy Events',
}

export default function Page() {
    return (
        <div className="w-full flex flex-col mx-auto lg:border-x pt-20 md:pt-24 pb-10 min-h-full
            bg-space-background lg:border-space-border lg:w-[90%] md:max-w-[1200px] items-center">
            <LargeBodyView kind={'m'} />
        </div>
    )
}