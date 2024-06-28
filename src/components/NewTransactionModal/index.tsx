import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Button } from '../Button'
import * as S from './styled'
import * as Dialog from '@radix-ui/react-dialog'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form action="">
          <input
            type="text"
            placeholder="Descrição"
            name="description"
            id="description"
          />
          <input type="number" placeholder="Preço" name="price" id="price" />
          <input
            type="text"
            placeholder="Categoria"
            name="category"
            id="category"
          />
          <S.TransactionType>
            <S.TransactionTypeButton $variant="income" value="income">
              <ArrowCircleUp size={24} /> Entrada
            </S.TransactionTypeButton>
            <S.TransactionTypeButton $variant="outcome" value="outcome">
              <ArrowCircleDown size={24} /> Saída
            </S.TransactionTypeButton>
          </S.TransactionType>
          <Button type="submit">Cadastrar</Button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
