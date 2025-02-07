import { labelMap } from "@/app/lib/label-data";

export const HomeDataItem = ({ id, value, index }: { id: string, value: string, index: number }) => {
    return (
        <li className={`${index > 2 && 'hidden md:block'} basis-1/2 p-2 hover:bg-space-button-active rounded-lg group transition-colors`}>
            <div className="mt-14 -ml-2 rounded-lg p-2 invisible group-hover:visible absolute max-w-48
                bg-space-button-active transition-all delay-0 group-hover:delay-700 border border-space-border text-sm">
                {labelMap[id].description}
            </div>
            <div className="text-xs text-space-text-secondary uppercase font-bold">{labelMap[id].name}</div>
            <div>{value}</div>
        </li>
    )
}

const DataItem = ({ id, value }: { id: string, value: string }) => {
    return (
        <li className="basis-1/2 p-2 hover:bg-space-button-active rounded-lg group transition-colors">
            <div className="mt-14 -ml-2 rounded-lg p-2 invisible group-hover:visible absolute max-w-48
                bg-space-button-active transition-all delay-0 group-hover:delay-700 border border-space-border text-sm">
                {labelMap[id].description}
            </div>
            <div className="text-xs text-space-text-secondary uppercase font-bold">{labelMap[id].name}</div>
            <div>{value}</div>
        </li>
    )
}

const formatVisibility = (magnitude: string) => {
    const magnitudeValue = parseFloat(magnitude);
    if (magnitudeValue <= 6) {
        return 'Naked eye';
    } else if (magnitudeValue <= 15) {
        return 'Telescope';
    } else {
        return 'Not visible';
    }
}

const formatDate = (date: string) => {
    return (new Date(date)).toISOString().slice(0, 10);
}

const formatClosestApproach = (distance: string) => {
    return parseFloat(distance).toFixed(4).toString() + ' AU';
}

const formatPeriod = (period: string) => {
    return (parseInt(period)/365).toPrecision(3).toString() + ' years';
}

const formatDistance = (distance: string) => {
    return distance + ' AU';
}

const formatOrbitalSpeed = (speed: string) => {
    return speed + ' km/s';
}

const formatMagnitude = (magnitude: string) => {
    return magnitude;
}

const formatDiameter = (diameter: string) => {
    return diameter + ' m';
}

const formatEventType = (eventType: string) => {
    switch(eventType) {
        case 'partial_solar_eclipse':
            return 'Partial';
        case 'total_solar_eclipse':
            return 'Total';
        case 'annular_solar_eclipse':
            return 'Annular';
        case 'partial_lunar_eclipse':
            return 'Partial';
        case 'total_lunar_eclipse':
            return 'Total';
        case 'penumbral_lunar_eclipse':
            return 'Penumbral';
        default:
            return 'No data';
    }
}

const formatTime = (time: string) => {
    const timeInt = parseInt(time);
    const ms = timeInt % 1000;
    let s = (timeInt - ms) / 1000;
    const secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;
    const hrs = (s - mins) / 60;
    return hrs + 'h ' + mins + 'min';
}

const formatObscuration = (obscuration: string) => {
    const obscurationFloat = parseFloat(obscuration);
    const obscurationPercentage = obscurationFloat*100;
    return Math.floor(obscurationPercentage) + '%';
}

const formatStartTime = (startTime: string) => {
    return startTime.slice(11, 16);
}

const formatAltitude = (altitude: string) => {
    return altitude + '°';
}

const methodMap: { [key: string]: (value: string) => string } = {
    diameter: formatDiameter,
    aphelion: formatDistance,
    perihelion: formatDistance,
    magnitude: formatMagnitude,
    period: formatPeriod,
    discovered: formatDate,
    last_perihelion: formatDate,
    orbital_speed: formatOrbitalSpeed,
    closest_approach: formatClosestApproach,
    visibility: formatVisibility,
    next_perihelion: formatDate,
    event_type: formatEventType,
    date: formatDate,
    duration: formatTime,
    obscuration: formatObscuration,
    startTime: formatStartTime,
    endTime: formatStartTime,
    peakAltitude: formatAltitude
}

export const DataView = ({ id, value }: { id: string, value: string | undefined }) => {
    if (value) {
        return <DataItem id={id} value={methodMap[id](value)} />
    } else {
        return <DataItem id={id} value={'No data'} />
    }
}

export const HomeDataView = ({ id, value, index }: { id: string, value: string | undefined, index: number }) => {
    if (value) {
        return <HomeDataItem id={id} value={methodMap[id](value)} index={index} />
    } else {
        return <HomeDataItem id={id} value={'No data'} index={index} />
    }
}