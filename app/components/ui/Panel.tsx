import { Asteroid, Comet, LunarEclipse, SolarEclipse } from "./Illustrations";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        labels: ['type', 'period', 'next perihelion'],
        data: ['Periodic', '4 years', '2025-02-16']
    },
    asteroid: {
        title: 'Nearest asteroid',
        name: true,
        labels: ['type', 'period', 'next perihelion'],
        data: ['Periodic', '2 years', '2025-01-30']
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
    return (
        <div className=" rounded-2xl p-4 w-[500px] h-[400px] flex flex-col bg-[#0F1317]">
            <div className="flex flex-row justify-start items-center h-16">
                {/* <div className="w-12"></div> */}
                <div className="flex flex-col items-start">
                    <div className="uppercase font-semibold">{item[itemType].title}</div>
                    { item[itemType].name && <div className="text-xs font-bold text-slate-400">323P/SOHO</div> }
                </div>
                {/* <div className="w-12 flex justify-end">
                    <ArrowForwardIcon />
                </div> */}
            </div>
            <div className="h-[1px] bg-slate-700 mt-2"></div>
            <div className="flex flex-row">
                <div className="pt-10 px-4">
                    {itemType === 'comet' && <Comet />}
                    {itemType === 'asteroid' && <Asteroid />}
                    {itemType === 'solarEclipse' && <SolarEclipse />}
                    {itemType === 'lunarEclipse' && <LunarEclipse />}
                </div>
                <div className="w-[1px] h-[100%] mr-2 bg-slate-700"></div>
                <ul className="m-6 flex flex-col gap-4">
                    {
                        item[itemType].labels.map((value, index) => {
                            return (
                                <li key={index}>
                                    <div className="text-xs text-slate-400 uppercase font-bold">{value}</div>
                                    <div>{item[itemType].data[index]}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="bg-[#161c21] hover:bg-[#1b2228] active:bg-[#222a32] mt-6 transition-colors hover:cursor-pointer p-3 rounded-md text-sm flex justify-center">
                View all
            </div>
        </div>
    )
}