export type Highlight = {
    date: string,
    altitude: number
}

export type EventHighlights = {
    partialStart?: Highlight | null,
    partialEnd?: Highlight | null,
    totalStart?: Highlight | null,
    totalEnd?: Highlight | null,
    penumbralStart?: Highlight | null,
    penumbralEnd?: Highlight | null,
    fullStart?: Highlight | null,
    fullEnd?: Highlight | null,
    peak?: Highlight | null,
}

export type EventItem = {
    type: string,
    eventHighlights: EventHighlights,
    rise?: string,
    set?: string,
    extraInfo?: {
        obscuration: number
    }
}

export type EventRow = {
    entry: {
        id: string,
        name: string,
    },
    cells: EventItem[]
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
        table: {
            header: string[],
            rows: EventRow[]
        }
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