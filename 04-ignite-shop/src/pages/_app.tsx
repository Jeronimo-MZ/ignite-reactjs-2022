import type { AppProps } from "next/app";

import { globalStyles } from "@/styles/global";
import logoImg from "@/assets/logo.svg";
import Image from "next/image";
import { AppContainer, Header } from "@/styles/pages/app";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppContainer>
            <Header>
                <Link href="/">
                    <Image src={logoImg} alt="" />
                </Link>
            </Header>
            <Component {...pageProps} />
        </AppContainer>
    );
}
