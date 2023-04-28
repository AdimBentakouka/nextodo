import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { NavBar } from "@/components/navbar/navbar";


export default function Home() {
    return (
        <>
            <Head>
                <title>Nextodo</title>
            </Head>
            <main>
                <NavBar title="Nextodo" />
            </main>
        </>
    );
}
