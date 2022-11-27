import { sizes } from 'components/constants'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

interface IMenuItems {
  label: string
  key: string
  link?: string
}

const MENU_ITEMS: IMenuItems[] = [
  {
    label: 'Photograpy',
    key: '',
  },
  {
    label: 'Code tips',
    key: 'tips',
  },
]

interface IMenu {
  color?: 'black' | 'white'
}

const Menu = ({ color = 'black' }: IMenu) => {
  const {
    pathname, push,
  } = useRouter()

  const isActive = (key: string): boolean => pathname === (`/${key}`)

  const goToSection = ({ key, link }: { key: string, link?: string }) => {
    if (link) {
      window.location.replace(link)
    } else {
      push(`/${key}`)
    }
  }

  return (
    <Wrapper color={color}>
      <Archidemus
        color={color}
        onClick={() => push('/')}
      >
        Archidemus.
      </Archidemus>
      {MENU_ITEMS.map(
        ({ label, key, link }) => (
          <Button
            key={key}
            active={isActive(key)}
            color={color}
            onClick={() => goToSection({ link, key })}
          >
            {label}
          </Button>
        ),
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: ${sizes.m};
  padding: ${sizes.m} ${sizes.s};
  max-width: ${sizes.contentWidth};
  margin: 0 auto;

  * {
    font-size: 1em;
    color: ${({ color }) => color};
  }
`

const Archidemus = styled.div`
  font-weight: 400;
  font-family: Bitter;
  font-size: 1.3em;
  cursor: pointer;
  text-underline-offset: ${sizes.xxs};
  &:hover {
    text-decoration: underline;
  }
`

const Button = styled.button <{ active: boolean }>`
  border: 0;
  background: transparent;
  font-weight: 300;
  padding: 0;
  margin: 0;
  letter-spacing: 0;
  color: ${({ color }) => color};
  text-decoration: ${({ active }) => (active ? 'underline' : 'inherit')};
  text-decoration-thickness: 1px;
  cursor: pointer;
  text-underline-offset: ${sizes.xs};
  &:hover {
    text-decoration: underline;
  }
`

export default Menu
