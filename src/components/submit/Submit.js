import React from "react";
import './submit.css'

const Submit = (props) => {
    return (
        <input className='button'
         type = 'submit'
         value = {props.title}
          onClick={props.action}
        />
          
      );
}

export default Submit;