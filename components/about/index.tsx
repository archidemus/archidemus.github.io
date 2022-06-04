import { sizes } from 'components/constants'
import Main from 'components/Main'
import React from 'react'
import styled from 'styled-components'

const About: React.FC = () => (
  <Wrapper>
    <Title>About</Title>
  </Wrapper>
)

const Wrapper = styled(Main)``

const Title = styled.h1`
  padding: ${sizes.l} 0;
`

export default About
