import { IpgeolocationResponse } from "@/app/lib/types/ip-geolocation-api";
import Card from "./Card";

export const CometCards = () => {
    return (
        <div className="flex flex-row flex-wrap gap-2 mt-4 mb-6 lg:flex-nowrap">
            <Card title={'daysUntilComet'} value={'16'} text={'days'} />
            <Card title={'totalYearly'} value={'2'} text={'comets'} />
        </div>
    );
}

export const AsteroidCards = () => {
    return (
        <div className="flex flex-row flex-wrap gap-2 mt-4 mb-6 lg:flex-nowrap">
            <Card title={'daysUntilAsteroid'} value={'1'} text={'days'} />
            <Card title={'totalYearly'} value={'2450'} text={'asteroids'} />
        </div>
    );
}

export const SunCards = ({ sunrise, sunset, dayLength }: { sunrise: string, sunset: string, dayLength: string }) => {
    return (
        <div className="flex flex-row flex-wrap gap-2 mt-4 mb-6 lg:flex-nowrap">
            <Card title={'sunrise'} value={sunrise} />
            <Card title={'sunset'} value={sunset} />
            <Card title={'dayLength'} value={dayLength} cardFull />
        </div>
    );
}

export const MoonCards = ({ moonrise, moonset, moonPhase }: { moonrise: string, moonset: string, moonPhase: string }) => {
    return (
        <div className="flex flex-row flex-wrap gap-2 mt-4 mb-6 lg:flex-nowrap">
            <Card title={'moonrise'} value={moonrise} />
            <Card title={'moonset'} value={moonset} />
            <Card title={'moonPhase'} value={moonPhase} cardFull />
        </div>
    );
}

export const SmallBodyCards = ({ eventType }: { eventType: 'c' | 'a' }) => {
    if (eventType === 'c') {
        return <CometCards />
    } else {
        return <AsteroidCards />
    }
}

export const LargeBodyCards = ({ eventType, data }: { eventType: 'sun' | 'moon', data: IpgeolocationResponse }) => {
    if (eventType === 'sun') {
        return <SunCards sunrise={data.sunrise} sunset={data.sunset} dayLength={data.day_length} />
    } else {
        return <MoonCards moonrise={data.moonrise} moonset={data.moonset} moonPhase={data.moon_phase} />
    }
}