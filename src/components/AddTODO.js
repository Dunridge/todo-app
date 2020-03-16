import React, { Component } from 'react'

class AddTODO extends Component {
    state = {
        content: ''
      }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTODO(this.state);
        this.setState({
            content: ''
        });

    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
          );
    }
}
 
export default AddTODO;