import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1.6rem;

  input {
    flex: 1;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color['gray-900']};
    color: ${(props) => props.theme.color['gray-300']};
    padding: 1.6rem;
    border: none;

    &::placeholder {
      color: ${(props) => props.theme.color['gray-500']};
    }
  }
`
