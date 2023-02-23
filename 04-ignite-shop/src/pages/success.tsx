import { stripe } from "@/lib/stripe";
import { SuccessContainer, ImageContainer } from "@/styles/pages/Success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

type SuccessProps = {
    customerName: string;
    product: {
        name: string;
        imageUrl: string;
    };
};
export default function Success({ customerName, product }: SuccessProps) {
    return (
        <>
            <Head>
                <title>Sucesso! | Ignite Shop</title>
                <meta name="robots" content="noindex" />
            </Head>
            <SuccessContainer>
                <h1>Compra Efectuada</h1>
                <ImageContainer>
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={130}
                        height={145}
                    />
                </ImageContainer>
                <p>
                    Uhuul <strong>{customerName}</strong>, sua{" "}
                    <strong>{product.name}</strong> já está a caminho da sua
                    casa.
                </p>
                <Link href="/">Voltar ao catálogo</Link>
            </SuccessContainer>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const sessionId = query.session_id as string | undefined;
    if (!sessionId) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["line_items.data.price.product"],
    });

    const customerName = session.customer_details?.name;
    const lineItems = session.line_items as Stripe.ApiList<Stripe.LineItem>;
    const product = lineItems.data[0].price?.product as Stripe.Product;

    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0],
            },
        },
    };
};
