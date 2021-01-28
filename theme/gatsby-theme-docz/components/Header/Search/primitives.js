import React from 'react'
import styled, { css } from 'styled-components'
import { Search } from '../../Icons'
import { Algolia } from 'styled-icons/fa-brands/Algolia'

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
  color: #67788a;
`

const focus = css`
  background: white;
  color: ${props => props.theme.darkBlue};
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: ${props => props.theme.darkBlue};
    margin: 0.3em;
  }
`

const collapse = css`
  width: 0;
  cursor: pointer;
  color: ${props => props.theme.lightBlue};
  + ${SearchIcon} {
    color: white;
  }
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${props => props.theme.gray};
  }
`

const expand = css`
  background: ${props => props.theme.veryLightGray};
  width: 20em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  background: transparent;
  transition: ${props => props.theme.shortTrans};
  border-radius: ${props => props.theme.smallBorderRadius};
  ${props => (props.collapse ? collapse : expand)};
  border-bottom: 1px solid #ced4de;
  padding: 5px 0px;
  margin: 0px;
  width: 0px;
  transition: width 0.2s;
  font-size: 16px;
  color: #67778a;
  font-family: 'Source Sans Pro', sans-serif;
  &:focus {
    width: 300px;
    transition: width 0.2s;
  }
  
  ::placeholder {
    color: #67778a;
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 100;
  }
`

export const Form = styled.form`
  position: relative;
  top: 0px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 25px;
  cursor: pointer;
  background: white;
  z-index: 1;
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  right: 0px;
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 20em;
  box-shadow: 0px 0px 3px #aaa;
  padding: 10px;
  background: white;
  border-radius: 5px;
  border: 1px solid #ced4de;
  font-size: 16px;
  
  li + li {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #ced4de;
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${props => props.theme.lightBlue};
    background: ${props => props.theme.darkBlue};
  }
  header {
    display: flex;
    justify-content: space-between;
    border: 0px;
    font-size: 14px !important;
    h3 {
      color: white;
      background: ${props => props.theme.gray};
      border-radius: ${props => props.theme.smallBorderRadius};
      padding: 0px;
      margin: 0px;
    }
  }
  .ais-Hits {
    border: 0px;
    padding-top: 0px !important;
    margin-top: 10px;
  }
  .ais-Hits-list {
    margin: 0px;
  }
  .ais-Hits-item {
    cursor: pointer;
    &:hover {
      h4 {
        text-decoration: underline;
      }
    }
    h4 {
      font-size: 16px;
      font-weight: bold;
      color: black;
    }
    mark {
      background: #3276c6;
      color: white;
      border-radius: 3px;
      padding: 0px 5px;
    }
  }
  .ais-Snippet {
    font-size: 16px;
    line-height: 16px;
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`

const PoweredBySpan = styled.span`
  font-size: 0.6em;
  text-align: end;
  padding: 0;
`

export const PoweredBy = () => (
  <PoweredBySpan>
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </PoweredBySpan>
)
