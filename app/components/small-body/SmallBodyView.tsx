// 'use client';

import TableHead from "@/app/components/small-body/TableHead";
import Table from "@/app/components/small-body/Table";
// import Preview from "@/app/components/small-body/Preview";
import { fetchClosestBodies } from "@/app/lib/utils/getNasaData";
// import { useSelectedBody } from "@/app/hooks/useSelectedBody";
// import { useBodies } from "@/app/hooks/useBodies";

export default async function SmallBodyView({ kind }: { kind: 'a' | 'c' }) {

    // const { data, loading, errorMessage } = useBodies({ kind, limit: 10 });
    // const { selectedEvent, updateSelectedEvent } = useSelectedBody({ data, loading });

    const data = await fetchClosestBodies({ kind, limit: 10 });
    // const selectedBody = await fetchSelectedBody({ des: data.data[0].des });

    // const updateSelectedEvent = (des: string) => { console.log(des) };

    return (
        <>
            <div className="w-full lg:w-[90%] mx-4 sm:w-4/5 md:w-[70%] xl:w-[80%] text-3xl pt-6">
                <div className="border-b pb-4 mx-4 border-space-border">{ kind === 'c' ? 'Comets' : 'Asteroids' }</div>
            </div>
            <div className="w-full flex flex-col sm:w-4/5 md:w-[70%] lg:w-[90%] lg:flex-row lg:gap-2 xl:w-[80%] xl:gap-8">
                {/* <div className="w-full flex justify-center lg:basis-1/2">
                    <Preview data={selectedBody} loading={false} type={kind === 'c' ? 'comet' : 'asteroid'} />
                </div> */}
                <table className="w-full bg-space-background flex flex-col pt-2 pb-4 sm:items-center">
                    <TableHead />
                    <Table
                        // selectedEvent={selectedEvent}
                        // updateSelectedEvent={updateSelectedEvent}
                        data={data}
                        loading={data ? false : true}
                        errorMessage={undefined}
                        kind={kind}
                    />
                </table>
            </div>
        </>
    );
}