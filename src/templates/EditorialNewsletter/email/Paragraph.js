import React from 'react'
import colors from '../../../theme/colors'
import { fontFamilies } from '../../../theme/fonts'
import { Editorial } from '../../../components/Typography'

export const paragraphStyle = {
  color: colors.text,
  fontSize: '19px',
  lineHeight: '158%',
  fontFamily: fontFamilies.serifRegular
}

export const linkStyle = {
  color: colors.text,
  textDecoration: 'underline',
  textDecorationSkip: 'ink'
}

export const Br = () => <br />
export const Link = ({ children, href, title }) => (
  <a href={href} title={title} style={linkStyle}>
    {children}
  </a>
)

// emails normally don't do glamor but
// Editorial.fontRule is manually injected in ./Container
export default ({ children }) => (
  <p style={paragraphStyle} className={Editorial.fontRule}>
    {children}
  </p>
)
