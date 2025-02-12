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

export default function TextSecondary({ eventType, additionalText }: { eventType: string, additionalText?: string }) {

    const { language } = useAppSelector((state) => state.language);

    return (
        <div className="flex flex-col py-2">
            <span className="text-lg capitalize text-space-text">{headingMap[language][eventType]}</span>
            <span className="text-sm font-bold text-space-text-secondary">{additionalText}</span>
        </div>
    );

}