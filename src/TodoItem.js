import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => (
  <div>
    <h3>{todo.title}</h3>
    <p>{todo.description}</p>
    <button onClick={() => onToggle(todo.id)}>
      {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
    </button>
    <button onClick={() => onEdit(todo)}>Edit</button>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </div>
);

export default TodoItem;
