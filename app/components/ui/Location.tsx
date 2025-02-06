'use client';

import { useLocation } from "@/app/hooks/useLocation";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Location() {

    const { data, loading } = useLocation();

    return (
        <div className="flex justify-end items-center order-3 basis-1/3">
            <button
                // onClick={}
                className="flex flex-row h-8 max-w-28 justify-center items-center border rounded-full text-space-text-secondary 
                    border-space-border hover:bg-space-button-hover hover:cursor-pointer active:bg-space-button-active pl-2 pr-3">
                <MdOutlineLocationOn className="min-w-5" size={18} />
                {
                    loading || !data ?
                    <div className="w-16 h-4 bg-space-button-active rounded-full animate-pulse"></div> :
                    <div className="max-w-20 text-sm truncate">{data.city}</div>
                }
            </button>
        </div>
    )
}