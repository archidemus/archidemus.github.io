import { sizes } from 'components/constants'
import Main from 'components/Main'
import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import { Posts as IPosts } from './types'

const Photos: React.FC<IPosts> = ({ posts }) => (
  <Wrapper>
    {posts.map((post) => (
      <Post key={post.slug} {...post} />
    ))}
  </Wrapper>
)

const Wrapper = styled(Main)`
  display: grid;
  grid-gap: 10px;
  grid: inhetir / repeat(auto-fill, calc((${sizes.contentWidth} - (${sizes.s} * 2)) / 3 ));
  height: min-content;
  justify-content: center;
  grid-template-rows: masonry;
`

export default Photos
