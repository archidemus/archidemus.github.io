import { sizes } from 'components/constants'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const MENU_ITEMS: Array<{ key: string, link?: string, label: string }> = [
  // {
  //  label: 'Photograpy',
  //  key: 'photos',
  // },
  // {
  //  label: 'YouTube',
  //  key: 'youtube',
  //  link: 'https://www.youtube.com/channel/UCNxTnrMSslZrl5m2_NT4Uew/featured',
  // },
  // {
  //  label: 'About',
  //  key: 'about',
  // },
]

type Props = { color?: 'black' | 'white' }

const Menu: React.FC<Props> = ({ color = 'black' }) => {
  const router = useRouter()

  const isActive = (key: string): boolean => router.pathname.includes(key)

  const goToSection = ({ key, link }: { key: string, link?: string }) => {
    if (link) {
      window.location.replace(link)
    } else {
      router.push(`/${key}`)
    }
  }

  return (
    <Wrapper color={color}>
      <Archidemus
        color={color}
        onClick={() => router.push('/')}
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
  justify-content: space-between;
  padding: ${sizes.m} 0;
  max-width: ${sizes.menuWidth};
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
  text-underline-offset: ${sizes.xs};
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
  text-transform: capitalize;
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
