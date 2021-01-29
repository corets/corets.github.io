import React from "react"
import styled from "@emotion/styled"

import image from "../../public/logo-text.svg"

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
      <img src={image} />

      <p>
        Central hub for <b>@corets</b> packages
      </p>
    </Root>
  )
}
