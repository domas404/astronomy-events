'use client';

import { Asteroid, Comet } from "../ui/Illustrations";
// import { CloseApproachData } from "@/app/lib/types";
import { SBDB_Data } from "@/app/lib/types/SBDB";
// import { useSelectedData } from "@/app/hooks/useSelectedData";
import { DataListSkeleton, MainDataSkeleton } from "../skeletons/Skeletons";
import { DataView } from "./DataView";
import { additionalInfo } from "@/app/lib/locale-text/ui-text";
import { useAppSelector } from "@/app/lib/redux/hooks";

type DataToDisplay = {
    [key: string]: string | undefined;
}

const DataList = ({ data }: { data: SBDB_Data }) => {
    const dataToDisplay: DataToDisplay = {
        last_perihelion: data.ca_data?.last_date,
        discovered: data.orbit?.first_obs,
        perihelion: data.orbit?.perihelion,
        aphelion: data.orbit?.aphelion,
        period: data.orbit?.period,
        magnitude: data.phys_par?.magnitude,
        orbital_speed: data.ca_data?.orbital_speed,
        diameter: data.phys_par?.diameter
    }
    const mappedData = Object.keys(dataToDisplay).map((key, index) => {
        return <DataView key={index} id={key} value={dataToDisplay[key]} />
    });
    return mappedData;
}

type Props = {
    data: SBDB_Data | undefined,
    loading: boolean,
    type: 'comet' | 'asteroid',
}

export default function Preview({ data, loading, type }: Props) {

    // const { data, loading } = useSelectedData({ selectedEvent });
    const { language } = useAppSelector((state) => state.language);
    
    return (
        <div className="flex flex-col p-4 gap-6 w-full">
            <header className="flex flex-col items-start gap-1">
                {
                    loading || !data ?
                    <div className="h-6 bg-space-button-active rounded-full w-32 mt-1 animate-pulse"></div> :
                    <h2 className="text-base md:text-lg md:font-semibold font-bold text-space-text-secondary">
                        { data?.object && data.object.fullname }
                    </h2>
                }
            </header>
            <section className="flex flex-row">
                <div className="h-52 w-1/3 min-w-[150px] sm:min-w-[180px] bg-black/20 rounded-3xl flex justify-center items-center">
                    { type === 'comet' && <Comet /> }
                    { type === 'asteroid' && <Asteroid /> }
                </div>
                <ul className="w-2/3 mx-6 my-4 flex flex-col flex-nowrap md:mx-8 md:pl-6 md:border-l border-space-border">
                    {
                        loading || !data ?
                        <MainDataSkeleton /> :
                        <>
                            <DataView id={'visibility'} value={data.phys_par?.magnitude} />
                            <DataView id={'closest_approach'} value={data.ca_data?.distance} />
                            <DataView id={'next_perihelion'} value={data.ca_data?.closest_date} />
                        </>
                    }
                </ul>
            </section>
            <section>
                <div className="bg-space-button px-6 py-6 rounded-lg flex flex-row">
                    <ul className="flex flex-row flex-wrap w-full gap-y-2">
                        {
                            loading || !data ?
                            <DataListSkeleton />
                            :
                            <DataList data={data} />
                        }
                    </ul>
                </div>
            </section>
            <div className="flex-col text-xs -mt-3 ml-2 text-space-text-secondary">
                <div>{additionalInfo[language].au}</div>
            </div>
        </div>
    )
}
