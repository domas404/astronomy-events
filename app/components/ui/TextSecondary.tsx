'use client';

import { useAppSelector } from "@/app/lib/redux/hooks"


type HeadingType = {
    [id: string]: {
        [id: string]: string,
    }
}

const headingMap: HeadingType = {
    en: {
        sun: 'Nearest Solar eclipse',
        moon: 'Nearest Lunar eclipse',
        c: 'Closest comet',
        a: 'Closest Asteroid'
    },
    lt: {
        sun: 'Artimiausias Saulės užtemimas',
        moon: 'Artimiausias Mėnulio užtemimas',
        c: 'Artimiausia kometa',
        a: 'Artimiausias asteroidas'
    }
}

export default function TextSecondary({ eventType }: { eventType: string }) {

    const { language } = useAppSelector((state) => state.language);

    return (
        <div className="text-xl capitalize">
            {headingMap[language][eventType]}
        </div>
    );

}