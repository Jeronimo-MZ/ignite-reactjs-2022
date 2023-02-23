import Head from "next/head";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

import { HomeContainer, Product } from "@/styles/pages/Home";
import shirt1 from "@/assets/shirts/1.png";
import shirt2 from "@/assets/shirts/2.png";
import shirt4 from "@/assets/shirts/4.png";
import shirt3 from "@/assets/shirts/3.png";

import "keen-slider/keen-slider.min.css";

export default function Home() {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48,
        },
    });
    return (
        <>
            <Head>
                <title>Ignite Shop</title>
            </Head>
            <HomeContainer ref={sliderRef} className="keen-slider">
                <Product className="keen-slider__slide">
                    <Image src={shirt1} width={520} height={480} alt="" />
                    <footer>
                        <strong>Camiseta 1</strong>
                        <span>R$ 79,10</span>
                    </footer>
                </Product>
                <Product className="keen-slider__slide">
                    <Image src={shirt2} width={520} height={480} alt="" />
                    <footer>
                        <strong>Camiseta 2</strong>
                        <span>R$ 79,20</span>
                    </footer>
                </Product>
                <Product className="keen-slider__slide">
                    <Image src={shirt3} width={520} height={480} alt="" />
                    <footer>
                        <strong>Camiseta 3</strong>
                        <span>R$ 79,30</span>
                    </footer>
                </Product>
                <Product className="keen-slider__slide">
                    <Image src={shirt4} width={520} height={480} alt="" />
                    <footer>
                        <strong>Camiseta 4</strong>
                        <span>R$ 79,40</span>
                    </footer>
                </Product>
            </HomeContainer>
        </>
    );
}
