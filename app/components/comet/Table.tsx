'use client';

import TableRow from "./TableRow";
import { TableSkeleton } from "../skeletons/Skeletons";
import { TableError } from "../errors/Errors";
import { useComets } from "@/app/hooks/useComets";

export default function Table() {

    const { data, loading, errorMessage } = useComets();

    const mappedCometList = data?.data.map((item, index) => {
        return (
            <TableRow key={index} name={item.fullname} date={item.cd} dist={item.dist} />
        );
    });

    return (
        <tbody className="flex flex-col gap-2">
            {
                loading ?
                <TableSkeleton /> :
                (
                    errorMessage ?
                    <TableError error={errorMessage} /> :
                    mappedCometList
                )
            }
            <tr className="flex justify-between text-sm">
                <td>{data?.signature.source}</td>
                <td>Showing {data?.count} of {data?.total} rows</td>
            </tr>
        </tbody>
    );
}
