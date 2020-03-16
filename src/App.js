import React, {Component} from 'react';
import Todos from './components/TODOs';
import AddTODO from './components/AddTODO';

class App extends Component {
  
  state = {
    todos: [
      {id: 1, content: "but some milk"},
      {id: 2, content: "play some PS4"}
    ]
  }
  
  addTODO = (todo) => {
    todo.id = Math.random();
    let newTODOs = [...this.state.todos, todo]
    this.setState({
       todos: newTODOs 
      });
  }

  deleteTODO = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ // or if the key and value are the same, write a single parameter 
      todos: todos  
    });
  }

  render() {
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">TODOs</h1>
        <Todos todos={this.state.todos} deleteTODO={this.deleteTODO}/>
        <AddTODO addTODO={this.addTODO}/>
      </div>
    );
  }
}

export default App;
