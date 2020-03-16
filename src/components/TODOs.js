import React from 'react';

const TODOs = ({todos, deleteTODO}) => {
    
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTODO(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos left, yay!</p>
    );
    
    return(
        <div className="todos collection">
            {todoList}
        </div>
    );
}

export default TODOs;