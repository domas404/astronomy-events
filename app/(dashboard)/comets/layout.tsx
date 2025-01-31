

export default function CometLayout ({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex justify-center pt-20 pb-10">
            {children}
        </section>
    )
}