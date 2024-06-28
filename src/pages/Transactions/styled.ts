import styled, { DefaultTheme } from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 6.4rem auto 0;
  padding: 2rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.8rem;
  border-radius: 8px;
  overflow: hidden;

  td {
    padding: 2rem 3.2rem;
    background: ${(props) => props.theme.color['gray-700']};

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 2.4rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 2.4rem;
    }
  }
`
interface PriceHighlightProps {
  variant?: 'income' | 'outcome'
}

const PRICE_HIGHLIGHT_COLORS = (theme: DefaultTheme, color = 'income') =>
  ({
    income: theme.color['green-300'],
    outcome: theme.color['red-500'],
  })[color]

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, variant }) => PRICE_HIGHLIGHT_COLORS(theme, variant)};
`
