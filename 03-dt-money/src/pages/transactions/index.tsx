import { Summary } from "@/components/summary";
import { Header } from "@/components/header";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/02/2023</td>
            </tr>
            <tr>
              <td>Hambúrguer</td>
              <td>
                <PriceHighlight variant="outcome"> - R$ 59,90 </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>14/02/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
