type Props = {
    error: string;
}

export const TableError = ({ error }: Props) => {
    return (
        <tr className="bg-[#0F1317] h-28 rounded-lg p-4 text-red-400 flex justify-center items-center">
            {error}
        </tr>
    )
}