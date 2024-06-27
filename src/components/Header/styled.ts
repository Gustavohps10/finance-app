import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.color['gray-900']};
  padding: 4rem 0 12rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
