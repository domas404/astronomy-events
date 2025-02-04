export const TableSkeleton = () => {

    const rowSkeletons = Array(10).fill(null);

    const mappedRowSkeletons = rowSkeletons.map((_, index) => {
        return (
            <tr key={index} className="h-14 flex mx-4 items-center border-b border-space-border gap-4">
                <td className="h-4 bg-space-button w-2/3 animate-pulse rounded-full"></td>
                <td className="h-4 bg-space-button w-1/3 animate-pulse rounded-full"></td>
            </tr>
        );
    })

    return mappedRowSkeletons;
}