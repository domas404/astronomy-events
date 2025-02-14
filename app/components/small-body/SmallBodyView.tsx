import TableHead from "@/app/components/small-body/TableHead";
import Table from "@/app/components/small-body/Table";
import { fetchClosestBodies } from "@/app/lib/utils/getNasaData";

export default async function SmallBodyView({ kind }: { kind: 'a' | 'c' }) {
    const data = await fetchClosestBodies({ kind, limit: 10 });
    return (
        <>
            <div className="w-full flex flex-col sm:w-4/5 md:w-[70%] lg:w-[90%] lg:flex-row lg:gap-2 xl:w-[80%] xl:gap-8">
                <table className="w-full bg-space-background flex flex-col pt-2 pb-4 sm:items-center">
                    <TableHead />
                    <Table
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