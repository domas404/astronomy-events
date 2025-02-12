import { AstronomyApiResponse, EventItem } from "@/app/lib/types/astronomy-api";
import { LunarEclipse, SolarEclipse } from "../ui/Illustrations";
import { HomeDataView } from "../small-body/DataView";
import { getStartTime, getDuration } from "@/app/lib/format-data/format-astronomy";
import Card from "./Card";
import { fetchBodyEvents } from "@/app/lib/utils/getAstronomyData";
import { fetchIpgeoData } from "@/app/lib/utils/getIpgeoData";
import TextPrimary from "./TextPrimary";
import TextSecondary from "./TextSecondary";
import ViewMoreButton from "./ViewMoreButton";

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

export default async function EventPanel({ eventType }: { eventType: 'sun' | 'moon' }) {

    const initialLocation = {
        lat: 54.42,
        lon: 25.16
    }

    const data = await fetchBodyEvents({
        body: eventType,
        lat: initialLocation.lat.toString(),
        lon: initialLocation.lon.toString(),
        from: '2025-01-01',
        to: '2025-12-31',
        time: '08:00:00'
    });

    const ipgeoData = await fetchIpgeoData({
        lat: initialLocation.lat.toString(),
        lon: initialLocation.lon.toString()
    });

    return (
        <div className={`px-4 py-10 w-full flex flex-col bg-space-background sm:w-4/5 sm:mx-auto md:w-[70%] lg:w-[80%]
            ${eventType === 'sun' && 'border-b border-space-border'}`}>
            <TextPrimary eventType={eventType} />
            <div className="flex flex-row flex-wrap mt-4 mb-6 gap-2">
                {
                    eventType === 'sun' ?
                    <>
                        <Card title={'sunrise'} value={ipgeoData.sunrise} />
                        <Card title={'sunset'} value={ipgeoData.sunset} />
                        <Card title={'dayLength'} value={ipgeoData.day_length} cardFull />
                    </> :
                    <>
                        <Card title={'moonrise'} value={ipgeoData.moonrise} />
                        <Card title={'moonset'} value={ipgeoData.moonset} />
                        <Card title={'moonPhase'} value={ipgeoData.moon_phase} cardFull />
                    </>
                }
            </div>
            <div className="flex flex-row justify-start items-end h-10">
                <div className="flex flex-col items-start gap-1">
                    <TextSecondary eventType={eventType} />
                </div>
            </div>
            <div className="flex flex-row pt-4">
                <div className="h-52 w-1/3 min-w-[150px] sm:min-w-[180px] bg-black/20 rounded-3xl flex justify-center items-center">
                    { eventType === 'sun' && <SolarEclipse /> }
                    { eventType === 'moon' && <LunarEclipse /> }
                </div>
                <ul className="w-2/3 mx-6 my-4 flex flex-col md:flex-row flex-nowrap md:mx-8 md:flex-wrap md:pl-8 md:border-l border-space-border">

                        <DataList data={data} />
                </ul>
            </div>
            <ViewMoreButton eventType={eventType} />
        </div>
    );
}