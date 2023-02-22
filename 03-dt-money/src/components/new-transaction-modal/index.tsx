import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Content, Overlay, NewTransactionForm, CloseButton, TransactionType, TransactionTypeButton } from "./styles";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransactions } from "@/hooks/use-transactions";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number().min(0.01),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormData = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { register, handleSubmit, control, reset } = useForm<NewTransactionFormData>({
    resolver: zodResolver(newTransactionFormSchema),
  });
  const { createTransaction } = useTransactions();
  const handleCreateTransaction = async (data: NewTransactionFormData) => {
    createTransaction(data);
    reset();
  };
  return (
    <Dialog.Portal>
      <Overlay as={Dialog.Overlay} />
      <Content as={Dialog.Content}>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton as={Dialog.Close} title="fechar">
          <X />
        </CloseButton>
        <NewTransactionForm onSubmit={handleSubmit(handleCreateTransaction)}>
          <input type="text" placeholder="Descrição" {...register("description")} />
          <input type="number" placeholder="Preço" {...register("price", { valueAsNumber: true })} />
          <input type="text" placeholder="Categoria" {...register("category")} />
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType as={RadioGroup.Root} onValueChange={field.onChange}>
                <TransactionTypeButton as={RadioGroup.Item} type="button" variant="income" value="income">
                  <ArrowCircleUp />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton as={RadioGroup.Item} type="button" variant="outcome" value="outcome">
                  <ArrowCircleDown />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />
          <button type="submit">Cadastrar</button>
        </NewTransactionForm>
      </Content>
    </Dialog.Portal>
  );
}
