/* eslint-disable react/no-danger */
import { sizes } from 'components/constants'
import Main from 'components/Main'
import { FrontMatter } from 'components/photos/types'
import md from 'markdown-it'
import React from 'react'
import styled from 'styled-components'

interface Props {
  frontmatter: FrontMatter,
  content: string
}

const Post: React.FC<Props> = ({ frontmatter, content }) => (
  <Wrapper>
    <Top>
      <Title>{frontmatter.title}</Title>
      <Description>{frontmatter.metaDesc}</Description>
    </Top>
    <Markdown dangerouslySetInnerHTML={{ __html: md({ html: true }).render(content) }} />
  </Wrapper>
)

const Wrapper = styled(Main)``

const Top = styled.div`
  display: grid;
  gap: ${sizes.xxs};
  padding: ${sizes.s};
`

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: 400;
`

const Description = styled.h3`
  margin: 0;
  text-align: center;
  font-weight: 300;
`

const Markdown = styled.div`
  .img {
    display: grid;
    gap: ${sizes.xxs};
    width: 100%;
    margin: 1em 0;

    p {
      img {
        max-width: 100%;
        max-height: 75vh;
      }
      margin: 0;
      width: fit-content;
    }

    figcaption {
      em {
        font-weight: 300;
      }
    }
  }

  .two-columns {
    display: grid;

    @media screen and (min-width: ${sizes.breakpoints['min-width']}) {
      grid: 1fr / 1fr 1fr;
      gap: ${sizes.xs};
    }
  }
`

export default Post
