type Props = {
    title: string,
    value: string,
    text?: string,
}

export default function Card({ title, value, text }: Props) {
    return (
        <div className="w-1/2 bg-space-button rounded-lg flex flex-col p-3 lg:max-w-[250px]">
            <div className="text-sm text-space-text-secondary">{title}</div>
            <div className="flex flex-row gap-1 items-end">
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-lg">{text}</div>
            </div>
        </div>
    );
}