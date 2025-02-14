'use client';

import { useAppSelector } from "@/app/lib/redux/hooks";

type CardTextType = {
    [id: string]: {
        [id: string]: string,
    }
}

const cardTextMap: CardTextType = {
    en: {
        sunrise: 'Sunrise',
        sunset: 'Sunset',
        moonrise: 'Moonrise',
        moonset: 'Moonset',
        dayLength: 'Day length',
        moonPhase: 'Moon phase',
        totalYearly: 'Total this year',
        daysUntilAsteroid: 'Next asteroid in',
        daysUntilComet: 'Next comet in',
        comet: 'comet',
        cometDeci: 'comets',
        comets: 'comets',
        asteroid: 'asteroid',
        asteroidDeci: 'asteroids',
        asteroids: 'asteroids',
        days: 'd.',
    },
    lt: {
        sunrise: 'Teka',
        sunset: 'Leidžiasi',
        moonrise: 'Teka',
        moonset: 'Leidžiasi',
        dayLength: 'Dienos ilgumas',
        moonPhase: 'Mėnulio fazė',
        totalYearly: 'Iš viso šiais metais',
        daysUntilAsteroid: 'Sekantis asteroidas po',
        daysUntilComet: 'Sekanti kometa po',
        comet: 'kometa',
        cometDeci: 'kometų',
        comets: 'kometos',
        asteroid: 'asteroidas',
        asteroidDeci: 'asteroidų',
        asteroids: 'asteroidai',
        days: 'd.',
    }
}

const moonPhases: CardTextType = {
    en: {
        WAXING_CRESCENT: 'Waxing Crescent',
        WAXING_GIBBOUS: 'Waxing Gibbous',
        WANING_CRESCENT: 'Waning Crescent',
        WANING_GIBBOUS: 'Waning Gibbous',
        FULL_MOON: 'Full Moon',
        NEW_MOON: 'New Moon'
    },
    lt: {
        WAXING_CRESCENT: 'Priešpilnis',
        WAXING_GIBBOUS: 'Priešpilnis',
        WANING_CRESCENT: 'Delčia',
        WANING_GIBBOUS: 'Delčia',
        FULL_MOON: 'Pilnatis',
        NEW_MOON: 'Jaunatis'
    }
}

type Props = {
    title: string,
    value: string,
    text?: string,
    titleSuffix? :string,
    cardFull?: boolean
}

export default function Card({ title, value, text, titleSuffix, cardFull }: Props) {

    const { language } = useAppSelector((state) => state.language);


    return (
        <div className={`${ cardFull ? 'w-full' : 'w-[calc(50%-4px)]' } bg-space-button rounded-lg flex flex-col p-3 lg:w-1/3 lg:max-w-[250px]`}>
            <div className="text-sm text-space-text-secondary">{cardTextMap[language][title]} {titleSuffix}</div>
            <div className="flex flex-row gap-1 items-end">
                <div className="text-2xl font-bold">{title === 'moonPhase' ? moonPhases[language][value] : value}</div>
                <div className="text-lg">{text && cardTextMap[language][text]}</div>
            </div>
        </div>
    );
}