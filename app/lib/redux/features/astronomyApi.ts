import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AstronomyApiResponse } from "../../types/astronomy-api";

const BASE_URL = 'https://api.astronomyapi.com/api/v2/bodies/events';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const astronomyApi = createApi({
	reducerPath: 'astronomyApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		fetchBodyEvents: builder.query({
			query: ({ body, lat, lon, from, to, time }:	{
				body?: 'sun' | 'moon',
				lat?: string,
				lon?: string,
				from?: string,
				to?: string,
				time?: string
			}) => ({
				url: `/${body}?latitude=${lat}&longitude=${lon}&elevation=0&from_date=${from}&to_date=${to}&time=${time}`,
				method: 'GET',
				headers: {
					'Authorization': API_KEY,
				},
			}),
			keepUnusedDataFor: 300,
			transformResponse: (response: AstronomyApiResponse) => {
				return response;
			},
		}),
	}),
});

export const  {
	useFetchBodyEventsQuery,
} = astronomyApi;
