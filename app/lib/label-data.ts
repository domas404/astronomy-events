type Labels = {
    [key: string]: string
};

export const smallBodyLabelMap: Labels = {
    des: 'Name',
    diameter: 'Diameter',
    fullname: 'Full name',
    aphelion: 'Aphelion',
    perihelion: 'Perihelion',
    magnitude: 'Magnitude',
    period: 'Period',
    discovered: 'Discovered',
    last_perihelion: 'Last perihelion',
    orbital_speed: 'Orbital speed',
    closest_approach: 'Closest approach',
    visibility: 'Visibility',
    next_perihelion: 'Next perihelion',
    event_type: 'Type',
    date: 'Date',
    duration: 'Duration',
    obscuration: 'Obscuration',
    startTime: 'Start time'
}

export const smallBodyLabelExplanationMap: Labels = {
    des: 'Name',
    diameter: 'Mean diameter of a celestial body.',
    fullname: 'Full name',
    aphelion: 'The point in an orbit where a celestial body is farthest from the Sun.',
    perihelion: 'The point in an orbit where a celestial body is closest to the Sun.',
    magnitude: 'A measure of the brightness of a celestial object, where lower values indicate brighter objects.',
    period: 'The time it takes for a celestial object to complete one full orbit or cycle.',
    discovered: 'The date object was first observed.',
    last_perihelion: 'The last time object was at the point of its orbit that is closest to the Earth.',
    orbital_speed: 'The velocity at which a celestial object travels along its orbital path around another object.',
    next_perihelion: 'The next time object will be at the point of its orbit that is closest to the Earth.',
    visibility: 'How a celestial object can be viewed from the Earth: with a naked eye, a telescope, or not visible at all.',
    closest_approach: 'The distance from the Earth to the point in an object\'s orbit where it is nearest to Earth.',
    event_type: 'The type of eclipse: full, partial, total or penumbral.',
    date: 'Date of the event.',
    duration: 'Duration of the event.',
    obscuration: 'The percentage of body being covered during the peak of the eclipse.',
    startTime: 'Start of the event.'
}