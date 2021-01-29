import { media } from '~theme/breakpoints'

export const container = {
  position: 'relative',
  width: 900,
  maxWidth: 'calc(100vw - 250px)',
  margin: 0,
  padding: 0,
  px: 4,
  [media.tablet]: {
    maxWidth: '100vw',
    pb: 4,
    px: 4,
  },
}
