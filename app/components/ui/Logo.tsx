import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center justify-center md:justify-start">
            <div className="w-10 h-10 border border-white bg-space-background rounded-full shadow-[0_0_4px] hover:shadow-[0_0_6px_2px] transition-shadow shadow-white"></div>
        </Link>
    );
}