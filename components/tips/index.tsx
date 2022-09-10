import { useQuery } from '@tanstack/react-query'
import Main from 'components/Main'
import React from 'react'
import Gist from 'react-gist'
import styled from 'styled-components'
import api from './api'

const Tips: React.FC = () => (
  <Wrapper>
    <GistsList />
  </Wrapper>
)

const GistsList: React.FC = () => {
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

const CustomGist: React.FC<{ id: string }> = ({ id }) => <Gist id={id} />

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
