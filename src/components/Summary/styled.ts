import styled, { DefaultTheme, css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;

  margin-top: -8rem;
`
interface SummaryCardProps {
  color?: 'green' | 'gray'
}

const summaryCardColors = (theme: DefaultTheme, color = 'gray') =>
  ({
    green: css`
      background-color: ${theme.color['green-700']};
    `,
    gray: css`
      background-color: ${theme.color['gray-600']};
    `,
  })[color]

export const SummaryCard = styled.div<SummaryCardProps>`
  border-radius: 6px;
  padding: 3.2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.color['gray-300']};
    font-size: 1.6rem;
  }

  strong {
    display: block;
    margin-top: 1.6rem;
    font-size: 3.2rem;
  }

  ${({ theme, color }) => summaryCardColors(theme, color)}
`
