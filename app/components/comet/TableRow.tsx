type Props = {
    name: string;
    date: string;
    dist: string;
}

export default function TableRow({ name, date, dist }: Props) {

    const dateISO = (new Date(date)).toISOString().slice(0, 10);
    const distance = parseFloat(dist).toPrecision(4);

    return (
        <>
            <tr className="text-space-text h-14 items-center mx-4 flex flex-row gap-5 justify-between border-b border-space-border">
                <td className="w-2/3">{name}</td>
                <td className="w-1/3 hidden md:flex md:justify-center">{distance}</td>
                <td className="w-1/3 min-w-[100px] flex justify-end text-space-text-secondary">{dateISO}</td>
            </tr>
        </>
    )
}