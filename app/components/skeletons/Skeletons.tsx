export const TableSkeleton = () => {
    const rowSkeletons = Array(10).fill(null);
    const mappedRowSkeletons = rowSkeletons.map((_, index) => {
        return (
            <tr key={index} className="h-14 flex mx-4 items-center border-b border-space-border gap-4">
                <td className="h-4 bg-space-button w-2/3 animate-pulse rounded-full"></td>
                <td className="h-4 bg-space-button w-1/3 animate-pulse rounded-full"></td>
            </tr>
        );
    });
    return mappedRowSkeletons;
}

export const DataListSkeleton = () => {
    const skeletonData = Array(8).fill(null);
    const mappedData = skeletonData.map((_, index) => {
        return (
            <li key={index} className="basis-1/2 py-4 animate-pulse">
                <div className="h-4 w-24 rounded-full bg-space-button-active mb-2"></div>
                <div className="h-4 w-20 rounded-full bg-space-button-active"></div>
            </li>
        )
    });
    return mappedData;
}

export const MainDataSkeleton = () => {
    const skeletonData = Array(3).fill(null);
    const mappedSkeleton = skeletonData.map((_, index) => {
        return (
            <li key={index} className="md:basis-1/2 py-2 animate-pulse">
                <div className="h-4 w-24 rounded-full bg-space-button-active mb-2"></div>
                <div className="h-4 w-20 rounded-full bg-space-button-active"></div>
            </li>
        )
    });
    return mappedSkeleton;
}

export const HomeDataSkeleton = () => {
    const skeletonData = Array(6).fill(null);
    const mappedSkeleton = skeletonData.map((_, index) => {
        return (
            <li key={index} className={`${index > 2 && 'hidden md:block'} md:basis-1/2 py-2 animate-pulse`}>
                <div className="h-4 w-24 rounded-full bg-space-button-active mb-2"></div>
                <div className="h-4 w-20 rounded-full bg-space-button-active"></div>
            </li>
        )
    });
    return mappedSkeleton;
}