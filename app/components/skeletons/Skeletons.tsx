import TableHead from "../small-body/TableHead";
import { Asteroid, Comet, LunarEclipse, SolarEclipse } from "../ui/Illustrations";
import TextPrimary from "../ui/TextPrimary";

export const TableSkeleton = () => {
    const rowSkeletons = Array(10).fill(null);
    const mappedRowSkeletons = rowSkeletons.map((_, index) => {
        return (
            <tr key={index} className="h-14 flex mx-4 items-center border-b border-space-border gap-4">
                <td className="h-4 bg-space-button w-2/3 animate-pulse rounded-full"></td>
                <td className="h-4 bg-space-button w-1/3 animate-pulse rounded-full hidden md:flex min-w-[105px] md:justify-center"></td>
                <td className="h-4 bg-space-button w-1/3 animate-pulse rounded-full"></td>
            </tr>
        );
    });
    return (
        <div className="w-full flex flex-col sm:w-4/5 md:w-[70%] lg:w-[90%] lg:flex-row lg:gap-2 xl:w-[80%] xl:gap-8">
            <table className="w-full bg-space-background flex flex-col pt-2 pb-4 sm:items-center">
                <TableHead />
                <tbody className="flex flex-col bg-space-background w-full">
                    {mappedRowSkeletons}
                </tbody>
            </table>
        </div>
    );
}

export const DataListSkeleton = () => {
    const skeletonData = Array(8).fill(null);
    const mappedData = skeletonData.map((_, index) => {
        return (
            <li key={index} className="basis-1/2 py-2 animate-pulse">
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

export const PanelSkeleton = ({ eventType }: { eventType: string }) => {
    return (
        <div className="px-4 py-10 w-full flex flex-col bg-space-background sm:w-4/5 sm:mx-auto md:w-[70%] lg:w-[80%] border-b border-space-border">
            <TextPrimary eventType={eventType} />
            <div className="flex flex-row flex-wrap h-[76px] gap-2 mt-4 mb-6 lg:flex-nowrap animate-pulse">
                <div className={`bg-space-button rounded-lg flex flex-col w-1/2 p-3 lg:w-1/3 lg:max-w-[250px]`}></div>
            </div>
            <div className="flex flex-col w-full">
                <header className="flex flex-col items-start gap-1 h-16 justify-center">
                    <div className="h-6 bg-space-button-active rounded-full w-32 mt-1 animate-pulse"></div>
                    <div className="h-4 bg-space-button-active rounded-full w-24 my-1 animate-pulse"></div>
                </header>
                <section className="flex flex-row">
                    <div className="h-52 w-1/3 min-w-[150px] sm:min-w-[180px] bg-black/20 rounded-3xl flex justify-center items-center">
                        { eventType === 'a' && <Asteroid /> }
                        { eventType === 'c' && <Comet /> }
                    </div>
                    <ul className="w-2/3 mx-6 my-4 flex flex-col flex-nowrap md:mx-8 md:pl-6 md:border-l border-space-border">
                        <MainDataSkeleton />
                    </ul>
                </section>
            </div>
            <div className="mt-6 h-11 rounded-md flex justify-center bg-space-button lg:w-64 lg:mx-auto animate-pulse"></div>
        </div>
    );
}

export const EventPanelSkeleton = ({ eventType }: { eventType: string }) => {
    return (
        <div className={`px-4 py-10 w-full flex flex-col bg-space-background sm:w-4/5 sm:mx-auto md:w-[70%] lg:w-[80%] border-b border-space-border
            ${eventType === 'sun' && 'border-b border-space-border'}`}>
            <TextPrimary eventType={eventType} />
            <div className="flex flex-row flex-wrap h-[76px] gap-2 mt-4 mb-6 lg:flex-nowrap animate-pulse">
                <div className={`bg-space-button rounded-lg flex flex-col w-full p-3 lg:w-1/3 lg:max-w-[250px]`}></div>
            </div>
            <div className="flex flex-col w-full">
                <header className="flex flex-col items-start gap-1 h-11 justify-center">
                    <div className="h-6 bg-space-button-active rounded-full w-32 mt-1 animate-pulse"></div>
                </header>
                <section className="flex flex-row">
                    <div className="h-52 w-1/3 min-w-[150px] sm:min-w-[180px] bg-black/20 rounded-3xl flex justify-center items-center">
                        { eventType === 'sun' && <SolarEclipse /> }
                        { eventType === 'moon' && <LunarEclipse /> }
                    </div>
                    <ul className="w-2/3 mx-6 my-4 flex flex-col flex-nowrap md:mx-8 md:pl-6 md:border-l border-space-border">
                        <MainDataSkeleton />
                    </ul>
                </section>
            </div>
        </div>
    );
}