export type IpApiResponse = {
    status: string,
    message: string,
    country: string,
    countryCode: string,
    regionName: string,
    city: string,
    lat: number,
    lon: number,
    query: string
}