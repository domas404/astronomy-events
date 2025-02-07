import { FaGithub } from "react-icons/fa";

type DataSource = {
    title: string,
    link: string
}

const dataSources: DataSource[] = [
    // { title: 'SBDB Query API', link: 'https://ssd-api.jpl.nasa.gov/doc/sbdb_query.html' },
    { title: 'SBDB Close-Approach Data API', link: 'https://ssd-api.jpl.nasa.gov/doc/cad.html' },
    { title: 'SBDB API', link: 'https://ssd-api.jpl.nasa.gov/doc/sbdb.html' },
    // { title: 'Sentry API', link: 'https://ssd-api.jpl.nasa.gov/doc/sentry.html' },
    { title: 'Astronomy API', link: 'https://astronomyapi.com/' },
];

const learnMoreSources: DataSource[] = [
    { title: 'NASA Small-Body Database', link: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/' }
];

type LinkItemProps = { item: DataSource }

const LinkItem = ({ item }: LinkItemProps) => {
    return (
        <li className="hover:text-space-text transition-colors">
            <a href={item.link} target="_blank">{item.title}</a>
        </li>
    );
}

const Language = () => {
    return (
        <div className="flex flex-row gap-2 h-8 items-center rounded-full px-3 text-sm">
            <div className="font-bold w-5 flex justify-end">EN</div>
            <div className="w-px bg-space-border h-4"></div>
            <div className="w-5 text-space-text-secondary hover:text-space-text hover:cursor-pointer">LT</div>
        </div>
    );
}

export default function Footer() {

    const mappedDataSources = dataSources.map((item, index) => {
        return (
            <LinkItem key={index} item={item} />
        );
    });

    const mappedLearnMore = learnMoreSources.map((item, index) => {
        return (
            <LinkItem key={index} item={item} />
        );
    })

    return (
        <footer className="w-full border-t border-space-border bg-space-background">
            <div className="w-full flex flex-col items-center mx-auto py-10 max-w-[1200px] md:w-[90%]">
                <div className="w-full flex flex-col md:flex-row px-10 gap-8 justify-between">
                    <div className="w-full flex flex-col gap-8 sm:flex-row justify-between md:basis-2/3">
                        <div className="w-full">
                            <div className="font-semibold mb-4">Data sources</div>
                            <ul className="text-sm text-space-text-secondary">
                                {mappedDataSources}
                            </ul>
                        </div>
                        <div className="w-full">
                            <div className="font-semibold mb-4">Learn more</div>
                            <ul className="text-sm text-space-text-secondary">
                                {mappedLearnMore}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full flex flex-row-reverse md:flex-col md:basis-1/3 gap-2 items-end justify-between mt-4 md:m-0">
                        <Language />
                        <a
                            href="https://github.com/domas404/astronomy-events"
                            target="_blank"
                            className="w-24 border border-space-border rounded-full h-8 flex justify-center items-center gap-1
                                hover:bg-space-button-hover transition-colors hover:cursor-pointer active:bg-space-button-active"
                        >
                            <FaGithub />
                            <div className="text-sm">GitHub</div>
                        </a>
                    </div>
                </div>
                <div className="pt-8 flex flex-row justify-center items-center w-[100%]">
                    <div className="text-xs text-space-text-secondary">
                        © 2025 Astronomy Events
                    </div>
                </div>
            </div>
        </footer>
    );
}