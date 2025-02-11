'use client';

import { useAppSelector } from "@/app/lib/redux/hooks";
import { headerText } from "@/app/lib/locale-text/ui-text";

export default function Title({ kind }: { kind: 'a' | 'c' }) {

    const { language } = useAppSelector((state) => state.language);

    return (
        <div className="w-full lg:w-[90%] mx-4 sm:w-4/5 md:w-[70%] xl:w-[80%] text-3xl pt-6">
            <div className="border-b pb-4 mx-4 border-space-border">
                { kind === 'c' ? headerText[language].comets : headerText[language].asteroids }
            </div>
        </div>
    );
}