import TableHead from "@/app/components/comet/TableHead";
import Table from "@/app/components/comet/Table";
// import Preview from "@/app/components/comet/Preview";

export default function Page() {
    return (
        <div className="w-full flex justify-center mx-auto lg:border-x pt-20 md:pt-24 pb-10 min-h-full
			bg-space-background lg:border-space-border lg:w-[90%] md:max-w-[1200px]">
            {/* <div className="basis-2/5">
                <Preview />
            </div> */}
            <table className="w-full bg-space-background flex flex-col pt-2 pb-4">
                <TableHead />
                <Table />
            </table>
        </div>
    );
}