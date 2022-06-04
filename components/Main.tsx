import { sizes } from 'components/constants'
import Menu from 'components/Menu'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Footer from './Footer'

type Props = {
  children: ReactNode
  className?: string | undefined
}

const Main: React.FC<Props> = ({ children, className }) => (
  <Wrapper>
    <Menu color="black" />
    <Content className={className}>
      {children}
    </Content>
    <Footer />
  </Wrapper>
)

const Wrapper = styled.div`
  display: grid;
  grid: min-content auto min-content / 1fr;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${sizes.m};
  min-height: 100vh;
  overflow-y: auto;
`

const Content = styled.div`
  width: 100%;
  max-width: ${sizes.contentWidth};
  margin: 0 auto;
`

export default Main
