'use client';

// import Preview from "../small-body/Preview";
import EventPreview from "./EventPreview";

export default function SunView() {

    return (
        <>
            <div className="w-full lg:w-[90%] mx-4 sm:w-4/5 md:w-[70%] xl:w-[80%] text-3xl pt-6">
                <div className="border-b pb-4 mx-4 border-space-border">Solar Events</div>
            </div>
            <div className="w-full flex flex-col sm:w-4/5 md:w-[70%] lg:w-[90%] lg:flex-row lg:gap-2 xl:w-[80%] xl:gap-8">
                <div className="w-full flex justify-center lg:basis-1/2">
                    <EventPreview eventType={'sun'} />
                </div>
                <table className="w-full bg-space-background flex flex-col pt-2 pb-4 sm:items-center lg:basis-1/2">
                    {/* <TableHead /> */}
                    {/* <Table
                        selectedEvent={selectedEvent}
                        updateSelectedEvent={updateSelectedEvent}
                        data={data}
                        loading={loading}
                        errorMessage={errorMessage}
                    /> */}
                </table>
            </div>
        </>
    );
}