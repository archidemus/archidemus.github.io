import { sizes } from 'components/constants'
import cardShadow from 'components/styles/cardShadow'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { Post as PostI } from './types'

const Post: React.FC<PostI> = ({ frontmatter, slug }) => {
  const router = useRouter()

  return (
    <Wrapper onClick={() => router.push(`${router.asPath}/${slug}`)}>
      <Image
        src={frontmatter.mainImage.url}
        alt={frontmatter.title}
      />
      <Text>
        <Title>{frontmatter.title}</Title>
        <Description>{frontmatter.metaDesc}</Description>
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid: min-content 1fr / 1fr;
  cursor: pointer;
  :hover {
    h2 {
      text-decoration: underline;
    }
  }
  transition: all 0.3s ease-in-out;
  ${cardShadow}
`

const Title = styled.h2`
  font-weight: 400;
`

const Description = styled.h3`
  font-weight: 200;
  font-family: Fira Sans;
`
const Text = styled.div`
  background: white;
  padding: ${sizes.s};
`

const Image = styled.img`
  width: 100%;
`

export default Post
