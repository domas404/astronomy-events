

export type IpAstronomyResponse = {
    location: {
        latitude: number,
        longitude: number,
    },
    date: string,
    current_time: string,
    sunrise: string,
    sunset: string,
    sun_status: string,
    solar_noon: string,
    day_length: string,
    sun_altitude: number,
    sun_distance: number,
    sun_azimuth: number,
    moonrise: string,
    moonset: string,
    moon_status: string,
    moon_altitude: number,
    moon_distance: number,
    moon_azimuth: number,
    moon_parallactic_angle: number,
    moon_phase: string,
    moon_illumination_percentage: string,
    moon_angle: number
}

export type IpGeoLocationResponse = {
    ip: string,
    continent_code: string,
    continent_name: string,
    country_code2: string,
    country_code3: string,
    country_name: string,
    country_name_official: string,
    is_eu: boolean,
    state_prov: string,
    state_code: string,
    district: string,
    city: string,
    zipcode: string,
    latitude: string,
    longitude: string
}