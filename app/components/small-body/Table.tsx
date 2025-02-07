'use client';

import TableRow from "./TableRow";
import { TableSkeleton } from "../skeletons/Skeletons";
import { TableError } from "../errors/Errors";
import { CloseApproachData, CometApiData } from "@/app/lib/types";

type Props = {
    selectedEvent: CloseApproachData | undefined,
    updateSelectedEvent: (des: string) => void,
    data: CometApiData | undefined,
    loading: boolean,
    errorMessage: string | undefined
}

export default function Table({ selectedEvent, updateSelectedEvent, data, loading, errorMessage }: Props) {
    
    const mappedCometList = data?.data.map((item, index) => {
        const selectedDes = selectedEvent?.des;
        return (
            <TableRow
                key={index}
                des={item.des}
                name={item.fullname}
                date={item.cd}
                dist={item.dist}
                selected={item.des === selectedDes}
                updateSelectedEvent={updateSelectedEvent}
            />
        );
    });

    return (
        <tbody className="flex flex-col bg-space-background w-full">
            {
                loading ?
                <>
                    <TableSkeleton />
                    <tr className="flex flex-col mx-4 py-2">
                        <td className="text-xs text-space-text-secondary">Receiving data...</td>
                        <td className="text-xs text-space-text-secondary">NASA...</td>
                    </tr>
                </>
                :
                (
                    errorMessage ?
                    <>
                        <TableError error={errorMessage} />
                        <tr className="flex flex-col mx-4 py-2">
                            <td className="text-xs text-space-text-secondary">Failed to load data.</td>
                        </tr>
                    </>
                    :
                    <>
                        {mappedCometList}
                        <tr className="flex flex-col mx-4 py-2">
                            <td className="text-xs text-space-text-secondary">Showing {data?.count} closest objects</td>
                            <td className="text-xs text-space-text-secondary">{data?.signature.source}</td>
                        </tr>
                    </>
                )
            }
        </tbody>
    );
}
