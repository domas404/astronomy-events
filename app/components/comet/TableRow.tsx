type Props = {
    name: string;
    date: string;
    dist: string;
}

export default function TableRow({ name, date, dist }: Props) {

    const dateISO = (new Date(date)).toISOString().slice(0, 10);
    const distance = parseFloat(dist).toPrecision(4);

    return (
        <tr className="bg-[#0F1317] text-white p-4 flex flex-row gap-5 rounded-lg justify-between">
            <td className="w-1/3">{name}</td>
            <td className="w-1/3 flex justify-center">{distance}</td>
            <td className="w-1/3 flex justify-center">{dateISO}</td>
        </tr>
    )
}