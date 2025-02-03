import TableHead from "@/app/components/comet/TableHead";
import Table from "@/app/components/comet/Table";
import Preview from "@/app/components/comet/Preview";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Comets | Astronomy Events',
}

export default function Page() {
    return (
        <div className="w-full flex flex-col justify-center mx-auto lg:border-x pt-20 md:pt-24 pb-10 min-h-full
			bg-space-background lg:border-space-border lg:w-[90%] md:max-w-[1200px]">
            <div className="flex flex-col lg:flex-row lg:gap-2 xl:gap-8 lg:w-[90%] xl:w-[80%]">
                <div className="w-full flex justify-center lg:basis-1/2">
                    <Preview />
                </div>
                <table className="w-full bg-space-background flex flex-col pt-2 pb-4 sm:items-center sm:w-4/5 md:w-[70%] mx-auto lg:basis-1/2">
                    <TableHead />
                    <Table />
                </table>
            </div>
        </div>
    );
}