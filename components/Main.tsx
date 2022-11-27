import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { sizes } from 'components/constants'
import Menu from 'components/Menu'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Footer from './Footer'

const queryClient = new QueryClient()

type IMain = {
  children: ReactNode
  className?: string | undefined
}

const Main = ({ children, className }: IMain) => (
  <Wrapper>
    <QueryClientProvider client={queryClient}>
      <Menu color="black" />
      <Content className={className}>
        {children}
      </Content>
      <Footer />
    </QueryClientProvider>
  </Wrapper>
)

const Wrapper = styled.div`
  display: grid;
  grid: min-content auto min-content / 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.2em;
  min-height: 100vh;
  overflow-y: auto;
`

const Content = styled.div`
  width: 100%;
  max-width: ${sizes.contentWidth};
  margin: 0 auto;
`

export default Main
