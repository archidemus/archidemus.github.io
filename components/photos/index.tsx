import { sizes } from 'components/constants'
import Main from 'components/Main'
import Fullscreen from 'components/photos/Fullscreen'
import PhotoSpinner from 'components/static/PhotoSpinner'
import Head from 'next/head'
import React, { useState } from 'react'
import styled from 'styled-components'
import { ActionT, Photos as IPhotos } from './types'

const gap = sizes.s
const Photos = ({ photos }: IPhotos) => {
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
      {photos.map((photo, i) => {
        const { small, path } = photo
        return (
          <PhotoSpinner
            key={path}
            src={path}
            width={small.width}
            height={small.height}
            alt={path}
            onSelected={() => setSelectedPhotoIndex(i)}
          />

        )
      })}
      {isPhotoSelected && <Fullscreen doAction={doAction} {...photos[selectedPhotoIndex]} />}
    </Wrapper>
  )
}

const Wrapper = styled(Main)`
  display: flex;
  flex-wrap: wrap;
  gap: ${gap};
  height: min-content;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export default Photos
