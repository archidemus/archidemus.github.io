import { createGlobalStyle } from 'styled-components'
import fontImports from 'components/styles/fontImports'
import { sizes, colors } from './constants'

export default createGlobalStyle`
  ${fontImports}

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Fira Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, sans-serif;
    color: black;
    font-size: 12px;
    @media screen and (min-width: ${sizes.breakpoints['min-width']}) {
      font-size: inherit;
    }
    background: ${colors.background};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: Fira Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, sans-serif;
  }


  h1, h2, h3, h4, h5, h6 {
    font-family: Bitter;
    margin: 0px;
  }
`
