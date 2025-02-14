import { AstronomyApiResponse, EventItem } from "@/app/lib/types/astronomy-api";
import { LunarEclipse, SolarEclipse } from "../ui/Illustrations";
import { HomeDataView } from "../small-body/DataView";
import { getStartTime, getDuration } from "@/app/lib/format-data/format-astronomy";
import { fetchBodyEvents } from "@/app/lib/utils/getAstronomyData";
import { fetchIpAstroData } from "@/app/lib/utils/getIpgeoData";
import TextPrimary from "../ui/TextPrimary";
import TextSecondary from "../ui/TextSecondary";
// import ViewMoreButton from "../ui/ViewMoreButton";
import { LargeBodyCards } from "../ui/CardContainer";
import { cookies } from "next/headers";

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
        lon: 25.16,
        city: 'Kaunas'
    }

    const locationCookie = (await cookies()).get("userLocation")?.value;
    const location = locationCookie ? JSON.parse(decodeURIComponent(locationCookie)) : initialLocation;


    const data = await fetchBodyEvents({
        body: eventType,
        lat:  location.lat.toString(),
        lon: location.lon.toString(),
        from: '2025-01-01',
        to: '2025-12-31',
        time: '08:00:00'
    });

    const ipgeoData = await fetchIpAstroData({
        lat: location.lat.toString(),
        lon: location.lon.toString()
    });

    return (
        <div className={`px-4 py-10 w-full flex flex-col bg-space-background sm:w-4/5 sm:mx-auto md:w-[70%] lg:w-[80%]
            ${eventType === 'sun' && 'border-b border-space-border'}`}>
            <TextPrimary eventType={eventType} />
            <LargeBodyCards eventType={eventType} data={ipgeoData} />
            <TextSecondary eventType={eventType} />
            {/* <div className="bg-space-button rounded-lg p-4 border-space-border"> */}
                <div className="flex flex-row">
                    <div className="h-52 w-1/3 min-w-[150px] sm:min-w-[180px] bg-space-background-darker rounded-3xl flex justify-center items-center">
                        { eventType === 'sun' && <SolarEclipse /> }
                        { eventType === 'moon' && <LunarEclipse /> }
                    </div>
                    <ul className="w-2/3 mx-6 my-4 flex flex-col md:flex-row flex-nowrap md:mx-8 md:flex-wrap md:pl-8 md:border-l border-space-border">

                            <DataList data={data} />
                    </ul>
                </div>
                {/* <ViewMoreButton eventType={eventType} /> */}
            {/* </div> */}
        </div>
    );
}