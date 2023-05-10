import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import Head from "next/head";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Container, Form, FormError, Header } from "./styles";

const registerFormSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 letras."),
  username: z
    .string()
    .min(3, { message: "O nome de usuário deve ter pelo menos 3 caracteres" })
    .regex(/^[a-z\\-]+$/i, { message: "O nome de usuário deve ter apenas letras e hífens" })
    .refine(value => !(value.startsWith("-") || value.endsWith("-")), {
      message: "O nome de usuário não pode iniciar nem terminar com hífen",
    })
    .transform(value => value.toLowerCase()),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function Register() {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerFormSchema) });

  const handlerRegister = (data: RegisterFormData) => {
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Registro | Ignite Call</title>
      </Head>
      <Container>
        <Header>
          <Heading>Bem-vindo ao Ignite Call!</Heading>
          <Text>
            Precisamos de algumas informações para criar o seu perfil! Ah, você pode editar essas informações depois.
          </Text>
          <MultiStep size={4} currentStep={1} />
        </Header>
        <Form as="form" onSubmit={handleSubmit(handlerRegister)}>
          <label>
            <Text>Nome de Usuário</Text>
            <TextInput prefix="ignite.com/" placeholder="seu-usuario" {...register("username")} />
            {!!errors.username && <FormError size="sm">{errors.username.message} </FormError>}
          </label>
          <label>
            <Text>Nome completo</Text>
            <TextInput placeholder="Seu nome" {...register("name")} />
            {!!errors.name && <FormError size="sm">{errors.name.message} </FormError>}
          </label>
          <Button type="submit" disabled={isSubmitting}>
            Próximo passo <ArrowRight />
          </Button>
        </Form>
      </Container>
    </>
  );
}
