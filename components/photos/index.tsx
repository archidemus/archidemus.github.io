import { sizes } from 'components/constants'
import Main from 'components/Main'
import Fullscreen from 'components/photos/Fullscreen'
import loader from 'helpers/loader'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import { ActionT, Photos as PhotosI } from './types'

const gap = sizes.s
const Photos: React.FC<PhotosI> = ({ photos }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(-1)
  const isPhotoSelected = selectedPhotoIndex > -1
    && selectedPhotoIndex < photos.length

  const doAction = (action: ActionT): void => {
    const close = () => setSelectedPhotoIndex(-1)
    const next = () => selectedPhotoIndex < photos.length - 1
      && setSelectedPhotoIndex(selectedPhotoIndex + 1)
    const prev = () => selectedPhotoIndex > 0
      && setSelectedPhotoIndex(selectedPhotoIndex - 1)

    const actions = { next, prev, close }

    actions[action]()
  }
  return (
    <Wrapper>
      <Head>
        <title>Photos | Archidemus</title>
        <meta name="description" content="All my photographs." />
      </Head>
      {photos.reverse().map((photo, i) => {
        const { small } = photo
        return (
          <Photo
            key={small.path}
            onClick={() => setSelectedPhotoIndex(i)}
          >
            <Image
              src={small.path}
              width={small.width}
              height={small.height}
              loader={loader}
              unoptimized
              alt={small.path}
            />
          </Photo>
        )
      })}
      {isPhotoSelected && <Fullscreen doAction={doAction} {...photos[selectedPhotoIndex]} />}
    </Wrapper>
  )
}

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
  cursor: pointer;
`

export default Photos
