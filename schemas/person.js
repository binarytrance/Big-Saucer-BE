import { MdPerson as icon } from 'react-icons/md';

export default {
  // computer name
  name: 'person',
  // visible title
  title: 'Person',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Slice Master', // this is human readable
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug', // this is human readable
      type: 'slug',
      description: 'Slugified text',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description', // this is human readable
      type: 'text',
      description: 'Tell us about the person',
    },
    {
      name: 'image',
      title: 'Image', // this is human readable
      type: 'image',
    },
  ],
};
