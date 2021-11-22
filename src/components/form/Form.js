import React, {Component} from 'react';  
import "./form.css"
import Select from '../select/Select';
import CheckBoxx from '../checkBoxx/CheckBoxx';   
import TextArea from '../textArea/TextArea'; 
import Submit from '../submit/Submit'

class Form extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newAction: {
        condition: '',
        operation: '',
        check: '',
        comment: ''
      },

      conditionOptions: ['Запущено', 'Остановлено', 'Недоступно'],
      operationOptions: ['Старт', 'Стоп', 'Перезапуск'],
      checkOptions: ['Снять heapdump', 'Снять threaddump']

    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newAction: {
          ...prevState.newAction,
          [name]: value
        }
      }),
      
    );
  }

  handleTextArea(e) {
   
    let value = e.target.value;
    this.setState(
      prevState => ({
        newAction: {
          ...prevState.newAction,
          comment: value
        }
      })
      
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newAction.check.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newAction.check.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newAction.check, newSelection];
    }

    this.setState(prevState => ({
      newAction: { ...prevState.newAction, check: newSelectionArray }
    }));
  }



  handleFormSubmit(e) {
    alert( this.state.newAction.operation + ' ' + this.state.newAction.comment);
    e.preventDefault();
  }
  
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>

       <Select 
       title={'Состояние'}
       name={'condition'}
       options = {this.state.conditionOptions} 
       value = {this.state.newAction.condition}
       placeholder = {'Выберите состояние'}
       handleChange = {this.handleInput}
       />

       <Select 
       title={'Операция'}
       name={'operation'}
       options = {this.state.operationOptions} 
       value = {this.state.newAction.operation}
       placeholder = {'Выберите операцию'}
       handleChange = {this.handleInput}
       />
       
       <TextArea 
        title={"Комментарий"}
        value={this.state.newAction.comment}
        name={"comment"}
        rows={5}
        handleChange={this.handleTextArea}
        placeholder={"Введите комментарий"}
        /> 


        <CheckBoxx
        title={""}
        name={"check"}
        options={this.state.checkOptions}
        selectedOptions={this.state.newAction.check}
        handleChange={this.handleCheckBox} /> 
        
        <Submit 
        action={this.handleFormSubmit}
        
        title={"Выполнить"}
        
        
        /> 
        
      </form>
    );
  }
}

export default Form;
