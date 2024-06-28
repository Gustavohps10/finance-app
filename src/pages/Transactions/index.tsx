import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import * as S from './styled'

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <S.TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight>R$ 5.000,00</S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/08/2024</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight variant="outcome">
                  - R$ 2.000,00
                </S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/08/2024</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight>R$ 5.000,00</S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/08/2024</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight>R$ 5.000,00</S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/08/2024</td>
            </tr>
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </>
  )
}
