'use client';

import { updateLocation } from "@/app/lib/redux/features/locationSlice";
import { useAppSelector } from "@/app/lib/redux/hooks";
import { MdOutlineLocationOn } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function Location() {

    const dispatch = useDispatch();
    const location = useAppSelector((state) => state.location);

    const setLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    dispatch(updateLocation({ latitude, longitude }));
                },
                (error) => {
                    console.error("Error getting user location", error)
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser");
        }
    }

    return (
        <div className="flex justify-end items-center order-3 basis-1/3">
            <button
                onClick={setLocation}
                className="flex flex-row h-8 max-w-28 justify-center items-center border rounded-full text-space-text-secondary 
                    border-space-border hover:bg-space-button-hover hover:cursor-pointer active:bg-space-button-active pl-2 pr-3">
                <MdOutlineLocationOn className="min-w-5" size={18} />
                <div className="max-w-20 text-sm truncate">
                    {(location.latitude && location.longitude) ? `${location.latitude.toFixed(0)}°N ${location.longitude.toFixed(0)}°W` : 'Allow'}
                </div>
            </button>
        </div>
    )
}