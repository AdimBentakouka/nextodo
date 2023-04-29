import Image from "next/image";
import Link from "next/link";
import { Dosis } from "next/font/google";
import { PropsWithChildren } from "react";

const TitleFont = Dosis({ subsets: ["latin"] });

/**
 * Props pour utiliser la navbar
 */
interface INavbar {
    title: string;
    img: string;
}

export const NavBar = ({
    title,
    img,
    children,
}: PropsWithChildren<INavbar>) => {
    return (
        <nav className="bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <NavHeader title={title} img={img} />
                <div className="flex gap-3 items-center self-center">{children}</div>
            </div>
        </nav>
    );
};

const NavHeader = ({ title, img }: INavbar) => {
    return (
        <Link href="/">
            <div className="flex items-center">
                <Image
                    src={img}
                    alt="nextodo logo"
                    className="h-8 mr-3"
                    height={32}
                    width={32}
                />
                <span
                    className={`${TitleFont.className} self-center text-3xl font-semibold whitespace-nowrap dark:text-white`}
                >
                    {title}
                </span>
            </div>
        </Link>
    );
};
