import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from '.'

const buttonColors = (theme: DefaultTheme, buttonColor = 'primary') =>
  ({
    primary: css`
      color: ${theme.color['gray-100']};
      background: ${theme.color['green-500']};

      &:not(:disabled):hover {
        background: ${theme.color['green-700']};
      }
    `,
    danger: css`
      color: ${theme.color['gray-100']};
      background: ${theme.color['red-500']};

      &:not(:disabled):hover {
        background: ${theme.color['red-700']};
      }
    `,
  })[buttonColor]

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  outline: none;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  transition: all 0.2s ease;

  cursor: pointer;
  padding: 1.6rem;
  font-weight: bold;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  //colors
  ${({ theme, color }) => buttonColors(theme, color)}
`
