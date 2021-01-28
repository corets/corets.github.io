import React from "react"
import { Logo } from "./Logo"
import styled from "styled-components"

const Root = styled.div`
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
  }
`

export const Landing = () => {
  return (
    <Root>
      <Logo />

      <p>
        Central hub for <b>@corets</b> packages
      </p>
    </Root>
  )
}
