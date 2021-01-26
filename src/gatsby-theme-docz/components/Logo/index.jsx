import React from "react"
import styled from "@emotion/styled"
import logo from "../../../../../public/logo.svg"

const Root = styled.div`
  margin: 0px 0px;

  img {
    height: 30px;
  }
`

export const Logo = () => (
  <Root>
    <a href="/">
      <img src={logo} />
    </a>
  </Root>
)
