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
            <tr className="h-14 items-center mx-4 flex flex-row gap-5 justify-between border-b border-space-border
                hover:bg-space-button-hover transition-colors hover:cursor-pointer active:bg-space-button-active
                text-space-text-secondary hover:text-space-text">
                <td className="pl-2 w-2/3">{name}</td>
                <td className="w-1/3 hidden md:flex min-w-[105px] md:justify-center">{distance}</td>
                <td className="pr-2 w-1/3 min-w-[100px] flex justify-end ">{dateISO}</td>
            </tr>
        </>
    )
}