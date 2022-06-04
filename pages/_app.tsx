import GlobalStyle from 'components/GlobalStyle'
import type { AppProps } from 'next/app'
import React from 'react'
import styled from 'styled-components'

const App = ({ Component, pageProps }: AppProps) => (
  <Wrapper>
    <GlobalStyle />
    <Component {...pageProps} />
  </Wrapper>
)

const Wrapper = styled.div``

export default App
