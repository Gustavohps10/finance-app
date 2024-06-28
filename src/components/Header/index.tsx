import * as S from './styled'
import logoImage from '../../assets/logo.svg'
import { Button } from '../Button'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImage} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>Nova Transação</Button>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
