'use client';

import { useEffect, useState } from "react";
import { useFetchLocationQuery } from "../lib/redux/features/locationApi";

export function useLocation() {

    const { data, error, isLoading } = useFetchLocationQuery({});
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