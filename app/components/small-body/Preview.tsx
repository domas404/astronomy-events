'use client';

import { Asteroid, Comet } from "../ui/Illustrations";
import { CloseApproachData } from "@/app/lib/types";
import { SBDB_Data } from "@/app/lib/types/SBDB";
import { useSelectedData } from "@/app/hooks/useSelectedData";
import { DataListSkeleton, MainDataSkeleton } from "../skeletons/Skeletons";
import { smallBodyLabelMap, smallBodyLabelExplanationMap } from "@/app/lib/label-data";

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
            <li key={index} className="basis-1/2 p-2 my-2 hover:bg-space-button-active rounded-lg group transition-colors">
                <div className="mt-14 -ml-2 rounded-lg p-2 invisible group-hover:visible absolute max-w-48
                    bg-space-button-active transition-all delay-0 group-hover:delay-700 border border-space-border text-sm">
                    {smallBodyLabelExplanationMap[key]}
                </div>
                <div className="text-xs text-slate-400 uppercase font-bold">{smallBodyLabelMap[key]}</div>
                <div>{dataToDisplay![key as keyof SBDB_Data] ? dataToDisplay![key as keyof SBDB_Data] : 'No data'}</div>
            </li>
        )
    });
    return mappedData;
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
        <li className="md:basis-1/2 p-2 hover:bg-space-button-hover rounded-lg group transition-all">
            <div className="mt-14 -ml-2 rounded-lg p-2 invisible group-hover:visible absolute max-w-48
                bg-space-button-active transition-all delay-0 group-hover:delay-700 border border-space-border text-sm">
                {smallBodyLabelExplanationMap['visibility']}
            </div>
            <div className="text-xs text-slate-400 uppercase font-bold">Visibility</div>
            <div>{visibility}</div>
        </li>
    );
}

const ClosestApproach = ({ distance }: { distance: string | undefined }) => {
    let closestApproach = 'No data';
    if (distance)
        closestApproach = parseFloat(distance).toFixed(4).toString();
    return (
        <li className="md:basis-1/2 p-2 hover:bg-space-button-hover rounded-lg group transition-all">
            <div className="mt-14 -ml-2 rounded-lg p-2 invisible group-hover:visible absolute max-w-48
                bg-space-button-active transition-all delay-0 group-hover:delay-700 border border-space-border text-sm">
                {smallBodyLabelExplanationMap['next_perihelion']}
            </div>
            <div className="text-xs text-slate-400 uppercase font-bold">Closest approach</div>
            <div>{closestApproach} AU</div>
        </li>
    );
}

const ClosestApproachDate = ({ date }: { date: string | undefined }) => {
    let closestApproachDate = 'No data';
    if (date)
        closestApproachDate = (new Date(date)).toISOString().slice(0, 10);
    return (
        <li className="md:basis-1/2 p-2 hover:bg-space-button-hover rounded-lg group transition-all">
            <div className="mt-14 -ml-2 rounded-lg p-2 invisible group-hover:visible absolute max-w-48
                bg-space-button-active transition-all delay-0 group-hover:delay-700 border border-space-border text-sm">
                {smallBodyLabelExplanationMap['closest_approach']}
            </div>
            <div className="text-xs text-slate-400 uppercase font-bold">Next perihelion</div>
            <div>{closestApproachDate}</div>
        </li>
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
                <ul className="w-2/3 mx-6 my-4 flex flex-col flex-nowrap md:mx-8 md:pl-6 md:border-l border-space-border">
                    {
                        loading || !data ?
                        <MainDataSkeleton /> :
                        <>
                            <Visibility magnitude={data.phys_par?.magnitude} />
                            <ClosestApproach distance={data.ca_data?.distance} />
                            <ClosestApproachDate date={data.ca_data?.closest_date} />
                        </>
                    }
                </ul>
            </section>
            <section>
                <div className="bg-space-button px-6 py-4 rounded-lg flex flex-row">
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
            <div className="flex-col text-xs -mt-3 ml-2 text-space-text-secondary">
                <div>1 AU - a unit of measurement equal to the average distance from the Earth to the Sun {'(~150M km)'}.</div>
            </div>
        </div>
    )
}
