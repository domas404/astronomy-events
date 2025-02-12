'use client';

import { useAppSelector } from "@/app/lib/redux/hooks"


type HeadingType = {
    [id: string]: {
        [id: string]: string,
    }
}

const headingMap: HeadingType = {
    en: {
        sun: 'Solar events',
        moon: 'Lunar events',
        c: 'Comets',
        a: 'Asteroids'
    },
    lt: {
        sun: 'Saulė',
        moon: 'Mėnulis',
        c: 'Kometos',
        a: 'Asteroidai'
    }
}

export default function TextPrimary({ eventType }: { eventType: string }) {

    const { language } = useAppSelector((state) => state.language);

    return (
        <div className="text-3xl capitalize">
            {headingMap[language][eventType]}
        </div>
    );

}