import React from "react";
import './Operation.css';

export default function Operation () {
    return(
    <div> 
        <p className ="header">Операция:</p>
     <select>
      <option value="start">Старт</option>
      <option value="stop">Стоп</option>
      <option value="restart">Перезапуск</option>
    </select>
    </div>
    )
}

