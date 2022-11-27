import { useQuery } from '@tanstack/react-query'
import Main from 'components/Main'
import Head from 'next/head'
import React from 'react'
import Gist from 'react-gist'
import styled from 'styled-components'
import api from './api'

const Tips = () => (
  <Wrapper>
    <Head>
      <title>Code tips | Archidemus</title>
      <meta name="description" content="Useful code I use every day" />
    </Head>
    <GistsList />
  </Wrapper>
)

const GistsList = () => {
  const { data: gistList } = useQuery(['getGistsList'], api.getGistsList)
  return (
    <GistsListWrapper>
      {gistList?.map(
        (gist) => (
          <CustomGist id={gist.id} />
        ),
      )}
    </GistsListWrapper>
  )
}

const CustomGist = ({ id }: { id: string }) => <Gist id={id} />

const Wrapper = styled(Main)`
  display: flex;
`

const GistsListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 36px;
`

export default Tips
