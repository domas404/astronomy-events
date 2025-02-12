import { Asteroid, Comet } from "./Illustrations";
import { SBDB_Data } from "@/app/lib/types/SBDB";
import { HomeDataView } from "../small-body/DataView";
import Card from "./Card";
import { fetchClosestBodies, fetchSelectedBody } from "@/app/lib/utils/getNasaData";
import TextPrimary from "./TextPrimary";
import TextSecondary from "./TextSecondary";
import ViewMoreButton from "./ViewMoreButton";

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
            <div className="flex flex-row flex-wrap gap-2 mt-4 mb-6">
                {
                    kind === 'c' ?
                    <>
                        <Card title={'daysUntilComet'} value={'16'} text={'days'} />
                        <Card title={'totalYearly'} value={'2'} text={'comets'} />
                    </> :
                    <>
                        <Card title={'daysUntilAsteroid'} value={'1'} text={'days'} />
                        <Card title={'totalYearly'} value={'2450'} text={'asteroids'} />
                    </>
                }
            </div>
            <div className="flex flex-row justify-start items-center h-16">
                <div className="flex flex-col items-start gap-1">
                    <div className="text-2xl">
                        <TextSecondary eventType={kind} />
                    </div>
                    <div className="text-sm md:text-base md:font-semibold font-bold text-space-text-secondary">
                        {data.object?.fullname}
                    </div>
                </div>
            </div>
            <div className="flex flex-row pt-4">
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