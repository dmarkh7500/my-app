import React from "react";
import './select.css'

const Select = ({
    name, 
    title, 
    value,
    handdleE, 
    placeholder,
    options}) => {
        console.log('select', options)
    return(
        
        <div className="form-group">
            
            <label htmlFor={name}> {title} </label>
            <select
              name={name}
              value={value}
              onChange={handdleE}
              >
              <option value="" disabled>{placeholder}</option>
              
              {options.map(option => {
                  
                return (
                  <option
                    key={option.id}
                    value={option.title}
                    label={option.id}>{option}
                    
                  </option>
                );
              })}
            </select>
      </div>)
}
 
export default Select;
