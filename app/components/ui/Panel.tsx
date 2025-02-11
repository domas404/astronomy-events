'use client';

import { Asteroid, Comet } from "./Illustrations";
import { useBodies } from "@/app/hooks/useBodies";
import { SBDB_Data } from "@/app/lib/types/SBDB";
import { HomeDataView } from "../small-body/DataView";
import { useSelectedBody } from "@/app/hooks/useSelectedBody";
import { useSelectedData } from "@/app/hooks/useSelectedData";
import { HomeDataSkeleton } from "../skeletons/Skeletons";
import Card from "./Card";
import { useAppSelector } from "@/app/lib/redux/hooks";
import { headerText, homePanelText } from "@/app/lib/locale-text/ui-text";

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

export default function Panel({ kind }: { kind: 'c' | 'a' }) {

    const { data: bodiesData, loading: bodiesLoading } = useBodies({ kind, limit: 1 });
    const { selectedEvent } = useSelectedBody({ data: bodiesData, loading: bodiesLoading });
    const { data, loading } = useSelectedData({ selectedEvent });
    const { language } = useAppSelector((state) => state.language);

    return (
        <div className="px-4 py-6 w-full flex flex-col bg-space-background sm:w-4/5 sm:mx-auto md:w-[70%] lg:w-[80%]
            border-b border-space-border">
            <div className="text-3xl capitalize">{ kind === 'c' ? headerText[language].comets : headerText[language].asteroids }</div>
            <div className="flex flex-row gap-2 mt-4 mb-6">
                {
                    kind === 'c' ?
                    <>
                        <Card title={'Next comet in'} value={'16'} text={'days'} />
                        <Card title={'Total in 2025'} value={'2'} text={'comets'} />
                    </> :
                    <>
                        <Card title={'Next asteroid in'} value={'1'} text={'day'} />
                        <Card title={'Total in 2025'} value={'2450'} text={'asteroids'} />
                    </>
                }
            </div>
            <div className="flex flex-row justify-start items-center h-16">
                <div className="flex flex-col items-start gap-1">
                    <div className="text-2xl">
                        { kind === 'c' ? homePanelText[language].nearestComet : homePanelText[language].nearestAsteroid }
                    </div>
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
                    { kind === 'c' && <Comet /> }
                    { kind === 'a' && <Asteroid /> }
                </div>
                <ul className="w-2/3 mx-6 my-4 flex flex-col md:flex-row flex-nowrap md:mx-8 md:flex-wrap md:pl-8 md:border-l border-space-border">
                    {
                        loading || !data ?
                        <HomeDataSkeleton /> :
                        <DataList data={data} />
                    }
                </ul>
            </div>
            <a href={ kind === 'c' ? './comets' : './asteroids' } className="mt-6 transition-colors hover:cursor-pointer p-3 rounded-md text-sm flex justify-center
                bg-space-button hover:bg-space-button-hover active:bg-space-button-active
                lg:w-64 lg:mx-auto">
                View all
            </a>
        </div>
    )
}