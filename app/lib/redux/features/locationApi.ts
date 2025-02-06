import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IpApiResponse } from "../../types/ip-api";

const BASE_URL = 'http://ip-api.com';

export const locationApi = createApi({
    reducerPath: 'locationApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        fetchLocation: builder.query({
            query: () => `/json?fields=status,message,country,countryCode,regionName,city,lat,lon,query`,
            keepUnusedDataFor: 300,
            transformResponse: (response: IpApiResponse) => {
                return response;
            }
        })
    })
});

export const { useFetchLocationQuery } = locationApi;