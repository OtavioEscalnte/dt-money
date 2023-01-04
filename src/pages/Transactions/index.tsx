import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header/>
      <Summary/>

    <TransactionsContainer>
    <SearchForm/>

      <TransactionsTable>
        <tbody>
          <tr>
            <td width='50%'>Desenvolvimento de site</td>
            <td>
            <PriceHighlight variant='income'>R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>12/04/2023</td>
          </tr>
          <tr>
            <td width='50%'>Hamburguer</td>
            <td>
            <PriceHighlight variant="outcome">
              - R$ 59,00
            </PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2023</td>
          </tr>
          <tr>
            <td width='50%'>Aluguel do apartamento</td>
            <td>
              <PriceHighlight variant="outcome">
                - R$ 1.200,00
                </PriceHighlight>
                </td>
            <td>Casa</td>
            <td>27/03/2023</td>
          </tr>
          <tr>
            <td width='50%'>Computador</td>
            <td>
              <PriceHighlight variant="income">
              R$ 5.400,00
              </PriceHighlight>
              </td>
            <td>Venda</td>
            <td>15/03/2023</td>
          </tr>
        </tbody>
      </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}