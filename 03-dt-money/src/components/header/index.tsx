import { HeaderContainer, HeaderContent, Logo, NewTransactionButton } from "./styles";
import logoImg from "@/assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../new-transaction-modal";
import { PlusCircle } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <img src={logoImg} alt="" />
          <span>DT Money</span>
        </Logo>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton title="Nova transação">
              <PlusCircle />
              <span>Nova Transação</span>
            </NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
