'use client';

import { Asteroid, Comet } from "./Illustrations";
import { useBodies } from "@/app/hooks/useBodies";
import { SBDB_Data } from "@/app/lib/types/SBDB";
import { HomeDataView } from "../small-body/DataView";
import { useSelectedBody } from "@/app/hooks/useSelectedBody";
import { useSelectedData } from "@/app/hooks/useSelectedData";
import { HomeDataSkeleton } from "../skeletons/Skeletons";

type Props = {
    itemType: string;
}

type ItemType = {
    [key: string]: {
        title: string,
        route: string
    }
}

const item: ItemType = {
    comet: {
        title: 'Nearest comet',
        route: './comets'
    },
    asteroid: {
        title: 'Nearest asteroid',
        route: './asteroids'
    },
}

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

export default function Panel({ itemType }: Props) {

    const kind = itemType === 'comet' ? 'c' : 'a';

    const { data: bodiesData, loading: bodiesLoading } = useBodies({ kind, limit: 1 });
    const { selectedEvent } = useSelectedBody({ data: bodiesData, loading: bodiesLoading });
    const { data, loading } = useSelectedData({ selectedEvent });

    return (
        <div className="px-4 py-6 w-full flex flex-col bg-space-background sm:w-4/5 sm:mx-auto md:w-[70%] lg:w-[80%]
            border-b border-space-border">
            <div className="text-3xl capitalize">{itemType}s</div>
            <div className="flex flex-row gap-2 mt-4 mb-6">
                <div className="w-1/2 bg-space-button rounded-lg flex flex-col p-3 lg:max-w-[250px]">
                    <div className="text-sm text-space-text-secondary">Next comet in</div>
                    <div className="flex flex-row gap-1 items-end">
                        <div className="text-2xl font-bold">16</div>
                        <div className="text-lg">days</div>
                    </div>
                </div>
                <div className="w-1/2 bg-space-button rounded-lg flex flex-col p-3 lg:max-w-[250px]">
                    <div className="text-sm text-space-text-secondary">Total in 2025</div>
                    <div className="flex flex-row gap-1 items-end">
                        <div className="text-2xl font-bold">2</div>
                        <div className="text-lg">comets</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-start items-center h-16">
                <div className="flex flex-col items-start gap-1">
                    <div className="text-2xl">{item[itemType].title}</div>
                    <div className="text-sm md:text-base md:font-semibold font-bold text-space-text-secondary">
                        {
                            loading || !data ?
                            <div className="h-5 bg-space-button-active rounded-full w-32 mt-1 animate-pulse"></div> :
                            data.object?.fullname
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-row pt-4">
                <div className="h-52 w-1/3 min-w-[150px] sm:min-w-[180px] bg-black/20 rounded-3xl flex justify-center items-center">
                    {itemType === 'comet' && <Comet />}
                    {itemType === 'asteroid' && <Asteroid />}
                    {/* {itemType === 'solarEclipse' && <SolarEclipse />}
                    {itemType === 'lunarEclipse' && <LunarEclipse />} */}
                </div>
                <ul className="w-2/3 mx-6 my-4 flex flex-col md:flex-row flex-nowrap md:mx-8 md:flex-wrap md:pl-8 md:border-l border-space-border">
                    {
                        loading || !data ?
                        <HomeDataSkeleton /> :
                        <DataList data={data} />
                    }
                </ul>
            </div>
            {/* <div className="flex flex-row justify-center gap-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-space-text-secondary"></div>
                <div className="w-2 h-2 rounded-full border border-space-text-secondary"></div>
                <div className="w-2 h-2 rounded-full border border-space-text-secondary"></div>
            </div> */}
            <a href={item[itemType].route} className="mt-6 transition-colors hover:cursor-pointer p-3 rounded-md text-sm flex justify-center
                bg-space-button hover:bg-space-button-hover active:bg-space-button-active
                lg:w-64 lg:mx-auto">
                View all
            </a>
            {/* <div className="mt-10 h-[1px] bg-space-border"></div> */}
        </div>
    )
}