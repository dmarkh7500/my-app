import React from "react";
import './select.css'

const Select = ({
    name, 
    title, 
    value, 
    
    placeholder,
    options}) => {
    return(
        <div className="form-group">
            <label htmlFor={name}> {title} </label>
            <select
              name={name}
              value={value}
              
              >
              <option value="" disabled>{placeholder}</option>
              {options.map(option => {
                return (
                  <option
                    key={option}
                    value={option}
                    label={option}>{option}
                  </option>
                );
              })}
            </select>
      </div>)
}
 
export default Select;
