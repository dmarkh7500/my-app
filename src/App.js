import React from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import Condition from './components/condition/Condition';
import Operation from './components/operation/Operation';
import Comment from './components/comment/Comment';
import Checkbox from './components/checkbox/Checkbox';
import Button from './components/button/button';



function App() {

const condition1 = useSelector(state =>  state.condition[0].name) 
const condition2 = useSelector(state =>  state.condition[1].name)
const condition3 = useSelector(state =>  state.condition[2].name)

const operation1 = useSelector(state =>  state.operation[0].name) 
const operation2 = useSelector(state =>  state.operation[1].name)
const operation3 = useSelector(state =>  state.operation[2].name)

const handlerChange = e => {

  
}


  return (
    
    <div className="App">
      <div>
        <p className ="header">Состояние</p>
          <select  onChange={handlerChange}>
            <Condition name = {condition1} />
            <Condition name = {condition2} />
            <Condition name = {condition3} />
          </select>
      </div>

      <div> 
        <p className ="header">Операция:</p>
          <select>
            <Operation name = {operation1} />
            <Operation name = {operation2} />
            <Operation name = {operation3} />
          </select>
      </div>
      
      
      <Comment />
      <div className = 'checkbox'>
        <Checkbox name = 'Снять heapdump' />
        <Checkbox name = 'Снять threaddump' />
      </div>
      <Button />
    </div>
  );
}

export default App;
