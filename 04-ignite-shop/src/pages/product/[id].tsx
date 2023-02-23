import { stripe } from "@/lib/stripe";
import {
    ImageContainer,
    ProductContainer,
    ProductDetails,
} from "@/styles/pages/Product";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";

type ProductProps = {
    product: {
        id: string;
        name: string;
        description: string;
        price: string;
        imageUrl: string;
    };
};

export default function Product({ product }: ProductProps) {
    return (
        <ProductContainer>
            <ImageContainer>
                <Image
                    src={product.imageUrl}
                    width={520}
                    height={480}
                    alt={product.name}
                />
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>
                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await stripe.products.list();
    const paths = response.data.map((product) => ({
        params: { id: product.id },
    }));
    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const productId = params?.id as string;

        const response = await stripe.products.retrieve(productId, {
            expand: ["default_price"],
        });
        const productPrice = response.default_price as Stripe.Price;

        const product = {
            id: response.id,
            name: response.name,
            imageUrl: response.images[0],
            description: response.description,
            price: Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format((productPrice.unit_amount as number) / 100),
        };
        return {
            props: { product },
            revalidate: 60 * 60 * 2, //2h
        };
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        };
    }
};
