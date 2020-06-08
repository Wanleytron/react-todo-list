import React, { Component } from 'react';
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state={
    items: [
      {
        id:1,
        title: 'Wake Up'
      },
      {
        id: 2,
        title: 'Make Breakfast'
      },
    ],
    // id: uuid(),
    item: '',
    editItem: false,
  }

  handleChange = (e)=>{
    console.log(e)
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    console.log(' submit')
  }
  clearList = () => {
    console.log('clear list')
  }
  handleDelete = (id) => {
    console.log(`handle delete ${id}`)
  }
  handleEdit = (id) => {
    console.log(`handle edit ${id}`)
  }

  render(){
  return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className='text-center text-capitalize'>Todo Input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
  );
  }
}

export default App;
