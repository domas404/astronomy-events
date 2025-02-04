'use client';

import { useEffect, useState } from "react";
import { useFetchClosestCometsQuery } from "../lib/redux/features/cometApi";
import { CloseApproachData } from "../lib/types";

export function useSelectedEvent() {
    const { data, isLoading } = useFetchClosestCometsQuery();
    const [loading, setLoading] = useState(true);

    const [selectedEvent, setSelectedEvent] = useState<CloseApproachData | undefined>(undefined);
    
    useEffect(() => {
        if (!isLoading) {
            setLoading(false);
            setSelectedEvent(data?.data[0]);
        }
    }, [isLoading, data]);

    const updateSelectedEvent = (des: string) => {
        if (data) {
            const newSelectedEvent = data.data.find((item) => item.des === des);
            setSelectedEvent(newSelectedEvent);
        }
    }

    return { selectedEvent, updateSelectedEvent, loading };
}