import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CloseApproachData, CometApiData, CometApiResponse } from "../../types";

const BASE_URL = 'https://ssd-api.jpl.nasa.gov/cad.api';

export const cometApi = createApi({
	reducerPath: 'cometApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		fetchClosestComets: builder.query<CometApiData, void>({
			query: () => `?kind=c&date-max=2030-12-31&dist-max=0.5&sort=date&diameter=true&fullname=true&limit=5`,
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
	}),
});

export const  { useFetchClosestCometsQuery } = cometApi;
