import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Content, Overlay, NewTransactionForm, CloseButton } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay as={Dialog.Overlay} />
      <Content as={Dialog.Content}>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton as={Dialog.Close}>
          <X />
        </CloseButton>
        <NewTransactionForm>
          <input type="text" placeholder="Descrição" />
          <input type="number" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />
          <button type="submit">Cadastrar</button>
        </NewTransactionForm>
      </Content>
    </Dialog.Portal>
  );
}
