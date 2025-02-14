import { DataListSkeleton, MainDataSkeleton } from "@/app/components/skeletons/Skeletons";
import { Comet } from "@/app/components/ui/Illustrations";

export default function LoadingComet() {
    return (
        <div className="w-full flex flex-col justify-center mx-auto lg:border-x pt-20 md:pt-24 pb-10 min-h-full
            bg-space-background lg:border-space-border lg:w-[90%] md:max-w-[1200px] items-center">
                <div className="w-full flex flex-col sm:w-4/5 md:w-[70%] lg:w-[80%] lg:flex-row lg:gap-2 xl:w-[70%] xl:gap-8">
                    <div className="flex flex-col p-4 gap-6 w-full">
                        <header className="flex flex-col items-start gap-1">
                            <div className="h-6 bg-space-button-active rounded-full w-32 mt-1 animate-pulse"></div>
                        </header>
                        <section className="flex flex-row">
                            <div className="h-52 w-1/3 min-w-[150px] sm:min-w-[180px] bg-black/20 rounded-3xl flex justify-center items-center">
                                <Comet />
                            </div>
                            <ul className="w-2/3 mx-6 my-4 flex flex-col flex-nowrap md:mx-8 md:pl-6 md:border-l border-space-border">
                                <MainDataSkeleton />
                            </ul>
                        </section>
                        <section>
                            <div className="bg-space-button px-6 py-6 rounded-lg flex flex-row">
                                <ul className="flex flex-row flex-wrap w-full gap-y-2">
                                    <DataListSkeleton />
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
        </div>
    )
}