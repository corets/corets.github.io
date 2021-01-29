import React from "react"
import styled from "@emotion/styled"

const Root = styled.div`
  display: flex;
  //justify-content: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #ddd;
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
