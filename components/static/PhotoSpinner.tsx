import Image, { ImageProps } from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'

interface IPhotoSpinner extends ImageProps {
  onSelected?: () => void
}

const PhotoSpinner = ({
  onSelected,
  className,
  ...props
}: IPhotoSpinner) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <Photo
      onClick={() => onSelected && onSelected()}
      className={className}
    >
      <Image
        onLoadingComplete={() => setIsLoaded(true)}
        {...props}
      />
      {!isLoaded && <Loading>Loading...</Loading>}
    </Photo>
  )
}

const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
`

export const Loading = styled.span`
  position: absolute;
  color: grey;
`

export default PhotoSpinner
