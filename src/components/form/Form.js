import React from 'react';  
import './form.css'
import { useSelector,useDispatch} from 'react-redux';


import Select from '../Select/Select';
import CheckBox from '../CheckBox/Checkbox';
import { SWITCH_OPTION } from '../../redux/reducers/types';
import {switchOption} from '../../redux/actionCreators/SwitchOption';

export default function Form ()  {

    const conditionValue = useSelector(state => state.condition.options);
    const operationValue = useSelector(state => state.operation);
    const checkBoxValue = useSelector(state => state.checkbox);

    const dispatch = useDispatch();
    
    return(
        <div className='container'>
        <Select
            title={'Состояние'}
            name={'condition'}
            options = {conditionValue} 
            value = {conditionValue}
            handdleE = {(event) => dispatch(switchOption(event.target.value))}
        />
        <Select 
            title={'Операция'}
            name={'operation'}
            options = {operationValue} 
            value = {operationValue}
            onChange = {() => dispatch(SWITCH_OPTION())}
        />
        <CheckBox
            title={""}
            name={"check"}
            options={checkBoxValue}
            selectedOptions={checkBoxValue} 
        />
        </div>)
        };