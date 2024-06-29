import { MagnifyingGlass } from 'phosphor-react'
import { Button } from '../Button'
import * as S from './styled'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  })

  function handleSearchTransactions(data: SearchFormInputs) {
    console.log(data)
  }

  return (
    <S.SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Procurar transação"
        {...register('query')}
      />
      <Button
        type="submit"
        $outline="outlined"
        $color="primary"
        disabled={isSubmitting}
      >
        <MagnifyingGlass size={20} />
        Buscar
      </Button>
    </S.SearchFormContainer>
  )
}
