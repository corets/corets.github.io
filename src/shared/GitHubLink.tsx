import React from "react"
import styled from "@emotion/styled"

const Root = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;

  @media (max-width: 920px) {
    left: auto;
    top: 11px;
    right: 90px;
  }

  a,
  span {
    font-size: 14px;
    font-family: "Source Sans Pro", sans-serif;
    color: #67788a;
    text-decoration: none;
  }

  span {
    @media (min-width: 920px) {
      display: none;
    }
  }
`

export type GitHubLinkProps = {
  url: string
}
export const GitHubLink = (props: GitHubLinkProps) => {
  const { url } = props

  return (
    <Root>
      <a href={url}>View on GitHub</a> <span>|</span>
    </Root>
  )
}
