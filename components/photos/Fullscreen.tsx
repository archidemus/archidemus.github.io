import { faAngleLeft, faAngleRight, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sizes } from 'components/constants'
import PhotoSpinner from 'components/static/PhotoSpinner'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ActionT, Photo as PhotoI } from './types'

interface IFullscreen extends PhotoI {
  doAction: (action: ActionT) => void
}

interface IActions {
  [key: string]: ActionT
}

const Fullscreen = ({ path, doAction }: IFullscreen) => {
  const onKeyDown = ({ key }: KeyboardEvent) => {
    const actions: IActions = {
      Escape: 'close',
      ArrowRight: 'next',
      ArrowLeft: 'prev',
    }

    const action = actions[key]

    if (action) doAction(action)
  }
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  })

  return (
    <Wrapper>
      <Close onClick={() => doAction('close')}>
        <FontAwesomeIcon icon={faClose} />
      </Close>
      <Arrow onClick={() => doAction('prev')}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Arrow>
      <ImageWrapper>
        <PhotoSpinner
          src={path}
          alt={path}
          fill
          style={{ objectFit: 'contain' }}
          quality={100}
        />
      </ImageWrapper>
      <Arrow onClick={() => doAction('next')}>
        <FontAwesomeIcon icon={faAngleRight} />
      </Arrow>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid: 100% / min-content 1fr min-content;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  justify-items: center;
  align-items: center;
  top: 0px;
  left: 0px;
`

const Arrow = styled.button`
  background-color: black;
  border: none;
  cursor: pointer;
  color: white;
  padding: ${sizes.xxl} ${sizes.s};
`

const Close = styled.button`
  background-color: black;
  border: none;
  cursor: pointer;
  color: white;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: ${sizes.s};
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export default Fullscreen
