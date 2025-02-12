'use client';

import { labelMap } from "@/app/lib/locale-text/label-text";
import { methodMap } from "@/app/lib/format-data/format-data";
import { useAppSelector } from "@/app/lib/redux/hooks";

export const HomeDataItem = ({ id, value, index }: { id: string, value: string, index: number }) => {
    const { language } = useAppSelector((state) => state.language);
    // console.log(language);
    return (
        <li className={`${index > 2 && 'hidden md:block'} basis-1/2 p-2 hover:bg-space-button-active rounded-lg group transition-colors`}>
            <div className="mt-14 -ml-2 rounded-lg p-2 invisible group-hover:visible absolute max-w-48
                bg-space-button-active transition-all delay-0 md:group-hover:delay-700 border border-space-border text-sm">
                {labelMap[language][id].description}
            </div>
            <div className="text-xs text-space-text-secondary uppercase font-bold">{labelMap[language][id].name}</div>
            <div>{value}</div>
        </li>
    )
}

export const DataItem = ({ id, value }: { id: string, value: string }) => {
    const { language } = useAppSelector((state) => state.language);
    // console.log(language);
    return (
        <li className="basis-1/2 p-2 hover:bg-space-button-active rounded-lg group transition-colors">
            <div className="mt-14 -ml-2 rounded-lg p-2 invisible group-hover:visible absolute max-w-48
                bg-space-button-active transition-all delay-0 md:group-hover:delay-700 border border-space-border text-sm">
                {labelMap[language][id].description}
            </div>
            <div className="text-xs text-space-text-secondary uppercase font-bold">{labelMap[language][id].name}</div>
            <div>{value}</div>
        </li>
    )
}

export const DataView = ({ id, value }: { id: string, value: string | undefined }) => {
    if (value) {
        return <DataItem id={id} value={methodMap[id](value)} />
    } else {
        return <DataItem id={id} value={'No data'} />
    }
}

export const HomeDataView = ({ id, value, index }: { id: string, value: string | undefined, index: number }) => {
    if (value) {
        return <HomeDataItem id={id} value={methodMap[id](value)} index={index} />
    } else {
        return <HomeDataItem id={id} value={'No data'} index={index} />
    }
}