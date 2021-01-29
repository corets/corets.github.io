/** @jsx jsx */
import { useRef, useState } from 'react'
import { jsx, Layout as BaseLayout, Main } from 'theme-ui'
import { Global } from '@emotion/react'
import global from '~theme/global'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { MainContainer } from '../MainContainer'
import * as styles from './styles'
import styled from 'styled-components'

const MainContainerWrapper = styled.div `
  margin-top: 100px;
  overflow-x: hidden;
`

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const nav = useRef()

  return (
    <BaseLayout sx={{ '& > div': { flex: '1 1 auto' } }} data-testid="layout">
      <Global styles={global} />
      <Main sx={styles.main}>
        <div sx={styles.wrapper}>
          <Sidebar
            ref={nav}
            open={open}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />
          <MainContainer data-testid="main-container">
            <Header onOpen={() => setOpen(s => !s)} />
            <MainContainerWrapper className="main-content">
              {children}
            </MainContainerWrapper>
          </MainContainer>
        </div>
      </Main>
    </BaseLayout>
  )
}
