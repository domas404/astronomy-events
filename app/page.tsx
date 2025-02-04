import Panel from "./components/ui/Panel";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Home | Astronomy Events',
}

export default function Home() {
	return (
		<div className="w-full flex justify-center mx-auto lg:border-x pt-20 md:pt-24 pb-10 min-h-full
			bg-space-background lg:border-space-border lg:w-[90%] md:max-w-[1200px]">
			<main className="w-full flex flex-col items-center gap-8">
				<div className="w-full flex flex-row flex-wrap items-start">
					<Panel itemType="comet" />
					<Panel itemType="asteroid" />
					{/* <Panel itemType="solarEclipse" />
					<Panel itemType="lunarEclipse" /> */}
				</div>
			</main>
		</div>
	);
}
