import { MdTextFields } from 'react-icons/md'
import commonBlockSettings from '../partials/commonBlockSettings'
import previewTitle from '../../utils/previewTitle'

export default {
  ...commonBlockSettings,
  title: 'Heading',
  name: 'Heading',
  type: 'object',
  preview: previewTitle('Heading', 'heading', MdTextFields),
  fields: [
    { title: 'Heading', name: 'heading', type: 'string', group: 'content' },

    {
      title: 'Heading type',
      name: 'headingType',
      type: 'string',
      options: {
        list: [
          { title: 'H1', value: 'h1' },
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
        ],
      },
      group: 'content',
    },
  ],
}
