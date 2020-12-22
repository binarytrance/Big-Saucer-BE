import React from 'react';
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'

const PriceInput = ({type, value, onChange, inputComponent}) => {
    const createPatchFromValue = (value) => {
        console.log('creatpfv', value);

        // here Sanity is going to patch the value to itself for things like live updates and live preview
        return PatchEvent.from(value === '' ? unset() : set(Number(value)))
    }
    const formatMoney = Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR'}).format
    return (
        <div>
            <h3>{type.title} - {value ? formatMoney(value/100) : 0}</h3>
            <p>{type.description}</p>
            <input type={type.name} value={value} onChange={event => onChange(createPatchFromValue(event.target.value))} ref={inputComponent}/>
        </div>
    );
}

PriceInput.focus = function() {
    this._inputElement.focus()
}

export default PriceInput;
