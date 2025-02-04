export default function AsteroidLayout ({
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