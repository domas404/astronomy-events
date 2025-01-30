'use client';

import { useEffect, useState } from "react";
import { useFetchClosestCometsQuery } from "../lib/redux/features/cometApi";

export function useComets() {

    const { data, error, isLoading } = useFetchClosestCometsQuery();
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