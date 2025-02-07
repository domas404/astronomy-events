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

const formatISOTime = (startTime: string) => {
    return startTime.slice(11, 16);
}

const formatAltitude = (altitude: string) => {
    return altitude + '°';
}

export const methodMap: { [key: string]: (value: string) => string } = {
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
    startTime: formatISOTime,
    endTime: formatISOTime,
    peakAltitude: formatAltitude
}