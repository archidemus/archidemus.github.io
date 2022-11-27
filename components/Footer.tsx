import { sizes } from 'components/constants'
import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <Wrapper>
    Archidemus. All rights reserved.
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${sizes.l} 0;
  font-size: 12px;
  font-weight: 200;
`

export default Footer
