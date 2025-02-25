import TableRow from "./TableRow";
import { TableSkeleton } from "../skeletons/Skeletons";
import { TableError } from "../errors/Errors";
import { SmallBodyApiData } from "@/app/lib/types";

type Props = {
    data: SmallBodyApiData | undefined,
    loading: boolean,
    errorMessage: string | undefined,
    kind: 'a' | 'c',
}

export default function Table({ data, loading, errorMessage, kind }: Props) {
    
    const mappedCometList = data?.data.map((item, index) => {
        return (
            <TableRow
                key={index}
                des={item.des}
                name={item.fullname}
                date={item.cd}
                dist={item.dist}
                selected={false}
                kind={kind}
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
