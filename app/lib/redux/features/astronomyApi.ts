import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AstronomyApiResponse } from "../../types/astronomy-api";

const BASE_URL = 'https://api.astronomyapi.com/api/v2/bodies/events';
// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

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
					'Authorization': `Basic ${btoa('4103afe7-b343-46fe-99de-ebca294022ed:75af8b2579381539af1fc3d2f7fd30fb1e7903d47e276805d269e49badecfb970af5fd3610d198065423440c392c3006cf4509420a21777afc1603f624ebeec480c968859b995f4b2533e1e645f8721de483708ae003cf690bdc121acd3239041166b68ac0f54b6283c5012031bdcc76')}`,
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
