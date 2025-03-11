import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";

import { Instagram, Logo, TikTok, Yelp } from "./Icons";

const SCROLL_THRESHOLD = 100;

export const Navbar: React.FC = () => {
    const { pathname } = useLocation();

    const [scroll, setScroll] = useState<boolean>(window.scrollY > SCROLL_THRESHOLD);
    const isHomepage = useMemo(() => pathname === "/", [pathname]);

    useEffect(() => {
        const callback = () => setScroll(window.scrollY > SCROLL_THRESHOLD);

        window.addEventListener("scroll", callback);
        return () => window.removeEventListener("scroll", callback);
    }, []);

    return (
        <nav
            className={`top-0 inset-x-0 z-20 font-serif text-xl border-b-4 transition-color duration-150
                ${isHomepage ? "fixed" : "sticky bg-accent text-white"}
                ${isHomepage && scroll ? "bg-background border-accent" : "border-transparent"}`}
        >
            <div className={`container mx-auto flex gap-5 items-center py-5 ${scroll ? "text-inherit" : "text-white"}`}>
                <Link to="/" className="ml-5 mr-auto">
                    <Logo />
                </Link>
                <Link to="/#about-us" className="mr-2 xl:mr-5">
                    About
                </Link>
                <Link to="/menu" className="mr-2 xl:mr-5">
                    Menu
                </Link>
                <Link to="/contact" className="mr-5 xl:mr-10">
                    Contact
                </Link>
                <a
                    className="hidden xl:block"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/duocafe.nyc/"
                >
                    <Instagram />
                </a>
                <a
                    className="hidden xl:block"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.tiktok.com/@duocafe.nyc"
                >
                    <TikTok />
                </a>
                <a
                    className="hidden xl:block"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.yelp.com/biz/duo-cafe-new-york"
                >
                    <Yelp />
                </a>
            </div>
        </nav>
    );
};
