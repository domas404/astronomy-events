import { EventHighlights } from "../types/astronomy-api";

const eventTypeMap: { [key: string]: { start: string, end: string } } = {
    'partial_solar_eclipse': {
        start: 'partialStart',
        end: 'partialEnd',
    },
    'total_solar_eclipse': {
        start: 'totalStart',
        end: 'totalEnd',
    },
    'annular_solar_eclipse': {
        start: 'totalStart',
        end: 'totalEnd',
    },
    'partial_lunar_eclipse': {
        start: 'partialStart',
        end: 'partialEnd',
    },
    'total_lunar_eclipse': {
        start: 'fullStart',
        end: 'fullEnd',
    },
    'penumbral_solar_eclipse': {
        start: 'penumbralStart',
        end: 'penumbralEnd',
    }
}

export const calculateDuration = (start: string, end: string) => {
    const startTime = (new Date(start)).getTime();
    const endTime = (new Date(end)).getTime();
    return (endTime - startTime);
}

export const getDuration = (type: string, eventHighlights: EventHighlights) => {
    const start = eventHighlights[eventTypeMap[type].start as keyof EventHighlights];
    const end = eventHighlights[eventTypeMap[type].end as keyof EventHighlights];
    if (start && end) {
        return calculateDuration(start.date, end.date).toString();
    } else {
        return 'No data';
    }
}

export const getStartTime = (type: string, eventHighlights: EventHighlights) => {
    const start = eventHighlights[eventTypeMap[type].start as keyof EventHighlights];
    if (start) {
        return start.date;
    } else {
        return 'No data';
    }
}