import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "./styles";

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "deve ter pelo menos 3 caracteres" })
    .regex(/^[a-z]+[a-z\\-]+[a-z]+$/i, { message: "deve ter apenas letras e hífens" })
    .transform(value => value.toLowerCase()),
});

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>;

export const ClaimUsernameForm = () => {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>({ resolver: zodResolver(claimUsernameFormSchema) });
  const handleClaimUsername = (data: ClaimUsernameFormData) => {
    console.log(data);
  };
  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuario" {...register("username")} />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  );
};
