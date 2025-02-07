'use client';

import { LunarEclipse, SolarEclipse } from "../ui/Illustrations";
import { DataListSkeleton, MainDataSkeleton } from "../skeletons/Skeletons";
import { DataView } from "../small-body/DataView";
import { useAppSelector } from "@/app/lib/redux/hooks";
import { useAstroEvents } from "@/app/hooks/useAstroEvents";
import { AstronomyApiResponse, EventItem } from "@/app/lib/types/astronomy-api";
import { getDuration, getEndTime, getStartTime } from "@/app/lib/format-data/format-astronomy";

type DataToDisplay = {
    [key: string]: string | undefined;
}

const DataList = ({ data }: { data: AstronomyApiResponse }) => {
    const eventItem: EventItem = data.data.table.rows[0].cells[0];
    const dataToDisplay: DataToDisplay = {
        startTime: getStartTime(eventItem.type, eventItem.eventHighlights),
        endTime: getEndTime(eventItem.type, eventItem.eventHighlights),
        duration: getDuration(eventItem.type, eventItem.eventHighlights),
        peakAltitude: eventItem.eventHighlights.peak?.altitude.toString(),
    }
    const mappedData = Object.keys(dataToDisplay).map((key, index) => {
        return <DataView key={index} id={key} value={dataToDisplay[key] ?? 'No data'} />
    });
    return mappedData;
}

type Props = {
    eventType: 'sun' | 'moon',
}

export default function EventPreview({ eventType }: Props) {

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
    
    return (
        <div className="flex flex-col p-4 gap-6 w-full">
            <header className="flex flex-col items-start gap-1">
                {
                    loading || !data ?
                    <div className="h-6 bg-space-button-active rounded-full w-32 mt-1 animate-pulse"></div> :
                    <h2 className="text-base md:text-lg md:font-semibold font-bold text-space-text-secondary">
                        {/* The { data.data.table.header[0].slice(0, 10) } { eventType === 'sun' ? 'solar' : 'lunar' } eclipse */}
                        Nearest { eventType === 'sun' ? 'solar' : 'lunar' } eclipse
                    </h2>
                }
            </header>
            <section className="flex flex-row">
                <div className="h-52 w-1/3 min-w-[150px] sm:min-w-[180px] bg-black/20 rounded-3xl flex justify-center items-center">
                    { eventType === 'sun' && <SolarEclipse /> }
                    { eventType === 'moon' && <LunarEclipse /> }
                </div>
                <ul className="w-2/3 mx-6 my-4 flex flex-col flex-nowrap md:mx-8 md:pl-6 md:border-l border-space-border">
                    {
                        loading || !data ?
                        <MainDataSkeleton /> :
                        <>
                            <DataView id={'event_type'} value={data.data.table.rows[0].cells[0].type} />
                            <DataView id={'date'} value={data.data.table.rows[0].cells[0].eventHighlights.peak?.date} />
                            <DataView id={'obscuration'} value={data.data.table.rows[0].cells[0].extraInfo?.obscuration.toString()} />
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
            {/* <div className="flex-col text-xs -mt-3 ml-2 text-space-text-secondary">
                <div>1 AU - a unit of measurement equal to the average distance from the Earth to the Sun {'(~150M km)'}.</div>
            </div> */}
        </div>
    )
}
