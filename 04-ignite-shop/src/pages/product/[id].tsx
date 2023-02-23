import {
    ImageContainer,
    ProductContainer,
    ProductDetails,
} from "@/styles/pages/Product";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Product() {
    return (
        <ProductContainer>
            <ImageContainer></ImageContainer>
            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79.90</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus rerum velit earum excepturi hic accusamus cumque
                    minima quos rem nam! Modi doloribus iusto perspiciatis
                    placeat quasi debitis porro perferendis voluptas?
                </p>
                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    );
}
