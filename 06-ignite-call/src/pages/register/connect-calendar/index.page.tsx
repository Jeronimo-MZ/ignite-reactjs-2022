import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { ArrowRight, Check } from "phosphor-react";

import { Container, Header } from "../styles";
import { AuthError, ConnectBox, ConnectItem } from "./styles";

export default function ConnectCalendar() {
  const { status } = useSession();
  const router = useRouter();
  const hasAuthError = router.query.error === "permissions";
  const isAuthenticated = status === "authenticated";
  return (
    <>
      <Head>
        <title>Conectar Calendário | Ignite Call</title>
      </Head>
      <Container>
        <Header>
          <Heading>Conecte sua agenda!</Heading>
          <Text>
            Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que
            são agendados.
          </Text>
          <MultiStep size={4} currentStep={2} />
        </Header>
        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>
            {isAuthenticated ? (
              <Button size="sm" onClick={() => signIn("google")} disabled>
                Conectado <Check />
              </Button>
            ) : (
              <Button variant="secondary" size="sm" onClick={() => signIn("google")}>
                Conectar <ArrowRight />
              </Button>
            )}
          </ConnectItem>
          {hasAuthError && (
            <AuthError>
              Falha ao se conectar ao Google, verifique se habilitou as permissões de acesso ao Google Calendar.
            </AuthError>
          )}
          <Button type="submit" disabled={!isAuthenticated}>
            Próximo passo <ArrowRight />
          </Button>
        </ConnectBox>
      </Container>
    </>
  );
}
