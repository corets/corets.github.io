/** @jsx jsx */
import { jsx, Box, Flex, useColorMode } from 'theme-ui'
import { useConfig, useCurrentDoc } from 'docz'

import * as styles from './styles'
import { Edit, Menu, Sun, Github } from '../Icons'
import Search from './Search'

export const Header = props => {
  const { onOpen } = props
  const {
    themeConfig: { showDarkModeSwitch, showMarkdownEditButton },
  } = useConfig()
  const { edit = true, repository, ...doc } = useCurrentDoc()
  const [colorMode, setColorMode] = useColorMode()

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  const showEdit = showMarkdownEditButton && edit && doc.link
  const showRepository = !! repository

  return (
    <div sx={styles.wrapper} data-testid="header">
      <Box sx={styles.menuIcon}>
        <button sx={styles.menuButton} onClick={onOpen}>
          <Menu size={25} />
        </button>
      </Box>
      <div sx={styles.innerContainer}>
        <Search />
        {/*<Flex>*/}
          {/*{showDarkModeSwitch && (*/}
          {/*  <button sx={styles.darkModeButton} onClick={toggleColorMode}>*/}
          {/*    <Sun size={15} />*/}
          {/*  </button>*/}
          {/*)}*/}
        {/*</Flex>*/}
        <div sx={styles.actions}>
          {showRepository && (
            <a
              sx={styles.action}
              href={`https://github.com/corets/${repository}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github width={14} />
              <Box sx={{ pl: 2 }}>GitHub</Box>
            </a>
          )}
          {showRepository && showEdit && (
            <span sx={styles.action}>|</span>
          )}
          {showEdit && (
            <a
              sx={styles.action}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Edit width={14} />
              <Box sx={{ pl: 2 }}>Edit page</Box>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
