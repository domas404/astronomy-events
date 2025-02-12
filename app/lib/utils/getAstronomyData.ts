import { AstronomyApiResponse } from "../types/astronomy-api";

const ASTRONOMY_API_URL = 'https://api.astronomyapi.com/api/v2/bodies/events';

export async function fetchBodyEvents({
    body, lat, lon, from, to, time
}: {
    body?: 'sun' | 'moon',
    lat?: string,
    lon?: string,
    from?: string,
    to?: string,
    time?: string
}) {

    const url = `${ASTRONOMY_API_URL}/${body}?latitude=${lat}&longitude=${lon}&elevation=0&from_date=${from}&to_date=${to}&time=${time}`;

    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": process.env.ASTRONOMY_API_KEY!.toString(),
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data: AstronomyApiResponse = await response.json();

        return data;

    } catch (error) {
        console.error('Error fetching NASA SBDB data:', error);
        throw error;
    }
}