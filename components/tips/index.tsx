import { sizes } from 'components/constants'
import Main from 'components/Main'
import React from 'react'
import styled from 'styled-components'
import { Tips as ITips } from './types'

const Tips: React.FC<ITips> = () => (
  <Wrapper>
    Tips
  </Wrapper>
)

const Wrapper = styled(Main)`
  display: grid;
  grid: auto auto / 1fr;
  gap: ${sizes.m};
`

export default Tips
