import { IpAstronomyResponse, IpGeoLocationResponse } from "../types/ip-geolocation-api";

const IPGEOLOCATION_API_URL = 'https://api.ipgeolocation.io';

export async function fetchIpAstroData({ lat, lon }: { lat: string, lon: string }) {
    const url = `${IPGEOLOCATION_API_URL}/astronomy?apiKey=${process.env.IPGEOLOCATION_API_KEY}&lat=${lat}&long=${lon}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data: IpAstronomyResponse = await response.json();

        return data;

    } catch(error) {
        console.error('Error fetching NASA SBDB data:', error);
        throw error;
    }    
}

export async function fetchIpGeoData() {
    const url = `${IPGEOLOCATION_API_URL}/ipgeo?apiKey=${process.env.IPGEOLOCATION_API_KEY}&fields=geo`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data: IpGeoLocationResponse = await response.json();
        
        return data;

    } catch(error) {
        console.error('Error fetching NASA SBDB data:', error);
        throw error;
    }
}