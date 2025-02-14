import EventPreview from "./EventPreview";

export default function LargeBodyView({ kind }: { kind: 's' | 'm' }) {
    return (
        <>
            <div className="w-full lg:w-[90%] mx-4 sm:w-4/5 md:w-[70%] xl:w-[80%] text-3xl pt-6">
                <div className="border-b pb-4 mx-4 border-space-border">{kind === 's' ? 'Solar' : 'Lunar'} Events</div>
            </div>
            <div className="w-full flex flex-col sm:w-4/5 md:w-[70%] lg:w-[90%] lg:flex-row lg:gap-2 xl:w-[80%] xl:gap-8">
                <div className="w-full flex justify-center lg:basis-1/2">
                    <EventPreview eventType={kind === 's' ? 'sun' : 'moon'} />
                </div>
            </div>
        </>
    );
}