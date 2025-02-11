import Preview from "@/app/components/small-body/Preview";
import { fetchSelectedBody } from "@/app/lib/utils/getNasaData";

export default async function SelectedAsteroid({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const selectedBody = await fetchSelectedBody({ des: id });


    return (
        <div className="w-full flex flex-col justify-center mx-auto lg:border-x pt-20 md:pt-24 pb-10 min-h-full
			bg-space-background lg:border-space-border lg:w-[90%] md:max-w-[1200px] items-center">
                <div className="w-full flex flex-col sm:w-4/5 md:w-[70%] lg:w-[80%] lg:flex-row lg:gap-2 xl:w-[70%] xl:gap-8">
                    <Preview data={selectedBody} loading={false} type={'asteroid'} />
                </div>
        </div>
    )
}