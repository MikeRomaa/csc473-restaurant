import { Instagram, Logo, TikTok, Yelp } from "./Icons";

export const Footer: React.FC = () => (
    <footer className="bg-background font-serif font-medium text-black/50">
        <section className="container mx-auto py-10 border-t-2 border-black/20">
            <div className="flex gap-10 items-center">
                <div className="flex flex-col gap-5 items-center">
                    <Logo />
                    <div className="flex gap-3">
                        <a href="https://www.instagram.com/duocafe.nyc/">
                            <Instagram />
                        </a>
                        <a href="https://www.tiktok.com/@duocafe.nyc">
                            <TikTok />
                        </a>
                        <a href="https://www.yelp.com/biz/duo-cafe-new-york">
                            <Yelp />
                        </a>
                    </div>
                </div>
                <div>
                    <a className="text-lg underline" href="tel:+16464540603">
                        +1 (646) 454-0603
                    </a>
                    <p className="text-lg font-medium">
                        223 East 5th St,
                        <br />
                        New York, NY 10003
                    </p>
                </div>
                <table className="border-separate border-spacing-x-3">
                    <tr>
                        <th className="text-right">Monday</th>
                        <td>Closed</td>
                    </tr>
                    <tr>
                        <th className="text-right">Tuesday – Thursday</th>
                        <td>12:00 – 22:00</td>
                    </tr>
                    <tr>
                        <th className="text-right">Friday</th>
                        <td>12:00 – 23:00</td>
                    </tr>
                    <tr>
                        <th className="text-right">Saturday</th>
                        <td>11:00 – 23:00</td>
                    </tr>
                    <tr>
                        <th className="text-right">Sunday</th>
                        <td>11:00 – 22:00</td>
                    </tr>
                </table>
            </div>
        </section>
    </footer>
);
