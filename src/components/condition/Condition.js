import React from 'react';
import './Condition.css';

export default function Condition () {
    return (
<div>
<p className ="header">Состояние:</p>
     <select>
      <option value="launched">Запущено</option>
      <option value="stopped">Остановлено</option>
      <option value="not-available">Недоступно</option>
    </select>

    </div>
    )
}

