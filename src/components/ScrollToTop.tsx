import { useEffect } from "react";
import { useLocation } from "react-router";

export const InitialScroll: React.FC = () => {
    const { pathname, hash } = useLocation();

    // biome-ignore lint/correctness/useExhaustiveDependencies: this needs to run on path change
    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView({
                behavior: "smooth",
                inline: "start",
            });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};
