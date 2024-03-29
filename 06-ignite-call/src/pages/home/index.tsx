import { Heading, Text } from "@ignite-ui/react";
import Head from "next/head";
import Image from "next/image";

import previewImage from "@/assets/app-preview.png";

import { ClaimUsernameForm } from "./components/claim-username-form";
import { Container, Hero, Preview } from "./styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignite Call</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Hero>
          <Heading size="4xl" as="h1">
            Agendamento descomplicado
          </Heading>
          <Text size="xl"> Conecte seu calendário e permita que pessoas marque agendamentos no se tempo livre.</Text>
          <ClaimUsernameForm />
        </Hero>
        <Preview>
          <Image height={400} src={previewImage} quality={100} priority alt="" />
        </Preview>
      </Container>
    </>
  );
}
