'use client';

import TableHead from "@/app/components/comet/TableHead";
import Table from "@/app/components/comet/Table";
import Preview from "@/app/components/comet/Preview";
import { useSelectedBody } from "@/app/hooks/useSelectedBody";
import { useAsteroids } from "@/app/hooks/useAsteroids";

export default function AsteroidView() {

    const { data, loading, errorMessage } = useAsteroids();
    const { selectedEvent, updateSelectedEvent } = useSelectedBody({ data, loading });

    return (
        <>
            <div className="w-full lg:w-[90%] mx-4 sm:w-4/5 md:w-[70%] xl:w-[80%] text-3xl pt-6">
                <div className="border-b pb-4 mx-4 border-space-border">Asteroids</div>
            </div>
            <div className="w-full flex flex-col sm:w-4/5 md:w-[70%] lg:w-[90%] lg:flex-row lg:gap-2 xl:w-[80%] xl:gap-8">
                <div className="w-full flex justify-center lg:basis-1/2">
                    <Preview selectedEvent={selectedEvent} type={'asteroid'} />
                </div>
                <table className="w-full bg-space-background flex flex-col pt-2 pb-4 sm:items-center lg:basis-1/2">
                    <TableHead />
                    <Table
                        selectedEvent={selectedEvent}
                        updateSelectedEvent={updateSelectedEvent}
                        data={data}
                        loading={loading}
                        errorMessage={errorMessage}
                    />
                </table>
            </div>
        </>
    );
}