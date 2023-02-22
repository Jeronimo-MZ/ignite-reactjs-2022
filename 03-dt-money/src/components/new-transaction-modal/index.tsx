import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Content, Overlay, NewTransactionForm, CloseButton, TransactionType, TransactionTypeButton } from "./styles";
import * as RadioGroup from "@radix-ui/react-radio-group";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay as={Dialog.Overlay} />
      <Content as={Dialog.Content}>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton as={Dialog.Close} title="fechar">
          <X />
        </CloseButton>
        <NewTransactionForm>
          <input type="text" placeholder="Descrição" />
          <input type="number" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />
          <TransactionType as={RadioGroup.Root}>
            <TransactionTypeButton as={RadioGroup.Item} type="button" variant="income" value="income">
              <ArrowCircleUp />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton as={RadioGroup.Item} type="button" variant="outcome" value="outcome">
              <ArrowCircleDown />
              Saída
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit">Cadastrar</button>
        </NewTransactionForm>
      </Content>
    </Dialog.Portal>
  );
}
