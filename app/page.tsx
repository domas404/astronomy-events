import Panel from "./components/ui/Panel";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Home | Astronomy Events',
}

export default function Home() {
	return (
		<div className="flex justify-center mx-auto border-x pt-20 pb-10
			bg-[#0F1317] border-[#30373D]">
			<main className="flex flex-col items-center gap-8 mt-6">
				<div className="flex flex-col gap-10 flex-wrap items-start h-96">
					{/* <Panel itemType="comet" />
					<Panel itemType="asteroid" />
					<Panel itemType="solarEclipse" />
					<Panel itemType="lunarEclipse" /> */}
				</div>
			</main>
		</div>
	);
}
