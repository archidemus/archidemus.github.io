import { sizes } from 'components/constants'
import Main from 'components/Main'
import loader from 'helpers/loader'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Photos as IPhotos } from './types'

const gap = sizes.m
const Photos: React.FC<IPhotos> = ({ photos }) => (
  <Wrapper>
    {photos.map(({ small }) => (
      <Photo key={small.path}>
        <Image
          src={small.path}
          width={small.width}
          height={small.height}
          loader={loader}
          unoptimized
          alt={small.path}
        />
      </Photo>
    ))}
  </Wrapper>
)

const Wrapper = styled(Main)`
  display: grid;
  gap: ${gap};
  grid: 1fr / auto auto auto;
  height: min-content;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Photos
