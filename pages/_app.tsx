import GlobalStyle from 'components/GlobalStyle'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default App
