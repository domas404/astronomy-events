import { IpgeolocationResponse } from "../types/ip-geolocation-api";

const IPGEOLOCATION_API_URL = 'https://api.ipgeolocation.io/astronomy';

export async function fetchIpgeoData({ lat, lon }: { lat: string, lon: string }) {
    const url = `${IPGEOLOCATION_API_URL}?apiKey=${process.env.IPGEOLOCATION_API_KEY}&lat=${lat}&long=${lon}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data: IpgeolocationResponse = await response.json();

        return data;

    } catch(error) {
        console.error('Error fetching NASA SBDB data:', error);
        throw error;
    }    
}