import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { lab } from 'd3-color'
import { mUp, tUp } from './mediaQueries'
import {
  sansSerifRegular18,
  sansSerifRegular19,
  sansSerifRegular23
} from '../Typography/styles'

const subjectStyle = {
  ...sansSerifRegular19,
  lineHeight: '27px',
  [mUp]: {
    ...sansSerifRegular23,
  }
}

const subject = css({
  ...subjectStyle
})

const subjectSmall = css({
  ...subjectStyle,
  [mUp]: {
    ...sansSerifRegular18,
    lineHeight: '24px'
  }
})

const Subject = ({ children, color, collapsedColor, columns }) => {
  const labColor = lab(color)
  const labCompactColor = lab(collapsedColor || color)

  const style = css({
    color: labCompactColor.l > 50
      ? labCompactColor.darker(0.6)
      : labCompactColor.brighter(3.0),
    marginRight: !!children.length ? '.5em' : 0,
    minWidth: '100px',
    [tUp]: {
      color: labColor.l > 50 ? labColor.darker(2.0) : labColor.brighter(3.0),
    }
  })
  return (
    <span {...style} {...(columns === 3 ? subjectSmall : subject)}>
      {children}
    </span>
  )
}

Subject.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  collapsedColor: PropTypes.string,
  columns: PropTypes.number
}

export default Subject