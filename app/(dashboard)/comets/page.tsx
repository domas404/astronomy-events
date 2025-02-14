import { TableSkeleton } from "@/app/components/skeletons/Skeletons";
import SmallBodyView from "@/app/components/small-body/SmallBodyView";
import Title from "@/app/components/small-body/Title";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: 'Comets | Astronomy Events',
}

export default function Page() {
    return (
        <div className="w-full flex flex-col justify-center mx-auto lg:border-x pt-20 md:pt-24 pb-10 min-h-full
			bg-space-background lg:border-space-border lg:w-[90%] md:max-w-[1200px] items-center">
                <Title kind={'c'} />
                <Suspense fallback={<TableSkeleton />}>
                    <SmallBodyView kind={'c'} />
                </Suspense>
        </div>
    );
}