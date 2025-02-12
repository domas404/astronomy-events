'use client';

import { useAppSelector } from "@/app/lib/redux/hooks";

const routeMap: { [id: string]: string }  = {
    c: '/comets',
    a: '/asteroids',
    sun: '/solar-events',
    moon: '/llunar-events',
}

export default function ViewMoreButton({ eventType }: { eventType: string }) {

    const { language } = useAppSelector((state) => state.language);

    return (
        <a href={routeMap[eventType]} className="mt-6 transition-colors hover:cursor-pointer p-3 rounded-md text-sm flex justify-center
            bg-space-button hover:bg-space-button-hover active:bg-space-button-active
            lg:w-64 lg:mx-auto">
            { language === 'lt' ? 'Rodyti daugiau' : 'View all' }
        </a>
    )
}