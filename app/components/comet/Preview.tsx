'use client';

import { Comet } from "../ui/Illustrations";
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

type Props = {
    selectedEvent: CloseApproachData | undefined;
}

export default function Preview({ selectedEvent }: Props) {

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
                {/* <div className="basis-1/2 flex justify-center"> */}
                    <div className="h-52 w-1/3 min-w-[150px] sm:min-w-[180px] bg-black/20 rounded-3xl flex justify-center items-center">
                        <Comet />
                    </div>
                {/* </div> */}
                {/* <div className="basis-1/2"> */}
                    <ul className="w-2/3 mx-6 my-4 flex flex-col flex-nowrap md:mx-8 md:pl-8 md:border-l border-space-border">
                        <li className="md:basis-1/2 py-2">
                            <div className="text-xs text-slate-400 uppercase font-bold">Visibility</div>
                            {
                                loading || !data ?
                                <div className="h-4 bg-space-button-active w-28 mt-1 rounded-full animate-pulse"></div> :
                                <div>{ data?.phys_par?.magnitude && (parseFloat(data?.phys_par?.magnitude) < 7 ? 'Naked Eye' : 'Telescope' ) }</div>
                            }
                        </li>
                        <li className="md:basis-1/2 py-2">
                            <div className="text-xs text-slate-400 uppercase font-bold">Closest approach</div>
                            {
                                loading || !data ?
                                <div className="h-4 bg-space-button-active w-28 mt-1 rounded-full animate-pulse"></div> :
                                <div>{ data?.ca_data?.distance && parseFloat(data.ca_data.distance).toPrecision(4).toString() } AU</div>
                            }
                        </li>
                        <li className="md:basis-1/2 py-2">
                            <div className="text-xs text-slate-400 uppercase font-bold">Next perihelion</div>
                            {
                                loading || !data ?
                                <div className="h-4 bg-space-button-active w-28 mt-1 rounded-full animate-pulse"></div> :
                                <div>{ data?.ca_data?.closest_date && (new Date(data.ca_data.closest_date)).toISOString().slice(0, 10) }</div>
                            }
                        </li>
                    </ul>
                {/* </div> */}
            </section>
            <section>
                <div className="bg-space-button px-8 py-4 rounded-lg flex flex-row">
                    <ul className="flex flex-row flex-wrap w-full">
                        {
                            loading ?
                            <DataListSkeleton />
                            :
                            (
                                data ?
                                <DataList data={data} /> :
                                <DataListSkeleton />
                            )
                        }
                        {/* <DataListSkeleton /> */}
                    </ul>
                </div>
            </section>
        </div>
    )
}
