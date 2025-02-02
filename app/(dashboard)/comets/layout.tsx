

export default function CometLayout ({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex justify-center">
            {children}
        </section>
    )
}