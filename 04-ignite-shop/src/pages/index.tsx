import { styled } from "@/styles";
import { HomeContainer, Product } from "@/styles/pages/Home";
import Head from "next/head";
import Image from "next/image";
import shirt1 from "@/assets/shirts/1.png";
import shirt2 from "@/assets/shirts/2.png";
import shirt3 from "@/assets/shirts/3.png";
import shirt4 from "@/assets/shirts/3.png";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ignite Shop</title>
            </Head>
            <HomeContainer>
                <Product>
                    <Image src={shirt1} width={520} height={480} alt="" />
                    <footer>
                        <strong>Camiseta 1</strong>
                        <span>R$ 79,10</span>
                    </footer>
                </Product>
                <Product>
                    <Image src={shirt2} width={520} height={480} alt="" />
                    <footer>
                        <strong>Camiseta 2</strong>
                        <span>R$ 79,20</span>
                    </footer>
                </Product>
                {/* <Product>
                    <Image src={shirt3} width={520} height={480} alt="" />
                    <footer>
                        <strong>Camiseta 3</strong>
                        <span>R$ 79,30</span>
                    </footer>
                </Product>
                <Product>
                    <Image src={shirt4} width={520} height={480} alt="" />
                    <footer>
                        <strong>Camiseta 4</strong>
                        <span>R$ 79,40</span>
                    </footer>
                </Product> */}
            </HomeContainer>
        </>
    );
}
