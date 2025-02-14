import { IpAstronomyResponse } from "@/app/lib/types/ip-geolocation-api";
import Card from "./Card";

const getSmallBodyTextId = (kind: string, total: number) => {
    if (total%10 === 1) {
        return kind;
    } else if (total%10 === 0) {
        return kind + 'Deci';
    } else {
        return kind + 's'
    }
}

export const CometCards = ({ total }: { total: number }) => {
    const cometText = getSmallBodyTextId('comet', total);
    return (
        <div className="flex flex-row flex-wrap gap-2 mt-4 mb-6 lg:flex-nowrap">
            {/* <Card title={'daysUntilComet'} value={'16'} text={'days'} /> */}
            <Card title={'totalYearly'} value={total.toString()} text={cometText} />
        </div>
    );
}

export const AsteroidCards = ({ total }: { total: number }) => {
    const asteroidText = getSmallBodyTextId('asteroid', total);
    return (
        <div className="flex flex-row flex-wrap gap-2 mt-4 mb-6 lg:flex-nowrap">
            {/* <Card title={'daysUntilAsteroid'} value={'1'} text={'days'} /> */}
            <Card title={'totalYearly'} value={total.toString()} text={asteroidText} />
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

export const SmallBodyCards = ({ eventType, total }: { eventType: 'c' | 'a', total: number }) => {
    if (eventType === 'c') {
        return <CometCards total={total} />
    } else {
        return <AsteroidCards total={total} />
    }
}

export const LargeBodyCards = ({ eventType, data }: { eventType: 'sun' | 'moon', data: IpAstronomyResponse }) => {
    if (eventType === 'sun') {
        return <SunCards sunrise={data.sunrise} sunset={data.sunset} dayLength={data.day_length} />
    } else {
        return <MoonCards moonrise={data.moonrise} moonset={data.moonset} moonPhase={data.moon_phase} />
    }
}