import { faAngleLeft, faAngleRight, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sizes } from 'components/constants'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ActionT, Photo as PhotoI } from './types'

interface FullscreenI extends PhotoI {
  doAction: (action: ActionT) => void
}

interface ActionsI {
  [key: string]: ActionT
}

const Fullscreen: React.FC<FullscreenI> = ({ big, doAction }) => {
  const onKeyDown = ({ key }: KeyboardEvent) => {
    const actions: ActionsI = {
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
      <Image src={big.path} alt={big.path} />
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

const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  padding: ${sizes.m} 0;
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

export default Fullscreen
