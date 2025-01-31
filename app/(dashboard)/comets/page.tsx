import TableHead from "@/app/components/comet/TableHead";
import Table from "@/app/components/comet/Table";
import Preview from "@/app/components/comet/Preview";

export default function Page() {
    return (
        <div className="max-w-[1100px] w-[80%] min-w-[800px] flex flex-row gap-4 mt-6">
            <div className="basis-2/5">
                <Preview />
            </div>
            <table className="basis-3/5 flex flex-col gap-4">
                <TableHead />
                <Table />
            </table>
        </div>
    );
}