export default function TableHead() {
    return (
        <thead className="bg-space-background w-full">
            <tr className="text-space-text py-4 mx-4 flex flex-row gap-5 justify-between border-b border-space-border">
                <th className="pl-2 w-2/3 flex justify-start font-normal">Name</th>
                <th className="w-1/3 hidden md:flex min-w-[105px] justify-center font-normal leading-tight">Distance (AU)</th>
                <th className="pr-2 w-1/3 flex justify-end font-normal">Date</th>
            </tr>
        </thead>
    );
}