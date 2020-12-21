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
            // TODO: add custom input component
        },
        {
            name: 'toppings',
            title: 'Toppings',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'topping'}]}]
        },

    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            topping0: 'toppings.0.name',
            topping1: 'toppings.1.name',
            topping2: 'toppings.2.name',
            topping3: 'toppings.3.name',
        },
        prepare: ({title, media, ...toppings}) => {
            console.log(title, media, toppings, Object.values(toppings).filter(Boolean).join(', '));
            // filter undefined toppings out
            // return preview object
            return (
                {
                    title,
                    media,
                    subtitle: Object.values(toppings).filter(Boolean).join(', ')
                }
            )

        }
    }
}