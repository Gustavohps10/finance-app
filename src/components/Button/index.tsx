import { ButtonHTMLAttributes } from 'react'
import * as S from './styled'

export type ButtonProps = {
  color?: 'primary' | 'danger'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return <S.ButtonContainer {...props}>{children}</S.ButtonContainer>
}
