import Head from "next/head";
import { NavBar } from "@/components/navbar/navbar";


export default function Home() {
    return (
        <>
            <Head>
                <title>Nextodo</title>
            </Head>
            <main>
                <NavBar title="Nextodo" img="/nextodo.png"/>
            </main>
        </>
    );
}
