import * as S from './styled'
import logoImage from '../../assets/logo.svg'
import { Button } from '../Button'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImage} alt="" />
        <Button>Nova Transação</Button>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
