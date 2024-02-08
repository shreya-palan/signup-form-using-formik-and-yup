import React from 'react';
import { ErrorMessage, useField } from 'formik';

/*TextField takes a prop named label and ...props refers to any other additional
  properties that is externally destructed*/
const TextField = ({label, ...props }) => {

    const [field, meta] = useField(props);
    /*useField to get the field and meta properties
      field: Contains information about the field's value,name,onChange etc.
      meta: Contains information about the field's state, such as whether it's been touched,its error status etc.*/
    
  return (
    <div className='mb-2'>
        {/* Renders a label for the input field. The htmlFor attribute is set to the name of the field obtained from field.name*/}
        <label htmlFor={field.name}>{label}</label>
        {/*The className is dynamically set based on whether the field has been touched and has an error(a bootstrap style for validation.*/}
      <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
      /*The spread operator (...field and ...props) is used to pass down the field's properties and any additional props to the input element*/
      {...field} {...props}
      autocomplete='off' />
      <ErrorMessage component="div" name={field.name} className='error'/>
    </div>
  )
}

export default TextField
