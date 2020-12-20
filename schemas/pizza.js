import {MdLocalPizza as pizzaIcon} from 'react-icons/md';
export default {
    // computer name
    name: 'pizza',
    // visible title
    title: 'pizza',
    icon: pizzaIcon,
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Pizza Name', // this is human readable
            type: 'string',
            description: 'Name of pizza'
        },
        {
            name: 'slug',
            title: 'Slug', // this is human readable
            type: 'slug',
            description: 'Slugified text',
            options: {
                source: 'name',
                maxLength: 100
            }
        },
        {
            name: 'image',
            title: 'Pizza Image', // this is human readable
            type: 'image',
            description: 'Image of pizza',
            options: {
                hotspot: true
            }
        },
        {
            name: 'price',
            title: 'Price', // this is human readable
            type: 'number',
            description: 'Price of pizza',
            validation: Rule => Rule.min(1000).max(50000)
        },
        {
            name: 'image',
            title: 'Pizza Image', // this is human readable
            type: 'image',
            description: 'Image of pizza',
            options: {
                hotspot: true
            }
            // TODO: add custom input component
        },
    ]
}