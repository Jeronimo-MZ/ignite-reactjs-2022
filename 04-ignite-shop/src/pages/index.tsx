import { styled } from "@/styles";
import Head from "next/head";

const Button = styled("button", {
    backgroundColor: "$green300",
    border: 0,
    borderRadius: 4,
    color: "white",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    "&:hover": {
        filter: "brightness(.8)",
    },
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Ignite Shop</title>
            </Head>
            <main>
                Hello Ignite Shop
                <br />
                <Button>Click</Button>
            </main>
        </>
    );
}
