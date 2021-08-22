import { MdStore as icon } from 'react-icons/md';

export default {
  // computer name
  name: 'storeSettings',
  // visible title
  title: 'Settings',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Store Name', // this is human readable
      type: 'string',
      description: 'Name of store',
    },
    {
      name: 'slicemasters',
      title: 'Slicemasters Currently Slicing',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      name: 'hotSlices',
      title: 'Hot Right Now!',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
    },
  ],
};
