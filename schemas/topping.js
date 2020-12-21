import {FaPepperHot as toppingIcon, FaLeaf as vegetarianIcon} from 'react-icons/fa';
export default {
    // computer name
    name: 'topping',
    // visible title
    title: 'Topping',
    icon: toppingIcon,
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Topping Name', // this is human readable
            type: 'string',
            description: 'What is the name of the topping?'
        },
        {
            name: 'vegetarian',
            title: 'Vegetarian', // this is human readable
            type: 'boolean',
            description: 'Is this a vegetarian Pizza?',
            options: {
                layout: 'checkbox'
            }
        },

    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian'
        },
        prepare: ({name, vegetarian}) => ({
            title: `${name} ${vegetarian ? '(veg)' : ''}`
        })
    }
}