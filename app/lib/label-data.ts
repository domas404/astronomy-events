type Labels = {
    [key: string]: {
        [key: string]: {
            name: string,
            description: string,
        }
    }
};

export const labelMap: Labels = {
    en: {
        des: {
            name: 'Name',
            description: 'Name',
        },
        diameter: {
            name: 'Diameter',
            description: 'Mean diameter of a celestial body.',
        },
        fullname: {
            name: 'Full name',
            description: 'Full name',
        },
        aphelion: {
            name: 'Aphelion',
            description: 'The point in an orbit where a celestial body is farthest from the Sun.',
        },
        perihelion: {
            name: 'Perihelion',
            description: 'The point in an orbit where a celestial body is closest to the Sun.',
        },
        magnitude: {
            name: 'Magnitude',
            description: 'A measure of the brightness of a celestial object, where lower values indicate brighter objects.',
        },
        period: {
            name: 'Period',
            description: 'The time it takes for a celestial object to complete one full orbit or cycle.',
        },
        discovered: {
            name: 'Discovered',
            description: 'The date object was first observed.',
        },
        last_perihelion: {
            name: 'Last perihelion',
            description: 'The last time object was at the point of its orbit that is closest to the Earth.',
        },
        orbital_speed: {
            name: 'Orbital speed',
            description: 'The velocity at which a celestial object travels along its orbital path around another object.',
        },
        closest_approach: {
            name: 'Closest approach',
            description: 'The distance from the Earth to the point in an object\'s orbit where it is nearest to Earth.',
        },
        visibility: {
            name: 'Visibility',
            description: 'How a celestial object can be viewed from the Earth: with a naked eye, a telescope, or not visible at all.',
        },
        next_perihelion: {
            name: 'Next perihelion',
            description: 'The next time object will be at the point of its orbit that is closest to the Earth.',
        },
        event_type: {
            name: 'Type',
            description: 'The type of eclipse: full, partial, total or penumbral.',
        },
        date: {
            name: 'Date',
            description: 'Date of the event.',
        },
        duration: {
            name: 'Duration',
            description: 'Duration of the event.',
        },
        obscuration: {
            name: 'Obscuration',
            description: 'The percentage of body being covered during the peak of the eclipse.',
        },
        startTime: {
            name: 'Start time',
            description: 'Start of the event.',
        },
        endTime: {
            name: 'End time',
            description: 'End of the event.',
        },
        peakAltitude: {
            name: 'Peak altitude',
            description: 'Altitude at the peak of the event.',
        },
    },
    lt: {
        des: {
            name: 'Pavadinimas',
            description: 'Name',
        },
        diameter: {
            name: 'Skersmuo',
            description: 'Mean diameter of a celestial body.',
        },
        fullname: {
            name: 'Pilnas pavadinimas',
            description: 'Full name',
        },
        aphelion: {
            name: 'Afelis',
            description: 'Atstumas nuo Saulės iki astronominio objekto orbitos taško, kuomet jis yra labiausiai nutolęs nuo Saulės.',
        },
        perihelion: {
            name: 'Perihelis',
            description: 'Atstumas nuo Saulės iki astronominio objekto orbitos taško, kuomet jis yra arčiausiai Saulės.',
        },
        magnitude: {
            name: 'Ryškis',
            description: 'A measure of the brightness of a celestial object, where lower values indicate brighter objects.',
        },
        period: {
            name: 'Periodas',
            description: 'The time it takes for a celestial object to complete one full orbit or cycle.',
        },
        discovered: {
            name: 'Atradimo data',
            description: 'The date object was first observed.',
        },
        last_perihelion: {
            name: 'Paskutinio perihelio data',
            description: 'The last time object was at the point of its orbit that is closest to the Earth.',
        },
        orbital_speed: {
            name: 'Orbitos greitis',
            description: 'The velocity at which a celestial object travels along its orbital path around another object.',
        },
        closest_approach: {
            name: 'Priartėjimas prie žemės',
            description: 'The distance from the Earth to the point in an object\'s orbit where it is nearest to Earth.',
        },
        visibility: {
            name: 'Matomumas',
            description: 'How a celestial object can be viewed from the Earth: with a naked eye, a telescope, or not visible at all.',
        },
        next_perihelion: {
            name: 'Sekančio perihelio data',
            description: 'The next time object will be at the point of its orbit that is closest to the Earth.',
        },
        event_type: {
            name: 'Užtemimo tipas',
            description: 'The type of eclipse: full, partial, total or penumbral.',
        },
        date: {
            name: 'Data',
            description: 'Date of the event.',
        },
        duration: {
            name: 'Trukmė',
            description: 'Duration of the event.',
        },
        obscuration: {
            name: 'Užtemimo dengiamumas',
            description: 'The percentage of body being covered during the peak of the eclipse.',
        },
        startTime: {
            name: 'Pradžios laikas',
            description: 'Start of the event.',
        },
        endTime: {
            name: 'Pabaigos laikas',
            description: 'End of the event.',
        },
        peakAltitude: {
            name: 'Aukštis užtemimo pike',
            description: 'Altitude at the peak of the event.',
        },
    }
}
