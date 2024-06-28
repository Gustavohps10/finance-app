import { MagnifyingGlass } from 'phosphor-react'
import { Button } from '../Button'
import * as S from './styled'

export function SearchForm() {
  return (
    <S.SearchFormContainer>
      <input type="text" placeholder="Procurar transação" />
      <Button type="submit" $outline="outlined" $color="primary">
        <MagnifyingGlass size={20} />
        Buscar
      </Button>
    </S.SearchFormContainer>
  )
}
