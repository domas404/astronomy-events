export default function TableHead() {
    return (
        <thead>
            <tr className="bg-[#0F1317] text-white p-4 flex flex-row gap-5 rounded-lg justify-between">
                <th className="w-1/3">Name</th>
                <th className="w-1/3 flex justify-center">Distance (AU)</th>
                <th className="w-1/3 flex justify-center">Date</th>
            </tr>
        </thead>
    );
}