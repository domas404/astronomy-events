'use client';

import { changeLanguage } from "@/app/lib/redux/features/languageSlice";
import { useAppSelector } from "@/app/lib/redux/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const loadFromLocalStorage = (key: string) => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (e) {
        console.warn('Error loading from localStorage', e);
        return undefined;
    }
}

export default function Language() {

    const { language } = useAppSelector((state) => state.language);
    const dispatch = useDispatch();

    useEffect(() => {
        const selectedLang = loadFromLocalStorage('lang') ?? 'en';
        dispatch(changeLanguage(selectedLang));
    }, []);

    const updateLanguage = (lang: 'en' | 'lt') => {
        if (lang !== language) {
            localStorage.setItem('lang', JSON.stringify(lang));
            dispatch(changeLanguage(lang));
        }
    }

    return (
        <div className="flex flex-row gap-2 h-8 items-center rounded-full px-3 text-sm">
            <button
                onClick={() => updateLanguage('en')}
                className={`w-5 flex justify-end
                ${language === 'en' ? 'font-bold' : 'text-space-text-secondary hover:text-space-text hover:cursor-pointer'}`}
            >EN</button>
            <div className="w-px bg-space-border h-4"></div>
            <button
                onClick={() => updateLanguage('lt')}
                className={`w-5 ${language === 'lt' ? 'font-bold' : 'text-space-text-secondary hover:text-space-text hover:cursor-pointer'}`}
            >LT</button>
        </div>
    );
}