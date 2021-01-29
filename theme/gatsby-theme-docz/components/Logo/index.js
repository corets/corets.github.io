/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link, useConfig } from 'docz'

import * as styles from './styles'

import image from "../../../../../public/logo.svg"

export const Logo = () => {
  const config = useConfig()

  return (
    <Flex alignItems="center" sx={styles.logo} data-testid="logo">
      <Link to="/" sx={styles.link}>
          <img src={image} sx={styles.image}/>
      </Link>
    </Flex>
  )
}
