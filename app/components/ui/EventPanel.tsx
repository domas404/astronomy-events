'use client';

import { useAstroEvents } from "@/app/hooks/useAstroEvents";
import { AstronomyApiResponse, EventItem } from "@/app/lib/types/astronomy-api";
import { LunarEclipse, SolarEclipse } from "../ui/Illustrations";
import { HomeDataView } from "../small-body/DataView";
import { HomeDataSkeleton } from "../skeletons/Skeletons";
import { useAppSelector } from "@/app/lib/redux/hooks";
import { getStartTime, getDuration } from "@/app/lib/format-data/format-astronomy";

type DataToDisplay = {
    [key: string]: string | undefined;
}

const DataList = ({ data }: { data: AstronomyApiResponse }) => {
    const eventItem: EventItem = data.data.table.rows[0].cells[0];
    const dataToDisplay: DataToDisplay = {
        event_type: eventItem.type,
        date: eventItem.eventHighlights.peak?.date,
        obscuration: eventItem.extraInfo?.obscuration.toString(),
        duration: getDuration(eventItem.type, eventItem.eventHighlights),
        startTime: getStartTime(eventItem.type, eventItem.eventHighlights)
    }
    const mappedData = Object.keys(dataToDisplay).map((key, index) => {
        return <HomeDataView key={index} id={key} value={dataToDisplay[key] ?? 'No data'} index={index} />
    });
    return mappedData;
}

export default function EventPanel({ eventType }: { eventType: 'sun' | 'moon' }) {

    const location = useAppSelector((state) => state.location);

    const { data, loading } = useAstroEvents({
        loaded: (location.latitude && location.longitude) ? true : false,
        body: eventType,
        lat: location.latitude?.toString(),
        lon: location.longitude?.toString(),
        from: '2025-01-01',
        to: '2025-12-31',
        time: '08:00:00'
    });

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    return (
        <div className={`px-4 py-6 w-full flex flex-col bg-space-background sm:w-4/5 sm:mx-auto md:w-[70%] lg:w-[80%]
            ${eventType === 'sun' && 'border-b border-space-border'}`}>
            <div className="text-3xl capitalize">{eventType === 'sun' ? 'Solar' : 'Lunar'} events</div>
            <div className="flex flex-row gap-2 mt-4 mb-6">
                <div className="w-1/2 bg-space-button rounded-lg flex flex-col p-3 lg:max-w-[250px]">
                    <div className="text-sm text-space-text-secondary">{eventType === 'sun' ? 'Sun' : 'Moon'}rise</div>
                    <div className="flex flex-row gap-1 items-end">
                        <div className="text-2xl font-bold">
                            07:30
                        </div>
                        {/* <div className="text-lg">days</div> */}
                    </div>
                </div>
                <div className="w-1/2 bg-space-button rounded-lg flex flex-col p-3 lg:max-w-[250px]">
                    <div className="text-sm text-space-text-secondary">{eventType === 'sun' ? 'Sun' : 'Moon'}set</div>
                    <div className="flex flex-row gap-1 items-end">
                        <div className="text-2xl font-bold">
                            17:30
                        </div>
                        {/* <div className="text-lg">comets</div> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-start items-center h-16">
                <div className="flex flex-col items-start gap-1">
                    <div className="text-2xl">Nearest {eventType === 'sun' ? 'solar' : 'lunar'} eclipse</div>
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
                    { eventType === 'sun' && <SolarEclipse /> }
                    { eventType === 'moon' && <LunarEclipse /> }
                </div>
                <ul className="w-2/3 mx-6 my-4 flex flex-col md:flex-row flex-nowrap md:mx-8 md:flex-wrap md:pl-8 md:border-l border-space-border">
                    {
                        loading || !data ?
                        <HomeDataSkeleton /> :
                        <DataList data={data} />
                    }
                </ul>
            </div>
            <a href={eventType === 'sun' ? '/solar-events': '/lunar-events'} className="mt-6 transition-colors hover:cursor-pointer p-3 rounded-md text-sm flex justify-center
                bg-space-button hover:bg-space-button-hover active:bg-space-button-active
                lg:w-64 lg:mx-auto">
                View all
            </a>
        </div>
    );
}