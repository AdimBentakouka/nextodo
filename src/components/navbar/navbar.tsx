import Image from "next/image";
import Link from "next/link";
import { Dosis } from "next/font/google";


const TitleFont = Dosis({ subsets: ["latin"] });

/**
 * Props pour utiliser la navbar
 */
interface INavbar {
    title: string
}

export const NavBar = ({ title: string }: INavbar) => {
    return (
        <nav className="bg-gray-900">
            <div className="max-w-screen-xl mx-28 p-4">
                <Link href="/">
                    <div className="flex items-center">
                        <Image
                            src="/nextodo.png"
                            alt="nextodo logo"
                            className="mr-3"
                            height={42}
                            width={42}
                        />
                        <span
                            className={`${TitleFont.className} self-center text-3xl font-semibold whitespace-nowrap dark:text-white`}
                        >
                            Nextodo
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};