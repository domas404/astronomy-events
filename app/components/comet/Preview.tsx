'use client';

import { Asteroid, Comet } from "../ui/Illustrations";
import { CloseApproachData } from "@/app/lib/types";
import { SBDB_Data } from "@/app/lib/types/SBDB";
import { useSelectedData } from "@/app/hooks/useSelectedData";

type cometObject = {
    [key: string]: string
};

const labels: cometObject = {
    des: 'Name',
    diameter: 'Diameter',
    fullname: 'Full name',
    aphelion: 'Aphelion',
    perihelion: 'Perihelion',
    magnitude: 'Magnitude',
    period: 'Period',
    discovered: 'Discovered',
    last_perihelion: 'Last perihelion',
    orbital_speed: 'Orbital speed'
}

type DataToDisplay = {
    [key: string]: string | undefined;
}

const DataList = ({ data }: { data: SBDB_Data }) => {
    const dataToDisplay: DataToDisplay = {
        last_perihelion: data.ca_data?.last_date ? (new Date(data.ca_data.last_date)).toISOString().slice(0, 10) : undefined,
        discovered: data.orbit?.first_obs,
        perihelion: data.orbit?.perihelion + ' AU',
        aphelion: data.orbit?.aphelion + ' AU',
        period: data.orbit?.period ? (parseInt(data.orbit?.period)/365).toPrecision(3).toString() + ' years' : undefined,
        magnitude: data.phys_par?.magnitude,
        orbital_speed: data.ca_data?.orbital_speed + ' km/s',
        diameter: data.phys_par?.diameter
    }
    const mappedData = Object.keys(dataToDisplay!).map((key, index) => {
        return (
            <li key={index} className="basis-1/2 py-4">
                <div className="text-xs text-slate-400 uppercase font-bold">{labels[key]}</div>
                <div>{dataToDisplay![key as keyof SBDB_Data] ? dataToDisplay![key as keyof SBDB_Data] : 'No data'}</div>
            </li>
        )
    });
    return mappedData;
}

const DataListSkeleton = () => {
    const skeletonData = Array(8).fill(null);
    const mappedData = skeletonData.map((_, index) => {
        return (
            <li key={index} className="basis-1/2 py-4 animate-pulse">
                <div className="h-4 w-24 rounded-full bg-space-button-active mb-2"></div>
                <div className="h-4 w-20 rounded-full bg-space-button-active"></div>
            </li>
        )
    });
    return mappedData;
}

const MainDataSkeleton = () => {
    const skeletonData = Array(3).fill(null);
    const mappedSkeleton = skeletonData.map((_, index) => {
        return (
            <li key={index} className="md:basis-1/2 py-2 animate-pulse">
                <div className="h-4 w-24 rounded-full bg-space-button-active mb-2"></div>
                <div className="h-4 w-20 rounded-full bg-space-button-active"></div>
            </li>
        )
    });
    return mappedSkeleton;
}

const Visibility = ({ magnitude }: { magnitude: string | undefined }) => {
    let visibility = 'Not visible';
    if (magnitude) {
        const magnitudeValue = parseFloat(magnitude);
        if (magnitudeValue <= 6) {
            visibility = 'Naked eye';
        } else if (magnitudeValue <= 15) {
            visibility = 'Telescope';
        }
    }
    return (
        <>
            <div className="text-xs text-slate-400 uppercase font-bold">Visibility</div>
            <div>{visibility}</div>
        </>
    );
}

const ClosestApproach = ({ distance }: { distance: string | undefined }) => {
    let closestApproach = 'No data';
    if (distance)
        closestApproach = parseFloat(distance).toFixed(4).toString();
    return (
        <>
            <div className="text-xs text-slate-400 uppercase font-bold">Closest approach</div>
            <div>{closestApproach} AU</div>
        </>
    );
}

const ClosestApproachDate = ({ date }: { date: string | undefined }) => {
    let closestApproachDate = 'No data';
    if (date)
        closestApproachDate = (new Date(date)).toISOString().slice(0, 10);
    return (
        <>
            <div className="text-xs text-slate-400 uppercase font-bold">Next perihelion</div>
            <div>{closestApproachDate}</div>
        </>
    );
}

type Props = {
    selectedEvent: CloseApproachData | undefined,
    type: 'comet' | 'asteroid',
}

export default function Preview({ selectedEvent, type }: Props) {

    const { data, loading } = useSelectedData({ selectedEvent });
    
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
                <ul className="w-2/3 mx-6 my-4 flex flex-col flex-nowrap md:mx-8 md:pl-8 md:border-l border-space-border">
                    {
                        loading || !data ?
                        <MainDataSkeleton /> :
                        <>
                            <li className="md:basis-1/2 py-2">
                                <Visibility magnitude={data.phys_par?.magnitude} />
                            </li>
                            <li className="md:basis-1/2 py-2">
                                <ClosestApproach distance={data.ca_data?.distance} />
                            </li>
                            <li className="md:basis-1/2 py-2">
                                <ClosestApproachDate date={data.ca_data?.closest_date} />
                            </li>
                        
                        </>
                    }
                </ul>
            </section>
            <section>
                <div className="bg-space-button px-8 py-4 rounded-lg flex flex-row">
                    <ul className="flex flex-row flex-wrap w-full">
                        {
                            loading || !data ?
                            <DataListSkeleton />
                            :
                            <DataList data={data} />
                        }
                    </ul>
                </div>
            </section>
        </div>
    )
}
