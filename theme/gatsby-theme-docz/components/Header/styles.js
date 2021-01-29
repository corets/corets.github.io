import * as mixins from '~utils/mixins'
import { media } from '~theme/breakpoints'

export const wrapper = {
  position: 'relative',
  zIndex: 1,
  height: 1
}

export const innerContainer = {
  ...mixins.centerAlign,
  px: 4,
  position: 'relative',
  justifyContent: 'space-between',
  height: 0,
}

export const menuIcon = {
  display: 'none',
  position: 'fixed',
  top: 15,
  left: 15,
  width: 40,
  height: 40,
  background: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: 5,
  zIndex: 10,
  [media.tablet]: {
    display: 'flex',
  },
}

export const menuButton = {
  ...mixins.ghostButton,
  color: 'header.text',
  opacity: 0.5,
  cursor: 'pointer',
}

export const darkModeButton = {
  ...mixins.centerAlign,
  outline: 'none',
  p: '12px',
  border: 'none',
  borderRadius: 9999,
  fontSize: 0,
  fontWeight: 600,
  cursor: 'pointer',
  position: 'fixed',
  top: 20,
  right: 20
}

export const actions = {
  position: 'absolute',
  top: 20,
  left: 0,
  display: 'flex',
  [media.tablet]: {
    right: 30,
    left: 'auto'
  }
}

export const action = {
  ...mixins.centerAlign,
  color: 'muted',
  fontSize: 1,
  textDecoration: 'none',
  borderRadius: 'radius',
  marginRight: 10,
  ':hover': {
    color: 'blue'
  }
}
