export type EventHighlight = {
    date: string,
    altitude: number
}

export type EventItem = {
    type: string,
    eventHighlights: {
        partialStart?: EventHighlight | null,
        partialEnd?: EventHighlight | null,
        totalStart?: EventHighlight | null,
        totalEnd?: EventHighlight | null,
        penumbralStart?: EventHighlight | null,
        penumbralEnd?: EventHighlight | null,
        fullStart?: EventHighlight | null,
        fullEnd?: EventHighlight | null,
        peak?: EventHighlight | null,
    },
    rise?: string,
    set?: string,
    extraInfo?: {
        obscuration: number
    }
}

export type EventRow = {
    body: {
        id: string,
        name: string,
    },
    events: EventItem[]
}

export type AstronomyApiResponse = {
    data: {
        dates: {
            from: string,
            to: string,
        },
        observer: {
            location: {
                longitude: string,
                latitude: string,
                elevation: string
            }
        },
        rows: EventRow[]
    }
}

export type AstroError = {
    path: [],
    property: string,
    message: string,
    schema: {
        latitude: {
            type: string
        },
        longitude: {
            type: string
        },
        elevation: {
            type: string
        },
        from_date: {
            type: string
        },
        to_date: {
            type: string
        },
        time: {
            type: string
        },
        required: string[]
    },
    instance: {
        elevation: string,
        from_date: string,
        longitude: string,
        time: string,
        to_date: string
    },
    name: string,
    argument: string,
    stack: string
}

export type AstronomyApiErrorResponse = {
    statusCode: string,
    errors: AstroError[]
}