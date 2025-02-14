'use client';

import { IpGeoLocationResponse } from "@/app/lib/types/ip-geolocation-api";
import { useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Location({ location }: { location: IpGeoLocationResponse }) {

    useEffect(() => {
        if (!document.cookie.includes('userLocation')) {
            const userLocation = {
                city: location.city,
                lat: location.latitude,
                lon: location.longitude
            };
            document.cookie = `userLocation=${encodeURIComponent(JSON.stringify(userLocation))}; path=/`;
            localStorage.setItem('location', JSON.stringify(location));
        }
    }, [location]);


    return (
        <div className="flex justify-end items-center order-3 basis-1/3 mr-2 md:mr-0">
            <button
                // onClick={setLocation}
                className="flex flex-row h-8 max-w-28 justify-center items-center border rounded-full text-space-text-secondary 
                    border-space-border hover:bg-space-button-hover hover:cursor-pointer active:bg-space-button-active pl-2 pr-3">
                <MdOutlineLocationOn className="min-w-5" size={18} />
                <div className="max-w-20 text-sm truncate">
                    { location.city }
                </div>
            </button>
        </div>
    )
}