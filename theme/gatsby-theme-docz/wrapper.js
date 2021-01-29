import React from "react"
import favicon from "../../../public/favicon.png"
import { Helmet } from "react-helmet-async"
import styled from '@emotion/styled'

const Root = styled.div `
  display: flex;
  
  @media(min-width: 1500px) {
    justify-content: center;
  }
`

const Wrapper = ({ children }) => {
  return (
    <Root>
      <Helmet>
        <link rel="icon" type="image/png" href={ favicon }/>
        <meta property="og:image" content="/public/logo-text.png"/>
      </Helmet>
      { children }
    </Root>
  )
}
export default Wrapper
