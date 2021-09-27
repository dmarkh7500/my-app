import React from 'react';
import './App.css';
import Condition from './components/condition/Condition';
import Operation from './components/operation/Operation';
import Comment from './components/comment/Comment';
import Checkbox from './components/checkbox/Checkbox';
import Submit from './components/submit/Submit';

function App() {
  return (
    
    <div className="App">
      <Condition />
      <Operation />
      <Comment />
      <Checkbox />
      <Submit />
    </div>
  );
}

export default App;
