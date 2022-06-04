import { sizes } from 'components/constants'
import Main from 'components/Main'
import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import { Posts as IPosts } from './types'

const Photos: React.FC<IPosts> = ({ posts }) => {
  const firstPost = posts[0]
  const restPosts = posts.slice(0, -1)

  return (
    <Wrapper>
      {firstPost && <Post {...firstPost} />}
      <Posts>
        {restPosts.map((post) => (
          <Post key={post.slug} {...post} />
        ))}
      </Posts>
    </Wrapper>
  )
}

const Wrapper = styled(Main)`
  display: grid;
  grid: auto auto / 1fr;
  gap: ${sizes.m};
`

const Posts = styled.div`
  font-size: 12px;
  display: grid;
  grid: 1fr / 1fr 1fr;
  gap: ${sizes.m};
`

export default Photos
