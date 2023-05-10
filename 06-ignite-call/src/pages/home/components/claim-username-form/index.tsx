import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Text, TextInput } from "@ignite-ui/react";
import { useRouter } from "next/router";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormAnnotation } from "./styles";

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "deve ter pelo menos 3 caracteres" })
    .regex(/^[a-z\\-]+$/i, { message: "deve ter apenas letras e hífens" })
    .refine(value => !(value.startsWith("-") || value.endsWith("-")), {
      message: "não pode iniciar nem terminar com hífen",
    })
    .transform(value => value.toLowerCase()),
});

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>;

export const ClaimUsernameForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  });
  const router = useRouter();
  const handleClaimUsername = async ({ username }: ClaimUsernameFormData) => {
    await router.push(`register?username=${username}`);
  };
  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuario" {...register("username")} />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text>{errors.username?.message ?? "Digite o nome de usuário desejado"}</Text>
      </FormAnnotation>
    </>
  );
};
