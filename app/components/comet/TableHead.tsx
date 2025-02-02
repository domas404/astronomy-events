export default function TableHead() {
    return (
        <thead className="bg-space-background">
            <tr className="text-space-text py-4 mx-4 flex flex-row gap-5 justify-between border-b border-space-border">
                <th className="w-2/3 md:w-1/3 flex justify-start">Name</th>
                <th className="w-1/3 hidden md:flex justify-center">Distance (AU)</th>
                <th className="w-1/3 flex justify-center">Date</th>
            </tr>
        </thead>
    );
}