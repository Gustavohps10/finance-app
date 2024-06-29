import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Button } from '../Button'
import * as S from './styled'
import * as Dialog from '@radix-ui/react-dialog'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const NewTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(NewTransactionFormSchema),
    defaultValues: {
      type: 'outcome',
    },
  })

  async function handleNewTransaction(data: NewTransactionFormInputs) {
    await createTransaction(data)
    reset()
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <S.TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <S.TransactionTypeButton $variant="income" value="income">
                  <ArrowCircleUp size={24} /> Entrada
                </S.TransactionTypeButton>

                <S.TransactionTypeButton $variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} /> Saída
                </S.TransactionTypeButton>
              </S.TransactionType>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            Cadastrar
          </Button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
