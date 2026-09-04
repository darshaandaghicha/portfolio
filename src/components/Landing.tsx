// Copyright (c) 2026 Darshaan Aghicha

import { useEffect, useState } from "react";

const DATA_URL = "https://raw.githubusercontent.com/darshaandaghicha/portfolio/main/src/constants/data.json";

interface LangIcon {
    tooltip: string;
    url: string;
}

interface LandingData {
    subtitle: string;
    caption: string;
    langs_icon: LangIcon[];
}

const Landing = () => {
    const [data, setData] = useState<LandingData | null>(null);

    useEffect(() => {
        fetch(DATA_URL)
            .then((res) => res.json())
            .then((json) => setData(json.landing))
            .catch((err) => console.error("Failed to load landing content", err));
    }, []);

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
            <img
                src="/landing.png"
                alt="Darshaan Aghicha"
                className="absolute inset-y-0 right-0 h-full w-auto max-w-none object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />

            <div className="relative z-10 max-w-2xl px-6 sm:px-12 lg:px-20">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-4 py-1.5 font-mono text-sm text-emerald-400">
                    <span>&gt;</span> Hello, I'm
                </span>

                <h1 className="mt-6 text-6xl leading-tight font-bold text-white sm:text-7xl">
                    Darshaan
                    <br />
                    <span className="bg-linear-to-r from-violet-500 to-indigo-400 bg-clip-text text-transparent">
                        Aghicha
                    </span>
                    <span className="animate-blink text-violet-400">|</span>
                </h1>

                {data && (
                    <>
                        <p className="mt-4 text-sm text-gray-300 sm:text-base">{data.subtitle}</p>

                        <p className="mt-4 max-w-md text-sm text-gray-400 sm:text-base">{data.caption}</p>

                        <div className="mt-6 flex flex-wrap items-center justify-evenly gap-4 px-6">
                            {data.langs_icon.map((icon) => (
                                <div key={icon.tooltip} className="group relative cursor-pointer">
                                    <img src={icon.url} alt={icon.tooltip} className="h-6 w-6" />
                                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-linear-to-r from-violet-500 to-indigo-400 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
                                        {icon.tooltip}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-linear-to-r from-violet-500 to-indigo-400 px-6 py-3 text-sm font-medium text-white">
                                <span>View My Work</span>
                                <kbd className="rounded border border-white/30 px-1.5 py-0.5 text-xs">Q</kbd>
                            </button>
                            <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-500 px-6 py-3 text-sm font-medium text-white">
                                <span>Contact Me</span>
                                <kbd className="rounded border border-white/30 px-1.5 py-0.5 text-xs">R</kbd>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Landing;
