'use client';

import { useAstroEvents } from "@/app/hooks/useAstroEvents";
import { useLocation } from "@/app/hooks/useLocation";
import { AstronomyApiResponse } from "@/app/lib/types/astronomy-api";
import { useEffect } from "react";
import { SolarEclipse } from "../ui/Illustrations";
import { HomeDataItem } from "../small-body/DataView";
import { HomeDataSkeleton } from "../skeletons/Skeletons";

type DataToDisplay = {
    [key: string]: string | undefined;
}

const DataList = ({ data }: { data: AstronomyApiResponse }) => {
    const dataToDisplay: DataToDisplay = {
        eventType: data.data.rows[0].events[0].type,
    }
    const mappedData = Object.keys(dataToDisplay).map((key, index) => {
        return <HomeDataItem key={index} id={key} value={dataToDisplay[key] ?? 'No data'} index={index} />
    });
    return mappedData;
}

export default function SunView() {

    const { data: locationData } = useLocation();

    const { data, loading } = useAstroEvents({
        loaded: locationData ? true : false,
        body: 'sun',
        lat: locationData?.lat.toString(),
        lon: locationData?.lon.toString(),
        from: '2025-01-01',
        to: '2025-12-31',
        time: '08:00:00'
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="px-4 py-6 w-full flex flex-col bg-space-background sm:w-4/5 sm:mx-auto md:w-[70%] lg:w-[80%]">
            <div className="text-3xl capitalize">Solar events</div>
            <div className="flex flex-row gap-2 mt-4 mb-6">
                <div className="w-1/2 bg-space-button rounded-lg flex flex-col p-3 lg:max-w-[250px]">
                    <div className="text-sm text-space-text-secondary">Sunrise</div>
                    <div className="flex flex-row gap-1 items-end">
                        <div className="text-2xl font-bold">
                            {
                                loading || !data ?
                                '' :
                                data.data.rows[0].events[0].rise
                            }
                        </div>
                        {/* <div className="text-lg">days</div> */}
                    </div>
                </div>
                <div className="w-1/2 bg-space-button rounded-lg flex flex-col p-3 lg:max-w-[250px]">
                    <div className="text-sm text-space-text-secondary">Sunset</div>
                    <div className="flex flex-row gap-1 items-end">
                        <div className="text-2xl font-bold">
                            {
                                loading || !data ?
                                '' :
                                data.data.rows[0].events[0].set
                            }
                        </div>
                        {/* <div className="text-lg">comets</div> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-start items-center h-16">
                <div className="flex flex-col items-start gap-1">
                    <div className="text-2xl"></div>
                </div>
            </div>
            <div className="flex flex-row pt-4">
                <div className="h-52 w-1/3 min-w-[150px] sm:min-w-[180px] bg-black/20 rounded-3xl flex justify-center items-center">
                    <SolarEclipse />
                </div>
                <ul className="w-2/3 mx-6 my-4 flex flex-col md:flex-row flex-nowrap md:mx-8 md:flex-wrap md:pl-8 md:border-l border-space-border">
                    {
                        loading || !data ?
                        <HomeDataSkeleton /> :
                        <DataList data={data} />
                    }
                </ul>
            </div>
        </div>
    );
}