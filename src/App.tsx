import { ThemeProvider } from 'styled-components'
import { theme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={theme['dark']}>
      <h1>Ola</h1>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
