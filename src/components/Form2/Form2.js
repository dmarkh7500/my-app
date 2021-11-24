import React from 'react';  
import './Form2.css'
import { useSelector } from 'react-redux';

import Select from '../Select/Select';
import CheckBox from '../CheckBox/CheckBox';

export default function Form2 ()  {

    const conditionValue = useSelector(state => state.condition);
    const operationValue = useSelector(state => state.operation);
    const checkBoxValue = useSelector(state => state.checkbox);
    
    return(
        <div className='container'>
        <Select
            title={'Состояние'}
            name={'condition'}
            options = {conditionValue} 
            value = {conditionValue}
        />
        <Select 
            title={'Операция'}
            name={'operation'}
            options = {operationValue} 
            value = {operationValue}
        />
        <CheckBox
            title={""}
            name={"check"}
            options={checkBoxValue}
            selectedOptions={checkBoxValue}
        />

        </div>
    )
}