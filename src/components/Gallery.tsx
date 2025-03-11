import { useCallback, useEffect, useRef, useState } from "react";

import { ArrowLeft, ArrowRight } from "./Icons";

const IMAGES = [
    { src: "/gallery-1.jpg", alt: "Selection of teas" },
    { src: "/gallery-2.jpg", alt: "Tea set with seasonal snacks" },
    { src: "/gallery-3.jpg", alt: "View of the interior" },
    { src: "/gallery-4.jpg", alt: "Featured art and menu" },
    { src: "/gallery-5.jpg", alt: "View of the exterior" },
    { src: "/gallery-6.jpg", alt: "View of the interior" },
];

export const Gallery: React.FC = () => {
    const initialRender = useRef<boolean>(true);
    const refs = useRef<HTMLImageElement[]>([]);

    const refCallback = (index: number) => (element: HTMLImageElement) => {
        if (element) {
            refs.current[index] = element;
        }
    };

    const [idx, setIdx] = useState<number>(0);

    const updateIdx = useCallback((index: number) => {
        initialRender.current = false;
        setIdx(index);
    }, []);

    useEffect(() => {
        // Prevent page from scrolling to image automatically,
        // should only happen when we interact with them
        if (initialRender.current) {
            return;
        }

        console.log("raaaah");

        refs.current[idx]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }, [idx]);

    return (
        <section className="container mx-auto flex items-center px-2 gap-3 xl:gap-10">
            <button
                type="button"
                className="cursor-pointer border-2 rounded-full p-1"
                onClick={() => updateIdx(idx === 0 ? refs.current.length - 1 : idx - 1)}
            >
                <ArrowLeft />
            </button>
            <div className="h-96 flex gap-4 overflow-x-scroll scroll-smooth snap-x [scrollbar-width:none]">
                {IMAGES.map(({ src, alt }, i) => (
                    <img
                        key={src}
                        ref={refCallback(i)}
                        src={src}
                        alt={alt}
                        onClick={() => updateIdx(i)}
                        className={`cursor-pointer rounded-lg object-cover transition-opacity duration-150
                            ${idx === i ? "opacity-100" : "opacity-75"}`}
                    />
                ))}
            </div>
            <button
                type="button"
                className="cursor-pointer border-2 rounded-full p-1"
                onClick={() => updateIdx((idx + 1) % refs.current.length)}
            >
                <ArrowRight />
            </button>
        </section>
    );
};
