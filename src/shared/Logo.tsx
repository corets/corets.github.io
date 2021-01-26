import React from "react"
import styled from "@emotion/styled"
import logo from "../../public/logo-text.svg"

const Root = styled.div`
  margin: 50px 0px;
  display: flex;

  @media (max-width: 920px) {
    justify-content: center;
  }

  img {
    width: 300px;
  }
`

export const Logo = () => (
  <Root>
    <img src={logo} />
  </Root>
)
