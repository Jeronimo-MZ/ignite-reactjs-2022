import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";

import { Container, Form, Header } from "./styles";

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading>Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar o seu perfil! Ah, você pode editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form as="form">
        <label>
          <Text>Nome de Usuário</Text>
          <TextInput prefix="ignite.com/" placeholder="seu-usuario" />
        </label>
        <label>
          <Text>Nome completo</Text>
          <TextInput prefix="ignite.com/" placeholder="Seu nome" />
        </label>
        <Button>
          {" "}
          Cadastrar <ArrowRight />{" "}
        </Button>
      </Form>
    </Container>
  );
}
