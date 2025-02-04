'use client';

import { useEffect, useState } from "react";
import { useFetchClosestAsteroidsQuery } from "../lib/redux/features/nasaApi";

export function useAsteroids() {

    const { data, error, isLoading } = useFetchClosestAsteroidsQuery();
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