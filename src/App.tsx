import { ThemeProvider } from 'styled-components'
import { theme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'

export function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  )
}
