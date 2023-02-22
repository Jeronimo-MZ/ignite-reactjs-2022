import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Content, Overlay, NewTransactionForm, CloseButton, TransactionType, TransactionTypeButton } from "./styles";

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
          <TransactionType>
            <TransactionTypeButton type="button" variant="income">
              <ArrowCircleUp />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton type="button" variant="outcome" selected>
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
