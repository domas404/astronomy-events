import { Comet } from "../ui/Illustrations";

type cometObject = {
    [key: string]: string
};

const labels: cometObject = {
    lastPerihelion: 'Last perihelion',
    discovered: 'Discovered',
    aphelion: 'Aaphelion',
    perihelion: 'Perihelion',
    totalMagnitude: 'Total magnitude',
    apparentMagnitude: 'Apparent magnitude',
    meanDiameter: 'Mean diameter',
    orbitalSpeed: 'Orbital speed'
}

const data: cometObject = {
    lastPerihelion: '2024-10',
    discovered: '2023-01',
    aphelion: '380 000 AU',
    perihelion: '0.3914 AU',
    totalMagnitude: '6.5',
    apparentMagnitude: '-4.9',
    meanDiameter: '3.2 km',
    orbitalSpeed: '67.33 km/s'
}


export default function Preview() {

    const mappedData = Object.keys(data).map((key, index) => {
        return (
            <li key={index} className="basis-1/2 py-4">
                <div className="text-xs text-slate-400 uppercase font-bold">{labels[key]}</div>
                <div>{data[key]}</div>
            </li>
        )
    })

    return (
        <div className="flex flex-col rounded-3xl bg-[#0F1317] border border-[#30373D] p-6 gap-6 min-w-[400px]">
            <header className="flex flex-col items-center">
                <h1 className="font-semibold">TSUCHINSTAN-ATLAS</h1>
                <p className="font-semibold text-sm text-slate-400">C/2023 A3</p>
            </header>
            <section className="flex flex-row">
                <div className="basis-1/2 flex justify-center">
                    <Comet />
                </div>
                <div className="basis-1/2">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <div className="text-xs text-slate-400 uppercase font-bold">Type</div>
                            <div>Non-periodic</div>
                        </li>
                        <li>
                            <div className="text-xs text-slate-400 uppercase font-bold">Period</div>
                            <div>83 million years</div>
                        </li>
                        <li>
                            <div className="text-xs text-slate-400 uppercase font-bold">Next perihelion</div>
                            <div>-</div>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="bg-black px-8 py-4 rounded-lg flex flex-row">
                    <ul className="flex flex-row flex-wrap">
                        {mappedData}
                    </ul>
                </div>
            </section>
        </div>
    )
}