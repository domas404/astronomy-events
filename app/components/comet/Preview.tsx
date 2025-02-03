import { Comet } from "../ui/Illustrations";

type cometObject = {
    [key: string]: string
};

const labels: cometObject = {
    lastPerihelion: 'Last perihelion',
    discovered: 'Discovered',
    aphelion: 'Aphelion',
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
        <div className="flex flex-col p-4 gap-6 sm:w-4/5 md:w-[70%] lg:w-full">
            <header className="flex flex-col items-start gap-1">
                {/* <h1 className="font-semibold">TSUCHINSTAN-ATLAS</h1> */}
                <div className="text-2xl">Nearest comets</div>
                <h1 className="text-base md:text-lg md:font-semibold font-bold text-space-text-secondary">C/2023 A3</h1>
            </header>
            <section className="flex flex-row">
                {/* <div className="basis-1/2 flex justify-center"> */}
                    <div className="h-52 w-1/3 min-w-[150px] sm:min-w-[180px] bg-black/20 rounded-3xl flex justify-center items-center">
                        <Comet />
                    </div>
                {/* </div> */}
                {/* <div className="basis-1/2"> */}
                    <ul className="w-2/3 mx-6 my-4 flex flex-col flex-nowrap md:mx-8 md:pl-8 md:border-l border-space-border">
                        <li className="md:basis-1/2 py-2">
                            <div className="text-xs text-slate-400 uppercase font-bold">Type</div>
                            <div>Non-periodic</div>
                        </li>
                        <li className="md:basis-1/2 py-2">
                            <div className="text-xs text-slate-400 uppercase font-bold">Period</div>
                            <div>83 million years</div>
                        </li>
                        <li className="md:basis-1/2 py-2">
                            <div className="text-xs text-slate-400 uppercase font-bold">Next perihelion</div>
                            <div>-</div>
                        </li>
                    </ul>
                {/* </div> */}
            </section>
            <section>
                <div className="bg-space-button px-8 py-4 rounded-lg flex flex-row">
                    <ul className="flex flex-row flex-wrap">
                        {mappedData}
                    </ul>
                </div>
            </section>
        </div>
    )
}