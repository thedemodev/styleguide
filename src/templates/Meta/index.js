import createEditorialSchema from '../Editorial'

import { Headline } from '../../components/Typography/Interaction'

export default (options = {}) => createEditorialSchema({
  TitleBlockHeadline: Headline,
  ...options
})