import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { fontStyles } from '../../theme/fonts'

const styles = {
  base: css({
    margin: '0 0 10px 0'
  }),
  editorial: css({
    ...fontStyles.serifTitle,
    fontSize: 19,
    lineHeight: '22px'
  }),
  interaction: css({
    ...fontStyles.sansSerifMedium,
    fontSize: 19,
    lineHeight: '22px'
  }),
  scribble: css({
    ...fontStyles.cursiveTitle,
    fontSize: 19,
    lineHeight: '22px'
  }),
  bigger: css({ fontSize: 28, lineHeight: '28px' })
}

export const Editorial = ({ children, bigger }) => {
  const headlineStyles = css(
    styles.base,
    styles.editorial,
    bigger && styles.bigger
  )

  return <h1 {...headlineStyles}>{children}</h1>
}

export const Interaction = ({ children, bigger }) => {
  let headlineStyles = css(
    styles.base,
    styles.interaction,
    bigger && styles.bigger
  )
  return <h1 {...headlineStyles}>{children}</h1>
}

export const Scribble = ({ children, bigger }) => {
  let headlineStyles = css(
    styles.base,
    styles.scribble,
    bigger && styles.bigger
  )
  return <h1 {...headlineStyles}>{children}</h1>
}

Editorial.propTypes = {
  children: PropTypes.node,
  bigger: PropTypes.bool
}
