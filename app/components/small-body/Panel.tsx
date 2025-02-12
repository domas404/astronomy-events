import { Asteroid, Comet } from "../ui/Illustrations";
import { SBDB_Data } from "@/app/lib/types/SBDB";
import { HomeDataView } from "./DataView";
import { fetchClosestBodies, fetchSelectedBody } from "@/app/lib/utils/getNasaData";
import TextPrimary from "../ui/TextPrimary";
import TextSecondary from "../ui/TextSecondary";
import ViewMoreButton from "../ui/ViewMoreButton";
import { SmallBodyCards } from "../ui/CardContainer";

type DataToDisplay = {
    [key: string]: string | undefined;
}

const DataList = ({ data }: { data: SBDB_Data }) => {
    const dataToDisplay: DataToDisplay = {
        visibility: data.phys_par?.magnitude,
        closest_approach: data.ca_data?.distance,
        next_perihelion: data.ca_data?.closest_date,
        last_perihelion: data.ca_data?.last_date,
        period: data.orbit?.period,
        diameter: data.phys_par?.diameter
    }
    const mappedData = Object.keys(dataToDisplay).map((key, index) => {
        return <HomeDataView key={index} id={key} value={dataToDisplay[key]} index={index} />
    });
    return mappedData;
}

export default async function Panel({ kind }: { kind: 'c' | 'a' }) {

    const bodiesData = await fetchClosestBodies({ kind, limit: 1 });
    const data = await fetchSelectedBody({ des: bodiesData.data[0].des });

    return (
        <div className="px-4 py-10 w-full flex flex-col bg-space-background sm:w-4/5 sm:mx-auto md:w-[70%] lg:w-[80%]
            border-b border-space-border">
            <TextPrimary eventType={kind} />
            <SmallBodyCards eventType={kind} />
            <TextSecondary eventType={kind} additionalText={data.object?.fullname} />
            <div className="flex flex-row">
                <div className="h-52 w-1/3 min-w-[150px] sm:min-w-[180px] bg-black/20 rounded-3xl flex justify-center items-center">
                    { kind === 'c' && <Comet /> }
                    { kind === 'a' && <Asteroid /> }
                </div>
                <ul className="w-2/3 mx-6 my-4 flex flex-col md:flex-row flex-nowrap md:mx-8 md:flex-wrap md:pl-8 md:border-l border-space-border">
                    <DataList data={data} />
                </ul>
            </div>
            <ViewMoreButton eventType={kind} />
        </div>
    )
}