type TextItem = {
    [id: string]: {
        [id: string]: string,
    }
}

export const footerText: TextItem = {
    en: {
        learnMore: 'Learn more',
        dataSources: 'Data sources',
    },
    lt: {
        learnMore: 'Daugiau informacijos',
        dataSources: 'Duomenų šaltiniai',
    }
}

export const headerText: TextItem = {
    en: {
        asteroids: 'Asteroids',
        comets: 'Comets',
        solarEvents: 'Solar Events',
        lunarEvents: 'Lunar Events',
    },
    lt: {
        asteroids: 'Asteroidai',
        comets: 'Kometos',
        solarEvents: 'Saulės įvykiai',
        lunarEvents: 'Mėnulio įvykiai',
    }
}

export const additionalInfo: TextItem = {
    en: {
        au: '1 AU - a unit of measurement equal to the average distance from the Earth to the Sun (~150M km).',
    },
    lt: {
        au: '1 AU - vidutinis atstumas nuo Žemės iki Saulės (~150 mln. km).'
    }
}

export const tableHeadText: TextItem = {
    en: {
        name: 'Name',
        distance: 'Distance (AU)',
        date: 'Date',
    },
    lt: {
        name: 'Pavadinimas',
        distance: 'Atstumas (AU)',
        date: 'Data',
    }
}

export const homePanelText: TextItem = {
    en: {
        nearestComet: 'Nearest Comet',
        nearestAsteroid: 'Nearest Asteroid',
    },
    lt: {
        nearestComet: 'Artimiausia kometa',
        nearestAsteroid: 'Artimiausias asteroidas',
    }
}