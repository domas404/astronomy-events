import { SmallBodyApiResponse, SmallBodyApiData, CloseApproachData, SmallBodyTotalApiResponse } from "../types";
import { SBDB_Data, SBDB_Response } from "../types/SBDB";

const NASA_SBDB_API_URL = 'https://ssd-api.jpl.nasa.gov';

export async function fetchClosestBodies({ kind, limit }: { kind: 'a' | 'c', limit: number }) {

    const url = `${NASA_SBDB_API_URL}/cad.api?kind=${kind}&date-max=%2B2500&dist-max=0.5&sort=date&diameter=true&fullname=true&limit=${limit}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data: SmallBodyApiResponse = await response.json();
        const keys = data.fields;
        const individualBodyData = data.data.map((item) => {
            return item.reduce((acc, value, index) => {
                acc[keys[index]] = value ?? null;
                return acc;
            }, {} as Record<string, string | null>);
        });
        const transformedData: SmallBodyApiData = {
            signature: data.signature,
            fields: data.fields,
            total: data.total,
            count: data.count,
            data: [...individualBodyData] as CloseApproachData[]
        }
        return transformedData;
        
    } catch (error) {
        console.error('Error fetching NASA SBDB data:', error);
        throw error;
    }
}

export async function fetchSelectedBody({ des }: { des?: string }){

    const url = `${NASA_SBDB_API_URL}/sbdb.api?des=${des}&phys-par=true&ca-data=true&vi-data=true&ca-body=Earth`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data: SBDB_Response = await response.json();

        const today = (new Date()).getTime();
        const nextClosestApproach = data.ca_data.findIndex((item) => (new Date(item.cd)).getTime() > today);
        const lastClosestApproach = nextClosestApproach > 0 ? nextClosestApproach-1 : 0;

        const elements = data.orbit.elements ?? [];

        const cometData: SBDB_Data = {
            signature: data.signature,
            orbit: {
                first_obs: data.orbit.first_obs as string,
                perihelion: elements.find((item) => item.name === 'q')?.value,
                aphelion: elements.find((item) => item.name === 'ad')?.value,
                period: elements.find((item) => item.name === 'per')?.value,
            },
            phys_par: {
                magnitude: data.phys_par.find((item) => item.name === 'M1')?.value,
                diameter: data.phys_par.find((item) => item.name === 'diameter')?.value
            },
            object: {
                des: data.object.des,
                orbit_class: data.object.orbit_class,
                fullname: data.object.fullname
            },
            ca_data: data.ca_data.length > 0 ? {
                closest_date: data.ca_data[nextClosestApproach]?.cd,
                orbital_speed: data.ca_data[nextClosestApproach]?.v_rel,
                distance: data.ca_data[nextClosestApproach]?.dist,
                last_date: data.ca_data[lastClosestApproach]?.cd,
            } : undefined
        }
        return cometData;

    } catch (error) {
        console.error('Error fetching NASA SBDB data:', error);
        throw error;
    }
}

export async function fetchTotal({ kind }: { kind: 'a' | 'c' }) {
    const year = new Date().getFullYear();
    const url = `${NASA_SBDB_API_URL}/cad.api?kind=${kind}&date-min=${year}-01-01&date-max=${year}-12-31&${kind === 'a' ? 'nea=true&':'dist-max=0.5&'}total-only=true`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data: SmallBodyTotalApiResponse = await response.json();
        return data.total;

    } catch(error) {
        console.error('Error fetching NASA SBDB data:', error);
        throw error;
    }
}