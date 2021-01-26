import React from "react"
import { Logo } from "./Logo"
import { GitHubLink } from "./GitHubLink"

export type HeaderProps = {
  repository?: string
}
export const Header = (props: HeaderProps) => {
  const { repository } = props

  return (
    <>
      {repository && (
        <GitHubLink url={`https://github.com/corets/${repository}`} />
      )}
      <Logo />
    </>
  )
}
