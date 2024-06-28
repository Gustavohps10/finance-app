import styled, { css, DefaultTheme } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0 0 0 / 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 51.2rem;
  border-radius: 6px;
  padding: 4rem 4.8rem;
  background-color: ${(props) => props.theme.color['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${(props) => props.theme.color['gray-900']};
      color: ${(props) => props.theme.color['gray-300']};
      padding: 1.6rem;

      &::placeholder {
        color: ${(props) => props.theme.color['gray-500']};
      }
    }
  }
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 2.4rem;
  right: 2.4rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.color['gray-500']};
`
export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  margin-top: 0.8rem;
`

interface TransactionTypeButtonProps {
  $variant: 'income' | 'outcome'
}

const transactionsTypeButtonVariantStyles = (
  theme: DefaultTheme,
  variant: TransactionTypeButtonProps['$variant'],
) =>
  ({
    income: css`
      svg {
        color: ${theme.color['green-500']};
      }

      &[data-state='checked'] {
        color: ${(props) => props.theme.color.white};
        background-color: ${(props) => props.theme.color['green-500']};

        svg {
          color: ${(props) => props.theme.color.white};
        }
      }
    `,
    outcome: css`
      svg {
        color: ${theme.color['red-500']};
      }

      &[data-state='checked'] {
        color: ${(props) => props.theme.color.white};
        background-color: ${(props) => props.theme.color['red-500']};

        svg {
          color: ${(props) => props.theme.color.white};
        }
      }
    `,
  })[variant]

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background-color: ${(props) => props.theme.color['gray-700']};
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme.color['gray-300']};
  transition: all 0.1s linear;

  ${({ theme, $variant }) =>
    transactionsTypeButtonVariantStyles(theme, $variant)}

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme.color['gray-600']};
  }
`
