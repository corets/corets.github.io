import React from "react"
import styled from "@emotion/styled"

const Root = styled.div`
  display: flex;
  //justify-content: center;

  img {
    border-radius: 10px;
    box-shadow: 3px 3px 5px #aaa;
  }
`

export type ImageFrameProps = {
  src: string
}

export const ImageFrame = (props: ImageFrameProps) => {
  const { src } = props

  return (
    <Root>
      <img src={src} />
    </Root>
  )
}
