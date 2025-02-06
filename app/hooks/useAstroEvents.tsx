'use client';

import { useEffect, useState } from "react";
import { useFetchBodyEventsQuery } from "../lib/redux/features/astronomyApi";

type Props = {
    body: 'sun' | 'moon' | undefined,
    lat: string | undefined,
    lon: string | undefined,
    from: string | undefined,
    to: string | undefined,
    time: string | undefined,
    loaded: boolean | undefined
}

export function useAstroEvents({ body, lat, lon, from, to, time, loaded }: Props) {
    const { data, error, isLoading } = useFetchBodyEventsQuery({ body, lat, lon, from, to, time }, { skip: !loaded });
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<undefined | string>(undefined);

    useEffect(() => {
        if (!isLoading)
            setLoading(false);
    }, [isLoading]);

    useEffect(() => {
        if (error)
            setErrorMessage(error instanceof Error ? error.message : 'Unknown error');
    }, [error]);

    return { data, loading, errorMessage };
}