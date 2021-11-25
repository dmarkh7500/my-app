import React from "react";
import './select.css'
console.log(2);
const Select = ({
    name, 
    title, 
    value,
    handdleE, 
    placeholder,
    options}) => {
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
