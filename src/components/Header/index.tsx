import * as S from './styled'
import logoImage from '../../assets/logo.svg'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImage} alt="" />
        <button>Nova Transação</button>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
