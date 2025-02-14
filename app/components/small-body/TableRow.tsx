'use client';

import { useRouter } from "next/navigation";

type Props = {
    name: string,
    des: string,
    date: string,
    dist: string,
    selected: boolean,
    kind: 'a' | 'c',
}

export default function TableRow({ name, des, date, dist, selected, kind }: Props) {

    const dateISO = (new Date(date)).toISOString().slice(0, 10);
    const distance = parseFloat(dist).toFixed(4);

    const router = useRouter();

    const routeToSelectedBody = (href: string) => {
        router.push(href);
    }

    return (
        <>
            <tr
                onClick={() => routeToSelectedBody(`/${kind === 'c' ? 'comets' : 'asteroids'}/${des}`)}
                className={`h-14 items-center mx-4 flex flex-row gap-5 justify-between border-b border-space-border
                    hover:bg-space-button-hover transition-colors hover:cursor-pointer active:bg-space-button-active hover:text-space-text
                    ${selected ? 'bg-space-button text-space-text' : 'text-space-text-secondary'}`}
            >
                <td className="pl-2 w-2/3">{name}</td>
                <td className="w-1/3 hidden md:flex min-w-[105px] md:justify-center">{distance}</td>
                <td className="pr-2 w-1/3 min-w-[100px] flex justify-end ">{dateISO}</td>
            </tr>
        </>
    )
}