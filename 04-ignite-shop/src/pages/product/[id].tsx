import { stripe } from "@/lib/stripe";
import { useState } from "react";
import {
    ImageContainer,
    ProductContainer,
    ProductDetails,
} from "@/styles/pages/Product";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import Stripe from "stripe";

type ProductProps = {
    product: {
        id: string;
        name: string;
        description: string;
        price: string;
        priceId: string;
        imageUrl: string;
    };
};

export default function Product({ product }: ProductProps) {
    const [isCreatingCheckoutSessions, setIsCreatingCheckoutSession] =
        useState(false);
    async function handleBuyProduct() {
        setIsCreatingCheckoutSession(true);
        try {
            const response = await axios.post("/api/checkout", {
                priceId: product.priceId,
            });
            window.location.href = response.data.checkoutUrl;
        } catch {
            alert("Erro ao efectuar a compra");
        }
    }
    return (
        <>
            <Head>
                <title>{`${product.name} | Ignite Shop`}</title>
            </Head>
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
                    <button
                        disabled={isCreatingCheckoutSessions}
                        onClick={handleBuyProduct}
                    >
                        Comprar agora
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
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
            priceId: productPrice.id,
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
