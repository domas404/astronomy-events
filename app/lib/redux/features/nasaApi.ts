import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CloseApproachData, CometApiResponse } from "../../types";
import { SBDB_Data, SBDB_Response } from "../../types/SBDB";

const BASE_URL = 'https://proxy.corsfix.com/?https://ssd-api.jpl.nasa.gov';

export const nasaApi = createApi({
	reducerPath: 'nasaApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		fetchClosestBodies: builder.query({
			query: ({ kind, limit }: { kind: 'a' | 'c', limit: number }) =>
				`/cad.api?kind=${kind}&date-max=2030-12-31&dist-max=0.5&sort=date&diameter=true&fullname=true&limit=${limit}`,
			keepUnusedDataFor: 300,
			transformResponse: (response: CometApiResponse) => {
				const keys = response.fields;
				const transformedData = response.data.map((item) => {
					return item.reduce((acc, value, index) => {
						acc[keys[index]] = value ?? null;
						return acc;
					}, {} as Record<string, string | null>);
				})
				
				return {
					signature: response.signature,
					fields: response.fields,
					total: response.total,
					count: response.count,
					data: [...transformedData] as CloseApproachData[]
				}
			}
		}),
		fetchSelectedBody: builder.query({
			query: ({ des }: { des?: string }) => `/sbdb.api?des=${des}&phys-par=true&ca-data=true&vi-data=true&ca-body=Earth`,
			keepUnusedDataFor: 300,
			transformResponse: (response: SBDB_Response) => {

				const today = (new Date()).getTime();
				const nextClosestApproach = response.ca_data.findIndex((item) => (new Date(item.cd)).getTime() > today);
				const lastClosestApproach = nextClosestApproach > 0 ? nextClosestApproach-1 : 0;

				const elements = response.orbit.elements ?? [];

				const cometData: SBDB_Data = {
					signature: response.signature,
					orbit: {
						first_obs: response.orbit.first_obs as string,
						perihelion: elements.find((item) => item.name === 'q')?.value,
						aphelion: elements.find((item) => item.name === 'ad')?.value,
						period: elements.find((item) => item.name === 'per')?.value,
					},
					phys_par: {
						magnitude: response.phys_par.find((item) => item.name === 'M1')?.value,
						diameter: response.phys_par.find((item) => item.name === 'diameter')?.value
					},
					object: {
						des: response.object.des,
						orbit_class: response.object.orbit_class,
						fullname: response.object.fullname
					},
					ca_data: response.ca_data.length > 0 ? {
						closest_date: response.ca_data[nextClosestApproach]?.cd,
						orbital_speed: response.ca_data[nextClosestApproach]?.v_rel,
						distance: response.ca_data[nextClosestApproach]?.dist,
						last_date: response.ca_data[lastClosestApproach]?.cd,
					} : undefined
				}

				return cometData;
			}
		}),
	}),
});

export const  {
	useFetchClosestBodiesQuery,
	useFetchSelectedBodyQuery,
} = nasaApi;
