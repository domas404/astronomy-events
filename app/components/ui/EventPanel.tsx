'use client';

import { useAstroEvents } from "@/app/hooks/useAstroEvents";
import { AstronomyApiResponse, EventHighlights } from "@/app/lib/types/astronomy-api";
import { useEffect } from "react";
import { SolarEclipse } from "../ui/Illustrations";
import { HomeDataView } from "../small-body/DataView";
import { HomeDataSkeleton } from "../skeletons/Skeletons";
import { useAppSelector } from "@/app/lib/redux/hooks";

type DataToDisplay = {
    [key: string]: string | undefined;
}

const calculateDuration = (start: string, end: string) => {
    const startTime = (new Date(start)).getTime();
    const endTime = (new Date(end)).getTime();
    return (endTime - startTime);
}

const getDuration = (type: string, eventHighlights: EventHighlights) => {
    switch(type) {
        case 'partial_solar_eclipse':
            if (eventHighlights.partialStart && eventHighlights.partialEnd)
                return calculateDuration(eventHighlights.partialStart.date, eventHighlights.partialEnd.date).toString();
        case 'total_solar_eclipse':
            if (eventHighlights.totalStart && eventHighlights.totalEnd)
                return calculateDuration(eventHighlights.totalStart.date, eventHighlights.totalEnd.date).toString();
        case 'annular_solar_eclipse':
            if (eventHighlights.totalStart && eventHighlights.totalEnd)
                return calculateDuration(eventHighlights.totalStart.date, eventHighlights.totalEnd.date).toString();
        case 'partial_lunar_eclipse':
            if (eventHighlights.partialStart && eventHighlights.partialEnd)
                return calculateDuration(eventHighlights.partialStart.date, eventHighlights.partialEnd.date).toString();
        case 'total_lunar_eclipse':
            if (eventHighlights.fullStart && eventHighlights.fullEnd)
                return calculateDuration(eventHighlights.fullStart.date, eventHighlights.fullEnd.date).toString();
        case 'penumbral_solar_eclipse':
            if (eventHighlights.penumbralStart && eventHighlights.penumbralEnd)
                return calculateDuration(eventHighlights.penumbralStart.date, eventHighlights.penumbralEnd.date).toString();
        default:
            return 'No data';
    }
}

const getStartTime = (type: string, eventHighlights: EventHighlights) => {
    switch(type) {
        case 'partial_solar_eclipse':
            if (eventHighlights.partialStart)
                return eventHighlights.partialStart.date;
        case 'total_solar_eclipse':
            if (eventHighlights.totalStart)
                return eventHighlights.totalStart.date;
        case 'annular_solar_eclipse':
            if (eventHighlights.totalStart)
                return eventHighlights.totalStart.date;
        case 'partial_lunar_eclipse':
            if (eventHighlights.partialStart)
                return eventHighlights.partialStart.date;
        case 'total_lunar_eclipse':
            if (eventHighlights.fullStart)
                return eventHighlights.fullStart.date;
        case 'penumbral_solar_eclipse':
            if (eventHighlights.penumbralStart)
                return eventHighlights.penumbralStart.date;
        default:
            return 'No data';
    }
}

const DataList = ({ data }: { data: AstronomyApiResponse }) => {

    const dataToDisplay: DataToDisplay = {
        event_type: data.data.table.rows[0].cells[0].type,
        date: data.data.table.rows[0].cells[0].eventHighlights.peak?.date,
        obscuration: data.data.table.rows[0].cells[0].extraInfo?.obscuration.toString(),
        duration: getDuration(data.data.table.rows[0].cells[0].type, data.data.table.rows[0].cells[0].eventHighlights),
        startTime: getStartTime(data.data.table.rows[0].cells[0].type, data.data.table.rows[0].cells[0].eventHighlights)
    }
    const mappedData = Object.keys(dataToDisplay).map((key, index) => {
        return <HomeDataView key={index} id={key} value={dataToDisplay[key] ?? 'No data'} index={index} />
    });
    return mappedData;
}

export default function EventPanel() {

    const location = useAppSelector((state) => state.location);

    const { data, loading } = useAstroEvents({
        loaded: (location.latitude && location.longitude) ? true : false,
        body: 'sun',
        lat: location.latitude?.toString(),
        lon: location.longitude?.toString(),
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
                            07:30
                            {/* {
                                loading || !data ?
                                '' :
                                data.data.table.rows[0].cells[0].rise
                            } */}
                        </div>
                        {/* <div className="text-lg">days</div> */}
                    </div>
                </div>
                <div className="w-1/2 bg-space-button rounded-lg flex flex-col p-3 lg:max-w-[250px]">
                    <div className="text-sm text-space-text-secondary">Sunset</div>
                    <div className="flex flex-row gap-1 items-end">
                        <div className="text-2xl font-bold">
                            17:30
                            {/* {
                                loading || !data ?
                                '' :
                                data.data.table.rows[0].cells[0].set
                            } */}
                        </div>
                        {/* <div className="text-lg">comets</div> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-start items-center h-16">
                <div className="flex flex-col items-start gap-1">
                    <div className="text-2xl">Nearest solar eclipse</div>
                    <div className="text-sm md:text-base md:font-semibold font-bold text-space-text-secondary">
                        {/* {
                            loading || !data ?
                            <div className="h-5 bg-space-button-active rounded-full w-32 mt-1 animate-pulse"></div> :
                            data.object?.fullname
                        } */}
                    </div>
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