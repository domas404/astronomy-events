'use client';

import { useEffect, useState } from "react";
import { CloseApproachData, CometApiData } from "../lib/types";

export function useSelectedBody({ data, loading }: { data: CometApiData | undefined, loading: boolean }) {

    const [selectedEvent, setSelectedEvent] = useState<CloseApproachData | undefined>(undefined);
    
    useEffect(() => {
        if (!loading) {
            setSelectedEvent(data?.data[0]);
        }
    }, [loading, data]);

    const updateSelectedEvent = (des: string) => {
        if (data) {
            const newSelectedEvent = data.data.find((item) => item.des === des);
            setSelectedEvent(newSelectedEvent);
        }
    }

    return { selectedEvent, updateSelectedEvent };
}