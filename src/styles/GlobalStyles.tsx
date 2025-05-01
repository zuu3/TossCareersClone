/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'

const GlobalStyles = () => (
  <Global
    styles={css`
      *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html, body {
        height: 100%;
        font-family: 'Pretendard Variable', system-ui, -apple-system, 'Segoe UI',
                     Roboto, 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.5;
        background-color: #fff;
        color: #333;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      button {
        all: unset;
        cursor: pointer;
      }
    `}
  />
)

export default GlobalStyles
