import { Asteroid, Comet, LunarEclipse, SolarEclipse } from "./Illustrations";

type Props = {
    itemType: string;
}

type ItemType = {
    [key: string]: {
        title: string,
        name: boolean,
        labels: string[],
        data: string[]
    }
}

const item: ItemType = {
    comet: {
        title: 'Nearest comet',
        name: true,
        labels: ['type', 'period', 'next perihelion', 'type', 'period', 'next perihelion'],
        data: ['Periodic', '4 years', '2025-02-16', 'Periodic', '2 years', '2025-01-30']
    },
    asteroid: {
        title: 'Nearest asteroid',
        name: true,
        labels: ['type', 'period', 'next perihelion', 'type', 'period', 'next perihelion'],
        data: ['Periodic', '2 years', '2025-01-30','Periodic', '2 years', '2025-01-30']
    },
    solarEclipse: {
        title: 'Upcoming solar eclipse',
        name: false,
        labels: ['type', 'date', 'visibility in vilnius'],
        data: ['Partial', '2025-11-20', 'Not visible']
    },
    lunarEclipse: {
        title: 'Upcoming lunar eclipse',
        name: false,
        labels: ['type', 'date', 'visibility in vilnius'],
        data: ['Full', '2025-09-17', 'Visible']
    }
}

export default function Panel({ itemType }: Props) {

    const mappedInfo = item[itemType].labels.map((value, index) => {
        return (
            <li key={index} className={`${index > 2 && 'hidden md:block'} md:basis-1/2 py-2`}>
                <div className="text-xs text-space-text-secondary uppercase font-bold">{value}</div>
                <div className="">{item[itemType].data[index]}</div>
            </li>
        )
    });

    return (
        <div className="px-4 py-6 w-full flex flex-col bg-space-background sm:w-4/5 sm:mx-auto md:w-[70%] lg:w-[80%]">
            <div className="text-3xl capitalize">{itemType}s</div>
            <div className="flex flex-row gap-2 mt-4 mb-6">
                <div className="w-1/2 bg-space-button rounded-lg flex flex-col p-3 lg:max-w-[250px]">
                    <div className="text-sm text-space-text-secondary">Next comet in</div>
                    <div className="flex flex-row gap-1 items-end">
                        <div className="text-2xl font-bold">16</div>
                        <div className="text-lg">days</div>
                    </div>
                </div>
                <div className="w-1/2 bg-space-button rounded-lg flex flex-col p-3 lg:max-w-[250px]">
                    <div className="text-sm text-space-text-secondary">Total in 2025</div>
                    <div className="flex flex-row gap-1 items-end">
                        <div className="text-2xl font-bold">2</div>
                        <div className="text-lg">comets</div>
                    </div>
                </div>
                {/* <div className="w-1/3 h-16 bg-space-button rounded-lg"></div> */}
            </div>
            <div className="flex flex-row justify-start items-center h-16">
                <div className="flex flex-col items-start gap-1">
                    <div className="text-2xl">{item[itemType].title}s</div>
                    { item[itemType].name && <div className="text-sm md:text-base md:font-semibold font-bold text-space-text-secondary">323P/SOHO</div> }
                </div>
            </div>
            <div className="flex flex-row pt-4">
                <div className="h-52 w-1/3 min-w-[150px] sm:min-w-[180px] bg-black/20 rounded-3xl flex justify-center items-center">
                    {itemType === 'comet' && <Comet />}
                    {itemType === 'asteroid' && <Asteroid />}
                    {itemType === 'solarEclipse' && <SolarEclipse />}
                    {itemType === 'lunarEclipse' && <LunarEclipse />}
                </div>
                <ul className="w-2/3 mx-6 my-4 flex flex-col md:flex-row flex-nowrap md:mx-8 md:flex-wrap md:pl-8 md:border-l border-space-border">
                    {mappedInfo}
                </ul>
            </div>
            <div className="flex flex-row justify-center gap-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <div className="w-2 h-2 rounded-full border border-slate-400"></div>
                <div className="w-2 h-2 rounded-full border border-slate-400"></div>
            </div>
            <div className="mt-6 transition-colors hover:cursor-pointer p-3 rounded-md text-sm flex justify-center
                bg-space-button hover:bg-space-button-hover active:bg-space-button-active
                lg:w-64 lg:mx-auto">
                View all
            </div>
            {
                itemType !== 'lunarEclipse' &&
                <div className="mt-10 h-[1px] bg-space-border"></div>
            }
        </div>
    )
}