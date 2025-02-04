'use client';

import { useEffect, useState } from "react";
import { useFetchSelectedCometQuery } from "../lib/redux/features/cometApi";
import { CloseApproachData } from "../lib/types";

export function useSelectedData({ selectedEvent }: { selectedEvent: CloseApproachData | undefined }) {
    
    const [loading, setLoading] = useState(true);
    const { data, isFetching } = useFetchSelectedCometQuery(
        { des: selectedEvent?.des },
        { skip: !selectedEvent }
    );

    useEffect(() => {
        console.log(isFetching);
        if (!isFetching) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [isFetching]);

    return { data, loading };
}