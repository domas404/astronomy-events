import { Suspense } from "react";
import EventPanel from "./components/large-body/EventPanel";
import Panel from "./components/small-body/Panel";
import { Metadata } from "next";
import { EventPanelSkeleton, PanelSkeleton } from "./components/skeletons/Skeletons";

export const metadata: Metadata = {
	title: 'Home | Astronomy Events',
}

export default function Home() {
	return (
		<div className="w-full flex justify-center mx-auto lg:border-x pt-16 md:pt-20 pb-10 min-h-full
			bg-space-background lg:border-space-border lg:w-[90%] md:max-w-[1200px]">
			<main className="w-full flex flex-col items-center gap-8">
				<div className="w-full flex flex-row flex-wrap items-start">
					<Suspense fallback={<PanelSkeleton eventType={'c'} />}>
						<Panel kind="c" />
					</Suspense>
					<Suspense fallback={<PanelSkeleton eventType={'a'} />}>
						<Panel kind="a" />
					</Suspense>
					<Suspense fallback={<EventPanelSkeleton eventType={'sun'} />}>
						<EventPanel eventType="sun" />
					</Suspense>
					<Suspense fallback={<EventPanelSkeleton eventType={'moon'} />}>
						<EventPanel eventType="moon" />
					</Suspense>
				</div>
			</main>
		</div>
	);
}
